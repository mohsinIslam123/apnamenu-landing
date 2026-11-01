# Stage 5b: Shipping policy and warranty (DRAFT)

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-5b-shipping-warranty`, created from `origin/redesign/integration` at `25dbe675a37239177e521e585afefcc071eb0253` (Stages 0 to 5 are merged there: pull requests [32](https://github.com/mohsinIslam123/apnamenu-landing/pull/32) to [37](https://github.com/mohsinIslam123/apnamenu-landing/pull/37)). B0 (the build of `main` that Stage 0 recorded, `docs/redesign/B0_SHA.txt`): `419cc531ac67c75ec5ab5384a3c5c9880b64dfca`.
Scope: the new page `/shipping-policy/` with its Footer link, two warranty paragraphs in `/refund-policy/`, and (Part 1, its own commit) the delivery wording "3 to 4 working days after dispatch" in four strings.
Every word of the new page and of the two paragraphs is Kabir's, copied from his prompt. I wrote no policy word. No heading of any level was added inside these texts. Title, meta, canonical and JSON-LD of existing pages, `Layout.astro`, `astro.config.mjs`, `package.json`, `public/` and `_redirects` are untouched. No CSS file is in the diff. The Buy now address is the one that Stage 2 put in `src/constants.js`. The prompt has no PROOF line, so `gate/forbidden.txt` is unedited and "10 minutes" and "no training needed" are not built.

## 1. In five lines

Gate: 1 FAIL, 19 WARN. The FAIL is G1: `sitemap-0.xml` changed, because it now lists `/shipping-policy/` (you asked for the page, and the gate cannot silence a changed sitemap). The 19 WARN are G9: the new Footer link, once per old page. Browser check: ran, exit 0 (80 rows, 0 FAIL, 0 WARN with the 48 px rule. The base: 76 rows, 0 and 0).
Pages changed: 20 (1 new, 19 old). Files changed: 12 (9 in `src`, 2 allow lists, this report). Base: `redesign/integration` at 25dbe67. B0: 419cc53.
Verdict: ready for your preview check. Five points need your OK (section 2). Part 1: `price_sync_check.py` prints PRICE-SYNC OK.
Offer check: the band strings in the built HTML equal OFFER.md section 3 except four delivery strings, by your decision of 2026-11-01 (section 8, item 1). With your wording applied to OFFER.md the difference is 0 on all 8 pages, both ways. The four S bands (Privacy, Terms, Refund, Shipping) equal 3.5 and are byte for byte the same.
Nothing else changed: the 19 old pages equal the base plus this stage's changes, page by page, stylesheet names included (section 11).

## 2. Needs Kabir's OK (at most five)

1. **"Repair, not replacement" against "it is replaced within 7 days".** The strip on Home and Pricing says: "1 year on the motherboard. Repair, not replacement. ... Terms are in the Refund Policy." Your paragraph says "with repair support" and then "If the hardware has a manufacturing defect, it is replaced within 7 days of delivery". The shipping page says "We send a free replacement" for damage in transit. All three can be true together (replace in the first 7 days, repair for the rest of the year), but a reader of the strip alone sees "not replacement". OFFER.md section 5 said this paragraph "must say ... repair not replacement". I changed no word anywhere. If you want the strip changed, give me the new words: it is a separate small change.
2. **The two warranty paragraphs have no heading, so they sit under the H2 "How can you contact Zipla POS about this policy?"** (after its contact box, before the FAQ), as you asked. A reader and a search engine see them as part of the contact section. Default: as built. If you say no, give me a heading text (I write none) or tell me to move them above the contact section.
3. **The Refund page still says "Last updated: August 25, 2026"** (and `dateModified` 2026-08-25 in its JSON-LD), but it now has two new paragraphs. I changed neither: the date line is the repo's and JSON-LD is off limits (R3). Tell me the date you want. A new `dateModified` needs your word for R3.
4. **"The price of ₹4,999 includes everything. You pay no tax or extra charge at delivery."** OFFER.md section 5 lists "GST on 4,999 rupees" as open, "Kabir, with the CA", and "Box contents" as not confirmed. This sentence now answers the tax question on a public page. I do not know whether it is true. The Terms page says prices "are inclusive of applicable taxes" (line 109). Default: published as you wrote it.
5. **The longer delivery line costs about 20 px on 7 pages.** "Delivery in 3 to 4 working days after dispatch" wraps onto one more line in the price row of Pricing and the six business pages at 320, 414 and 1366 px wide. Buy now stays inside the first screen at all five tool viewports, but at 1366x768 the card now ends at 767 of 768 px and Buy now at 747 (was 727), and at 1280x720 Buy now was already below the fold in the base (727) and is at 747 now. Home does not move. Default: left as it is (shorter words are yours to choose, and type may not go below the token sizes). Numbers in section 5.

## 3. Check these on your phone (the Cloudflare preview: the check "Cloudflare Pages" under the pull request's checks)

- `/shipping-policy/`: the slim band with the printer, then the H1 with the gold bar under "Shipping Policy", then six lines, the last one in a box. Tap Buy now: it must open your Razorpay link in a new tab (I did not open it). Tap the e-mail address: it opens your mail app. Read the six lines once as a customer.
- Any page, bottom: in the dark footer, "Shipping Policy" sits between "Refund Policy" and "Contact Us". Tap it.
- `/refund-policy/`: scroll to the contact box. The two warranty paragraphs follow it, then the FAQ heading.
- Pricing, the Cafe page, Home: find the delivery line (price row, strip, step 01, offer card). It must read "3 to 4 working days after dispatch" everywhere.
- Anything blank, overlapping, missing or new in text: tell me.

## 4. Gate table

`compare` against the build of `origin/redesign/integration` (base), `--allow-new-page /shipping-policy/`, allow lists as committed, `--forbidden` is the pack's `gate/forbidden.txt`. Exit 1, because of the one FAIL.

| Line | Check | PASS | WARN | FAIL |
|---|---|---|---|---|
| G1 | Files, sitemap, robots, llms, redirects, headers | 4 | 0 | 1 |
| G2 | Same page URLs, sitemap URLs all built | 2 | 0 | 0 |
| G3 | title, meta, canonical, hreflang, html lang | 19 | 0 | 0 |
| G4 | JSON-LD identical | 19 | 0 | 0 |
| G5 | Headings: H1, no heading added, removed or re-levelled | 19 | 0 | 0 |
| G6 | Baseline text still present | 19 | 0 | 0 |
| G7 | No new text | 19 | 0 | 0 |
| G8 | FAQ questions and answers visible | 19 | 0 | 0 |
| G9 | Links kept, no broken internal link or anchor | 0 | 19 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 19 | 0 | 0 |
| G12 | Scripts and third-party hosts | 19 | 0 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

**FAIL (1)**: `G1 (global): SEO file changed (sha256 differs): sitemap-0.xml`. Why: the sitemap is generated by `@astrojs/sitemap` and now lists one more URL. I compared the two files as sets: 18 URLs in the base, 19 now, added `https://zipla.in/shipping-policy/`, removed none, no duplicate. `sitemap-index.xml`, `robots.txt` and `_redirects` are byte for byte the same. No config was touched. The gate has no switch for this line, and I did not edit the gate.
**WARN (19)**: `G9` on every old page, `new link(s): /shipping-policy/`. It is the Footer link. The gate checks that a new internal link points to a page that is built: it does (no G9 FAIL). The page exists only because of this PR.
G2: without `--allow-new-page` it prints `FAIL: new page(s) not allowed: /shipping-policy/`. With the flag it passes (2 PASS lines).
The new page is not in the per-page lines G3 to G16, because the gate only compares pages that exist in both builds. I did those checks by hand (section 11, `verify_all.py`): head, one JSON-LD block equal to the shared graph, one H1, text equal to your file, the band, the links, the Footer.
Proof that each allow line is needed, each from a run of `compare`: without any Part 1 line, G6 and G7 FAIL on 8 pages (16 lines, section 8). With only the new lines, G6 FAILs on 8 pages. With only the removed lines, G7 FAILs on 8 pages. Without the line `Shipping Policy`, G7 FAILs on all 19 pages (new text `Shipping Policy`, new word `shipping`). Without the two paragraph lines, G7 FAILs on `/refund-policy/` (2 new segments).
G15 passes. I also ran the gate's own forbidden counter (58 patterns: the built-in list and `forbidden.txt`) on every new text, the title and the meta description: 0 hits.

