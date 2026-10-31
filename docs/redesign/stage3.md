# Stage 3: Business-type pages (DRAFT)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-3-business-pages`, created from `origin/redesign/integration` at `471d0dee081054319d2262b1fd298ac22277a911` (Stages 1 and 2 are merged there, PR #33 and PR #34). B0 (the build of `main` that Stage 0 recorded): `419cc531ac67c75ec5ab5384a3c5c9880b64dfca`.
Scope: the six business pages `/restaurant-pos-software/`, `/cafe-pos-software/`, `/bakery-billing-software/`, `/sweet-shop-billing/`, `/qsr-billing-software/`, `/dhaba-billing-software/`. The look of the Round 7 business tabs (`p-rest` to `p-dhaba`) and the L band of the Zipla Billing Machine (OFFER.md 3.3). Title, meta, canonical, robots and JSON-LD are untouched. `Layout.astro` is untouched.
Buy now address: the Razorpay link from Kabir's prompt, `https://rzp.io/rzp/ygTqBnl`, already in `src/constants.js` since Stage 2. Claims: the prompt has no PROOF line, so "10 minutes" and "no training needed" are not built. That claim line is a Home-only element (OFFER.md 3.10), so it is not part of these pages anyway.

## 1. In five lines

Gate: 0 FAIL, 6 WARN (all G9: the new Buy now link on each page). Browser check: ran, exit 1 (40 FAIL rows, 30 WARN rows; the base had 64 and 54). The 24 rows of the six pages went from 24 FAIL to 24 ok. The 52 rows of the other 13 pages carry exactly the same text as in the base (compared row by row). Exit 1 stays because of those old rows, which belong to Stages 4 and 5.
Pages changed: 6. Files changed: 12 (6 pages, 2 new components, 2 new stylesheets, `allow_new.txt`, this report). Base: `redesign/integration` at 471d0de. B0: 419cc53.
Verdict: ready for your preview check. Five points need your OK (section 2).
Offer check: the strings of the machine band in the built HTML equal OFFER.md section 3: yes. On each of the six pages the band has 19 text pieces, 2 alt texts, 1 aria-label and 2 links, and all of them are approved by OFFER.md 3.3 and 3.6, in the same order. The check runs both ways (everything approved is in the band, nothing else is in it) and tests each string twice (it is in OFFER.md, and it is in the built band). I tried the script on four broken copies (a changed price, the `.invalid` address, a heading inside the band, a changed delivery line) and it caught all four.
"10 minutes" and "no training needed" are not in the six built pages (grep: 0 hits each). `gate/forbidden.txt` is the pack's file, unedited (same sha256 as inside the zip).

## 2. Needs Kabir's OK (at most five)

