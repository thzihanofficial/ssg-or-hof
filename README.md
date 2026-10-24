# Solar System Graveyard... or Hall of Fame?

**An interactive storytelling website where NASA's abandoned spacecraft tell their own stories, written for high school students.**

Built by team **Universe Breakers** for the **NASA Space Apps Challenge 2026**
Challenge: *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*

**Live demo:** [https://ssg-or-hof.vercel.app](https://ssg-or-hof.vercel.app)
---

## What it does

Since the 1960s, NASA has left hardware on the Moon, on Mars, and in deep space. Some of it is still working, and some has been silent for decades. Most people only see these machines as lists of facts.

This project asks a different question: are they a graveyard, or a hall of fame? Each machine gets its own page and **tells its own story in the first person** ("I was built with one urgent purpose in mind..."), in plain language a high school student can follow.

### Features

- **36 mission story pages** across three destinations:
  - **Moon (7):** Surveyor 1, Surveyor 3, Surveyor 5/6/7, Clementine, Apollo 15/16/17 Lunar Roving Vehicles
  - **Mars (17):** Mariner 6/7/9, Viking 1 & 2, Mars Global Surveyor, Pathfinder, Sojourner, 2001 Mars Odyssey, Spirit & Opportunity, Opportunity, Mars Reconnaissance Orbiter, Phoenix, Curiosity, MAVEN, InSight, Mars 2020 (Ingenuity), Perseverance
  - **Deep Space (12):** TIROS-1, Mariner Program, Pioneer 10 & 11, Voyager 1 & 2, Hubble, Chandra, Kepler, MESSENGER, New Horizons, Juno, OSIRIS-REx/APEX, James Webb Space Telescope
- **First-person narrative chapters.** Each story is split into short chapters (why it was built, the hardest moment, what it discovered, its legacy).
- **Status at a glance.** Every machine is marked as still active or gone silent.
- **Mission stats box** with launch date, landing date, data returned, and status.
- **"Did You Know?" fact** on every page.
- **Mission objectives** written in simple language.
- **Quick trivia challenge.** Each page has a multiple-choice question with an explanation of the answer.
- **"The images I captured" viewer.** A popup gallery of real mission images, plus an image carousel on story pages.
- **3D coverflow carousel** on the home page for choosing Moon, Mars, or Deep Space.
- **Embedded NASA Eyes 3D view** on the Mars Odyssey page.
- **Previous / Next story navigation** so students can keep exploring without going back to the menu.
- **Cinematic intro video** (skippable, plays once per browser session) and a looping hero background.

---

## Tech stack

| Layer | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Icons / animation | lucide-react, motion |
| Routing | Lightweight hash routing (`#/moon/surveyor1`), no router library |

The app is a **fully static front end**. There is no backend, no database, and no API key required.

---

## How to run

### Prerequisites

- **Node.js 20.19+ or 22.12+** (tested with Node 22.22)
- **npm** (comes with Node.js)
- An internet connection when viewing the site, because images and the hero background video are loaded from external hosts (see [Data sources](#data-sources-and-attribution))

### Install and start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start the development server
npm run dev
```

Then open **http://localhost:3000**.

> **Why `--legacy-peer-deps`?**
> A plain `npm install` stops with an `ERESOLVE` error because of a peer-dependency conflict between `vite` and `esbuild`. The flag tells npm to skip that check. The install and build both work with it.

### Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check with TypeScript (`tsc --noEmit`) |

### Deploy

Run `npm run build` and upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). Because routing uses URL hashes, no server-side redirect rules are needed.

---

## Project structure

```
src/
├── App.tsx                     # Hash router + intro overlay logic
├── main.tsx                    # App entry point
├── types.ts                    # Shared TypeScript types
├── data/
│   └── landingContent.ts       # Brand text, hero copy, destination profiles
├── components/
│   ├── Hero.tsx                # Landing hero with background video
│   ├── DestinationSection.tsx  # "Where do you want to explore?"
│   ├── CTASection.tsx          # Closing call to action
│   ├── IntroOverlay.tsx        # Skippable intro video
│   ├── MissionDetailLayout.tsx # Shared template for every story page
│   ├── Navbar.tsx / Footer.tsx
│   └── ui/                     # 3D coverflow carousel, slide tabs, scroll reveal
├── pages/
│   ├── Home.tsx
│   ├── MoonPage.tsx / MarsPage.tsx / DeepSpacePage.tsx   # Destination hubs
│   ├── moon/                   # 7 story pages
│   ├── mars/                   # 17 story pages
│   └── deepspace/              # 12 story pages
└── assets/
    └── intro.mp4               # Intro video
```

### Adding a new mission

1. Create `src/pages/<destination>/YourMissionPage.tsx` and pass your content to `MissionDetailLayout`: `chapters`, `stats`, `didYouKnow`, `objectives`, `quiz`, `capturedImages`, and `prevStory` / `nextStory`.
2. Register the route in `renderPage()` in `src/App.tsx`, for example `#/moon/yourmission`.
3. Add a card for it in the matching hub page (`MoonPage.tsx`, `MarsPage.tsx`, or `DeepSpacePage.tsx`).

---

## Data sources and attribution

This project does **not** call any live NASA API or load a dataset at runtime. All content is curated by hand and stored in the source code. The sources below are where the facts and images come from.

### NASA sources

| Source | Used for |
| --- | --- |
| [nasa.gov](https://www.nasa.gov) | Mission photographs (Surveyor 1, Apollo LRVs, Clementine, Pioneer 11) and news archive |
| [science.nasa.gov](https://science.nasa.gov) | Planetary Science Division mission pages and imagery (Mars orbiters and landers, Perseverance, Juno, OSIRIS-APEX, and more) |
| [mars.nasa.gov](https://mars.nasa.gov) | Curiosity raw images from the Mars Science Laboratory image feed |
| [NASA Image and Video Library](https://images.nasa.gov) (`images-assets.nasa.gov`) | Archive photographs |
| [NASA's Eyes on the Solar System](https://eyes.nasa.gov) | Embedded interactive 3D view on the Mars Odyssey page |
| [jpl.nasa.gov](https://www.jpl.nasa.gov) and [NSSDCA](https://nssdc.gsfc.nasa.gov) | Reference material for mission facts and dates |

### Other image sources

A number of images come from outside NASA:

- **Wikimedia Commons** for some historical spacecraft photographs
- **Unsplash** for general space backgrounds and fallback images
- A small number of illustrative images from other third-party websites

These images remain the property of their respective owners and are used here for educational, non-commercial purposes.

### Text

The story chapters, quizzes, and "Did You Know?" facts are **original writing** for this project. They retell publicly documented mission facts in a first-person voice.

---

## Notes

- The intro video plays once per browser session. Use the **X** button in the bottom-right corner to skip it.
- Images, the hero background video, and the NASA Eyes embed are loaded from external servers, so they will not appear offline.

---

## Disclaimer

*Participant-created project for NASA Space Apps Challenge 2026. Not affiliated with or endorsed by the National Aeronautics and Space Administration (NASA).*

## Team

**Universe Breakers**