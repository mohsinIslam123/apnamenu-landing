# Stage 5: Blog, Legal, Utility (DRAFT)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-5-blog-legal-utility`, created from `origin/redesign/integration` at `7cbc51fedfbb3e756f4249b6356019016bb30b2e` (Stages 1 to 4 are merged there, PR #33 to #36). B0 (the build of `main` that Stage 0 recorded, `docs/redesign/B0_SHA.txt`): `419cc531ac67c75ec5ab5384a3c5c9880b64dfca`.
Scope: the nine pages of `STAGE0.md` section 9, stage 5: `/blog/`, the four guides under `/blog/`, `/privacy-policy/`, `/terms-and-conditions/`, `/refund-policy/` and `/404.html`. The look of the Round 7 tabs `p-blog`, `p-a1` to `p-a4`, `p-privacy`, `p-terms`, `p-refund`. The blog index and the four guides get the M card of the Zipla Billing Machine (OFFER.md 3.4). Privacy, Terms and Refund get the S band (OFFER.md 3.5). The 404 page gets no band. Title, meta, canonical, robots and JSON-LD are untouched. `Layout.astro` is untouched.
Buy now address: the Razorpay link from Kabir's prompt, `https://rzp.io/rzp/ygTqBnl` (no angle brackets, no `.invalid`). It is in `src/constants.js` since Stage 2. My components import `BUY_NOW_URL`. Claims: the prompt has no PROOF line, so "10 minutes" and "no training needed" are not built (grep of the built HTML, case-insensitive: 0 files each, in the base and in the new build). `gate/forbidden.txt` is the pack's file, unedited.

## 1. In five lines

Gate: 0 FAIL, 8 WARN (all G9: the new Buy now link on each of the 8 band pages). Browser check: ran, exit 0 (0 FAIL, 0 WARN in all 76 rows. The base had 32 FAIL and 20 WARN rows, all of them on the pages of this stage, so the whole site now passes it).
Pages changed: 9. Files changed: 14 (9 pages, 1 new component, 2 new stylesheets, `allow_new.txt`, this report). Base: `redesign/integration` at 7cbc51f. B0: 419cc53.
Verdict: ready for your preview check. Five points need your OK (section 2).
Offer check: the strings of the machine band in the built HTML equal OFFER.md section 3: yes. 8 bands (5 M cards, 3 S bands), each with 5 text pieces, 1 picture with the alt text of 3.3 and 2 links, no heading inside, no sample bill. The 404 page has no band. 0 differences, both ways. I broke the build in 9 ways and the script caught all 9 (section 11).
Nothing else changed: the HTML of Home is identical to the base. The other 9 pages of Stages 3 and 4 differ by 1 or 2 stylesheet `<link>` tags and nothing else (section 2, item 4). The 37 files of the build that are neither HTML nor in `_astro/` are identical.

## 2. Needs Kabir's OK (at most five)

