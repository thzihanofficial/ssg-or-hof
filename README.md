# Solar System Graveyard... or Hall of Fame?

**An interactive storytelling website where NASA's retired spacecraft tell their own stories, in the first person, with a voice. Written for high school students.**

**Live demo:** [https://ssg-or-hof.vercel.app](https://ssg-or-hof.vercel.app)

Built by team **Universe Breakers** (Bangladesh) for the **NASA Space Apps Challenge 2026**.
Challenge: *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*

---

## What it does

Since the 1960s, NASA has left hardware on the Moon, on Mars, and in deep space. Some of it is still working. Much of it has been silent for decades. Most people only ever see these machines as lists of facts and dates.

This project asks a different question: are they a **graveyard**, or a **hall of fame**?

Every machine gets its own page and **tells its own story in the first person** ("I was built with one urgent purpose in mind..."), in plain language a high school student can follow. Each story can also be **listened to** as an AI-narrated audio track.

---

## Features

### Stories
- **36 mission story pages** in three destinations:
  - **Moon (7):** Surveyor 1, Surveyor 3, Surveyor 5/6/7, Clementine, Apollo 15/16/17 Lunar Roving Vehicles
  - **Mars (17):** Mariner 6/7/9, Viking 1 & 2, Mars Global Surveyor, Pathfinder, Sojourner, 2001 Mars Odyssey, Spirit & Opportunity, Opportunity, Mars Reconnaissance Orbiter, Phoenix, Curiosity, MAVEN, InSight, Mars 2020 (Ingenuity), Perseverance
  - **Deep Space (12):** TIROS-1, Mariner Program, Pioneer 10 & 11, Voyager 1 & 2, Hubble, Chandra, Kepler, MESSENGER, New Horizons, Juno, OSIRIS-REx/APEX, James Webb Space Telescope
- **First-person chapters.** Short chapters on why the machine was built, the hardest moment, what it discovered, and its legacy.
- **Status at a glance.** Every machine is marked as still active or gone silent.
- **Mission stats box** with launch date, destination, data returned, and status.
- **"Did You Know?" fact** and **mission objectives** on every page.
- **Quick trivia quiz** with an explanation of each answer.
- **"The images I captured" gallery** with real mission images.
- **Previous / Next navigation** so students move from one story to the next.

### Audio
- **"Listen to my story" player** on every mission page, with play/pause, progress bar, restart, and mute.
- Narration is **AI-generated** (see [Use of AI](#use-of-ai)).
- 36 narration files, one per mission, stored in `public/audios /`.

### Exploration
- **Interactive 3D solar system** (Three.js) on the home page, with the Sun and planets as 3D models you can rotate. The Moon and Mars link into their story hubs.
- **3D coverflow carousel** for choosing a mission inside each destination.
- **Embedded NASA Eyes on the Solar System** view on the Mars Odyssey page.

### App experience
- **Installable PWA.** The site can be installed on a phone or desktop and runs in standalone mode.
- **Offline support.** A service worker caches the app, audio, 3D models, and mission images in the background, so stories keep working on a weak connection.
- **Scroll position restore** when moving between pages.
- **About page** with the project idea, features, sources, AI disclosure, and team.
- Responsive layout for phones, tablets, and desktops.

---

## Tech stack

| Layer | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| 3D | Three.js (`GLTFLoader`, `OrbitControls`), `.glb` planet models |
| Animation / icons | motion, framer-motion, lucide-react |
| PWA | vite-plugin-pwa (Workbox) |
| Routing | Lightweight hash routing (`#/moon/surveyor1`), no router library |
| Hosting | Vercel (static, with SPA rewrite) |

The app is a **fully static front end**. There is no database, and no API key is needed to run it.

---

## Run it locally

### Prerequisites
- **Node.js 20.19+ or 22.12+**
- **npm** (comes with Node.js)

### Install and start

```bash
# 1. Clone
git clone https://github.com/thzihanofficial/ssg-or-hof.git
cd ssg-or-hof

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000**.

> **Note:** if a plain `npm install` stops with an `ERESOLVE` peer-dependency error (between `vite` and `esbuild`), use `--legacy-peer-deps`. The install and the build both work with it.

### Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Create a production build in `dist/` (also generates the service worker) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check with TypeScript (`tsc --noEmit`) |

### Deploy

Run `npm run build` and upload `dist/` to any static host. On Vercel, `vercel.json` already rewrites every route to `index.html`. Because routing uses URL hashes, no other redirect rules are needed.

> **Heads-up:** the offline cache downloads the audio, 3D models, and images in the background (the service worker precaches about 190 MB). Keep this in mind on a slow or metered connection.

---

## Project structure

```
public/
├── audios /{moon,mars,deep_space}/   # 36 AI-narrated story tracks (.mp3)
├── planets/                          # 3D planet models (.glb)
├── pwa-*.png, apple-touch-icon.png   # PWA icons
└── favicon.svg, robots.txt, sitemap.xml

src/
├── App.tsx                           # Hash router + page transition
├── main.tsx                          # Entry point
├── types.ts                          # Shared TypeScript types
├── data/
│   ├── landingContent.ts             # Brand text, hero copy, destination profiles
│   ├── allMissionImages.json         # Mission image list (for the offline cache)
│   └── offlineAssets.ts              # What gets cached for offline use
├── services/
│   ├── offlineCache.ts               # Service worker + background cache warm-up
│   └── scrollRestoration.ts          # Per-page scroll memory
├── hooks/usePWAInstall.ts            # "Install app" prompt logic
├── components/
│   ├── MissionDetailLayout.tsx       # Shared template for every story page
│   ├── AudioStoryPlayer.tsx          # "Listen to my story" player
│   ├── SolarSystem3D.tsx             # Interactive 3D solar system
│   ├── Hero.tsx, DestinationSection.tsx, CTASection.tsx
│   ├── Navbar.tsx, Footer.tsx
│   └── ui/                           # Coverflow carousel, slide tabs, scroll reveal, etc.
└── pages/
    ├── Home.tsx, AboutPage.tsx
    ├── MoonPage.tsx / MarsPage.tsx / DeepSpacePage.tsx   # Destination hubs
    ├── moon/        # 7 story pages
    ├── mars/        # 17 story pages
    └── deepspace/   # 12 story pages
```

### Adding a new mission

1. Create `src/pages/<destination>/YourMissionPage.tsx` and pass your content to `MissionDetailLayout`: `chapters`, `stats`, `didYouKnow`, `objectives`, `quiz`, `capturedImages`, `audioSrc`, and `prevStory` / `nextStory`.
2. Register the route in `renderPage()` in `src/App.tsx`, for example `#/moon/yourmission`.
3. Add a card for it in the matching hub page (`MoonPage.tsx`, `MarsPage.tsx`, or `DeepSpacePage.tsx`).
4. Put the narration file in `public/audios /<destination>/` and add its path to `src/data/offlineAssets.ts` so it is cached offline.

---

## Data sources and attribution

This project does **not** call any live NASA API at runtime. All content is curated by hand and stored in the source code. The facts and images come from the sources below.

### NASA sources

| Source | Used for |
| --- | --- |
| [nasa.gov](https://www.nasa.gov) | Mission photographs and news archive |
| [science.nasa.gov](https://science.nasa.gov) | Planetary Science mission pages and imagery |
| [mars.nasa.gov](https://mars.nasa.gov) | Mars mission imagery |
| [NASA Image and Video Library](https://images.nasa.gov) | Archive photographs |
| [NASA's Eyes on the Solar System](https://eyes.nasa.gov) | Embedded interactive 3D view on the Mars Odyssey page |

### Other sources

- **Wikimedia Commons** for many historical spacecraft photographs (public domain or Creative Commons, as marked on each source page).
- A small number of images come from other third-party websites. They remain the property of their respective owners and are used here for educational, non-commercial purposes.
- **3D planet models** (`.glb`) in `public/planets/`: check the source and licence of each model before reusing it.
- **Background music** in the project video: "Hazy Cosmos" (credited in the video description).

### Text
The story chapters, quizzes, and "Did You Know?" facts are **original writing** by the team. They retell publicly documented mission facts in a first-person voice.

---

## Use of AI

In line with the NASA Space Apps Challenge rules, here is how AI was used:

- **Story text:** written by the team from public NASA sources. We used **Claude** (Anthropic) to help check facts, find errors, and tighten the wording, and to rewrite each story as a narration script.
- **Audio narration:** the narration for all 36 stories is generated with **ElevenLabs** (Eleven v4) from those scripts. It is an AI voice, not a human recording.
- **Video voice-over:** the project video uses an AI voice-over.

---


## Team

**Universe Breakers**, a team from Bangladesh.

- Tasnimul Hasan Zihan