1. **The repo's hero picture stays, under the text.** The pack's design replaces the hero picture with the machine band. The gate fails when repo text disappears, and the brief says the repo owns words and images, so the repo's figure, its caption ("zipla POS" and the line after it) and its two callouts stay as a proof block under the text. Stage 2 did the same on Home (its report, section 2, item 4), and that PR was merged. Cost: at 1366x768 the top 53 to 114 px of that figure show at the bottom edge of the first screen (section 5). On a phone it starts at 1252 to 1306 px. If you want it gone, that is an `allow_removed.txt` decision for you, not for me. If you only want it somewhere else, it is one grid area in `src/styles/business.css`.
2. **Product pictures, decision D6. I opened both pictures every time.** Swapped on two pages: the Sweet shop and Dhaba hero picture, from the repo's laptop dashboard to the pack's phone dashboard (`images/screen-dashboard.webp`) in a phone frame, with the repo's alt text. Reason: both show the Dashboard of the same account with the same four tiles and the same words (the phone also shows a fifth tab and the Overview strip). That phone picture is also in the band right above it, so the page shows it twice. It shows the "Hot Spot Pizza" test account, and so does the repo's own laptop picture. Not swapped, listed: Bakery `ss-inventory.webp` (the repo's laptop shows Critical 1, Low 1, OK 142, the pack's phone shows 5, 6, 133 and a Recipe / BOM box, so not the same content), QSR `ss-new-order.webp` (photo cards against a text list, not the same content), Restaurant and Cafe `ss-multi-device.webp` (a three-device picture, and its alt text says so, no phone-only file exists), Bakery `ss-menu-mgmt.webp`, Sweet shop and Dhaba `ss-gst-invoice.webp`, Cafe `ss-customer-menu.webp` (laptop pictures, no phone version in the repo or in `images/`), and the two KDS pictures (stay wide by D6). If you want no swap, I put the laptop picture back in two lines. If you want the phone pictures to wait for your own screenshots, say so.
3. **"Start 14-Day Free Trial" is below the first screen on phones now.** At 390x844 its bottom was at 596 to 688 px before and is at 1056 to 1110 px now, because the band comes first. Buy now is the first action on a phone (it ends at 564 px). On a laptop both buttons are gold and inside the first screen (trial 539 to 600 px, Buy now 727 px), as in the pack's prototype. If you want the trial button higher on phones, that needs a new decision: it would have to sit between the band and the H1, and the markup keeps the H1 first (BRIEF A5).
4. **Allow list and two deletions.** The allow list gets six lines, `See pricing` once per page (section 7). I deleted each page's own `<style>` block (all its selectors were for classes that no longer exist on the page) and the `vertical-page.css` import of these six pages (Pricing still imports it). BRIEF R13 says not to delete legacy CSS in stages 1 to 5. I read that as the shared old sheets (`index.css`, `vertical-page.css`), which stay whole, and not as code I replaced in the page itself (Stage 2 did the same for the old inline blocks of Home's components). Side effect: the `/pricing/` HTML differs from the base by one `<link>`. Astro merged two stylesheets into one, and I checked that the 169 rule blocks are identical.
5. **Cafe customer-menu picture.** `images/ASSETS.md` says the old customer-menu screenshot shows the old QR menu (the old GST label) and Stage 2 dropped it from Home on your instruction. The Cafe page has the same picture (`ss-customer-menu.webp`). I kept it because no instruction covers that page. Say if it goes too.

## 3. Check these on your phone (the Cloudflare preview link is in the comments)

- Any of the six pages, top: the breadcrumb, then the machine card (printer photo with the sample bill, the phone, "ZIPLA BILLING MACHINE", ₹4,999, Buy now and See pricing), then the small label and the H1 with the gold bars. Tap Buy now: it must open your Razorpay link in a new tab. I did not open it (section 10).
- Scroll: the two buttons, the three notes, the repo's picture with its two callouts, the four fact boxes, then the sections with a torn edge.
- Open one FAQ question: the answer opens and the plus turns.
- Sweet shop and Dhaba: the phone picture in its frame under the text. Bakery, Sweet shop, QSR, Dhaba: the table with three columns, readable without sideways scroll?
- Bottom: the dark band with two buttons, then the footer.
- Anything blank, overlapping, missing or new in text: tell me.

## 4. Gate table

`compare` against the build of `origin/redesign/integration` (base). Exit 0. Allow lists: `docs/redesign/allow_removed.txt` and `docs/redesign/allow_new.txt` as committed.

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
| G9 | Links kept, no broken internal link or anchor | 13 | 6 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 19 | 0 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

**WARN (6)**
- G9 on each of the six pages: new link(s): `https://rzp.io/rzp/ygTqBnl`.

Why the WARN is fine: it is the Buy now link of the band (OFFER.md 3.2), with `target="_blank"` and `rel="noopener noreferrer"`. The second band link, See pricing, goes to `/pricing/`, which every page already linked to ("See current pricing"), so G9 does not call it new.
The proof that the allow-list line is needed: I ran `compare` on the first converted page (Restaurant) before adding the line and G7 failed with exactly one new text piece, `See pricing`. With the six lines it passes. A second check, independent of the gate: I extracted all visible words of `<main>` from the base and the new build of each page. Removed words: none, on all six pages. Added words: the same 44 words on every page (the band and the sample bill).
The gate's first-image rule (G11) is met by the header logo, which is the first `<img>` of every page. It does not guard the printer photo. I checked that by hand (section 8, item 12).

## 5. Pages in this PR

