# About Page: Design Spec

Project: Solar System Graveyard... or Hall of Fame? (Universe Breakers)
Page: `#/about` (`src/pages/AboutPage.tsx`)
Audience: high school students, plus NASA Space Apps judges
Goal: a page that feels like part of the same "mission control" world as the story pages, and makes the judge think "these people care about craft".

---

## 1. What is wrong with the current page

Read from the screenshot:

1. **Every section looks the same.** Dark box, blue label chip, big uppercase heading, a paragraph. Nine sections stacked with the same weight means nothing stands out, so the page reads like a document, not a story.
2. **No visual anchor.** There is no image, no spacecraft, no planet. The home page and the mission pages have NASA photos. The About page has none, so it feels empty.
3. **Dead space.** Most boxes are mostly black with a few lines of tiny text in the top-left corner.
4. **Text is too small and too grey.** Card descriptions and the sources list are tiny and low contrast. On a phone they will be hard to read.
5. **Feature cards are flat.** Eight identical boxes, with a number, an icon, a title and one line. Nothing says "this is the important one" (audio, quiz).
6. **Team section is weak.** One name and four tiny role chips. Judges look here to see who the people are.
7. **Sources section is dense.** It looks like a table of links, not a credit.
8. **The big site footer repeats the title at huge size.** It is clipped on the left edge. Check it on mobile.
9. **No rhythm.** All blocks are full-width and the same height, so scrolling has no beat.

---

## 2. Design idea

**Concept: "Mission Briefing".**
The About page is the control-room briefing before the missions. It uses the same language as the story pages (`[ LABELS ]`, `// DECLASSIFIED`, telemetry rows), but adds scale, imagery and contrast.

Three rules:
1. **One big idea per screen.** Each section has one focal point (a giant number, an image, a quote).
2. **Vary the layout.** Alternate full-bleed, two-column, grid and centered blocks.
3. **Use the same visual DNA as the rest of the site.** Dark base, blue offset-shadow borders, uppercase heavy type, mono labels.

---

## 3. Design tokens (reuse what exists)

Do not invent a new palette. Reuse the site's current values.

| Token | Use |
| --- | --- |
| Background | the same near-black as the mission pages |
| Surface | one step lighter than background, for cards |
| Accent blue | the same blue as the button shadows and labels |
| Alert red | only for status chips (graveyard / silent) |
| Alive green | only for status chips (active) |
| Text primary | near white |
| Text secondary | light grey, at least 4.5:1 contrast on the surface |

**Typography**

| Role | Style |
| --- | --- |
| Page title | Inter 900, uppercase, `clamp(2.5rem, 7vw, 5.5rem)`, tight leading (0.95) |
| Section title | Inter 900, uppercase, `clamp(1.75rem, 4vw, 3rem)` |
| Label chip | mono, 11-12px, uppercase, letter-spacing 0.15em, blue |
| Body | Inter 400, 17-18px, line-height 1.7, max width 65ch |
| Big stat number | Inter 900, `clamp(3rem, 8vw, 6rem)`, blue |
| Caption | mono, 12px, secondary colour |

**Spacing:** 8px base. Section padding is 96px top and bottom on desktop, 56px on mobile. Container max width 1200px with a 16px side gutter on mobile.

