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

  // API Endpoint: Orders Handling
  if (req.url.startsWith('/api/orders')) {
    const ordersFile = path.join(ROOT, 'orders.json');

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const orderData = JSON.parse(body);
          orderData.orderId = orderData.orderId || ('#PS-' + Math.floor(100000 + Math.random() * 900000));
          orderData.createdAt = new Date().toISOString();
          orderData.status = 'Confirmed (Batch #004 Allocated)';

          let orders = [];
          if (fs.existsSync(ordersFile)) {
            try {
              orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
            } catch (err) {
              orders = [];
            }
          }
          orders.unshift(orderData);
          fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), 'utf8');

          console.log(`[ORDER] Created new order ${orderData.orderId} for ${orderData.customer?.fullName || 'Customer'}`);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, order: orderData }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Invalid order JSON payload' }));
        }
      });
      return;
    }

    if (req.method === 'GET') {
      let orders = [];
      if (fs.existsSync(ordersFile)) {
        try {
          orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
        } catch (err) {
          orders = [];
        }
      }
      const urlParams = new URL(req.url, `http://${req.headers.host}`);
      const queryId = urlParams.searchParams.get('id');
      if (queryId) {
        const found = orders.find(o => o.orderId.toLowerCase() === queryId.toLowerCase());
        if (found) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, order: found }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Order not found' }));
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, orders: orders }));
      }
      return;
    }
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
