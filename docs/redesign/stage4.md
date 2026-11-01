# Stage 4: Pricing, FAQ, Contact (DRAFT)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-4-pricing-faq-contact`, created from `origin/redesign/integration` at `b1275016c367097f4450daafcdf6f3370cc3c4dd` (Stages 1 to 3 are merged there, PR #33, #34 and #35). B0 (the build of `main` that Stage 0 recorded, `docs/redesign/B0_SHA.txt`): `419cc531ac67c75ec5ab5384a3c5c9880b64dfca`.
Scope: `/pricing/`, `/faq/` and `/contact-us/`. The look of the Round 7 tabs `p-price`, `p-faq` and `p-contact`. Pricing gets the L band of the Zipla Billing Machine, then the strip and the offer card (OFFER.md 3.3, 3.7, 3.8). FAQ and Contact get the M card (OFFER.md 3.4). Title, meta, canonical, robots and JSON-LD are untouched. `Layout.astro` is untouched.
Buy now address: the Razorpay link from Kabir's prompt, `https://rzp.io/rzp/ygTqBnl` (no angle brackets, no `.invalid`). It is in `src/constants.js` since Stage 2. My components import `BUY_NOW_URL`, so the address is typed once. Claims: the prompt has no PROOF line, so "10 minutes" and "no training needed" are not built (grep of the build, case-insensitive: 0 files each, in the base too).

## 1. In five lines

