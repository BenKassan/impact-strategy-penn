# ECP Website Redesign — WITG Layout, ECP Colors

Rebuild the site's look to match the structure and restraint of pennwitg.com, using the ECP brand palette you supplied. It stays a single scrolling page, with the nav scrolling to sections as it does today.

## Brand palette

| Name | Hex | Role on the site |
| --- | --- | --- |
| Penn Blue | `00124F` | Primary — headings, buttons, footer |
| Oxford Blue | `122236` | Dark surfaces, hero overlay, deep sections |
| Ivory | `F7F5E8` | Page background / alternating section bands |
| Silver | `BFBFB7` | Hairline rules, muted text, borders |
| Wine | `6F2D39` | Accent — link underlines, stat figures, CTA hover |

This replaces the current blue/gold gradient system entirely. All values go into `index.css` as HSL tokens, so no component hardcodes a color.

## Page structure (top to bottom)

1. **Hero** — full-viewport Philadelphia skyline photo with an Oxford Blue overlay. Centered white wordmark-scale headline "Education Consulting at Penn", one line of positioning copy, and a single pill button. Nav sits transparent over the photo and turns solid Penn Blue once you scroll.
2. **Who We Are** — a quiet Ivory band, left-aligned serif heading with a generous prose paragraph. Same editorial rhythm as WITG.
3. **The Challenge** — the three statistics (71%, 52%, 4) as large Wine figures on Ivory, separated by hairline Silver rules instead of glassy cards.
4. **What We Do** — the three initiatives (Educational Equal Opportunity, AI's Impact on Education, Mentorship) as full-width alternating rows: image on one side, numbered list of points on the other, exactly the WITG treatment.
5. **Our Team** — headshots in a clean uniform grid, name / role / education beneath each, bio revealed on the card rather than in a heavy panel. Existing member data is preserved as-is.
6. **Resources (CaseBasix)** — a simple list of links with Silver dividers, no card chrome.
7. **Contact** — Oxford Blue band with the email address set large, plus the Apply Now button.
8. **Footer** — Penn Blue, logo, quick links, contact, copyright.

## Typography and detail

- Headings: a high-contrast serif for section titles (WITG's editorial feel), geometric sans for the hero headline and nav.
- Body: clean sans at a comfortable reading measure, max ~70 characters.
- Sections separated by 1px Silver rules and large vertical padding rather than colored blocks.
- Buttons become outlined or solid pills with square-ish minimal radius; drop the rounded gradient buttons.

## What stays unchanged

- All copy, team members, bios, statistics, and CaseBasix links.
- Every Apply Now button keeps pointing to the current Google Form and opening in a new tab.
- Contact email and existing logo/headshot images.

## Technical notes

- Rewrite tokens in `src/index.css` (HSL) and extend `tailwind.config.ts` with `silver`, `wine`, `ivory`, `oxford` semantic entries plus the serif/sans font families.
- Rework `Header`, `Hero`, `Team`, `Initiatives`, `Resources`, `Contact`, `Footer` presentation only — data arrays and links untouched.
- Add a scroll listener in `Header` for the transparent-to-solid nav transition.
- Generate a Philadelphia skyline hero image and two to three supporting section images, stored as project assets.
- Update `index.html` title and meta description to real ECP copy (currently still the Lovable defaults) and matching og/twitter tags.
