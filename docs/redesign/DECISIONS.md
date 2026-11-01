# Decisions (Kabir, 2026-10-31)

Kabir's answers to the six decisions of `STAGE0.md` section 13, word for word as the Stage 1 prompt gave them. Later stages read this file, not the pack.

D1. Machine first on the first screen, mobile first. (No effect in Stage 1: the band comes in Stage 2 to 5.)

D2. Add the skip link. Text: "Skip to content". Append /tmp/pack/redesign-ref-r7/offer/allow_new_stage1.txt to docs/redesign/allow_new.txt.

D3. On phones the picture comes first, but the H1 and a Buy now button must be visible inside 390x844. (No effect in Stage 1.)

D4. One integration branch, one release. Nothing reaches main before Stage 6.

D5. Light only. The dark toggle is retired. You may change src/layouts/Layout.astro at the theme code that STAGE0.md section 2.8 lists (line 94 and lines 130 to 140 on B0) to retire the toggle, and nowhere else in that file. The JSON-LD stays byte-identical. Every other Layout.astro edit stays inside the allowed list in STAGE0.md section 11. The theme lines are outside the allowed lines of R3 in general. Kabir allowed them for this one purpose. List it first under "Needs Kabir's OK".

D6. Default. Product pictures: no change in Stage 1.

Kabir also decided: warranty, delivery, the Buy now link and the shipping policy are later stages. Do nothing about them now.

## How Stage 1 applied them (facts for the next sessions)

- D2. The skip link is `a.zp-skip` at the top of `src/components/Header.jsx` (text "Skip to content", target `#zp-content`). The target is an empty `div#zp-content` right after the `<header>`, because the pages' own `<main>` elements have no id and Stage 1 may not edit page bodies. A later stage that edits a page may move the target to `<main id="zp-content">` and delete the empty div.
- D5. The toggle button, its icon, its state, the saved-theme read in `Header.jsx` and the inline init script in `Layout.astro` (B0 lines 130 to 140) are removed. Line 94 (`data-theme="dark"`) is left as it is: it is only a styling hook for the legacy CSS of old page bodies (three components key their dark styles off `[data-theme=dark]`), and nothing sets or reads it any more. New CSS never reads it. The old bodies stay dark until their own stage converts them.
- Opt-in base look: `Layout.astro` has a `zp` prop. `<Layout zp ...>` puts the class `zp` on `<body>`. `.zp` (in `src/styles/frame.css`) switches on the paper background, the body font and the heading font. No page uses it in Stage 1.
- Naming. Frame classes (header, footer, skip link) use the prefix `zp-` and work on every page. Page components from Stage 2 on use the prototype's class names scoped under `.zp`.
