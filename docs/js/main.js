/* SUMROCA — navigation, scroll state, and contact form.
   Depends on t() from i18n.js (loaded first, both deferred). */

'use strict';

/* ---------- Header scroll state ---------- */

const header = document.getElementById('site-header');

function updateHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 80);
}

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

/* ---------- Full-screen menu overlay ---------- */

const menuToggle = document.getElementById('menu-toggle');
const navOverlay = document.getElementById('nav-overlay');

function setMenu(open) {
  header.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

menuToggle.addEventListener('click', () => {
  setMenu(!header.classList.contains('menu-open'));
});

/* Close when a nav link is clicked (after the scroll starts). */
navOverlay.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

/* Close when clicking the overlay background (outside a link). */
navOverlay.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-link')) setMenu(false);
});

/* Close on ESC and return focus to the toggle. */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('menu-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

/* ---------- Contact form (Web3Forms) ---------- */

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = form.querySelector('button[type="submit"]');
let statusTimer = null;

function showStatus(message, type) {
  status.textContent = message;
  status.className = 'form-status visible ' + type;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    status.className = 'form-status';
    setTimeout(() => { status.textContent = ''; }, 400); // after fade-out
  }, 6000);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Honeypot: silently drop bot submissions
  if (form.botcheck.value) return;

  submitBtn.disabled = true;
  submitBtn.textContent = t('form_sending');

  const payload = Object.fromEntries(new FormData(form));
  // Use the visitor's subject line when provided, otherwise keep the default
  if (payload.inquiry_subject) payload.subject = payload.inquiry_subject;

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      showStatus(t('form_success'), 'success');
      form.reset();
    } else {
      throw new Error(data.message || 'Unknown error');
    }
  } catch (err) {
    showStatus(t('form_error'), 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('form_submit');
  }
});

/* ---------- Services: expandable cards + modal ---------- */

const SERVICES = [
  {
    num: '01',
    titleKey: 'services_01_title',
    previewKey: 'services_01_preview',
    image: 'assets/photos/offshore-piping-01.jpg',
    imageAltKey: 'alt_photo_1',
    content: [
      { type: 'heading', key: 'services_01_heading_1' },
      { type: 'paragraph', key: 'services_01_body_1' },
      { type: 'paragraph', key: 'services_01_body_2' },
      { type: 'paragraph', key: 'services_01_body_3' },
    ],
    manufacturerLinkKey: 'services_01_body_manufacturer_link',
    brochure: { href: 'assets/brochures/fps-brochure.pdf', labelKey: 'common_brochure_download' },
    website: 'https://flexiblepipesupplies.com',
  },
  {
    num: '02',
    titleKey: 'services_02_title',
    previewKey: 'services_02_preview',
    image: 'assets/photos/refinery-night-01.jpg',
    imageAltKey: 'alt_photo_11',
    content: [
      { type: 'paragraph', key: 'services_02_body_1' },
      { type: 'heading', key: 'services_02_heading_1' },
      { type: 'paragraph', key: 'services_02_body_2' },
      { type: 'paragraph', key: 'services_02_body_3' },
    ],
    manufacturerLinkKey: 'services_02_body_manufacturer_link',
    brochure: { href: 'assets/brochures/genco-brochure.pdf', labelKey: 'common_brochure_download' },
    website: 'https://www.gencosystemsinc.com',
  },
  {
    num: '03',
    titleKey: 'services_03_title',
    previewKey: 'services_03_preview',
    image: 'assets/photos/heavy-transport-01.jpg',
    imageAltKey: 'alt_photo_7',
    content: [{ type: 'paragraph', key: 'services_03_body_1' }],
    brochure: null,
  },
  {
    num: '04',
    titleKey: 'services_04_title',
    previewKey: 'services_04_preview',
    image: 'assets/photos/marine-logistics-01.jpg',
    imageAltKey: 'alt_photo_10',
    content: [{ type: 'paragraph', key: 'services_04_body_1' }],
    brochure: null,
  },
  {
    num: '05',
    titleKey: 'services_05_title',
    previewKey: 'services_05_preview',
    image: 'assets/photos/offshore-platform-01.jpg',
    imageAltKey: 'alt_photo_5',
    content: [{ type: 'paragraph', key: 'services_05_body_1' }],
    brochure: null,
  },
  {
    num: '06',
    titleKey: 'services_06_title',
    previewKey: 'services_06_preview',
    image: 'assets/photos/offshore-spools-01.jpg',
    imageAltKey: 'alt_photo_3',
    content: [{ type: 'paragraph', key: 'services_06_body_1' }],
    brochure: null,
  },
  {
    num: '07',
    titleKey: 'services_07_title',
    previewKey: 'services_07_preview',
    image: 'assets/photos/earthwork-01.jpg',
    imageAltKey: 'alt_photo_8',
    content: [{ type: 'paragraph', key: 'services_07_body_1' }],
    brochure: null,
  },
];

