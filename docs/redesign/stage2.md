# Stage 2: Home (DRAFT)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-2-home`, created from `origin/redesign/integration` at `9421b3f8ff955cc9ff31a956bad8273016f08b17` (Stage 1 is merged there, PR #33). B0 (the build of `main` that Stage 0 recorded): `419cc531ac67c75ec5ab5384a3c5c9880b64dfca`.
Scope: the Home page `/` only. The look of the Round 7 Home tab and the machine offer of `OFFER.md`. Title, meta, canonical, robots and JSON-LD are untouched.
Buy now address: the Razorpay link from Kabir's prompt, kept once in `src/constants.js`. Claims: both PROOF lines say "none", so the claim line under "How do I start billing with the Zipla Billing Machine?" is not built.

## 1. In five lines

Gate: 0 FAIL, 3 WARN (G7 repeated words, G9 new links, G11 one old alt text). Browser check: ran, exit 1 (64 FAIL rows, 54 WARN rows; the base had 68 and 58). The 4 Home rows went from FAIL to ok. The 72 rows of the other 18 pages carry exactly the same text as in the base (compared row by row). 64 of them FAIL, as in the base. Per the Stage 1 report the cause is links in old page bodies, which are not in this stage.
Pages changed: 1 (`/`). Files changed: 20 (9 edited components, 3 new components, 1 new stylesheet, 2 images, the page, `constants.js`, 3 files in `docs/redesign/`). Base: `redesign/integration` at 9421b3f. B0: 419cc53.
Verdict: ready for your preview check. Five points need your OK (section 2).
Offer check: the strings of the machine band in the built HTML equal OFFER.md section 3: yes. I checked 49 strings, 5 attributes (two alt texts, the sample-bill aria-label, "Quick buy", "Zipla Billing Machine details") and the three Buy now links. No difference. The check is a script that tests each string twice: it is in OFFER.md, and it is a text piece of `dist/index.html`.
"10 minutes" and "no training needed" are not in the built page (grep of `dist/index.html`: 0 hits). `gate/forbidden.txt` is unchanged.

## 2. Needs Kabir's OK (at most five)

1. **Desktop order in the hero.** From 900 px the offer block (price slip, Buy now, Ask on WhatsApp) is drawn above the repo's "Short answer" and "Complete plan" paragraphs and above the "Book a WhatsApp Demo" button. The HTML order is unchanged (the repo's text first, Buy now after it), only the drawing changes. Reason: with the repo's paragraphs above it, the slip would start below 670 px on a 1366x768 laptop (seen in my first screenshot, not measured with a tool), so Buy now would end far below the fold. With the offer drawn first, Buy now ends at 743 px. BRIEF A5 says not to reorder with CSS, except the phone picture (D1), so this is a second exception. Cost: on a laptop the keyboard goes to "Book a WhatsApp Demo" before "Buy now" while the eye sees Buy now first. If you say no: swap the rows `"buy vis"` and `"more vis"` in `grid-template-areas` of `.zh-hero` (`src/styles/home.css`, the 900 px block). Buy now then moves below the fold on laptops.
2. **"Book a WhatsApp Demo" is no longer the first action.** `fold_check.py` finds it as the first link after the H1 and reports WARN at all five viewports (its bottom is at 1026 to 1093 px). On phones the repo's sentences come before it (the order in your Stage 2 prompt), on laptops the offer comes before it. Buy now is the main action now, as the sticky bar and the price slip show. The repo's button is still on the page, as a ghost button.
3. **Dropped, as you asked.** The old customer-menu screenshot figure (`/screenshots/ss-customer-menu.webp`, its label and caption "Actual Zipla POS QR customer-menu screen.") is gone from the Table QR panel. Two lines in `allow_removed.txt` (section 7). I did not replace it. Also dropped: the two small shop drawings on each of the six outlet cards (inline SVG, decoration, no text). The outlet cards are text rows now, as in the prototype. Say if you want the drawings back.
4. **The repo's laptop figure stays.** The prototype has a different hero picture, so the repo's laptop picture (`ss-new-order.webp`), its two callouts ("Counter billing", "Kitchen handoff"), "zipla POS / Built around your service workflow" and the caption sit as a proof block under the offer. I kept them because the gate fails when repo text disappears and you said repo words and images stay. If you want them gone, that is an `allow_removed.txt` decision for you, not for me.
5. **The two prices side by side.** The repo's plan line "₹4,999/year or ₹11,999 for 3 years prepaid" and the machine "₹4,999" are in the same hero. A visitor can read them as one offer. You accepted this risk in OFFER.md section 7. I changed no word of either.