**Borders and shadows (the site's signature):** 2px light border, plus a solid blue offset shadow (`6px 6px 0 blue`). Use it on the primary cards only, so it stays special.

---

## 4. Section-by-section layout

### 4.1 Hero (full viewport, about 80vh)
- **Background:** a real NASA image, dimmed with a dark gradient (for example Earthrise, or a lunar horizon with a lander). Add a subtle starfield or very slow parallax.
- **Content, left-aligned:**
  - Label: `[ ABOUT THE PROJECT ]`
  - Title (three lines, same colour rhythm as the home page): `SOLAR SYSTEM` white, `GRAVEYARD...` blue, `OR HALL OF FAME?` white on blue block.
  - Subtitle: "Where NASA's retired machines tell their own stories."
  - Byline row in mono: `UNIVERSE BREAKERS // NASA SPACE APPS 2026`
- **Right side (desktop only):** a small "telemetry card" floating with three rows:
  `MISSIONS 36 / DESTINATIONS 3 / VOICE: THE MACHINE`
- **Motion:** staggered fade-up of the lines, 80ms apart.

### 4.2 The Big Question (full-bleed, centered)
- Break the box pattern. No card here.
- A single huge pull quote, centered, 2-3 lines, 3rem+: **"Abandoned, or remembered?"**
- Under it, a two-column block:
  - Left: the story paragraph (why we built it).
  - Right: a bordered challenge card with the challenge name, small mono label `// THE CHALLENGE`.
- Thin horizontal rule with a small spacecraft icon in the middle as a divider.

### 4.3 Numbers strip (new, full-width band)
Big, scannable proof of scale. Four stats in one row (2x2 on mobile):

`36 STORIES` · `3 DESTINATIONS` · `60+ YEARS OF MISSIONS` · `1 QUESTION`

Giant numbers in accent blue, mono caption underneath. Count-up animation when it enters the viewport (respect reduced motion).

### 4.4 What you'll find (features)
Replace the 8 identical cards with a **bento grid** (12-column grid, varied sizes):

| Tile | Size | Notes |
| --- | --- | --- |
| Listen to My Story | large (6 cols x 2 rows) | The hero feature. Show a mock audio player with an animated waveform and the "AI-generated voice" tag. |
| First-Person Chapters | medium (6 cols) | Show a real two-line excerpt from a story ("I was built with one urgent purpose in mind...") in a quote style. |
| 36 Mission Stories | small (3 cols) | Mini row of destination icons. |
| Mission Stats | small (3 cols) | Tiny fake telemetry rows. |
| Did You Know? | small (4 cols) | A lightbulb icon and one real fun fact. |
| Quick Quiz | small (4 cols) | Show two answer chips, one highlighted. |
| Real NASA Images | small (4 cols) | A 3-image collage using real mission photos. |

Rules:
- Each tile **previews** the feature, so it shows instead of tells.
- Only the audio and chapters tiles get the blue offset shadow.
- Description text at least 15px.
- On mobile the grid becomes a single column, in the same order.

### 4.5 Who it's for (split layout)
- Two columns. Left: large heading "MADE FOR HIGH SCHOOL STUDENTS" and a short paragraph. Right: a mission-page screenshot in a browser-style frame, slightly rotated (2 degrees) with a blue offset shadow.
- Under it, three short chips: `PLAIN LANGUAGE` · `SHORT CHAPTERS` · `QUIZ AT THE END`.

### 4.6 How to explore (timeline)
- Horizontal 3-step timeline on desktop (vertical on mobile), joined by a dashed line with a small rocket/dot that animates along it on scroll.
- Each step: giant number `01 / 02 / 03` in outlined text, a title, one line, and an icon.
- Step 1 contains the three destination buttons (Moon, Mars, Deep Space) so the page leads somewhere. Keep them as real working links.

### 4.7 Sources and credits
- Do not show this as a table or a dense list.
- Layout: a "credits scroll" card with a mono `// DATA SOURCES` label, then source chips in a wrapping row (`nasa.gov`, `science.nasa.gov`, `mars.nasa.gov`, `images.nasa.gov`, `eyes.nasa.gov`). Each chip links out.
- Below: one clear line about image credit (NASA imagery is mostly public domain, other images credited below).
- Separate small block: "Other credits" for non-NASA images and the music.
- Check the claim "All space imagery used on this site is courtesy of NASA" against the real images before keeping it. The site still has non-NASA images.

### 4.8 Use of AI (important for the rules)
- Make this visible and honest, not hidden. Two-column card with a mono label `// TRANSPARENCY`.
- Left column "Written by humans": the team wrote and reviewed the stories.
- Right column "Helped by AI": a short list with exact tools (Claude for text checking and rewriting, ElevenLabs for the narration voice).
- A small badge `AI-GENERATED VOICE` identical to the one on the audio button, for consistency.

### 4.9 Team
- Show every member as a **card**, not a single row of chips.
- Each card: a round avatar (initials in a blue circle if there is no photo), name, role, and an optional one-line "favourite mission".
- Use initials or an illustration for anyone under 18. No identifiable photos.
- Add a team line above the cards: "A team from Bangladesh who love space, design and storytelling."
- If there is only one member, make the card wide with the team line next to it instead of leaving four tiny role chips alone.

### 4.10 Disclaimer
- Smallest thing on the page. A thin bordered strip with small text, placed at the very end (above the site footer), not in the middle.

### 4.11 Closing call to action (replaces another big title)
- One centered line: "Pick a mission. Hear its story."
- Three buttons: Moon, Mars, Deep Space (same style as the home page).
- Skip the giant repeated title here. If the global footer already shows it, leave it to the footer and fix its left clipping.

---

## 5. Imagery

| Where | What |
| --- | --- |
| Hero background | NASA Image and Video Library, a wide image with space to the right (Earthrise, lunar surface, Mars horizon) |
| Who it's for | Real screenshot of a mission page |
| Features | Real excerpts and real mission thumbnails |
| Dividers | Small line icons (lucide-react): rocket, satellite, telescope |

Use NASA images only, and credit each one in the sources section. All images need `alt` text and fixed width/height (no layout shift). Use `loading="lazy"` below the hero.

---

## 6. Motion (motion library, already installed)

- Section reveal: fade + 24px upward slide, 0.5s ease-out, once per element.
- Cards: 2px lift and shadow grows on hover.
- Count-up numbers and the timeline line: triggered on scroll into view.
- Audio tile waveform: gentle looping animation.
- **Respect `prefers-reduced-motion`:** turn everything above off.
- Keep total motion light. It should feel like a calm briefing, not a game.

---

## 7. Responsive behaviour

| Breakpoint | Change |
| --- | --- |
| below 640px | Single column. Bento grid stacks. Numbers strip 2x2. Timeline vertical. Hero title smaller. Section padding 56px. |
| 640-1024px | Two columns where useful. Bento grid becomes 6 columns. |
| above 1024px | Full layout above. |

Tap targets are at least 44px. No horizontal scroll at 360px width.

---

## 8. Accessibility

- Contrast at least 4.5:1 for all body text, 3:1 for large text. The current small grey text fails on dark cards, so raise it.
- One `<h1>` (the hero title), then `<h2>` per section.
- Visible focus ring (blue, 2px offset) on every link and button.
- Labels like `[ ABOUT THE PROJECT ]` are decorative, so mark them `aria-hidden` if they repeat the heading.
- Decorative icons get `aria-hidden="true"`.
- The audio mock in the features tile must not autoplay or make sound.

---

## 9. Implementation notes

- Stack: React 19, TypeScript, Tailwind CSS 4, motion, lucide-react.
- Create `src/pages/AboutPage.tsx` and split the sections into small components (`AboutHero`, `StatsStrip`, `FeatureBento`, `HowItWorks`, `SourcesCredits`, `AiDisclosure`, `TeamCards`) in `src/components/about/`.
- Route: register `#/about` in `renderPage()` in `src/App.tsx`, and point the navbar "ABOUT" button to it.
- Keep all text content in one `aboutContent.ts` file (like `landingContent.ts`), so edits do not need code changes.
- Reuse the existing label chip, card and button styles from `MissionDetailLayout.tsx`, instead of writing new ones.

---