1. **The answers are closed now on 8 more pages.** The 4 answers of the blog index, the 3 to 5 answers of each guide and the 5, 6 and 4 answers of Privacy, Terms and Refund were always visible. Now each question is a row that opens on a tap, as in the pack's tabs and as in Stage 4 for FAQ and Contact (that PR is merged). BRIEF 13.7 item 3 calls that a deliberate change. The question keeps its heading inside the row (`<summary><h3>`) with the same text, level and order (G5 passes). Every answer is in the HTML and in the JSON-LD (G6 and G8 pass: 4, 5, 5, 3, 3, 5, 6 and 4 questions). My render test (7,480 text-node checks) found no hidden text except these 35 answers. If you say no: add `open` to the `<details>` in `FaqList.jsx` (one word). That opens the lists of Stages 3 and 4 too. What closed answers do to search or to AI answers: I do not know.
2. **The Terms page says prices include tax, next to the machine price.** `terms-and-conditions.astro` (the repo's text, untouched): "All prices are in Indian Rupees (INR) and are inclusive of applicable taxes." The S band above it shows ₹4,999 for the machine. Whether the machine price includes GST nobody has confirmed (OFFER.md section 5, "GST on 4,999 rupees"). A reader can take the Terms sentence as covering the machine. I changed no word. Tell me what is true and I will say it in the band or in the sentence in a later PR.
3. **Old page styles are deleted.** Each of the nine pages had its own `<style>` block (the blog index two, the others one), with raw colours such as `#C9A94B` and `rgba(...)`. After the new markup none of their selectors match anything (I checked that no old class name is left in the markup). I deleted the blocks, as Stages 3 and 4 did. BRIEF R13 says not to delete legacy CSS in stages 1 to 5. I read that as the shared old sheets (`src/index.css`, `src/vertical-page.css`, both untouched and still on disk), not as code I replaced inside the page itself. All raw colours left in `src` are in those two old sheets (72 lines), none in a file of mine. CSS in the whole build: 29,424 to 23,485 B gzip (-5,939).
4. **Nine pages of Stages 3 and 4 load one or two more CSS files now.** Astro builds one CSS file per set of pages that use the same stylesheet. Before this stage `machine.css` sat inside the file of `business.css`, and `machine-m.css` inside the file of `inner.css`. My pages use these sheets in other mixes, so Astro made `machine.css` and `machine-m.css` separate files. The rules are the same (raw bytes 59,765 to 59,766 on the six business pages and 72,902 to 72,904 on Pricing, FAQ and Contact). Their HTML differs by stylesheet `<link>` tags only: I removed those tags from the base and the new HTML of all nine pages and the rest is identical. Cost on those pages: +1 file and +612 B gzip on the six business pages, +2 files and +1,133 B gzip on Pricing, FAQ and Contact. Home is byte for byte the same. I did not change it. A fix I thought of, and did not test, would make the 404 page and the legal pages load CSS they do not use. If you want those nine pages untouched, say so and I try it in a small PR. Stage 6 could merge the sheets into one.
5. **The GST invoice picture on the blog index stays a laptop picture (decision D6).** It is the repo's `ss-gst-invoice.webp` in the wide frame. The pack's `images/` has no GST invoice screen (its phone screens are dashboard, new order, payment, order created, customer cart, order status and inventory), so no swap is possible. It shows the "Hot Spot Pizza" test account, like the repo's other pictures (Stage 3, section 9, item 3). It stays until you supply a phone screenshot.

## 3. Check these on your phone (the Cloudflare preview: the check "Cloudflare Pages" under the pull request's checks)

- Blog index, top: the card above the H1 (printer, "Zipla Billing Machine with 12 months of Zipla POS: ₹4,999", Buy now, See pricing). Tap Buy now: it must open your Razorpay link in a new tab. I did not open it (section 10). Scroll: tap anywhere on a guide row, not only on its link text: it opens that guide. The table, the steps with 01 to 04, the laptop picture, one question (opens, the plus turns), the dark band.
- Any guide, top: the breadcrumb, the card, the label and the date, the H1 with the gold bars. Scroll: the gold-bar answer box, the numbered headings, the lists. The comparison guide has a table: readable without sideways scroll? At the end: the questions and the dark band.
- Privacy, Terms or Refund, top: the slim band above the H1 (small printer, the sentence, Buy now, See pricing), then the small "ZIPLA POS" label and the H1. Scroll: the contact box, the example e-mail box, the Refund table.
- Any address that does not exist, for example `/xyz` on the preview: the 404 page has no band, one H1 and two buttons.
- Anything blank, overlapping, missing or new in text: tell me.

## 4. Gate table

`compare` against the build of `origin/redesign/integration` (base). Exit 0. Allow lists: `docs/redesign/allow_removed.txt` (unchanged) and `docs/redesign/allow_new.txt` as committed. `--forbidden` is the pack's `gate/forbidden.txt`.

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
| G9 | Links kept, no broken internal link or anchor | 11 | 8 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 19 | 0 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

**WARN (8)**: G9 on `/blog/`, the four guides, `/privacy-policy/`, `/terms-and-conditions/` and `/refund-policy/`: new link(s): `https://rzp.io/rzp/ygTqBnl`.

Why the WARN is fine. It is the Buy now link of the card or the band (OFFER.md 3.2), with `target="_blank"` and `rel="noopener noreferrer"` (the offer check compares both). The second link, See pricing, goes to `/pricing/`, which every page already links to (the header), so G9 does not call it new.
The proof that the 8 allow lines are needed: I ran `compare` with the allow file of the base. G7 fails on exactly these 8 pages, each with exactly 1 new text piece, `See pricing` (on `/blog/`, `/privacy-policy/` and `/terms-and-conditions/` also the word `see`). With the lines it passes. The 404 page has no line and no G7 hit.
G13 (forms): the baseline has no form on these nine pages (0 `<form>`) and I added none, so "forms identical" means "no form" equals "no form". G8: the real counts are 4, 5, 5, 3, 3, 5, 6 and 4 questions, all found in the built text.
A second check that does not depend on the gate: I took all visible words of `<main>` from the base and the new build of each page, in order, and compared them. Removed words: none on all 9 pages. Added words: the same 14 words on each of the 8 band pages (the band text) and none on the 404 page.
The pack's gate files are unedited: I unzipped the zip a second time into a new folder and compared the sha256 of the 9 files in `gate/` (among them `forbidden.txt`, `seo_gate.py`, `browser_check.py`, `fold_check.py`, `selftest.py` and `inventory.py`) with the copies I ran: 0 different.

## 5. Pages in this PR

| URL | H1 (unchanged) | archetype | components used | fold 390x844: H1 bottom, price, Buy now | fold 1366x768 |
|---|---|---|---|---|---|
| /blog/ | Restaurant Billing & POS Guides for India | 6 Blog index (more than a link list, STAGE0 section 3) | card M, eyebrow, two ledes, note, date line, 6 guide rows (whole row is one link), table with 3 columns, steps (CSS counter 01 to 04), plan facts, wide picture, FAQ (4, h3 in the summary), dark band | 423 / 186 / 242 | 267 / 202 / 258 |
| /blog/restaurant-pos-software-checklist/ | Restaurant POS Software Checklist: What to Test Before You Switch | 7 Blog article | breadcrumb, card M, tag and date, reading column, answer box, lists, numbered list, FAQ (5, `id="faq"` kept), summary, dark band | 557 / 214 / 270 | 339 / 214 / 270 |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | GST Invoice for Restaurant and Dhaba in India — Step by Step Guide 2026 | 7 Blog article | same, warning box, 12-item list, FAQ (5), related links | 578 / 214 / 270 | 339 / 214 / 270 |
| /blog/restaurant-pos-software-price-india/ | Restaurant POS Software Price in India: What to Check Before Buying | 7 Blog article | same, price fact box, FAQ (3) | 529 / 214 / 270 | 339 / 214 / 270 |
| /blog/restaurant-pos-vs-billing-software/ | Restaurant POS vs Billing Software in India: What Is the Difference? | 7 Blog article | same, table with 3 columns in its own box, FAQ (3) | 529 / 214 / 270 | 339 / 214 / 270 |
| /privacy-policy/ | Zipla POS Privacy Policy | 8 Legal | band S, reading column, lists, example e-mail box, contact box, FAQ (5), related links, back link | 323 / 120 / 179 | 281 / 113 / 129 |
| /terms-and-conditions/ | Zipla POS Terms and Conditions | 8 Legal | band S, reading column, 14 numbered H2 (typed numerals), lists, contact box, FAQ (6), two back links | 323 / 120 / 179 | 281 / 113 / 129 |
| /refund-policy/ | Zipla POS Cancellation & Refund Policy | 9 Legal | band S, reading column, table with 2 columns in its own box, numbered list, example e-mail box, FAQ (4) | 323 / 120 / 179 | 333 / 113 / 129 |
| /404.html | That page is not available. | 9 Utility | one block: eyebrow, H1, sentence, two buttons. No band | 210 / none / none | 247 / none / none |

All five viewports, measured on the build with my own script (`fold_check.py` reports only the H1 and the first link). Cell: bottom of the H1 / bottom of the price / bottom of Buy now. A star means below the first screen. Buy now is 48 px high everywhere (111 px wide, 91 px at 320 px). See pricing is 77 by 48 px.

| page | 320x640 | 360x640 | 390x844 | 414x896 | 1366x768 |
|---|---|---|---|---|---|
| Blog index | 478 / 206 / 262 | 423 / 186 / 242 | 423 / 186 / 242 | 402 / 165 / 222 | 267 / 202 / 258 |
| Checklist | 635 / 256 / 312 | 557 / 214 / 270 | 557 / 214 / 270 | 537 / 193 / 250 | 339 / 214 / 270 |
| GST guide | 655* / 256 / 312 | 613 / 214 / 270 | 578 / 214 / 270 | 537 / 193 / 250 | 339 / 214 / 270 |
| Price guide | 607 / 256 / 312 | 529 / 214 / 270 | 529 / 214 / 270 | 509 / 193 / 250 | 339 / 214 / 270 |
| POS vs billing | 607 / 256 / 312 | 529 / 214 / 270 | 529 / 214 / 270 | 474 / 193 / 250 | 339 / 214 / 270 |
| Privacy | 323 / 120 / 179 | 323 / 120 / 179 | 323 / 120 / 179 | 287 / 120 / 179 | 281 / 113 / 129 |
| Terms | 323 / 120 / 179 | 323 / 120 / 179 | 323 / 120 / 179 | 323 / 120 / 179 | 281 / 113 / 129 |
| Refund | 358 / 120 / 179 | 358 / 120 / 179 | 323 / 120 / 179 | 323 / 120 / 179 | 333 / 113 / 129 |
| 404 (H1 only) | 210 | 210 | 210 | 210 | 247 |

At 390x844, 414x896 and 1366x768 the H1, the price and Buy now of all 8 band pages end inside the first screen. At 360x640 and 320x640 they are inside too, except the H1 of the GST guide at 320x640 (655: an H1 of 5 lines under a date of 2 lines). No type was shrunk. The numbers differ from the pack's table (DESIGN_SYSTEM 14.5) in three known ways. The legal pages are 36 px lower (323 against 287 at 390x844) because the repo has a small "Zipla POS" label above the H1 that the pack's tab does not draw. The checklist is 28 px lower than the pack's guide row (557 against 529) because its date has its own line on phones (section 8, item 5), and the GST guide is at 578 (an H1 of 4 lines under a date of 2 lines). The price and comparison guides equal the pack's row at 360x640 and 390x844 (529 / 214 / 270).
`fold_check.py` output: 8 WARN, 0 sideways-scroll cases (base: 31 WARN). 1 is the H1 of the GST guide below the fold at 320x640. The other 7 are its "action", the first link after the H1, on Privacy, Terms and Refund at phone widths. On those pages that link is a text link inside the policy text (`app.zipla.in` or "Zipla POS Terms and Conditions"), not a call to action. Buy now sits above the H1 in the slim band and is inside the first screen. Base for comparison: 31 WARN on these pages.
No sideways scroll: `fold_check.py` (320, 360, 390, 414, 1366), `browser_check.py` (360, 390, 768, 1280) and my own script at 17 widths from 320 to 1366 px on the nine pages (153 cells, it also checks that no link or text sticks out of its table cell).

## 6. Numbers, base and new

Lab numbers: Chromium 153 headless on localhost, no throttling, 3 runs per cell with a fresh browser context for each run, median shown. Base and new were measured in the same session, one after the other. Compare them only with each other.

| metric | base | new |
|---|---|---|
| LCP, 9 pages, 360 / 390 / 768 / 1280 px (36 cells, median of 3 each) | 64 to 116 ms | 64 to 124 ms |
| difference new minus base, per cell | | median +32 ms, range -28 to +48 ms. Higher in 30 of 36 cells |
| widest spread between the 3 runs of one cell | | 48 ms |
| LCP element (first run of each cell) | a paragraph in 26 cells, the H1 in 8, a span in 2 | a paragraph in 29 cells, the H1 in 7. Never an image |
| CLS, same 36 cells (median of 3) | 0 in all 36 | exactly 0 in 16 cells, above 0 in 20 cells (up to 0.020). Worst single run 0.020 (price guide, 768 px) |
| CSS gzip, whole build (G16) | 29,424 B | 23,485 B (-5,939) |
| CSS a visitor loads, blog index and guides (gzip, files) | 9,688 to 10,307 B (2) | 17,618 B (6), 77,585 B raw |
| CSS a visitor loads, Privacy, Terms, Refund | 9,576 to 9,828 B (2) | 16,928 B (6), 74,804 B raw |
| CSS a visitor loads, 404 | 9,365 B (2) | 12,885 B (3), 60,150 B raw |
| CSS on the 9 other converted pages | 12,464 B (2) and 15,263 B (3) | 13,076 B (3) and 16,396 B (5) (section 2, item 4) |
| JS gzip (G16) | 49,789 B | 49,789 B |
| fonts in the build | 222,984 B | 222,984 B |
| images in the build | 758,904 B | 758,904 B (no new file: the printer photo came with Stage 2) |
| HTML, all pages | 757,482 B | 750,563 B (-6,919) |
| largest HTML | `/` 64,523 B | `/` 64,523 B |
| page height at 390 px: blog / checklist / GST / price / vs / Privacy / Terms / Refund / 404 | 8,222 / 11,507 / 11,005 / 5,143 / 5,220 / 10,467 / 12,233 / 5,760 / 1,216 px | 7,860 / 9,706 / 8,495 / 5,310 / 5,704 / 9,351 / 10,833 / 4,880 / 1,010 px |
| browser_check, rows of the nine pages (36 rows) | 32 rows with FAIL, 4 rows with only WARN (the 404 page) | 36 ok |
| browser_check, whole site (76 rows) | 32 FAIL rows, 20 WARN rows (a row can have both). All of them on the pages of this stage | 0 FAIL, 0 WARN. Exit 0 |
| controls under 48 px in `<main>` and the S band (my script, same rule as `browser_check.py`: inline links in a paragraph are exempt, text links are measured by height) | not measured on the base | 0 of 712 (9 pages x 8 widths: 320, 360, 390, 414, 768, 1024, 1280, 1366) |

Honest reading. LCP is higher in the lab on 30 of 36 cells, by a median of 32 ms, and the run-to-run spread is up to 48 ms. So I claim a small rise, not noise. The likely cause is the CSS: a visitor of these pages loads 6 files and about 7 KB more gzip than before (the old per-page blocks are gone, but the shared sheets of Stages 1 to 4 are larger). I did not test that cause. What it means on a real phone network: I do not know. No LCP element is a picture, so the printer photo does not set the time. CLS is far below 0.1, so no fallback font faces were added. The small shifts come from the mono face (DM Mono, not preloaded): a date or label line wraps differently when it replaces the fallback face. My first build had a date row that wrapped under its label and moved the H1 (CLS 0.075 at 360 px on the checklist, every run). I fixed that (section 8, item 5). The rest is 0.001 to 0.020. On a test copy a preload of `dm-mono-400-latin.woff2` removed the shifts on the checklist, Privacy and GST (0.000) and left 0.001 and 0.006 on two other cells. I did not add it: a preload belongs in `Layout.astro` (R3) and would load a font on every page.

## 7. Allow-list entries added

`docs/redesign/allow_new.txt`: 3 comment lines and 8 text lines. Reason for all 8: `See pricing` is the link text of the M card (blog index and guides, OFFER.md 3.4) or of the S band (legal pages, OFFER.md 3.5). The pack leaves it out of `offer/allow_new.txt` "because the live repo already has it". Home has it, these pages did not (three guides have "See Pricing" with a capital P in their own closing buttons, which is a different text), so G7 reports it as a new text piece on each. One line per page, so the line cannot hide a stray "See pricing" on a page that must have no band (the 404 page).
- `/blog/ || See pricing`
- `/blog/restaurant-pos-software-checklist/ || See pricing`
- `/blog/restaurant-dhaba-gst-invoice-guide-2026/ || See pricing`
- `/blog/restaurant-pos-software-price-india/ || See pricing`
- `/blog/restaurant-pos-vs-billing-software/ || See pricing`
- `/privacy-policy/ || See pricing`
- `/terms-and-conditions/ || See pricing`
- `/refund-policy/ || See pricing`

The other band strings (name, price, "with 12 months of Zipla POS:", Buy now) are the lines that Stage 2 appended. They are plain lines, so they allow the band on every page. The gate cannot tell which page may carry them. The offer check does (section 11). `docs/redesign/allow_removed.txt`: no change, nothing is removed.

## 8. Deviations from the pack

1. **Class names and files.** The S band is `zm-band*` classes in a new file `src/styles/machine-s.css` and a new component `MachineBandS.jsx`. The reading look is `zr-` classes in a new file `src/styles/reading.css`. The pages also reuse the Stage 3 and 4 classes (`zb-` in `business.css`, `zi-` in `inner.css`, `zm-` in `machine.css` and `machine-m.css`) and the components `MachineCard.jsx` and `FaqList.jsx`, unchanged. So one template covers 18 pages. All rules sit under `.zp`. No prototype class name is copied (the old sheets still have `.eyebrow`, `.btn-ghost` and more).
2. **The reading column is styled per element.** The pack's `.read` block becomes rules under `.zr-read` for `p`, `h2`, `h3`, `ul`, `ol`, `li`, `a`. So the repo's paragraphs keep their own tags and bytes and no class was added to each one. The rules use `:where()`, so a class from the other sheets still wins. The pack's gold bullets need `<li><div>` in its markup. Mine are drawn by `::before` with `position: absolute`, so every `<li>` keeps its own inline text.
3. **Order of the band.** M card pages: the markup keeps the page's own text first, then the card (BRIEF A5, decision D1). CSS grid areas draw the card above the text on phones and beside it from 900 px. I tested the switch at 899 and 900 px on all five pages. S band pages: the band is the first thing in `<main>` and drawn above the H1 at every width, as in the prototype. Keyboard order: blog index: header links, Buy now, See pricing, then the page's links. Guides: Home, Blog (the repo's breadcrumb comes first), then Buy now, See pricing. Legal pages: Buy now, See pricing, then the page's links. 404: "Go to Zipla POS Home", then "Book Free WhatsApp Demo".
4. **The date stays where the repo has it.** The pack draws the date under the H1. On the checklist and the GST guide the repo has it next to the label above the H1. I kept the repo's order so that the first paragraph after the H1 stays the first text after it (A8). On the price and comparison guides the repo has the review line after the lead, so it stays after it.
5. **The date sits under the label on phones.** In one row the date wrapped under the label as soon as the mono face loaded, and moved the H1 (CLS 0.075 on the checklist at 360 px, every run). Under 640 px the label and the date are now stacked. From 640 px they are in a row, where both fit with either face.
6. **The legal date line is at reading size.** The pack's picture shows it at 17 px (the pack's own CSS makes it so). I followed the picture and let the line use the whole 44 rem column, so it is one line on a laptop, as in the pack. The date lines in the guides are 13 px.
7. **FAQ.** `<details>`, closed, the question's heading inside `<summary>` (BRIEF 13.7 item 3, section 2, item 1). The blog index FAQ sits left of the list from 900 px, as on the FAQ page. In the guides and legal pages it is inside the reading column.
8. **Blog index rows.** The repo's six cards (label, title, sentence, link) are rows with the link text kept. The link is stretched over the whole row, so a tap anywhere opens the guide (tested on all 6 rows). I added no arrow icon (no new glyph, the pack's title-as-link is not possible without changing the link text).
9. **Steps and numerals (DESIGN_SYSTEM 13.4).** Blog index: the repo's steps are an `<ol>` without digits, so case 2: a CSS counter shows 01 to 04 (digits only, `.zi-count` from Stage 4). Checklist, price guide, GST guide and Terms: the typed numerals are in the repo's headings ("1. Start with a real menu", 10 in the checklist, 7 in the price guide, 5 in the GST guide, 14 in Terms): case 1, keep the text, no counter. The numbered lists of the guides and of Refund keep the browser's own numbers, in the mono face.
10. **Closing bands.** The repo's call-to-action block sits at the end of the article, inside the text column. It is now a full-width dark band, still last in the markup. The GST guide keeps its two buttons ("Start Free Trial", "See Pricing"), not the pack's three. The comparison guide keeps "See Pricing" as the gold button and "Start Free Trial" as the ghost one, as the repo's first button is the primary one.
11. **Small markup changes.** `<article>` around the hero and body of the checklist and GST guide (the other two had it). `id="faq"` of the checklist is now on a `<div>` around the FAQ list. The two legal date lines and the "Zipla POS" labels keep their text. The blog index figure gets `decoding="async"`. The legal "example e-mail" blocks keep their H3 outside the box.
12. **Links.** OFFER.md writes See pricing as `https://zipla.in/pricing/`. The repo writes internal links without the host, so I did too. Same target, same as Stages 2 to 4.
13. **Light colour scheme.** `html:has(body.zp) { color-scheme: light }` comes from `business.css`, which all nine pages load. Saved-theme test (R15) in section 11.
14. **`gate/forbidden.txt` is not edited** (no PROOF line). Nothing from `offer/allow_new_claims.txt` was appended.
15. **Pack images.** `/images/hero-printer-billing-machine.webp` is the file that Stage 2 copied into `public/` (sha256 equal to the zip's). No new image file. The band pictures are eager with width and height. The 404 page has no picture of the machine.
16. **The loop.** BRIEF 6.2 says to run the gate after each page. I converted the blog index alone, then the checklist alone, then the other three guides together, then Privacy, Terms, Refund and the 404 page together. I ran build, snapshot and `compare` after each of those four steps, and the word diff for every page.
17. **Line endings.** Four of the nine files mix CRLF and LF (Terms, Refund, blog index, GST guide). Every line outside the markup keeps its original bytes. The new markup uses the line ending that the old markup mostly had.

## 9. Noticed, not changed

1. Terms: "inclusive of applicable taxes" next to the machine price (section 2, item 2).
2. Two ₹4,999 on some pages. The GST guide's closing H2 says "₹4,999/Year" (the software plan, the repo's text) and the guides mention the Complete plan at "₹4,999 per year or ₹11,999 for 3 years prepaid". The card shows ₹4,999 for the machine with 12 months of Zipla POS. A reader can take them as one offer. You accepted this risk in OFFER.md section 7. I changed no word of either.
3. The Refund policy has no warranty text yet (grep of the built page: 0 hits for "warranty" and "motherboard"), while Home and Pricing say "Terms are in the Refund Policy". That is Stage 5b. It has to be merged before the release (Stage 6), as Stage 4 said.
4. Typed numerals stay in 36 headings (item 9 of section 8). The gate counts them as text.
5. The blog index is more than a post list: 9 H2, 11 H3, 4 questions, one process list, a date line (STAGE0 section 12, item 4). All of it stays.
6. The image `ss-gst-invoice.webp` is 1234x864 on disk and `width="1232" height="860"` in the HTML (Stage 0 noted it). Unchanged. The picture shows the "Hot Spot Pizza" test account.
7. The titles of the four guides are 77 to 83 characters and the checklist's meta description is 189 (STAGE0 section 12, item 15). Untouched.
8. Heading levels: none skipped, none changed, one H1 per page (G5 PASS). Questions are `h3` inside the summary on all 8 pages with a FAQ.
9. The skip link target is still the empty `div#zp-content` (Stage 1). `<main>` has no id.
10. The Header and the Footer are still the Stage 1 ones (dark logo tile, menu button on phones), as in Stages 3 and 4. The pack draws a transparent logo and inline links.
11. Old rules that no page uses any more: `src/vertical-page.css` has no importer (since Stage 4) and `src/index.css` still holds rules for classes that no page uses. Not deleted (R13). A suggestion for Stage 6, not done. The same for the shared sheets of Stages 3 to 5 (`machine.css`, `machine-m.css`, `machine-s.css`, `business.css`, `inner.css`, `reading.css`): one merged sheet would load in one request.
12. The legal pages have a small "Zipla POS" label above the H1 and the blog index "Zipla POS Blog". The pack's tabs do not draw them. They are the repo's text, so they stay (BRIEF 13.7 item 4).

