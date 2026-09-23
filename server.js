const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // Video upload endpoint for saving generated clips
  if (req.method === 'POST' && req.url === '/save-video') {
    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(body);
      // Parse multipart simple
      const boundary = req.headers['content-type'].split('boundary=')[1];
      const parts = buffer.toString('binary').split('--' + boundary);
      
      let filename = 'video_' + Date.now() + '.webm';
      let videoData = null;

      for (let part of parts) {
        if (part.includes('name="filename"')) {
          const match = part.match(/\r\n\r\n(.*?)\r\n/);
          if (match) filename = match[1].trim();
        } else if (part.includes('name="video"')) {
          const headerEnd = part.indexOf('\r\n\r\n') + 4;
          const bodyContent = part.substring(headerEnd, part.length - 2);
          videoData = Buffer.from(bodyContent, 'binary');
        }
      }

      if (videoData) {
        const destPath = path.join(ROOT, 'assets', filename);
        fs.writeFileSync(destPath, videoData);
        console.log(`Saved video to assets/${filename} (${videoData.length} bytes)`);
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', filename }));
    });
    return;
  }

  // Normal static file serving with range support for video streaming
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  const filePath = path.join(ROOT, reqUrl);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  // Support HTTP range requests for videos
  if (req.headers.range && (ext === '.webm' || ext === '.mp4')) {
    const range = req.headers.range;
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filePath, { start, end });

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Create with Purpose Server running at http://localhost:${PORT}`);
});
