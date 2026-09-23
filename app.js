/**
 * CREATE WITH PURPOSE - COMMERCIAL AI VIDEO PORTFOLIO
 * Author: Jerome Cabinta
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initCursorGlow();
  initAudioSynthesizer();
  initShowcaseFilters();
  initSampleOutputViewer();
  initAspectRatioSwitcher();
  initComparisonSlider();
  initVideoTheaterModal();
  initCaseStudyModal();
  initBookingEstimator();
  initMobileMenu();
  initCardHoverVideoPlayback();
});

/* ==========================================================================
   E-Commerce & Brand Commercial Portfolio Projects
   ========================================================================== */
const videoProjects = [
  {
    id: 'project-earbuds',
    title: 'Acoustiq Titanium Pro',
    client: 'Acoustiq Audio • Global Audio Brand',
    category: 'tech',
    duration: '0:30',
    campaignType: 'Global Product Reveal & Performance Ads',
    deliverables: '4K Master (16:9), TikTok/Reels (9:16), Amazon A+ Video (1:1)',
    roas: '+420% ROAS (Meta & TikTok)',
    ctr: '4.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_tech_gadget.jpg',
    video: 'assets/ecom_tech_gadget.webm',
    synopsis: 'High-converting consumer tech commercial showcasing titanium earbuds levitating amidst acoustic ripple rings and water splash micro-physics.',
    strategy: 'Direct-to-consumer launch commercial engineered for high top-of-funnel retention. Utilized 3D CAD conditioning and acoustic wave fluid physics to demonstrate IPX7 water resistance and active noise cancellation.',
    results: 'Drove over $1.2M in pre-orders within the first 14 days of launch with an average ROAS of 4.2x across paid social channels.'
  },
  {
    id: 'project-serum',
    title: 'Aura 24K Botanical Dew',
    client: 'Aura Skincare • Luxury Clean Beauty',
    category: 'beauty',
    duration: '0:25',
    campaignType: 'DTC E-Commerce & Sephora Digital Endcap',
    deliverables: '4K Vertical (9:16), Meta Feed (1:1), Shopify Hero Loop',
    roas: '+380% ROAS (Shopify Scale)',
    ctr: '5.2% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_beauty_serum.jpg',
    video: 'assets/ecom_beauty_serum.webm',
    synopsis: 'Sensory macro cosmetic commercial capturing golden botanical argan oil and pink rosewater splashing dynamically around frosted glass.',
    strategy: 'Crafted a visceral, sensory-first beauty ad highlighting the dual-phase hydration formula. High-speed fluid dynamics and botanical refraction were dialed in to evoke instant luxury texture and absorption.',
    results: 'Increased conversion rate on Shopify product page by +42% and achieved a 5.2% CTR on Meta video ads.'
  },
  {
    id: 'project-energy',
    title: 'Voltaic Energy Citrus Blast',
    client: 'Voltaic Beverages • Performance Energy Drink',
    category: 'beverage',
    duration: '0:20',
    campaignType: 'Amazon Prime Ad & TikTok Spark Campaign',
    deliverables: 'TikTok Hook Suite (9:16), Amazon Video (16:9), Square (1:1)',
    roas: '+340% ROAS (Amazon Ads)',
    ctr: '6.1% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_beverage_splash.jpg',
    video: 'assets/ecom_beverage_splash.webm',
    synopsis: 'Electrifying beverage ad featuring a matte black can bursting through crystal ice cubes and glowing citrus liquid vortex.',
    strategy: 'Explosive 3-second hook designed to disrupt fast-scrolling mobile feeds. Coordinated freeze-frame ice collision physics with high-contrast neon palette to emphasize zero-sugar clean energy.',
    results: 'Achieved a record 6.1% CTR on TikTok and Amazon Sponsored Brand Video, driving top-seller ranking in energy drinks.'
  },
  {
    id: 'project-sneaker',
    title: 'Speedform ZoomX Carbon',
    client: 'Speedform Athletics • Performance Footwear',
    category: 'fashion',
    duration: '0:35',
    campaignType: 'Global Shoe Drop & Digital Billboard',
    deliverables: '4K Broadcast (16:9), 9:16 Reels Cut, 3D Layer Exploded View',
    roas: '+460% ROAS (Global Launch)',
    ctr: '5.8% CTR',
    turnaround: '72 Hours',
    image: 'assets/ecom_sneaker_motion.jpg',
    video: 'assets/ecom_sneaker_motion.webm',
    synopsis: 'Deconstructed 3D performance running sneaker ad revealing interwoven carbon fiber threads, air cushioning, and explosive studio propulsion.',
    strategy: 'Full exploded-view 3D architectural breakdown of the proprietary carbon plate and nitrogen-infused foam. Combined athletic motion blur with laser-focused material macro shots.',
    results: 'The shoe model sold out completely within 48 hours of campaign launch, generating over 14 million organic impressions.'
  },
  {
    id: 'project-hypercar',
    title: 'Apex Spectre EV: Phantom',
    client: 'Apex Automotive • Luxury Electric Vehicles',
    category: 'luxury',
    duration: '0:45',
    campaignType: 'Global Brand Reveal & YouTube Pre-Roll',
    deliverables: '4K Cinema Master (16:9), ACES Color Grade, Spatial Audio Master',
    roas: '+290% ROAS (Qualified Leads)',
    ctr: '4.1% CTR',
    turnaround: '4 Business Days',
    image: 'assets/luxury_commercial.jpg',
    video: 'assets/luxury_commercial.webm',
    synopsis: 'High-end luxury brand commercial capturing an electric hypercar cutting through Nordic coastal mist with reflection physics.',
    strategy: 'Atmospheric Nordic twilight cinematic setting focusing on aerodynamic silhouette and cyan lighting signature. Zero physical vehicle shipment required; rendered entirely from initial CAD files.',
    results: 'Secured 3,800+ VIP pre-reservation test drive deposits across Europe and North America.'
  },
  {
    id: 'project-couture',
    title: 'Maison Lumina: Molten Metal',
    client: 'Maison Lumina Paris • Haute Couture',
    category: 'fashion',
    duration: '0:30',
    campaignType: 'Paris Fashion Week Digital Runway & Editorial',
    deliverables: '9:16 Instagram Video, 4K Display Cut, Vogue Media Kit',
    roas: '+310% ROAS (Engagement)',
    ctr: '4.7% CTR',
    turnaround: '48 Hours',
    image: 'assets/fashion_couture.jpg',
    video: 'assets/fashion_couture.webm',
    synopsis: 'Avant-garde digital fashion commercial showcasing a sculpted molten chrome gown morphing dynamically into silk smoke ribbons.',
    strategy: 'Pioneering digital couture installation blending hyper-detailed chrome cloth simulation with dark volumetric lighting for high-fashion runway immersion.',
    results: 'Featured in Vogue Digital Arts and received the 2025 AI Fashion Film Excellence Award.'
  }
];