## 3. Check these on your phone (the Cloudflare preview link is in the comments)

- Home, top: machine photo, then "ZIPLA BILLING MACHINE" and "FOR INDIAN FOOD BUSINESSES", the H1, and the bar at the bottom with the price and Buy now. Tap Buy now: it must open your Razorpay link in a new tab. I did not open it (section 10).
- Scroll down: the slip with "Ask on WhatsApp", "Start 14-Day Free Trial" and "No credit card required", then the repo's laptop picture, the strip (What you get, Warranty, Delivery), and the three steps. The steps have no "10 minutes" line.
- The plan section: the yellow card with "Buy now" at its end.
- FAQ: tap one question, it opens. Demo form: submit with empty fields shows three errors, filled opens WhatsApp. Cookie box on a first visit: Reject, Manage and Allow still work.
- Anything blank, overlapping, missing or new in text: tell me.

## 4. Gate table

`compare` against the build of `origin/redesign/integration` (base). Exit 0.

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
| G9 | Links kept, no broken internal link or anchor | 18 | 1 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 18 | 1 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

**WARN (3)**
- G7 /: same words, but repeated more often than baseline (duplicated block?): policy +1, pricing +1, refund +1, see +1
- G9 /: new link(s): https://rzp.io/rzp/ygTqBnl, https://wa.me/917817851009
- G11 /: baseline alt text no longer used: 'Actual Zipla POS customer menu screen used for QR '

Why each WARN is fine:
- G7: "See pricing" is a new link in the offer block (the repo had it once, in the table). "Refund Policy" is a new link in the strip (the repo had it in the footer). Each adds `see`, `pricing`, `refund`, `policy` one more time. Nothing is duplicated by mistake.
- G9: the two new links are Buy now (`https://rzp.io/rzp/ygTqBnl`, three anchors) and Ask on WhatsApp (`https://wa.me/917817851009`). Both are in OFFER.md. Both have `target="_blank"` and `rel="noopener noreferrer"`.
- G11: the old alt text "Actual Zipla POS customer menu screen used for QR ordering" is gone with the dropped figure. The printer photo is the first image in `<main>` and has `fetchpriority="high"`, so the fetchpriority WARN does not appear.

## 5. Pages in this PR

| URL | H1 (unchanged) | archetype | components used | fold 390x844: H1 bottom, price, Buy now | fold 1366x768 |
|---|---|---|---|---|---|
| / | Restaurant Billing Software for India | 1 Home | machine stage, buy slip, sticky bar, trust row, strip, how-it-starts band, two-column text, table, outlet rows, workflow panels, checklist, bento tiles, offer card, FAQ details, dark band with the form | 542, 832, 834 (price and Buy now are in the sticky bar) | 235, 631, 743 |

