# Чудо Садик — Design System

> **Чудо Садик** ("Miracle Kindergarten") *by Color Baby House* — a private kindergarten / daycare for children **aged 1–7**. The brand is warm, bright and reassuring: a sun built from children's painted handprints, glowing from yellow through orange and pink into purple.

This design system turns that single brand mark and its voice into a complete, reusable toolkit — colours, type, components and a marketing-website UI kit — so any agent or designer can produce on-brand material instantly.

---

## 1. Brand context

- **Name:** Чудо Садик (Russian: *Чудо* = wonder / miracle; *Садик* = kindergarten). Sub-brand line: **by Color Baby House**.
- **What it is:** a full-day private kindergarten for ages **1–7**, positioned as caring, developmental and safe.
- **Offer (from the operator's own words):**
  - 5-разовое питание (5 meals a day)
  - Забота о детях + ежедневный отчёт в Telegram-группе (daily photo/report to parents)
  - Развивающие занятия: актёрское мастерство, английский язык, танцы, шахматы, логопед-дефектолог, развивающие игры, массаж (курс), гимнастика, робототехника.
- **Audience:** parents of toddlers & preschoolers (the buyer) and the children themselves (the experience). Messaging must reassure the parent (safety, care, development) while feeling joyful to the child.
- **Language:** Russian (primary).

### Sources provided
- `uploads/Logo_chudo_white.png` → copied to `assets/logo-chudo.png` (1760×1760, the sun-of-handprints mark + "ЧУДО / by Color Baby House" wordmark).
- `uploads/ofont.ru_Riffic (2).ttf` → copied to `fonts/Riffic.ttf` (the display face used in the wordmark). **Latin-only — no Cyrillic glyphs** (see Typography note below).
- No codebase, Figma or live product was supplied. The website UI kit here is an original, on-brand build grounded entirely in these foundations (not a recreation of an existing site).

---

## 2. Content fundamentals — how Чудо Садик writes

**Voice:** a warm, smiling host welcoming you to a home. Caring and human, never corporate or clinical.

- **Person & address:** speaks as **«мы»** (we, the garden) to **«вы / вас»** — polite second person. Warm but respectful of the parent. Example: *«Мы рады поприветствовать вас в нашем садике»*.
- **Tone:** reassuring + cheerful. Short, plain sentences. Concrete promises (ages, meals, daily reports) rather than abstract marketing claims.
- **Casing:** sentence case everywhere in prose. The wordmark **ЧУДО** is the only all-caps lockup. Avoid SHOUTING in body copy.
- **Punctuation & warmth:** gentle exclamation marks are welcome (*«Добро пожаловать!»*). Em-dashes and simple bulleted lists for the programme.
- **Emoji:** **yes, sparingly** — the operator naturally writes with ✨ and 😊 in parent-facing channels (Telegram, social). Use 1 warm emoji to close a friendly line; never stack them in formal web headings. Brand-appropriate set: ✨ 😊 ☀️ 🎨 🧩 💛.
- **Numbers as trust signals:** lead with the facts parents care about — «от 1 до 7 лет», «5-разовое питание», «ежедневный отчёт».
- **What to avoid:** jargon, pressure/scarcity tactics, cold institutional phrasing ("учреждение осуществляет…"). Keep it human.

**Sample lines (reuse / adapt):**
- Hero: *«Чудо начинается здесь»* / *«Садик, где детям хочется остаться»*
- Sub: *«Развивающий садик для малышей от 1 до 7 лет»*
- Reassurance: *«Забота, тёплая атмосфера и ежедневный отчёт в Telegram»*
- CTA: *«Записаться на экскурсию»*, *«Узнать о местах»*

---

## 3. Visual foundations

The whole system radiates from one idea: **a sun made of children's hands.** Warm gradient, soft rounded shapes, lots of light cream space, gentle shadows.

### Colour
- **Signature:** the **sun gradient** `--gradient-sun` (yellow → orange → pink → purple, 135°). Used for the wordmark, hero accents, key CTAs and the radial "sun" motif. Use it as a *hero* element, not as a wash behind everything.
- **Primary interactive colour:** **pink `--color-primary` (#FF4D97)** — buttons, links, active states. Energetic and friendly.
- **Support:** warm **orange** (`--color-secondary`) and **purple** (`--color-accent`) pull from the wordmark; sunny **yellow** is the "spark".
- **Playful accents:** **sky blue** and **mint green** extend the warm core for category-coding the programmes (English, dance, chess, robotics…) — see `--cat-*` tokens.
- **Neutrals are WARM, never cold grey:** page background is **cream `--cream` (#FFFBF4)**, surfaces are white, text is a deep plum-charcoal **`--ink-900` (#2E2740)** — never pure black. Borders are a warm sand hairline `--border`.
- **Imagery vibe:** bright, warm, naturally-lit photos of children playing/learning. Sunny, saturated, joyful — no cold or moody grading, no black & white.

### Type
- **Display — Rubik (700/800):** chunky, friendly, rounded-corner sans for headings & the wordmark voice. Full Cyrillic.
- **Body — Nunito (400/600/700):** humanist rounded sans, very readable, warm. Full Cyrillic.
- **Accent — Riffic:** the bold rounded face from the logo, **Latin only** — reserve for the *"by Color Baby House"* lockup and decorative Latin flourishes. **Never set Russian in Riffic** (no glyphs).
- Headlines are tight (`--tracking-tight`), large and bold; body is generous (`--leading-relaxed`). Overlines/eyebrows are uppercase Nunito-extrabold with wide tracking.

### Shape, depth & motion
- **Corners:** everything is generously rounded — cards `--radius-lg/xl` (28–40px), buttons are **pills** (`--radius-pill`), avatars/icon chips are circles. Almost nothing has a sharp 90° corner.
- **Cards:** white surface, large radius, **soft warm shadow** (`--shadow-md`), optional 1px `--border` hairline. No harsh outlines. Hero/feature cards may use a pastel tint fill (`--pink-50`, `--orange-50`, `--sky-50`) or a colour glow (`--shadow-pink`).
- **Shadows:** two families — neutral soft drops (`--shadow-xs…xl`, warm-tinted, low opacity) and **coloured glows** under primary CTAs / playful tiles (`--shadow-pink/orange/yellow/purple`). No inner shadows; depth is light and floaty.
- **Backgrounds:** mostly flat cream or white with breathing room. Decorative touches: the **radial sun gradient** behind hero, soft pastel blobs, the handprint/sun mark as a watermark. Avoid heavy full-bleed gradients on every section.
- **Borders:** thin warm hairlines only; the brand prefers *fill + shadow* over outlines.
- **Transparency / blur:** light use — a translucent white sticky header with subtle backdrop-blur; pastel colour washes at low opacity. Not a glassmorphism-heavy system.
- **Motion:** gentle and playful. Default `--ease-out` for entrances; `--ease-bounce` (slight overshoot) for delightful moments (button press pop, badge appear). Durations 140–360ms. Fades + small rises + scale pops. No long or aggressive animation.
- **Hover:** buttons darken one step (`--color-primary-hover`) and lift (raise shadow); cards lift `translateY(-4px)` with a stronger shadow.
- **Press:** scale down slightly (`scale(0.97)`) and settle the shadow — a tactile "squish".
- **Focus:** soft pink ring `--ring` (4px, 28% pink). Always visible, never removed.

---

## 4. Iconography

There is **no proprietary icon set** in the supplied brand. Recommendation, applied across this system:

- **Set:** **Lucide** (https://lucide.dev) via CDN — open-source, consistent 2px stroke with **round line-caps & joins**, which matches the brand's soft rounded geometry. *(Substitution — flagged: no original icon font/SVG existed in the brand assets. Swap if the operator has a preferred set.)*
- **Style rules:** line icons at 2–2.25px stroke, rounded caps; size 20/24/32. Tint with brand colours (`--color-primary`, category colours) or `--ink-700`. For playful feature tiles, place a line icon inside a **soft circular colour chip** (pastel fill + matching solid icon).
- **Emoji** are an *accepted, light* accent in marketing copy (see Content Fundamentals) — not a substitute for UI icons.
- **Programme icons** map to Lucide glyphs, e.g. English → `languages`, dance → `music`, chess → `crown`/`castle`, acting → `drama`/`venetian-mask`, robotics → `bot`, speech → `mic`, games → `puzzle`, gymnastics → `activity`, meals → `utensils`, reports → `send` (Telegram).
- **The sun-of-hands logo** is the one bespoke "icon"; use `assets/logo-chudo.png` rather than redrawing it.

Usage: `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="heart"></i>` + `lucide.createIcons()`.

---

## 5. Index / manifest

```
styles.css                     ← global entry (consumers link THIS)
tokens/
  fonts.css                    @font-face: Rubik, Nunito, Riffic (self-hosted)
  colors.css                   colour scales + semantic aliases + gradients
  typography.css               families, scale, weights, roles
  spacing.css                  spacing, radii, shadows, motion, z-index
  base.css                     element defaults + .cs-* helpers
fonts/                         self-hosted .woff2 (Rubik, Nunito) + Riffic.ttf
assets/                        logo-chudo.png (sun-of-hands wordmark)
guidelines/                    foundation specimen cards (Design System tab)
components/core/               reusable React primitives (Button, Card, Badge, …)
ui_kits/website/               marketing-site UI kit (home, programmes, about, enrol)
SKILL.md                       Agent-Skill manifest
readme.md                      this file
```

**Components:** see `components/core/` — Button, IconButton, Badge, Tag, Card, FeatureCard, Input, Avatar, SectionHeading (each with `.jsx` + `.d.ts` + `.prompt.md`).
**UI kit:** `ui_kits/website/` — full marketing site with several homepage directions.

*Compiler note:* `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated automatically — do not edit. Namespace for cards: `window.DesignSystem_52b7c1`.

---

## ⚠️ Caveat for the user
The logo's display face **Riffic has no Cyrillic glyphs**, so Russian headings use **Rubik** (the closest chunky-rounded Cyrillic match) — see the Type cards. If you have a Cyrillic display font that matches the wordmark exactly, send it and I'll swap it in.