## 10. Not verified

- The Buy now link. I have no network access to Razorpay. I did not open `https://rzp.io/rzp/ygTqBnl`. Please tap it once. The same address is on 8 pages (the offer check compares each `href`, `target` and `rel`, and finds the address exactly once per page).
- Real phones, Safari, Firefox, Samsung Internet. I used headless Chromium 153 at widths from 320 to 1366 px. No screen reader. I tested the keyboard (Tab order, Enter and Space on the questions, the skip link, the focus ring on the questions and on Buy now).
- The Cloudflare preview page itself. I cannot open it from here. After the PR is opened the check "Cloudflare Pages" under the pull request shows whether a preview was built. I did not look at it.
- Lighthouse. I did not run it.
- Whether the real device's panel says "Billing Machine", and whether 4,999 rupees includes GST (OFFER.md section 5, open items).
- What closed answers do to search results or to AI answers. A redesign tries to lose nothing. It does not raise ranking by itself.
- Speed on a real network. My LCP numbers are a localhost lab with 3 runs.
- The font licence text (not read, as in the earlier stages).

## 11. Commands run

```
sha256sum /tmp/pack.zip   # e620d65d8c7309eeb376b67dbc34328de0a618fdf4441f010a6aea268354fb3d, equals the prompt
unzip -q /tmp/pack.zip -d /tmp/pack
python3 -I /tmp/pack/redesign-ref-r7/gate/selftest.py   # last line SELFTEST OK
python3 -m venv /tmp/pwvenv && /tmp/pwvenv/bin/pip install playwright==1.63.0   # playwright install was not run
git fetch origin redesign/integration
git switch --detach origin/redesign/integration && npm ci && npm run build   # baseline, 19 pages, git status clean
cp -r dist /tmp/base_dist
python3 -I .../gate/seo_gate.py snapshot /tmp/base_dist /tmp/base.json
git switch -c redesign/stage-5-blog-legal-utility origin/redesign/integration
(blog index, then the checklist, then three guides, then Privacy, Terms, Refund and 404: build, snapshot, compare after each)
npm run build
python3 -I .../gate/seo_gate.py snapshot dist /tmp/new.json
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --forbidden .../gate/forbidden.txt --report /tmp/gate_report.md   # exit 0
python3 -I .../gate/seo_gate.py compare ... --allow-new <the base's allow_new.txt> ...                          # G7 FAIL x8, 'See pricing' once each, as designed
/tmp/pwvenv/bin/python -I .../gate/browser_check.py /tmp/base_dist --out /tmp/shots_base --target-min 48   # 32 FAIL, 20 WARN
/tmp/pwvenv/bin/python -I .../gate/browser_check.py dist --out /tmp/shots_new --target-min 48              # 0 FAIL, 0 WARN, exit 0
/tmp/pwvenv/bin/python -I .../gate/fold_check.py /tmp/base_dist --only <the nine URLs>                     # 31 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py dist --only <the nine URLs>                               # 8 WARN, 0 sideways
python3 -m zipfile -e /tmp/pack.zip /tmp/pack_verify   # a second unzip, sha256 of the 9 gate files compared with the first: 0 different
git add <the 13 files by name> && git commit      # then this report in a second commit, no `git add -A`
git push -u origin redesign/stage-5-blog-legal-utility
the draft pull request, base redesign/integration (see the PR)
```
My own scripts (Playwright and Python, in the session's scratch folder, not committed), and what each proved:
- **Page converter** (one-off): keeps every byte of each page's frontmatter except the import lines, copies the repo's paragraphs from the original lines (so the text is identical by construction) and swaps classes and wrappers. I read the diffs and checked that only import lines differ in all nine frontmatters (title, description, canonical, FAQ data and JSON-LD are byte for byte the same).
- **Word diff of `<main>`** (base against new, in order): removed words none on all 9 pages. Added: 14 words on each of the 8 band pages, 0 on the 404 page.
- **Offer check** (`offercheck.py`): parses the built HTML, finds the card or the band, and compares every text piece, alt text, `role`, `aria-label` and link with OFFER.md section 3 in both directions. 8 bands, 5 pieces, 1 picture, 2 links each, no heading, no sample bill, the Razorpay address once per page, no prototype marker, and no string of OFFER.md section 4 (MRP, Save, Starter, 2,999, 3,999, 10 minutes, no training needed, EMI and the rest) more often than in the base. The 404 page: no band, no "Billing Machine", no "Buy now", no "4,999". Self-test on 9 broken copies of `dist`: a price of ₹5,999 in a card, the `.invalid` address in a band, a heading inside the S band, a delivery line added to a card, a lost `rel` on Buy now, sample bill text in a legal band, a band added to the 404 page, See pricing pointing to `/faq/`, and the word MRP in a page. All 9 exit 1 with the right message. (My first version of the last test put the word in the `<head>` and was not caught. That was my test, not the checker. I moved the word into `<main>` and it was caught.)
- **Fold numbers** at the five viewports (section 5), **LCP and CLS** (3 runs per cell, base and new), **page height**, **CSS weight per page**.
- **Render test of every text node** (R12): 7,480 checks (9 pages x 8 widths: 320, 360, 390, 414, 768, 1024, 1280, 1366). Hidden by something other than a closed `<details>`: 0. In closed `<details>`: the 35 FAQ answers.
- **Behaviour** (112 checks, 0 FAIL): all 8 FAQ pages: closed at load, a tap opens the first question and the answer is visible, the plus turns 45 degrees, a second tap closes it, Enter opens and Space closes, the focus ring is 3 px solid, the heading inside the summary looks like the plain question (17 px, weight 600, margin 0). The card is above the H1 at 899 px and beside it at 900 px (5 pages). The card is pinned at 24 px while the hero is in view and released after it (1366 and 1024 px, 5 pages). The S band is full width and above the H1 at 320, 390, 519, 520, 768 and 1366 px, with its buttons on a second row under 520 px. A tap beside the title on each of the 6 blog rows opens that guide. First Tab lands on the skip link, Enter moves to the content, the next Tab lands as listed in section 8, item 3. `#faq` on the checklist exists and the page scrolls to it. First visit: the consent box shows, Reject closes it and saves `denied` (4 pages). Saved theme `dark`, `light` and none on all nine pages at 390 px, 27 runs: body background `rgb(248, 245, 238)`, text `rgb(28, 25, 21)` every time. No console error or warning, no failed or 4xx request on the nine pages.
- **Overflow** (153 cells, 17 widths x 9 pages): no sideways scroll, no link or text outside its table cell.
- **48 px sweep**: 712 controls, 0 under 48 px.
- **HTML identity**: Home is identical to the base after replacing the content hash in `/_astro/` file names. The other 9 pages of Stages 3 and 4 differ by stylesheet `<link>` tags only (section 2, item 4). The 37 files of the build that are neither HTML nor in `_astro/` are identical (sha256). `_astro/` has 20 files in the base and 15 now: 9 page stylesheets gone, 4 shared ones new.
- **Screenshots** of the nine pages at 390x844 and 1366x768, set next to `png/first-screens/11_` to `18_`, and full-page slices of the blog index, the checklist, the price guide and the comparison guide.
The five static checks of BRIEF section 9, on the committed diff: 1 raw colours: none in a file of mine (the whole-`src` run lists only `src/index.css` with 59 lines and `src/vertical-page.css` with 13, both untouched). 2 font stacks: none in a file of mine (`index.css` 21, `vertical-page.css` 6, `fonts.css` 7 `@font-face` names from Stage 1). 3 hidden or generated text: no `display: none`, `visibility: hidden`, `opacity: 0` or text-indent hit and no `content:` with characters. The three `content: ''` in `reading.css` are empty boxes (the gold square, the stretched link area). 4 no dependency change and no new `<script>`. 5 13 files in the code commit (14 with this report). `Layout.astro`, `Header.jsx`, `Footer.jsx`, `public/`, `astro.config.mjs`, `package.json` and the lock file are untouched.

## Appendix A. Plan and pre-mortem, written before the build (BRIEF 4.2, 4.3)

The full plan was saved before the first edit (`/tmp/plan.md`, not committed). Job per page, in words from the pages. Blog index: the visitor searches "Restaurant Billing & POS Guides for India". The page promises "Key takeaway: ... help food-business owners understand billing, GST-invoice, counter, kitchen and plan-selection questions before they test a workflow." The action is a guide row, and at the end "Start 14-Day Free Trial". Guides: the visitor searches the H1. The promise is the lead paragraph. The action is "Start 14-Day Free Trial", "Start Free Trial" or "See Pricing" in the closing band. Legal pages: the visitor searches "Zipla POS Privacy Policy" (and the two others). The promise is "Key takeaway: ...". No action on the page, the S band adds Buy now. 404: "That page is not available.", the action is "Go to Zipla POS Home".
What I read first, and what it changed in the plan: the four guides use two class systems (`post-*` and `seo-post-*`) but one shape, so one reading column covers all four. The gate counts a baseline text piece as part of the new page's text, so wrapping words in a `<span>` is safe and changing a word is not. The repo's date comes before the H1 on two guides, so the date stays there (A8). The legal pages have a small label above the H1 that the pack does not draw. The page FAQs are data-driven arrays that also feed the JSON-LD, so `FaqList` reuses them (the GST guide had its five answers typed twice, I checked that the typed text equals the array, 0 words differ).
Pre-mortem, the way this PR could lose traffic or break the site, and the command that caught each:
1. Text lost or changed: G6, G7 and my word diff of `<main>`. Passed. Removed words: none.
2. Heading changed, re-levelled or reordered: G5. Passed. The bands add no heading (the offer check flags any heading inside a band).
3. Link lost: G9. Passed. New links: Buy now (WARN), See pricing.
4. Head tags or JSON-LD changed: G3, G4 and the frontmatter diff. Passed.
5. Hidden or generated text from CSS (R12): the gate cannot see it. Grep check 3 and the render test. Passed.
6. LCP slower: 3 runs per cell. Higher by a median 32 ms in the lab (section 6). Reported, not claimed away.
7. Layout shift: CLS up to 0.075 in my first build, then fixed. Now 0.000 to 0.020.
8. Sideways scroll or small tap targets: `browser_check.py`, `fold_check.py`, my overflow script and the 48 px sweep. None.
9. Text that needs JavaScript: G6 reads built HTML. No `client:` directive on a new component, no new script.
10. An offer fact differs from OFFER.md: the offer check. Equal.
11. A string from OFFER.md section 4 reaches a page: G15, G7, the offer check's list. None.
12. Buy now goes to a wrong address: the offer check compares every `href`. No `.invalid` in the built pages. I cannot open the Razorpay link.
13. An element id lost: G10. Passed (`faq` on the checklist, `blog-title`, the `*-title` ids).
14. FAQ visible differs from JSON-LD: G8. 4, 5, 5, 3, 3, 5, 6 and 4 questions, all in the built text.
15. FAQ answers now closed on 8 pages: a deliberate change, listed for Kabir (section 2, item 1).
16. Old per-page styles removed while a selector is still needed: screenshots of every page and a check that no old class name is left in the markup. Passed.
17. Tracking broken by a changed button class: the analytics script reads only `href` patterns (`app.zipla.in/register`, `#demo`, `wa.me`) and `.site-header`, `.pricing`, `.final-cta`. Every such href is kept.
18. A band on the 404 page: grep of the built page and the offer check. None.
19. A prototype marker ships (`px-`, `data-px`, `.invalid`, a yellow note): grep of the nine built pages. None.
20. A protected file changed (`Layout.astro`, `package.json`, robots, sitemap, `_redirects`, `public/`): `git diff --name-only` and a name filter. None.
21. The Terms sentence about tax next to the machine price: not fixable by me, section 2, item 2.
22. CSS chunks of other pages change because the sets of pages that use a sheet change: found by the HTML identity check, section 2, item 4.

## Appendix B. Three differences per page against the pack's PNGs (BRIEF 4.4)

Method. Each page at 390x844 and 1366x768 (headless Chromium, saved cookie choice so the consent box is not in the picture, reduced motion so the receipt is at rest), next to `png/first-screens/11_` to `18_`. FIXED means I changed the code and measured again. KEPT means the difference comes from the repo's words or order (R2, A8) and stays. Common to all eight, not a bug of this stage: (a) the Header, the pack draws a transparent logo and inline links, the build has Stage 1's dark logo tile and menu button. (b) The pack's grey bars stand for paragraphs, the build has the repo's real text. The 404 page has no PNG.

| page | difference 1 | difference 2 | difference 3 |
|---|---|---|---|
| /blog/ | No breadcrumb row. The pack draws "Home / Blog" above the card, the repo's page has none (only in its JSON-LD), so the card sits 28 px higher (card top 113, pack 141 at 390x844; the checklist, which has a breadcrumb, is at 141). KEPT, as Stage 4 did for FAQ and Contact. | The pack shows one lede line and a date line. The repo has two ledes, a "Who this is for" note and a longer review line, so the first section starts lower. KEPT (G6). | The pack draws each guide as a row with an arrow icon after the title and the title as the link. The build keeps the repo's words: title, sentence, then the link text. The whole row is one tap target (tested for all 6 rows). No arrow is added. KEPT. |
| /blog/restaurant-pos-software-checklist/ | The date. The pack draws it under the H1. The repo puts it next to the tag above the H1. KEPT (A8). On phones the date is under the tag. FIXED: in a row it wrapped under the tag when the mono face loaded and moved the H1 (CLS 0.075 at 360 px, then 0). | The breadcrumb separator. The pack draws "/", the repo's text is "›" (a text piece the gate counts). KEPT. | The first-screen numbers equalled the pack's table before the CLS fix (529 / 214 / 270 at 390x844). After it the H1 ends 28 px lower (557). Price and Buy now are the same (214 / 270). At 1366x768 price 214 and Buy now 270 against 198 and 254 in the pack's row. KEPT. |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | The date line reads "August 20, 2026 · Updated September 8, 2026" (the repo's text). The pack writes "Published August 20, 2026. Updated September 8, 2026." under the H1. KEPT (R2, A8). | The long H1 (4 lines at 390 px) ends at 578 at 390x844, inside the first screen. At 320x640 it ends at 655, below it. Not shrunk. The pack's table has no row for this H1. | The lede is the repo's whole first paragraph (4 lines at 390 px). The pack draws it cut with a grey bar. KEPT (G6). |
| /blog/restaurant-pos-software-price-india/ | The pack's tag reads "Buying decision". The repo's is "Buying guide". KEPT (R2). | The order of the lede and the review line. The pack draws the date line first. The repo has the "Short answer" lede first and the review line after it. KEPT (A8). | The plan price fact box (₹4,999 per year, or ₹11,999 for 3 years prepaid, the trial line) is in the repo and not in the pack's tab. Built as a small cream box in the reading column (one `zr-fact` rule). KEPT. |
| /blog/restaurant-pos-vs-billing-software/ | The pack's tag reads "Comparison", the repo's "Comparison guide". KEPT (R2). | The table. The pack draws "Topic / Billing software / Restaurant POS" with 4 rows, the repo has "Business need / Billing-first setup / Restaurant POS workflow" with 5 rows. The build has the repo's table, in its own scroll box. KEPT. | The pack draws "Which option should you choose?" as three lists. The repo has three short cards (a heading and a sentence), built as H3 and paragraph. KEPT (G5: same headings). |
| /privacy-policy/ | The small "ZIPLA POS" label above the H1. The repo has it, the pack's tab does not. The H1 ends at 323 at 390x844, the pack's table says 287 (36 px). KEPT. | The repo has "Who this is for" and two intro paragraphs before the first H2. The pack goes from the date line to the first H2. KEPT (G6). | The date line. The repo writes "Last updated: August 13, 2026 &nbsp;\|&nbsp; Effective: August 13, 2026" (non-breaking spaces around the bar), so the gap around the bar is wider than the pack's. On a laptop the line first wrapped inside a column of 62 characters. FIXED: the date line may use the whole 44 rem column, so it is one line at 1366x768, as in the pack. |
| /terms-and-conditions/ | Same label and same extra paragraphs as Privacy before the first H2 ("1. Who is eligible to use Zipla POS?"). KEPT. | The H2s start with typed numerals ("1." to "14.") in the repo's text. The build keeps them, no counter (13.4 case 1). | The two back links at the end ("← Back to Zipla POS", "Privacy Policy →") are separated by two non-breaking spaces in the repo. They are two 48 px links in a row (the pack draws one back link). KEPT. |
| /refund-policy/ | Same label above the H1. The H1 breaks as in the pack ("Zipla POS Cancellation" and "& Refund Policy"). | The pack goes from the key takeaway to the first H2. The repo adds "Who this is for" and an intro paragraph with a link to the Terms. KEPT. | The refund checklist table. The pack draws 2 columns with 4 rows, the build has the repo's 4 rows and links in a scroll box (the e-mail link is a 48 px tap area). Equal in shape. |
| /404.html | No PNG and no tab in the pack, no band (OFFER.md section 5). One block as DESIGN_SYSTEM 13.3 says: eyebrow, H1, sentence, two buttons. | The "404" is the repo's own text (a `span`). It is the small mono label above the H1, not a big number. KEPT. | "not available." has the gold bar like the other H1s. Two buttons, 56 px high: "Go to Zipla POS Home" (gold) and "Book Free WhatsApp Demo" (ghost). |

Fixes made in this round, in order: (1) my first version left 24 px of padding between the hero and the reading column that the pack does not have (pack: 0). (2) The legal date line wrapped on a laptop. (3) The date under the tag on phones (CLS).