Gate: 0 FAIL, 4 WARN (3 x G9: the new Buy now link on each page. 1 x G7: Pricing has "policy" and "refund" once more than before, because of the strip's Refund Policy link). Browser check: ran, exit 1 (32 FAIL rows and 20 WARN rows, the base had 40 and 30). The 12 rows of my three pages (3 pages x 4 widths) went from 8 FAIL and 4 WARN to 12 ok. The other 64 rows carry the same text as in the base (64 of 64). Exit 1 stays because of the Stage 5 pages (blog index, four articles, Privacy, Terms, Refund have FAIL rows. The 404 page and four blog pages have WARN rows).
Pages changed: 3. Files changed: 12 (3 pages, 2 edited components, 3 new components, 2 new stylesheets, `allow_new.txt`, this report). Base: `redesign/integration` at b127501. B0: 419cc53.
Verdict: ready for your preview check. Five points need your OK (section 2).
Offer check: the strings of the machine band in the built HTML equal OFFER.md section 3: yes. Five bands on three pages (the L band, the strip and the offer card on Pricing, the M card on FAQ and on Contact): 41 text pieces, 12 attributes (alt, aria-label, role), 7 links, in the same order as OFFER.md, no heading inside. The script tests both ways (everything in the band is in OFFER.md, everything approved for that band is in the build). I broke the build in seven ways and the script caught all seven (section 11).
Nothing else changed: the HTML of the other 16 pages is identical to the base apart from the hashed names of CSS files, and the 37 files of the build that are neither HTML nor in `_astro/` (public files, sitemap, robots) are identical (section 11).

## 2. Needs Kabir's OK (at most five)

1. **The answers are closed now on the FAQ page and on the Contact page.** Before, the 18 answers of `/faq/` and the 4 answers of `/contact-us/` were always visible. Now each question is a row that opens on a tap, as in the pack's tabs. BRIEF 13.7 item 3 calls that a deliberate change. The question keeps its heading inside the row (`<summary><h2>` on FAQ, `<h3>` on Contact) with the same text, level and order (G5 passes). Every answer is in the HTML and in the JSON-LD (G6 and G8 pass, 18 and 4 questions). My render test (8 widths) found no hidden text except these answers. Page height at 390 px: FAQ 9,099 to 6,886 px, Contact 5,459 to 5,185 px. If you say no: add `open` to the `<details>` in `FaqList.jsx` (one word), or open only the first. What closed answers do to search or to how Google shows the page: I do not know. One sentence on the FAQ page reads oddly now: "Each answer below is visible on this page and is also represented in the matching FAQPage schema." It is the repo's text, so I did not change it (section 9, item 2).
2. **The picture on Pricing changed from a laptop to a phone (decision D6).** In the section "What should you look at before choosing a plan?" the repo's `ss-dashboard.webp` (laptop) is replaced by the pack's `screen-dashboard.webp` in a phone frame, with the repo's alt text and its caption. I opened both. Same screen, same account, same four tiles with the same four titles and the same four sub lines. The phone also shows five tabs and an Overview strip. Both pictures show the "Hot Spot Pizza" test account. The same phone picture is also in the band at the top of the page, so the page shows it twice. If you say no: the repo's laptop picture goes back in the wide frame (a small change in `pricing.astro`). The picture on the FAQ page stays as it is: the repo's New Order laptop screen shows food photo cards and the pack's phone shows a text list, so it is not the same content.
3. **Old style blocks and one import are gone.** The three pages had their own `<style>` blocks (Pricing two, FAQ two, Contact one, with raw colours such as `#0D0D0D`), and Pricing imported `src/vertical-page.css`. After the new markup none of their selectors match anything. I deleted the blocks and the import, as Stage 3 did for the six business pages (its report, section 2, item 4). BRIEF R13 says not to delete legacy CSS in stages 1 to 5. I read that as the shared old sheets, not as code that I replaced inside the page. `src/index.css` is untouched and still imported (the cookie box lives there). `src/vertical-page.css` has no importer now and stays on disk (section 9, item 1). CSS in the whole build: 33,337 to 29,424 B gzip (-3,913).
4. **On a phone "Start 14-Day Free Trial" is below the first screen on Pricing.** At 390x844 its bottom was at 511 px in the base and is at 1,056 px now, because the band comes first. Buy now is the first action (bottom 564 px). On a laptop both are inside the first screen (trial 570 px, Buy now 727 px). It is the same trade as on the six business pages (Stage 3, section 2, item 3). If you want the trial button higher on phones, that needs a new decision, because the markup keeps the H1 and its buttons first (BRIEF A5).
5. **No breadcrumb on FAQ and Contact.** The pack draws "Home / FAQ" and "Home / Contact Us". The repo's two pages have no breadcrumb (it is only in their JSON-LD). Building one adds text and a link that G7 and G9 would flag, and the brief says a breadcrumb only where the repo's page has one. Pricing has one and keeps it. If you want it on the other two, that is a content change for a later PR.

## 3. Check these on your phone (the Cloudflare preview link is in the comments)

- Pricing, top: the breadcrumb, then the machine card (printer with the sample bill, the phone, "ZIPLA BILLING MACHINE", ₹4,999, Buy now), then the small label and the H1. There is no "See pricing" link on this page (OFFER.md 3.3). Tap Buy now: it must open your Razorpay link in a new tab. I did not open it (section 10).
- Pricing, scroll: the two repo buttons, the date line, the strip (What you get, Warranty, Delivery), the yellow offer card, the plan with its price slip, the terms table (readable without sideways scroll?), the four trial checks, the six outlet rows, the phone picture, five questions, the dark band.
- FAQ, top: the card above the H1 with Buy now and See pricing. Tap one question: it opens and the plus turns. Scroll: the four link sentences, the table, the trial list with 01 to 04, the laptop picture, the 18 questions, the dark band with the support e-mail.
- Contact, top: the card above the H1. Scroll to the contact rows and tap the e-mail, the phone number and WhatsApp. In the route table (390 px) the e-mail link must stay inside its column. Open one support question.
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
| G7 | No new text | 18 | 1 | 0 |
| G8 | FAQ questions and answers visible | 19 | 0 | 0 |
| G9 | Links kept, no broken internal link or anchor | 16 | 3 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 19 | 0 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

**WARN (4)**
- G9 on `/pricing/`, `/faq/` and `/contact-us/`: new link(s): `https://rzp.io/rzp/ygTqBnl`.
- G7 `/pricing/`: same words, but repeated more often than baseline: policy +1, refund +1.

Why the WARN is fine. The G9 link is the Buy now link of the band or the card (OFFER.md 3.2), with `target="_blank"` and `rel="noopener noreferrer"` (the offer check compares both). The second band link, See pricing, goes to `/pricing/`, which every page already links to, so G9 does not call it new. The G7 repeat comes from the strip's "Refund Policy" link (OFFER.md 3.7): the repo had the words once in the footer and the page has them once more now. Nothing is duplicated by mistake.
The proof that the two allow lines are needed: I ran `compare` on `/faq/` and on `/contact-us/` before adding their lines. Each failed G7 with exactly one new text piece, `See pricing`. With the lines it passes. `/pricing/` has no See pricing link, so it needs no line.
G13 (forms): the baseline has no form on these three pages (0 `<form>`) and I added none, so "forms identical" means "no form" equals "no form". G8: the real counts are 5 questions on Pricing, 18 on FAQ and 4 on Contact, all found in the built text.
The pack's gate files are unedited: the sha256 of `forbidden.txt`, `seo_gate.py`, `browser_check.py`, `fold_check.py`, `selftest.py` and `inventory.py` equals the copy inside the zip.

## 5. Pages in this PR

| URL | H1 (unchanged) | archetype | components used | fold 390x844: H1 bottom, price, Buy now | fold 1366x768 |
|---|---|---|---|---|---|
| /pricing/ | Restaurant POS Pricing in India | 3 Pricing | crumbs, machine band L (no See pricing link), strip, offer card, two-column text with check list, price slip, table with caption (3 columns), numbered steps (typed 01 to 04), outlet rows, phone picture on the panel, FAQ with details (5), dark band | 703 / 459 / 564 | 259 / 641 / 727 |
| /faq/ | Restaurant Billing Software India: Zipla POS Questions Answered | 4 FAQ | machine card M, hero notes, link sentences, table (2 columns), numbered steps (CSS counter 01 to 04), check list, wide picture, FAQ with the h2 inside the summary (18), dark band | 493 / 186 / 242 | 319 / 202 / 258 |
| /contact-us/ | Contact Zipla POS Support | 5 Contact | machine card M, answer callouts (3), contact rows (`<dl>`), table (3 columns), reading column with a list, example e-mail block, FAQ with the h3 inside the summary (4), related links, back link | 423 / 186 / 242 | 215 / 202 / 258 |

All five viewports, measured on the build with my own script (`fold_check.py` reports only the H1 and the first link). Cell: bottom of the H1 / bottom of the price / bottom of Buy now. A star means below the first screen. Buy now is 48 px high everywhere (111 px wide, 91 px at 320 px on the card). See pricing is 48 px high.

| page | 320x640 | 360x640 | 390x844 | 414x896 | 1366x768 |
|---|---|---|---|---|---|
| Pricing | 665* / 421 / 527 | 700* / 456 / 561 | 703 / 459 / 564 | 704 / 480 / 565 | 259 / 641 / 727 |
| FAQ | 549 / 206 / 262 | 493 / 186 / 242 | 493 / 186 / 242 | 473 / 165 / 222 | 319 / 202 / 258 |
| Contact | 443 / 206 / 262 | 423 / 186 / 242 | 423 / 186 / 242 | 402 / 165 / 222 | 215 / 202 / 258 |

At 390x844, 414x896 and 1366x768 the H1, the price and Buy now of all three pages end inside the first screen. For Pricing the 15 numbers equal the pack's own table (DESIGN_SYSTEM 14.5, row Pricing). At 360x640 and 320x640 the H1 of Pricing ends below the first screen, as the pack's table says for the L pages. No type was shrunk. On FAQ and Contact all of it is inside at every viewport. FAQ and Contact sit higher on the page than the pack's numbers (521 at 390x844 for FAQ, the build has 493), because the repo's pages have no breadcrumb row.
`fold_check.py` output: 4 WARN, 0 sideways-scroll cases (base: 8 WARN). All four WARN rows are on Pricing: the H1 below the fold at 320 and 360 px (above) and the repo's "Start 14-Day Free Trial" below the fold at 320, 360, 390 and 414 px (section 2, item 4). FAQ and Contact are `ok` in all 10 rows. The tool's "action" there is Buy now, the first link after the H1. On Contact at 1366x768 the whole "Short answer" with the three support links is inside the first screen (it ends at about 727 px, by screenshot). The contact rows start below it.
No sideways scroll: `fold_check.py` (320, 360, 390, 414, 1366), `browser_check.py` (360, 390, 768, 1280) and my own script at 17 widths from 320 to 1366 px on the three pages (51 cells, also checks that no link or text sticks out of its table cell).

## 6. Numbers, base and new

Lab numbers: Chromium 153 headless on localhost, no throttling, 3 runs per cell with a fresh browser context for each run, median shown. Compare them only with each other.

| metric | base | new |
|---|---|---|
| LCP, Pricing, 360 / 390 / 768 / 1280 px | 76 / 72 / 68 / 80 ms | 116 / 96 / 116 / 112 ms |
| LCP, FAQ, same widths | 76 / 76 / 80 / 112 ms | 92 / 88 / 88 / 96 ms |
| LCP, Contact, same widths | 60 / 56 / 64 / 64 ms | 96 / 76 / 96 / 80 ms |
| LCP element | Pricing: a paragraph at 360, 390 and 768, the H1 at 1280. FAQ and Contact: a paragraph | Pricing: the printer photo in all 4 cells. FAQ and Contact: a paragraph |
| widest spread between the 3 runs of one cell | 40 ms | 36 ms |
| CLS, same 12 cells | 0.000 in all | 0.000 to 0.004 (0.004 on FAQ at 768 px, 0.001 on FAQ and Pricing at 1280 and on Contact at 360, 390 and 768) |
| CSS gzip, whole build (G16) | 33,337 B | 29,424 B (-3,913) |
| CSS a visitor loads: Pricing / FAQ / Contact (gzip, files) | 12,918 B (2) / 10,225 B (2) / 9,864 B (2) | 15,263 B (3) for each of the three, 72,902 B raw |
| CSS on the six business pages and on Home | 12,464 B and 13,987 B gzip | the same, byte for byte |
| JS gzip (G16) | 49,789 B | 49,789 B |
| fonts in the build | 222,984 B | 222,984 B |
| images in the build | 758,904 B | 758,904 B (no new file: the two pack images came with Stage 2) |
| HTML, all pages | 754,013 B | 757,482 B (+3,469) |
| HTML, Pricing / FAQ / Contact | 37,703 / 43,213 / 33,090 B | 39,348 / 45,193 / 32,934 B |
| largest HTML | `/` 64,523 B | `/` 64,523 B |
| page height at 390 px, Pricing / FAQ / Contact | 7,201 / 9,099 / 5,459 px | 8,592 / 6,886 / 5,185 px |
| browser_check, rows of the three pages | 8 FAIL, 4 WARN (12 rows) | 12 ok |
| browser_check, whole site | 40 FAIL rows, 30 WARN rows | 32 FAIL rows, 20 WARN rows |
| controls under 48 px in `<main>` (my script, same rule as `browser_check.py`: inline links in a paragraph are exempt, text links are measured by height) | not measured on the base | 0 of 536 (3 pages x 8 widths: 320, 360, 390, 414, 768, 1024, 1280, 1366). 88 inline links exempt |

Honest reading. The run-to-run spread is up to 40 ms, so on FAQ I claim no change in either direction (the differences are -16 to +16 ms). On Pricing the median is higher by 24 to 48 ms in all four cells, and the LCP element is now the 82 KB printer photo instead of a paragraph. On Contact it is higher by 16 to 36 ms. I do not know the cause on Contact (the page now uses the Stage 1 fonts and a larger CSS file, but I did not test either). This is a lab on localhost. What it means on a real phone network: I do not know. CLS is far below 0.1, so no fallback font faces were added. The rupee sign sits in the latin-ext Bricolage file and I did not add a preload for it: `Layout.astro` has only the body slot and fixed preloads, so a preload for one page needs a change in that file, which this stage may not make (BRIEF R3 and the Stage 4 note on Pricing). The CSS a visitor loads grows by 2.3 KB gzip on Pricing, 5.0 KB on FAQ and 5.4 KB on Contact (one more file each). The whole-build CSS number falls because the old inline blocks are gone.

## 7. Allow-list entries added

`docs/redesign/allow_new.txt`: 3 comment lines and 2 text lines. Reason for both: `See pricing` is the link text of the M card (OFFER.md 3.4). The pack leaves it out of `offer/allow_new.txt` "because the live repo already has it". Home has it, these two pages did not, so G7 reports it as a new text piece on each. One line per page, so the line cannot hide a stray "See pricing" on a page that must have no band (the 404 page).
- `/faq/ || See pricing`
- `/contact-us/ || See pricing`

The other band strings (name, price, delivery line, Buy now, the sample bill, the strip, the offer card) are the lines that Stage 2 appended. They are plain lines, so they allow the band on every page. The gate cannot tell which page may carry them. The offer check does (section 11). `docs/redesign/allow_removed.txt`: no change, nothing is removed.

## 8. Deviations from the pack

1. **Class names and files.** The M card, the strip and the offer card are `zm-` classes in a new file `src/styles/machine-m.css`. What the three pages need beyond the Stage 3 template is `zi-` classes in `src/styles/inner.css`. The pages also reuse the Stage 3 classes (`zb-` in `business.css`, `zm-` in `machine.css`), so one template covers 9 pages. `business.css` is named for the business pages, and renaming it is Stage 6 work (R13). I put the Stage 4 rules in their own file, because a first version in `machine.css` made the six business pages ship about 4 KB (0.5 KB gzip) of rules they never use. `machine.css` is the Stage 3 file again, byte for byte (`git diff` is empty).
2. **Two small changes in Stage 3 components, both with a default that keeps the old output.** `MachineBand.jsx` has a prop `seePricing` (default true). Pricing sets it to false, because OFFER.md 3.3 says "The Pricing page has no See pricing link". `FaqList.jsx` has a prop `heading` (`h2` or `h3`, default the plain `<span>`), so the FAQ and Contact questions keep their heading inside `<summary>`. The 16 other pages are identical to the base (section 11).
3. **Hero order.** The markup keeps the page's own text first, then the band or the card (BRIEF A5, decision D1). CSS grid areas draw the band above the text on phones and beside it from 900 px. I tested the switch at 899 and 900 px. Keyboard order on Pricing: Home, Start 14-Day Free Trial, Book Free WhatsApp Demo, Buy now, Refund Policy, Buy now, Start the free trial, Talk through your workflow. On FAQ and Contact the card is the first stop in `<main>` (their hero text has no links): Buy now, See pricing, then the page's links.
4. **Sticky.** The card on FAQ and Contact is pinned at 24 px from 900 px up while the hero is in view and is released after it (tested at 1366 and 1024 px). The band on Pricing is sticky in the CSS, but it is the taller column there, so it has no room to move and scrolls with the page, as in the pack's prototype. Nothing overlaps (tested).
5. **The repo's words win.** The price slip reads "₹11,999 for 3 years prepaid" (the repo's order), the pack draws "3 years prepaid ... ₹11,999". The outlet rows keep the repo's second line with its text arrow, and I added no arrow icon, so there is one arrow, not two. The table caption of Pricing is the repo's visible text and stays (the pack's tab has none). The cell text "14 days; no credit card" is the repo's (the pack writes a comma).
6. **Step numbers (DESIGN_SYSTEM 13.4).** Pricing: the repo's steps carry typed digits 01 to 04, so case 1: keep the text, add no counter. FAQ: the repo's trial list is an `<ol>` without digits, so case 2: a CSS counter shows 01 to 04 (digits only, `.zi-count` in `inner.css`). It is the only generated text in this diff. Contact: its `<ol>` keeps the browser's own numbers, in the mono face.
7. **Links.** OFFER.md writes See pricing and Refund Policy as `https://zipla.in/pricing/` and `https://zipla.in/refund-policy/`. The repo writes internal links without the host, so I did too. Same targets, same as Stages 2 and 3.
8. **Strip.** The three cell values are `<p>`, like Stage 2's Home strip. The labels are `<span>`. No heading.
9. **Laptop height on Contact.** My addition, not in the pack: from 900 px wide and up to 800 px high I tightened three spaces (80 to 48 px above the first band, 48 to 32 px under the hero, 28 to 20 px under the lead-in), so that the whole "Short answer" with the support links is in the first screen of a 1366x768 laptop. Without it only its first line showed.
10. **The route table on Contact has its own phone widths** (29, 36, 35 percent) and its links may wrap, because the e-mail link overflowed into the next column at 390 px with the pack's 29, 25, 46. The Pricing table uses the pack's numbers.
11. **Small links in table cells** have a tap area of 52 px height and 4 px extra width on each side (padding with an equal negative margin, so the sentence does not move). "call" is 31 px wide. `browser_check.py` measures text links by height, so the rows are `ok`.
12. **Card image.** The printer photo in the card is eager, with width and height, without `fetchpriority`. The LCP element on FAQ and Contact is a paragraph (measured). On Pricing the band's printer photo has `fetchpriority="high"` and is eager, as Stage 3 made it.
13. **No preload for the rupee sign** (section 6).
14. **`gate/forbidden.txt` is not edited** (no PROOF line). Nothing from `offer/allow_new_claims.txt` was appended.
15. **Pack images.** `/images/hero-printer-billing-machine.webp` and `/images/screen-dashboard.webp` are the files that Stage 2 copied into `public/` (sha256 equal to the zip's). No new image file.
16. **Light colour scheme.** `html:has(body.zp) { color-scheme: light }` comes from `business.css`, which the three pages load. Saved-theme test (R15): `zipla-theme` set to `dark`, to `light` and not set, on the three pages at 390 px, 9 runs: body background `rgb(248, 245, 238)`, text `rgb(28, 25, 21)`, every time. `data-theme="dark"` is still in the source from Stage 1 and none of my CSS reads it (grep).

## 9. Noticed, not changed

1. `src/vertical-page.css` has no importer any more (grep of `src`: the only hit is a comment in `business.css`). `src/index.css` still holds rules for classes that these pages no longer use. Not deleted (R13). A suggestion for Stage 6, not done.
2. FAQ text: "Each answer below is visible on this page and is also represented in the matching FAQPage schema." With closed rows, "visible" now means "one tap away". The text is the repo's. You may want to reword it later.
3. The Warranty cell of the strip says "Terms are in the Refund Policy" and links to `/refund-policy/`. That page has no warranty text yet (grep of the built page: 0 hits for "warranty" and for "motherboard", base and new). OFFER.md section 5 lists the warranty paragraph for Stage 5b. Home's strip has the same sentence. Stage 5b has to be merged before the release (Stage 6), or the link leads to a page without those terms.
4. `<div aria-label="Zipla POS Complete plan price">` on Pricing has a name but no role. It is the repo's markup and I kept it. Whether Lighthouse flags it: I do not know, I did not run it.
5. The pack's FAQ and Contact tabs leave out text that the repo has: "Quick answer" and "Who this FAQ is for" on FAQ, the lead-in paragraph and "Who this is for" on Contact, and the small "Zipla POS" eyebrow above the Contact H1 (BRIEF 13.7 item 4). All of it stays (G6).
6. On a laptop the first screen of Pricing shows two gold buttons, "Start 14-Day Free Trial" and Buy now. The prototype draws it the same way (Stage 3, section 8, item 8).
7. The date lines are the repo's ("Last reviewed: 22 September 2026" on Pricing, "21 September 2026" on FAQ, "Last updated: September 22, 2026" on Contact). I changed none. The FAQ line ends with "the current Landing copy", the repo's words.
8. Heading levels: none skipped, none changed, one H1 per page (G5 PASS). The 18 FAQ questions are still H2 and the 4 Contact questions still H3.
9. The Header and the Footer are still the Stage 1 ones (dark logo tile, menu button on phones), as in Stage 3's report, section 9, item 8.
10. The word "Hot Spot Pizza" is in the dashboard picture. Both the old and the new picture show it (section 2, item 2, and OFFER.md section 5).

## 10. Not verified

- The Buy now link. I have no network access to Razorpay. I did not open `https://rzp.io/rzp/ygTqBnl`. Please tap it once. The same address is used four times on these pages (two on Pricing, one each on FAQ and Contact). The offer check compares each `href`, `target` and `rel`.
- Real phones, Safari, Firefox, Samsung Internet. I used headless Chromium 153 at widths from 320 to 1366 px. No screen reader. I tested the keyboard (Tab order, Enter and Space on the questions, the focus ring on the questions and on Buy now).
- The Cloudflare preview page itself. I cannot open it from here. After the PR is opened I read its check runs through the GitHub API (see the PR comments).
- Lighthouse. I did not run it.
- Whether the real device's panel says "Billing Machine", and whether 4,999 rupees includes GST (OFFER.md section 5, open items).
- What closed answers do to search results or AI answers. A redesign tries to lose nothing. It does not raise ranking by itself.
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
git switch -c redesign/stage-4-pricing-faq-contact origin/redesign/integration
(one page at a time: build, snapshot, compare after each)
npm run build
python3 -I .../gate/seo_gate.py snapshot dist /tmp/new.json
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --forbidden .../gate/forbidden.txt --report /tmp/gate_report.md   # exit 0
/tmp/pwvenv/bin/python -I .../gate/browser_check.py /tmp/base_dist --out /tmp/shots_base --target-min 48   # 40 FAIL, 30 WARN
/tmp/pwvenv/bin/python -I .../gate/browser_check.py dist --out /tmp/shots_new --target-min 48              # 32 FAIL, 20 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py /tmp/base_dist --only /pricing/,/faq/,/contact-us/        # 8 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py dist --only /pricing/,/faq/,/contact-us/                  # 4 WARN, 0 sideways
```
My own scripts (Playwright and Python, not committed, in the session's scratch folder), and what each proved:
- **Offer check** (`offercheck.py`): parses the built HTML of the three pages, takes every text piece, alt, aria-label and role of each band, and compares both ways with OFFER.md section 3. 41 pieces, 12 attributes, 7 links, 0 differences. Self-test on seven broken copies of `dist`: a changed price (₹5,999 on the FAQ card), the `.invalid` address on the Contact card, a heading inside the FAQ card, a changed delivery line on Pricing, a See pricing link added to the Pricing band, a lost `rel` on the Pricing Buy now, the Razorpay line of Home added to Contact. All seven exit 1 with the right message.
- **Fold numbers** at the five viewports (section 5), **LCP and CLS** (3 runs per cell, base and new), **page height**.
- **Render test of every text node** (R12): 24 runs (3 pages x 8 widths): text nodes 139 (Pricing), 116 (FAQ), 100 (Contact). Hidden by something other than a closed `<details>`: 0. In closed `<details>`: 5, 18, 4.
- **Behaviour** (37 checks, 0 FAIL): every question opens by tap and by Enter, closes by a second tap and by Space, the plus turns 45 degrees, the focus ring is 3 px solid ink, the heading inside the summary looks like the plain question (17 px, weight 600, margin 0). The band or card is above the text at 899 px and beside it at 900 px. Pinned at 24 px and released (FAQ, Contact). Saved theme dark, light, none: the same light page. The receipt animation runs and stops with reduced motion. First visit: the consent box shows, no console error or warning, no failed request, Reject closes it and saves `denied`.
- **Overflow** (51 cells, 17 widths x 3 pages): no sideways scroll, no link or text outside its table cell. Self-test: I forced the old e-mail overflow back in the browser and the script reported it.
- **48 px sweep**, **HTML identity of the other 16 pages** (HTML equal after replacing the content hash in `/_astro/` file names, 16 of 16), **identity of the 37 build files that are neither HTML nor in `_astro/`** (equal).
- **Screenshots** of the three pages at 390x844 and 1366x768, set next to `png/first-screens/08_` to `10_`, and full-page slices set next to the prototype tabs.
The five static checks of BRIEF section 9, on the files I changed or added: no raw colour (the whole-`src` run still lists old files that I did not touch), no font stack outside the tokens, no `display: none`, `visibility: hidden`, `opacity: 0` or quoted `content:` (the one `content:` is the digits counter of section 8, item 6), no dependency change and no new `<script>`, 12 files. `Layout.astro`, `public/`, `astro.config.mjs`, `package.json` and the lock file are untouched. The frontmatter of the three pages differs from the base in import lines only (title, description, canonical, FAQ data and JSON-LD are byte for byte the same).

## Appendix A. Plan and pre-mortem, written before the build (BRIEF 4.2, 4.3)

Page jobs, in words from the pages. Pricing: the visitor searches "Restaurant POS Pricing in India". The page promises "The Zipla POS Complete plan costs ₹4,999 per year or ₹11,999 for 3 years prepaid, with a 14-day free trial and no credit card required." The action is "Start 14-Day Free Trial", and the machine band adds Buy now. FAQ: the visitor searches "Restaurant Billing Software India: Zipla POS Questions Answered". The page promises "This Zipla POS FAQ answers the confirmed product, plan, billing, device, printing and trial questions for restaurant billing software India." The action is "Start 14-Day Free Trial" in the dark band at the end. Contact: the visitor searches "Contact Zipla POS Support". The page promises "Contact Zipla POS support for billing software help, subscription questions, cancellation requests or refund requests." The action is the support e-mail, the phone number and "Message on WhatsApp".
What I read first, and what it changed in the plan: the gate cuts a text piece at every tag, and a baseline piece only has to be part of the new page's text, so wrapping words in a `<span>` is safe and changing a word is not. The FAQ page had always-visible `<h2>` questions and the pack's tab puts the heading inside `<summary>`. The pack's Contact tab shows no form and the repo's page has none. The two pages have no breadcrumb. The Stage 3 band needed one prop for Pricing.

Pre-mortem: how this PR could lose traffic or break the site, and the command that caught each.
1. Text lost or changed: G6, G7 and my word diff of `<main>` (removed words: none on all three pages. Added: 130 on Pricing, 15 on FAQ, 15 on Contact, all machine band words). Passed.
2. Heading changed, re-levelled or reordered: G5. Passed. The band adds no heading (the offer check flags any heading inside a band).
3. Link lost: G9. Passed. New links: Buy now (WARN), See pricing, Refund Policy.
4. Head tags or JSON-LD changed: G3, G4 and the frontmatter diff. Passed.
5. Hidden or generated text from CSS (R12): the gate cannot see it. Grep check 3 and the render test. Passed.
6. LCP slower: 3 runs per cell. Pricing is higher by 24 to 48 ms in the lab (section 6). Reported, not claimed away.
7. Layout shift: CLS 0.000 to 0.004.
8. Sideways scroll or small tap targets: `browser_check.py`, `fold_check.py`, my overflow script and the 48 px sweep. One real defect found and fixed (the e-mail link in the Contact route table). One more found and fixed while fixing the first (a `nowrap` on a long link pushed the page wider than 320 px).
9. Text that needs JavaScript: G6 reads built HTML. No `client:` directive on any new component and no new script.
10. An offer fact differs from OFFER.md: the offer check. Equal.
11. A string from OFFER.md section 4 reaches a page: G15, G7, the offer check's list and a grep of the build. None.
12. Buy now goes to a wrong address: the offer check compares every `href`, and there is no `.invalid` in the built pages. I cannot open the Razorpay link.
13. FAQ visible differs from JSON-LD: G8. 5, 18 and 4 questions, all in the built text.
14. An element id lost: G10. Passed.
15. New CSS leaks to other pages: every rule sits under `.zp`, the new files load only on these three pages. The 64 other browser-check rows and the HTML of the 16 other pages are the same as in the base.
16. The Pricing page loads an old sheet by accident: checked the CSS files of each page (section 6).
17. The sticky card floats over a later section: tested pinned and released at 1366 and 1024 px.
18. The FAQ page gets long: closed rows make it 2,213 px shorter at 390 px.
19. A protected file changed (`package.json`, `Layout.astro`, robots, sitemap, `_redirects`): `git diff --stat` and a name filter. None.
20. A prototype marker ships (`px-` class, `data-px-`, `buy-now-url`, `.invalid`, a yellow note): grep of the three built pages. None.

## Appendix B. What I tested

**Template first, then page by page.** I built the M card, the strip, the offer card and the two small component props first, then Pricing alone (build, snapshot, compare: 0 FAIL), then FAQ (G7 failed on `See pricing`, as predicted, then the allow line), then Contact (same), with a build, a snapshot and a `compare` after each.
**Screenshots and the pack's PNGs.** Three pages at 390x844 and 1366x768, set next to `png/first-screens/08_` to `10_`, and full-page slices (the build and the prototype tab side by side). Three differences per page and what I did about them are in Appendix C.
**Behaviour, overflow, hidden text, 48 px, identity of the other pages.** Section 11.

## Appendix C. Three differences per page against the pack's PNGs (BRIEF 4.4)

Method. Each page at 390x844 and 1366x768 (headless Chromium, consent choice saved so the cookie box is not in the picture, reduced motion so the receipt is at rest), set next to the pack's picture. FIXED means I changed the code and measured again. Common to all three, not a bug of this stage: the Header. The pack draws a transparent logo and three inline links on phones. The build has Stage 1's dark logo tile and menu button (Stage 1 report, section 2, items 2 and 3).

| page | difference 1 | difference 2 | difference 3 |
|---|---|---|---|
| Pricing | The fold numbers equal the pack's table in all 15 cells (703 / 459 / 564 at 390x844 and so on). No difference. | The plan slip: the pack draws "3 years prepaid ... ₹11,999" with a dotted leader. The repo's words are "₹11,999 for 3 years prepaid", so the build keeps that order. | The outlet rows: the pack draws only the name and an arrow icon. The build keeps the repo's second line with its text arrow and adds no icon. FIXED in this round: the gap above the offer card (20 px short), the bold "Refund Policy" link in the strip, and the terms table (last column too narrow on a phone). |
| FAQ | No breadcrumb (the repo has none). The card sits 28 px higher: H1 bottom 493 where the pack has 521 at 390x844. | The repo has two paragraphs that the pack's tab does not draw ("Quick answer", "Who this FAQ is for"). They stay. | The repo's laptop New Order picture beside the trial list (the pack's tab has none). The pack's phone picture shows other content, so no swap. FIXED in my own method: the lazy picture was blank in my first screenshot, my script now waits for every image. |
| Contact | No breadcrumb (the repo has none). | The small "Zipla POS" eyebrow above the H1: the repo has it, the pack's tab does not (BRIEF 13.7 item 4). | The contact rows come lower than in the pack because the repo has a lead-in, a "Who this is for" note and a "Short answer". FIXED in part (laptop height only): the whole "Short answer" with the support links is inside 1366x768 now. FIXED: the e-mail link in the route table overflowed into the next column at 390 px. |