| URL | H1 (unchanged) | archetype | components used | fold 390x844: H1 bottom, price, Buy now | fold 1366x768 |
|---|---|---|---|---|---|
| /restaurant-pos-software/ | Restaurant POS Billing Software for India | 2 Business-type | machine band L, crumbs, hero text with ticks, proof figure (3-device picture), facts, 2-column table, steps x2, check list with KDS picture, FAQ (6), related, dark band | 723 / 459 / 564 | 259 / 641 / 727 |
| /cafe-pos-software/ | Cafe POS Billing Software for India | 2 Business-type | same, steps x2, 2-column table, check list with customer-menu picture, 2 tiles, FAQ (6) | 723 / 459 / 564 | 259 / 641 / 727 |
| /bakery-billing-software/ | Bakery Billing Software for India | 2 Business-type | same, 6 tiles, steps x2, check list with inventory picture, 3-column table, FAQ (6) | 703 / 459 / 564 | 259 / 641 / 727 |
| /sweet-shop-billing/ | Sweet Shop Billing Software India | 2 Business-type | same, phone-frame proof figure (D6), 3 tiles, 3-column table, GST invoice picture, FAQ (7) | 723 / 459 / 564 | 259 / 641 / 727 |
| /qsr-billing-software/ | QSR Billing Software India | 2 Business-type | same, 3 tiles, check list with KDS picture, 3-column table, FAQ (6) | 703 / 459 / 564 | 259 / 641 / 727 |
| /dhaba-billing-software/ | Dhaba Billing Software India | 2 Business-type | same, phone-frame proof figure (D6), 3 tiles, 3-column table, GST invoice picture, FAQ (6) | 703 / 459 / 564 | 259 / 641 / 727 |