## 5. Pages in this PR

| URL | H1 | archetype | components used | fold 390x844: H1 bottom / price / Buy now | fold 1366x768 |
|---|---|---|---|---|---|
| /shipping-policy/ (new) | Zipla Billing Machine Shipping Policy | 8 Legal | band S, reading column, six paragraphs, contact box. No eyebrow, date line, FAQ or JSON-LD | 287 / 120 / 179 | 298 / 113 / 129 |
| /refund-policy/ | Zipla POS Cancellation & Refund Policy (unchanged) | 8 Legal | the Stage 5 page plus two paragraphs after the contact box | 323 / 120 / 179 (same as base) | 333 / 113 / 129 (same as base) |
| / | unchanged | 1 Home | 3 delivery strings (strip, step 01, offer card) | not moved at any of 5 viewports | not moved |
| /pricing/ and the 6 business pages | unchanged | 3 and 2 | delivery line in the price row (Pricing also strip and offer card) | not moved | Buy now 727 to 747 (item 5) |
| the other 10 pages (FAQ, Contact, blog index, 4 guides, Privacy, Terms, 404) | unchanged | | Footer link only | not moved | not moved |

All five viewports for the two pages (my script, H1 bottom / price bottom / Buy now bottom; `fold_check.py` reports only the H1 and the first link). Buy now is 48 px high and See pricing 48 px on both pages.

