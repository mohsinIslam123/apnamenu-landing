# Stage 1: Foundation (DRAFT)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-1-foundation`, created from `origin/redesign/integration` at `e6225824af2332da528e8f05a5d83780e0c9482e`. B0 (the build of `main` that Stage 0 recorded): `419cc531ac67c75ec5ab5384a3c5c9880b64dfca`. `git diff --stat B0..origin/main` lists only files under `docs/redesign/`, so B0 stays.
Scope: tokens, fonts, base styles, the shared Header and Footer, the skip link, the cookie banner look, the retired theme toggle. No page body. No machine band. No offer text.

## 1. In five lines

Gate: 0 FAIL, 19 WARN. Every WARN is G12 (one inline script less on each page: the retired theme script). Browser check: ran, exit 1, 68 FAIL rows and 20 WARN rows (B0: 76 and 76). 0 of 76 rows are worse than their own B0 row. The FAILs that stay are old page-body links (section 9). Stage 1's own rule (R11) is "no page worse than its own B0 row, every element this stage touched at 48 px", and that holds. Exit 0 is not reachable in this stage, because B0 itself exits 1 on all 76 rows (Stage 0, risk 1).
Pages changed: 19 (header and footer only, no page body). Files changed: 17 (4 edited, 13 new). Base: `redesign/integration` at e622582. B0: 419cc53.
Verdict: ready for your preview check.
Offer check: no machine band in this stage.
Page bodies stay old and dark until their own stage. That is the expected mixed look (BRIEF 6).

## 2. Needs Kabir's OK

1. **Theme edit in `src/layouts/Layout.astro` (decision D5). Listed first on purpose.**
   Changed: the inline script at B0 lines 130 to 140 is deleted. It read `zipla-theme` from the browser and set the theme. In `Header.jsx` the toggle button, its icon, its state and its saved-theme read are deleted. The toggle had no visible text (icon only), so `allow_removed.txt` stays empty.
   Not changed: line 94, `data-theme="dark"`. Three old components style their dark look through that attribute, and the old light styles are broken on at least `/privacy-policy/` (its H1 is almost invisible in light, I looked at the screenshot). So I could not make old bodies light without touching page bodies.
   Result: old bodies are dark for every visitor, also for someone who once chose light. Nothing is live, so nobody is affected before Stage 6.
   Other lines of the file that I touched, all on the allowed list: one CSS import, the `zp` prop (two lines), two font preloads, the body class. The JSON-LD lines are byte for byte as before.
   If you say no: tell me whether you want old bodies light now. That needs fixes in old page CSS, which is Stage 3 to 5 work.
