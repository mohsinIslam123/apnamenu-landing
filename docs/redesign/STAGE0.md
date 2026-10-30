# Stage 0 audit: Zipla landing redesign (read only)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-0-audit`, created from `origin/main` at `419cc531ac67c75ec5ab5384a3c5c9880b64dfca` (commit date 2026-10-20T01:15:47+05:30, "Merge pull request #31 from mohsinIslam123/fix/schema-area-served-20261020"). Written on 2026-10-30 20:36 UTC.

How to read this file. Facts only. Each fact sits next to the command that produced it, or says "I do not know". An exit code of 3 from a gate tool would mean "I do not know", never a pass. This PR changes no site code: it adds files under `docs/redesign/` only. Kabir's note of 2026-10-31 (in the session prompt, not in the repo) says the redesign pack is a tools-only cut with an outdated design. No design decision is taken from it, and no text about any product offer, price, MRP or photo is written anywhere in Stage 0.

The report follows BRIEF.md section 6.1: sections 0 to 13, then two appendices (A: the plan and pre-mortem written before the build, B: the Stage 0 branch compared with B0).

## 0. Summary in five lines

1. Build: OK. `npm ci` exit 0 and `npm run build` exit 0 on `419cc53` (node v22.22.0, npm 10.9.4). `git status --short` is empty after the build.
2. Pages: 19 built (18 URLs in the sitemap, plus `/404.html`, which is `noindex` and not in the sitemap).
3. Deterministic: yes for the test I ran. Two builds of the same commit are byte-identical (`diff -rq` printed nothing, `compare` PASS with 0 FAIL and 0 WARN). Limit: both builds ran seconds apart on one machine (section 7).
4. Browser tools: available. Python `playwright` was missing, so I installed `playwright==1.63.0` into a venv under `/tmp`, and the pre-installed Chromium 153.0.8010.12 starts. On B0, `browser_check.py` exits 1 (76 FAIL, 76 WARN) and `fold_check.py` exits 0 (53 WARN, 0 sideways scroll).
5. Biggest risk: B0 already fails `browser_check.py` in all 76 page-and-width rows, every one for tap targets under 24 px (header, footer, breadcrumb and text links). A later stage cannot reach "browser_check exit 0" unless those links get bigger, and some of them sit inside page bodies (section 8 and section 10).

No BLOCKER from the determinism test.

## 1. Pack check

Source of the pack. STEP 1 of the prompt said to fetch the branch `redesign-tools-s0`. That failed:

```
$ git fetch origin redesign-tools-s0
fatal: couldn't find remote ref redesign-tools-s0
exit: 128
```

`git ls-remote origin refs/heads/redesign-tools-s0` returned nothing. Kabir then told the session to use the zip attached to the session, whose sha256 matches. So the pack in this audit came from the attached file, not from the branch.

```
$ sha256sum /tmp/pack.zip
3d662bfdb9ff7ee526b42ce07d3d8d37e593cfce3a06b1e87bf412c58ac0058b  /tmp/pack.zip
expected:
3d662bfdb9ff7ee526b42ce07d3d8d37e593cfce3a06b1e87bf412c58ac0058b
$ python3 -I -m zipfile -e /tmp/pack.zip /tmp/pack      (exit 0)
$ python3 -I /tmp/pack/redesign-ref-r6/gate/selftest.py (exit 0)
snapshot: 3 pages, 11 files -> /tmp/seogate_e4wxvzwe/x02_n.json
hashed font renamed (allowed)        expect FAIL -          got FAIL -                      WARN -            ok
SELFTEST OK
```

The selftest printed 35 case lines, all ending in `ok`, and none that did not. Files in the pack: `BRIEF.md`, `README.md`, `START_HERE_TOOLS_ONLY.txt`, and in `gate/`: `audit_home_page.py`, `browser_check.py`, `fold_check.py`, `forbidden.txt`, `inventory.py`, `selftest.py`, `seo_gate.py`, `README.md`.

Read in full: `START_HERE_TOOLS_ONLY.txt`, `README.md`, `BRIEF.md` (520 lines), `gate/README.md`.

Skipped because the folders are not in this cut (`tokens/`, `fonts/`, `images/`, `png/`, `prototype/`): the file-by-file comparison with `images/` (section 6), the comparison of repo facts with the prototype (section 5), whether the repo's customer-menu picture is the outdated one (needs `images/`), and everything that needs `DESIGN_SYSTEM.md`.

How the tools were run. The system `python3` has no `playwright`. Gate tools that need it were run as `/tmp/pwvenv/bin/python -I <tool>` (a venv with `playwright==1.63.0`, the version that matches the installed Chromium build). `seo_gate.py`, `inventory.py` and `selftest.py` were run as `python3 -I`. Nothing in `/tmp/pack` and nothing in `/tmp/pwvenv` is committed.

## 2. Repo facts

### 2.1 B0, versions, build

| fact | value | command |
|---|---|---|
| B0 commit SHA | `419cc531ac67c75ec5ab5384a3c5c9880b64dfca` (also what an earlier session read on 2026-10-31) | `git fetch origin main`, `git rev-parse origin/main`, `git ls-remote origin refs/heads/main` |
| node, npm | v22.22.0, 10.9.4 | `node --version`, `npm --version` |
| CI node version | 22 (`.github/workflows/build.yml`, `actions/setup-node@v4`, `node-version: 22`) | `cat .github/workflows/build.yml` |
| install command | `npm ci` (exit 0). It printed "11 vulnerabilities (2 moderate, 8 high, 1 critical)". I did not run `npm audit` | `npm ci` |
| build command | `npm run build` = `astro build` (exit 0) | `npm run build` |
| output folder | `dist/` | `ls dist` |
| built pages | 19 (`[build] 19 page(s) built in 1.50s`), 74 files in `dist/` | `find dist -name '*.html' | wc -l`, `find dist -type f | wc -l` |
| tracked files changed by the build | none | `git status --short` printed nothing |
| CI | one workflow, `build`, on `pull_request` and on push to `main`: `npm ci` then `npm run build` | `.github/workflows/build.yml` |

Build log, unique warnings and key lines (`/tmp/build1.log`):

```
      6 [WARN] [vite] warning: `optimizeDeps.esbuildOptions` option was specified by "vite:react-babel" plugin. This option is deprecated, please use `optimizeDeps.rolldownOptions` instead.
      6 [WARN] [vite] warning: `esbuild` option was specified by "vite:react-babel" plugin. This option is deprecated, please use `oxc` instead.
      6 [WARN] [vite] You or a plugin you are using have set `optimizeDeps.esbuildOptions` but this option is now deprecated. Vite now uses Rolldown to optimize the dependencies. Please use `optimizeDeps.rolldownOptions` instead.
      1 ✓ Completed in 177ms.
      1 [build] ✓ Completed in 848ms.
      1 [build] ✓ Completed in 636ms.
      1 [build] Complete!
      1 [build] 19 page(s) built in 1.50s
```

### 2.2 package.json

```
{
  "name": "zipla-landing",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "astro": "^7.2.0",
    "@astrojs/react": "^6.0.2",
    "@astrojs/sitemap": "^3.7.3"
  }
}
```

`npm ls --depth=0`:

```
zipla-landing@2.0.0 /home/user/apnamenu-landing
+-- @astrojs/react@6.0.2
+-- @astrojs/sitemap@3.7.3
+-- @emnapi/core@1.11.3 extraneous
+-- @emnapi/runtime@1.11.3 extraneous
+-- @emnapi/wasi-threads@1.2.3 extraneous
+-- @img/sharp-wasm32@0.35.3 extraneous
+-- @napi-rs/wasm-runtime@1.2.2 extraneous
+-- @tybys/wasm-util@0.10.3 extraneous
+-- astro@7.2.0
+-- react-dom@18.3.1
+-- react@18.3.1
`-- tslib@2.8.1 extraneous
```

Seven packages are listed as `extraneous` (`@emnapi/core`, `@emnapi/runtime`, `@emnapi/wasi-threads`, `@img/sharp-wasm32`, `@napi-rs/wasm-runtime`, `@tybys/wasm-util`, `tslib`). What that means for the build: I do not know.

### 2.3 astro.config.mjs

```
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zipla.in',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'never',
  },
});
```

Facts: `site` is `https://zipla.in`, `output` is `static`, `trailingSlash` is `always`, integrations are `react()` and `sitemap()`, and `build.inlineStylesheets` is `never` (every page links its CSS files). The 404 page is built as `/404.html`, every other page as `<path>/index.html`.

### 2.4 How CSS is written

- Plain CSS files, no framework. `git ls-files | grep -Ei "module\.css|tailwind|postcss|\.scss|\.sass|\.less"` returned nothing, and `tailwind` appears 0 times in `package.json` and `package-lock.json`.
- Global files: `src/index.css` (354 lines) and `src/vertical-page.css` (90 lines).
- Imports are in the pages, not in the layout. All 19 pages import `index.css`. `vertical-page.css` is imported by `restaurant-pos-software`, `cafe-pos-software`, `bakery-billing-software`, `sweet-shop-billing`, `qsr-billing-software`, `dhaba-billing-software` and `pricing` (`grep -rn "import .*css" src`).
- `<style>` blocks in pages: `grep -rn "<style" src` finds 24 matches, 3 in components (next bullet) and 21 in pages, for example `restaurant-pos-software.astro:263`, `cafe-pos-software.astro:253`, `dhaba-billing-software.astro:40`, `contact-us.astro:155`, `faq.astro:85` and `:89`, `terms-and-conditions.astro:225`. Astro scopes them: the build shows `data-astro-cid-*` attributes.
- `<style>{`...`}</style>` inside React components: `Features.jsx:63`, `Workflow.jsx:96`, `BusinessTypes.jsx:64`. They are written into the page body at render time (4 `<style` tags in the built home page).
- Inline `style={{...}}` in JSX: 51 `style="` attributes in the built home page (`grep -o 'style="' dist/index.html | wc -l`).
- In the build, `src/index.css` becomes `/_astro/src.zrsx-kCN.css` (31,162 bytes, 6,735 gzip) and every page links it. `vertical-page.*.css` (11,516 bytes) is linked by the seven pages above. Every page except `/` also links one more page CSS file (for example `pricing.CLjT3kM2.css`; `blog/index.html` links `index.sjg0IrNi.css`).
- Stylesheet references per built page are in the command output of section 2.5.
- Static checks of BRIEF section 9, run on B0 (there is no `tokens.css` in the repo): check 1 (raw colours) matches 423 lines in 26 files, check 2 (font-family outside tokens) matches 54 lines in 18 files. Per file counts are in the box below. I did not filter anchors and ids by eye.

<details><summary>CSS static checks, hits per file</summary>

```
### check 1: raw colours outside tokens.css (hits per file; the hits themselves are not pasted)
total lines: 423
     81 src/components/Workflow.jsx
     70 src/components/BusinessTypes.jsx
     60 src/components/Features.jsx
     59 src/index.css
     23 src/pages/refund-policy.astro
     23 src/pages/contact-us.astro
     22 src/pages/blog/restaurant-dhaba-gst-invoice-guide-2026.astro
     20 src/pages/terms-and-conditions.astro
     13 src/vertical-page.css
     13 src/pages/privacy-policy.astro
      6 src/pages/blog/restaurant-pos-software-checklist.astro
      4 src/components/Pricing.jsx
      3 src/pages/sweet-shop-billing.astro
      3 src/pages/restaurant-pos-software.astro
      3 src/pages/qsr-billing-software.astro
      3 src/pages/dhaba-billing-software.astro
      3 src/pages/cafe-pos-software.astro
      3 src/pages/bakery-billing-software.astro
      2 src/pages/pricing.astro
      2 src/components/Hero.jsx
      2 src/components/Header.jsx
      1 src/pages/faq.astro
      1 src/pages/blog/restaurant-pos-vs-billing-software.astro
      1 src/pages/blog/restaurant-pos-software-price-india.astro
      1 src/pages/blog/index.astro
      1 src/pages/404.astro

### check 2: font-family outside tokens (hits per file)
total lines: 54
     21 src/index.css
      6 src/vertical-page.css
      3 src/pages/blog/restaurant-pos-software-checklist.astro
      3 src/components/Workflow.jsx
      3 src/components/BusinessTypes.jsx
      2 src/pages/pricing.astro
      2 src/pages/faq.astro
      2 src/pages/blog/index.astro
      2 src/pages/404.astro
      2 src/components/Features.jsx
      1 src/pages/sweet-shop-billing.astro
      1 src/pages/restaurant-pos-software.astro
      1 src/pages/qsr-billing-software.astro
      1 src/pages/dhaba-billing-software.astro
      1 src/pages/cafe-pos-software.astro
      1 src/pages/blog/restaurant-pos-vs-billing-software.astro
      1 src/pages/blog/restaurant-pos-software-price-india.astro
      1 src/pages/bakery-billing-software.astro
```

</details>

### 2.5 Components, islands, scripts

- `src/components`: 14 files, all `.jsx` (React). No `.astro`, `.tsx` or other types.
- No component contains a `client:` directive. The directives are in pages (`grep -rn "client:" src`, 21 matches): `<Header client:load />` on all 19 pages; `<DemoForm client:visible />` and `<Testimonials ... client:visible />` on `index.astro`.
- `Testimonials` renders only when `CUSTOMER_VIDEOS.length > 0`, and `const CUSTOMER_VIDEOS = [];` (`index.astro:17`), so it is not on the page. A file `_astro/Testimonials.BG5INUFr.js` (2,038 bytes) is still in the build.
- Each page has 4 inline scripts plus the JSON-LD script (5 plus JSON-LD on `/`). There is no `<script src>` on any page. The only third-party host in the snapshot is `zipla.in`. Google Tag Manager is added by script after consent (see 2.7).
- Built `_astro/` JavaScript: `client.BgcN2sO-.js` 134,484 bytes (43,087 gzip), `react.*.js`, `jsx-runtime.*.js`, `Header.*.js`, `DemoForm.*.js` (home only), `Testimonials.*.js` (not referenced by a page), `constants.*.js`.

<details><summary>Stylesheet and island references per built page (command output)</summary>

```
404.html | css: ['src.zrsx-kCN.css', '404.CT4ZjuBB.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
bakery-billing-software/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'bakery-billing-software.CPnblBVn.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
blog/index.html | css: ['src.zrsx-kCN.css', 'index.sjg0IrNi.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
blog/restaurant-dhaba-gst-invoice-guide-2026/index.html | css: ['src.zrsx-kCN.css', 'restaurant-dhaba-gst-invoice-guide-2026.V9sadltm.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
blog/restaurant-pos-software-checklist/index.html | css: ['src.zrsx-kCN.css', 'restaurant-pos-software-checklist.CzOik4nR.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
blog/restaurant-pos-software-price-india/index.html | css: ['src.zrsx-kCN.css', 'restaurant-pos-software-price-india.CIg0BqNA.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
blog/restaurant-pos-vs-billing-software/index.html | css: ['src.zrsx-kCN.css', 'restaurant-pos-vs-billing-software.BFG44Iuh.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
cafe-pos-software/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'cafe-pos-software.Bg74iIxu.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
contact-us/index.html | css: ['src.zrsx-kCN.css', 'contact-us.CMSBg021.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
dhaba-billing-software/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'dhaba-billing-software.L7Dyr4Xv.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
faq/index.html | css: ['src.zrsx-kCN.css', 'faq.9xNggnPg.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
index.html | css: ['src.zrsx-kCN.css'] | script src: [] | islands: ['DemoForm.ChLxAGrI.js', 'Header.CgIocFJD.js', 'client.BgcN2sO-.js']
pricing/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'pricing.CLjT3kM2.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
privacy-policy/index.html | css: ['src.zrsx-kCN.css', 'privacy-policy.DK4wdb0U.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
qsr-billing-software/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'qsr-billing-software.gZkLGf1a.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
refund-policy/index.html | css: ['src.zrsx-kCN.css', 'refund-policy.DvSD4yT-.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
restaurant-pos-software/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'restaurant-pos-software.UfjAgEYE.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
sweet-shop-billing/index.html | css: ['src.zrsx-kCN.css', 'vertical-page.IxYWfktA.css', 'sweet-shop-billing._XEbkA-7.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
terms-and-conditions/index.html | css: ['src.zrsx-kCN.css', 'terms-and-conditions.7k7rGHPR.css'] | script src: [] | islands: ['Header.CgIocFJD.js', 'client.BgcN2sO-.js']
```

</details>

### 2.6 What `src/layouts/Layout.astro` puts in the head and the body

Props: `title`, `description`, `canonical`, `ogImage`, `ogImageAlt`, `robots`, `jsonLd`. 430 lines.

Head, in order (line numbers in `Layout.astro`):

- 94 `<html lang="en-IN" data-theme="dark">`
- 96 charset, 97 viewport
- 99 `<title>`, 100 `<meta name="description">`, 101 `<meta name="robots">` only when the `robots` prop is set (the 404 page sets `noindex`)
- 103 to 126, only when `canonical` is set: Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:locale`, `og:image`, `og:image:alt`, `og:image:width`, `og:image:height`), Twitter tags (`twitter:card`, `title`, `description`, `image`, `image:alt`) and `<link rel="canonical">`
- 127 favicon, 128 apple-touch-icon
- 130 to 140 inline script: reads `localStorage['zipla-theme']`, sets `data-theme` and `color-scheme` on `<html>` (details in 2.8)
- 143 JSON-LD script. A global graph (WebSite, Organization, SoftwareApplication with two Offers) from lines 22 to 74, plus the page's own graph
- 147 and 148 preload of `/fonts/syne-latin.woff2` and `/fonts/plus-jakarta-sans-latin.woff2`
- Astro adds the stylesheet `<link>` tags from page imports (no CSS import is in the layout)

Body, in order: 151 `<slot />`; 152 to 160 consent banner `aside#zipla-consent-banner`; 161 to 168 `aside#zipla-consent-preferences`; 169 to 428 inline consent and analytics script.

### 2.7 How cookie consent works (read from `Layout.astro`, not run in a browser)

- Banner `#zipla-consent-banner` (`hidden` until needed). Title "Help us improve Zipla.in", buttons "Reject analytics", "Manage", "Allow analytics" (lines 152 to 160). Preferences dialog `#zipla-consent-preferences` with "Privacy settings", "Reject analytics", "Allow analytics" (lines 161 to 168). Both are `role="dialog" aria-modal="true"`.
- Storage: cookie `zipla-analytics-consent` (value `granted` or `denied`, Max-Age 31536000, Path `/`, SameSite Lax, Secure on https, Domain `zipla.in` on `zipla.in` and `www.zipla.in`) and a copy in `localStorage` under the same key (lines 171, 181 to 221).
- Google consent mode: default `denied` for all four signals with `wait_for_update: 500` (lines 275 to 281). The GA4 script (`googletagmanager.com/gtag/js`) is added only after "Allow analytics" or when the saved value is `granted` (lines 292 to 307, 422 to 423). The measurement id is the constant `GA_ID` at line 91; its value is not repeated here.
- "Reject analytics" sets `denied`, updates consent mode and deletes cookies named `_ga*`, `_gid`, `_gat*`, `_gac_*` (lines 252 to 269, 335 to 343).
- Events `trial_click`, `demo_cta_click`, `whatsapp_click` are sent through `window.ziplaTrack` only when consent is `granted` (lines 309 to 312, 345 to 383).
- Keyboard: Escape and Tab handling with a focus trap (lines 385 to 420).
- The footer button `#zipla-consent-settings` ("Privacy settings", `Footer.jsx:10`) opens the preferences dialog (lines 356 to 360).
- Styling: `src/index.css` lines 257 to 273 (`.footer-settings`, `.zipla-consent-*`).
- Behaviour in a real browser: I do not know. `browser_check.py` does not test accept, reject or manage.

### 2.8 How the dark and light toggle works today

