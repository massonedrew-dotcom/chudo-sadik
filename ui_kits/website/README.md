# Чудо Садик — Website UI kit

A high-fidelity, clickable recreation of the **Чудо Садик** marketing website, built entirely from the design-system foundations and components.

> No existing product/site was supplied — this is an original on-brand build that demonstrates the system in a realistic marketing context (not a recreation of a live site).

## Run it
Open `index.html`. It loads the design-system bundle (`../../_ds_bundle.js`) + tokens (`../../styles.css`), Lucide icons (CDN) and the kit's section files.

## Homepage directions
A floating switcher (bottom centre) toggles **three hero/homepage directions** for comparison:
- **☀️ Солнечный (sunshine)** — gradient headline, radial-sun background, hero photo + stat badge. The flagship.
- **🎨 Яркие плитки (tiles)** — headline beside a colourful cluster of programme tiles + photo.
- **🤍 Спокойный (calm)** — full-bleed photo hero with a dark protection gradient; parent-reassurance led.

## Interactions
- **Programmes** — category filter chips (`Tag`) filter the `FeatureCard` grid live.
- **Enrolment** — the form (`Input` + `Button`) validates required fields and shows a success state on submit.
- Header nav, buttons and cards have full hover/press states.

## Files
| File | Role |
|------|------|
| `index.html` | Entry — loads bundle + sections, mounts `App`, keeps Lucide icons fresh |
| `Common.jsx` | Shared helpers: `Ic` (Lucide), `Photo` placeholder, `Blob`, `SunMark` |
| `Header.jsx` | Sticky translucent header — brand, nav, Telegram + CTA |
| `Hero.jsx` | The three homepage directions (`direction` prop) |
| `Programs.jsx` | Nine programmes with live category filter |
| `Care.jsx` | "Why parents choose us" + a Telegram daily-report card |
| `Enroll.jsx` | Enrolment CTA band with interactive form |
| `Footer.jsx` | Dark footer with link columns + socials |
| `App.jsx` | Composes all sections + direction switcher |

## Composition notes
- Section files use the **window-global** pattern (defined as `window.X`) so multiple Babel files share scope. They are app code, not design-system components.
- Reusable primitives (`Button`, `Badge`, `Card`, `FeatureCard`, `Input`, `Avatar`, `SectionHeading`, `Tag`) come from `window.DesignSystem_52b7c1` — composed, never re-implemented.
- **Photos** are placeholder blocks (`Photo`) marking where real imagery goes. Replace with bright, warm, naturally-lit photos of children at the садик. *(Flagged: no brand photography was supplied.)*