/* ==========================================================================
   Ambient Canvas Background Animation
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  const particleCount = 45;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '6, 182, 212' : '139, 92, 246';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   Cursor Glow Follower
   ========================================================================== */
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function update() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(update);
  }
  update();
}

/* ==========================================================================
   Web Audio Commercial Drone Synthesizer (Desktop & Mobile Sync)
   ========================================================================== */
function initAudioSynthesizer() {
  const audioBtn = document.getElementById('audio-toggle');
  const mobileAudioBtn = document.getElementById('mobile-audio-toggle');
  const allAudioBtns = [audioBtn, mobileAudioBtn].filter(Boolean);
  if (allAudioBtns.length === 0) return;

  let audioCtx = null;
  let isPlaying = false;
  let osc1 = null, osc2 = null, filter = null, gainNode = null;

  function updateButtonsUI(playing) {
    allAudioBtns.forEach(btn => {
      const textSpan = btn.querySelector('.audio-status-text');
      if (playing) {
        btn.classList.add('playing');
        if (textSpan) textSpan.textContent = 'CINEMA AUDIO: ON';
      } else {
        btn.classList.remove('playing');
        if (textSpan) textSpan.textContent = 'AMBIENT AUDIO';
      }
    });
  }

  function startAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      osc1 = audioCtx.createOscillator();
      osc2 = audioCtx.createOscillator();
      filter = audioCtx.createBiquadFilter();
      gainNode = audioCtx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, audioCtx.currentTime);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110, audioCtx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, audioCtx.currentTime);
      filter.Q.setValueAtTime(3, audioCtx.currentTime);

      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 3);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc1.start();
      osc2.start();

      isPlaying = true;
      updateButtonsUI(true);
      showToast('Brand Commercial Audio FX Activated');
    } catch (e) {
      console.warn('Web Audio API error:', e);
    }
  }

  function stopAudio() {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
      setTimeout(() => {
        if (osc1) osc1.stop();
        if (osc2) osc2.stop();
        if (audioCtx) audioCtx.close();
        audioCtx = null;
      }, 1000);
    }
    isPlaying = false;
    updateButtonsUI(false);
    showToast('Ambient Audio Muted');
  }

  allAudioBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isPlaying) startAudio();
      else stopAudio();
    });
  });
}