| page | 320x640 | 360x640 | 390x844 | 414x896 | 1366x768 |
|---|---|---|---|---|---|
| /shipping-policy/ | 323 / 120 / 179 | 287 / 120 / 179 | 287 / 120 / 179 | 287 / 120 / 179 | 298 / 113 / 129 |
| /refund-policy/ (base: the same) | 358 / 120 / 179 | 358 / 120 / 179 | 323 / 120 / 179 | 323 / 120 / 179 | 333 / 113 / 129 |

H1, price and Buy now of both pages are inside the first screen at all five viewports. No sideways scroll at 320, 360, 390, 414 and 1366 (`fold_check.py`: 0 cases) and at 8 widths from 320 to 1366 (my render test). At 390x844 the new page equals the pack's Privacy row (287 / 120 / 179). At 1366x768 its H1 ends at 298 where the pack's row says 246, because my H1 is longer and breaks into two lines. `fold_check.py`: the new page has 2 WARN (320x640 and 360x640): its "action" is the first link after the H1, which is the e-mail link at the end of the page, not Buy now. Buy now sits above the H1 in the band and is inside the first screen. The Refund page has the same 3 WARN as in the base.

The 7 pages with the L band, where the delivery line is one line longer. Base against new, H1 / price / Buy now, measured on the build, Cafe shown (the other six move by the same 19 to 20 px). A line is a text line of the delivery paragraph.

| viewport | base | new | what happened |
|---|---|---|---|
| 320x640 | 686 / 421 / 527 (2 lines) | 705 / 421 / 546 (3 lines) | H1 was below the fold before and still is. Buy now inside |
| 360x640, 390x844 | 720 / 456 / 561, 723 / 459 / 564 | the same | the line already had 2 lines |
| 414x896 | 704 / 480 / 565 (1 line) | 724 / 480 / 585 (2 lines) | inside |
| 1366x768 | 259 / 641 / 727 (1 line) | 259 / 641 / 747 (2 lines) | inside. The card edge goes from 747 to 767 of 768 px |

`fold_check.py` on the whole site: base 41 WARN in 95 rows, new 43 WARN in 100 rows. The two added are the new page. None of the 95 shared rows changed its status (14 rows have other numbers: the 7 pages at 320 and 414 px). Home is the same in all 5 viewports.

## 6. Numbers, base and new

Lab numbers: Chromium 153 headless on localhost, no throttling, 3 runs per cell with a fresh browser context for each run, median shown. Base and new were measured in the same session. Compare them only with each other.

| metric | base | new |
|---|---|---|
| LCP, /refund-policy/, 360 / 390 / 768 / 1280 px | 180 / 160 / 144 / 184 ms | 168 / 144 / 156 / 148 ms |
| spread of the 3 runs in one cell, widest | 88 ms | 60 ms |
| LCP, /shipping-policy/, same widths | not in base | 132 / 132 / 132 / 164 ms |
| LCP element | a paragraph (4 of 4) | Refund: a paragraph (4 of 4). Shipping: a paragraph at 360, 390 and 768, the H1 at 1280 |
| CLS | Refund 0.001 / 0.001 / 0.001 / 0.000 | Refund the same. Shipping 0.000 in all 12 runs |
| CSS gzip (G16) | 23,485 B | 23,485 B (+0) |
| JS gzip (G16) | 49,789 B | 49,789 B (+0) |
| fonts in the build | 222,984 B | 222,984 B |
| images in the build | 758,904 B | 758,904 B (no new file) |
| HTML, all pages | 750,563 B | 776,283 B (+25,720: the new page 23,721 B, the 19 old pages together +1,999 B) |
| largest HTML | `/` 64,523 B | `/` 64,656 B |
| stylesheet links of the new page | | the same 6 files as Privacy, Terms and Refund. Old pages: same names as before |
| page height at 390 / 1366 px, /refund-policy/ | 4,880 / 3,622 px | 5,332 / 3,859 px (+452 / +237) |
| page height at 390 / 1366 px, /shipping-policy/ | not in base | 1,372 / 998 px |
| browser_check, `--target-min 48` | exit 0, 76 rows, 0 FAIL, 0 WARN | exit 0, 80 rows, 0 FAIL, 0 WARN |
| controls under 48 px, my script | | 0 of 48 (Buy now, See pricing, the e-mail link at 8 widths on 2 pages) and 0 of 160 (the Footer link on 20 pages at 8 widths) |

