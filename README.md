# SUMROCA — Corporate Website

Static corporate website for **SUMRO, C.A. (SUMROCA)** — industrial and mechanical construction, oil & gas services in Venezuela since 2006.

> **Español:** Sitio web corporativo de SUMROCA (SUMRO, C.A.), empresa de construcción industrial y mecánica y servicios de petróleo y gas en Venezuela. El sitio es bilingüe (inglés/español, botón EN | ES en la barra superior), no requiere compilación y se publica automáticamente con GitHub Pages al hacer push a la rama `main`. Para editar textos, vea la sección "How to edit content" más abajo — todas las traducciones están en `docs/js/i18n.js`.

**Live URL:** https://richardbr20.github.io/SUMROCA/

## Tech stack

- HTML5 (semantic, WCAG 2.1 AA)
- CSS3 (hand-written, mobile-first, no framework)
- Vanilla JavaScript (ES6+, no dependencies, no build step)
- Google Fonts (Inter)
- [Web3Forms](https://web3forms.com) for the contact form
- Google Maps embed for the location
- Hosted on GitHub Pages (`/docs` folder, `main` branch)

## Folder structure

```
SUMROCA/
├── README.md
├── LICENSE                 (MIT)
├── .gitignore
└── docs/                   (served by GitHub Pages)
    ├── index.html          (single-page site, all sections)
    ├── CNAME               (empty — reserved for a future custom domain)
    ├── favicon.ico
    ├── robots.txt
    ├── sitemap.xml
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── main.js         (nav overlay, scroll state, contact form)
    │   └── i18n.js         (EN/ES dictionary and language switch)
    └── assets/
        ├── logo/
        │   └── sumroca-logo.png
        └── photos/         (12 project photos, JPG)
```

## How to edit content

All page content lives in `docs/index.html`, organized by section:

- **Hero** — `<section class="hero" id="home">`
- **Our Mission** — `<section id="about">`
- **What We Do** (services) — `<section id="services">`
- **Portfolio** (client cards) — `<section id="projects">`
- **Contact** — `<section id="contact">`
- **Footer** — `<footer class="site-footer">`

The site is bilingual. Every translatable element carries a `data-i18n="key"` attribute, and the text for both languages lives in `docs/js/i18n.js` inside the `translations` object (`en: {...}` and `es: {...}`). **To change a text, edit it in `i18n.js` in both languages** — the value in `index.html` is only the initial English fallback, so keep it in sync with the `en` entry.

To add a new project bullet: copy an existing `<li data-i18n="...">` line in `index.html`, give it a new key, and add that key to both `en` and `es` in `i18n.js`.

## How to update photos

Drop replacement JPG files into `docs/assets/photos/`, keeping the same filenames (e.g. `refinery-night-01.jpg`). Recommendations: JPG quality ~82, under 300 KB each, no upscaling. If you add a *new* photo to the gallery, add two `<img>` tags in `docs/index.html` inside `.gallery-track` — one in the first (visible) set and one in the duplicated set marked `aria-hidden="true"` — so the infinite loop stays seamless.

The hero background is `refinery-night-01.jpg`, referenced from `docs/css/styles.css`.

## How to deploy updates

```bash
git add .
git commit -m "content: describe your change"
git push
```

GitHub Pages rebuilds automatically after each push to `main`; changes go live in 1–2 minutes.

### Re-enabling GitHub Pages manually (if ever needed)

1. Go to https://github.com/richardbr20/SUMROCA/settings/pages
2. Under **Source**, select `Deploy from a branch`.
3. Under **Branch**, choose `main` and folder `/docs`.
4. Click **Save**.

## How to add a custom domain

When you buy a domain (e.g. `sumroca.com`), configure these DNS records at your registrar:

```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
CNAME  www  richardbr20.github.io
```

Then edit `docs/CNAME` and put the naked domain (e.g. `sumroca.com`) on the first line. In **Settings → Pages**, enter the custom domain and enforce HTTPS.

## How to change the Web3Forms recipient

The contact form submits through [Web3Forms](https://web3forms.com). The destination email address is tied to the access key in the hidden `access_key` field in `docs/index.html`. To change the recipient, create a new access key for the new email address at https://web3forms.com and replace the value of the `access_key` input.

## License

[MIT](LICENSE) © 2026 SUMRO, C.A.
