# Stage 6: Final check, release pull request (DRAFT)

This pull request changes the live site when merged.

Repo `mohsinIslam123/apnamenu-landing`. Branch `redesign/stage-6-final`, created from `origin/redesign/integration` at `8241a6b4895cfbf308eeb1deeed965d5b3f5dec9` (Stages 1 to 5b are merged there: pull requests [33](https://github.com/mohsinIslam123/apnamenu-landing/pull/33), [34](https://github.com/mohsinIslam123/apnamenu-landing/pull/34), [35](https://github.com/mohsinIslam123/apnamenu-landing/pull/35), [36](https://github.com/mohsinIslam123/apnamenu-landing/pull/36), [37](https://github.com/mohsinIslam123/apnamenu-landing/pull/37), [38](https://github.com/mohsinIslam123/apnamenu-landing/pull/38)). Base of this pull request: `main`.

| name | SHA |
|---|---|
| B0, the build of `main` that Stage 0 recorded (`docs/redesign/B0_SHA.txt`) | `419cc531ac67c75ec5ab5384a3c5c9880b64dfca` |
| `origin/main` today | `e6225824af2332da528e8f05a5d83780e0c9482e` (the Stage 0 docs merge, pull request 32) |
| `origin/redesign/integration` (the build I checked) | `8241a6b4895cfbf308eeb1deeed965d5b3f5dec9` |

Which B0. `git diff --stat 419cc53..origin/main` lists five files, all under `docs/redesign/` (`B0_SHA.txt`, `STAGE0.md`, `allow_new.txt`, `allow_removed.txt`, `inventory.md`). So B0 stays `419cc53` and I did not merge main (BRIEF 6.4). `git merge-base origin/main HEAD` is `e622582`, which is `origin/main`, and `git fetch origin main` at the end showed main had not moved.

Nothing in this stage changes the site. The only file this branch adds is this report (`git diff --stat` of the commit: one file under `docs/redesign/`). No new design, no CSS deleted, nothing in `gate/` or the pack edited (section 10).

## 1. In five lines

Gate against B0, `--allow-new-page /shipping-policy/`: **1 FAIL, 42 WARN**, exit 1. The FAIL is G1: `sitemap-0.xml` has one more line, `https://zipla.in/shipping-policy/` (section 6.6). The 42 WARN are listed and explained in section 4. Browser check, `--target-min 48`: ran, exit 0, 80 rows, 0 FAIL, 0 WARN. B0 gave exit 1 with 76 FAIL rows and 76 WARN rows.
Pages: 20 (the 19 pages of B0 and `/shipping-policy/`). Files changed against `main`: 71 (53 in `src`, 9 in `public`, 9 in `docs/redesign`), plus this report. Base: `main` at e622582. B0: 419cc53.
Offer check: the machine band strings of the built HTML equal OFFER.md section 3 **except exactly D1 (delivery wording) and D2 (warranty value of the strip)**. 74 checks, 0 mismatches, nothing else differs (section 5).
Verdict: **ready for your preview check and for the checks only you can do (section 3). I found nothing that blocks.** Two things matter most and I could not verify them: the Buy now link and the policy sentences (section 2).
Not merged, not pushed to `main` or `redesign/integration`. One thing is odd and explained: the HTML size of the same commit differs by a few bytes between sessions, because Astro writes the project path into `<astro-island uid="...">` (section 6.10).

## 2. Needs Kabir's OK (at most five)

1. **Tap Buy now before you merge. I never opened it.** 22 Buy now links on 19 pages all go to `https://rzp.io/rzp/ygTqBnl` (section 6.1). I do not know what that link shows. If it breaks, 18 pages lose their main button (OFFER.md section 7). Default: merge only after you have tapped it once on a phone.
2. **Policy sentences that are live on public pages and that I cannot verify.** (a) Shipping page: "The price of ₹4,999 includes everything. You pay no tax or extra charge at delivery." OFFER.md section 5 still lists GST on 4,999 rupees as open "with the CA". (b) Terms: "All prices ... are inclusive of applicable taxes." (repo text) sits next to the machine price. (c) The strip on Home and Pricing says "Repair support" and the Refund page says a defect "is replaced within 7 days of delivery". (d) The Refund page still says "Last updated: August 25, 2026" and `dateModified` is `2026-08-25`, but it has two new paragraphs and a heading. I changed none of these (R3 and your texts). Whether the texts are enough in law: I do not know. Default: published as merged in PR 38.
3. **FAQ answers changed from always visible to closed on 10 pages** (FAQ, Contact, blog index, four guides, Privacy, Terms, Refund; Stages 4 and 5, as the stage reports say). Every answer is in the HTML and in the JSON-LD (G6, G8 pass). What closed answers do to search and to AI answers: I do not know. If you say no: add `open` to the `<details>` in `src/components/FaqList.jsx` (one word).
4. **A visit is heavier than on B0.** On Home a first visit loads 20 requests against 10, fonts 222,984 B against 61,956 B, images 199,556 B against 75,896 B, CSS 71,169 B against 31,162 B (raw bytes, section 8). Lab LCP is 18 ms higher in the median (132 against 114 ms; the 3 runs inside one cell differ by up to 96 ms on B0 and 56 ms on final). CLS is far below 0.1 (worst single run 0.012). I changed nothing, because this stage has no new design. Cutting it (one merged stylesheet, fewer font files) is a separate pull request. Default: ship as is.
5. **20 allow-list lines are unused and still allow the old wording back in.** They are the old delivery lines and the old strip words (section 9). I proved them unused (removing all 20 at once gives the same gate result) and I left them, because "fix only what blocks a check". They are docs only. Default: leave, delete in a small docs PR after the release.

## 3. Things only Kabir can check (not verified by this PR)

Each of these is **not verified by this PR**.

- The Buy now link opens a Razorpay Payment Page that shows 4,999 and asks for name, phone and address. Not verified by this PR. I did not open the link and I do not know what it shows. The shipping text says "You enter your delivery address on the Razorpay payment page". That depends on this page asking for the address.
- The contact mailbox `support@zipla.in` receives mail. Not verified by this PR. The address is in the JSON-LD and the text of every page I searched (grep: it is in the built HTML of all 20 pages, among them Contact and the shipping page). I sent no mail.
- The WhatsApp number on the site, +91 7817851009 (`wa.me/917817851009`), is Kabir's own. Not verified by this PR. The number comes from `src/constants.js` and the repo. The "Ask on WhatsApp" link and the JSON-LD telephone use it.
- The CA's answer on GST registration and on the invoice for the bundle (machine plus 12 months of software). Not verified by this PR. I do not know whether 4,999 rupees includes GST. See section 2, item 2.
- A real phone check and Safari. Not verified by this PR. I used headless Chromium 153 only. No Safari, no Firefox, no Samsung Internet, no screen reader.

Also open, from the earlier reports and not checked by this PR: the font licence text of Bricolage Grotesque, Figtree and DM Mono (https://openfontlicense.org; `public/fonts/LICENSES.txt` still lists only Syne and Plus Jakarta Sans, verified by grep); whether the real device's panel says "Billing Machine"; the pictures show the test account "Hot Spot Pizza"; the Cloudflare preview page itself (I cannot open it from here); Lighthouse (not run); rankings (nobody knows before 28 days of Search Console data).

## 4. Gate table against B0

Command: `seo_gate.py compare /tmp/b0_rp.json /tmp/fin.json --allow-removed docs/redesign/allow_removed.txt --allow-new docs/redesign/allow_new.txt --allow-new-page /shipping-policy/ --forbidden <pack>/gate/forbidden.txt`. `/tmp/b0_rp.json` is the snapshot of B0 built in the repo path (section 6.10). The report is the same line for line when B0 is built in `/tmp/b0_tree` (`diff` empty). `forbidden.txt` is the pack's file, unedited (sha256 `196ee029...e49fe`, equal to the file inside the zip). Both PROOF lines say none.

| Line | Check | PASS | WARN | FAIL |
|---|---|---|---|---|
| G1 | Files, sitemap, robots, llms, redirects, headers | 5 | 0 | 1 |
| G2 | Same page URLs, sitemap URLs all built | 2 | 0 | 0 |
| G3 | title, meta, canonical, hreflang, html lang | 19 | 0 | 0 |
| G4 | JSON-LD identical | 19 | 0 | 0 |
| G5 | Headings: H1, no heading added, removed or re-levelled | 18 | 1 | 0 |
| G6 | Baseline text still present | 19 | 0 | 0 |
| G7 | No new text | 17 | 2 | 0 |
| G8 | FAQ questions and answers visible | 19 | 0 | 0 |
| G9 | Links kept, no broken internal link or anchor | 0 | 19 | 0 |
| G10 | Element ids kept (deep links) | 19 | 0 | 0 |
| G11 | Images: alt, width and height, hero not lazy, files exist | 18 | 1 | 0 |
| G12 | Scripts and third-party hosts | 0 | 19 | 0 |
| G13 | Forms unchanged | 19 | 0 | 0 |
| G14 | Basic accessibility: one main, no empty link or button | 19 | 0 | 0 |
| G15 | No forbidden strings | 19 | 0 | 0 |
| G16 | Weight: CSS, JS, fonts, HTML | 3 | 0 | 0 |

The gate only compares pages that exist in both builds (19). The new page is checked by hand (sections 6.5 and 6.8).

**FAIL (1)**
- `G1 (global): SEO file changed (sha256 differs): sitemap-0.xml`. Expected and exact: the diff is one added line, `<url><loc>https://zipla.in/shipping-policy/</loc></url>` (section 6.6). The gate has no switch for a changed sitemap and I did not edit the gate. `sitemap-index.xml`, `robots.txt` and `_redirects` are byte-identical to B0. This is the "exactly one more URL" that your prompt expects.

**WARN (42), the open WARNs, each with its reason**
- G9 x19, one on every B0 page: `new link(s): /shipping-policy/` (the Footer link of Stage 5b, D3). The page is built, so there is no G9 FAIL. 18 of the 19 also list `https://rzp.io/rzp/ygTqBnl` (the Buy now link of the band, every page except `/404.html`). Home also lists `https://wa.me/917817851009` (Ask on WhatsApp). All of them have `target="_blank"` and `rel="noopener noreferrer"` (section 6.1). The See pricing and Refund Policy links point to pages that already existed.
- G12 x19: `inline script count 4 -> 3` on 18 pages and `5 -> 4` on Home. The theme init script is gone (decision D5, Stage 1). No third-party script or host changed (G12 has no other message).
- G7 x2: `/` "same words, but repeated more often than baseline": policy +1, pricing +1, refund +1, see +1 (new links "See pricing" and "Refund Policy"). `/pricing/`: policy +1, refund +1 (the strip's "Refund Policy" link). Nothing is duplicated by mistake.
- G5 x1, `/refund-policy/`: "same headings, different order (h1 to h3). A human must OK the new section order". The real cause is one added h2, "Zipla Billing Machine: warranty and returns", between the contact h2 and the FAQ h2 (your comment on PR 38, D3). Its text is in `allow_new.txt`, so the gate turns the "heading added" FAIL into this WARN. G5 passes on the other 18 pages, so no other heading changed. Heading levels, checked on the final build: 20 of 20 pages have exactly one H1 and no skipped level.
- G11 x1, `/`: `baseline alt text no longer used: 'Actual Zipla POS customer menu screen used for QR '`. The old customer-menu figure was dropped on your instruction in Stage 2 (two lines in `allow_removed.txt`).

G3 and G4 pass on all 19 pages: title, meta, canonical, `lang` and JSON-LD are untouched (the JSON-LD bytes are compared again in section 6.5). G15 passes on 19 of 19.

## 5. Known deviations D1, D2, D3, and the offer check

You decided these after the pack was made. They are expected. I did not "fix" them and I did not edit OFFER.md or the pack.

- **D1. Delivery wording.** "3 to 4 working days after dispatch" replaces "3 to 4 days". Four strings in six files: the price row under the machine band (`MachineBand.jsx`, 7 pages), the strip value (`MachineStrip.jsx` and `OfferStrip.jsx`, Home and Pricing), step 01 (`HowItStarts.jsx`, Home) and the offer card text (`Pricing.jsx` and `OfferCard.jsx`, Home and Pricing). `grep -rn "3 to 4 days" src` has 0 hits now.
- **D2. Warranty value of the strip.** "1 year on the motherboard. Repair support. No cover for physical damage. Terms are in the Refund Policy." replaces the text with "Repair, not replacement". Two components, `MachineStrip.jsx` (Home) and `OfferStrip.jsx` (Pricing). **OFFER.md does not contain the new value.** It contains the old one (section 3.7, "1 year on the motherboard. Repair, not replacement. ..."). So the difference is there by design.
- **D3.** The new page `/shipping-policy/` (six paragraphs, S band, Footer link on 20 of 20 pages, one sitemap line) and, on `/refund-policy/`, the heading "Zipla Billing Machine: warranty and returns" and two warranty paragraphs.

**Offer check against OFFER.md section 3.** Script: `offercheck.py` (mine, not committed). It reads the pack's `OFFER.md`, asserts that every expected string is inside section 3, builds the expected strings of each band (L band, M card, S band, Home slip, sticky bar, strip, steps, offer card, Razorpay line, hero paragraph and eyebrow), parses the built HTML of all 20 pages and compares text pieces, `alt`, `aria-label`, `role` and links, in order, both ways. It lists every difference with its tag.

```
trace: all expected strings are inside OFFER.md section 3
checks: 74, mismatches: 0
differences tagged D1: 12, D2: 2, other: 0
[D1] "3 to 4 days"  ->  "3 to 4 working days after dispatch"                         on 2 bands: /pricing/ [strip], / [strip]
[D1] "Buy the Zipla Billing Machine online. It is delivered in 3 to 4 days." -> "... 3 to 4 working days after dispatch."   on 1 band: / [steps]
[D1] "One 58mm Bluetooth printer and 12 months of Zipla POS. To continue after 1 year, Zipla POS is ₹4,999 a year. Delivery in 3 to 4 days."
     -> "... Delivery in 3 to 4 working days after dispatch."                         on 2 bands: /pricing/ [offer card], / [offer card]
[D1] "With 12 months of Zipla POS. Delivery in 3 to 4 days." -> "... Delivery in 3 to 4 working days after dispatch."
                                                                                     on 7 bands: the six business pages and /pricing/ [L band]
[D2] "1 year on the motherboard. Repair, not replacement. No cover for physical damage. Terms are in the"
     -> "1 year on the motherboard. Repair support. No cover for physical damage. Terms are in the"     on 2 bands: /pricing/ [strip], / [strip]
OFFER CHECK: PASS (the only differences are D1 and D2)
```

The result is exactly D1 and D2. Nothing else differs, so there is nothing to stop on and nothing hidden in an allow list.

One note on form, not on content, so that nothing is hidden: OFFER.md writes the See pricing and Refund Policy links as `https://zipla.in/pricing/` and `https://zipla.in/refund-policy/`. The repo writes internal links without the host (`/pricing/`, `/refund-policy/`), as the Stage 2 to 5b reports said. Same target. My script resolves both forms to the same target and prints the forms it saw: `['/pricing/', '/refund-policy/']`.

Negative controls (I ran the script on 10 broken copies of the build): a price of ₹5,999 in a card, the `.invalid` address on a card, the old "3 to 4 days" on a business page, a heading inside the S band, `rel` lost on a Buy now, a changed alt text, a band on the 404 page, the old "Repair, not replacement" back on Home, a changed sample bill row, See pricing pointing to `/faq/`. All 10 exit 1. The untouched copy exits 0.

## 6. The added checks, with the output behind each

### 6.1 Buy now links (every page)

Script `buycheck.py` (mine). Every `<a>` whose text is "Buy now" must have `href` = `https://rzp.io/rzp/ygTqBnl`, `target="_blank"` and `rel="noopener noreferrer"`. Count per page:

| page | Buy now links | | page | Buy now links |
|---|---|---|---|---|
| `/` | 3 (price slip, sticky bar, offer card) | | `/faq/` | 1 |
| `/pricing/` | 2 (band, offer card) | | `/contact-us/` | 1 |
| `/restaurant-pos-software/` | 1 | | `/blog/` | 1 |
| `/cafe-pos-software/` | 1 | | `/blog/restaurant-pos-software-checklist/` | 1 |
| `/bakery-billing-software/` | 1 | | `/blog/restaurant-dhaba-gst-invoice-guide-2026/` | 1 |
| `/sweet-shop-billing/` | 1 | | `/blog/restaurant-pos-software-price-india/` | 1 |
| `/qsr-billing-software/` | 1 | | `/blog/restaurant-pos-vs-billing-software/` | 1 |
| `/dhaba-billing-software/` | 1 | | `/privacy-policy/` | 1 |
| `/shipping-policy/` | 1 | | `/terms-and-conditions/` | 1 |
| `/refund-policy/` | 1 | | `/404.html` | **0** |

Total 22. 0 pages with a problem. In every page the number of links to `rzp.io`, the number of `rzp.io` strings in the raw HTML and the number of Buy now links are equal. `grep -rhoE 'https://rzp\.io[^"... ]*' dist | sort | uniq -c` shows one distinct address, 22 times. No `rzp.io` in any JS, CSS or other file. No `.invalid` in any page. The address is the one you gave in the prompt. I do not know what it shows. I did not open it.

### 6.2 Strings that must not be on any page

Script `forbid.py` (mine), over the raw HTML and over the visible text of all 20 pages, B0 against final.

- **0 hits in B0 and in final** for: `.invalid`, `mrp` (any case, also as a word), `Save ₹`, `Save` (word), `Other plans`, `Every plan includes`, `Offer price`, `<s>`, `<del>`, `<strike>`, `line-through`, `Starter`, `Pro plan`, `2,999`, `3,999`, `5,999`, `5,001`, `10,000`, `3,000`, "3-year machine offer", `cable`, "paper roll", "in the box", "box contents", "6 months replacement", "ships in 3 to 5", `Mini Billing Machine`, `EMI`, `netbanking`, "delivery address form", "checkout page", "order placed", "grievance officer", `[date]`, `buy-now-url`, any `px-` class or `data-px`, and the two claim phrases `10 minutes` and `no training needed`.
- **Hits that are the repo's own text and are identical to B0** (same count on the same page): `UPI` (80 in raw HTML, 62 in visible text, in sentences such as "cash/UPI/card payment tracking", "UPI and online payments require connectivity" and "We do not store ... UPI credentials") and `credit card` / `debit card` (44 in raw, 35 in visible text, "no credit card required", "We do not store your credit/debit card numbers"). None is a claim about the machine. No page has more hits than in B0.
- Square brackets: 1,512 in the raw HTML (JSON-LD arrays and scripts; B0 1,576), **0 in visible text** in B0 and in final.
- `placeholder`: 2 in B0 and in final, the `placeholder="Ramesh Kumar"` attribute of the Home demo form (repo).
- The two claim phrases, as `grep -rniE '10 minutes|No training needed' dist` over the whole built output (every file, not only HTML): **no output, grep exit 1**. The same grep on B0: no output. Both PROOF lines are none, so `gate/forbidden.txt` is not edited.

### 6.3 The machine band strings on every page

Section 5. Equal to OFFER.md section 3 except D1 and D2.

### 6.4 The delivery and warranty wording, by grep over the built output

- `grep -rF "3 to 4 days" dist`: **0 hits**.
- `grep -rF "Repair, not replacement" dist`: **0 hits**. `grep -rF "not replacement" dist`: 0 hits.
- `grep -oF "3 to 4 working days after dispatch"`, occurrences per page: `/` 3 (strip, step 01, offer card), `/pricing/` 3 (price row, strip, offer card), the six business pages 1 each (price row), `/shipping-policy/` 1 (its own sentence "Delivery takes 3 to 4 working days after dispatch."). 13 occurrences on 9 pages. The other 11 pages have 0. B0 has no "3 to 4" anywhere.

### 6.5 JSON-LD (G4, byte for byte)

Script: extract every `<script type="application/ld+json">` block of every B0 page from the B0 build and from the final build and compare the bytes. **19 of 19 pages: block count equal, byte count equal, bytes equal. 0 pages differ.** That includes `/refund-policy/` (3,875 bytes, sha256 starts `b4ab5f6deba0`, the same as in the Stage 5b fix round) and `/404.html` (1,936 bytes). The visible line on the Refund page is still "Last updated: August 25, 2026" and `dateModified` is `2026-08-25`, in B0 and in final.

New page `/shipping-policy/`, JSON-LD printed in full by the script: one block, `@graph` with `WebSite`, `Organization` and `SoftwareApplication` (with the two Offers of the software-only plans, 4999 and 11999). **It holds only the shared Layout graph**: its bytes equal the block of the 404 page. No page-specific JSON-LD. The text of the block starts `{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://zipla.in/#website","name":"Zipla POS",...`.

### 6.6 Sitemap and the files G1 lists

- G1 SEO-type files in both builds: `_redirects`, `robots.txt`, `sitemap-0.xml`, `sitemap-index.xml`. `_redirects`, `robots.txt` and `sitemap-index.xml` are **byte-identical** (`cmp`). `sitemap-0.xml` differs by one line. `llms.txt`, `_headers` and `security.txt` exist in neither build (`ls` says no such file), so they are not "identical", they are absent in both.
- Diff of the sitemap (one `<url>` per line, B0 against final):

```
16a17
> <url><loc>https://zipla.in/shipping-policy/</loc></url>
```

- Sitemap URLs: 18 in B0, 19 in final, added `/shipping-policy/`, removed none.
- `diff -rq` of the two builds, files that are neither HTML nor in `_astro/`: only `fonts/` (7 new woff2 files from Stage 1), `images/` (the two pack images of Stage 2: `hero-printer-billing-machine.webp`, `screen-dashboard.webp`), `shipping-policy/` and `sitemap-0.xml`. Everything else in `public/` is byte-identical.

### 6.7 G2, page URLs

B0 has 19 pages, final has 20. Added: `/shipping-policy/`. Removed: none. `final == B0 + {/shipping-policy/}` is `True`. The gate's G2 also passes with `--allow-new-page /shipping-policy/` (2 PASS) and every sitemap URL has a built page.

### 6.8 The shipping page text and the two warranty paragraphs

The six paragraphs of `/shipping-policy/`, printed from the final build (H1 "Zipla Billing Machine Shipping Policy"):

1. We ship the Zipla Billing Machine by DTDC to all of India. Shipping is free.
2. Your order is dispatched within 24 to 48 hours of payment. Delivery takes 3 to 4 working days after dispatch.
3. The price of ₹4,999 includes everything. You pay no tax or extra charge at delivery.
4. You enter your delivery address on the Razorpay payment page.
5. If the machine arrives damaged, report it within 48 hours of delivery with an unboxing video and photos. We send a free replacement.
6. Contact: support@zipla.in (the address is a `mailto:` link; paragraph 6 sits in the contact box)

**Comparison with the Stage 5b report, and its limit.** The Stage 5b report (`docs/redesign/stage5b.md`) does not print the six paragraphs. `grep` finds only three fragments in it: "We ship the Zipla Billing Machine by DTDC to all of India. Shipping is free." (section Appendix A), "Delivery takes 3 to 4 working days after dispatch." (section 11) and "The price of ₹4,999 includes everything. You pay no tax or extra charge at delivery." (section 2). All three are word for word inside the built paragraphs 1, 2 and 3. For paragraphs 4 to 6 the report has only keywords (DTDC, free shipping, 24 to 48 hours, the 3 to 4 working days, 48 hours, free replacement), all present in the build. **So I cannot compare all six paragraphs word for word with the report, because the report does not contain them. I do not know whether they equal your original prompt text.** What I can prove: the built paragraphs equal the `<p>` texts of `src/pages/shipping-policy.astro` word for word (`True`). Please read the six lines above once against your own text.

The two warranty paragraphs on `/refund-policy/`, after the contact box and its new h2 (order checked: contact h2, warranty h2, paragraph 1, paragraph 2, FAQ h2):

- Heading (h2): Zipla Billing Machine: warranty and returns
- The Zipla Billing Machine has a 1-year manufacturing warranty on the printer motherboard, with repair support. The warranty starts on the delivery date. Physical damage, water damage and burn damage are not covered. If the hardware has a manufacturing defect, it is replaced within 7 days of delivery.
- For the Zipla Billing Machine, there is no return and no refund after the hardware is dispatched or after the Zipla POS licence is activated. Software-only plans follow the refund terms above.

Comparison: the two paragraphs and the heading equal, word for word, the lines that Stage 5b wrote into `docs/redesign/allow_new.txt` (the report's committed record, `True` for both paragraphs and for the heading), and both paragraphs are in the added lines of commit `296f09e` (`True`). The heading is named in the PR 38 body (section 3), not in `stage5b.md`. Same limit as above: whether they equal your prompt, I do not know.

### 6.9 G12, G15 and G9

- G12 (scripts and third-party hosts): 19 WARN, all "inline script count 4 -> 3" (Home 5 -> 4), the retired theme script. No new third-party host, no changed third-party script. No new `<script>` in `src/` or `public/` (grep of the added lines: none).
- G15 (forbidden strings, built-in list plus `forbidden.txt`): 19 PASS, 0 WARN. The new page is not in G15 (no B0 page). My own scan of it is in 6.2 (0 hits).
- G9 (links): 19 WARN, 0 FAIL, listed in section 4. No link removed from any page, no new link to an unbuilt page, no anchor without an id.

### 6.10 The 19 byte HTML size difference of the Stage 5b fix round

What was reported. The PR 38 body (fix round) says: base HTML total 750,582 B, where the round-1 report says 750,563 B for the same base (`redesign/integration` at 25dbe67), "I do not know why ... (19 B)".

What I can prove. **The build output depends on the directory the project is built in.** Astro writes `<astro-island uid="...">` for every React island, and the `uid` is a hash that depends on the project path. Its length varies, so the page size varies. I built the same commits in different paths and measured (`os.path.getsize` of every `.html`, and the summed length of all `uid="..."` values):

| commit, built in | HTML total | sum of uid lengths |
|---|---|---|
| 25dbe67, in the repo path `/home/user/apnamenu-landing` | **750,563 B** (round 1's number) | 120 |
| 25dbe67, in `/tmp/base_tree` | **750,582 B** (the fix round's number) | 139 |
| 25dbe67, in `/tmp/int_tree` | 750,581 B | 138 |
| 25dbe67, in a path of 66 characters | 750,562 B | 119 |
| B0, in the repo path | **857,134 B** (Stage 1's number) | 123 |
| B0, in `/tmp/b0_tree` | 857,128 B | 117 |

In every pair the difference in bytes equals the difference in the total `uid` length (139 - 120 = 19 = 750,582 - 750,563; 117 - 123 = -6 = 857,128 - 857,134). The two builds of the final commit in two paths have the same total length by chance (776,317 B both) and differ only in the `uid` values (`diff` of one page: one differing span, the `uid="1Pamrg"` against `uid="1uTjnU"`). Two builds of the final commit in the same path are byte-identical (`diff -rq` empty). So the 19 B gap of the fix round is the path: round 1 built the base in the repo directory, the fix round in the worktree `/tmp/base_tree`. I reproduced both numbers exactly. The same mechanism explains why Stage 1 measured B0 at 857,134 B while I measured 857,128 B in `/tmp/b0_tree`.

What this means. The `uid` is an attribute inside island markup, not text, a link or a heading, so it does not touch the gate lines. I did not test what the Cloudflare build path does to it. I did not test whether a `uid` can differ between two builds in the same path on different machines: I do not know. Measured in the repo path, the final HTML total is **776,317 B** (largest page `/` 64,647 B). The B0 total in the same path is 857,134 B (`/` 138,341 B).

### 6.11 Other checks I ran

- **Saved-theme test (R15)**, all 20 pages at 390x844, saved `zipla-theme` = `dark`, `light` and none (60 runs): every run gives one identical result per page, `<body class="zp">`, background `rgb(248, 245, 238)`, text `rgb(28, 25, 21)`, `color-scheme: light`. `<html data-theme="dark">` is still in the static HTML (Stage 1 left it for old CSS) and no new CSS reads it.
- **Buy now inside the first screen and 48 px**, script `foldbuy.py`, 20 pages x 5 viewports (320x640, 360x640, 390x844, 414x896, 1366x768): on all 18 band pages Buy now (or the Home sticky bar) ends inside the first screen at all 5 viewports, every Buy now is at least 48 px high, no sideways scroll in any of the 100 cells. The H1 of the L pages ends below the first screen at 320x640 and 360x640 (the documented case, DESIGN_SYSTEM 14.5) and the H1 of the GST guide at 320x640 (655 px). Numbers in section 7.
- **Static checks of BRIEF section 9, against `origin/main`**: (1) raw colours: 59 lines in `src/index.css` and 13 in `src/vertical-page.css` (old files, not changed), none in a file of the redesign. (2) `font-family` outside the tokens: 21 and 6 in the same two old files, 7 `@font-face` names in `src/styles/fonts.css`. (3) `display: none` in changed files: 3 `::-webkit-details-marker` rules, 4 in `frame.css` (the phone menu and the header buttons, same breakpoints as B0) and the Home sticky bar above 900 px. No `visibility: hidden`, no `opacity: 0`, no `text-indent`, no quoted `content:` text. (4) `git diff origin/main...HEAD -- package.json package-lock.json` is empty and no added line in `src/` or `public/` has `<script`. (5) 71 files, none of `astro.config.mjs`, `package.json`, `_redirects`, `robots`, `llms`, sitemap, and no pack, prototype or screenshot file. `Layout.astro` changed only in the D5 and Stage 1 lines (one CSS import, the `zp` prop, two font preloads, the body class, the theme script removed).
- **Pack unedited**: `unzip` of the zip again against the files I ran: 98 files compared, 0 different. `selftest.py` last line SELFTEST OK.
- **Build twice**: two builds of the final commit in the same path are byte-identical (`diff -rq` empty). `git status` is clean after every build.

## 7. Pages in this pull request

All 20 pages. H1 against B0: same text on 19 of 19. `/shipping-policy/` is new. "Fold" is the bottom of the H1 and the bottom of Buy now in CSS px (Home: "bar" = the sticky bar, which is fixed at the bottom of the screen). Measured on the final build by `foldbuy.py`. Cells for all five viewports are in section 6.11.

| URL | H1 | archetype | machine band | Buy now links | fold 390x844: H1 / Buy now | fold 1366x768 |
|---|---|---|---|---|---|---|
| / | Restaurant Billing Software for India (same as B0) | 1 Home | L-style hero + sticky bar + strip + offer card | 3 | 542 / bar | 235 / 743 |
| /404.html | That page is not available. (same as B0) | 9 Utility | none | 0 | 210 / none | 247 / none |
| /bakery-billing-software/ | Bakery Billing Software for India (same as B0) | 2 Business-type | L band | 1 | 703 / 564 | 259 / 747 |
| /blog/ | Restaurant Billing & POS Guides for India (same as B0) | 6 Blog index | M card | 1 | 423 / 242 | 267 / 258 |
| /blog/restaurant-dhaba-gst-invoice-guide-2026/ | GST Invoice for Restaurant and Dhaba in India — Step by Step Guide 2026 (same as B0) | 7 Blog article | M card | 1 | 578 / 270 | 339 / 270 |
| /blog/restaurant-pos-software-checklist/ | Restaurant POS Software Checklist: What to Test Before You Switch (same as B0) | 7 Blog article | M card | 1 | 557 / 270 | 339 / 270 |
| /blog/restaurant-pos-software-price-india/ | Restaurant POS Software Price in India: What to Check Before Buying (same as B0) | 7 Blog article | M card | 1 | 529 / 270 | 339 / 270 |
| /blog/restaurant-pos-vs-billing-software/ | Restaurant POS vs Billing Software in India: What Is the Difference? (same as B0) | 7 Blog article | M card | 1 | 529 / 270 | 339 / 270 |
| /cafe-pos-software/ | Cafe POS Billing Software for India (same as B0) | 2 Business-type | L band | 1 | 723 / 564 | 259 / 747 |
| /contact-us/ | Contact Zipla POS Support (same as B0) | 5 Contact | M card | 1 | 423 / 242 | 215 / 258 |
| /dhaba-billing-software/ | Dhaba Billing Software India (same as B0) | 2 Business-type | L band | 1 | 703 / 564 | 259 / 747 |
| /faq/ | Restaurant Billing Software India: Zipla POS Questions Answered (same as B0) | 4 FAQ | M card | 1 | 493 / 242 | 319 / 258 |
| /pricing/ | Restaurant POS Pricing in India (same as B0) | 3 Pricing | L band + strip + offer card | 2 | 703 / 564 | 259 / 747 |
| /privacy-policy/ | Zipla POS Privacy Policy (same as B0) | 8 Legal | S band | 1 | 323 / 179 | 281 / 129 |
| /qsr-billing-software/ | QSR Billing Software India (same as B0) | 2 Business-type | L band | 1 | 703 / 564 | 259 / 747 |
| /refund-policy/ | Zipla POS Cancellation & Refund Policy (same as B0) | 8 Legal | S band | 1 | 323 / 179 | 333 / 129 |
| /restaurant-pos-software/ | Restaurant POS Billing Software for India (same as B0) | 2 Business-type | L band | 1 | 723 / 564 | 259 / 747 |
| /shipping-policy/ | Zipla Billing Machine Shipping Policy (new page) | 8 Legal | S band | 1 | 287 / 179 | 298 / 129 |
| /sweet-shop-billing/ | Sweet Shop Billing Software India (same as B0) | 2 Business-type | L band | 1 | 723 / 564 | 259 / 747 |
| /terms-and-conditions/ | Zipla POS Terms and Conditions (same as B0) | 8 Legal | S band | 1 | 323 / 179 | 281 / 129 |

`fold_check.py` (the gate's tool, H1 and first link only): B0 53 WARN, final 43 WARN, 0 sideways-scroll cases in both. Of the 43: 28 "action ends below the fold" and 14 "H1 ends below the fold, action ends below the fold" (the six business pages and Pricing, at 320x640 and 360x640) and 1 "H1 ends below the fold" (the GST guide at 320x640). The "action" of the tool is the first link after the H1: on Home "Book a WhatsApp Demo", on the L pages "Start 14-Day Free Trial", on the legal pages a text link in the policy text. It is not Buy now. Stages 2 to 5b explained each case.

## 8. Numbers, B0 and final

Lab, Chromium 153 headless on localhost, no throttling, 3 runs per cell with a fresh browser context per run, median shown, 6 pages x 4 widths = 24 cells for each build, B0 and final measured in the same session (script `perf.py`, mine). Compare them only with each other.

| metric | B0 | final |
|---|---|---|
| LCP, median of the 24 cell medians | 114 ms | 132 ms (+18) |
| widest spread of the 3 runs in one cell | 96 ms | 56 ms |
| LCP element (run 1 of each cell) | the H1, a paragraph or the page's laptop picture | the printer photo on Home, Pricing and the Cafe page at all 4 widths; a paragraph or the H1 on FAQ, blog index and Refund |
| CLS, median of 3, 24 cells | 0.000 in all | 0.000 to 0.012, none above 0.1 (worst single run 0.012, `/faq/` at 768 px) |
| CSS gzip, whole build (G16) | 27,293 B | 23,485 B (-3,808) |
| JS gzip, whole build (G16) | 50,363 B | 49,789 B (-574) |
| fonts in the build | 61,956 B | 222,984 B (+161,028, seven new woff2 files) |
| images in the build | 635,244 B | 758,904 B (+123,660, the two pack images) |
| HTML, all pages (repo path) | 857,134 B (19 pages) | 776,317 B (20 pages) |
| largest HTML | `/` 138,341 B | `/` 64,647 B |
| a first visit to Home, raw bytes: html / css / js / font / image / requests | 138,340 / 31,162 / 145,550 / 61,956 / 75,896 / 10 | 64,647 / 71,169 / 143,683 / 222,984 / 199,556 / 20 |
| a first visit to Pricing | 38,808 / 55,945 / 145,550 / 61,956 / 34,742 / 11 | 39,592 / 72,904 / 143,683 / 217,284 / 158,402 / 21 |
| a first visit to the Cafe page | 43,660 / 45,319 / 145,550 / 61,956 / 66,758 / 12 | 41,456 / 59,766 / 143,683 / 217,284 / 190,418 / 20 |
| a first visit to Refund | 33,575 / 36,726 / 145,550 / 61,956 / 34,742 / 10 | 32,567 / 74,804 / 143,683 / 207,056 / 116,750 / 20 |
| `browser_check.py --target-min 48` | exit 1, 76 rows, 76 FAIL rows, 76 WARN rows | exit 0, 80 rows, 0 FAIL, 0 WARN |
| `fold_check.py` | 53 WARN, 0 sideways | 43 WARN, 0 sideways |

Notes. The first-visit bytes are raw (the local server does not gzip), counted per response body, run 1, 390 px. I did not measure gzip bytes per visit. The G16 CSS total falls although a visit loads more CSS, because Stages 3 to 5 deleted the old inline `<style>` blocks of the pages (Stage reports) and a page now loads 3 to 6 stylesheet files (74,804 B raw on Refund, against 36,726 B). Honest reading: in the lab the final build is slower in most cells by a median of 18 ms, the runs inside one cell differ by up to 56 ms, and what this means on a real phone network I do not know. `browser_check.py` also reports one LCP and CLS per row (80 rows, one run each) in `/tmp/bc_fin.txt`; its LCP values lie between 72 and 180 ms (median 128 ms; B0: 76 rows, 52 to 356 ms, median 108 ms), CLS up to 0.017 (price guide at 768 px).

## 9. Allow lists: totals and the reason of each line

Totals: `allow_removed.txt` 16 text lines, `allow_new.txt` 74 text lines, 90 in all. I removed each line once and re-ran the gate against B0 (`allowtest.py`, 90 runs): **70 lines are needed (removing one adds a finding), 20 are not needed against B0**. Removing all 20 at once gives the same result: 1 FAIL, 42 WARN, the same findings. That proves them unused. They were needed in the stage that added them, against that stage's base. Against B0 they do nothing.

`docs/redesign/allow_removed.txt` (text that may disappear):

| lines | reason | needed against B0 |
|---|---|---|
| 2: `/ || Actual Zipla POS QR customer-menu screen.`, `/ || Actual Zipla POS screen` | Stage 2. You dropped the old customer-menu figure from Home. The label line is shared with 4 figures that stay (Stage 2 report, section 7) | yes, 2 of 2 |
| 12: the old delivery pieces, `/ ||` x3, `/pricing/ ||` x3, one on each of the six business pages | Stage 5b part 1. D1 replaces them | no (B0 never had them) |
| 2: `/ ||` and `/pricing/ ||` the old strip words "1 year on the motherboard. Repair, not replacement. ..." | Stage 5b fix round. D2 replaces them | no (B0 never had them) |

`docs/redesign/allow_new.txt` (text that may appear):

| lines | reason | needed against B0 |
|---|---|---|
| 1: `Skip to content` | Stage 1, decision D2, the skip link on all 19 pages | yes |
| 48: the pack's `offer/allow_new.txt` (machine name, `₹4,999`, Buy now, `with 12 months of Zipla POS:`, the Home paragraph, the slip, the sticky bar, the strip, the steps, the offer card, the sample bill, the Razorpay line) | Stage 2. OFFER.md section 3, appended whole. Some lines belong to other bands (M card, S band, L band), the gate cannot tell which page may carry them | 42 yes, 6 no: the old `With 12 months of Zipla POS. Delivery in 3 to 4 days.`, `3 to 4 days`, the old step 01, the old offer card text, the old strip words, and `.` (the strip's last piece, which B0 has anyway) |
| 6: `See pricing` once for each business page | Stage 3. The link text of the L band; the repo did not have it on those pages | yes |
| 2: `See pricing` on `/faq/` and `/contact-us/` | Stage 4. M card | yes |
| 8: `See pricing` on the blog index, four guides, Privacy, Terms, Refund | Stage 5. M card and S band | yes |
| 4: the new delivery pieces ("3 to 4 working days after dispatch" in four strings) | Stage 5b part 1. D1 | yes |
| 1: `Shipping Policy` | Stage 5b part 2. The Footer link, new text on every page | yes |
| 2: the two warranty paragraphs, scoped to `/refund-policy/` | Stage 5b part 2. D3 | yes |
| 1: `1 year on the motherboard. Repair support. No cover for physical damage. Terms are in the` | Stage 5b fix round. D2 | yes |
| 1: `/refund-policy/ || Zipla Billing Machine: warranty and returns` | Stage 5b fix round. D3, the new h2 (it turns the G5 FAIL into the one G5 WARN) | yes |

The 20 unused lines are listed in section 12 as a suggestion. They are in the repo as merged. I did not delete them.

## 10. Deviations from the pack

1. **None in `gate/` or the pack.** `gate/forbidden.txt` is unedited: both PROOF lines are "none", so the two claim entries stay and the final build contains neither phrase (6.2). The 98 files of the zip equal the files I ran. OFFER.md is unedited.
2. **`--allow-new-page /shipping-policy/`** for G2 (the new page, D3), and the G1 FAIL on the sitemap that the gate cannot silence (section 4).
3. **B0 was not rebuilt after a merge of `main`.** `main` only added docs (section above). I built B0 twice: in `/tmp/b0_tree` (the worktree of BRIEF 6.4) and in the repo path, for comparable byte counts (6.10). The gate report is the same for both.
4. **Allow lists not cleaned** (section 9).
5. **Exit code of `compare` is 1** because of the one expected FAIL, not 0 as the brief defines "done". I did not edit the gate.

## 11. Noticed, not changed (from every stage, and what I found in this one)

Status words: "still true" means I checked it on the final build with a command in this stage. "not re-checked" means I carried the item over from the stage report and did not test it again.

**Stage 0**
1. `npm ci` prints "11 vulnerabilities (2 moderate, 8 high, 1 critical)". Still true (this session). Dependencies are off limits.
2. The build log has deprecation warnings from `vite` and `esbuild`. Still true (18 lines in the final build log).
3. `/faq/` showed 18 always-visible h2 questions. Changed on purpose in Stage 4: closed `<details>` with the h2 inside the summary.
4. `/blog/` is more than a post list (9 h2, 11 h3, 4 questions, a process list, a date line). Unchanged.
5. Repeated text inside one page on 4 pages. Not re-checked.
6. Typed numerals in 36 headings (GST guide 5, checklist 10, price article 7, Terms 14). Kept (Stages 3 and 5).
7. The word "checkout" is in 4 pages (`/`, Cafe, Bakery, Dhaba). Still true: the same 4 files in B0 and final.
8. `ss-gst-invoice.webp` is 1234x864 on disk and `width="1232" height="860"` in the HTML. Still true (verified on 2 pages).
9. Four pictures in `public/` that no page uses: `ai-menu-review-screen.webp`, `ai-menu-scan-workflow.webp`, `ai-menu-scan-workflow-v2.webp`, `zipla-icon.webp`. Still true (0 built pages).
10. `Testimonials.jsx` renders nothing but is still built as `_astro/Testimonials.-Fzy-VPy.js`. Still true.
11. `/404.html` is `noindex`, has no canonical, is not in the sitemap and carries the global JSON-LD. Unchanged (G3, G4 pass).
12. `_redirects` has 8 no-slash redirects and none for `/contact-us`, `/blog`, `/refund-policy`, `/qsr-billing-software`, `/dhaba-billing-software`. File byte-identical. Whether Cloudflare handles those, and `/shipping-policy` without a slash: I do not know.
13. No `llms.txt`, `_headers` or `security.txt`. Still true.
14. The Footer had no Shipping Policy link. Closed in Stage 5b: the link is on 20 of 20 pages.
15. Title length 77 to 83 characters on the four guides, meta description 189 characters on the checklist. Unchanged (G3).
16. "Get a Free WhatsApp Demo" (header) and "Book a WhatsApp Demo" (hero) both go to `/#demo`. Unchanged.
17. The default `ogImageAlt` is "Zipla POS logo on a dark background". Unchanged (G3). The site is light now. I did not look at the image file.
18. Spelling: nobody ran a spell check. I do not know.
19. Heading levels. Checked again: 20 of 20 pages have one H1 and no skipped level.
20. External links (13) are not tested for loading. Not re-checked.

**Stage 1**
1. The old light theme was broken on `/privacy-policy/`. Moot, the toggle is gone, the old rules are still in `index.css` (lines 319 to 354). Not re-checked.
2. Old CSS no markup uses any more (`.brand-logo`, `.nav-links`, `.theme-toggle`, `.footer-links` and more). Not deleted (R13).
3. At load the cookie script focuses the first link in the box and the focus ring shows. The repo's behaviour (R10).
4. The Bricolage preload (76,868 B) was only used by the cookie box heading until Stage 2. Not re-checked.
5. Page-body targets under 24 px. Closed by Stages 2 to 5: `browser_check.py` now shows 0 FAIL and 0 WARN at 48 px in all 80 rows (inline text links in a paragraph are exempt in that tool).
6. 24 to 43 px buttons in bodies. Same: 0 WARN now.
7. `public/fonts/LICENSES.txt` lists only Syne and Plus Jakarta Sans. Still true (grep: no Bricolage, Figtree or DM Mono line). The licence text of the three new families was not read. You check https://openfontlicense.org once.
8. `Layout.astro` has mixed line endings. Not re-checked.
9. `/blog/` has an FAQ, a process list and a date line. Unchanged.

**Stage 2**
1. Old `index.css` rules Home no longer uses (`.hero*`, `.trust-*`, `.buyer-answer*`, `.biz-*`, `.workflow-*`, `.qa-*`, `.price-*`, `.faq-*`, `.demo-form*`, `.section-head`). `IndustryShopScene.jsx` is unused. Not deleted.
2. The skip link target is the empty `div#zp-content`. Still true: `<div id="zp-content" tabindex="-1">`, and `<main>` has no id.
3. Keyboard order on laptops: the eye sees Buy now first, the keyboard reaches "Book a WhatsApp Demo" first.
4. The hero callouts were hidden below 561 px by the old CSS and are visible on every width now.
5. The workflow panels are `<details name="workflow-accordion">`, so opening one closes the others (the repo did that already).
6. Heading levels on Home: none skipped.

**Stage 3**
1. Dead CSS: `src/vertical-page.css` is used by no page now (Stage 4), most `index.css` page rules are unused. Still true for `vertical-page.css` (no importer, only a comment in `business.css`).
2. The pack's Restaurant tab is older than the repo's page. I followed the repo.
3. The pictures show other business names: "Hot Spot Pizza" on the dashboard and GST invoice, "Crispy King" on the Restaurant page's three-device picture.
4. The eyebrow repeats the H1 words on every business page (repo text).
5. "checkout" on four pages, and the weight-billing claims on the bakery and sweet shop pages are not checked against the app.
6. Heading levels: none skipped.
7. `ss-gst-invoice.webp` size mismatch (as Stage 0 item 8).
8. Header and Footer are the Stage 1 ones (dark logo tile, menu button on phones); the pack draws a transparent logo and inline links.

**Stage 4**
1. `vertical-page.css` has no importer; `index.css` still holds rules for classes these pages no longer use.
2. FAQ text: "Each answer below is visible on this page and is also represented in the matching FAQPage schema." With closed answers "visible" now means one tap away. Repo text.
3. The strip's Warranty cell said "Terms are in the Refund Policy" while that page had no warranty text. Closed in Stage 5b (the built Refund page has "warranty" and "motherboard").
4. `<div aria-label="Zipla POS Complete plan price">` on Pricing has a name but no role. Whether Lighthouse flags it: I do not know.
5. The pack's FAQ and Contact tabs leave out text the repo has ("Quick answer", "Who this FAQ is for", the Contact lead-in). It all stays (G6).
6. On a laptop the first screen of Pricing shows two gold buttons, "Start 14-Day Free Trial" and Buy now.
7. The date lines are the repo's ("Last reviewed: 22 September 2026" on Pricing and others).
8. Heading levels: none skipped. The 18 FAQ questions are still h2 and the 4 Contact questions h3.
9. Header and Footer are the Stage 1 ones.
10. The word "Hot Spot Pizza" is in the dashboard picture, old and new.

**Stage 5**
1. Terms says prices "are inclusive of applicable taxes" next to the machine price.
2. Two ₹4,999 on some pages (the machine, and the software plan "₹4,999 per year"). A reader can take them as one offer. You accepted this in OFFER.md section 7.
3. The Refund page had no warranty text. Closed in Stage 5b.
4. Typed numerals stay in 36 headings.
5. The blog index is more than a post list.
6. `ss-gst-invoice.webp` size mismatch; the picture shows "Hot Spot Pizza".
7. Titles of the four guides 77 to 83 characters and the checklist meta description 189 characters.
8. Heading levels: none skipped; questions are h3 inside the summary on all 8 pages with a FAQ.
9. The skip link target is still the empty div.
10. Header and Footer are the Stage 1 ones.
11. Old rules no page uses; the shared sheets of Stages 3 to 5 (`machine.css`, `machine-m.css`, `machine-s.css`, `business.css`, `inner.css`, `reading.css`) could be one file.
12. The legal pages have a small "Zipla POS" label above the H1 and the blog index "Zipla POS Blog" (repo text).

**Stage 5b**
1. "Repair, not replacement" in the strip against "replaced within 7 days" in the paragraph. Closed by the fix round (D2). The strip now says "Repair support".
2. The Refund date line and `dateModified` (still "August 25, 2026" and 2026-08-25). Still true.
3. The warranty paragraphs sat under the contact h2. Closed by the fix round (the new h2).
4. "Includes everything" and "no tax" (OFFER.md section 5 lists GST as open). Still true.
5. The four old lines in `allow_new.txt` (Stage 5b's own suggestion for Stage 6). Measured here: 20 unused lines, section 9.
6. The Refund page's FAQ and FAQPage JSON-LD say nothing about the machine. JSON-LD is off limits (R3).
7. `/shipping-policy` without a slash and `_redirects`. I do not know.
8. The new page's outline has two extra `h2`, the cookie dialogs of `Layout.astro` that every page carries.
9. The delivery line wraps with one word on the second line on a laptop.
10. Keyboard order on the new page: skip link, Buy now, See pricing, the e-mail link, Footer.
11. The skip link target is still the empty div.
12. The heading "Zipla Billing Machine: warranty and returns" says "returns" while the second paragraph says there is no return and no refund after dispatch. Both are your words.
13. The Stage 5b report file (`stage5b.md`) still holds the round-1 text (old strip words, no heading). The PR 38 body replaced it, the file was not synced. This is why this report quotes the fix round from the PR 38 body and from commit 467453f.

**Found in Stage 6**
1. The HTML size depends on the build path (6.10).
2. The G5 message for `/refund-policy/` says "different order" where the cause is one added h2.
3. `fold_check.py` measures the first link after the H1, not Buy now, so its WARN rows do not say where Buy now is. `foldbuy.py` (mine) measures it.
4. Old `<html data-theme="dark">` stays in every page (Stage 1, D5). New CSS does not read it. A visitor with an old saved `zipla-theme` value gets a light page (60 runs).
5. The `Stage 5b` report does not contain the six shipping paragraphs (6.8).
6. Per-visit weight is higher than on B0 (section 8).

## 12. Left for later (suggestions, not done)

Everything below is **suggestions, not done**. Nothing in this list is in this pull request.

- **Open items of OFFER.md section 5:** GST on 4,999 rupees and what a page may say about it (with the CA); box contents (only if you want them shown); the Refund date line and `dateModified` (needs your date and your word for R3); phone pictures on the business pages, because the pack's dashboard picture shows "Hot Spot Pizza" (your own screenshots); the edited printer photo (the real device's panel text is not known); a bundle Offer in the JSON-LD (a separate pull request on your word). The renewal line "To continue after 1 year, Zipla POS is ₹4,999 a year." is OFFER.md's default. I do not know whether you confirmed it: the repo holds no record of it.
- **Content tasks:** reword the FAQ sentence "Each answer below is visible on this page"; check the weight-billing and barcode claims of the bakery and sweet shop pages against the app; a spell check; sentences that now repeat across pages; titles and meta descriptions of the four guides; say whether the heading "...warranty and returns" fits the "no return" paragraph.
- **Allow lists:** delete the 20 unused lines (section 9) in a docs-only pull request, so the old wording cannot slip back in.
- **Legacy CSS that is now unused (not deleted, R13):** most page rules of `src/index.css`, the whole of `src/vertical-page.css` (no importer), the old light-theme block (`index.css` lines 319 to 354), the old header and footer classes (`.brand-logo`, `.nav-links`, `.theme-toggle`, `.footer-links` and others), `src/components/IndustryShopScene.jsx`, and the `Testimonials` chunk. Also the 59 raw colour lines and 21 font-family lines of the old sheets that the token check still lists.
- **Speed and weight:** merge the six stylesheets of Stages 3 to 5 into one file; look at the seven font files a visit loads; a preload for the latin-ext Bricolage file (the rupee sign) and the DM Mono file (the shifts seen in Stage 5) belongs in `Layout.astro` (R3); measure Lighthouse and field data; decide if the 18 ms of lab LCP matter.
- **Small code items:** move the skip link target to `<main id="zp-content">` and delete the empty div; remove the static `data-theme="dark"` from `<html>`; add the transparent logos (the pack has none); add the three font families to `public/fonts/LICENSES.txt` after you read the OFL; add a redirect for `/shipping-policy` without a slash if Cloudflare does not do it (I do not know).
- **Watch:** Search Console for 28 days after the release. Nobody can say what happens to rankings before that.

## 13. Not verified

- The Buy now link (section 3). The e-mail, WhatsApp, GST, real phone and Safari items of section 3.
- Whether the six shipping paragraphs equal your original text (6.8).
- Every policy fact in the shipping and Refund texts (DTDC, free shipping, 24 to 48 hours, 3 to 4 working days, 48 hours, free replacement, 1-year warranty, 7-day replacement, no refund after dispatch) and whether the texts are enough in law.
- The Cloudflare preview page and the production deploy. I read no deploy status here; after the pull request is opened its checks show whether a preview was built.
- Lighthouse. Not run.
- Speed on a real network. My LCP numbers are a localhost lab.
- Whether the `uid` hash differs between two machines in the same path, and what the Cloudflare build path gives (6.10).
- Search effect, rankings, AI answers, the effect of closed FAQ answers: I do not know.
- Other browsers than headless Chromium 153, a screen reader, a real phone.
- `price_sync_check.py` is not used in Round 7 and was not run.
- Whether Cloudflare redirects URLs without a trailing slash.

## 14. Commands run

```
cp <upload> /tmp/pack.zip && sha256sum /tmp/pack.zip   # e620d65d8c7309eeb376b67dbc34328de0a618fdf4441f010a6aea268354fb3d, equals the prompt (the upload is named ...r71.zip)
unzip -q /tmp/pack.zip -d /tmp/pack
python3 -I /tmp/pack/redesign-ref-r7/gate/selftest.py   # last line SELFTEST OK
python3 -m venv /tmp/pwvenv && /tmp/pwvenv/bin/pip install playwright==1.63.0   # playwright install was not run
git fetch origin main redesign/integration ; git fetch --unshallow origin
git diff --stat 419cc53..origin/main   # 5 files, all under docs/redesign/
git switch -c redesign/stage-6-final origin/redesign/integration && git branch --unset-upstream
git worktree add /tmp/b0_tree 419cc531ac67c75ec5ab5384a3c5c9880b64dfca   # B0
(cd /tmp/b0_tree && npm ci && npm run build)             # 19 pages, exit 0
npm ci && npm run build                                  # final, 20 pages, exit 0, git status clean
seo_gate.py snapshot /tmp/b0_dist /tmp/b0.json ; snapshot /tmp/rp_b0 /tmp/b0_rp.json ; snapshot /tmp/fin_dist /tmp/fin.json
seo_gate.py compare /tmp/b0_rp.json /tmp/fin.json --allow-removed ... --allow-new ... --allow-new-page /shipping-policy/ --forbidden <pack>/gate/forbidden.txt --report ...   # 1 FAIL, 42 WARN
browser_check.py /tmp/b0_dist --out ... --target-min 48     # exit 1, 76 FAIL, 76 WARN
browser_check.py /tmp/fin_dist --out ... --target-min 48    # exit 0, 0 FAIL, 0 WARN
fold_check.py /tmp/b0_dist ; fold_check.py /tmp/fin_dist    # 53 WARN and 43 WARN, 0 sideways
offercheck.py /tmp/fin_dist OFFER.md ; 10 broken copies      # PASS, only D1 and D2 ; 10 x exit 1
buycheck.py /tmp/fin_dist ; forbid.py ; grep -rniE '10 minutes|No training needed' ; grep -rF "3 to 4 days" ; grep -rF "Repair, not replacement" ; grep -oF "3 to 4 working days after dispatch"
JSON-LD byte compare of 19 pages, new page printed ; cmp of the SEO files ; diff of sitemap-0.xml ; diff -rq of the two builds
shipping and warranty paragraphs against src/pages/shipping-policy.astro, allow_new.txt, commit 296f09e and stage5b.md
allowtest.py (90 compare runs, one allow line removed each) ; prune run
perf.py (LCP, CLS, loaded bytes, 3 runs per cell, 2 builds) ; theme.py (60 runs) ; foldbuy.py (100 cells)
npx astro build --outDir ... in the repo path for 25dbe67 and for B0, and in /tmp/base_tree, /tmp/int_tree, /tmp/fin_tree and a 66 character path   # 6.10
the five static checks of BRIEF section 9 against origin/main
git add docs/redesign/FINAL.md && git commit && git push -u origin redesign/stage-6-final
the draft pull request, base main (see the PR)
```

My own scripts (Python and Playwright, in the session's scratch folder, not committed): `offercheck.py`, `buycheck.py`, `forbid.py`, `allowtest.py`, `perf.py`, `theme.py`, `foldbuy.py`. Nothing of the pack, the prototype or the screenshots is in the repo.

## Appendix. Pre-mortem for the release (BRIEF 4.3), and the command that caught each

1. Text lost or changed: G6, G7 pass on 19 of 19 (17 and 2 WARN explained).
2. Heading changed, re-levelled or reordered: G5 18 PASS, 1 WARN (the h2 you asked for); 20 of 20 pages have one H1 and no skipped level.
3. Link lost: G9 0 FAIL; 19 WARN are new links, listed.
4. Head tags or JSON-LD changed: G3 and G4 19 of 19, and the byte compare in 6.5.
5. Content hidden or generated by CSS: grep check 3 of section 9 (6.11), no text hidden; closed `<details>` answers are the only hidden text (section 2, item 3). The gate cannot see CSS, so this one rests on the grep and on the stage reports.
6. LCP slower: measured (section 8): +18 ms in the lab median.
7. Layout shift: CLS median 0.000 to 0.012, none above 0.1.
8. Sideways scroll or small tap targets: `browser_check.py` 0 FAIL, 0 WARN at 48 px; `fold_check.py` 0 sideways; `foldbuy.py` 100 cells, no sideways, Buy now at least 48 px.
9. Text that needs JavaScript: G6 reads the built HTML; `grep client: src` finds only `Header` (every page), `DemoForm` and `Testimonials` (Home, old) and no `client:` in any component that the redesign added; no new `<script>`.
10. An offer fact differs from OFFER.md: the offer check, 74 checks, only D1 and D2.
11. A string from OFFER.md section 4 reaches a page: G15 19 PASS and `forbid.py`, 0 hits.
12. A wrong Buy now address: `buycheck.py` 22 of 22 equal to your address, 0 `.invalid`. Whether the address works: I do not know.
13. The sitemap or a SEO file changed by accident: G1 and `cmp`, one sitemap line only.
14. The release carries a page that was not meant to go live: G2, 20 pages, `/shipping-policy/` is the only new one.
15. A tool exit code read wrongly: no run ended in exit 3. `compare` exit 1 is the one expected FAIL.
16. `main` moved while I worked: `git fetch origin main` at the end, still e622582.