Honest reading. The medians for Refund are inside the run-to-run spread (up to 88 ms), so I claim no change in either direction. CLS is far below 0.1, so no fallback font faces were added. The new page adds no image file, no CSS file, no script and no font.

## 7. Allow-list entries added

`docs/redesign/allow_new.txt`: 4 comment lines and 7 text lines.
- Part 1, the four new delivery pieces (plain lines, as Stage 2 did for the old ones): `With 12 months of Zipla POS. Delivery in 3 to 4 working days after dispatch.`, `3 to 4 working days after dispatch`, `Buy the Zipla Billing Machine online. It is delivered in 3 to 4 working days after dispatch.`, `One 58mm Bluetooth printer and 12 months of Zipla POS. To continue after 1 year, Zipla POS is ₹4,999 a year. Delivery in 3 to 4 working days after dispatch.` Reason: your decision of 2026-11-01. They are the text pieces that the gate's splitter cuts.
- `Shipping Policy` (plain line). Reason: the new Footer link. The Footer is the same component on every page, so the text is new on every page of the base. A plain line is the exact rule.
- Two lines `/refund-policy/ || <paragraph>`, one for each warranty paragraph, word for word. Reason: your two paragraphs.

`docs/redesign/allow_removed.txt`: 2 comment lines and 12 text lines. **Your prompt named `allow_new.txt` only.** I added these as well, because without them G6 FAILs on 8 pages (section 4, control). They are the four old pieces, one line per page so that a line cannot hide a loss on another page: `/` (3 lines: the strip value, step 01, the offer card text), `/pricing/` (3 lines: the price row, the strip value, the offer card text) and the six business pages (1 line each: the price row). If you do not want them, say so: the gate then shows 8 G6 FAIL.
The four old lines of Stage 2 stay in `allow_new.txt`, unused now (section 9, item 5).

## 8. Deviations from the pack

1. **Delivery wording (Part 1). Kabir decided on 2026-11-01 that delivery is "3 to 4 working days after dispatch". This overrides OFFER.md 3.1, 3.7 and 3.8 for four strings only.** I did not edit OFFER.md or anything in the pack. `grep -rn "3 to 4 days" src` found 6 hits in 6 files, which are the 4 strings of the earlier report, and no other hit (a wider grep for other spellings of the delivery time and for "deliver" found nothing else). Replaced literally in `MachineBand.jsx` (price row, 7 pages), `MachineStrip.jsx` (strip value, Home), `OfferStrip.jsx` (strip value, Pricing), `HowItStarts.jsx` (step 01, Home), `Pricing.jsx` (offer card text, Home) and `OfferCard.jsx` (offer card text, Pricing).
   - `price_sync_check.py /tmp/base.json /tmp/p1b.json /tmp/rules_5b.txt`, with one rule line, `3 to 4 days => 3 to 4 working days after dispatch`: `price_sync_check: 1 rules, 1 fired, 8 pages differ from base` and `PRICE-SYNC OK`. Run on the build of the Part 1 commit `4503224` (a second build of that commit is byte for byte the first).
   - The normal gate on that commit, with the allow lists of the base: **16 FAIL lines, 0 WARN**. Every line is below. The gate cuts each text at 90 characters, so here are the full strings. G7 also says on every page: `words not in baseline: dispatch, working`.