/* ==========================================================================
   Aspect Ratio Switcher
   ========================================================================== */
function initAspectRatioSwitcher() {
  const heroImgWrap = document.querySelector('.hero-img-wrap');
  const ratioBtns = document.querySelectorAll('.ratio-btn');

  ratioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ratioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const ratio = btn.dataset.ratio;
      if (heroImgWrap) {
        heroImgWrap.classList.remove('aspect-9-16', 'aspect-1-1');
        if (ratio === '9-16') heroImgWrap.classList.add('aspect-9-16');
        else if (ratio === '1-1') heroImgWrap.classList.add('aspect-1-1');
      }

      showToast(`Ad Format Switched: ${ratio.replace('-', ':')} (${btn.textContent.trim()})`);
    });
  });
}

/* ==========================================================================
   Card Video Hover Auto-play
   ========================================================================== */
function initCardHoverVideoPlayback() {
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    const video = card.querySelector('video');
    if (video) {
      video.play().catch(() => {});
      card.addEventListener('mouseenter', () => {
        if (video.paused) video.play().catch(() => {});
      });
    }
  });
}

/* ==========================================================================
   Showcase Filter System
   ========================================================================== */
function initShowcaseFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const videoCards = document.querySelectorAll('.video-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      videoCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   Sample Deliverables & Client Output Suite Viewer
   ========================================================================== */
const sampleDeliverablesData = {
  'tech': {
    projectId: 'project-earbuds',
    title: 'Acoustiq Titanium Pro Earbuds',
    client: 'Acoustiq Audio • Global Audio Brand',
    video: 'assets/ecom_tech_gadget.webm',
    poster: 'assets/ecom_tech_gadget.jpg',
    specs: {
      resolution: '3840 x 2160 (4K UHD 60FPS)',
      colorSpace: 'Rec.709 / ACEScc 10-bit',
      audio: '48kHz 24-bit Spatial Foley + Stems',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Acoustiq_Titanium_4K_Master_16x9_60fps.mov', size: '1.42 GB', type: '4K Cinema Master' },
      { name: 'Acoustiq_ViralHook_A_WaterSplash_9x16.mp4', size: '185 MB', type: 'Hook Cut A (Splash)' },
      { name: 'Acoustiq_ViralHook_B_CADDeconstruct_9x16.mp4', size: '192 MB', type: 'Hook Cut B (CAD Orbit)' },
      { name: 'Acoustiq_Shopify_Hero_Loop_1x1.mp4', size: '94 MB', type: 'Shopify PDP Loop' },
      { name: 'Acoustiq_ACES_LUT_Package.cube', size: '12 MB', type: 'Color Grade 3D LUT' },
      { name: 'Worldwide_Perpetual_Ad_License.pdf', size: '1.8 MB', type: 'Commercial Rights' }
    ]
  },
  'beauty': {
    projectId: 'project-serum',
    title: 'Aura 24K Botanical Dew Serum',
    client: 'Aura Skincare • Luxury Clean Beauty',
    video: 'assets/ecom_beauty_serum.webm',
    poster: 'assets/ecom_beauty_serum.jpg',
    specs: {
      resolution: '3840 x 2160 (4K Macro 60FPS)',
      colorSpace: 'ACES HDR 10-bit Wide Gamut',
      audio: '48kHz 24-bit Sensory Dew Audio',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Aura_24K_Botanical_4K_Master_16x9.mov', size: '1.25 GB', type: '4K Master (16:9)' },
      { name: 'Aura_DewSplash_Hook_9x16.mp4', size: '168 MB', type: 'TikTok Hook Cut (9:16)' },
      { name: 'Aura_Sephora_Endcap_Loop_1x1.mp4', size: '88 MB', type: 'Sephora PDP Loop (1:1)' },
      { name: 'Aura_Sensory_Audio_Foley_Stem.wav', size: '64 MB', type: 'Uncompressed Audio Stem' },
      { name: 'Commercial_Media_Buy_Release.pdf', size: '1.4 MB', type: 'Commercial Rights' }
    ]
  },
  'beverage': {
    projectId: 'project-energy',
    title: 'Voltaic Energy Citrus Vortex Blast',
    client: 'Voltaic Beverages • Performance Energy',
    video: 'assets/ecom_beverage_splash.webm',
    poster: 'assets/ecom_beverage_splash.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS)',
      colorSpace: 'DCI-P3 High Dynamic Range',
      audio: 'High-Impact Bass & Ice Sound FX',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Voltaic_CitrusBlast_4K_Master_16x9.mov', size: '1.38 GB', type: '4K Cinema Commercial' },
      { name: 'Voltaic_IceSmash_Hook_9x16.mp4', size: '175 MB', type: 'TikTok Spark Cut (9:16)' },
      { name: 'Voltaic_Amazon_SponsoredVideo_1x1.mp4', size: '92 MB', type: 'Amazon A+ Feed Video' },
      { name: 'Voltaic_Audio_Master_Stem.wav', size: '72 MB', type: 'Audio Stem Master' }
    ]
  },
  'fashion': {
    projectId: 'project-sneaker',
    title: 'Speedform ZoomX: Zero-G Carbon',
    client: 'Speedform Athletics • Performance Footwear',
    video: 'assets/ecom_sneaker_motion.webm',
    poster: 'assets/ecom_sneaker_motion.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS)',
      colorSpace: 'Rec.709 High Contrast',
      audio: 'Sub-Bass Propulsion Foley',
      turnaround: '72 Hours Shipped'
    },
    files: [
      { name: 'Speedform_ZoomX_4K_Broadcast_Master.mov', size: '1.55 GB', type: '4K Broadcast Master' },
      { name: 'Speedform_ExplodedCAD_Cut_9x16.mp4', size: '198 MB', type: 'Viral 3D CAD Hook (9:16)' },
      { name: 'Speedform_Instagram_Story_9x16.mp4', size: '160 MB', type: 'Reels Cut (9:16)' },
      { name: 'Speedform_Footwear_3D_ColorGrade.cube', size: '15 MB', type: 'Color Grade 3D LUT' }
    ]
  }
};