All five viewports, measured on the build with my own script (`fold_check.py` reports only the H1 and the first link). H1 bottom / price bottom / Buy now bottom. "bar" is the sticky bar, which is fixed at the bottom of the screen. Buy now is 56 px high in the slip (the pack's large button) and 48 px high in the sticky bar and in the offer card (measured).

| viewport | H1 bottom | price | Buy now | pack prototype (DESIGN_SYSTEM 14.5) |
|---|---|---|---|---|
| 320x640 | 482 | bar, 630 | bar, 625 | 438 / bar / bar |
| 360x640 | 516 | bar, 630 | bar, 625 | 472 / bar / bar |
| 390x844 | 542 | bar, 832 | bar, 834 | 498 / bar / bar |
| 414x896 | 563 | bar, 884 | bar, 886 | 519 / bar / bar |
| 1366x768 | 235 | 631 | 743 | 207 / 599 / 711 |

The H1 is 28 to 44 px lower than in the prototype. The repo's second eyebrow "For Indian food businesses" adds a line above it. I did not measure how much of the difference comes from that line and how much from the repo's header, which differs from the prototype's. No type is smaller than the token sizes. At 320x640 and 360x640 the H1 and the bar are inside the first screen. No sideways scroll at 320, 360, 390, 414 and 1366 (`fold_check.py`: 0 cases, and `scrollWidth` equals the window width in my script).
`fold_check.py` output for `/` (its "action" is the first link after the H1, "Book a WhatsApp Demo", see section 2, item 2):
`320x640 h1 411-482 action 1045-1093 WARN`, `360x640 h1 446-516 action 978-1026 WARN`, `390x844 h1 471-542 action 979-1027 WARN`, `414x896 h1 492-563 action 1000-1048 WARN`, `1366x768 h1 131-235 action 1038-1086 WARN`. In the base (measured again on the base build, same tool): `320x640 action 679-723 WARN`, `360x640 631-675 WARN`, `390x844 631-675 ok`, `414x896 610-654 ok`, `1366x768 589-633 ok`, with the H1 ending at 313 px on phones and 352 px at 1366.

## 6. Numbers, base and new

Lab numbers: Chromium 153 headless on localhost, no throttling, 3 runs per cell, median shown. Compare them only with each other.

| metric | base | new |
|---|---|---|
| LCP, Home, 360 / 390 / 768 / 1280 px (median of 3) | 136 / 124 / 168 / 152 ms | 116 / 116 / 124 / 120 ms |
| LCP element, Home | h1 / h1 / ss-new-order img / ss-new-order img | printer photo at 390, 768, 1280. At 360: the printer photo in my 3 runs, a paragraph in both `browser_check.py` runs (the two areas are close) |
| CLS, Home, same widths | 0 / 0 / 0 / 0 | 0.002 to 0.004 at 360, 0 at the other three |
| CSS gzip (G16) | 29,389 B | 34,662 B (+5,273) |
| JS gzip (G16) | 49,803 B | 49,789 B (-14) |
| fonts in the build | 222,984 B | 222,984 B |
| images in the build | 635,244 B | 758,904 B (+123,660 = the two pack images, 82,008 + 41,652) |
| HTML, all pages | 837,371 B | 764,593 B (-72,778) |
| Home HTML | 137,301 B | 64,523 B |
| Home words (inventory.py) | 1,925 | 2,181 |
| Home images | 11 | 12 (printer photo and phone picture added, customer-menu figure dropped) |
| Home links (internal / external) | 41 / 0 | 43 / 4 |
| browser_check, Home rows at 360 / 390 / 768 / 1280 | FAIL 6, 4, 5, 7 targets under 24 px, WARN 8, 10, 10, 8 targets under 48 px | ok, ok, ok, ok (0 FAIL, 0 WARN) |

Honest reading: the spread between runs is up to 76 ms (base 360: 208, 132, 136), so I claim no speed gain. CLS is far below 0.1, so no fallback font faces were added. The rupee sign sits in the latin-ext Bricolage file. I did not add a preload for it. The shift at 360 px (0.002 to 0.004) is the only one I measured. The Home HTML is 72,778 B smaller in total. I did not measure which part: the 12 inline shop drawings and the inline `<style>` blocks of three components are gone.

## 7. Allow-list entries added

`docs/redesign/allow_new.txt`: the pack's `offer/allow_new.txt` appended as it is (its comment lines too). Every line is a text piece of the machine offer (OFFER.md section 3). Lines under "Allow-list entries":

- `Zipla Billing Machine`
- `₹4,999`
- `With 12 months of Zipla POS. Delivery in 3 to 4 days.`
- `Buy now`
- `with 12 months of Zipla POS:`
- `Zipla Billing Machine is a 58mm Bluetooth printer. It comes with 12 months of Zipla POS for ₹4,999. Zipla POS is simple, fast billing software made for your phone.`
- `Zipla Billing Machine with 12 months of Zipla POS`
- `1 × 58mm Bluetooth printer`
- `included`
- `1 × Zipla POS, 12 months`
- `Total`
- `To continue after 1 year, Zipla POS is ₹4,999 a year.`
- `Ask on WhatsApp`
- `Machine + 12 months of Zipla POS`
- `What you get`
- `Zipla Billing Machine and 12 months of Zipla POS`
- `Warranty`
- `1 year on the motherboard. Repair, not replacement. No cover for physical damage. Terms are in the`
- `.`
- `Delivery`
- `3 to 4 days`
- `How do I start billing with the Zipla Billing Machine?`
- `01`
- `Order`
- `Buy the Zipla Billing Machine online. It is delivered in 3 to 4 days.`
- `02`
- `Connect`
- `Pair the printer over Bluetooth, log in to Zipla POS and add your menu.`
- `03`
- `Bill`
- `Print GST bills and KOTs and take QR orders.`
- `Machine and software`
- `One 58mm Bluetooth printer and 12 months of Zipla POS. To continue after 1 year, Zipla POS is ₹4,999 a year. Delivery in 3 to 4 days.`
- `Sample bill`
- `Paneer Masala`
- `280.00`
- `Butter Naan x3`
- `150.00`
- `Lime Soda x2`
- `140.00`
- `Subtotal`
- `570.00`
- `GST 5%`
- `28.50`
- `TOTAL`
- `598.50`
- `Thank you, visit again`
- `Payments are processed by Razorpay. Questions before you pay? Message us on WhatsApp at +91 7817851009.`

Not in the list on purpose: the claim lines of `offer/allow_new_claims.txt` (no PROOF line). Some lines belong to the M card and the S band of later stages (`with 12 months of Zipla POS:`) or to the L band (`With 12 months of Zipla POS. Delivery in 3 to 4 days.`). They are in the pack's file, I appended the file whole, and the Home page does not use them. The gate cannot tell. If you prefer a Home-only list, say so.

`docs/redesign/allow_removed.txt`: two lines, both scoped to `/`. Reason: your instruction to drop the old customer-menu figure (`images/ASSETS.md`, "Left out on purpose").
- `/ || Actual Zipla POS QR customer-menu screen.` (the caption of the dropped figure)
- `/ || Actual Zipla POS screen` (the label above the dropped figure). The same label is above four other figures that stay. A line matches every copy of that text, so the gate no longer counts those four for this label. I counted with `grep -o` on `dist/index.html`: the string "Actual Zipla POS screen" occurs 6 times in the base and 5 times in the new build. One of the 5 is the start of the sentence "Actual Zipla POS screens are marked". The other 4 are the labels of the figures that stay (new order, kitchen display, day-close report, analytics dashboard).

## 8. Deviations from the pack

1. **Class names.** New Home classes carry the prefix `zh-` (the pack's names are `hero`, `eyebrow`, `btn` and so on). The old stylesheet `src/index.css` has a `.hero`, an `.eyebrow`, a `.btn-ghost` and more, and Home still loads it (the cookie banner's `position: fixed` lives there). A prefix cannot clash. The three Buy now links carry `btn btn-gold` as well, as your prompt wrote them.
2. **Hero text is split in two blocks** (`zh-hero-top`, `zh-hero-more`) so that the offer can be drawn above the second block from 900 px (section 2, item 1). On phones they read as one block.
3. **Machine paragraph position.** "Zipla Billing Machine is a 58mm Bluetooth printer. ..." follows the repo's first sentence (as in the prototype) and comes before the repo's "Short answer:" paragraph. The first paragraph after the H1 is still the repo's own sentence (BRIEF A8).
4. **Two eyebrows.** "Zipla Billing Machine" (OFFER.md 3.7) and the repo's "For Indian food businesses". The gate needs the second one.
5. **Trial line.** The prototype writes "No credit card required." with a full stop. The repo's wording has none, so there is none. The tick mark is the repo's own `✓`. The repo's three assurances are kept: the first sits in the trial line, the other two below it, then the two chips ("Supported thermal printing", "Android, tablet & Windows PC").
6. **Links.** OFFER.md lists `https://zipla.in/pricing/` and `https://zipla.in/refund-policy/`. The repo writes internal links as `/pricing/` and `/refund-policy/`, so I did too. Same targets. The gate counts both forms as internal.
7. **Sticky bar** is `position: fixed` (OFFER.md: "fixed to the bottom") and the prototype's is `sticky`. The footer gets 76 px of space at the bottom on phones so the bar never covers the last links. It is hidden from 900 px.
8. **Workflow pictures.** The prototype shows nine phone screenshots in phone frames. You said images stay the repo's, so the repo's illustrations and laptop screenshots stay and the phone strips are not built. I did not compare the repo's laptop pictures with the pack's phone pictures (D6 needs "same screen, same content"). Nothing swapped.
9. **Tables.** The Features table was a grid of `div`s in the repo. It is a real `<table>` now (R7), with the two column labels visible, as in the baseline. The text is the same.
10. **Check marks.** The green check icons of the plan list (raw colour `#16a34a` in the repo) are gone. The bullets are gold squares drawn by CSS. The Features list uses the same bullets. These icons were inline SVG, not text.
11. **Tap areas.** Links inside table cells and in the strip got a 48 px tap area (padding with a negative margin), so the sentence does not change.
12. **Light colour scheme.** `html:has(body.zp) { color-scheme: light }` so form controls and scrollbars are light. It does not read the old theme attribute. `data-theme="dark"` is still on `<html>` (Stage 1 left it). I tested a saved `zipla-theme` value of `dark` and of `light`: the page is light in both cases (body background `rgb(248, 245, 238)`).
13. **Pack images** copied byte for byte (sha256 equal) to `public/images/hero-printer-billing-machine.webp` (760x1025) and `public/images/screen-dashboard.webp` (720x1465). The printer photo has `fetchpriority="high"`, not lazy. The phone picture is not lazy either (it is in the first screen).
14. **`gate/forbidden.txt` is not edited** (no PROOF line). Nothing from `offer/allow_new_claims.txt` was appended.

## 9. Noticed, not changed

1. Old rules in `src/index.css` that no Home markup uses any more: `.hero*`, `.trust-*`, `.buyer-answer*`, `.biz-*`, `.workflow-*`, `.qa-*`, `.price-*`, `.faq-*`, `.demo-form*`, `.section-head`. They are not deleted (R13). Other pages may still use some of them. I did not check. `src/components/IndustryShopScene.jsx` is not used any more, and `Testimonials.jsx` was not used before. Suggestions for Stage 6, not done.
2. The skip link target is still the empty `div#zp-content` (Stage 1). `<main>` has no id.
3. Keyboard order on laptops: see section 2, item 1.
4. In the baseline the hero callouts were hidden below 561 px by the old CSS. They are visible on every width now. That is the repo's text, so I showed it.
5. The Workflow panels are `<details name="workflow-accordion">`, so opening one closes the others. The repo did that already.
6. Heading levels: none skipped, none changed (G5 PASS). The H4 plan group titles sit under the H3 "Complete plan", as before.

## 10. Not verified

- The Buy now link. I have no network access to Razorpay. I did not open `https://rzp.io/rzp/ygTqBnl`. Please tap it once.
- The wa.me link in a real WhatsApp app.
- Whether the real device panel says "Billing Machine" (OFFER.md section 5). Whether 4,999 rupees includes GST. Both are open items of OFFER.md.
- The Cloudflare preview: I cannot see it from here. I do not know if previews are on for this branch.
- Real phones. I used headless Chromium at 320, 360, 390, 414, 768 and 1366 or 1280 px. No screen reader, no Safari, no Firefox.
- Lighthouse. I did not run it.
- That the dropped customer-menu picture is the one that shows the old GST label (ASSETS.md says "PR #21 changed the GST label"). I removed the figure you named by its role. I did not compare it with an older picture.
- Search effect. A redesign tries to lose nothing. It does not raise ranking by itself.

## 11. Commands run

```
sha256sum /tmp/pack.zip   # e620d65d... equals the expected value
unzip -q /tmp/pack.zip -d /tmp/pack
python3 -I /tmp/pack/redesign-ref-r7/gate/selftest.py   # last line SELFTEST OK
python3 -m venv /tmp/pwvenv && /tmp/pwvenv/bin/pip install playwright==1.63.0
git fetch origin redesign/integration
git switch -c redesign/stage-2-home origin/redesign/integration
npm ci && npm run build        # base, exit 0; then cp -r dist /tmp/base_dist
python3 -I .../gate/seo_gate.py snapshot /tmp/base_dist /tmp/base.json
npm run build                  # after every round of changes
python3 -I .../gate/seo_gate.py snapshot dist /tmp/new.json
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --forbidden /tmp/forbidden_stage2.txt --report /tmp/gate_report.md
/tmp/pwvenv/bin/python -I .../gate/browser_check.py dist --out /tmp/shots --target-min 48
/tmp/pwvenv/bin/python -I .../gate/fold_check.py dist --only /
```
Also my own scripts (not committed): fold positions of H1, price and Buy now at the five viewports, LCP and CLS (3 runs per cell), the offer-string diff against OFFER.md, and a behaviour test (cookie Reject, FAQ, workflow panels, the demo form, the sticky bar, reduced motion, a saved theme value). The five static checks of BRIEF section 9: no raw colour, no font stack outside the tokens, no `content:` text, only the details markers and the sticky bar use `display: none`, no dependency change, no new `<script>`.
`/tmp/forbidden_stage2.txt` is a copy of `gate/forbidden.txt`, not edited.