All five viewports, measured on the build with my own script (the gate's `fold_check.py` measures only the H1 and the first link). Cell: bottom of the H1 / bottom of the price / bottom of Buy now. A star means below the first screen. Buy now is 48 px high and 111 px wide on every page and viewport, See pricing is 48 px high.

| page | 320x640 | 360x640 | 390x844 | 414x896 | 1366x768 |
|---|---|---|---|---|---|
| Restaurant | 721* / 421 / 527 | 755* / 456 / 561 | 723 / 459 / 564 | 724 / 480 / 565 | 259 / 641 / 727 |
| Cafe | 686* / 421 / 527 | 720* / 456 / 561 | 723 / 459 / 564 | 704 / 480 / 565 | 259 / 641 / 727 |
| Bakery | 686* / 421 / 527 | 720* / 456 / 561 | 703 / 459 / 564 | 704 / 480 / 565 | 259 / 641 / 727 |
| Sweet shop | 721* / 421 / 527 | 720* / 456 / 561 | 723 / 459 / 564 | 724 / 480 / 565 | 259 / 641 / 727 |
| QSR | 686* / 421 / 527 | 700* / 456 / 561 | 703 / 459 / 564 | 704 / 480 / 565 | 259 / 641 / 727 |
| Dhaba | 686* / 421 / 527 | 720* / 456 / 561 | 703 / 459 / 564 | 704 / 480 / 565 | 259 / 641 / 727 |

At 390x844, 414x896 and 1366x768 the H1, the price and Buy now of all six pages end inside the first screen. At 360x640 and 320x640 the price and Buy now are inside and the H1 ends below the first screen, as DESIGN_SYSTEM 14.5 says for the L pages. No type was shrunk. For Cafe the numbers equal the pack's own table at all five viewports (723 / 459 / 564, 704 / 480 / 565, 259 / 641 / 727, 720 / 456 / 561, 686 / 421 / 527). The pack's Restaurant tab is an older page, so its numbers do not apply. No sideways scroll in any of the 30 cells.
`fold_check.py` output: 24 WARN, 0 sideways-scroll cases (base: 12 WARN). At 1366x768 it says ok for all six pages. The WARN rows are its "action", the first link after the H1, which is the repo's "Start 14-Day Free Trial" button. At 390x844 its bottom is at 1056 to 1110 px and at 414x896 at 1030 to 1104 px, so it is below the first screen (section 2, item 3). At 360x640 and 320x640 the H1 also ends below the fold (numbers above). Base for comparison: that button ended at 596 to 688 px at 390x844 and at 596 to 663 px at 414x896. On the laptop it moved up (base 633 to 712 px, new 539 to 600 px at 1366x768).
The repo's figure (the proof block), frame top at 1366x768: 684 px on Restaurant and Cafe, 715 px on Bakery, Sweet shop and Dhaba, 654 px on QSR. So 53 to 114 px of it are inside the first screen. At 390x844 it starts at 1252 to 1306 px. At 1366x768 every image of every page is already loaded at the load event, the lazy figure included (measured with `img.complete`).

## 6. Numbers, base and new

Lab numbers: Chromium 153.0.8010.12 headless on localhost, no throttling, 3 runs per cell, fresh browser context for each run. Compare them only with each other.

| metric | base | new |
|---|---|---|
| LCP, six pages, at 360 / 390 / 768 / 1280 px (24 cells, median of 3 each) | 92 to 124 ms | 80 to 116 ms |
| widest spread between the 3 runs of one cell | 36 ms | 44 ms |
| LCP element | the H1 in 10 cells, a paragraph in 2, the page's laptop picture in 12 | the printer photo in 23 cells, a paragraph in 1 (Dhaba at 390 px) |
| CLS, same 24 cells | 0.000 in all | 0.000 in 22, 0.005 (Dhaba, 360 px) and 0.006 (Cafe, 390 px) in two |
| CSS gzip (G16, all pages) | 34,662 B | 33,337 B (-1,325) |
| JS gzip (G16) | 49,789 B | 49,789 B |
| fonts in the build | 222,984 B | 222,984 B |
| images in the build | 758,904 B | 758,904 B (no new file; the two pack images of Stage 2 are used again) |
| HTML, all pages | 764,593 B | 754,013 B (-10,580) |
| HTML, the six pages | 264,101 B | 253,586 B (-10,515) |
| largest HTML | `/` 64,523 B | `/` 64,523 B |
| CSS a business page loads (Restaurant) | 3 files, 56,865 B, 12,212 B gzip | 2 files, 59,765 B, 12,464 B gzip (+252 B gzip) |
| browser_check, rows of the six pages (4 widths x 6) | 24 FAIL (the 15 px breadcrumb "Home" link), 24 with WARN (buttons of 44 to 46 px) | 24 ok |
| browser_check, whole site | 64 FAIL rows, 54 WARN rows | 40 FAIL rows, 30 WARN rows |
| controls under 48 px in `<main>` (my script, inline text links exempt as in `browser_check.py`) | not measured on the base | 0 of 632 (6 pages x 8 widths: 320, 360, 390, 414, 768, 1024, 1280, 1366) |

Honest reading. The run-to-run spread (up to 44 ms) is as large as any difference, so I claim no speed change in either direction. At 360 px the new medians (100 to 116 ms) are a little above the base (96 to 104 ms), at the other widths they are below. CLS is far below 0.1, so no fallback font faces were added. The rupee sign sits in the latin-ext Bricolage file and I did not add a preload for it (the layout has no way to preload for one page; Stage 4 plans a preload for Pricing). The two small shifts (0.005 and 0.006) are the only ones I measured, and I did not look for their cause.

## 7. Allow-list entries added

`docs/redesign/allow_new.txt`, 2 comment lines and 6 text lines. Reason for all six: `See pricing` is the link text of the machine band (OFFER.md 3.3). The pack leaves it out of `offer/allow_new.txt` "because the live repo already has it". The Home page has it, these six pages did not, so G7 reports it as a new text piece on each of them. One line per page, so the line cannot hide a stray "See pricing" on a page that must have no band (the 404 page).
- `/restaurant-pos-software/ || See pricing`
- `/cafe-pos-software/ || See pricing`
- `/bakery-billing-software/ || See pricing`
- `/sweet-shop-billing/ || See pricing`
- `/qsr-billing-software/ || See pricing`
- `/dhaba-billing-software/ || See pricing`

The other band strings (name, price, delivery line, Buy now, the sample bill) are the lines that Stage 2 appended. They are plain lines, so they allow the band on every page. The gate cannot tell. `docs/redesign/allow_removed.txt`: no change, nothing is removed.

## 8. Deviations from the pack

1. **Class names.** `zb-` for the page template and `zm-` for the machine band, all rules under `.zp`. Same reason as Stage 2 (`zh-`): the old sheets still have `.eyebrow`, `.btn-ghost`, `.wrap` and more. The Buy now link also carries `btn btn-gold`, as OFFER.md 3.2 writes it.
2. **One template, not six pages with their own CSS.** `src/components/MachineBand.jsx` (the L band), `src/components/FaqList.jsx` (the `<details>` list that the six pages built the same way from their own `faqs` array), `src/styles/machine.css` (62 lines) and `src/styles/business.css` (194 lines). The six page files keep their own text. A one-off script (not committed) applied the same class map and the same structure changes to all six files, then I read the six diffs. The frontmatter of each page (title, description, canonical, `faqs`, JSON-LD) is not in the diff except the import lines and `<Layout zp ...>`. Unchanged lines keep their original bytes (the files mix CRLF and LF).
3. **Hero order.** The markup keeps the page's own text first, then the repo's figure, then the band. CSS grid areas draw the band above the text on phones and beside it from 900 px (BRIEF A5, decision D1). Keyboard order: Home, Start 14-Day Free Trial, Book Free WhatsApp Demo, Buy now, See pricing (tested on all six). On a laptop the figure sits in the left column under the text, and the band is sticky at 24 px next to it. I tested the sticky range: pinned at 24 px inside the hero and gone after it, at 1366, 1280 and 1024 px on all six pages.
4. **The repo's figure is kept** (section 2, item 1). The pack's design has no such figure.
5. **Product pictures** (section 2, item 2): D6 swap on the Sweet shop and Dhaba hero, the rest stays and is listed.
6. **Steps and numerals.** The repo's steps are `div` or `article` blocks with the number typed as text (`01` to `04`). That is case 1 of DESIGN_SYSTEM 13.4: keep the text, add no digit, no CSS counter. I did not turn them into an `<ol>`.
7. **FAQ.** The repo's questions are plain text in `<summary>`, with no heading. I added none (G5). The question sits in a `<span>`, plus a decorative plus icon (SVG, `aria-hidden`).
8. **Buttons.** "Start 14-Day Free Trial" is the gold button and "Book Free WhatsApp Demo" the ghost button, as in the prototype. With Buy now that makes two gold buttons in the first screen of a laptop. The prototype draws it the same way.
9. **Section rhythm.** Paper and band alternate from the first body section on, as in the pack's tabs (I compared the order, the tile counts and the table counts with the pack's five matching tabs: equal). The facts strip after the hero is extra, because the repo has it.
10. **Links.** OFFER.md lists `https://zipla.in/pricing/` for See pricing. The repo writes internal links as `/pricing/`, so I did too (same target, same as Stage 2).
11. **`fetchpriority`.** The printer photo is written `fetchpriority="high"` (lower case) in the HTML. Stage 2's Home writes `fetchPriority`, which the browser reads the same way. I did not touch Home.
12. **First image and lazy loading.** The first `<img>` of each page is the header logo. The printer photo (the LCP picture) is eager with `fetchpriority="high"`, the phone picture of the band is eager, every other picture is `loading="lazy"` and `decoding="async"` with width and height. At 1366x768 the repo's lazy figure is partly inside the first screen (section 5). It is already loaded at the load event on all six pages, so I left it lazy: on a phone it is 1252 px or more below the top and should not compete with the printer photo.
13. **Light colour scheme.** `html:has(body.zp) { color-scheme: light }` in `business.css`, as Stage 2 did for Home. Saved-theme test (R15): `zipla-theme` set to `dark`, to `light` and not set, on all six pages at 390 px, 18 runs: body background `rgb(248, 245, 238)`, text `rgb(28, 25, 21)`, every time. `data-theme="dark"` is still in the source from Stage 1 and no new CSS reads it.
14. **`gate/forbidden.txt` is not edited** (no PROOF line).
15. **Pack images.** `/images/hero-printer-billing-machine.webp` and `/images/screen-dashboard.webp` are the files that Stage 2 copied into `public/`. No new image file.