function initSampleOutputViewer() {
  const skuChips = document.querySelectorAll('.sku-chip');
  const formatTabs = document.querySelectorAll('.sample-tab-btn');
  const videoBox = document.getElementById('sample-video-box');
  const videoPlayer = document.getElementById('sample-video-player');
  const hudFormat = document.getElementById('sample-hud-format');
  const clientNameEl = document.getElementById('sample-client-name');
  const projectNameEl = document.getElementById('sample-project-name');
  const specResEl = document.getElementById('sample-spec-res');
  const specColorEl = document.getElementById('sample-spec-color');
  const specAudioEl = document.getElementById('sample-spec-audio');
  const specTurnaroundEl = document.getElementById('sample-spec-turnaround');
  const filesListEl = document.getElementById('sample-files-list');
  const downloadBtn = document.getElementById('sample-download-pkg-btn');
  const previewModalBtn = document.getElementById('sample-preview-modal-btn');
  const playOverlayTrigger = document.getElementById('sample-play-modal-trigger');

  if (!videoPlayer || !filesListEl) return;

  let currentSku = 'tech';
  let currentFormat = '16-9';

  function renderSku(skuKey) {
    const data = sampleDeliverablesData[skuKey];
    if (!data) return;

    if (clientNameEl) clientNameEl.textContent = data.client;
    if (projectNameEl) projectNameEl.textContent = data.title;
    if (specResEl) specResEl.textContent = data.specs.resolution;
    if (specColorEl) specColorEl.textContent = data.specs.colorSpace;
    if (specAudioEl) specAudioEl.textContent = data.specs.audio;
    if (specTurnaroundEl) specTurnaroundEl.textContent = data.specs.turnaround;

    videoPlayer.src = data.video;
    videoPlayer.poster = data.poster;
    videoPlayer.currentTime = 0;
    videoPlayer.play().catch(() => {});

    // Render files list
    filesListEl.innerHTML = '';
    data.files.forEach(file => {
      const li = document.createElement('li');
      li.className = 'sample-file-item';
      li.innerHTML = `
        <div class="sample-file-info">
          <div class="sample-file-icon"><i data-lucide="file-video"></i></div>
          <div class="sample-file-meta">
            <span class="sample-file-name" title="${file.name}">${file.name}</span>
            <span class="sample-file-type">${file.type}</span>
          </div>
        </div>
        <span class="sample-file-size">${file.size}</span>
      `;
      li.addEventListener('click', () => {
        showToast(`Selected Deliverable: ${file.name} (${file.size})`);
      });
      filesListEl.appendChild(li);
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function applyFormat(formatKey) {
    currentFormat = formatKey;
    if (videoBox) {
      videoBox.classList.remove('aspect-9-16', 'aspect-1-1');
      if (formatKey === '9-16') {
        videoBox.classList.add('aspect-9-16');
        if (hudFormat) hudFormat.textContent = 'VIRAL HOOK (9:16 TIKTOK)';
      } else if (formatKey === '1-1') {
        videoBox.classList.add('aspect-1-1');
        if (hudFormat) hudFormat.textContent = 'PDP HERO LOOP (1:1 SHOPIFY)';
      } else {
        if (hudFormat) hudFormat.textContent = '4K MASTER PRORES 422 (16:9)';
      }
    }
  }

  skuChips.forEach(chip => {
    chip.addEventListener('click', () => {
      skuChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSku = chip.dataset.sku;
      renderSku(currentSku);
      showToast(`Loaded Sample Deliverables: ${sampleDeliverablesData[currentSku].title}`);
    });
  });

  formatTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      formatTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const format = tab.dataset.format;
      applyFormat(format);
      showToast(`Deliverable Format: ${tab.textContent.trim()}`);
    });
  });

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const data = sampleDeliverablesData[currentSku];
      downloadBtn.style.transform = 'scale(0.96)';
      setTimeout(() => { downloadBtn.style.transform = ''; }, 200);
      showToast(`✓ Download Package Initialized: ${data.title} Deliverables (.ZIP - 1.84 GB)`);
    });
  }

  function openModalForCurrent() {
    const data = sampleDeliverablesData[currentSku];
    if (data && data.projectId) {
      const playBtn = document.querySelector(`[data-action="play-video"][data-project-id="${data.projectId}"]`);
      if (playBtn) playBtn.click();
    }
  }

  if (previewModalBtn) previewModalBtn.addEventListener('click', openModalForCurrent);
  if (playOverlayTrigger) playOverlayTrigger.addEventListener('click', openModalForCurrent);

  renderSku('tech');
}