const servicesGrid = document.getElementById('services-grid');

SERVICES.forEach((svc, index) => {
  const card = document.createElement('div');
  card.className = 'card service-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('data-i18n-aria', svc.titleKey);
  card.dataset.serviceIndex = String(index);

  const numEl = document.createElement('p');
  numEl.className = 'sub-number';
  numEl.setAttribute('aria-hidden', 'true');
  numEl.textContent = svc.num;

  const titleEl = document.createElement('h3');
  titleEl.setAttribute('data-i18n', svc.titleKey);
  titleEl.textContent = t(svc.titleKey);

  const previewEl = document.createElement('p');
  previewEl.className = 'card-preview';
  previewEl.setAttribute('data-i18n', svc.previewKey);
  previewEl.textContent = t(svc.previewKey);

  const ctaEl = document.createElement('span');
  ctaEl.className = 'card-cta';
  ctaEl.setAttribute('data-i18n', 'learn_more');
  ctaEl.textContent = t('learn_more');

  card.append(numEl, titleEl, previewEl, ctaEl);
  servicesGrid.appendChild(card);
});

const serviceModal = document.getElementById('service-modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalNumber = document.getElementById('modal-number');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalActions = document.getElementById('modal-actions');
const modalBrochure = document.getElementById('modal-brochure');
const modalBrochureLabel = document.getElementById('modal-brochure-label');
const modalWebsite = document.getElementById('modal-website');
const modalWebsiteLabel = document.getElementById('modal-website-label');

let openServiceIndex = null;
let lastFocusedCard = null;

function renderModalContent(index) {
  const svc = SERVICES[index];

  modalImage.src = svc.image;
  modalImage.alt = t(svc.imageAltKey);
  modalNumber.textContent = svc.num;
  modalTitle.textContent = t(svc.titleKey);

  modalText.innerHTML = '';
  svc.content.forEach((block) => {
    const el = document.createElement(block.type === 'heading' ? 'h3' : 'p');
    el.textContent = t(block.key);
    modalText.appendChild(el);
  });

  if (svc.manufacturerLinkKey) {
    const paragraphs = modalText.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    if (lastParagraph) {
      // Manufacturer-link sentences are static, translator-controlled strings
      // containing one trusted <a> tag (defined in i18n.js), so appending via
      // innerHTML here is safe — no user input ever reaches this call.
      lastParagraph.insertAdjacentHTML('beforeend', ' ' + t(svc.manufacturerLinkKey));
    }
  }

  if (svc.brochure) {
    modalBrochure.href = svc.brochure.href;
    modalBrochureLabel.textContent = t(svc.brochure.labelKey);
    modalBrochure.hidden = false;
  } else {
    modalBrochure.hidden = true;
  }

  if (svc.website) {
    modalWebsite.href = svc.website;
    modalWebsiteLabel.textContent = t('common_visit_website');
    modalWebsite.hidden = false;
  } else {
    modalWebsite.hidden = true;
  }

  modalActions.hidden = !svc.brochure && !svc.website;
}

function onModalKeydown(e) {
  if (e.key === 'Escape') closeServiceModal();
}

function openServiceModal(index, triggerEl) {
  openServiceIndex = index;
  lastFocusedCard = triggerEl;
  renderModalContent(index);
  serviceModal.classList.add('is-open');
  serviceModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
  document.addEventListener('keydown', onModalKeydown);
}

function closeServiceModal() {
  serviceModal.classList.remove('is-open');
  serviceModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onModalKeydown);
  openServiceIndex = null;
  if (lastFocusedCard) lastFocusedCard.focus();
}

servicesGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.service-card');
  if (card) openServiceModal(Number(card.dataset.serviceIndex), card);
});

servicesGrid.addEventListener('keydown', (e) => {
  const card = e.target.closest('.service-card');
  if (!card) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openServiceModal(Number(card.dataset.serviceIndex), card);
  }
});

modalClose.addEventListener('click', closeServiceModal);

serviceModal.addEventListener('click', (e) => {
  if (e.target === serviceModal) closeServiceModal();
});

document.addEventListener('sumroca:langchange', () => {
  if (openServiceIndex !== null) renderModalContent(openServiceIndex);
});
