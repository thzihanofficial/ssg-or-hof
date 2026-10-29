# Solar System Graveyard... or Hall of Fame?

**An interactive, story-driven archive of NASA exploration hardware for high-school students and curious space enthusiasts.**

**Built by:** Universe Breakers  
**Event:** NASA Space Apps Challenge 2026  
**Challenge:** *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*

- **Live demo:** https://ssg-or-hof.vercel.app
- **Source repository:** https://github.com/thzihanofficial/ssg-or-hof

> Where did these machines go? Why were they sent? What did they help us learn? The project tells those stories in plain language, often from the machine's first-person perspective.

## Overview

NASA exploration hardware has travelled to the Moon, Mars, and beyond. Some machines completed their missions and fell silent; other spacecraft and observatories continue to operate. **Solar System Graveyard... or Hall of Fame?** turns selected mission histories into an interactive educational experience rather than presenting them only as technical lists.

Each mission story combines short narrative chapters with mission facts, imagery, a status label, learning objectives, and a quick quiz. The goal is to help students connect the machine itself with the mission it performed and the science it made possible.

**Scope note:** The site includes completed missions as well as selected ongoing missions and observatories for context. Not every entry is inactive or literally abandoned, and operational-status labels should be checked against current official mission sources.

## Explore the archive

The app includes **36 mission-story pages across three destination hubs**.

### Moon — 7 story pages

- Surveyor 1
- Surveyor 3
- Surveyor 5, 6 & 7
- Apollo 15 Lunar Roving Vehicle (LRV)
- Apollo 16 Lunar Roving Vehicle (LRV)
- Apollo 17 Lunar Roving Vehicle (LRV)
- Clementine

### Mars — 17 story pages

- Mariner 6
- Mariner 7
- Mariner 9
- Viking 1 & 2
- Mars Global Surveyor
- Mars Pathfinder
- 2001 Mars Odyssey
- Spirit & Opportunity
- Mars Reconnaissance Orbiter (MRO)
- Phoenix Mars Lander
- Curiosity Rover
- MAVEN
- InSight
- Mars 2020 / Perseverance & Ingenuity
- Sojourner
- Opportunity
- Perseverance

### Deep Space — 12 story pages

- TIROS-1
- Mariner Program
- Pioneer 10 & 11
- Voyager 1 & 2
- Hubble Space Telescope
- Chandra X-ray Observatory
- Kepler Space Telescope
- MESSENGER
- New Horizons
- Juno
- OSIRIS-REx / OSIRIS-APEX
- James Webb Space Telescope (JWST)

Some related missions are grouped into a single story page, so the number of individual spacecraft mentioned in the stories is not the same as the number of pages.

## Features

### Exploration and navigation
- **Interactive 3D Solar System scene** built with Three.js. Moon and Mars can be selected to open their destination hubs; a Deep Space route is also available.
- **Three destination hubs** for the Moon, Mars, and Deep Space.
- **Draggable, horizontal story carousels** with mission names, short first-person introductions, dates, imagery, and links to individual stories.
- **Hash-based navigation** with direct links to destination and mission pages.
- **Previous / next story controls** and custom scroll-position restoration when navigating between pages.
- Responsive navigation, section reveals, and reduced-motion CSS support.

### Mission storytelling and learning
- **First-person narrative chapters** that present mission history in an approachable voice. These are original educational narratives, not quotations from actual spacecraft.
- **Mission details** including dates, destination/location, status label, launch/landing or target information, and data/mission statistics where supplied.
- **Mission objectives** explained as a short list.
- **"Did You Know?" facts** on story pages.
- **Interactive multiple-choice quiz** with answer feedback and an explanation.
- **Mission image viewer** for captured-image galleries where configured, with links to open image files.
- **Narrated audio player** with play/pause, progress seeking, mute, and replay controls.
- A dedicated **About** page that explains the project and lists general reference portals.

### Installability and caching
- Vite PWA plugin, web-app manifest, icons, and service-worker registration are configured.
- Background cache-warming and runtime caching are implemented for selected images, audio, 3D models, fonts, and other resources.
- Offline behaviour depends on what the browser has successfully cached. The hero background video, some images, and the NASA Eyes embed are externally hosted, so **a working internet connection is recommended**; a completely offline experience is not guaranteed.

## Technology

| Area | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Development/build | Vite 8 |
| Styling | Tailwind CSS 4 via the Vite plugin |
| 3D scene | Three.js, GLTFLoader, OrbitControls |
| Icons | lucide-react |
| Motion and reveal effects | Motion/Framer Motion dependencies and custom CSS/React components |
| Routing | Lightweight hash routing implemented in `src/App.tsx` |
| PWA | `vite-plugin-pwa`, service worker, Cache Storage |
| Hosting configuration | Vercel rewrite to `index.html` |

The current app is a **static front end**: mission content is authored in the repository and rendered by React. It does not require a backend, database, or API key to run the current experience. It does not fetch a live NASA API for its mission-story content at runtime.