/* ==========================================================================
   Storyboard vs AI Render Comparison Slider
   ========================================================================== */
function initComparisonSlider() {
  const viewport = document.getElementById('comparison-viewport');
  const overlay = document.getElementById('comp-overlay');
  const handle = document.getElementById('comp-handle');
  if (!viewport || !overlay || !handle) return;

  let isDragging = false;

  function syncWidth() {
    const rect = viewport.getBoundingClientRect();
    viewport.style.setProperty('--comp-width', `${rect.width}px`);
  }

  window.addEventListener('resize', syncWidth);
  syncWidth();

  function updateSlider(xPos) {
    const rect = viewport.getBoundingClientRect();
    let x = xPos - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    overlay.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  }

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  viewport.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches[0]) return;
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchcancel', () => { isDragging = false; });
  
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   4K Commercial Ad Video Theater Modal Player
   ========================================================================== */
function initVideoTheaterModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const heroTrigger = document.getElementById('hero-play-trigger');
  const showreelBtn = document.getElementById('hero-showreel-cta');
  
  const theaterVideo = document.getElementById('theater-video');
  const theaterTitle = document.getElementById('theater-title');
  const theaterClient = document.getElementById('theater-client');
  const theaterStrategy = document.getElementById('theater-strategy');
  const theaterDeliverables = document.getElementById('theater-deliverables');
  const theaterRoas = document.getElementById('theater-roas');
  const theaterTurnaround = document.getElementById('theater-turnaround');

  const playPauseBtn = document.getElementById('theater-play-toggle');
  const playIcon = document.getElementById('theater-play-icon');
  const pauseIcon = document.getElementById('theater-pause-icon');
  const timecode = document.getElementById('theater-timecode');
  const progressBar = document.getElementById('theater-progress-bar');
  const scrubber = document.getElementById('theater-scrubber');

  let currentProject = null;

  function openProject(projectId) {
    const project = videoProjects.find(p => p.id === projectId) || videoProjects[0];
    currentProject = project;

    if (theaterVideo) {
      theaterVideo.src = project.video;
      theaterVideo.currentTime = 0;
      theaterVideo.play().catch(() => {});
    }

    if (theaterTitle) theaterTitle.textContent = project.title;
    if (theaterClient) theaterClient.textContent = project.client;
    if (theaterStrategy) theaterStrategy.textContent = project.strategy;
    if (theaterDeliverables) theaterDeliverables.textContent = project.deliverables;
    if (theaterRoas) theaterRoas.textContent = project.roas;
    if (theaterTurnaround) theaterTurnaround.textContent = project.turnaround;

    if (playIcon) playIcon.style.display = 'none';
    if (pauseIcon) pauseIcon.style.display = 'block';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (theaterVideo) {
    theaterVideo.addEventListener('timeupdate', () => {
      const cur = theaterVideo.currentTime;
      const dur = theaterVideo.duration || 30;
      const min = Math.floor(cur / 60);
      const sec = Math.floor(cur % 60);
      const totMin = Math.floor(dur / 60);
      const totSec = Math.floor(dur % 60);
      if (timecode) {
        timecode.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')} / ${String(totMin).padStart(2, '0')}:${String(totSec).padStart(2, '0')}`;
      }
      if (progressBar) {
        progressBar.style.width = `${(cur / dur) * 100}%`;
      }
    });

    theaterVideo.addEventListener('ended', () => {
      theaterVideo.currentTime = 0;
      theaterVideo.play().catch(() => {});
    });
  }

  if (playPauseBtn && theaterVideo) {
    playPauseBtn.addEventListener('click', () => {
      if (theaterVideo.paused) {
        theaterVideo.play().catch(() => {});
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      } else {
        theaterVideo.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    });
  }

  if (scrubber && theaterVideo) {
    scrubber.addEventListener('click', (e) => {
      const rect = scrubber.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      theaterVideo.currentTime = ratio * (theaterVideo.duration || 30);
    });
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (theaterVideo) theaterVideo.pause();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === ' ' && theaterVideo) {
      e.preventDefault();
      if (theaterVideo.paused) {
        theaterVideo.play().catch(() => {});
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      } else {
        theaterVideo.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    }
  });

  if (heroTrigger) {
    heroTrigger.addEventListener('click', () => openProject('project-earbuds'));
  }
  if (showreelBtn) {
    showreelBtn.addEventListener('click', () => openProject('project-earbuds'));
  }

  // Bind Card Play Buttons
  document.querySelectorAll('[data-action="play-video"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.projectId;
      openProject(id);
    });
  });
}