## 9. Noticed, not changed

1. Dead CSS after this stage: `src/vertical-page.css` is used by `/pricing/` only, and most page rules of `src/index.css` are no longer used by the six pages. Not deleted (R13). A suggestion for Stage 6, not done.
2. The pack's Restaurant tab and its PNG are older than the repo's page (other H1, other eyebrow, other buttons, no breadcrumb). I followed the repo (R2).
3. The pictures that the repo already shows on these pages carry names of other businesses: "Hot Spot Pizza" on the dashboard and the GST invoice, "Crispy King" on the three-device picture of the Restaurant page. BRIEF section 13 warns about this for the pack's picture. I did not change the repo's pictures.
4. The eyebrow repeats the H1 words on every page (for example "Cafe POS billing software for India" above "Cafe POS Billing Software for India"). Repo text.
5. The word "checkout" is still on four pages (Stage 0 listed it). The bakery and sweet shop weight-billing claims are the repo's words and I did not check them against the app (BRIEF section 13).
6. Heading levels: none skipped, none changed, one H1 per page (G5 PASS).
7. `ss-gst-invoice.webp` is 1234x864 on disk and has `width="1232" height="860"` in the HTML (Stage 0 noted it, two of the six pages use it). Unchanged.
8. The Header and the Footer are still the Stage 1 ones (dark logo tile, menu button on phones). The pack's PNGs show a transparent logo and inline links. That is Stage 1's open point (its report, section 2, items 2 and 3).