| page | G6, text missing (8 lines) | G7, new text (8 lines) |
|---|---|---|
| `/` | `3 to 4 days` / `Buy the Zipla Billing Machine online. It is delivered in 3 to 4 days.` / `One 58mm Bluetooth printer and 12 months of Zipla POS. To continue after 1 year, Zipla POS is ₹4,999 a year. Delivery in 3 to 4 days.` | the same three with `3 to 4 working days after dispatch` |
| `/pricing/` | `With 12 months of Zipla POS. Delivery in 3 to 4 days.` / `3 to 4 days` / `One 58mm Bluetooth printer ... Delivery in 3 to 4 days.` | the same three with `3 to 4 working days after dispatch` |
| `/restaurant-pos-software/`, `/cafe-pos-software/`, `/bakery-billing-software/`, `/sweet-shop-billing/`, `/qsr-billing-software/`, `/dhaba-billing-software/` | `With 12 months of Zipla POS. Delivery in 3 to 4 days.` (one line on each page) | `With 12 months of Zipla POS. Delivery in 3 to 4 working days after dispatch.` (one line on each page) |

   - With the allow lists of this PR the same compare shows 0 FAIL and 0 WARN on that commit.
   - **The offer check differs from OFFER.md in these four strings only**: `With 12 months of Zipla POS. Delivery in 3 to 4 days.` (3.1 and 3.3), `3 to 4 days` (3.7 strip), `Buy the Zipla Billing Machine online. It is delivered in 3 to 4 days.` (3.7 step 01) and `One 58mm ... Delivery in 3 to 4 days.` (3.8). My script reads these four out of the pack's OFFER.md itself. Against OFFER.md as written, 8 pages differ. Against OFFER.md with your wording, 0 pages differ.