| item | fact | where |
|---|---|---|
| files | `src/components/Header.jsx`, `src/layouts/Layout.astro` | |
| storage key | `zipla-theme` in `localStorage`, values `light` or `dark` (anything else is read as `dark`) | `Header.jsx:3`, `Layout.astro:132` |
| what it sets on `<html>` | attribute `data-theme="light"` or `"dark"`, and inline `style="color-scheme: ..."` | `Header.jsx:86-87`, `Layout.astro:134-135` |
| default theme | dark. `<html ... data-theme="dark">` is in the source (`Layout.astro:94`) and the init script falls back to dark, also when storage throws | `Layout.astro:94, 133, 137-138` |
| first paint | the init script runs in the head before the body, so a saved `light` is applied before first paint | `Layout.astro:130-140` |
| pages that show it | all 19. Every page uses `<Header client:load />`, and the built header markup is identical on all 19 (same sha1 over the serialized header in section 3) | `Header.jsx:139-165` |
| visible text of the button | none. It is an icon-only button (`<svg aria-hidden="true">`). Accessible name and tooltip: `aria-label` and `title` "Switch to light theme" in the build (initial state dark) and "Switch to dark theme" when light; `aria-pressed` false or true | `Header.jsx:139-165`, `dist/index.html` |
| other scripts that read the theme | none besides these two. React state in `Header.jsx:52-62` reads `document.documentElement.dataset.theme` after mount | `grep -rn "data-theme\|zipla-theme\|colorScheme\|dataset.theme" src` |
| CSS that reads the theme | `index.css` 24 lines with `data-theme` (the light block is lines 319 to 354, `:root{color-scheme:dark}` at 307), `Features.jsx` 19 lines, `Workflow.jsx` 22 lines, `BusinessTypes.jsx` 4 lines (all `[data-theme=dark] ...` selectors inside the components' `<style>` blocks) | `grep -c "data-theme"` per file |
| theme button styling | `index.css:309-311, 316`, plus inline style in `Header.jsx:146-162` | |

What removing the toggle (decision D5, default) touches. Files and lines, as read:

- `src/components/Header.jsx`: line 3 (key), lines 5 to 49 (`ThemeIcon`), line 52 (state), line 57, lines 59 to 62 (effect), lines 83 to 95 (`toggleTheme`), lines 139 to 165 (the button). This is the shared Header, the Stage 1 file.
- `src/layouts/Layout.astro`: line 94 (`data-theme="dark"`) and lines 130 to 140 (init script). These lines are NOT on the list of lines that R3 lets a stage change (see section 11). If they stay, a visitor with a saved `light` still gets `data-theme="light"`. New CSS must not read it (R15).
- `src/index.css`: lines 306 to 317 (toggle rules) and 319 to 354 (light block). Legacy CSS: R13 says do not delete it in stages 1 to 5.
- `Features.jsx` (19 lines), `Workflow.jsx` (22 lines), `BusinessTypes.jsx` (4 lines): `[data-theme=dark]` selectors. These are page body components (Stage 2).
- The toggle has no visible text, so no line goes into `allow_removed.txt` for D5. Whether the gate counts `aria-label` or `title` text: I do not know.

### 2.9 Does a branch other than main get a Cloudflare preview?

Seen: yes, on the three closed pull requests I read (31, 30 and 27). `get_check_runs` returned a check run named "Cloudflare Pages" with conclusion `success` and a `build` check (GitHub Actions) for PR 31 and PR 30. The `cloudflare-workers-and-pages[bot]` comment on PR 31 and PR 27 lists "Preview URL" and "Branch Preview URL". Examples of the branch aliases it printed:

- PR 31, head branch `fix/schema-area-served-20261020`: `https://fix-schema-area-served-20261.apnamenu-landing.pages.dev`
- PR 27, head branch `preview/phase-3-landing-20260908`: `https://preview-phase-3-landing-2026.apnamenu-landing.pages.dev`

Not known: the project's branch-control setting, and the exact preview address of `redesign/stage-0-audit` until the bot comments on this PR (see the PR comments). The alias drops characters from long branch names, as the two examples show.

### 2.10 `public/` listing (`git ls-files public`)

```
  public/_redirects
  public/apple-touch-icon.png
  public/favicon.png
  public/fonts/LICENSES.txt
  public/fonts/plus-jakarta-sans-latin.woff2
  public/fonts/syne-latin.woff2
  public/og-image.jpg
  public/robots.txt
  public/screenshots/ss-customer-menu.webp
  public/screenshots/ss-dashboard.webp
  public/screenshots/ss-gst-invoice.webp
  public/screenshots/ss-inventory.webp
  public/screenshots/ss-kds.webp
  public/screenshots/ss-menu-mgmt.webp
  public/screenshots/ss-multi-device.webp
  public/screenshots/ss-new-order.webp
  public/workflows/ai-menu-review-screen.webp
  public/workflows/ai-menu-scan-workflow-v2.webp
  public/workflows/ai-menu-scan-workflow.webp
  public/workflows/analytics-dashboard-screen.webp
  public/workflows/counter-billing-workflow.webp
  public/workflows/day-close-report-screen.webp
  public/workflows/day-close-workflow.webp
  public/workflows/qr-ordering-workflow.webp
  public/zipla-icon.webp
  public/zipla-logo.webp
```

Not present in `public/`: `llms.txt`, `_headers`, `security.txt`, a web manifest, any sitemap (the sitemap is generated into `dist/` by `@astrojs/sitemap`: `sitemap-index.xml` and `sitemap-0.xml`, no `<lastmod>`). `public/robots.txt` is `User-agent: *`, `Allow: /`, and the sitemap line. `public/_redirects` has 8 rules (plus 2 comment lines), each a 301 from a no-slash URL to the slash URL (`/faq`, `/terms-and-conditions`, `/privacy-policy`, `/bakery-billing-software`, `/cafe-pos-software`, `/restaurant-pos-software`, `/sweet-shop-billing`, `/pricing`).

### 2.11 Which fonts load today and from where

- `Syne` (weights 700 to 800) and `Plus Jakarta Sans` (400 to 800), both self-hosted: `/fonts/syne-latin.woff2` (34,608 bytes) and `/fonts/plus-jakarta-sans-latin.woff2` (27,348 bytes). `@font-face` is at `src/index.css:1-15`, `font-display: swap`, latin subset files only.
- Both files are preloaded in `Layout.astro:147-148` (`as="font" type="font/woff2" crossorigin`).
- CSS variables: `--sans` (Plus Jakarta Sans, then `system-ui`, `sans-serif`), `--display` (Syne, then `--sans`), `--mono` (`Courier New`, `monospace`) in `index.css`.
- No external font host appears in `src` (`grep -rn "googleapis\|gstatic\|typekit\|fonts.bunny" src` found nothing).
- `public/fonts/LICENSES.txt` names both fonts and contains the SIL Open Font License 1.1 text (header lines read; the full text was not read in this audit).

### 2.12 Hits for: Billing Machine, printer, MRP, Buy now

Scope. "Repo source" = every tracked text file at `HEAD` (`git ls-files`, binary files skipped). "Build" = every text file in `dist/` (html, js, css, xml, txt). Rules: "Billing Machine", "printer" and "Buy now" are case-insensitive substrings. "MRP" is a case-insensitive whole word, and I also counted the plain substring `mrp`. `matches` counts every match, `lines` counts lines with at least one match. Below each file are its first three hit lines, cut to 110 characters either side of the first match on the line (source) or 80 (build). Built HTML pages have the head on one long line (line 11), so the first hit line of a page is usually that line.

| term | repo source | build |
|---|---|---|
| Billing Machine | 0 matches in 0 files | 0 matches in 0 files |
| printer | 32 matches in 12 files | 57 matches in 19 files |
| MRP (whole word) | 0 matches in 0 files | 0 matches in 0 files |
| MRP (plain substring `mrp`) | 2 matches in 1 file: `package-lock.json` lines 735 and 4058, inside the same integrity hash string | 0 matches in 0 files |
| Buy now | 0 matches in 0 files | 0 matches in 0 files |

Full counts per file and the first three lines of each file:

<details><summary>Command output: hits per file and first three lines</summary>

```
#### Billing Machine  (case-insensitive substring)
repo source (git ls-files at HEAD): 0 matches in 0 files
build (dist/, text files): 0 matches in 0 files

#### printer  (case-insensitive substring)
repo source (git ls-files at HEAD): 32 matches in 12 files
  src/components/FAQ.jsx: 2 matches on 1 lines
    6:   { q: 'Which Bluetooth thermal printers does Zipla POS support?', a: 'Zipla POS supports compatible 58mm and 80mm Bluetooth thermal printers for bil...
  src/components/Pricing.jsx: 1 matches on 1 lines
    156:             Use supported Android, tablet, and Windows PC setups with compatible thermal printers.
  src/layouts/Layout.astro: 1 matches on 1 lines
    66:       "Bluetooth thermal printing on compatible 58mm and 80mm printers"
  src/pages/bakery-billing-software.astro: 1 matches on 1 lines
    166:             <li><strong>Customer bill delivery:</strong> use a Bluetooth thermal printer or share the bill with the customer on WhatsApp.</li>
  src/pages/blog/restaurant-dhaba-gst-invoice-guide-2026.astro: 4 matches on 2 lines
    29: ...ter the menu has loaded, but online payments such as UPI require an internet connection. Whether a configured printer can print during an offline period depends on the tested device and printer setup; verify that workflow befor...
    214: ...ter the menu has loaded, but online payments such as UPI require an internet connection. Whether a configured printer can print during an offline period depends on the tested device and printer setup; verify that workflow befor...
  src/pages/blog/restaurant-pos-software-checklist.astro: 7 matches on 5 lines
    28:     answer: 'Use the same short test script with both systems: real menu, one bill, payment marking, invoice, printer or bill sharing, kitchen handoff when relevant, and day-close review.',
    143:           <p>Print one invoice using the thermal-printer setup your outlet plans to use. Also test the way your team shares bills with customers when a printed slip i...
    144:           <p>Ask the vendor which printer models and connection methods are supported before purchasing hardware. A POS screen can be ready while the f...
  src/pages/blog/restaurant-pos-software-price-india.astro: 5 matches on 3 lines
    45: ...uring a busy service. A low annual price is not useful if the workflow does not fit your menu, payment modes, printer or kitchen handoff.</p>
    54:           <li>Can the team print on a compatible Bluetooth thermal printer or share a bill on WhatsApp?</li>
    69:         <div class="seo-post-card"><h3>5. Check printer compatibility</h3><p>Confirm the printer connection and paper size you intend to use. Zipla POS supports comp...
  src/pages/cafe-pos-software.astro: 2 matches on 2 lines
    19: ...r: 'Yes. Zipla POS can be used on Android phones and tablets. You can also pair a supported Bluetooth thermal printer when you want printed bills.',
    31:     answer: 'Yes. Use a supported Bluetooth thermal printer for printed bills, or share the bill with the customer on WhatsApp when a digital copy is more useful.',
  src/pages/faq.astro: 3 matches on 2 lines
    20:   { question: 'Which Bluetooth thermal printers does Zipla POS support?', answer: 'Zipla POS supports compatible 58mm and 80mm Bluetooth thermal printers fo...
    23: ...a POS print or share a customer bill?', answer: 'Yes. Bluetooth thermal printing is supported with compatible printers. You can also share bills with customers on WhatsApp.' },
  src/pages/index.astro: 2 matches on 2 lines
    94:           name: 'Which Bluetooth thermal printers does Zipla POS support?',
    97:             text: 'Zipla POS supports compatible 58mm and 80mm Bluetooth thermal printers for bill and KOT printing.'
  src/pages/pricing.astro: 1 matches on 1 lines
    187:             <li>Confirm device, printer and payment requirements before purchase.</li>
  src/pages/sweet-shop-billing.astro: 3 matches on 3 lines
    31: ...answer: 'Yes. Zipla POS can be used on Android phones and tablets. You can pair a supported Bluetooth thermal printer when you want printed bills.',
    151: ...-number">03</span><h3>Close the bill</h3><p>Mark the payment mode, then print a bill on a supported Bluetooth printer or share the bill with the customer on WhatsApp.</p></div>
    170:               <li><strong>Bill delivery:</strong> use a supported Bluetooth thermal printer or share the bill with the customer on WhatsApp.</li>
build (dist/, text files): 57 matches in 19 files
  404.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  bakery-billing-software/index.html: 2 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  blog/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  blog/restaurant-dhaba-gst-invoice-guide-2026/index.html: 5 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  blog/restaurant-pos-software-checklist/index.html: 9 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  blog/restaurant-pos-software-price-india/index.html: 6 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  blog/restaurant-pos-vs-billing-software/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  cafe-pos-software/index.html: 5 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  contact-us/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  dhaba-billing-software/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  faq/index.html: 7 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  index.html: 6 matches on 2 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
    1096: ...m">Use supported Android, tablet, and Windows PC setups with compatible thermal printers.</div></div><a href="#demo" style="color:inherit;text-decoration:none;font-wei...
  pricing/index.html: 2 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  privacy-policy/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  qsr-billing-software/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  refund-policy/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  restaurant-pos-software/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  sweet-shop-billing/index.html: 5 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...
  terms-and-conditions/index.html: 1 matches on 1 lines
    11: ..."WhatsApp bill sharing","Bluetooth thermal printing on compatible 58mm and 80mm printers"],"author":{"@id":"https://zipla.in/#organization"},"offers":[{"@type":"Offer"...

#### MRP  (case-insensitive, whole word)
repo source (git ls-files at HEAD): 0 matches in 0 files
  (check: plain substring 'mrp', case-insensitive, same file set: 2 matches in 1 files)
build (dist/, text files): 0 matches in 0 files
  (check: plain substring 'mrp', case-insensitive, same file set: 0 matches in 0 files)

#### Buy now  (case-insensitive substring)
repo source (git ls-files at HEAD): 0 matches in 0 files
build (dist/, text files): 0 matches in 0 files
```

</details>

## 3. Page inventory

Generated by `python3 -I gate/inventory.py /tmp/base.json docs/redesign/inventory.md` (exit 0). The full file, with every page's heading outline, is `docs/redesign/inventory.md`. Summary table:

pages: 19. Sitemap URLs: 18.

| url | title | H1 | H2 | H3 | JSON-LD types | FAQ Qs | words | internal links | external links | images | forms | html bytes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| / | Restaurant Billing Software for India / Zipla POS | Restaurant Billing Software for India | 9 | 11 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 11 | 1922 | 40 | 0 | 11 | 1 | 138341 |
| /404.html | Page Not Found / Zipla POS | That page is not available. | 2 | 0 | ContactPoint, Country, ImageObject, Offer, Organization, SoftwareApplication, WebSite | 0 | 132 | 23 | 0 | 2 | 0 | 22281 |
| /bakery-billing-software/ | Bakery Billing Software for India / Weight Billing / Zipla POS | Bakery Billing Software for India | 10 | 15 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 6 | 1493 | 35 | 0 | 4 | 0 | 46999 |
| /blog/ | Restaurant Billing & POS Guides for India / Zipla POS Blog | Restaurant Billing & POS Guides for India | 9 | 11 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 4 | 1202 | 34 | 2 | 3 | 0 | 39869 |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | GST Invoice for Restaurant and Dhaba in India — Step by Step Guide 202 | GST Invoice for Restaurant and Dhaba in India — Step by Step Guide 202 | 11 | 10 | Answer, Article, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 5 | 1517 | 34 | 2 | 2 | 0 | 42081 |
| /blog/restaurant-pos-software-checklist/ | Restaurant POS Software Checklist: What to Test Before You Switch / Zi | Restaurant POS Software Checklist: What to Test Before You Switch | 19 | 9 | Answer, BlogPosting, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 5 | 1787 | 30 | 0 | 2 | 0 | 41637 |
| /blog/restaurant-pos-software-price-india/ | Restaurant POS Software Price in India: What to Check Before Buying /  | Restaurant POS Software Price in India: What to Check Before Buying | 8 | 10 | Answer, Article, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 3 | 856 | 29 | 0 | 2 | 0 | 33596 |
| /blog/restaurant-pos-vs-billing-software/ | Restaurant POS vs Billing Software in India: What Is the Difference? / | Restaurant POS vs Billing Software in India: What Is the Difference? | 9 | 6 | Answer, Article, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 3 | 933 | 27 | 0 | 2 | 0 | 34927 |
| /cafe-pos-software/ | Cafe POS Billing Software for India / QR & KDS / Zipla POS | Cafe POS Billing Software for India | 9 | 11 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 6 | 1245 | 33 | 0 | 4 | 0 | 43661 |
| /contact-us/ | Contact Zipla POS Support / Billing Software Help | Contact Zipla POS Support | 8 | 6 | Answer, BreadcrumbList, ContactPage, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebSite | 4 | 688 | 33 | 5 | 2 | 0 | 34131 |
| /dhaba-billing-software/ | Dhaba Billing Software India / GST Bills & Day Close / Zipla POS | Dhaba Billing Software India | 10 | 12 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 6 | 1239 | 34 | 0 | 4 | 0 | 44941 |
| /faq/ | Restaurant Billing Software India FAQ / Zipla POS | Restaurant Billing Software India: Zipla POS Questions Answered | 25 | 1 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 18 | 1368 | 29 | 1 | 3 | 0 | 44251 |
| /pricing/ | Restaurant POS Pricing in India / Zipla POS | Restaurant POS Pricing in India | 9 | 4 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 5 | 938 | 35 | 0 | 3 | 0 | 38808 |
| /privacy-policy/ | Privacy Policy for Zipla POS Users in India | Zipla POS Privacy Policy | 15 | 12 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 5 | 1455 | 29 | 5 | 2 | 0 | 40390 |
| /qsr-billing-software/ | QSR Billing Software India / POS Billing & KDS / Zipla POS | QSR Billing Software India | 10 | 12 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 6 | 1291 | 34 | 0 | 4 | 0 | 45108 |
| /refund-policy/ | Zipla POS Cancellation & Refund Policy | Zipla POS Cancellation & Refund Policy | 10 | 6 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 4 | 801 | 30 | 1 | 2 | 0 | 33573 |
| /restaurant-pos-software/ | Restaurant POS Billing Software for India / KDS & QR / Zipla POS | Restaurant POS Billing Software for India | 9 | 9 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 6 | 1203 | 34 | 0 | 4 | 0 | 43686 |
| /sweet-shop-billing/ | Sweet Shop Billing Software India / Weight Billing / Zipla POS | Sweet Shop Billing Software India | 10 | 12 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 7 | 1389 | 35 | 0 | 4 | 0 | 45951 |
| /terms-and-conditions/ | Zipla POS Terms and Conditions for Users in India | Zipla POS Terms and Conditions | 18 | 11 | Answer, BreadcrumbList, ContactPoint, Country, FAQPage, ImageObject, ListItem, Offer, Organization, Question, SoftwareApplication, WebPage, WebSite | 6 | 1874 | 34 | 1 | 2 | 0 | 42903 |

The table above cuts long titles and H1s at 70 characters. Full H1s, archetype (BRIEF section 5) and stage:

| URL | H1 (full text from the build) | archetype and reason | stage |
|---|---|---|---|
| / | Restaurant Billing Software for India | 1 Home: URL is `/` | 2 |
| /404.html | That page is not available. | 9 Utility: short page, one button: "That page is not available." | 5 |
| /bakery-billing-software/ | Bakery Billing Software for India | 2 Business-type landing: H1 names the outlet and billing: "Bakery Billing Software for India" | 3 |
| /blog/ | Restaurant Billing & POS Guides for India | 6 Blog index: links to the four articles: "Restaurant Billing & POS Guides for India". Has more than a link list: see section 12 | 5 |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | GST Invoice for Restaurant and Dhaba in India — Step by Step Guide 2026 | 7 Blog article: Article JSON-LD, long text | 5 |
| /blog/restaurant-pos-software-checklist/ | Restaurant POS Software Checklist: What to Test Before You Switch | 7 Blog article: BlogPosting JSON-LD, long text | 5 |
| /blog/restaurant-pos-software-price-india/ | Restaurant POS Software Price in India: What to Check Before Buying | 7 Blog article: Article JSON-LD, long text | 5 |
| /blog/restaurant-pos-vs-billing-software/ | Restaurant POS vs Billing Software in India: What Is the Difference? | 7 Blog article: Article JSON-LD, long text | 5 |
| /cafe-pos-software/ | Cafe POS Billing Software for India | 2 Business-type landing: H1 names the outlet and billing: "Cafe POS Billing Software for India" | 3 |
| /contact-us/ | Contact Zipla POS Support | 5 Contact: contact links (mailto, tel, wa.me), no form: "Contact Zipla POS Support" | 4 |
| /dhaba-billing-software/ | Dhaba Billing Software India | 2 Business-type landing: H1 names the outlet and billing: "Dhaba Billing Software India" | 3 |
| /faq/ | Restaurant Billing Software India: Zipla POS Questions Answered | 4 FAQ page: FAQPage JSON-LD with 18 questions: "Restaurant Billing Software India: Zipla POS Questions Answered" | 4 |
| /pricing/ | Restaurant POS Pricing in India | 3 Pricing: rupee prices per year in the first screen: "Restaurant POS Pricing in India" | 4 |
| /privacy-policy/ | Zipla POS Privacy Policy | 8 Legal document: privacy: "Zipla POS Privacy Policy" | 5 |
| /qsr-billing-software/ | QSR Billing Software India | 2 Business-type landing: H1 names the outlet and billing: "QSR Billing Software India" | 3 |
| /refund-policy/ | Zipla POS Cancellation & Refund Policy | 8 Legal document: refund: "Zipla POS Cancellation & Refund Policy" | 5 |
| /restaurant-pos-software/ | Restaurant POS Billing Software for India | 2 Business-type landing: H1 names the outlet and billing: "Restaurant POS Billing Software for India" | 3 |
| /sweet-shop-billing/ | Sweet Shop Billing Software India | 2 Business-type landing: H1 names the outlet and billing: "Sweet Shop Billing Software India" | 3 |
| /terms-and-conditions/ | Zipla POS Terms and Conditions | 8 Legal document: terms: "Zipla POS Terms and Conditions" | 5 |

Notes on the archetype column.

- All 19 pages fit an archetype. The one I mark with a caveat is `/blog/`: it links to the four articles (archetype 6), and it also has 9 H2, 11 H3, 4 FAQ questions with answers, one `<ol class="blog-process">` and a "Last reviewed" line (inventory above). Whether that counts as "fits" is for Kabir and Stage 5 to say.
- The pages for archetype 2 are six separate files with their own markup (section 9 has the facts). `/contact-us/` has no form: 0 `<form>` in its built HTML.
- 4 articles: `restaurant-dhaba-gst-invoice-guide-2026` and `restaurant-pos-software-checklist` use `post-*` classes, `restaurant-pos-software-price-india` and `restaurant-pos-vs-billing-software` use `seo-post-*` classes (`page_facts` output below).

Pages with a form, a script, an embed or a data-driven template.

- Form: `/` only. One `<form>` (`DemoForm.jsx`), 2 `<input>`, 1 `<select>`. The snapshot records the form as `action: ""`, `method: ""`, no field names (`DemoForm.jsx:46` opens `https://wa.me/<number>?text=...` with `window.open`).
- Script: every page has the same inline scripts (theme init, consent and analytics) and the `Header` island (`astro-island`). `/` also has the `DemoForm` island.
- Embeds: none. 0 `<iframe>`, `<video>`, `<audio>`, `<embed>`, `<object>` or `<canvas>` on any page.
- Data-driven templates: none. No file in `src/pages` has a bracket in its name, and `getStaticPaths`, `import.meta.glob`, `getCollection` and `Astro.glob` do not appear in `src`. One `.astro` file per page.

Pages that do not use the shared Header and Footer, or carry their own header or footer markup: none. In the built HTML every one of the 19 pages has exactly one `header.site-header` and one `<footer>`, and the serialized markup of the header is identical on all 19 (one sha1, `eab38c412b`), and so is the footer (`a749f1ff12`). `src/pages/restaurant-pos-software.astro:75` uses `<Header client:load />` and `:260` uses `<Footer />`, like the others. BRIEF.md section 13 says the older restaurant page is believed to carry its own header and footer: not so in this repo at B0. Other `<header>` elements on the pages are section heads (for example the bakery page has 7 `<header>` elements: 1 site header and 6 `class="vertical-section-head"`).

FAQ markup and step lists per page (from the built HTML; "answer in the HTML" means the first 60 characters of the JSON-LD answer were found in the page's text outside `script` and `style`, not that it was rendered and seen):

| URL | FAQ questions (JSON-LD) and how a question is marked up | answer in the HTML | step list built as |
|---|---|---|---|
| / | 11: `<summary>` inside `<details class=faq-item>`, closed, no heading inside | yes 11/11 | 3 x `<ol class=workflow-figure-steps>` (4 `<li>` each) with a typed digit in `span.workflow-step-num` (1 to 4) inside each `<li>`. Also typed `span.workflow-panel-number` (01 to 03) and `span.biz-card-num` (01 to 06) |
| /404.html | none | - | no step list found by the check |
| /bakery-billing-software/ | 6: `<summary>` inside `<details>`, closed, no heading inside | yes 6/6 | `div.vertical-step` x8 (two runs of 01 to 04), typed digits in `span.vertical-step-number`, no `<ol>` |
| /blog/ | 4: `<h3>` inside `section.blog-faq-item`, always visible | yes 4/4 | `<ol class=blog-process>` (4 `<li>`), no digits typed in the text |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | 5: `<h3>` inside `div.post-faq-item`, always visible | yes 5/5 | `<ol class=post-ol>` (12 `<li>`), no digits typed in the `<li>` text. 5 `<h3>` headings start with a typed "1." to "5." |
| /blog/restaurant-pos-software-checklist/ | 5: `<h3>` inside `section.post-faq-item`, always visible | yes 5/5 | `<ol class=post-ol>` (7 `<li>`), no digits typed in the `<li>` text. 10 `<h2>` headings start with a typed numeral |
| /blog/restaurant-pos-software-price-india/ | 3: `<h3>` inside a plain `<section>` in `div.seo-post-faq`, always visible | yes 3/3 | `<ol>` (6 `<li>`), no digits typed in the `<li>` text. 7 `<h3>` headings start with a typed "1." to "7." |
| /blog/restaurant-pos-vs-billing-software/ | 3: `<h3>` inside a plain `<section>` in `div.seo-post-faq`, always visible | yes 3/3 | no step list found by the check |
| /cafe-pos-software/ | 6: `<summary>` inside `<details>`, closed, no heading inside | yes 6/6 | `div.vertical-step` x8 (two runs of 01 to 04), typed digits in `span.vertical-step-number`, no `<ol>` |
| /contact-us/ | 4: `<h3>` inside `section.legal-faq-item`, always visible | yes 4/4 | `<ol>` (4 `<li>`), no digits typed in the text |
| /dhaba-billing-software/ | 6: `<summary>` inside `<details>`, closed, no heading inside | yes 6/6 | `div.vertical-step` x8 (two runs of 01 to 04), typed digits in `span.vertical-step-number`, no `<ol>` |
| /faq/ | 18: `<h2>` inside `section.faq-item`, always visible, no `<details>` | yes 18/18 | `<ol>` (4 `<li>`), no digits typed in the text |
| /pricing/ | 5: `<summary>` inside `<details>`, closed, no heading inside | yes 5/5 | `<ol class=pricing-test-grid>` (4 `<li>`), each `<li>` starts with a typed `<span>` 01 to 04 |
| /privacy-policy/ | 5: `<h3>` inside `section.legal-faq-item`, always visible | yes 5/5 | no step list found by the check |
| /qsr-billing-software/ | 6: `<summary>` inside `<details>`, closed, no heading inside | yes 6/6 | `div.vertical-step` x8 (two runs of 01 to 04), typed digits in `span.vertical-step-number`, no `<ol>` |
| /refund-policy/ | 4: `<h3>` inside `section.legal-faq-item`, always visible | yes 4/4 | `<ol>` (4 `<li>`), no digits typed in the text |
| /restaurant-pos-software/ | 6: `<summary>` inside `<details>`, closed, no heading inside | yes 6/6 | `div.vertical-step` x8 (two runs of 01 to 04), typed digits in `span.vertical-step-number`, no `<ol>` |
| /sweet-shop-billing/ | 7: `<summary>` inside `<details>`, closed, no heading inside | yes 7/7 | `div.vertical-step` x8 (two runs of 01 to 04), typed digits in `span.vertical-step-number`, no `<ol>` |
| /terms-and-conditions/ | 6: `<h3>` inside `section.legal-faq-item`, always visible | yes 6/6 | no `<ol>`. 14 `<h2>` headings start with a typed numeral ("1. Who is eligible to use Zipla POS?" and so on) |

<details><summary>Command output: landmarks, header and footer signatures, forms, scripts, FAQ and step checks</summary>

```
=== A. landmarks, shared header and footer (from the built HTML) ===
/404.html                                                  header.site-header=1 footer=1 main=1 nav=1 all <header>=1 header-sig=eab38c412b footer-sig=a749f1ff12
/bakery-billing-software/                                  header.site-header=1 footer=1 main=1 nav=2 all <header>=7 header-sig=eab38c412b footer-sig=a749f1ff12
/blog/                                                     header.site-header=1 footer=1 main=1 nav=1 all <header>=6 header-sig=eab38c412b footer-sig=a749f1ff12
/blog/restaurant-dhaba-gst-invoice-guide-2026/             header.site-header=1 footer=1 main=1 nav=2 all <header>=1 header-sig=eab38c412b footer-sig=a749f1ff12
/blog/restaurant-pos-software-checklist/                   header.site-header=1 footer=1 main=1 nav=2 all <header>=1 header-sig=eab38c412b footer-sig=a749f1ff12
/blog/restaurant-pos-software-price-india/                 header.site-header=1 footer=1 main=1 nav=2 all <header>=2 header-sig=eab38c412b footer-sig=a749f1ff12
/blog/restaurant-pos-vs-billing-software/                  header.site-header=1 footer=1 main=1 nav=2 all <header>=2 header-sig=eab38c412b footer-sig=a749f1ff12
/cafe-pos-software/                                        header.site-header=1 footer=1 main=1 nav=2 all <header>=6 header-sig=eab38c412b footer-sig=a749f1ff12
/contact-us/                                               header.site-header=1 footer=1 main=1 nav=2 all <header>=2 header-sig=eab38c412b footer-sig=a749f1ff12
/dhaba-billing-software/                                   header.site-header=1 footer=1 main=1 nav=2 all <header>=7 header-sig=eab38c412b footer-sig=a749f1ff12
/faq/                                                      header.site-header=1 footer=1 main=1 nav=1 all <header>=5 header-sig=eab38c412b footer-sig=a749f1ff12
/                                                          header.site-header=1 footer=1 main=1 nav=1 all <header>=1 header-sig=eab38c412b footer-sig=a749f1ff12
/pricing/                                                  header.site-header=1 footer=1 main=1 nav=2 all <header>=5 header-sig=eab38c412b footer-sig=a749f1ff12
/privacy-policy/                                           header.site-header=1 footer=1 main=1 nav=2 all <header>=1 header-sig=eab38c412b footer-sig=a749f1ff12
/qsr-billing-software/                                     header.site-header=1 footer=1 main=1 nav=2 all <header>=7 header-sig=eab38c412b footer-sig=a749f1ff12
/refund-policy/                                            header.site-header=1 footer=1 main=1 nav=2 all <header>=2 header-sig=eab38c412b footer-sig=a749f1ff12
/restaurant-pos-software/                                  header.site-header=1 footer=1 main=1 nav=2 all <header>=6 header-sig=eab38c412b footer-sig=a749f1ff12
/sweet-shop-billing/                                       header.site-header=1 footer=1 main=1 nav=2 all <header>=7 header-sig=eab38c412b footer-sig=a749f1ff12
/terms-and-conditions/                                     header.site-header=1 footer=1 main=1 nav=2 all <header>=1 header-sig=eab38c412b footer-sig=a749f1ff12
distinct site-header signatures: {'eab38c412b': 19}
distinct footer signatures: {'a749f1ff12': 19}

=== B. header nav items (home) : label | href ===
  [image link: alt=Zipla POS] | / | class=
  Features | /#features | class=
  Pricing | /pricing/ | class=
  FAQ | /faq/ | class=
  Get a Free WhatsApp Demo | /#demo | class=mobile-nav-demo
  Get a Free WhatsApp Demo | /#demo | class=btn-cta
  button class=mobile-menu-toggle aria-label='Open navigation menu' title=None visible-text='' aria-pressed=None
  button class=theme-toggle aria-label='Switch to light theme' title='Switch to light theme' visible-text='' aria-pressed='false'

=== B2. footer items in order (home) ===
  a  [image link] | /
  note  '© 2026 Zipla POS. Made in India.'
  a  Restaurant POS | /restaurant-pos-software/
  a  Cafe POS | /cafe-pos-software/
  a  Bakery Billing | /bakery-billing-software/
  a  Sweet Shop Billing | /sweet-shop-billing/
  a  QSR Billing | /qsr-billing-software/
  a  Dhaba Billing | /dhaba-billing-software/
  a  Pricing | /pricing/
  a  Blog | /blog/
  a  FAQ | /faq/
  a  Privacy Policy | /privacy-policy/
  button  'Privacy settings' id=zipla-consent-settings class=footer-settings
  a  Terms & Conditions | /terms-and-conditions/
  a  Refund Policy | /refund-policy/
  a  Contact Us | /contact-us/

=== C. forms, inputs, scripts, embeds per page ===
/404.html                                                  astro-island=1 | scripts plain=4 ld+json=1
/bakery-billing-software/                                  details=6 summary=6 astro-island=1 | scripts plain=4 ld+json=1
/blog/                                                     astro-island=1 | scripts plain=4 ld+json=1
/blog/restaurant-dhaba-gst-invoice-guide-2026/             astro-island=1 | scripts plain=4 ld+json=1
/blog/restaurant-pos-software-checklist/                   astro-island=1 | scripts plain=4 ld+json=1
/blog/restaurant-pos-software-price-india/                 astro-island=1 | scripts plain=4 ld+json=1
/blog/restaurant-pos-vs-billing-software/                  astro-island=1 | scripts plain=4 ld+json=1
/cafe-pos-software/                                        details=6 summary=6 astro-island=1 | scripts plain=4 ld+json=1
/contact-us/                                               astro-island=1 | scripts plain=4 ld+json=1
/dhaba-billing-software/                                   details=6 summary=6 astro-island=1 | scripts plain=4 ld+json=1
/faq/                                                      astro-island=1 | scripts plain=4 ld+json=1
/                                                          form=1 input=2 select=1 details=14 summary=14 astro-island=2 | scripts plain=5 ld+json=1
/pricing/                                                  details=5 summary=5 astro-island=1 | scripts plain=4 ld+json=1
/privacy-policy/                                           astro-island=1 | scripts plain=4 ld+json=1
/qsr-billing-software/                                     details=6 summary=6 astro-island=1 | scripts plain=4 ld+json=1
/refund-policy/                                            astro-island=1 | scripts plain=4 ld+json=1
/restaurant-pos-software/                                  details=6 summary=6 astro-island=1 | scripts plain=4 ld+json=1
/sweet-shop-billing/                                       details=7 summary=7 astro-island=1 | scripts plain=4 ld+json=1
/terms-and-conditions/                                     astro-island=1 | scripts plain=4 ld+json=1

=== D. FAQ markup per page (question text found in the HTML, innermost element and ancestors) ===
/bakery-billing-software/                                  JSON-LD questions=6 | answer start found in visible HTML text: 6/6 | question inside a closed <details>: 6
      6 x summary <- details < div.vertical-faq-list < div.vertical-container
/blog/                                                     JSON-LD questions=4 | answer start found in visible HTML text: 4/4 | question inside a closed <details>: 0
      4 x h3 <- section.blog-faq-item < div.blog-faq-list < div.blog-container
/blog/restaurant-dhaba-gst-invoice-guide-2026/             JSON-LD questions=5 | answer start found in visible HTML text: 5/5 | question inside a closed <details>: 0
      5 x h3 <- div.post-faq-item < div.post-faq < div.post-body
/blog/restaurant-pos-software-checklist/                   JSON-LD questions=5 | answer start found in visible HTML text: 5/5 | question inside a closed <details>: 0
      5 x h3 <- section.post-faq-item < div.post-faq < div.post-body
/blog/restaurant-pos-software-price-india/                 JSON-LD questions=3 | answer start found in visible HTML text: 3/3 | question inside a closed <details>: 0
      3 x h3 <- section < div.seo-post-faq < div.seo-post-body
/blog/restaurant-pos-vs-billing-software/                  JSON-LD questions=3 | answer start found in visible HTML text: 3/3 | question inside a closed <details>: 0
      3 x h3 <- section < div.seo-post-faq < div.seo-post-body
/cafe-pos-software/                                        JSON-LD questions=6 | answer start found in visible HTML text: 6/6 | question inside a closed <details>: 6
      6 x summary <- details < div.vertical-faq-list < div.vertical-container
/contact-us/                                               JSON-LD questions=4 | answer start found in visible HTML text: 4/4 | question inside a closed <details>: 0
      4 x h3 <- section.legal-faq-item < div.legal-faq-list < section.legal-faq
/dhaba-billing-software/                                   JSON-LD questions=6 | answer start found in visible HTML text: 6/6 | question inside a closed <details>: 6
      6 x summary <- details < div.vertical-faq-list < div.vertical-container
/faq/                                                      JSON-LD questions=18 | answer start found in visible HTML text: 18/18 | question inside a closed <details>: 0
      18 x h2 <- section.faq-item < div.faq-list < div.faq-container
/                                                          JSON-LD questions=11 | answer start found in visible HTML text: 11/11 | question inside a closed <details>: 11
      11 x summary <- details.faq-item < div.faq-list < section.faq
/pricing/                                                  JSON-LD questions=5 | answer start found in visible HTML text: 5/5 | question inside a closed <details>: 5
      5 x summary <- details < div.pricing-faq-list < div.pricing-container
/privacy-policy/                                           JSON-LD questions=5 | answer start found in visible HTML text: 5/5 | question inside a closed <details>: 0
      5 x h3 <- section.legal-faq-item < div.legal-faq-list < section.legal-faq
/qsr-billing-software/                                     JSON-LD questions=6 | answer start found in visible HTML text: 6/6 | question inside a closed <details>: 6
      6 x summary <- details < div.vertical-faq-list < div.vertical-container
/refund-policy/                                            JSON-LD questions=4 | answer start found in visible HTML text: 4/4 | question inside a closed <details>: 0
      4 x h3 <- section.legal-faq-item < div.legal-faq-list < section.legal-faq
/restaurant-pos-software/                                  JSON-LD questions=6 | answer start found in visible HTML text: 6/6 | question inside a closed <details>: 6
      6 x summary <- details < div.vertical-faq-list < div.vertical-container
/sweet-shop-billing/                                       JSON-LD questions=7 | answer start found in visible HTML text: 7/7 | question inside a closed <details>: 7
      7 x summary <- details < div.vertical-faq-list < div.vertical-container
/terms-and-conditions/                                     JSON-LD questions=6 | answer start found in visible HTML text: 6/6 | question inside a closed <details>: 0
      6 x h3 <- section.legal-faq-item < div.legal-faq-list < section.legal-faq

=== E. step lists per page ===
/bakery-billing-software/
    typed numeral element <span class='vertical-step-number'> x8 values=['01', '02', '03', '04', '01', '02', '03', '04']
/blog/
    <ol class='blog-process' aria-label=None> li=4 li-text-starts-with-digit=0 first='Choose the service model. Start with restaurant, c'
/blog/restaurant-dhaba-gst-invoice-guide-2026/
    <ol class='post-ol' aria-label=None> li=12 li-text-starts-with-digit=0 first='"TAX INVOICE" heading — Must appear clearly at the'
    headings starting with a numeral or 'Step N' (typed): ['1. Duplicate invoice numbers', '2. Writing "5% GST" without the CGST/SGST breakup', '3. Missing customer GSTIN for business buyers', '4. SAC code missing from the invoice', '5. Manual arithmetic errors']
/blog/restaurant-pos-software-checklist/
    <ol class='post-ol' aria-label=None> li=7 li-text-starts-with-digit=0 first='Pick five real menu items. Use names and prices yo'
    headings starting with a numeral or 'Step N' (typed): ['1. Start with a real menu, not a sample screen', '2. Check the invoice and GST workflow', '3. Mark the payment method your counter really uses', '4. Follow one order into the kitchen', '5. Understand the QR workflow before you compare it', '6. Test printing and bill sharing with your actual setup', '7. Ask what “offline billing” really means', '8. Check staff roles and the owner’s day-close view', '9. Include inventory only if it is part of your real problem', '10. Compare the full trial and pricing picture']
/blog/restaurant-pos-software-price-india/
    <ol class='' aria-label=None> li=6 li-text-starts-with-digit=0 first='Can the counter team create a bill from the real m'
    headings starting with a numeral or 'Step N' (typed): ['1. Test the real menu', '2. Test one complete bill', '3. Check the kitchen handoff', '4. Check QR ordering fit', '5. Check printer compatibility', '6. Understand connectivity limits', '7. Check owner review']
/cafe-pos-software/
    typed numeral element <span class='vertical-step-number'> x8 values=['01', '02', '03', '04', '01', '02', '03', '04']
/contact-us/
    <ol class='' aria-label=None> li=4 li-text-starts-with-digit=0 first='State your business name and registered phone numb'
/dhaba-billing-software/
    typed numeral element <span class='vertical-step-number'> x8 values=['01', '02', '03', '04', '01', '02', '03', '04']
/faq/
    <ol class='' aria-label=None> li=4 li-text-starts-with-digit=0 first='Set up familiar menu items and prices.'
/
    <ol class='workflow-figure-steps' aria-label='Counter POS Billing sequential steps'> li=4 li-text-starts-with-digit=0 first='1Build the orderSelect customer items from the cou'
    <ol class='workflow-figure-steps' aria-label='Table QR Ordering + Customer QR Home Ordering sequential steps'> li=4 li-text-starts-with-digit=0 first='1Choose the QR pathUse table QR in the outlet or C'
    <ol class='workflow-figure-steps' aria-label='Day-Close and Analytics sequential steps'> li=4 li-text-starts-with-digit=0 first='1Settle all billsClose remaining active customer t'
    typed numeral element <span class='biz-card-num'> x6 values=['01', '02', '03', '04', '05', '06']
    typed numeral element <span class='workflow-panel-number'> x3 values=['01', '02', '03']
    typed numeral element <span class='workflow-step-num'> x12 values=['1', '2', '3', '4', '1', '2', '3', '4']
/pricing/
    <ol class='pricing-test-grid' aria-label='Four trial checks'> li=4 li-text-starts-with-digit=0 first='01Your menuAdd familiar items, prices and categori'
/qsr-billing-software/
    typed numeral element <span class='vertical-step-number'> x8 values=['01', '02', '03', '04', '01', '02', '03', '04']
/refund-policy/
    <ol class='' aria-label=None> li=4 li-text-starts-with-digit=0 first='Send the request from your registered email addres'
/restaurant-pos-software/
    typed numeral element <span class='vertical-step-number'> x8 values=['01', '02', '03', '04', '01', '02', '03', '04']
/sweet-shop-billing/
    typed numeral element <span class='vertical-step-number'> x8 values=['01', '02', '03', '04', '01', '02', '03', '04']
/terms-and-conditions/
    headings starting with a numeral or 'Step N' (typed): ['1. Who is eligible to use Zipla POS?', '2. What are your account registration responsibilities?', '3. Does Zipla POS offer a free trial?', '4. How do Zipla POS subscriptions and payments work?', '5. What does the Zipla POS refund policy say?', '6. What is acceptable use of Zipla POS?', '7. Who owns Zipla POS and business data?', '8. Is Zipla POS service availability guaranteed?', '9. How do these Terms handle data and privacy?', '10. What limits apply to Zipla POS liability?', '11. How can a Zipla POS account be terminated?', '12. How will Zipla update these Terms and Conditions?', '13. Which law governs these Terms and Conditions?', '14. How can you contact Zipla about these Terms?']
```

</details>

## 4. Home hero facts

From `dist/index.html`, `section.hero` (source: `src/components/Hero.jsx:26-94`, props from `src/pages/index.astro:24-27`).

| item | value |
|---|---|
| H1 (`<h1 id="hero-title">`) | `Restaurant Billing Software for India` |
| eyebrow | `For Indian food businesses` |
| sentence 1 (`p.sub`) | `Billing, GST invoices, QR ordering and KDS for Indian restaurants, cafes, QSRs, bakeries, sweet shops and dhabas.` |
| sentence 2 (`p.hero-key-takeaway`) | `Short answer:` + `Restaurant billing software for India with counter billing, GST invoices, payment tracking, QR ordering and relevant kitchen workflows for Indian restaurants, cafes, QSRs, bakeries, sweet shops and dhabas.` |
| sentence 3 (`p.hero-plan-summary`) | `Complete plan:` + `₹4,999/year or ₹11,999 for 3 years prepaid, with a 14-day free trial and no credit card required.` |
| button 1 | `Book a WhatsApp Demo` -> `/#demo` (`a.btn-cta`) |
| button 2 | `Start 14-Day Free Trial` -> `https://app.zipla.in/register` (`a.hero-trial-link`) |
| assurances | `✓ No credit card required`, `✓ 14-day free trial`, `✓ Offline billing after menu loads; online payments need internet` |
| chips | `Supported thermal printing`, `Android, tablet & Windows PC` |
| device bar text | `zipla POS`, `Built around your service workflow` |
| callouts | `Counter billing` / `GST invoices and payment marking`, `Kitchen handoff` / `KDS for active order queues` |
| caption | `Actual Zipla POS order billing and counter interface.` |
| hero image | the only picture in the hero: `src=/screenshots/ss-new-order.webp`, `alt="Zipla POS new-order billing interface"`, `width=1232`, `height=860` (actual file 1232x860), `loading=eager`, `fetchpriority=high`, `decoding=async` |

Does the repo's hero already have each of these (checked in the built HTML, and by looking at all 16 pictures in the repo, section 6)?

| item | answer |
|---|---|
| a printer photo | no. None of the 16 pictures in `public/` shows a printer, and the hero has one picture, a laptop mockup |
| a drawn sample bill | no, not in the hero. Elsewhere on Home, `/workflows/counter-billing-workflow.webp` is an illustration whose third step is a receipt drawn without readable text. A laptop picture with a bill on its screen, `/screenshots/ss-gst-invoice.webp`, is not on Home (it is on `/blog/`, `/dhaba-billing-software/` and `/sweet-shop-billing/`) |
| a phone dashboard picture | no standalone one. The only picture with a phone is `/screenshots/ss-multi-device.webp` (laptop, tablet and phone together, all showing the Dashboard). It is on `/cafe-pos-software/` and `/restaurant-pos-software/`, not on Home |
| the product-name text that BRIEF.md 6.1 item 4 asks about (a name Kabir has not decided, so it is not repeated here) | no: 0 hits for "Billing Machine" in repo source and in the build, case-insensitive (section 2.12) |

Where the picture starts on a phone screen: I do not know. `fold_check.py` measures the H1 and the first action only (numbers in section 8).

<details><summary>Command output: hero element dump</summary>

```
=== 4. HOME HERO (built HTML, section.hero) ===
section attrs: {'class': 'hero', 'aria-labelledby': 'hero-title'}
<div class=hero-inner>
  <div class=hero-copy>
    <span class=eyebrow>
      text: 'For Indian food businesses'
    <h1>
      text: 'Restaurant Billing Software for India'
    <p class=sub>
      text: 'Billing, GST invoices, QR ordering and KDS for Indian restaurants, cafes, QSRs, bakeries, sweet shops and dhabas.'
    <p class=hero-key-takeaway>
      <strong>
        text: 'Short answer:'
      text: 'Restaurant billing software for India with counter billing, GST invoices, payment tracking, QR ordering and relevant kitchen workflows for Indian restaurants, cafes, QSRs, bakeries, sweet shops and dhabas.'
    <p class=hero-key-takeaway hero-plan-summary>
      <strong>
        text: 'Complete plan:'
      text: '₹4,999/year or ₹11,999 for 3 years prepaid, with a 14-day free trial and no credit card required.'
    <div class=hero-ctas>
      <a class=btn-cta href='/#demo'>
        text: 'Book a WhatsApp Demo'
      <a class=hero-trial-link href='https://app.zipla.in/register'>
        text: 'Start 14-Day Free Trial'
    <div class=hero-assurances>
      <div>
        <span>
          <span>
            text: '✓'
          text: 'No credit card required'
        <span>
          <span>
            text: '✓'
          text: '14-day free trial'
        <span>
          <span>
            text: '✓'
          text: 'Offline billing after menu loads; online payments need internet'
      <div>
        <span>
          text: 'Supported thermal printing'
        <span>
          text: 'Android, tablet & Windows PC'
  <figure class=hero-product>
    <div class=hero-product-glow>
    <div class=hero-device>
      <div class=hero-device-bar>
        <span class=hero-device-brand>
          <span>
          text: 'zipla POS'
        <span class=hero-device-label>
          text: 'Built around your service workflow'
      <img src='/screenshots/ss-new-order.webp' alt='Zipla POS new-order billing interface' width='1232' height='860' loading='eager' fetchpriority='high' decoding='async'>
    <div class=hero-callout hero-callout--billing>
      <span class=hero-callout-icon>
        <svg aria-hidden='true'>
      <span>
        <strong>
          text: 'Counter billing'
        <small>
          text: 'GST invoices and payment marking'
    <div class=hero-callout hero-callout--kitchen>
      <span class=hero-callout-icon>
        <svg aria-hidden='true'>
      <span>
        <strong>
          text: 'Kitchen handoff'
        <small>
          text: 'KDS for active order queues'
    <figcaption>
      text: 'Actual Zipla POS order billing and counter interface.'
```

</details>

## 5. Header, footer, contact data, prices

### Header (`src/components/Header.jsx:98-168`, same on all 19 pages)

| order | element | label | href |
|---|---|---|---|
| 1 | logo link (`img alt="Zipla POS"`, 112x32) | (image) | `/` |
| 2 | nav link | `Features` | `/#features` |
| 3 | nav link | `Pricing` | `/pricing/` |
| 4 | nav link | `FAQ` | `/faq/` |
| 5 | nav link, class `mobile-nav-demo` | `Get a Free WhatsApp Demo` | `/#demo` |
| 6 | button, class `mobile-menu-toggle` | no visible text. `aria-label` "Open navigation menu" | |
| 7 | button, class `theme-toggle` | no visible text. `aria-label` "Switch to light theme" | |
| 8 | link, class `btn-cta` | `Get a Free WhatsApp Demo` | `/#demo` |

Every page has 6 links and 2 buttons before `<main>` (command output below). From CSS only (not measured in a browser): `index.css:313-317` hides `.header-actions .btn-cta` (the gold button) at 760 px wide and below, and `index.css:45, 125` show `.mobile-nav-demo` (same label, same href) inside the opened menu. What the live header shows on a phone: I do not know.

### Footer (`src/components/Footer.jsx:3-12`, same on all 19 pages), in order

- logo link `/` (image, 640x211 attributes, `loading="lazy"`)
- note: `© 2026 Zipla POS. Made in India.`
- row 1: `Restaurant POS` `/restaurant-pos-software/`, `Cafe POS` `/cafe-pos-software/`, `Bakery Billing` `/bakery-billing-software/`, `Sweet Shop Billing` `/sweet-shop-billing/`, `QSR Billing` `/qsr-billing-software/`, `Dhaba Billing` `/dhaba-billing-software/`, `Pricing` `/pricing/`, `Blog` `/blog/`, `FAQ` `/faq/`
- row 2: `Privacy Policy` `/privacy-policy/`, button `Privacy settings` (`id="zipla-consent-settings"`), `Terms & Conditions` `/terms-and-conditions/`, `Refund Policy` `/refund-policy/`, `Contact Us` `/contact-us/`

### Every place with a phone number or `wa.me` link (`grep -rnE`, source; 41 lines)

The business phone number appears as `917817851009` or `+91 7817851009` in:

- `src/constants.js:1-3` (`WHATSAPP_NUMBER`, `waLink()`)
- `src/layouts/Layout.astro:42` (JSON-LD `telephone`, so it is in every built page's head), `:380` (the consent script tests for `https://wa.me/` hrefs)
- `src/components/DemoForm.jsx:2, 46, 57` (builds a `wa.me` link in JavaScript on submit)
- `src/components/Testimonials.jsx:2, 36` (`waLink(...)`, component not rendered, see 2.5)
- `src/pages/contact-us.astro:14` (FAQ answer text), `:83`, `:88` (`tel:+917817851009`), `:89` (`https://wa.me/917817851009`), `:102`, `:104`

In the built HTML, the only `<a href="https://wa.me/...">` links are on `/contact-us/` (checked in the external-link listing in section 12). Visible text containing the phone digits: `/contact-us/` only (checked in the snapshot's text segments of all 19 pages); the number is also in the JSON-LD of every page. The email `support@zipla.in` is visible text on `/contact-us/`, `/faq/`, `/privacy-policy/`, `/refund-policy/` and `/terms-and-conditions/`, and is in `Layout.astro:37, 41`.

<details><summary>Command output: all 41 lines</summary>

```
src/components/DemoForm.jsx:2:import { WHATSAPP_NUMBER } from '../constants.js'
src/components/DemoForm.jsx:46:    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer')
src/components/DemoForm.jsx:57:          <p>We opened WhatsApp with your details. If it did not open, <a href={'https://wa.me/' + WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer">tap here</a
src/components/Testimonials.jsx:2:import { waLink } from '../constants.js'
src/components/Testimonials.jsx:36:          <a className="btn-ghost" href={waLink('Hi, I would like to share my Zipla POS experience video')} target="_blank" rel="noopener noreferrer">Share Your Vide
src/layouts/Layout.astro:37:    "email": "support@zipla.in",
src/layouts/Layout.astro:41:      "email": "support@zipla.in",
src/layouts/Layout.astro:42:      "telephone": "+91 7817851009"
src/layouts/Layout.astro:380:        if (href.indexOf('https://wa.me/') === 0) {
src/constants.js:1:export const WHATSAPP_NUMBER = '917817851009'
src/constants.js:2:export function waLink(message) {
src/constants.js:3:  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
src/pages/terms-and-conditions.astro:16:  { question: "How can I stop using Zipla POS or request account deletion?", answer: "You may stop using Zipla POS at any time. To request account and data dele
src/pages/terms-and-conditions.astro:87:          <li>Notifying us immediately at <a href="mailto:support@zipla.in">support@zipla.in</a> if you suspect unauthorized access</li>
src/pages/terms-and-conditions.astro:116:          <li>Refund request must be submitted within 7 days of payment via email to <a href="mailto:support@zipla.in">support@zipla.in</a></li>
src/pages/terms-and-conditions.astro:164:        <p>You may stop using Zipla POS at any time. To delete your account and data, email us at <a href="mailto:support@zipla.in">support@zipla.in</a>. Subsc
src/pages/terms-and-conditions.astro:182:        <p>Before initiating legal action, we encourage you to contact us at <a href="mailto:support@zipla.in">support@zipla.in</a> to resolve the issue inform
src/pages/terms-and-conditions.astro:185:        <p><strong>Short answer:</strong> For questions about these Terms, email support@zipla.in.</p>
src/pages/terms-and-conditions.astro:190:          Email: <a href="mailto:support@zipla.in">support@zipla.in</a></p>
src/pages/contact-us.astro:14:    answer: 'Contact Zipla POS support at support@zipla.in, by phone or WhatsApp at +91 7817851009.',
src/pages/contact-us.astro:22:    answer: 'Email support@zipla.in from your registered email address. Include your business name, registered phone number, payment date and whether you want cancellatio
src/pages/contact-us.astro:83:        <p class="legal-direct-answer"><strong>Short answer:</strong> Email <a href="mailto:support@zipla.in">support@zipla.in</a>, call <a href="tel:+917817851009">+91 7
src/pages/contact-us.astro:87:            <div><dt>Support email</dt><dd><a href="mailto:support@zipla.in">support@zipla.in</a></dd></div>
src/pages/contact-us.astro:88:            <div><dt>Support phone</dt><dd><a href="tel:+917817851009">+91 7817851009</a></dd></div>
src/pages/contact-us.astro:89:            <div><dt>WhatsApp</dt><dd><a href="https://wa.me/917817851009" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></dd></div>
src/pages/contact-us.astro:102:              <tr><th scope="row">Product or setup help</th><td><a href="mailto:support@zipla.in">Email</a>, <a href="tel:+917817851009">call</a> or <a href="https://wa.
src/pages/contact-us.astro:103:              <tr><th scope="row">Subscription, cancellation or refund</th><td><a href="mailto:support@zipla.in">support@zipla.in</a></td><td>Business name, registered p
src/pages/contact-us.astro:104:              <tr><th scope="row">General business enquiry</th><td><a href="mailto:support@zipla.in">Email</a>, <a href="tel:+917817851009">call</a> or <a href="https://
src/pages/contact-us.astro:124:        <p class="legal-direct-answer"><strong>Short answer:</strong> Send the request to <a href="mailto:support@zipla.in">support@zipla.in</a> from your registered ema
src/pages/faq.astro:29:  { question: 'How can I get product or account help?', answer: 'For product, setup or account help, contact support@zipla.in.' },
src/pages/faq.astro:79:      <section class="faq-section faq-section--compact"><div class="faq-container"><div class="faq-cta"><h2>Need to see the workflow with your own menu?</h2><p>Start the 14-day 
src/pages/refund-policy.astro:22:    answer: 'Email support@zipla.in from your registered email address within 7 days of payment. Include your business name, registered phone number, payment date and 
src/pages/refund-policy.astro:96:              <tr><th scope="row">Where to send it</th><td>Email <a href="mailto:support@zipla.in">support@zipla.in</a> from your registered email address.</td></tr>
src/pages/refund-policy.astro:105:        <p class="legal-direct-answer"><strong>Short answer:</strong> Email <a href="mailto:support@zipla.in">support@zipla.in</a> with the account and payment detail
src/pages/refund-policy.astro:129:          Email: <a href="mailto:support@zipla.in">support@zipla.in</a></p>
src/pages/privacy-policy.astro:13:  { question: "How can I make a privacy request to Zipla POS?", answer: "Email support@zipla.in for an access, correction, deletion or portability request. We will re
src/pages/privacy-policy.astro:149:        <p>Zipla POS is a business software tool intended for adults (18 years or older). We do not knowingly collect personal data from anyone under the age of 18. 
src/pages/privacy-policy.astro:160:        <p>To exercise any of these rights, email us at <a href="mailto:support@zipla.in">support@zipla.in</a>. We will review the request and reply.</p>
src/pages/privacy-policy.astro:163:          <p><strong>Example:</strong> email <a href="mailto:support@zipla.in">support@zipla.in</a> with the subject “Privacy request for my Zipla POS account”, your
src/pages/privacy-policy.astro:175:        <p><strong>Short answer:</strong> For privacy questions, data requests or concerns, email support@zipla.in.</p>
src/pages/privacy-policy.astro:179:          Email: <a href="mailto:support@zipla.in">support@zipla.in</a></p>
```

</details>

### Every rupee price (file and line; `grep -rnE "₹|\"price\"|priceCurrency" src`)

The only prices in the repo are ₹4,999 per year, ₹11,999 for 3 years prepaid, and ₹1,999 for optional on-site onboarding (`Pricing.jsx:116`, `terms-and-conditions.astro:102`, `pricing.astro:137`). `Layout.astro:70-71` carries the first two as JSON-LD `Offer` prices (`4999`, `11999`). `₹` is also used as a symbol in `vertical-callout-mark` spans.

<details><summary>Command output: all 48 lines</summary>

```
src/components/Pricing.jsx:78:            ₹4,999<span>/year</span>
src/components/Pricing.jsx:82:            <strong>Same Complete plan</strong> — ₹11,999 for 3 years prepaid
src/components/Pricing.jsx:116:              <span>₹1,999 separately from the software plan. Confirm the current scope before purchase.</span>
src/components/Features.jsx:392:              <span><strong>Complete plan:</strong> ₹4,999/year or ₹11,999 for 3 years prepaid, covering the listed counter, table, customer QR and kitchen workflows</s
src/layouts/Layout.astro:70:      { "@type": "Offer", "price": "4999", "priceCurrency": "INR", "name": "Complete plan", "description": "Annual subscription" },
src/layouts/Layout.astro:71:      { "@type": "Offer", "price": "11999", "priceCurrency": "INR", "name": "Complete plan — 3-year prepaid term", "description": "Three-year prepaid subscription term" }
src/pages/terms-and-conditions.astro:14:  { question: "What are the current Zipla POS plan prices?", answer: "The Complete plan is ₹4,999 per year or ₹11,999 for a 3-year prepaid term. Guided online s
src/pages/terms-and-conditions.astro:100:          <li><strong>Complete plan:</strong> ₹4,999 per year</li>
src/pages/terms-and-conditions.astro:101:          <li><strong>Complete plan — 3-year prepaid term:</strong> ₹11,999 for 3 years</li>
src/pages/terms-and-conditions.astro:102:          <li><strong>Optional offline onboarding:</strong> ₹1,999 one-time only when our team visits for complete setup and 2-hour staff training. Guided onli
src/pages/restaurant-pos-software.astro:9:const description = 'Complete restaurant billing and ordering software for Indian table-service and counter restaurants. The Complete plan is ₹4,999/year or ₹
src/pages/restaurant-pos-software.astro:106:            <span class="vertical-callout-mark">₹</span><span><strong>Counter billing</strong><small>GST invoices and payment modes</small></span>
src/pages/dhaba-billing-software.astro:9:const description = 'Complete dhaba billing and ordering software for Indian owner-led eateries. The Complete plan is ₹4,999/year or ₹11,999 for 3 years prepai
src/pages/dhaba-billing-software.astro:28:    <section class="vertical-hero" aria-labelledby="dhaba-hero-title"><div class="vertical-container vertical-hero-grid"><div><span class="vertical-eyebrow">D
src/pages/dhaba-billing-software.astro:33:    <section class="vertical-section vertical-section--muted" aria-labelledby="dhaba-plan-title"><div class="vertical-container"><header class="vertical-secti
src/pages/cafe-pos-software.astro:9:const description = 'Complete cafe billing and ordering software for Indian counter and table-service cafés. The Complete plan is ₹4,999/year or ₹11,999 for 3 years
src/pages/cafe-pos-software.astro:35:    answer: 'The Complete plan is ₹4,999 per year or ₹11,999 for a 3-year prepaid term. A 14-day free trial is available with no credit card required.',
src/pages/cafe-pos-software.astro:104:            <span class="vertical-callout-mark">₹</span><span><strong>Counter billing</strong><small>GST invoices and payment modes</small></span>
src/pages/faq.astro:15:  { question: 'How much does Zipla POS cost?', answer: 'The Complete plan costs ₹4,999 per year or ₹11,999 for a 3-year prepaid term. A 14-day free trial is available with no cr
src/pages/faq.astro:66:          <header class="faq-section-head"><span>Plan decision</span><h2 id="faq-plan-title">What does the Complete plan cover?</h2><p><strong>Short answer:</strong> One Complet
src/pages/blog/restaurant-pos-software-price-india.astro:12:  { question: 'How much does Zipla POS cost in India?', answer: 'The Zipla POS Complete plan costs ₹4,999 per year or ₹11,999 for 3 years pr
src/pages/blog/restaurant-pos-software-price-india.astro:61:        <div class="seo-post-fact"><strong>₹4,999 per year</strong><span>or ₹11,999 for 3 years prepaid</span><span>14-day free trial · No c
src/pages/blog/restaurant-dhaba-gst-invoice-guide-2026.astro:13:    answer: "Invoice requirements depend on the type of supply, recipient and applicable conditions. Section 31 contains a below-₹200 ex
src/pages/blog/restaurant-dhaba-gst-invoice-guide-2026.astro:194:              <p>Invoice requirements depend on the type of supply, recipient and applicable conditions. Section 31 contains a below-₹2
src/pages/blog/restaurant-dhaba-gst-invoice-guide-2026.astro:225:            <h2>GST Invoice Workflows for Your Restaurant — ₹4,999/Year</h2>
src/pages/blog/restaurant-pos-software-checklist.astro:32:    answer: 'The current Complete plan is ₹4,999 per year or ₹11,999 for 3 years prepaid. The trial is 14 days and does not require a credit c
src/pages/blog/restaurant-pos-software-checklist.astro:160:          <p>Zipla POS currently offers a Complete plan at ₹4,999 per year or ₹11,999 for 3 years prepaid. The trial is 14 days and does not 
src/pages/blog/index.astro:98:                <li><strong>Complete plan:</strong> ₹4,999 per year or ₹11,999 for 3 years prepaid; includes the listed counter billing, GST bills, inventory low-stock al
src/pages/pricing.astro:9:const description = 'See Zipla POS pricing for Indian restaurants, cafes, QSRs, bakeries, sweet shops and dhabas: ₹4,999/year or ₹11,999 for 3 years prepaid, with a 14-day fr
src/pages/pricing.astro:15:    answer: 'The Zipla POS Complete plan costs ₹4,999 per year or ₹11,999 for a 3-year prepaid term.',
src/pages/pricing.astro:83:        <p class="pricing-summary"><strong>Key takeaway:</strong> The Zipla POS Complete plan costs ₹4,999 per year or ₹11,999 for 3 years prepaid, with a 14-day free trial 
src/pages/pricing.astro:111:          <div class="pricing-amount">₹4,999 <small>/ year</small></div>
src/pages/pricing.astro:112:          <p class="pricing-prepaid"><strong>₹11,999</strong> for 3 years prepaid</p>
src/pages/pricing.astro:134:              <tr><th scope="row">Complete plan</th><td>₹4,999 per year</td><td>Review counter billing, configured GST invoices and payment tracking.</td></tr>
src/pages/pricing.astro:135:              <tr><th scope="row">3-year prepaid</th><td>₹11,999</td><td>Choose this term only after testing the workflow with your own menu.</td></tr>
src/pages/pricing.astro:137:              <tr><th scope="row">Optional on-site onboarding</th><td>₹1,999 separately</td><td>Confirm the current scope before purchase; it is separate from the software 
src/pages/sweet-shop-billing.astro:39:    answer: 'The Complete plan is ₹4,999 per year or ₹11,999 for a 3-year prepaid term. A 14-day free trial is available with no credit card required.',
src/pages/sweet-shop-billing.astro:111:              <span class="vertical-callout-mark">₹</span><span><strong>Mixed bills</strong><small>Weight and fixed-price items</small></span>
src/pages/sweet-shop-billing.astro:197:                  <tr><th scope="row">Retail mithai or namkeen counter</th><td>Counter billing for weight and fixed-price items, plus inventory with low-stock al
src/pages/sweet-shop-billing.astro:198:                  <tr><th scope="row">Sweet shop with service or kitchen handoff</th><td>Add table QR ordering, Kitchen Display System, Bluetooth KOT auto-print,
src/pages/qsr-billing-software.astro:9:const description = 'Complete QSR billing and ordering software for Indian counter-led outlets. The Complete plan is ₹4,999/year or ₹11,999 for 3 years prepaid.'
src/pages/qsr-billing-software.astro:48:            <div class="vertical-callout vertical-callout--left"><span class="vertical-callout-mark">₹</span><span><strong>Counter billing</strong><small>GST in
src/pages/qsr-billing-software.astro:62:      <section class="vertical-section vertical-section--muted" aria-labelledby="qsr-plan-title"><div class="vertical-container"><header class="vertical-section
src/pages/bakery-billing-software.astro:35:    answer: 'The Complete plan is ₹4,999 per year or ₹11,999 for a 3-year prepaid term, with a 14-day free trial and no credit card required. It includes cou
src/pages/bakery-billing-software.astro:107:            <span class="vertical-callout-mark">₹</span><span><strong>Mixed bills</strong><small>Weight, piece and fixed price</small></span>
src/pages/bakery-billing-software.astro:193:                <tr><th scope="row">Retail bakery counter</th><td>Counter billing for weight, piece and fixed-price items, plus inventory with low-stock ale
src/pages/bakery-billing-software.astro:194:                <tr><th scope="row">Bakery with seating or a kitchen handoff</th><td>Add table QR ordering, Kitchen Display System, Bluetooth KOT auto-print
src/pages/index.astro:27:  '₹4,999/year or ₹11,999 for 3 years prepaid, with a 14-day free trial and no credit card required.';
```

</details>

### Every "Last reviewed", "Last updated" or date line (source)

```
src/pages/terms-and-conditions.astro:60:        <p class="legal-meta">Last updated: August 13, 2026 &nbsp;|&nbsp; Effective: August 13, 2026</p>
src/pages/contact-us.astro:74:        <p class="legal-meta">Last updated: <time datetime="2026-09-22">September 22, 2026</time></p>
src/pages/faq.astro:53:          <p class="faq-review-meta"><strong>Last reviewed:</strong> <time datetime="2026-09-21">21 September 2026</time>. Product and plan details on this page reflect the curr
src/pages/blog/restaurant-pos-software-price-india.astro:41:        <p class="seo-post-meta"><strong>Last reviewed:</strong> <time datetime="2026-09-22">22 September 2026</time> · For Indian restauran
src/pages/blog/restaurant-dhaba-gst-invoice-guide-2026.astro:96:          <span class="post-date">August 20, 2026 · Updated September 8, 2026</span>
src/pages/blog/restaurant-pos-software-checklist.astro:101:          <span class="post-date">Updated September 21, 2026</span>
src/pages/blog/restaurant-pos-vs-billing-software.astro:41:        <p class="seo-post-meta"><strong>Last reviewed:</strong> <time datetime="2026-09-22">22 September 2026</time> · A practical guide for
src/pages/blog/index.astro:39:          <p class="blog-review-meta"><strong>Last reviewed:</strong> <time datetime="2026-09-22">22 September 2026</time>. Product and plan details on this page are chec
src/pages/pricing.astro:89:        <p class="pricing-review"><strong>Last reviewed:</strong> <time datetime="2026-09-22">22 September 2026</time>. Plan details on this page reflect the current Zipla P
src/pages/refund-policy.astro:74:        <p class="legal-meta">Last updated: <time datetime="2026-08-25">August 25, 2026</time></p>
src/pages/privacy-policy.astro:16:  { question: "How will changes to this Privacy Policy be communicated?", answer: "This policy says that the Last updated date will change when the policy is updated.
src/pages/privacy-policy.astro:59:        <p class="legal-meta">Last updated: August 13, 2026 &nbsp;|&nbsp; Effective: August 13, 2026</p>
src/pages/privacy-policy.astro:167:        <p><strong>Short answer:</strong> This policy says the Last updated date will change when the policy changes.</p>
src/pages/privacy-policy.astro:168:        <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Review this page before c
```

JSON-LD dates also exist (`datePublished` and `dateModified`: contact, pricing, refund, the four articles).

### Which of these conflict with the prototype

The prototype is not in this cut: I do not know. What I could compare is what BRIEF.md says about the live site:

- BRIEF.md section 5 lists the footer pages from "Kabir's footer screenshot": Restaurant POS, Cafe POS, Bakery Billing, Sweet Shop Billing, QSR Billing, Dhaba Billing, Pricing, Blog, FAQ, Contact Us, Privacy Policy, Terms and Conditions, Refund Policy, Shipping Policy, "Privacy settings". The repo's footer has no Shipping Policy link and no Shipping Policy page in the build (19 pages, none for it). `Contact Us` is the last link of row 2 in the repo, and the label is `Terms & Conditions` (with an ampersand).
- BRIEF.md section 13: the older restaurant page "lists Starter at 2,999 rupees and Pro at 4,999 rupees". The build has 0 files containing `Starter`, `Pro plan`, `2,999`, `5,999` or `10,000` (command output in section 12). The restaurant page shows ₹4,999/year and ₹11,999 for 3 years in its `description` text only (`restaurant-pos-software.astro:9`).
- BRIEF.md section 13: "the older restaurant page carries its own header (four links) and footer (two links) and has no breadcrumb". In the repo it uses the shared Header and Footer, and it has a breadcrumb (`restaurant-pos-software.astro:78`, `nav.vertical-breadcrumbs`).
- BRIEF.md section 13: "+91 7817851009" is the number in the repo. The home page shows no phone number as visible text (only in JSON-LD). Matches the note that "a fetch said the home page shows none".
- BRIEF.md section 13: home H1 "Restaurant Billing Software for India" and 11 FAQ questions: match. Sitemap 18 slash URLs and 19 built pages: match, and the 19th is `/404.html`. The page list in BRIEF.md section 13 equals the built list (18 URLs plus the 404 page).

## 6. Pack versus repo

`images/` is not in this cut, so the sha256 and alt-text comparison with the pack's images is skipped: I do not know. This also means I do not know whether the repo's `ss-customer-menu.webp` is the picture the pack calls outdated.

Prototype sentences, character for character (`grep -rnF`, case-sensitive, in `src` and `public`; then in `dist`):

```
=== 6. PROTOTYPE SENTENCES (exact, case-sensitive; then case-insensitive) in src and dist ===
'Book a WhatsApp demo for your own workflow': src exact=1 src case-insens=1 | build files exact=1 case-insens=1
    src: src/components/Workflow.jsx:558:          Book a WhatsApp demo for your own workflow &rarr;
    build: index.html
'Supported setup options': src exact=1 src case-insens=1 | build files exact=1 case-insens=1
    src: src/components/Pricing.jsx:153:            Supported setup options
    build: index.html
```

Both exist. "Book a WhatsApp demo for your own workflow" is `src/components/Workflow.jsx:558`, inside a link whose text continues with ` →` (`&rarr;`). "Supported setup options" is `src/components/Pricing.jsx:153`. Both are in the built `index.html`.

Every product picture on every page. I opened all 16 pictures in `public/screenshots/` and `public/workflows/` (contact sheets rendered with PIL) and looked at them. "Device shown" is what I saw. "Phone version of the same screen in the repo": I looked at the whole repo; `images/` is not in this cut.

| page | file | `<img>` width x height | file px | device shown | alt text | loading, fetchpriority | phone version of the same screen in the repo |
|---|---|---|---|---|---|---|---|
| / | `/screenshots/ss-new-order.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the New Order (item picker) screen | Zipla POS new-order billing interface | eager, high | no |
| / | `/workflows/counter-billing-workflow.webp` | 1200x900 | 1200x900 | drawing, not a screenshot (POS screen, payment options, receipt) | Illustrative counter POS billing workflow from menu selection to payment and customer bill | lazy, (none) | n/a (drawing) |
| / | `/screenshots/ss-new-order.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the New Order (item picker) screen | Actual Zipla POS new-order screen for counter billing | lazy, (none) | no |
| / | `/workflows/qr-ordering-workflow.webp` | 1200x900 | 1200x900 | drawing, not a screenshot (QR stand, phone, kitchen display) | Illustrative QR ordering workflow from a table or home order to menu selection and kitchen handoff | lazy, (none) | n/a (drawing) |
| / | `/screenshots/ss-customer-menu.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows a customer menu page (QR ordering) | Actual Zipla POS customer menu screen used for QR ordering | lazy, (none) | no |
| / | `/screenshots/ss-kds.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Kitchen Display System (KDS): order columns Confirmed, Preparing, Ready | Actual Zipla POS Kitchen Display System screen for active kitchen orders | lazy, (none) | no (KDS stays wide under D6) |
| / | `/workflows/day-close-workflow.webp` | 1200x675 | 1200x675 | drawing, not a screenshot | Illustrative day-close workflow from completed orders to payment review and business reporting | lazy, (none) | n/a (drawing) |
| / | `/workflows/day-close-report-screen.webp` | 994x631 | 994x631 | flat screenshot of a Day Close Report screen, no device frame. Device it was captured on: I do not know | Actual Zipla POS day-close report showing orders, revenue, payments, voids and expected cash | lazy, (none) | no |
| / | `/workflows/analytics-dashboard-screen.webp` | 1100x694 | 1100x694 | flat screenshot of an Analytics screen (dark), no device frame. Device it was captured on: I do not know | Actual Zipla POS analytics dashboard with sales metrics and payment split | lazy, (none) | no |
| /bakery-billing-software/ | `/screenshots/ss-menu-mgmt.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows menu management | Zipla POS menu management screen for a bakery billing workflow | (none), (none) | no |
| /bakery-billing-software/ | `/screenshots/ss-inventory.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Inventory screen | Zipla POS inventory screen for bakery stock visibility | lazy, (none) | no |
| /blog/ | `/screenshots/ss-gst-invoice.webp` | 1232x860 | 1234x864 | laptop mockup; screen shows a tax invoice (a bill) | Actual Zipla POS GST invoice screen used as product reference in billing guides | lazy, (none) | no |
| /cafe-pos-software/ | `/screenshots/ss-multi-device.webp` | 1232x860 | 1232x860 | one picture with a laptop, a tablet and a phone, all showing the Dashboard | Zipla POS shown on desktop, tablet, and Android phone for café operations | (none), (none) | a phone is inside this picture, there is no separate phone file |
| /cafe-pos-software/ | `/screenshots/ss-customer-menu.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows a customer menu page (QR ordering) | Zipla POS customer menu for café QR ordering | lazy, (none) | no |
| /dhaba-billing-software/ | `/screenshots/ss-dashboard.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Dashboard screen | Actual Zipla POS dashboard screenshot for a dhaba billing workflow | (none), (none) | no |
| /dhaba-billing-software/ | `/screenshots/ss-gst-invoice.webp` | 1232x860 | 1234x864 | laptop mockup; screen shows a tax invoice (a bill) | Actual Zipla POS GST invoice screenshot for a dhaba customer bill | lazy, (none) | no |
| /faq/ | `/screenshots/ss-new-order.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the New Order (item picker) screen | Actual Zipla POS new-order screen for a restaurant billing workflow | lazy, (none) | no |
| /pricing/ | `/screenshots/ss-dashboard.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Dashboard screen | Zipla POS dashboard interface showing billing, inventory, kitchen display and customer menu entry points | lazy, (none) | no |
| /qsr-billing-software/ | `/screenshots/ss-new-order.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the New Order (item picker) screen | Actual Zipla POS new-order screen for a QSR counter billing workflow | (none), (none) | no |
| /qsr-billing-software/ | `/screenshots/ss-kds.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Kitchen Display System (KDS): order columns Confirmed, Preparing, Ready | Actual Zipla POS Kitchen Display System screenshot for a QSR kitchen order queue | lazy, (none) | no (KDS stays wide under D6) |
| /restaurant-pos-software/ | `/screenshots/ss-multi-device.webp` | 1232x860 | 1232x860 | one picture with a laptop, a tablet and a phone, all showing the Dashboard | Actual Zipla POS product screenshot shown on desktop, tablet, and Android phone for restaurant billing | (none), (none) | a phone is inside this picture, there is no separate phone file |
| /restaurant-pos-software/ | `/screenshots/ss-kds.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Kitchen Display System (KDS): order columns Confirmed, Preparing, Ready | Actual Zipla POS Kitchen Display System screenshot for a restaurant kitchen order queue | lazy, (none) | no (KDS stays wide under D6) |
| /sweet-shop-billing/ | `/screenshots/ss-dashboard.webp` | 1232x860 | 1232x860 | laptop mockup; screen shows the Dashboard screen | Actual Zipla POS dashboard screenshot for a sweet shop billing workflow | (none), (none) | no |
| /sweet-shop-billing/ | `/screenshots/ss-gst-invoice.webp` | 1232x860 | 1234x864 | laptop mockup; screen shows a tax invoice (a bill) | Actual Zipla POS GST invoice screenshot for a sweet shop customer bill | lazy, (none) | no |

Notes.

- Logo and icon images are not listed (`/zipla-logo.webp` is on all 19 pages, twice: header 112x32 attributes and footer 640x211 attributes, actual file 640x211).
- Repo pictures not used by any page `<img>`: `/workflows/ai-menu-review-screen.webp` (867x1000, portrait, a "Review Items" import dialog, a different screen from every page picture), `/workflows/ai-menu-scan-workflow.webp` and `/workflows/ai-menu-scan-workflow-v2.webp` (drawings), `/zipla-icon.webp` (512x512 icon). `/og-image.jpg`, `/favicon.png` and `/apple-touch-icon.png` are used in the head only.
- Result for D6: for every picture that shows an app screen on a laptop (7 files) and for the combined laptop, tablet and phone picture, no separate phone screenshot of the same screen exists in the repo. `ss-kds.webp` is the Kitchen Display picture (on `/`, `/qsr-billing-software/`, `/restaurant-pos-software/`). The two flat screenshots in `public/workflows/` have no device frame; on which device they were captured: I do not know.
- `ss-gst-invoice.webp` is 1234x864 on disk but its `<img>` attributes are `width="1232" height="860"` on all three pages that use it.

## 7. Determinism

Two builds of the same commit (`419cc53`), `rm -rf dist` before the second:

```
$ npm run build        (exit 0)  -> cp -r dist /tmp/base_dist   -> seo_gate.py snapshot -> /tmp/base.json  (19 pages, 74 files)
$ rm -rf dist && npm run build  (exit 0)  -> cp -r dist /tmp/base_dist2 -> seo_gate.py snapshot -> /tmp/base2.json (19 pages, 74 files)
$ diff -rq /tmp/base_dist /tmp/base_dist2
(no output)    exit 0
$ python3 -I gate/seo_gate.py compare /tmp/base.json /tmp/base2.json --report /tmp/det_report.md   exit 0
```

```
# SEO gate: baseline vs new
baseline: /tmp/base.json (19 pages)
new: /tmp/base2.json (19 pages)

| Line | Check | PASS | WARN | FAIL |
|---|---|---|---|---|
| G1 | Files, sitemap, robots, llms, redirects, headers | 5 | 0 | 0 |
| G2 | Same page URLs, sitemap URLs all built | 2 | 0 | 0 |
| G3 | title, meta, canonical, hreflang, html lang | 19 | 0 | 0 |
| G4 | JSON-LD identical | 19 | 0 | 0 |
| G5 | Headings: H1, no heading added, removed or re-levelled | 19 | 0 | 0 |
| G6 | Baseline text still present | 19 | 0 | 0 |
| G7 | No new text | 19 | 0 | 0 |
| G8 | FAQ questions and answers visible | 19 | 0 | 0 |
| G9 | Links kept, no broken internal link or anchor | 19 | 0 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 19 | 0 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

## FAIL (0)
none

## WARN (0)
none

RESULT: PASS (0 FAIL, 0 WARN)
```

Result: byte-identical, no BLOCKER. No SEO file or JSON-LD differs. `grep -rIoE "20[0-9]{2}-[0-9]{2}-[0-9]{2}"` over `dist` (xml, txt, js, css) found no date string, and `sitemap-0.xml` has no `<lastmod>`.

What this does not prove: the two builds ran about 14 seconds apart on one machine with one node version. A build on another day or another machine could differ. I do not know.

## 8. Tooling and baseline numbers

| item | result | command |
|---|---|---|
| python3 | 3.13.17 | `python3 --version` |
| `import playwright` (system python) | failed: `ModuleNotFoundError: No module named 'playwright'` | `python3 -c "import playwright"` |
| fix used | `python3 -m venv /tmp/pwvenv && /tmp/pwvenv/bin/pip install playwright==1.63.0` (exit 0). Version pinned to the one node Playwright already installed in the image. I did not run `playwright install`, because Chromium was already at `/opt/pw-browsers` | |
| `import playwright` (venv) | ok | `/tmp/pwvenv/bin/python -I -c "import playwright"` |
| Chromium starts | yes, version 153.0.8010.12, rendered a test page | a 4-line script using `chromium.launch()` |
| `browser_check.py` on B0 | exit 1, `BROWSER CHECK: 76 FAIL, 76 WARN` (about 1 min 49 s) | `/tmp/pwvenv/bin/python -I gate/browser_check.py /tmp/base_dist --out /tmp/shots_b0` |
| `fold_check.py` on B0 | exit 0, `FOLD CHECK: 53 WARN, 0 sideways-scroll case(s)` (about 49 s) | `/tmp/pwvenv/bin/python -I gate/fold_check.py /tmp/base_dist` |

What the 76 FAIL are. The 76 rows are 19 pages x 4 widths (360, 390, 768, 1280). In all 76 rows the FAIL is "targets under 24 px" (the tool prints the first 6 of N). In all 76 rows there is also a WARN for targets under 44 px. In 0 rows is there a sideways-scroll (overflow) line. Elements named in the printed examples: footer links 16 px high (`Restaurant POS 93x16`, `Cafe POS 58x16`, `Bakery Billing 79x16`, `Sweet Shop Billing 110x16`, `QSR Billing 65x16`, `Dhaba Billing 77x16`), header links 18 px high at 768 and 1280 (`Features 59x18`, `Pricing 47x18`, `FAQ 29x18`), breadcrumb links 15 px high (`Home 35x15`), and text links in page bodies (`Read the restaurant POS ...` 16 px, `support@zipla.in 124x19`, `← Back to Zipla POS 139x18`).

Lab numbers (Chromium headless, localhost, no throttling; compare only with another lab run): LCP 52 to 200 ms, CLS 0.000 on every row. Screenshots went to `/tmp/shots_b0` (not committed).

Weights of the B0 build (`seo_gate.py snapshot` totals): CSS 27,293 bytes gzip, JS 50,363 bytes gzip, fonts 61,956 bytes, images 635,244 bytes, HTML 857,134 bytes in total. Largest HTML file: `/` at 138,341 bytes.

### Baseline: LCP and CLS (`browser_check.py`, B0)

| page | LCP ms at 360 / 390 / 768 / 1280 | LCP element at 360 / 390 / 768 / 1280 | CLS (max of 4) | targets under 24 px (FAIL) | targets under 44 px (WARN) |
|---|---|---|---|---|---|
| / | 160 / 200 / 184 / 196 | h1 / h1 / img / img | 0.000 | 20 / 18 / 22 / 24 | 10 / 13 / 11 / 10 |
| /404.html | 184 / 72 / 104 / 136 | p / p / span / span | 0.000 | 14 / 14 / 17 / 17 | 8 / 8 / 7 / 7 |
| /bakery-billing-software/ | 124 / 120 / 140 / 128 | p / p / img / img | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /blog/ | 112 / 104 / 84 / 128 | p / p / p / h1 | 0.000 | 23 / 23 / 26 / 25 | 10 / 10 / 10 / 11 |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | 64 / 64 / 96 / 76 | p / p / p / h1 | 0.000 | 16 / 16 / 19 / 19 | 7 / 7 / 7 / 7 |
| /blog/restaurant-pos-software-checklist/ | 72 / 76 / 68 / 108 | h1 / h1 / h1 / h1 | 0.000 | 16 / 16 / 19 / 19 | 7 / 7 / 7 / 7 |
| /blog/restaurant-pos-software-price-india/ | 64 / 52 / 72 / 64 | p / p / p / h1 | 0.000 | 16 / 16 / 19 / 19 | 7 / 7 / 7 / 7 |
| /blog/restaurant-pos-vs-billing-software/ | 68 / 68 / 80 / 68 | p / p / p / h1 | 0.000 | 16 / 16 / 19 / 19 | 7 / 7 / 7 / 7 |
| /cafe-pos-software/ | 112 / 88 / 144 / 136 | h1 / h1 / img / img | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /contact-us/ | 92 / 68 / 92 / 68 | p / p / p / p | 0.000 | 22 / 22 / 28 / 28 | 9 / 9 / 7 / 7 |
| /dhaba-billing-software/ | 100 / 104 / 132 / 132 | h1 / h1 / img / img | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /faq/ | 100 / 80 / 140 / 132 | p / p / p / h1 | 0.000 | 14 / 14 / 17 / 17 | 9 / 9 / 9 / 9 |
| /pricing/ | 104 / 108 / 108 / 104 | p / p / p / h1 | 0.000 | 16 / 16 / 19 / 19 | 12 / 12 / 12 / 12 |
| /privacy-policy/ | 80 / 60 / 64 / 64 | p / p / p / p | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /qsr-billing-software/ | 132 / 112 / 128 / 116 | h1 / img / img / img | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /refund-policy/ | 56 / 64 / 60 / 76 | p / p / p / p | 0.000 | 16 / 16 / 19 / 19 | 7 / 7 / 7 / 7 |
| /restaurant-pos-software/ | 84 / 100 / 124 / 132 | h1 / h1 / img / img | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /sweet-shop-billing/ | 100 / 116 / 120 / 128 | h1 / h1 / img / img | 0.000 | 15 / 15 / 18 / 18 | 7 / 7 / 7 / 7 |
| /terms-and-conditions/ | 100 / 64 / 76 / 84 | p / p / p / p | 0.000 | 16 / 16 / 19 / 19 | 7 / 7 / 7 / 7 |

### Baseline: fold numbers (`fold_check.py`, B0). CSS pixels from the top of the page

"action" is the first link or button after the H1 inside `<main>`. On the article, FAQ, contact and legal pages that is a small text link, not a main action (the tool says so). `ok` = H1 and action both end inside the viewport height.

| page | first action found by the tool | 320x640 | 360x640 | 390x844 | 414x896 | 1366x768 |
|---|---|---|---|---|---|---|
| / | Book a WhatsApp Demo | H1 158-315, action 681-725, WARN | H1 158-315, action 633-677, WARN | H1 158-315, action 633-677, ok | H1 158-315, action 612-656, ok | H1 124-358, action 595-639, ok |
| /404.html | Go to Zipla POS Home | H1 224-285, action 431-474, ok | H1 224-285, action 431-474, ok | H1 306-367, action 488-531, ok | H1 332-393, action 514-557, ok | H1 331-428, action 523-568, ok |
| /bakery-billing-software/ | Start 14-Day Free Trial | H1 167-288, action 605-649, WARN | H1 167-288, action 605-649, WARN | H1 167-288, action 605-649, ok | H1 167-288, action 605-649, ok | H1 181-395, action 672-718, ok |
| /blog/ | Read the restaurant POS checklist | H1 148-295, action 1715-1731, WARN | H1 148-295, action 1505-1521, WARN | H1 148-258, action 1418-1434, WARN | H1 148-258, action 1392-1408, WARN | H1 170-282, action 1179-1195, WARN |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | current CBIC rate table | H1 226-392, action 3396-3441, WARN | H1 211-344, action 2993-3011, WARN | H1 211-344, action 2724-2769, WARN | H1 211-344, action 2580-2598, WARN | H1 216-310, action 1567-1585, WARN |
| /blog/restaurant-pos-software-checklist/ | restaurant and dhaba GST invoice guide | H1 213-480, action 3009-3055, WARN | H1 186-415, action 2724-2770, WARN | H1 186-377, action 2461-2480, WARN | H1 186-377, action 2353-2372, WARN | H1 198-382, action 1702-1723, WARN |
| /blog/restaurant-pos-software-price-india/ | Zipla POS pricing page | H1 166-339, action 2350-2394, WARN | H1 166-339, action 2172-2190, WARN | H1 166-304, action 1952-1970, WARN | H1 166-304, action 1871-1915, WARN | H1 184-349, action 1536-1555, WARN |
| /blog/restaurant-pos-vs-billing-software/ | restaurant POS software page | H1 166-339, action 3445-3490, WARN | H1 166-304, action 3148-3166, WARN | H1 166-304, action 2909-2953, WARN | H1 166-304, action 2883-2927, WARN | H1 184-349, action 2287-2333, WARN |
| /cafe-pos-software/ | Start 14-Day Free Trial | H1 167-328, action 646-690, WARN | H1 167-328, action 646-690, WARN | H1 167-328, action 621-665, ok | H1 167-328, action 594-638, ok | H1 181-395, action 646-692, ok |
| /contact-us/ | support@zipla.in | H1 150-222, action 965-984, WARN | H1 150-222, action 881-900, WARN | H1 150-222, action 856-875, WARN | H1 150-186, action 765-784, ok | H1 178-227, action 661-680, ok |
| /dhaba-billing-software/ | Start 14-Day Free Trial | H1 167-328, action 646-690, WARN | H1 167-328, action 646-690, WARN | H1 167-328, action 646-690, ok | H1 167-328, action 594-638, ok | H1 181-395, action 672-718, ok |
| /faq/ | restaurant POS software | H1 148-397, action 1670-1688, WARN | H1 148-326, action 1437-1455, WARN | H1 148-326, action 1363-1381, WARN | H1 148-326, action 1312-1354, WARN | H1 170-338, action 1034-1052, WARN |
| /pricing/ | Start 14-Day Free Trial | H1 164-285, action 565-602, ok | H1 164-245, action 525-562, ok | H1 164-245, action 476-513, ok | H1 164-245, action 476-513, ok | H1 180-303, action 467-506, ok |
| /privacy-policy/ | app.zipla.in | H1 174-246, action 747-766, WARN | H1 174-246, action 695-714, WARN | H1 174-210, action 633-652, ok | H1 174-210, action 633-652, ok | H1 178-227, action 498-517, ok |
| /qsr-billing-software/ | Start 14-Day Free Trial | H1 167-288, action 605-649, WARN | H1 167-288, action 605-649, WARN | H1 167-288, action 554-598, ok | H1 167-288, action 554-598, ok | H1 181-342, action 593-639, ok |
| /refund-policy/ | Zipla POS Terms and Conditions | H1 150-258, action 860-907, WARN | H1 150-222, action 743-762, WARN | H1 150-222, action 715-762, ok | H1 150-222, action 715-734, ok | H1 178-227, action 530-549, ok |
| /restaurant-pos-software/ | Start 14-Day Free Trial | H1 174-335, action 652-696, WARN | H1 174-335, action 652-696, WARN | H1 167-328, action 621-665, ok | H1 167-328, action 594-638, ok | H1 181-395, action 646-692, ok |
| /sweet-shop-billing/ | Start 14-Day Free Trial | H1 167-368, action 711-755, WARN | H1 167-368, action 686-730, WARN | H1 167-328, action 646-690, ok | H1 167-328, action 621-665, ok | H1 181-395, action 672-718, ok |
| /terms-and-conditions/ | app.zipla.in | H1 174-246, action 830-849, WARN | H1 174-246, action 750-769, WARN | H1 174-246, action 750-769, ok | H1 174-246, action 695-714, ok | H1 178-227, action 527-546, ok |

<details><summary>Raw output of both tools</summary>

```
/404.html                            360  lcp 184ms p                            cls 0.000  FAIL 14 target(s) under 24px: ['a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16', 'a Dhaba Billing 77x16']; WARN 8 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Go to Zipla POS Home 221x43', 'a  85x28', 'button Reject analytics 140x37']
/404.html                            390  lcp 72ms p                             cls 0.000  FAIL 14 target(s) under 24px: ['a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16', 'a Dhaba Billing 77x16']; WARN 8 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Go to Zipla POS Home 221x43', 'a  85x28', 'button Reject analytics 155x37']
/404.html                            768  lcp 104ms span                         cls 0.000  FAIL 17 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/404.html                           1280  lcp 136ms span                         cls 0.000  FAIL 17 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/                                    360  lcp 160ms h1                           cls 0.000  FAIL 20 target(s) under 24px: ['a See pricing 68x16', 'a Bakery 43x16', 'a Sweet Shop 74x16', 'a See plan pricing → 134x19', 'a Bakery 52x19', 'a Sweet Shop 89x19']; WARN 10 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Start 14-Day Free Trial 324x43', 'a Book a WhatsApp demo for 320x39', 'a Start 14-Day Free Trial 254x43']
/                                    390  lcp 200ms h1                           cls 0.000  FAIL 18 target(s) under 24px: ['a Bakery 43x16', 'a Sweet Shop 74x16', 'a Bakery 52x19', 'a Sweet Shop 89x19', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 13 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Start 14-Day Free Trial 354x43', 'a See pricing 251x35', 'a Book a WhatsApp demo for 350x39']
/                                    768  lcp 184ms img http://127.0.0.1:34681/screenshots/ss-new-order.webp cls 0.000  FAIL 22 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a See pricing 68x16', 'a Bakery 43x16', 'a Sweet Shop 74x16']; WARN 11 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a See plan pricing → 343x43', 'a Sweet Shop 331x43', 'a Start 14-Day Free Trial 662x43']
/                                   1280  lcp 196ms img http://127.0.0.1:34681/screenshots/ss-new-order.webp cls 0.000  FAIL 24 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a See pricing 68x16', 'a Bakery 43x16', 'a Sweet Shop 74x16']; WARN 10 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a Start 14-Day Free Trial 902x43', 'a Prefer a guided setup? B 334x38', 'select Select your business typ 646x43']
/bakery-billing-software/            360  lcp 124ms p                            cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/bakery-billing-software/            390  lcp 120ms p                            cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/bakery-billing-software/            768  lcp 140ms img http://127.0.0.1:34681/screenshots/ss-menu-mgmt.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/bakery-billing-software/           1280  lcp 128ms img http://127.0.0.1:34681/screenshots/ss-menu-mgmt.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/                               360  lcp 112ms p                            cls 0.000  FAIL 23 target(s) under 24px: ['a Read the restaurant POS  214x16', 'a Explore QSR billing soft 179x16', 'a Explore dhaba billing so 191x16', 'a Read the restaurant POS  239x16', 'a Read the POS vs billing  181x16', 'a Restaurant POS software 165x17']; WARN 10 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Read the restaurant and  269x37', 'a Start 14-Day Free Trial 217x37', 'a Book Free WhatsApp Demo 217x39']
/blog/                               390  lcp 104ms p                            cls 0.000  FAIL 23 target(s) under 24px: ['a Read the restaurant POS  214x16', 'a Explore QSR billing soft 179x16', 'a Explore dhaba billing so 191x16', 'a Read the restaurant POS  239x16', 'a Read the POS vs billing  181x16', 'a Restaurant POS software 165x17']; WARN 10 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Read the restaurant and  269x37', 'a Start 14-Day Free Trial 217x37', 'a Book Free WhatsApp Demo 217x39']
/blog/                               768  lcp 84ms p                             cls 0.000  FAIL 26 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Read the restaurant POS  214x16', 'a Read the restaurant and  307x16', 'a Explore QSR billing soft 179x16']; WARN 10 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a sweet shop billing softw 209x39', 'a Start 14-Day Free Trial 180x39', 'a Book Free WhatsApp Demo 217x39']
/blog/                              1280  lcp 128ms h1                           cls 0.000  FAIL 25 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Read the restaurant POS  214x16', 'a Explore QSR billing soft 179x16', 'a Explore dhaba billing so 191x16']; WARN 11 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a Read the restaurant and  221x37', 'a sweet shop billing softw 286x39', 'a Start 14-Day Free Trial 180x39']
/blog/restaurant-dhaba-gst-invoice-guide-2026/   360  lcp 64ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a Home 37x16', 'a Blog 29x16', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/blog/restaurant-dhaba-gst-invoice-guide-2026/   390  lcp 64ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a Home 37x16', 'a Blog 29x16', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/blog/restaurant-dhaba-gst-invoice-guide-2026/   768  lcp 96ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 37x16', 'a Blog 29x16', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-dhaba-gst-invoice-guide-2026/  1280  lcp 76ms h1                            cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 37x16', 'a Blog 29x16', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-pos-software-checklist/   360  lcp 72ms h1                            cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/blog/restaurant-pos-software-checklist/   390  lcp 76ms h1                            cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/blog/restaurant-pos-software-checklist/   768  lcp 68ms h1                            cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-pos-software-checklist/  1280  lcp 108ms h1                           cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-pos-software-price-india/   360  lcp 64ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/blog/restaurant-pos-software-price-india/   390  lcp 52ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/blog/restaurant-pos-software-price-india/   768  lcp 72ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-pos-software-price-india/  1280  lcp 64ms h1                            cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-pos-vs-billing-software/   360  lcp 68ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/blog/restaurant-pos-vs-billing-software/   390  lcp 68ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/blog/restaurant-pos-vs-billing-software/   768  lcp 80ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/blog/restaurant-pos-vs-billing-software/  1280  lcp 68ms h1                            cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Blog 27x15', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/cafe-pos-software/                  360  lcp 112ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/cafe-pos-software/                  390  lcp 88ms h1                            cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/cafe-pos-software/                  768  lcp 144ms img http://127.0.0.1:34681/screenshots/ss-multi-device.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/cafe-pos-software/                 1280  lcp 136ms img http://127.0.0.1:34681/screenshots/ss-multi-device.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/contact-us/                         360  lcp 92ms p                             cls 0.000  FAIL 22 target(s) under 24px: ['a support@zipla.in 124x19', 'a +91 7817851009 116x19', 'a Message on WhatsApp 169x19', 'a Email 37x18', 'a call 23x18', 'a Email 37x18']; WARN 9 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a WhatsApp 36x42', 'a WhatsApp 36x42', 'a  85x28']
/contact-us/                         390  lcp 68ms p                             cls 0.000  FAIL 22 target(s) under 24px: ['a support@zipla.in 124x19', 'a +91 7817851009 116x19', 'a Message on WhatsApp 169x19', 'a Email 37x18', 'a call 23x18', 'a Email 37x18']; WARN 9 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a WhatsApp 36x42', 'a WhatsApp 36x42', 'a  85x28']
/contact-us/                         768  lcp 92ms p                             cls 0.000  FAIL 28 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a support@zipla.in 124x19', 'a +91 7817851009 116x19', 'a Message on WhatsApp 169x19']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/contact-us/                        1280  lcp 68ms p                             cls 0.000  FAIL 28 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a support@zipla.in 124x19', 'a +91 7817851009 116x19', 'a Message on WhatsApp 169x19']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/dhaba-billing-software/             360  lcp 100ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/dhaba-billing-software/             390  lcp 104ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/dhaba-billing-software/             768  lcp 132ms img http://127.0.0.1:34681/screenshots/ss-dashboard.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/dhaba-billing-software/            1280  lcp 132ms img http://127.0.0.1:34681/screenshots/ss-dashboard.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/faq/                                360  lcp 100ms p                            cls 0.000  FAIL 14 target(s) under 24px: ['a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16', 'a Dhaba Billing 77x16']; WARN 9 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Start 14-Day Free Trial 217x37', 'a Book Free WhatsApp Demo 217x39', 'a  85x28']
/faq/                                390  lcp 80ms p                             cls 0.000  FAIL 14 target(s) under 24px: ['a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16', 'a Dhaba Billing 77x16']; WARN 9 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Start 14-Day Free Trial 217x37', 'a Book Free WhatsApp Demo 217x39', 'a  85x28']
/faq/                                768  lcp 140ms p                            cls 0.000  FAIL 17 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16']; WARN 9 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a Start 14-Day Free Trial 180x39', 'a Book Free WhatsApp Demo 217x39', 'a  85x28']
/faq/                               1280  lcp 132ms h1                           cls 0.000  FAIL 17 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16']; WARN 9 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a Start 14-Day Free Trial 180x39', 'a Book Free WhatsApp Demo 217x39', 'a  85x28']
/pricing/                            360  lcp 104ms p                            cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Talk through your workfl 282x16', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 12 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Start 14-Day Free Trial 217x37', 'a Book Free WhatsApp Demo 217x39', 'a Start the free trial 282x37']
/pricing/                            390  lcp 108ms p                            cls 0.000  FAIL 16 target(s) under 24px: ['a Home 35x15', 'a Talk through your workfl 312x16', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 12 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a Start 14-Day Free Trial 217x37', 'a Book Free WhatsApp Demo 217x39', 'a Start the free trial 312x37']
/pricing/                            768  lcp 108ms p                            cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Talk through your workfl 662x16', 'a Restaurant POS 93x16']; WARN 12 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a Start 14-Day Free Trial 180x39', 'a Book Free WhatsApp Demo 217x39', 'a Start the free trial 662x37']
/pricing/                           1280  lcp 104ms h1                           cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Talk through your workfl 373x16', 'a Restaurant POS 93x16']; WARN 12 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a Start 14-Day Free Trial 180x39', 'a Book Free WhatsApp Demo 217x39', 'a Start the free trial 373x37']
/privacy-policy/                     360  lcp 80ms p                             cls 0.000  FAIL 15 target(s) under 24px: ['a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/privacy-policy/                     390  lcp 60ms p                             cls 0.000  FAIL 15 target(s) under 24px: ['a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/privacy-policy/                     768  lcp 64ms p                             cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/privacy-policy/                    1280  lcp 64ms p                             cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/qsr-billing-software/               360  lcp 132ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/qsr-billing-software/               390  lcp 112ms img http://127.0.0.1:34681/screenshots/ss-new-order.webp cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/qsr-billing-software/               768  lcp 128ms img http://127.0.0.1:34681/screenshots/ss-new-order.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/qsr-billing-software/              1280  lcp 116ms img http://127.0.0.1:34681/screenshots/ss-new-order.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/refund-policy/                      360  lcp 56ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a support@zipla.in 115x18', 'a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/refund-policy/                      390  lcp 64ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a support@zipla.in 115x18', 'a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/refund-policy/                      768  lcp 60ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a support@zipla.in 115x18', 'a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/refund-policy/                     1280  lcp 76ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a support@zipla.in 115x18', 'a ← Back to Zipla POS 139x18', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/restaurant-pos-software/            360  lcp 84ms h1                            cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/restaurant-pos-software/            390  lcp 100ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/restaurant-pos-software/            768  lcp 124ms img http://127.0.0.1:34681/screenshots/ss-multi-device.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/restaurant-pos-software/           1280  lcp 132ms img http://127.0.0.1:34681/screenshots/ss-multi-device.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/sweet-shop-billing/                 360  lcp 100ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/sweet-shop-billing/                 390  lcp 116ms h1                           cls 0.000  FAIL 15 target(s) under 24px: ['a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16', 'a QSR Billing 65x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/sweet-shop-billing/                 768  lcp 120ms img http://127.0.0.1:34681/screenshots/ss-dashboard.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/sweet-shop-billing/                1280  lcp 128ms img http://127.0.0.1:34681/screenshots/ss-dashboard.webp cls 0.000  FAIL 18 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a Home 35x15', 'a Restaurant POS 93x16', 'a Cafe POS 58x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/terms-and-conditions/               360  lcp 100ms p                            cls 0.000  FAIL 16 target(s) under 24px: ['a ← Back to Zipla POS 139x21', 'a Privacy Policy → 112x18', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 140x37', 'button Manage 140x37']
/terms-and-conditions/               390  lcp 64ms p                             cls 0.000  FAIL 16 target(s) under 24px: ['a ← Back to Zipla POS 139x21', 'a Privacy Policy → 112x21', 'a Restaurant POS 93x16', 'a Cafe POS 58x16', 'a Bakery Billing 79x16', 'a Sweet Shop Billing 110x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Open navigation menu 38x38', 'button Switch to light theme 38x38', 'a  85x28', 'button Reject analytics 155x37', 'button Manage 155x37']
/terms-and-conditions/               768  lcp 76ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a ← Back to Zipla POS 139x21', 'a Privacy Policy → 112x21', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
/terms-and-conditions/              1280  lcp 84ms p                             cls 0.000  FAIL 19 target(s) under 24px: ['a Features 59x18', 'a Pricing 47x18', 'a FAQ 29x18', 'a ← Back to Zipla POS 139x21', 'a Privacy Policy → 112x21', 'a Restaurant POS 93x16']; WARN 7 target(s) under 44px: ['a  103x34', 'button Switch to light theme 38x38', 'a Get a Free WhatsApp Demo 217x37', 'a  85x28', 'button Reject analytics 119x37', 'button Manage 75x37']
screenshots in /tmp/shots_b0
BROWSER CHECK: 76 FAIL, 76 WARN
browser_check exit: 1
```

```
/404.html                       320x640  h1 224-285       action "Go to Zipla POS Home" 431-474                ok
/404.html                       360x640  h1 224-285       action "Go to Zipla POS Home" 431-474                ok
/404.html                       390x844  h1 306-367       action "Go to Zipla POS Home" 488-531                ok
/404.html                       414x896  h1 332-393       action "Go to Zipla POS Home" 514-557                ok
/404.html                      1366x768  h1 331-428       action "Go to Zipla POS Home" 523-568                ok
/                               320x640  h1 158-315       action "Book a WhatsApp Demo" 681-725                WARN action ends below the fold
/                               360x640  h1 158-315       action "Book a WhatsApp Demo" 633-677                WARN action ends below the fold
/                               390x844  h1 158-315       action "Book a WhatsApp Demo" 633-677                ok
/                               414x896  h1 158-315       action "Book a WhatsApp Demo" 612-656                ok
/                              1366x768  h1 124-358       action "Book a WhatsApp Demo" 595-639                ok
/bakery-billing-software/       320x640  h1 167-288       action "Start 14-Day Free Trial" 605-649             WARN action ends below the fold
/bakery-billing-software/       360x640  h1 167-288       action "Start 14-Day Free Trial" 605-649             WARN action ends below the fold
/bakery-billing-software/       390x844  h1 167-288       action "Start 14-Day Free Trial" 605-649             ok
/bakery-billing-software/       414x896  h1 167-288       action "Start 14-Day Free Trial" 605-649             ok
/bakery-billing-software/      1366x768  h1 181-395       action "Start 14-Day Free Trial" 672-718             ok
/blog/                          320x640  h1 148-295       action "Read the restaurant POS checklist" 1715-1731 WARN action ends below the fold
/blog/                          360x640  h1 148-295       action "Read the restaurant POS checklist" 1505-1521 WARN action ends below the fold
/blog/                          390x844  h1 148-258       action "Read the restaurant POS checklist" 1418-1434 WARN action ends below the fold
/blog/                          414x896  h1 148-258       action "Read the restaurant POS checklist" 1392-1408 WARN action ends below the fold
/blog/                         1366x768  h1 170-282       action "Read the restaurant POS checklist" 1179-1195 WARN action ends below the fold
/blog/restaurant-dhaba-gst-invoice-guide-2026/  320x640  h1 226-392       action "current CBIC rate table" 3396-3441           WARN action ends below the fold
/blog/restaurant-dhaba-gst-invoice-guide-2026/  360x640  h1 211-344       action "current CBIC rate table" 2993-3011           WARN action ends below the fold
/blog/restaurant-dhaba-gst-invoice-guide-2026/  390x844  h1 211-344       action "current CBIC rate table" 2724-2769           WARN action ends below the fold
/blog/restaurant-dhaba-gst-invoice-guide-2026/  414x896  h1 211-344       action "current CBIC rate table" 2580-2598           WARN action ends below the fold
/blog/restaurant-dhaba-gst-invoice-guide-2026/ 1366x768  h1 216-310       action "current CBIC rate table" 1567-1585           WARN action ends below the fold
/blog/restaurant-pos-software-checklist/  320x640  h1 213-480       action "restaurant and dhaba GST invoice guide" 3009-3055 WARN action ends below the fold
/blog/restaurant-pos-software-checklist/  360x640  h1 186-415       action "restaurant and dhaba GST invoice guide" 2724-2770 WARN action ends below the fold
/blog/restaurant-pos-software-checklist/  390x844  h1 186-377       action "restaurant and dhaba GST invoice guide" 2461-2480 WARN action ends below the fold
/blog/restaurant-pos-software-checklist/  414x896  h1 186-377       action "restaurant and dhaba GST invoice guide" 2353-2372 WARN action ends below the fold
/blog/restaurant-pos-software-checklist/ 1366x768  h1 198-382       action "restaurant and dhaba GST invoice guide" 1702-1723 WARN action ends below the fold
/blog/restaurant-pos-software-price-india/  320x640  h1 166-339       action "Zipla POS pricing page" 2350-2394            WARN action ends below the fold
/blog/restaurant-pos-software-price-india/  360x640  h1 166-339       action "Zipla POS pricing page" 2172-2190            WARN action ends below the fold
/blog/restaurant-pos-software-price-india/  390x844  h1 166-304       action "Zipla POS pricing page" 1952-1970            WARN action ends below the fold
/blog/restaurant-pos-software-price-india/  414x896  h1 166-304       action "Zipla POS pricing page" 1871-1915            WARN action ends below the fold
/blog/restaurant-pos-software-price-india/ 1366x768  h1 184-349       action "Zipla POS pricing page" 1536-1555            WARN action ends below the fold
/blog/restaurant-pos-vs-billing-software/  320x640  h1 166-339       action "restaurant POS software page" 3445-3490      WARN action ends below the fold
/blog/restaurant-pos-vs-billing-software/  360x640  h1 166-304       action "restaurant POS software page" 3148-3166      WARN action ends below the fold
/blog/restaurant-pos-vs-billing-software/  390x844  h1 166-304       action "restaurant POS software page" 2909-2953      WARN action ends below the fold
/blog/restaurant-pos-vs-billing-software/  414x896  h1 166-304       action "restaurant POS software page" 2883-2927      WARN action ends below the fold
/blog/restaurant-pos-vs-billing-software/ 1366x768  h1 184-349       action "restaurant POS software page" 2287-2333      WARN action ends below the fold
/cafe-pos-software/             320x640  h1 167-328       action "Start 14-Day Free Trial" 646-690             WARN action ends below the fold
/cafe-pos-software/             360x640  h1 167-328       action "Start 14-Day Free Trial" 646-690             WARN action ends below the fold
/cafe-pos-software/             390x844  h1 167-328       action "Start 14-Day Free Trial" 621-665             ok
/cafe-pos-software/             414x896  h1 167-328       action "Start 14-Day Free Trial" 594-638             ok
/cafe-pos-software/            1366x768  h1 181-395       action "Start 14-Day Free Trial" 646-692             ok
/contact-us/                    320x640  h1 150-222       action "support@zipla.in" 965-984                    WARN action ends below the fold
/contact-us/                    360x640  h1 150-222       action "support@zipla.in" 881-900                    WARN action ends below the fold
/contact-us/                    390x844  h1 150-222       action "support@zipla.in" 856-875                    WARN action ends below the fold
/contact-us/                    414x896  h1 150-186       action "support@zipla.in" 765-784                    ok
/contact-us/                   1366x768  h1 178-227       action "support@zipla.in" 661-680                    ok
/dhaba-billing-software/        320x640  h1 167-328       action "Start 14-Day Free Trial" 646-690             WARN action ends below the fold
/dhaba-billing-software/        360x640  h1 167-328       action "Start 14-Day Free Trial" 646-690             WARN action ends below the fold
/dhaba-billing-software/        390x844  h1 167-328       action "Start 14-Day Free Trial" 646-690             ok
/dhaba-billing-software/        414x896  h1 167-328       action "Start 14-Day Free Trial" 594-638             ok
/dhaba-billing-software/       1366x768  h1 181-395       action "Start 14-Day Free Trial" 672-718             ok
/faq/                           320x640  h1 148-397       action "restaurant POS software" 1670-1688           WARN action ends below the fold
/faq/                           360x640  h1 148-326       action "restaurant POS software" 1437-1455           WARN action ends below the fold
/faq/                           390x844  h1 148-326       action "restaurant POS software" 1363-1381           WARN action ends below the fold
/faq/                           414x896  h1 148-326       action "restaurant POS software" 1312-1354           WARN action ends below the fold
/faq/                          1366x768  h1 170-338       action "restaurant POS software" 1034-1052           WARN action ends below the fold
/pricing/                       320x640  h1 164-285       action "Start 14-Day Free Trial" 565-602             ok
/pricing/                       360x640  h1 164-245       action "Start 14-Day Free Trial" 525-562             ok
/pricing/                       390x844  h1 164-245       action "Start 14-Day Free Trial" 476-513             ok
/pricing/                       414x896  h1 164-245       action "Start 14-Day Free Trial" 476-513             ok
/pricing/                      1366x768  h1 180-303       action "Start 14-Day Free Trial" 467-506             ok
/privacy-policy/                320x640  h1 174-246       action "app.zipla.in" 747-766                        WARN action ends below the fold
/privacy-policy/                360x640  h1 174-246       action "app.zipla.in" 695-714                        WARN action ends below the fold
/privacy-policy/                390x844  h1 174-210       action "app.zipla.in" 633-652                        ok
/privacy-policy/                414x896  h1 174-210       action "app.zipla.in" 633-652                        ok
/privacy-policy/               1366x768  h1 178-227       action "app.zipla.in" 498-517                        ok
/qsr-billing-software/          320x640  h1 167-288       action "Start 14-Day Free Trial" 605-649             WARN action ends below the fold
/qsr-billing-software/          360x640  h1 167-288       action "Start 14-Day Free Trial" 605-649             WARN action ends below the fold
/qsr-billing-software/          390x844  h1 167-288       action "Start 14-Day Free Trial" 554-598             ok
/qsr-billing-software/          414x896  h1 167-288       action "Start 14-Day Free Trial" 554-598             ok
/qsr-billing-software/         1366x768  h1 181-342       action "Start 14-Day Free Trial" 593-639             ok
/refund-policy/                 320x640  h1 150-258       action "Zipla POS Terms and Conditions" 860-907      WARN action ends below the fold
/refund-policy/                 360x640  h1 150-222       action "Zipla POS Terms and Conditions" 743-762      WARN action ends below the fold
/refund-policy/                 390x844  h1 150-222       action "Zipla POS Terms and Conditions" 715-762      ok
/refund-policy/                 414x896  h1 150-222       action "Zipla POS Terms and Conditions" 715-734      ok
/refund-policy/                1366x768  h1 178-227       action "Zipla POS Terms and Conditions" 530-549      ok
/restaurant-pos-software/       320x640  h1 174-335       action "Start 14-Day Free Trial" 652-696             WARN action ends below the fold
/restaurant-pos-software/       360x640  h1 174-335       action "Start 14-Day Free Trial" 652-696             WARN action ends below the fold
/restaurant-pos-software/       390x844  h1 167-328       action "Start 14-Day Free Trial" 621-665             ok
/restaurant-pos-software/       414x896  h1 167-328       action "Start 14-Day Free Trial" 594-638             ok
/restaurant-pos-software/      1366x768  h1 181-395       action "Start 14-Day Free Trial" 646-692             ok
/sweet-shop-billing/            320x640  h1 167-368       action "Start 14-Day Free Trial" 711-755             WARN action ends below the fold
/sweet-shop-billing/            360x640  h1 167-368       action "Start 14-Day Free Trial" 686-730             WARN action ends below the fold
/sweet-shop-billing/            390x844  h1 167-328       action "Start 14-Day Free Trial" 646-690             ok
/sweet-shop-billing/            414x896  h1 167-328       action "Start 14-Day Free Trial" 621-665             ok
/sweet-shop-billing/           1366x768  h1 181-395       action "Start 14-Day Free Trial" 672-718             ok
/terms-and-conditions/          320x640  h1 174-246       action "app.zipla.in" 830-849                        WARN action ends below the fold
/terms-and-conditions/          360x640  h1 174-246       action "app.zipla.in" 750-769                        WARN action ends below the fold
/terms-and-conditions/          390x844  h1 174-246       action "app.zipla.in" 750-769                        ok
/terms-and-conditions/          414x896  h1 174-246       action "app.zipla.in" 695-714                        ok
/terms-and-conditions/         1366x768  h1 178-227       action "app.zipla.in" 527-546                        ok
FOLD CHECK: 53 WARN, 0 sideways-scroll case(s). Numbers are CSS pixels from the top of the page.
fold_check exit: 0
```

</details>

## 9. Plan: stages and the real page URLs

| stage | name | pages (real URLs from the build) |
|---|---|---|
| 0 | Audit | whole site, docs only (this PR) |
| 1 | Foundation | all 19 pages through the shared `Header.jsx` and `Footer.jsx` (identical on every page): `/`, `/restaurant-pos-software/`, `/cafe-pos-software/`, `/bakery-billing-software/`, `/sweet-shop-billing/`, `/qsr-billing-software/`, `/dhaba-billing-software/`, `/pricing/`, `/faq/`, `/contact-us/`, `/blog/`, `/blog/restaurant-pos-software-checklist/`, `/blog/restaurant-dhaba-gst-invoice-guide-2026/`, `/blog/restaurant-pos-software-price-india/`, `/blog/restaurant-pos-vs-billing-software/`, `/privacy-policy/`, `/terms-and-conditions/`, `/refund-policy/`, `/404.html` |
| 2 | Home | `/` |
| 3 | Business-type pages | `/restaurant-pos-software/`, `/cafe-pos-software/`, `/bakery-billing-software/`, `/sweet-shop-billing/`, `/qsr-billing-software/`, `/dhaba-billing-software/` |
| 4 | Pricing, FAQ, Contact | `/pricing/`, `/faq/`, `/contact-us/` |
| 5 | Blog, Legal, Utility | `/blog/`, the four articles above, `/privacy-policy/`, `/terms-and-conditions/`, `/refund-policy/`, `/404.html` |
| 6 | Final check | all 19 pages, against B0 `419cc531ac67c75ec5ab5384a3c5c9880b64dfca` |

Facts for stage 1 and stage 3 (from the source):

- The older restaurant page needs no special header or footer work: it uses the shared components (section 3). BRIEF.md 6 says Stage 3 would do it if Stage 1 could not.
- Stage 3 starts from six separate files, not a shared template: `restaurant-pos-software.astro` (284 lines), `cafe-pos-software.astro` (274), `bakery-billing-software.astro` (291), `sweet-shop-billing.astro` (290), `qsr-billing-software.astro` (93 lines, long lines) and `dhaba-billing-software.astro` (56 lines, long lines). All six import `index.css` and `vertical-page.css`. Three have their own `<style>` block (`restaurant-pos-software.astro:263`, `cafe-pos-software.astro:253`, `dhaba-billing-software.astro:40`).
- `origin/redesign/integration` does not exist yet: `git ls-remote --heads origin 'redesign/*' 'redesign-*'` printed nothing. BRIEF.md 6.5 says Kabir creates it after this PR is merged.

## 10. Risks (at most eight, each with the check that catches it)

| # | risk | evidence at B0 | check that catches it |
|---|---|---|---|
| 1 | "browser_check exit 0" is the definition of done for stages 1 to 5, and B0 already exits 1 | 76 of 76 rows FAIL, all on targets under 24 px, in the header, footer, breadcrumbs and body text links (section 8) | compare every stage's `browser_check.py` row with the B0 row, and re-run it after Stage 1 |
| 2 | the theme: default is dark, `data-theme` is set in `Layout.astro:94` and `:130-140`, and legacy CSS in `index.css` and three components keys off it. Stage 1 may change only the Layout lines R3 allows | section 2.8 | the saved-theme test of R15 (stage 1), the token check 3 (section 9 of the brief) |
| 3 | many raw colours and font stacks sit in legacy CSS, and R13 forbids deleting legacy CSS before Stage 6 | 423 raw-colour lines in 26 files, 54 font-family lines in 18 files (2.4) | run the section 9 greps on the changed files only, and list the rest in the PR |
| 4 | three different FAQ markups: `<summary>` (8 pages), `<h2>` always visible (`/faq/`), `<h3>` always visible (11 pages). The brief's FAQ component wants `<summary><h3>...</h3></summary>` where the repo has headings | section 3 table | G5 (headings), G8 (FAQ visible), G6 and G7 (text) after each page |
| 5 | typed numerals in text and inside `<ol>` (`01` to `04` in `span.vertical-step-number`, `1` to `4` in `span.workflow-step-num` inside `<ol>`, `01` in `pricing-test-grid`, `1.` in 36 headings). R12 allows CSS counters only for digits on a baseline `<ol>`; typed digits are text the gate counts | section 3 table | G6, G7 |
| 6 | six business pages are separate files with their own markup and three own `<style>` blocks | section 9 | G5 to G7 per page after the first shared-template page |
| 7 | the header is a React island (`client:load`): theme and menu state, text rendered at build time. A restyle must not change the rendered text or `aria-label` | `Header.jsx` | G6, G7, G14, and `browser_check.py` at 4 widths |
| 8 | content hidden or generated by CSS is invisible to the gate. The baseline already hides the gold header button at 760 px and below (`index.css:315`) | section 5 | R12 and the grep in section 9 of the brief (check 3), by hand |

## 11. Allowed edits in `src/layouts/Layout.astro`

The lines a stage will need, as read at B0. Stage 1 chooses the exact new text.

1. A stylesheet import: one `import '<path>.css';` line in the frontmatter, directly under line 1 (`---`) or after the props destructuring that ends at line 20. At B0 the layout imports no CSS (each page imports its own). The new `<link rel="stylesheet">` is added by Astro in the head.
2. Font preload links: lines 146 to 148 (the comment and the two `<link rel="preload" ... crossorigin>` lines for `syne-latin.woff2` and `plus-jakarta-sans-latin.woff2`).
3. A wrapper class: line 150, `<body>`. If the class must be switched on per page (the brief's opt-in root class), a prop is also needed: `interface Props` (lines 2 to 10) and the destructuring (lines 12 to 20).
4. Only if D5 is answered "retire the toggle" and Kabir agrees to lines outside R3's list: line 94 (`data-theme="dark"`) and lines 130 to 140 (the theme init script). Not on the R3 list.

Not touched, as R3 says: `<title>`, meta tags, canonical, JSON-LD (lines 22 to 88, 143), icons, the consent markup and script (lines 152 to 428).

## 12. Noticed, not changed

Content and site facts that Phase A will not fix. Each came from a command in this report.

1. Dependency audit: `npm ci` printed "11 vulnerabilities (2 moderate, 8 high, 1 critical)". `package.json` dependencies are off limits in Phase A (R3).
2. Build log has 3 deprecation warnings from `vite` / `vite:react-babel` about `optimizeDeps.esbuildOptions` and `esbuild`, each printed 6 times (2.1).
3. `/faq/` shows its 18 questions as always-visible `<h2>` headings (25 H2 in total); every other FAQ on the site is either `<details>` or `<h3>` (section 3). The page's H1 is "Restaurant Billing Software India: Zipla POS Questions Answered".
4. `/blog/` is more than a post list: 9 H2, 11 H3, 4 FAQ questions, one process `<ol>`, one "Last reviewed" line.
5. Repeated text inside one page (segments of 40 characters or more seen twice): `/` ("Table QR Ordering + Customer QR Home Ordering"), `/refund-policy/` ("Yes. Zipla POS offers a 14-day free trial with no credit card or payme..."), `/restaurant-pos-software/` ("What is restaurant POS billing software?"), `/terms-and-conditions/` ("These Terms say that users must be at least 18, act for a business, pr...").
6. Typed numerals in headings: 5 on the GST guide (`<h3>`), 10 on the checklist (`<h2>`), 7 on the price article (`<h3>`), 14 on the terms (`<h2>`).
7. The word "checkout" is in the live text of 4 pages (`/` "Counter checkout + GST", `/cafe-pos-software/` "Run a counter checkout", `/bakery-billing-software/` "one checkout flow", `/dhaba-billing-software/` "during checkout"). BRIEF R4 lists "checkout" as a word Phase A must not add; G15 compares with the baseline count.
8. Image attributes: `ss-gst-invoice.webp` is 1234x864 on disk, `width="1232" height="860"` in HTML (3 pages). Hero pictures of the six business pages have no `loading` attribute (so they load eagerly) and no `fetchpriority`; the Home hero has `fetchpriority="high"`.
9. Pictures in `public/` that no page `<img>` uses: `ai-menu-review-screen.webp`, `ai-menu-scan-workflow.webp`, `ai-menu-scan-workflow-v2.webp`, `zipla-icon.webp` (section 6).
10. `Testimonials.jsx` is never rendered (`CUSTOMER_VIDEOS` is empty) but is still built as `_astro/Testimonials.BG5INUFr.js`.
11. `/404.html`: `<meta name="robots" content="noindex">`, no canonical, not in the sitemap, and carries the global JSON-LD graph (Organization, SoftwareApplication with the two Offers).
12. `public/_redirects` redirects 8 no-slash URLs. There is no entry for `/contact-us`, `/blog`, `/refund-policy`, `/qsr-billing-software`, `/dhaba-billing-software`. Whether Cloudflare Pages already handles those: I do not know, not tested.
13. No `llms.txt`, `_headers` or `security.txt` in `public/`.
14. The footer has no Shipping Policy link or page, although the footer list in BRIEF.md section 5 has one (section 5).
15. Title length is 77 to 83 characters on the four articles (the other pages are 38 to 64), and the longest meta description is 189 characters (`/blog/restaurant-pos-software-checklist/`). Numbers only, no claim about search display.
16. Header link label `Get a Free WhatsApp Demo` (header) and `Book a WhatsApp Demo` (hero) go to the same `/#demo`. On pages other than `/` it leads to the home page anchor.
17. `Layout.astro`'s default `ogImageAlt` is "Zipla POS logo on a dark background".
18. Spelling and typos: I did not run a spell check. I do not know.
19. Heading levels: no skipped level on any page, one H1 on every page (command output below). No image without alt, no empty alt, none without width and height.
20. Links: no internal link points to a missing page, none needs a redirect, no `#anchor` lacks its id. External links (13) are listed below; whether they still load: I do not know, not tested.

<details><summary>Command output: heading levels, robots, links, images, duplicates, old claims</summary>

```
=== 12. heading-level skips per page (from snapshot headings) ===
/                                                          h1 count=1 skips=none
/404.html                                                  h1 count=1 skips=none
/bakery-billing-software/                                  h1 count=1 skips=none
/blog/                                                     h1 count=1 skips=none
/blog/restaurant-dhaba-gst-invoice-guide-2026/             h1 count=1 skips=none
/blog/restaurant-pos-software-checklist/                   h1 count=1 skips=none
/blog/restaurant-pos-software-price-india/                 h1 count=1 skips=none
/blog/restaurant-pos-vs-billing-software/                  h1 count=1 skips=none
/cafe-pos-software/                                        h1 count=1 skips=none
/contact-us/                                               h1 count=1 skips=none
/dhaba-billing-software/                                   h1 count=1 skips=none
/faq/                                                      h1 count=1 skips=none
/pricing/                                                  h1 count=1 skips=none
/privacy-policy/                                           h1 count=1 skips=none
/qsr-billing-software/                                     h1 count=1 skips=none
/refund-policy/                                            h1 count=1 skips=none
/restaurant-pos-software/                                  h1 count=1 skips=none
/sweet-shop-billing/                                       h1 count=1 skips=none
/terms-and-conditions/                                     h1 count=1 skips=none

=== 12. robots meta, canonical, title length, description length ===
/                                                          robots=- canonical=['https://zipla.in/'] title_len=49 desc_len=136
/404.html                                                  robots=[['name', 'robots', 'noindex']] canonical=[] title_len=26 desc_len=40
/bakery-billing-software/                                  robots=- canonical=['https://zipla.in/bakery-billing-software/'] title_len=62 desc_len=154
/blog/                                                     robots=- canonical=['https://zipla.in/blog/'] title_len=58 desc_len=134
/blog/restaurant-dhaba-gst-invoice-guide-2026/             robots=- canonical=['https://zipla.in/blog/restaurant-dhaba-gst-invoice-guide-2026/'] title_len=83 desc_len=150
/blog/restaurant-pos-software-checklist/                   robots=- canonical=['https://zipla.in/blog/restaurant-pos-software-checklist/'] title_len=77 desc_len=189
/blog/restaurant-pos-software-price-india/                 robots=- canonical=['https://zipla.in/blog/restaurant-pos-software-price-india/'] title_len=79 desc_len=157
/blog/restaurant-pos-vs-billing-software/                  robots=- canonical=['https://zipla.in/blog/restaurant-pos-vs-billing-software/'] title_len=80 desc_len=169
/cafe-pos-software/                                        robots=- canonical=['https://zipla.in/cafe-pos-software/'] title_len=58 desc_len=152
/contact-us/                                               robots=- canonical=['https://zipla.in/contact-us/'] title_len=49 desc_len=130
/dhaba-billing-software/                                   robots=- canonical=['https://zipla.in/dhaba-billing-software/'] title_len=64 desc_len=140
/faq/                                                      robots=- canonical=['https://zipla.in/faq/'] title_len=49 desc_len=151
/pricing/                                                  robots=- canonical=['https://zipla.in/pricing/'] title_len=43 desc_len=162
/privacy-policy/                                           robots=- canonical=['https://zipla.in/privacy-policy/'] title_len=43 desc_len=160
/qsr-billing-software/                                     robots=- canonical=['https://zipla.in/qsr-billing-software/'] title_len=58 desc_len=139
/refund-policy/                                            robots=- canonical=['https://zipla.in/refund-policy/'] title_len=38 desc_len=135
/restaurant-pos-software/                                  robots=- canonical=['https://zipla.in/restaurant-pos-software/'] title_len=64 desc_len=164
/sweet-shop-billing/                                       robots=- canonical=['https://zipla.in/sweet-shop-billing/'] title_len=62 desc_len=141
/terms-and-conditions/                                     robots=- canonical=['https://zipla.in/terms-and-conditions/'] title_len=49 desc_len=157

=== 12. internal links: target exists in build? redirect-only (no slash)? anchors with a missing id? ===
internal links to nothing in the build: none
internal links without trailing slash that need a redirect: none
anchors whose id is missing on the target page: none

=== 12. external links (unique href -> pages, rel, target) ===
  https://cbic-gst.gov.in/gst-invoice-rules.html  <- ['/blog/']
  https://cbic-gst.gov.in/hindi/CGST-bill-e.html  <- ['/blog/restaurant-dhaba-gst-invoice-guide-2026/']
  https://cbic-gst.gov.in/hindi/gst-goods-services-rates.html  <- ['/blog/restaurant-dhaba-gst-invoice-guide-2026/']
  https://policies.google.com/privacy  <- ['/privacy-policy/']
  https://razorpay.com/docs/payments/refunds/issue/  <- ['/refund-policy/']
  https://razorpay.com/privacy/  <- ['/privacy-policy/']
  https://razorpay.com/support/  <- ['/contact-us/']
  https://razorpay.com/terms/  <- ['/terms-and-conditions/']
  https://supabase.com/privacy  <- ['/privacy-policy/']
  https://tutorial.gst.gov.in/userguide/taxpayersdashboard/manual_accountingsoftware.htm  <- ['/blog/', '/faq/']
  https://wa.me/917817851009  <- ['/contact-us/']
  https://www.cloudflare.com/privacypolicy/  <- ['/privacy-policy/']
  https://www.whatsapp.com/legal/privacy-policy  <- ['/privacy-policy/']
absolute zipla.in links (all pages, counts): {'https://app.zipla.in/register': 23, 'https://zipla.in/restaurant-pos-software/': 2, 'https://zipla.in/bakery-billing-software/': 2, 'https://zipla.in/qsr-billing-software/': 1, 'https://zipla.in/faq/': 1, 'https://app.zipla.in': 2}

=== 12. images: missing alt, empty alt, missing width or height ===
(none above = all images have alt and width/height)

=== 12. duplicate text segments inside one page (length >= 40, seen 2+ times), excluding the shared header/footer/consent ===
/                                                          1 repeated segment(s) e.g. 'Table QR Ordering + Customer QR Home Ordering' x2
/404.html                                                  0 repeated segment(s)
/bakery-billing-software/                                  0 repeated segment(s)
/blog/                                                     0 repeated segment(s)
/blog/restaurant-dhaba-gst-invoice-guide-2026/             0 repeated segment(s)
/blog/restaurant-pos-software-checklist/                   0 repeated segment(s)
/blog/restaurant-pos-software-price-india/                 0 repeated segment(s)
/blog/restaurant-pos-vs-billing-software/                  0 repeated segment(s)
/cafe-pos-software/                                        0 repeated segment(s)
/contact-us/                                               0 repeated segment(s)
/dhaba-billing-software/                                   0 repeated segment(s)
/faq/                                                      0 repeated segment(s)
/pricing/                                                  0 repeated segment(s)
/privacy-policy/                                           0 repeated segment(s)
/qsr-billing-software/                                     0 repeated segment(s)
/refund-policy/                                            1 repeated segment(s) e.g. 'Yes. Zipla POS offers a 14-day free trial with no credit card or payme' x2
/restaurant-pos-software/                                  1 repeated segment(s) e.g. 'What is restaurant POS billing software?' x2
/sweet-shop-billing/                                       0 repeated segment(s)
/terms-and-conditions/                                     1 repeated segment(s) e.g. 'These Terms say that users must be at least 18, act for a business, pr' x2

=== 12. old claims check: Starter / Pro / 2,999 / 5,999 / 10,000 in build text ===
  'Starter': 0 build files []
  'Pro plan': 0 build files []
  '2,999': 0 build files []
  '5,999': 0 build files []
  '10,000': 0 build files []
  'Save ₹': 0 build files []
  'Buy now': 0 build files []
  'bundle': 2 build files ['fonts/LICENSES.txt', '_astro/client.BgcN2sO-.js']
  'checkout': 4 build files ['index.html', 'cafe-pos-software/index.html', 'bakery-billing-software/index.html', 'dhaba-billing-software/index.html']

=== 12. sitemap vs built pages (corrected: sitemap_locs and page keys are both paths) ===
sitemap URLs: 18 | built pages: 19
built, not in sitemap: ['/404.html']
in sitemap, not built: []

=== 12. 'checkout' in context (first match per file) ===
index.html: ...18" rx="2"></rect><path d="M8 8h8M8 12h8M8 16h4"></path></svg>Counter checkout + GST</div><div class="trust-item"><svg viewBox="...
cafe-pos-software/index.html: ...astro-cid-ivbupb6r>02</span><h3 data-astro-cid-ivbupb6r>Run a counter checkout</h3><p data-astro-cid-ivbupb6r>Create a GST invoi...
bakery-billing-software/index.html: ...are for India with weight billing gives owner-led retail bakeries one checkout flow for items sold by weight, piece or fixed pri...
dhaba-billing-software/index.html: ...ect menu items, create a GST invoice and mark the payment mode during checkout.</p></div><div class="vertical-card" data-astro-c...
```

</details>

## 13. Decisions for Kabir

Each has the brief's default. Stage 1 follows the default if Kabir says "go". Stage 0 does not choose.

- **D1. Home hero visual.** Default A: exactly what the repo's hero shows today (section 4: one laptop picture, `ss-new-order.webp`, no printer picture, no drawn sample bill, no standalone phone dashboard). Option B: the prototype's panel. The prototype is not in this cut, so what B contains and which strings it shows: I do not know, and none are listed here. Kabir's note of 2026-10-31 gives a direction for Home's first screen. It is in the session prompt, not in the repo. No name, text, price, MRP or photo is decided, so Stage 0 writes none. Fact to weigh: default A keeps the first screen as the repo has it today, and Kabir's note asks for a different first screen, so the default does not follow the note.
- **D2. Skip link.** Default: add one only if the repo has none and a page has more than five links before `<main>`. At B0 the repo has none (`grep -rni "skip to\|skip-link\|skiplink" src` found nothing) and every page has 6 links before `<main>`. It is new text and goes into `allow_new.txt`.
- **D3. Phone hero order.** Default: text first. Alternative: visual first. In the source the hero DOM order is text (`.hero-copy`), then the figure (`Hero.jsx:30, 63`). The prototype's order and the measured design are not in this cut.
- **D4. Stage plan and release.** Default: the table in BRIEF 6 and the integration branch of 6.5 (stages 1 to 5 into `redesign/integration`, Stage 6 is the one release PR to `main`). Alternative: every stage goes to `main` on its own and the live site is mixed in between. `origin/redesign/integration` does not exist yet (section 9).
- **D5. Theme.** Default: light only, the toggle is retired (R15). Alternative: keep a toggle, which needs a dark design this pack does not have. What removing it touches: files and lines in section 2.8, and Layout lines 94 and 130 to 140 are outside R3's list (section 11).
- **D6. Product pictures.** Default: phone UI wherever a phone version already exists in the repo or in `images/`. KDS stays wide. Every other laptop or tablet picture stays as the repo has it and is listed. At B0 the repo has no phone version of any page picture (section 6), and `images/` is not in this cut, so under the default every laptop picture on every page stays. Alternative: Kabir supplies phone screenshots first and Stage 3 waits.

## Appendix A. Plan and pre-mortem written before the build (BRIEF 4.2, 4.3)

Job in one sentence. Audit apnamenu-landing at origin/main and write facts into docs/redesign/. No site code changes.
Limits from the prompt. Docs-only commit, draft PR to main, no merge, no push to main, no database, no secret printed, no subagent, no web search. "I do not know" for anything not verified by a command. Exit 3 = "I do not know". No machine text (name, price, MRP, photo) anywhere in Stage 0.

### Plan (order of work)
1. Branch redesign/stage-0-audit from origin/main. Record main SHA.
2. B0 build: npm ci, npm run build, copy dist to /tmp/base_dist, snapshot to /tmp/base.json. git status must stay clean.
3. Determinism: build the same commit twice, diff -rq the two dist folders, compare the two snapshots.
4. Inventory: inventory.py on /tmp/base.json -> docs/redesign/inventory.md.
5. Repo facts (6.1 section 2): scripts, deps, astro config, CSS approach, imports, component file types, client: directives, Layout.astro head/body, cookie consent, theme toggle, public/, fonts, Cloudflare preview evidence.
6. Term hits (prompt): Billing Machine, printer, MRP, Buy now. Repo source and build. Counts per file, first three lines per file.
7. Page facts: archetype per page, forms, scripts, embeds, FAQ markup, step lists, own header/footer. Home hero facts. Header, footer, phone/wa.me, rupee prices, date lines.
8. Pack vs repo: images/ is not in this cut (skip, say so). Two prototype sentences by grep. Product picture list: look at every picture.
9. Tooling: python playwright, Chromium. browser_check.py and fold_check.py on B0. Paste LCP, CLS, fold numbers.
10. Write STAGE0.md (sections 0 to 13), B0_SHA.txt, two empty allow files.
11. Commit only docs/redesign/ with explicit paths. Push branch. Draft PR to main.
12. Build the branch, snapshot, compare against B0. Must be all pass.

### Pre-mortem: how Stage 0 could go wrong, and what catches it
| # | risk | catch |
|---|---|---|
| S1 | a non-docs file lands in the commit (dist, node_modules, .astro, lockfile) | git add with explicit paths. git diff --stat origin/main...HEAD. git status --short |
| S2 | npm changes package-lock.json | use npm ci, never npm install. git status --short after build |
| S3 | the docs commit changes the build | build the branch, compare against B0, exit 0 |
| S4 | two builds of one commit differ (date in a SEO file) | diff -rq and compare of two snapshots. Name file and lines. BLOCKER |
| S5 | a secret or token printed in a doc | grep the docs for key-like strings before commit. Read each source hit before pasting |
| S6 | machine text, MRP, offer words written by me | grep the docs: allowed only inside quoted repo hits in section 2 |
| S7 | invented page list or H1 | take both from inventory.py (built HTML), never from BRIEF section 13 |
| S8 | browser tools missing, numbers faked | exit code 3 -> write "I do not know". No guessed numbers |
| S9 | a claim without a command behind it | every fact in STAGE0.md has its command and output next to it, or says "I do not know" |

### Pre-mortem for later stages (the nine of BRIEF 4.3, checked by the gate)
1 text lost or changed (G6, G7). 2 heading changed (G5). 3 link lost (G9). 4 head or JSON-LD changed via layout (G3, G4). 5 content hidden or generated by CSS (R12, grep in section 9, only me). 6 LCP slower (browser_check vs B0 numbers). 7 CLS from font swap (browser_check). 8 sideways scroll, small tap targets (browser_check, fold_check). 9 text that needs JS (G6 reads built HTML).

## Appendix B. The Stage 0 branch compared with B0

Built at commit abc044a14b8cb84d0586dce1078e2e74a9980c0a (the Stage 0 docs commit). Commands, in order:

```
$ rm -rf dist && npm run build
(exit 0) [build] 19 page(s) built in 1.34s
$ python3 -I gate/seo_gate.py snapshot dist /tmp/new.json
(exit 0) snapshot: 19 pages, 74 files
$ python3 -I gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --forbidden /tmp/pack/redesign-ref-r6/gate/forbidden.txt --report /tmp/gate_report.md
(exit 0)
$ diff -rq /tmp/base_dist dist
(no output, exit 0)
```

```
# SEO gate: baseline vs new
baseline: /tmp/base.json (19 pages)
new: /tmp/new.json (19 pages)

| Line | Check | PASS | WARN | FAIL |
|---|---|---|---|---|
| G1 | Files, sitemap, robots, llms, redirects, headers | 5 | 0 | 0 |
| G2 | Same page URLs, sitemap URLs all built | 2 | 0 | 0 |
| G3 | title, meta, canonical, hreflang, html lang | 19 | 0 | 0 |
| G4 | JSON-LD identical | 19 | 0 | 0 |
| G5 | Headings: H1, no heading added, removed or re-levelled | 19 | 0 | 0 |
| G6 | Baseline text still present | 19 | 0 | 0 |
| G7 | No new text | 19 | 0 | 0 |
| G8 | FAQ questions and answers visible | 19 | 0 | 0 |
| G9 | Links kept, no broken internal link or anchor | 19 | 0 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 19 | 0 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

## FAIL (0)
none

## WARN (0)
none

RESULT: PASS (0 FAIL, 0 WARN)
```

BRIEF section 9 checks on this branch (compared with origin/main):

```
$ git diff --name-only origin/main...HEAD | grep -E "\.(css|astro|jsx|tsx)$"   (check 3 input)
(no output: no css, astro, jsx or tsx file changed)
$ git diff origin/main...HEAD -- package.json package-lock.json | wc -l   (check 4)
0
$ git diff origin/main...HEAD -- . ':!docs' | grep -nE '^\+.*<script' | wc -l   (check 4, docs/ left out because the report quotes script tags as text)
0
$ git diff --stat origin/main...HEAD   (check 5)
 docs/redesign/B0_SHA.txt        |    1 +
 docs/redesign/STAGE0.md         | 1582 +++++++++++++++++++++++++++++++++++++++
 docs/redesign/allow_new.txt     |    0
 docs/redesign/allow_removed.txt |    0
 docs/redesign/inventory.md      |  485 ++++++++++++
 5 files changed, 2068 insertions(+)
$ git status --short   (check 5)
(empty)
```
