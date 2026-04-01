// Base path for assets — set `WORKS_BASE = '../'` before this script in subdirectories
var WORKS_BASE = (typeof WORKS_BASE !== 'undefined') ? WORKS_BASE : '';

// ─── Chapter accordion ───────────────────────────
function toggleChapter(id) {
  const chapter = document.getElementById(id);
  const body = chapter.querySelector('.chapter-body');
  const isOpen = chapter.classList.contains('open');

  if (isOpen) {
    body.style.maxHeight = body.scrollHeight + 'px';
    requestAnimationFrame(() => { body.style.maxHeight = '0'; });
    chapter.classList.remove('open');
  } else {
    chapter.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    body.addEventListener('transitionend', () => {
      if (chapter.classList.contains('open')) body.style.maxHeight = 'none';
    }, { once: true });
  }
}

// ─── Image gallery ───────────────────────────────
const GALLERY_MAP = {
  bionelife: {
    title: 'Bionelife',
    images: [
      'works/free/BO_0(Thumb).jpg','works/free/BO_1.png','works/free/BO_2.jpg',
      'works/free/BO_3.jpg','works/free/BO_4.jpg','works/free/BO_5.jpg',
      'works/free/BO_6.jpg','works/free/BO_7.jpg','works/free/BO_8.jpg',
      'works/free/BO_9.jpg','works/free/BO_10.jpg','works/free/BO_11.jpg',
      'works/free/BO_12.jpg','works/free/BO_13.jpg'
    ]
  },
  greenlight: {
    title: 'Greenlight Foundation',
    images: [
      'works/free/GR_1.jpg','works/free/GR_2.jpg','works/free/GR_3.jpg',
      'works/free/GR_4.jpg','works/free/GR_5.jpg','works/free/GR_6.jpg',
      'works/free/GR_7.jpg','works/free/GR_8.jpg','works/free/GR_9.jpg',
      'works/free/GR_10.jpg','works/free/GR_11.jpg','works/free/GR_12.jpg'
    ]
  },
  hetby: {
    title: 'Canada Hetby Market',
    images: [
      'works/free/HB_1.jpg','works/free/HB_2(Thumb).jpg','works/free/HB_3.jpg',
      'works/free/HB_4.jpg','works/free/HB_5.jpg','works/free/HB_6.jpg',
      'works/free/HB_7.jpg','works/free/HB_8.jpg','works/free/HB_9.jpg'
    ]
  },
  'lg-ai': {
    title: 'AI TV In-store Demo Kit',
    images: [
      'works/LG_AI_01.jpg','works/LG_AI_02.jpg','works/LG_AI_03.jpg',
      'works/LG_AI_04.jpg','works/LG_AI_05.jpg','works/LG_AI_06.jpg',
      'works/LG_AI_07.jpg'
    ]
  },
  'lg-store': {
    title: 'TV In-store Display Guidelines',
    images: [
      'works/LG_STORE_01.jpg','works/LG_STORE_02.jpg','works/LG_STORE_03.jpg',
      'works/LG_STORE_04.jpg','works/LG_STORE_05.jpg','works/LG_STORE_06.jpg'
    ]
  },
  'lg-ces': {
    title: 'Global Campaign — IFA / CES',
    images: [
      'works/LG_CES_01.webp','works/LG_CES_02.webp','works/LG_CES_03.jpg'
    ]
  },
  'lg-mea': {
    title: 'Retail Field Training (Middle East & Africa)',
    images: [
      'works/LG_MEA_01.jpg','works/LG_MEA_02.jpg','works/LG_MEA_03.jpg',
      'works/LG_MEA_04.jpg','works/LG_MEA_05.jpg'
    ]
  }
};

// Prepend base path to all image arrays
Object.values(GALLERY_MAP).forEach(g => {
  g.images = g.images.map(p => WORKS_BASE + p);
});

let _gallery = null;
let _gIdx = 0;

function openGallery(key) {
  const g = GALLERY_MAP[key];
  if (!g) return;
  _gallery = g;
  _gIdx = 0;
  document.getElementById('imgModalTitle').textContent = g.title;
  document.getElementById('imgModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  _renderGalleryImg();
}

function _renderGalleryImg() {
  const img = document.getElementById('imgModalImg');
  const total = _gallery.images.length;
  document.getElementById('imgModalCounter').textContent = `${_gIdx + 1} / ${total}`;
  document.getElementById('imgPrev').disabled = _gIdx === 0;
  document.getElementById('imgNext').disabled = _gIdx === total - 1;
  img.classList.add('fading');
  setTimeout(() => {
    img.src = _gallery.images[_gIdx];
    img.onload = () => img.classList.remove('fading');
  }, 160);
}

function shiftGallery(dir) {
  const next = _gIdx + dir;
  if (next < 0 || next >= _gallery.images.length) return;
  _gIdx = next;
  _renderGalleryImg();
}

function closeGallery() {
  document.getElementById('imgModal').classList.remove('active');
  document.body.style.overflow = '';
  _gallery = null;
}

function handleImgOverlayClick(e) {
  if (e.target === document.getElementById('imgModal')) closeGallery();
}

// ─── Video modal ─────────────────────────────────
const VIDEO_MAP = {
  '3pia':        'works/PS_3PIA — AI Invoice Anomaly Detection.mp4',
  'lems-agg':    'works/PS_LEMs Aggregation Module.mp4',
  'lems3':       'works/PS_Actionabled-Migration.mp4',
  'proj-details':'works/PS_Project Details.mp4'
};

// Prepend base path to all video paths
Object.keys(VIDEO_MAP).forEach(k => {
  VIDEO_MAP[k] = WORKS_BASE + VIDEO_MAP[k];
});

function openModal(key, title) {
  const src = VIDEO_MAP[key];
  if (!src) return;
  document.getElementById('modalTitle').textContent = title;
  const video = document.getElementById('modalVideo');
  video.src = src;
  document.getElementById('videoModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  video.play().catch(() => {});
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  video.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('videoModal')) closeModal();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeGallery(); }
  if (e.key === 'ArrowLeft')  shiftGallery(-1);
  if (e.key === 'ArrowRight') shiftGallery(1);
});