## Run locally

### Prerequisites

- Node.js **22.12 or later** (Node 24 is also suitable)
- npm

### Install dependencies

From the repository root:

```bash
npm install --legacy-peer-deps
```

The existing dependency set may produce an npm peer-dependency resolution error with a plain `npm install`; the legacy peer-dependency flag is the currently documented workaround.

### Start the development server

```bash
npm run dev
```

Open **http://localhost:3000**.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite on port 3000 and listen on all interfaces |
| `npm run build` | Create the production bundle in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript compiler in no-emit mode (`tsc --noEmit`) |
| `npm run clean` | Remove the `dist` folder and `server.js` in a Unix-like shell |

There is currently no dedicated automated test script in `package.json`.

## Routes

The application uses URL hashes rather than a router package. Examples:

| Page | Hash route |
| --- | --- |
| Home | `#` (empty hash) |
| Moon hub | `#/moon` |
| Surveyor 1 | `#/moon/surveyor1` |
| Mars hub | `#/mars` |
| Opportunity | `#/mars/opportunity` |
| Deep Space hub | `#/deep-space` |
| Voyager 1 & 2 | `#/deep-space/voyager1and2` |
| About | `#/about` |

Mission-specific routes are registered explicitly in `src/App.tsx`. When adding a story, keep its hub card, route, previous/next links, audio mapping, and assets in sync.

## Project structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── vercel.json
├── public/
│   ├── audio files for mission narratives
│   ├── planets/              # 3D model assets
│   ├── favicon.svg
│   └── PWA icons
└── src/
    ├── App.tsx               # Hash router and page transitions
    ├── main.tsx              # React entry point and service-worker setup
    ├── index.css             # Tailwind import, global styles, motion rules
    ├── types.ts              # Shared TypeScript types
    ├── assets/                # Images and local 3D model source assets
    ├── components/
    │   ├── Hero.tsx
    │   ├── Navbar.tsx
    │   ├── DestinationSection.tsx
    │   ├── SolarSystem3D.tsx
    │   ├── MissionDetailLayout.tsx
    │   ├── AudioStoryPlayer.tsx
    │   ├── CTASection.tsx
    │   ├── Footer.tsx
    │   └── ui/                # Carousels, scroll reveals, and visual components
    ├── data/
    │   ├── landingContent.ts
    │   ├── allMissionImages.json
    │   └── offlineAssets.ts
    ├── hooks/
    │   └── usePWAInstall.ts
    ├── services/
    │   ├── offlineCache.ts
    │   └── scrollRestoration.ts
    └── pages/
        ├── Home.tsx
        ├── MoonPage.tsx
        ├── MarsPage.tsx
        ├── DeepSpacePage.tsx
        ├── AboutPage.tsx
        ├── moon/               # 7 story pages
        ├── mars/               # 17 story pages
        └── deepspace/          # 12 story pages
```


## Sources, accuracy, and media

The project content is curated in the source code; it is **not a live NASA dataset**. The About page lists general reference portals, including:

- [NASA](https://www.nasa.gov/)
- [NASA Science](https://science.nasa.gov/)
- [NASA Mars Exploration](https://mars.nasa.gov/)
- [NASA Image and Video Library](https://images.nasa.gov/)
- [NASA Eyes on the Solar System](https://eyes.nasa.gov/)
- [NASA Jet Propulsion Laboratory (JPL)](https://www.jpl.nasa.gov/)
- [National Space Science Data Center (NSSDC)](https://nssdc.gsfc.nasa.gov/)

The repository also references imagery from sources such as Wikimedia Commons, Unsplash, and other third-party hosts. Assets are loaded both from the repository and from external URLs. **A link being publicly accessible does not by itself establish that an image or audio asset is free to redistribute.** Check the specific asset's credit, license, and terms before reusing or redistributing it.

Mission narratives are original first-person retellings of documented events. They should not be interpreted as direct quotes from spacecraft, and factual details or active/inactive labels can become outdated. For formal judging or future releases, verify claims against authoritative mission-specific sources and make citations/credits easy to locate on the relevant story pages.

## Environment and secrets

The current app does not need a runtime API key. The repository's `.env.example` contains placeholder values from the development environment; do not commit real API keys, tokens, or private credentials.

## Deployment

The repository includes `vercel.json` configured for Vite and a rewrite to `/index.html`.

For a typical static deployment:

1. Install dependencies.
2. Run `npm run build`.
3. Deploy the generated `dist/` directory to Vercel or another static host.

The current navigation uses hash routes, so mission navigation does not depend on server-side route handlers.

## License

No root-level `LICENSE` file is currently included in this repository. Unless a license is added, do not assume the code is licensed for unrestricted reuse. Code licensing and third-party media rights are separate questions.

## Disclaimer

This is a participant-created educational project for **NASA Space Apps Challenge 2026** by **Universe Breakers**. It is **not affiliated with, sponsored by, or endorsed by NASA**.