## 10. Not verified

- The Buy now link. I have no network access to Razorpay. I did not open `https://rzp.io/rzp/ygTqBnl`. Please tap it once. It is the same address on all six pages (the offer check compares the `href`, `target` and `rel`).
- Real phones, Safari, Firefox, Samsung Internet. I used headless Chromium 153 at 320, 360, 390, 414, 768, 1024, 1280 and 1366 px. No screen reader. I tested the keyboard: Tab order, Enter and Space on the FAQ, the focus ring on the questions and on Buy now (3 px, solid).
- The Cloudflare preview. I cannot see it from here. I do not know if previews are on for this branch.
- Lighthouse. I did not run it.
- Whether the real device's panel says "Billing Machine", and whether 4,999 rupees includes GST (OFFER.md section 5, open items).
- Whether the pack's phone dashboard and the repo's laptop dashboard are the same in every detail. I compared them by eye, at reduced size: same screen and same four tiles with the same words.
- Search effect. A redesign tries to lose nothing. It does not raise ranking by itself.

## 11. Commands run

```
sha256sum /tmp/pack.zip   # e620d65d8c7309eeb376b67dbc34328de0a618fdf4441f010a6aea268354fb3d, equals the prompt
python3 -I /tmp/pack/redesign-ref-r7/gate/selftest.py   # last line SELFTEST OK
python3 -m venv /tmp/pwvenv && /tmp/pwvenv/bin/pip install playwright==1.63.0
git fetch origin redesign/integration
git switch --detach origin/redesign/integration && npm ci && npm run build   # baseline, 19 pages, git status clean
cp -r dist /tmp/base_dist
python3 -I .../gate/seo_gate.py snapshot /tmp/base_dist /tmp/base.json
/tmp/pwvenv/bin/python -I .../gate/browser_check.py /tmp/base_dist --out /tmp/gatework/shots_base --target-min 48   # 64 FAIL, 54 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py /tmp/base_dist --only <the six URLs>                              # 12 WARN
git switch -c redesign/stage-3-business-pages origin/redesign/integration
(one page first, then the other five; build, snapshot, compare after each)
npm run build
python3 -I .../gate/seo_gate.py snapshot dist /tmp/new.json
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --forbidden .../gate/forbidden.txt --report /tmp/gate_report.md   # exit 0
/tmp/pwvenv/bin/python -I .../gate/browser_check.py dist --out /tmp/gatework/shots_new --target-min 48             # 40 FAIL, 30 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py dist --only <the six URLs>                                        # 24 WARN, 0 sideways
```
My own scripts (Playwright, not committed, in the session's scratch folder): the one-off page converter, screenshots with the pack's PNGs side by side, fold numbers at 5 viewports, LCP and CLS (3 runs per cell), behaviour (FAQ by mouse and keyboard, focus ring, DOM order, the 899 and 900 px switch, reduced motion, cookie box), the sticky band, the 48 px sweep, hidden text (1,984 text nodes, none hidden except closed FAQ answers), the saved-theme test, the offer check with a self-test on four broken copies.
The five static checks of BRIEF section 9: no raw colour and no font stack in my files (the whole-`src` run still lists the old files I did not touch), one `display: none` hit (`summary::-webkit-details-marker`, the old triangle, replaced by the plus icon), no dependency change and no new `<script>`, 12 files. `Layout.astro`, `public/`, `astro.config.mjs`, `package.json` and the lock file are untouched.

## Appendix A. Plan and pre-mortem, written before the build (BRIEF 4.2, 4.3)

Job in one sentence. Every business page of zipla.in gets the Round 7 look and the L band of the Zipla Billing Machine in front of the H1, with every word, heading, link, id and JSON-LD block of the repo unchanged.
What I read first, and what it changed in the plan: the six pages share one markup vocabulary (38 `vertical-*` classes and the two button classes `btn-cta` and `btn-ghost` are common to all six) and one old sheet, so one template covers them. The pack's Restaurant tab is older than the repo. The gate keys on text, so the repo's hero figure and its callouts cannot go. The analytics script reads only `href` patterns and `.site-header`, `.pricing`, `.final-cta`, so renaming the button classes breaks no tracking (the business pages' final call to action never matched `.final-cta`).

Pre-mortem: how this PR could lose traffic or break the site, and the command that caught each.
1. Text lost or changed: G6, G7, and my word-by-word diff of `<main>`. Passed. Removed words: none. Added: the 44 band words.
2. Heading changed, re-levelled or reordered: G5. Passed. The band adds no heading (the offer check flags any heading inside the band).
3. Link lost: G9. Passed. New links: Buy now (WARN), See pricing.
4. Head tags or JSON-LD changed: G3, G4. Passed. `Layout.astro` and the page frontmatter are not touched (diff shows import lines only).
5. Hidden or generated text from CSS (R12): the gate cannot see it. Grep check 3 and a render test of 1,984 text nodes. Passed.
6. LCP slower: 3 runs per cell. No change beyond the spread. The printer photo is the LCP element in 23 of 24 cells.
7. Layout shift: CLS 0.000 in 22 of 24 cells, 0.006 at most.
8. Sideways scroll or small tap targets: `browser_check.py`, `fold_check.py`, my 48 px sweep. None found.
9. Text that needs JavaScript: G6 reads the built HTML. All new components are plain server render, no `client:` directive.
10. An offer fact differs from OFFER.md: the offer check. Equal on all six pages.
11. A string from OFFER.md section 4 reaches a page: G15, G7, and a grep of the six pages. None.
12. Buy now goes to a wrong address: the offer check compares every `href`, and there is no `.invalid` in the built pages. I cannot open the Razorpay link.
13. FAQ visible differs from JSON-LD: G8. 6, 6, 6, 7, 6, 6 questions, all visible in the HTML.
14. An element id lost: G10. Passed.
15. New CSS leaks to other pages: the files load only on the six pages and every rule sits under `.zp`. The 52 browser-check rows of the other 13 pages are identical to the base. The only other-page difference is the merged stylesheet link of `/pricing/` (same 169 rules).
16. The old global sheet bleeds into the new look: I looked at screenshots of all six pages at both sizes.
17. The sticky band clips or floats over later sections: no `overflow` on main or sections. Tested pinned and released.
18. Removing a page `<style>` block changes another page: the blocks are scoped to their own page by Astro. G16 shows CSS size went down.
19. A protected file changed (`package.json`, `Layout.astro`, robots, sitemap, `_redirects`): `git diff --stat` and a name filter. None.

## Appendix B. What I tested

**Template check on one page first.** The Restaurant page was converted alone, built and compared. G7 failed with `See pricing` as the only new text piece (the proof that the allow line is needed), everything else passed. I looked at it at 390x844 and 1366x768 and compared it with the pack's PNG, then applied the same template to the other five, with a build, a snapshot and a `compare` after each (0 FAIL every time).
**Screenshots and the pack's PNGs.** Six pages at 390x844 and 1366x768, full page too (scrolled once so that lazy pictures load), next to `png/first-screens/02_` to `07_`. Three differences per page and what I did about them are in `/tmp/diffs.md` (working file, not in the repo). One was mine and I fixed it: I had added 12 px of padding above the hero text that the pack has only on Home. After the fix the Cafe numbers equal the pack's table at all five viewports.
**Behaviour.** All six pages: the FAQ is closed at load, a click opens it, the answer is visible, the plus turns 45 degrees, Enter opens and Space closes by keyboard, the focus ring is 3 px solid on the question and on Buy now, no console error or warning. The band is above the text at 899 px and beside it at 900 px. With reduced motion the receipt animation is off, without it the animation runs. The repo's cookie box shows on a first visit on a converted page, Reject closes it and saves `denied`.
**Reading by the gate and by me.** Browser check rows (24 of the six pages: FAIL to ok), the 52 other rows identical, fold numbers, the 48 px sweep (632 controls), the hidden-text test, the saved-theme test, the image attribute list (the printer photo is the only `fetchpriority="high"`), the Pricing stylesheet merge (169 identical rule blocks).