2. **Logo.** The repo's `/zipla-logo.webp` is a picture with its own dark background, no transparency. On the paper header it shows as a dark tile (I rounded its corners so it looks intended). The prototype uses two transparent PNG logos (dark word for the header, white word for the footer). They are not in the pack's `images/` folder: `ASSETS.md` lists 11 images, the folder has 9. BRIEF R9 says repo images only, so I kept the repo's. If you say yes to the prototype logos, send me the two files or tell me to cut them out of the prototype. It is one small fix round (about 64 KB).
3. **Phone header.** The repo has a menu button below 761 px and the gold demo link lives inside that menu. I kept both (BRIEF R7: keep the repo's menu, 13.7: the baseline wins). The prototype shows Features, Pricing and FAQ inline on phones and has no demo link there. If you want that, say so. The cost: on phones the "Get a Free WhatsApp Demo" link would have no place in the header.

## 3. Check these on your phone (the Cloudflare preview link is in the comments)

- Any page, top: logo tile on the left, menu button on the right. Tap the menu: Features, Pricing, FAQ, then the gold demo button. Tap the menu button again: it closes.
- Any page, bottom: the new dark footer. Links are easy to tap. "Privacy settings" opens the privacy box.
- Private tab, first visit: the cookie box shows at the bottom. Tap "Manage": a second box opens. Tap "Reject analytics": it closes. Scroll to the footer and tap "Privacy settings": the second box opens again. Tap "Allow analytics": it closes.
- Home, Pricing, FAQ, one business page, one blog article, Privacy: no sideways scroll, text readable.
- The page body above the footer is the old dark design. That is expected.
- Anything blank, broken, overlapping, missing or new in text: tell me.

## 4. Gate table

`compare` against B0 (the build of `origin/redesign/integration`, which equals B0 in site output). Exit 0.

| Line | Check | PASS | WARN | FAIL |
|---|---|---|---|---|
| G1 | Files, sitemap, robots, llms, redirects, headers | 6 | 0 | 0 |
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
| G12 | Scripts and third-party hosts | 0 | 19 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

WARN, all 19 are G12 "inline script count": 4 to 3 on 18 pages, 5 to 4 on Home. Reason: the theme init script is gone (D5). No third-party script changed. Without the allow file, G7 fails on all 19 pages with the one new text "Skip to content" (I ran that to prove the allow entry is needed and used).

## 5. Pages in this PR

All 19 pages get the same Header, Footer, skip link and cookie look. No heading, no body text, no link of a page body changed (G5, G6, G7, G9). "Action" is the first link or button after the H1 that `fold_check.py` finds. On article, FAQ, contact and legal pages that is a small text link, not a main action. `ok` and `WARN` are the tool's words. No row changed status against B0 (95 rows compared).

| URL | H1 (unchanged) | archetype | components used | fold 390x844: H1 bottom, action bottom | fold 1366x768 |
|---|---|---|---|---|---|
| / | Restaurant Billing Software for India | 1 Home | Header, Footer, skip link, cookie look | H1 313, action 675 (ok) | H1 352, action 633 (ok) |
| /404.html | That page is not available. | 9 Utility | same | H1 365, action 529 (ok) | H1 422, action 562 (ok) |
| /bakery-billing-software/ | Bakery Billing Software for India | 2 Business-type | same | H1 286, action 647 (ok) | H1 389, action 712 (ok) |
| /blog/ | Restaurant Billing & POS Guides for India | 6 Blog index | same | H1 256, action 1432 (WARN) | H1 276, action 1189 (WARN) |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | GST Invoice for Restaurant and Dhaba in India (Step by Step Guide 2026) | 7 Blog article | same | H1 342, action 2767 (WARN) | H1 304, action 1579 (WARN) |
| /blog/restaurant-pos-software-checklist/ | Restaurant POS Software Checklist: What to Test Before You Switch | 7 Blog article | same | H1 375, action 2478 (WARN) | H1 376, action 1717 (WARN) |
| /blog/restaurant-pos-software-price-india/ | Restaurant POS Software Price in India: What to Check Before Buying | 7 Blog article | same | H1 302, action 1968 (WARN) | H1 343, action 1549 (WARN) |
| /blog/restaurant-pos-vs-billing-software/ | Restaurant POS vs Billing Software in India: What Is the Difference? | 7 Blog article | same | H1 302, action 2951 (WARN) | H1 343, action 2327 (WARN) |
| /cafe-pos-software/ | Cafe POS Billing Software for India | 2 Business-type | same | H1 326, action 663 (ok) | H1 389, action 686 (ok) |
| /contact-us/ | Contact Zipla POS Support | 5 Contact | same | H1 220, action 873 (WARN) | H1 221, action 674 (ok) |
| /dhaba-billing-software/ | Dhaba Billing Software India | 2 Business-type | same | H1 326, action 688 (ok) | H1 389, action 712 (ok) |
| /faq/ | Restaurant Billing Software India: Zipla POS Questions Answered | 4 FAQ | same | H1 324, action 1379 (WARN) | H1 332, action 1046 (WARN) |
| /pricing/ | Restaurant POS Pricing in India | 3 Pricing | same | H1 243, action 511 (ok) | H1 297, action 500 (ok) |
| /privacy-policy/ | Zipla POS Privacy Policy | 8 Legal | same | H1 208, action 650 (ok) | H1 221, action 511 (ok) |
| /qsr-billing-software/ | QSR Billing Software India | 2 Business-type | same | H1 286, action 596 (ok) | H1 336, action 633 (ok) |
| /refund-policy/ | Zipla POS Cancellation & Refund Policy | 8 Legal | same | H1 220, action 760 (ok) | H1 221, action 543 (ok) |
| /restaurant-pos-software/ | Restaurant POS Billing Software for India | 2 Business-type | same | H1 326, action 663 (ok) | H1 389, action 686 (ok) |
| /sweet-shop-billing/ | Sweet Shop Billing Software India | 2 Business-type | same | H1 326, action 688 (ok) | H1 389, action 712 (ok) |
| /terms-and-conditions/ | Zipla POS Terms and Conditions | 8 Legal | same | H1 244, action 767 (ok) | H1 221, action 540 (ok) |

Home, all five viewports (`fold_check.py`): 320x640 H1 313, action 723 (WARN, as in B0). 360x640 H1 313, action 675 (WARN, as in B0). 390x844 H1 313, action 675 (ok). 414x896 H1 313, action 654 (ok). 1366x768 H1 352, action 633 (ok). The H1 sits 2 to 6 px higher than in B0 on every row, because the new header is 65 px tall.
No sideways scroll: `fold_check.py` (320, 360, 390, 414 and 1366 px) and `browser_check.py` (360, 390, 768 and 1280 px) found none on any of the 19 pages. My own sweep of the header on `/pricing/` at 761, 800, 899, 900 and 1024 px found no overflow either.

## 6. Numbers, base and new

Base = the B0 build, measured again in this session. Lab numbers are Chromium 153 headless on localhost, no throttling. Compare them only with each other.

| metric | base | new |
|---|---|---|
| LCP, Home, 360 / 390 / 768 / 1280 px | 152 / 148 / 164 / 232 ms | 156 / 204 / 192 / 196 ms |
| LCP element, Home | h1 / h1 / img / img | h1 / h1 / img / img |
| LCP, median of all 76 rows | 104 ms | 108 ms |
| CLS, all 76 rows | 0.000 | 0.000 |
| CSS, gzip (G16) | 27,293 B | 29,389 B (+2,096) |
| JS, gzip (G16) | 50,363 B | 49,803 B (-560) |
| fonts in the build | 61,956 B | 222,984 B (+161,028, seven new files) |
| fonts a page view downloads | 61,956 B | 159,008 B (+97,052) |
| images | 635,244 B | 635,244 B |
| HTML, all pages | 857,134 B | 837,371 B (-19,763) |
| largest HTML | `/` 138,341 B | `/` 137,301 B |
| targets under 24 px, all 76 rows | 1,357 | 179 (all in page bodies) |
| rows with a target under 24 px | 76 of 76 | 68 of 76 |
| targets of 24 to 43 px, all 76 rows | 594 | 64 (all in page bodies) |
| header, footer and cookie controls under 48 px | not measured | 0 of 8,816 measured |

Honest reading of LCP: one run is not a measurement. Stage 0 measured B0 Home at 160 / 200 / 184 / 196 ms, I measured 152 / 148 / 164 / 232 ms, and two runs of the new build gave 164 / 144 / 168 / 184 and 156 / 204 / 192 / 196 ms. The spread between runs is up to 56 ms. I cannot claim a change in either direction. CLS is 0.000 everywhere, so no fallback font faces were added.
Fonts a page view downloads: I measured `/privacy-policy/` at 390 px, first visit and returning visit, and both load the same four files (Syne, Plus Jakarta Sans, Figtree, Bricolage Grotesque). The Bricolage preload (76,868 B) is only used by the cookie box heading on a first visit. A returning visitor downloads it for nothing until Stage 2 puts Bricolage into headings. The pack asks for both preloads, so I kept both (section 9).

## 7. Allow-list entries added

- `docs/redesign/allow_new.txt`: `Skip to content`, all 19 pages. Reason: decision D2 (the file from the pack, `offer/allow_new_stage1.txt`, appended as it is, with its comment line). It is the text of the skip link.
- `docs/redesign/allow_removed.txt`: none. The theme button had no visible text. Its `aria-label` and `title` ("Switch to light theme") are gone too. G6 passes without an entry, so the gate does not count them as text.

## 8. Deviations from the pack

1. `src/styles/tokens.css` is the pack's file with one change: its two global focus-ring rules (`a, button, summary, .screens` and `.ink a, .ink button`) are moved to `frame.css` and scoped to the frame and to `.zp`. As written they change the focus ring and corner radius of every old page body, and BRIEF 6.3 says a page that is not converted keeps its old look. All token values are byte for byte the pack's (diff checked up to `--zp-z-sticky`). `fonts.css` and the 7 woff2 files are the pack's, sha256 equal.
2. One CSS entry file, `src/styles/zipla.css`, imports tokens, fonts and frame. `Layout.astro` has one import line instead of three.
3. Class names. The frame uses the prefix `zp-` (`zp-hdr`, `zp-nav`, `zp-foot`, `zp-flink`, `zp-skip`, `zp-btn`). Reason: the old stylesheet already has `.btn-ghost`, `.wrap`, `.eyebrow` and other prototype names. Stage 2 on: prototype names, scoped under `.zp`.
4. Phone header keeps the repo's menu button (section 2, item 3). The gold header button shows from 761 px, not 900 px, because the baseline shows it from 761 px (R12, 13.7). I swept 761, 800, 899, 900 and 1024 px: it fits, no overflow.
5. The header is no longer sticky (the prototype's is not, the repo's was above 760 px).
6. `header.site-header` keeps the old class, because the analytics script reads `closest('.site-header')` (R10). The old declarations of that class are reset by one rule with higher specificity (`html:root .zp-hdr.site-header`). Without that, source order would decide, and the new CSS loads before the old.
7. The footer links sit in a `<nav aria-label="Footer">`, as in the prototype. The repo had two plain `div`s. G6, G7, G9 and G14 pass.
8. Skip link target. The pages' own `<main>` has no id and a stage may not edit page bodies, so the target is an empty `div#zp-content` right after the header. A later stage that edits a page can move it to `<main id="zp-content">`.
9. Fonts: the two old preloads (Syne, Plus Jakarta Sans) stay, because old bodies still use them. The two new ones are added after them.
10. The cookie banner keeps `position: fixed` and `z-index: 1000` from the old sheet (the prototype uses 60), so it stays above everything as before.
11. Logo tile corners are rounded with CSS (`--zp-r-sm`). The image file is the repo's, untouched.
12. Line 94 of `Layout.astro` is not changed (section 2, item 1).

## 9. Noticed, not changed

1. Old light theme is broken on `/privacy-policy/` (H1 nearly invisible when the saved theme is light). I did not look at the other legal pages in light. Moot now that the toggle is gone, but the old light rules are still in `index.css` (lines 319 to 354).
2. Old CSS that no markup uses any more: `.brand-logo`, `.brand-mark`, `.brand-name`, `.nav-links`, `.mobile-menu-toggle`, `.mobile-nav-demo`, `.header-actions`, `.theme-toggle`, `.footer-inner`, `.footer-note`, `.footer-links`, `.footer-settings` and the old light-theme block. R13: not deleted. For Stage 6 as a suggestion, not done.
3. At load the cookie script focuses the first link in the box ("Privacy Policy"), so the focus ring shows on it. B0 did the same with an amber ring. It is the repo's behaviour (R10), I did not rewire it.
4. The Bricolage preload costs a returning visitor 76,868 B until Stage 2 (section 6). If you prefer, I drop that one preload now and add it back in Stage 2.
5. Page-body targets that are still under 24 px (the old FAIL rows that stay). Header, footer and cookie box have none. Stages 2 to 5 own these.
   - `/`: the "Bakery" and "Sweet Shop" tile links (two each), and at 1280 px also "See pricing", "Book a WhatsApp demo for your own workflow" and "See plan pricing".
   - the six business pages: the breadcrumb "Home". `/pricing/` also "Talk through your workflow on WhatsApp".
   - `/contact-us/`: support@zipla.in, the phone number, "Message on WhatsApp", the Email, call and WhatsApp links, "Back to Zipla POS" (8 at 390 px, 11 at 1280 px).
   - `/blog/`: the guide links and the topic links (9 at 390 px, 8 at 1280 px).
   - the four articles: breadcrumbs "Home" and "Blog".
   - `/privacy-policy/`: "Back to Zipla POS". `/terms-and-conditions/`: "Back to Zipla POS", "Privacy Policy". `/refund-policy/`: support@zipla.in, "Back to Zipla POS".
   - `/faq/` and `/404.html`: none.
6. `/pricing/`, `/faq/` and the pages above still have 24 to 43 px buttons in bodies ("Start 14-Day Free Trial", "Book Free WhatsApp Demo", "Start the free trial"). Page-body work.
7. `public/fonts/LICENSES.txt` still lists only Syne and Plus Jakarta Sans. The three new families are under the SIL Open Font License according to their own file metadata (`fonts/NOTES.txt` in the pack). I did not read the licence text. You check https://openfontlicense.org once before the release merge, and then the three copyright lines go into that file.
8. `src/layouts/Layout.astro` has mixed line endings in the repo (409 of 430 lines end in CRLF, the rest in LF). I kept every original byte outside my edits, so `git diff` shows only my edits (7 lines added, 13 removed) and none of the JSON-LD lines.
9. `/blog/` has an FAQ, a process list and a date line, as Stage 0 noted. Nothing changed there.

## 10. Not verified

- Real phones, Safari, Firefox and Samsung Internet. I only ran headless Chromium 153.
- A screen reader. The skip link and the menu work by keyboard in my tests (first Tab lands on "Skip to content", Enter moves focus to `#zp-content`, the next Tab lands in `<main>`; Escape closes the menu and returns focus to its button). I did not listen to them.
- Google Analytics after "Allow analytics" in a live property. In my test the request to `googletagmanager.com` was blocked on purpose. I checked that the script tag is added, the consent cookie and storage value are set, and nothing is set on reject.
- The Cloudflare preview. The bot comments after this PR is opened. Whether the project previews every branch: I do not know until it does.
- Rankings. Nobody knows before 28 days of data.
- Lighthouse. Not run, nobody measured the live site (BRIEF 13).
- The font licence (section 9, item 7).

## 11. Commands run

```
sha256sum /tmp/pack.zip                       # e620d65d8c7309eeb376b67dbc34328de0a618fdf4441f010a6aea268354fb3d, 4,894,511 bytes, matches the prompt
python3 -m zipfile -e /tmp/pack.zip /tmp/pack
python3 -I /tmp/pack/redesign-ref-r7/gate/selftest.py          # SELFTEST OK
python3 -m venv /tmp/pwvenv && /tmp/pwvenv/bin/pip install playwright==1.63.0
git fetch origin redesign/integration
git diff --stat 419cc531ac67c75ec5ab5384a3c5c9880b64dfca..origin/main     # only docs/redesign/
git switch -c redesign/stage-1-foundation origin/redesign/integration
npm ci && npm run build                        # baseline, 19 pages, git status clean
cp -r dist /tmp/base_dist
python3 -I .../gate/seo_gate.py snapshot /tmp/base_dist /tmp/base.json
/tmp/pwvenv/bin/python -I .../gate/browser_check.py /tmp/base_dist --out /tmp/shots_b0     # 76 FAIL, 76 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py /tmp/base_dist                            # 53 WARN, 0 sideways
(edit, build, snapshot, compare after every round)
npm run build
python3 -I .../gate/seo_gate.py snapshot dist /tmp/new.json
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --forbidden .../gate/forbidden.txt --report /tmp/gate_report.md   # exit 0
python3 -I .../gate/seo_gate.py compare ... (without --allow-new)                          # G7 FAIL x19, as designed
/tmp/pwvenv/bin/python -I .../gate/browser_check.py /tmp/new_dist --out /tmp/shots_new     # 68 FAIL, 20 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py /tmp/new_dist                             # 53 WARN, 0 sideways
npx astro build --outDir /tmp/zp_test_dist     # with `zp` set on 404.astro for one run, file restored byte for byte
```
BRIEF section 9 static checks: 1 no raw colour in my files, 2 font stacks only as `@font-face` names in `fonts.css`, 3 four `display: none` hits in `frame.css` (below), 4 no dependency change and no new `<script`, 5 17 files.
The four `display: none` hits: `.zp-nav-demo` (hidden above 760 px, as the old `.mobile-nav-demo`), `.zp-hdr-cta` (hidden at 760 px and below, as the old `.btn-cta`), `.zp-menu-btn` (hidden above 760 px, as the old toggle), `.zp-nav` (hidden until the menu opens, at 760 px and below). Same breakpoint and same text as B0, so nothing that B0 shows is hidden.
My own test scripts (Playwright, consent, menu, skip link, theme, 48 px, style diff, screenshots) live in the session's scratch folder and are not in the repo. Appendix B has what they found.

## Appendix A. Plan and pre-mortem, written before the build (BRIEF 4.2, 4.3)

Job in one sentence. Every page of zipla.in gets the Round 7 frame: the shared Header and Footer, the skip link, the cookie banner look, on top of tokens, fonts and an opt-in base class. No page body changes. No machine band. No offer text.

What I read first, and what it changed in the plan:
- Header and Footer are shared by all 19 pages, so one restyle covers every page.
- The old light theme is broken on `/privacy-policy/`, so line 94 of `Layout.astro` stays and old bodies stay dark.
- The consent script reads `#zipla-consent-banner`, `#zipla-consent-preferences`, `[data-zipla-consent]`, `#zipla-consent-settings` and `closest('.site-header')`. All kept.
- The repo logo is an opaque picture, so it shows as a tile on paper.
- `tokens.css` ends in two global focus rules, so I scoped them.

Pre-mortem, the way this PR could lose traffic or break the site, and the command that caught each:

1. Text lost or changed: G6, G7. Passed. The only new text is "Skip to content".
2. Heading changed: G5. Passed. Header and Footer have no headings. The consent `h2`s are in `Layout.astro` markup that I did not touch.
3. Link lost: G9. Passed.
4. Head tags or JSON-LD changed by the layout edit: G3, G4. Passed. The JSON-LD source lines are byte for byte as before.
5. Hidden or generated text from CSS (R12): the gate cannot see it. grep check 3 and review. Four hits, all with the B0 breakpoints and the same text (section 11).
6. LCP slower from fonts or CSS: `browser_check.py` against B0. Medians 104 and 108 ms, run-to-run spread up to 56 ms. No claim.
7. Layout shift from the font swap: CLS 0.000 on all 76 rows, so no fallback faces.
8. Sideways scroll or small tap targets: `browser_check.py`, `fold_check.py` and my 48 px check. No sideways scroll anywhere. 0 of 8,816 frame controls under 48 px.
9. Text that needs JavaScript: G6 reads built HTML. Passed. Header and footer text is server-rendered.
10. Offer fact differs from OFFER.md: not applicable, no band. `grep` of the diff for "Billing Machine", "Buy now" and "4,999" finds nothing in my files.
11. A string from OFFER.md section 4 reaches a page: G15 passed.
12. Consent behaviour broken by the restyle (R10): Appendix B, 13 cases identical before and after.
13. Menu behaviour broken: Appendix B.
14. Restyle leaks into old page bodies: Appendix B, 0 differences in computed styles.
15. Old body unreadable inside the new frame: screenshots of nine pages at 390x844 and 1366x768, one per archetype. Readable, no overlap, no sideways scroll.
16. Theme not really retired: Appendix B, saved-theme test, and `zipla-theme` is in 0 built files (B0: 20 files).
17. Behaviour hook lost: `.site-header` and `#zipla-consent-settings` kept.

## Appendix B. What I tested

**Cookie banner and Privacy settings, B0 build against new build, headless Chromium, `/pricing/`.** 13 cases, the result table is identical before and after (`diff` printed nothing): first visit (banner visible, focus on the Privacy Policy link), Reject (cookie and storage `denied`, no GA script), Allow (`granted`, GA script tag added), Manage then Reject, Manage then Allow, the footer "Privacy settings" button after a saved choice (opens the box, focus on Reject), Escape closes the box and returns focus to that button, settings then Allow, returning visitor with `granted` (GA loads, no box), Escape on a first visit (focus moves to Reject, box stays), Shift+Tab from Reject (focus moves back to the Privacy Policy link inside the box), phone width Reject.

**Header menu, new build.** At 390 px: menu button 48 by 48 px, `aria-expanded` false and label "Open navigation menu". After a tap: true and "Close navigation menu", the panel shows four rows of 332 by 48 px (Features, Pricing, FAQ, Get a Free WhatsApp Demo). Escape closes it and focus returns to the button. A tap on "FAQ" opens `/faq/`. At 761, 800, 899, 900 and 1024 px: menu button hidden, gold button 228 by 48 px visible, no overflow.

**Skip link, `/faq/`, 1280 px.** The first Tab lands on "Skip to content" (x 32, y 8, 142 by 48 px, on screen). Before focus its bottom edge is at -64 px, so it is off the top of the page. Enter sets the hash to `#zp-content` and moves focus there. The next Tab lands on the first link in `<main>`.

**Saved-theme test (R15).** `localStorage["zipla-theme"]` set to `light`, to `dark`, and not set, on `/`, `/privacy-policy/` and `/pricing/`, 390 px. As built, all nine runs give the same page: `<html data-theme="dark">` (static), no inline `style` on `<html>`, no toggle button, body background `rgb(10, 11, 18)`. So the saved value changes nothing. That body is the old dark default (section 2, item 1). To see what a converted page does, I switched the opt-in class on in the browser (`document.body.classList.add('zp')`). In all nine runs the body then is `rgb(248, 245, 238)` (paper) with text `rgb(28, 25, 21)` (ink) and Figtree, whatever was saved. No page opts in yet, so this is an emulation. The old content inside is not converted, so it is not readable in that emulation. It is not a shipped state. A built check with `<Layout zp>` (temporary edit of `404.astro`, restored): `<body class="zp">` on that page and plain `<body>` on the others.

**48 px check (R11), my script.** 19 pages at 320, 360, 390, 414, 768, 1024, 1280 and 1366 px. It measures every link, button and field in the header, the footer, the skip link and both cookie dialogs, the opened phone menu included. 8,816 measurements, 0 under 48 px. Not counted: the "Privacy Policy" link inside the cookie paragraph, which is an inline link (exempt in `browser_check.py` too).

**Under 24 px, my script, 390 and 1280 px, all 19 pages.** 0 elements in the header, footer or cookie box. The ones that remain are in section 9, item 5.

**Style leak check, my script.** For nine pages (one per archetype) at 390x844 and 1366x768, every element inside `<main>` of the B0 build against the new build: 34 computed properties each (colour, font, size, margin, padding, border, display, position, width, height and more). 18 page and size pairs, 0 differences. The keyboard focus ring of the first link in `<main>` is the same in both (2 px, amber, the old rule), so the scoped focus rules do not leak.

**Console and requests.** 19 pages at 390 px, B0 and new: 0 console errors or warnings, 0 failed or 4xx requests.

**Screenshots.** Nine pages (`/`, `/restaurant-pos-software/`, `/pricing/`, `/faq/`, `/contact-us/`, `/blog/`, `/blog/restaurant-pos-software-checklist/`, `/privacy-policy/`, `/404.html`) at 390x844 and 1366x768, whole page, header and footer compared with `png/first-screens/09_faq_*`, `16_privacy_*`, `png/home-sections/home_390_10.jpg` and `home_1366_08.jpg`. The cookie banner is not in the pack's PNGs, so I rendered the prototype's own banner and set it beside mine. Differences and what I did about them: the logo (section 2, item 2), the phone header (item 3), the gold button from 761 px (section 8, item 4), the focus ring on the first cookie link (section 9, item 3). Everything else in the PNGs (machine band, paper bodies, gold H1 bars) belongs to Stages 2 to 5.