/* ==========================================================================
   Client Case Study Modal (Clean, Non-Technical)
   ========================================================================== */
function initCaseStudyModal() {
  const modal = document.getElementById('casestudy-modal');
  const closeBtn = document.getElementById('casestudy-close-btn');
  const titleEl = document.getElementById('cs-title');
  const clientEl = document.getElementById('cs-client');
  const strategyEl = document.getElementById('cs-strategy');
  const deliverablesEl = document.getElementById('cs-deliverables');
  const resultsEl = document.getElementById('cs-results');
  const roasEl = document.getElementById('cs-roas');
  const turnaroundEl = document.getElementById('cs-turnaround');
  const ctaBtn = document.getElementById('cs-book-cta');

  function openCaseStudy(projectId) {
    const project = videoProjects.find(p => p.id === projectId) || videoProjects[0];

    if (titleEl) titleEl.textContent = project.title;
    if (clientEl) clientEl.textContent = project.client;
    if (strategyEl) strategyEl.textContent = project.strategy;
    if (deliverablesEl) deliverablesEl.textContent = project.deliverables;
    if (resultsEl) resultsEl.textContent = project.results;
    if (roasEl) roasEl.textContent = project.roas;
    if (turnaroundEl) turnaroundEl.textContent = project.turnaround;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseStudy();
  });

  document.querySelectorAll('[data-action="view-case-study"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.projectId;
      openCaseStudy(id);
    });
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      closeCaseStudy();
      const bookingSection = document.getElementById('booking');
      if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   E-Commerce Campaign & ROI Calculator
   ========================================================================== */
