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