2. **The sitemap lines (Part 2), both listed as you asked.** G1: `SEO file changed (sha256 differs): sitemap-0.xml` (FAIL). G2: `new page(s) not allowed: /shipping-policy/` without the flag, passes with `--allow-new-page /shipping-policy/`. Details in section 4.
3. **`allow_removed.txt` has 12 new lines** (section 7). Your prompt named `allow_new.txt` only.
4. **The new page has no tab in the pack.** The Refund tab is its model, as you said. The prototype has no "Shipping Policy" text at all (0 hits). The page uses the S band, the H1 style with the gold bar, the reading column and the contact box of the legal pages. It has no eyebrow ("Zipla POS" is the repo's own label on the three legal pages, not a pack element), no date line, no related links and no back link, because you gave none of those words.
5. **No new CSS, same stylesheet set on purpose.** The page imports the same six stylesheets as Privacy, Terms and Refund (`index.css`, `machine.css`, `machine-s.css`, `business.css`, `inner.css`, `reading.css`), although it uses no `inner.css` class. Reason: Astro makes one CSS file per set of pages that share a sheet. With the same set, no old page gets another stylesheet link (checked: the 19 old pages have the same stylesheet names as in the base).
6. **The contact line sits in the `zr-contact` box**, the box that Terms and Refund use for their contact block, so that the e-mail link has a 48 px tap area without new CSS. The text is one paragraph, "Contact: " and the address as a `mailto:` link whose text is the address, as Terms shows it.
7. **Links.** OFFER.md writes See pricing as `https://zipla.in/pricing/`. The repo writes internal links without the host, so does the band (Stages 2 to 5). Same target.
8. **Pack files.** I unzipped the zip a second time into a new folder and compared the sha256 of all 98 files with the copies I ran (`.pyc` caches left out): 0 different. `gate/forbidden.txt` is the pack's file.

## 9. Noticed, not changed

1. "Repair, not replacement" in the strip against "replaced within 7 days" in your paragraph (section 2, item 1).
2. The Refund date line and `dateModified` (section 2, item 3).
3. The two paragraphs sit under the contact H2 in the outline (section 2, item 2). The heading outline of the Refund page is the same as in the base (G5 PASS).
4. "Includes everything" and "no tax" (section 2, item 4). OFFER.md section 4 lists box contents as not confirmed. "Everything" does not name any content, so I took it as price wording, not as a box claim.
5. The four old lines in `allow_new.txt` (`3 to 4 days` and its three companions, from Stage 2) are unused now. They still allow the old wording to appear as "new text" on any page. A suggestion for Stage 6, when the allow lists are totalled: delete them, so that the old wording cannot slip back. Not done: your prompt said to append.
6. The Refund page's FAQ and its FAQPage JSON-LD say nothing about the machine (its 4 questions are about the policy, the trial, the refund request and the 7-day window). Your paragraphs are not in the JSON-LD. JSON-LD is off limits (R3).
7. `/shipping-policy` without the trailing slash: `public/_redirects` has no line for it (it has none for `/refund-policy` either) and I may not touch it. Whether Cloudflare Pages redirects it by itself: I do not know.
8. This closes an open item of Stage 5 ("the Refund policy has no warranty text yet", item 3 of its section 9): the built Refund page has "warranty" 2 times and "motherboard" once, where the base had 0 and 0. Home and Pricing say "Terms are in the Refund Policy".
9. The new page's outline has two `h2` besides the H1. They are the two cookie dialogs of `Layout.astro` that every page carries ("Help us improve Zipla.in", "Privacy settings"). Not new, not mine.
10. The delivery line breaks as "...3 to 4 working days after / dispatch." on a laptop, with one word on the second line. It is the wrapping of your longer text in the price card (section 2, item 5).
11. Keyboard order on the new page: skip link, the band's Buy now and See pricing, the e-mail link, then the Footer, with Shipping Policy between Refund Policy and Contact Us. Tested.
12. The skip link target is still the empty `div#zp-content` (Stage 1).

## 10. Not verified

- The Buy now link. I have no network access to Razorpay and did not open it. The same address is on all 22 Buy now links of the build (one distinct address, none with `.invalid`). Please tap it once.
- Every fact in your shipping and warranty text: DTDC, free shipping, the 24 to 48 hours, the 3 to 4 working days, the 48 hours to report damage, the free replacement, the 1-year warranty, the 7-day replacement, no return and no refund. I checked only that the page says what you wrote. Whether the texts are enough in law: I do not know.
- Whether the Home and Pricing strip and your paragraph contradict each other for a customer (section 2, item 1). It is your call.
- `/shipping-policy` without a slash (section 9, item 7).
- Real phones, Safari, Firefox, Samsung Internet. I used headless Chromium 153. No screen reader.
- The Cloudflare preview page itself. I cannot open it from here. After the PR is open, the check "Cloudflare Pages" under the pull request shows whether a preview was built.
- Lighthouse. I did not run it.
- Search effect. A new page, a new Footer link on every page and a new sitemap URL do not raise ranking by themselves. Nobody knows before 28 days of data. I requested no indexing.
- Closed FAQ answers in my render test. The test flags `display:none`, `opacity:0` and sideways overflow (I tested each by hand) but does not see closed `<details>`. The 4 closed answers on the Refund page are the Stage 5 design and are not mine.
- Speed on a real network. My LCP numbers are a localhost lab with 3 runs.

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
git switch -c redesign/stage-5b-shipping-warranty origin/redesign/integration   # then: git branch --unset-upstream
grep -rn "3 to 4 days" src   # 6 hits, 6 files
sed -i 's/3 to 4 days/3 to 4 working days after dispatch/g' <the 6 files>
npm run build && python3 -I .../gate/seo_gate.py snapshot dist /tmp/p1.json
python3 -I .../gate/price_sync_check.py /tmp/base.json /tmp/p1.json /tmp/rules_5b.txt   # PRICE-SYNC OK
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/p1.json (base allow lists)   # 16 FAIL: G6 x8, G7 x8
(allow lists appended; compare again: 0 FAIL 0 WARN; two controls: 8 FAIL each)
git add <8 files by name> && git commit      # Part 1, commit 4503224
npm run build, snapshot /tmp/p1b.json, price_sync_check.py again on the committed build   # PRICE-SYNC OK
(new page, build, snapshot, compare with --allow-new-page; Footer link, build, compare with and without the allow line; warranty paragraphs by byte-exact CRLF insert, build, compare with and without the allow lines)
git add <4 files by name> && git commit      # Part 2, commit 296f09e
npm run build
python3 -I .../gate/seo_gate.py snapshot dist /tmp/new.json
python3 -I .../gate/seo_gate.py compare /tmp/base.json /tmp/new.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --allow-new-page /shipping-policy/ --forbidden .../gate/forbidden.txt --report /tmp/gate_report.md   # 1 FAIL, 19 WARN
/tmp/pwvenv/bin/python -I .../gate/browser_check.py /tmp/base_dist --out /tmp/shots_base --target-min 48   # exit 0, 76 rows, 0 FAIL, 0 WARN
/tmp/pwvenv/bin/python -I .../gate/browser_check.py dist --out /tmp/shots --target-min 48                  # exit 0, 80 rows, 0 FAIL, 0 WARN
/tmp/pwvenv/bin/python -I .../gate/fold_check.py dist (and /tmp/base_dist)   # 43 WARN, 0 sideways (base 41 WARN)
python3 -I .../gate/inventory.py /tmp/new.json /tmp/inventory_new.md   # facts of the two pages, not committed
python3 -m zipfile -e /tmp/pack.zip /tmp/pack_verify   # a second unzip: 98 files, 0 different
the five static checks of BRIEF section 9, on the committed diff
git add docs/redesign/stage5b.md && git commit && git push -u origin redesign/stage-5b-shipping-warranty
the draft pull request, base redesign/integration (see the PR)
```
BRIEF section 9, five static checks, on the committed diff: 1 raw colours: none in a file of mine (the whole-`src` run lists only `src/index.css` with 59 lines and `src/vertical-page.css` with 13, both untouched). 2 font stacks: none in a file of mine. 3 hidden or generated text: no hit, and no CSS file is in the diff. 4 no dependency change and no new `<script>`. 5 12 files (11 in the code commits, 12 with this report). `Layout.astro`, `Header.jsx`, `public/`, `astro.config.mjs`, `package.json` and the lock file are untouched. Nothing of the pack, the prototype or the screenshots is in the repo.

My own scripts (Python and Playwright, in the session's scratch folder, not committed), and what each proved:
- **`verify_all.py`** (64 checks): the new page's title, meta description, canonical, `og:url`, no robots meta, one JSON-LD block byte for byte equal to the shared graph of the 404 page, one H1 and no other heading in `<main>`, the six paragraphs equal to your text in order (read from one JSON file copied once from the prompt; I also re-read the built text against the prompt by eye), the S band byte for byte equal to the Refund band, the two warranty paragraphs adjacent and between the contact box and the FAQ section, the Footer link once on each of the 20 pages and right between Refund Policy and Contact Us, and the HTML of all 19 old pages equal to the base after undoing exactly this stage's changes. **Negative controls:** I broke a copy of the build in 9 ways (a word of your text, an added heading, the title, the rupee sign, a second JSON-LD block, a missing Footer link, a word on Home, the old wording on a business page, the paragraphs moved after the FAQ). All 9 exit 1, the untouched copy exits 0.
- **`offercheck.py`**: the delivery strings against OFFER.md (read from the pack's file) in both directions, with and without your wording; the four S bands; one Buy now address on the whole build (22 links); the gate's forbidden counter on every new text. **Negative controls**, 7 breakages, all caught (a business page back to "3 to 4 days", a reworded step, a reworded strip, a changed alt text, a heading in the band, the `.invalid` address, a changed delivery sentence on the new page). My first run FAILED: the new page itself has a delivery sentence of yours ("Delivery takes 3 to 4 working days after dispatch.") that is not an OFFER.md string and my script did not expect it. That was my script, not the build. I changed the script to check that sentence against your text and report it separately. I did not loosen anything else.
- **`fold_compare.py`**: the first screen of the 8 delivery pages at 5 viewports, base against new (40 cells, 21 moved, section 5). **`shots_fold.py`**, **`card_edge.py`**: the numbers of the two pages and the card edge. **`lcp_cls.py`**: LCP and CLS, 3 runs per cell.
- **`render_test.py`**: 856 text nodes of the two pages at 8 widths: none hidden or outside the screen; 48 controls and 160 Footer-link cells: none under 48 px, none overlapping, no sideways scroll. **`render_sensitivity.py`**: it flags `display:none`, `opacity:0` and a paragraph pushed off to the side (tested by hand), and it does not flag closed `<details>`.
- **`behaviour.py`**: the keyboard order and the focus ring (3 px solid on the e-mail link and on the Footer link), the saved theme `dark`, `light` and none (6 runs, the body is paper `rgb(248, 245, 238)` each time), the cookie box (first visit shows it, Reject closes it and stores `denied`, no analytics script), no console error or warning and no failed or 4xx request on the two pages, and every one of the 18 internal links of the new page resolves, with the one external link opening in a new tab with `rel="noopener noreferrer"`.

## Appendix A. Plan and pre-mortem, written before the first edit (BRIEF 4.2, 4.3)

The full plan was saved before the first edit (`/tmp/plan.md`, not committed). Job of the new page, in words from the page: the visitor searches "Zipla Billing Machine Shipping Policy". The page promises "We ship the Zipla Billing Machine by DTDC to all of India. Shipping is free." The action it offers is "Buy now" (the band) and "support@zipla.in". Job of the Refund page: the visitor searches "Zipla POS Cancellation & Refund Policy"; the page promises "Key takeaway: Zipla POS offers a 14-day free trial."; no action of its own, the band adds Buy now.
What I read first and what it changed in the plan: the Stage 5 report (legal pages already have the S band, the reading column, the contact box and the FAQ list), the gate's code (a new page is not compared per page, so G3 to G16 cannot see it, and G1 fails on a changed sitemap whatever the flag), the sitemap integration (the new URL arrives by itself, no config), `refund-policy.astro` being all CRLF (so the three added lines are CRLF), and Astro's CSS chunking (so the new page imports the same six sheets).
Pre-mortem, the way this PR could lose traffic or break the site, and the command that caught each:
1. Text lost or changed: G6, G7 and `verify_all.py` D (19 old pages equal to base plus this stage). Passed.
2. Heading changed or added: G5 (19 pages) and my count on the new page (one H1). Passed.
3. Link lost: G9. Passed. New links: the Footer link (WARN), nothing else.
4. Head tags or JSON-LD changed: G3, G4 on 19 pages; by hand on the new page. Passed.
5. Hidden or generated text from CSS: no CSS file changed; grep check 3; render test. Passed.
6. LCP slower: 3 runs per cell. Inside the spread (section 6).
7. Layout shift: CLS 0.000 to 0.001.
8. Sideways scroll or small tap targets: `browser_check.py` with 48 px, `fold_check.py`, my sweep. None.
9. Text that needs JavaScript: all new text is in static markup. No `client:` directive on anything new.
10. An offer fact differs from OFFER.md: the offer check. Four delivery strings, by your decision.
11. A string from OFFER.md section 4 reaches a page: G15 and the offer check. None.
12. A word of policy that is not yours: `verify_all.py` against your text. None.
13. The replacement missed a string or changed another: grep and `price_sync_check.py`. Passed.
14. Sitemap: the new URL once, nothing else changed (section 4). G1 FAIL and the G2 flag are expected.
15. The no-slash URL: I do not know.
16. Mixed line endings in `refund-policy.astro`: 163 lines, 163 CRLF, `git diff` shows only my 3 lines.
17. The Footer link missing on some page or on the 404 page: 20 of 20 pages have it, once.
18. The new texts contradict the strip or the Terms: not fixable by me, section 2, items 1 and 4.
19. The Refund date line is stale: section 2, item 3.
20. G15 built-in forbidden strings inside the new texts: 0 hits of 58 patterns.
21. A tool's exit code read wrongly: exit 3 would be "I do not know". None of my runs ended in 3.
22. Wrong base branch: checked after the PR was opened.
23. Found late, by measuring: the longer delivery line moves Buy now about 20 px on 7 pages (section 2, item 5).

## Appendix B. Three differences per page against the pack's PNGs (BRIEF 4.4)

Method. Each page at 390x844 and 1366x768 (headless Chromium, saved cookie choice so the consent box is not in the picture, reduced motion), next to `png/first-screens/18_refund_390x844.jpg` and `18_refund_1366x768.jpg`. The pack has no tab for the shipping page, so the Refund tab is its model. KEPT means the difference comes from the repo's words, your texts or an earlier stage. Common to both pages, not a bug of this stage: the Header (the pack draws a transparent logo and inline links, the build has Stage 1's dark logo tile and menu button).

| page | difference 1 | difference 2 | difference 3 |
|---|---|---|---|
| /shipping-policy/ | No eyebrow, date line or "Key takeaway" lead. The pack's Refund tab has them because the repo's Refund page has those words. You gave six lines, so the H1 sits higher (287 against 323 at 390x844, the same as the pack's Privacy row). KEPT. | The contact line is in the bordered box that Terms and Refund use for their contact block. The pack's first screen does not show that box. It gives the e-mail link a 48 px tap area without new CSS. KEPT. | The page is short (1,372 px tall at 390 px, 998 px at 1366x768), so the footer comes early. Nothing was added to fill it. KEPT. The band equals the pack's (price and Buy now at 120 and 179, and 113 and 129), and the H1 breaks in two lines with the gold bar under "Shipping Policy", as "Refund Policy" has it. |
| /refund-policy/ | The first screen is the same as in the base (323 / 120 / 179 and 333 / 113 / 129), measured with the same script on both builds. The two paragraphs are about 3,600 px down at 390 px, so the pack's PNG cannot show them. KEPT. | The paragraphs sit under the contact H2 because you asked for no heading (section 2, item 2). KEPT. | The pack's tab has grey bars where the repo has text, the repo has its small "ZIPLA POS" label above the H1 and more paragraphs (Stage 5, Appendix B). Old differences, not from this stage. KEPT. |

Fixes made in this round: none were needed after the first build. One decision before building: the contact line was first a plain paragraph. I moved it into the contact box for the 48 px tap area.