function initBookingEstimator() {
  const scopeSelect = document.getElementById('est-scope');
  const modelSelect = document.getElementById('est-model');
  const audioSelect = document.getElementById('est-audio');
  const turnaroundSelect = document.getElementById('est-turnaround');

  const priceDisplay = document.getElementById('est-price-val');
  const turnaroundDisplay = document.getElementById('est-time-val');
  const submitBtn = document.getElementById('booking-submit-btn');

  function calculate() {
    let basePrice = 1800;
    let days = 3;

    if (scopeSelect) {
      if (scopeSelect.value === 'starter-pack') { basePrice = 1800; days = 3; }
      else if (scopeSelect.value === 'growth-scale') { basePrice = 3600; days = 5; }
      else if (scopeSelect.value === 'omnichannel-launch') { basePrice = 6800; days = 8; }
      else if (scopeSelect.value === 'monthly-retainer') { basePrice = 5200; days = 4; }
    }

    if (modelSelect && modelSelect.value === 'custom-lora') {
      basePrice += 1000;
      days += 1;
    }

    if (audioSelect && audioSelect.value === 'spatial-sfx') {
      basePrice += 600;
    }

    if (turnaroundSelect && turnaroundSelect.value === 'rush') {
      basePrice = Math.round(basePrice * 1.35);
      days = Math.max(2, Math.round(days * 0.6));
    }

    if (priceDisplay) priceDisplay.textContent = `$${basePrice.toLocaleString()}`;
    if (turnaroundDisplay) turnaroundDisplay.textContent = `${days} Business Days`;
  }

  if (scopeSelect) scopeSelect.addEventListener('change', calculate);
  if (modelSelect) modelSelect.addEventListener('change', calculate);
  if (audioSelect) audioSelect.addEventListener('change', calculate);
  if (turnaroundSelect) turnaroundSelect.addEventListener('change', calculate);

  calculate();

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Campaign Brief Received! Jerome will send your custom ad sample within 24 hours.');
      const nameInput = document.getElementById('booking-name');
      const emailInput = document.getElementById('booking-email');
      const msgInput = document.getElementById('booking-message');
      if (nameInput) nameInput.value = '';
      if (emailInput) emailInput.value = '';
      if (msgInput) msgInput.value = '';
    });
  }
}

/* ==========================================================================
   Mobile Navigation Drawer (iOS & Android)
   ========================================================================== */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-open');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');
  const drawerCta = document.getElementById('mobile-cta-btn');

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  if (drawerCta) {
    drawerCta.addEventListener('click', () => {
      closeDrawer();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan); flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
