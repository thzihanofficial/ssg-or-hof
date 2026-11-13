

# Solar System Graveyard... or Hall of Fame?

**NASA's retired machines tell their own stories. In the first person. With a voice.**

An interactive storytelling website about spacecraft and rovers left on the Moon, on Mars and in deep space, written for high school students.

**Live demo:** [https://ssg-or-hof.vercel.app](https://ssg-or-hof.vercel.app)


**NASA Space Apps Challenge 2026** · Team **Universe Breakers**, Bangladesh
Challenge: *Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*




## The idea

Since the 1960s, NASA has left hardware on the Moon, on Mars and in deep space. Some of it is still working. Much of it has been silent for decades. Most students only ever meet these machines as lists of dates and facts.

This project asks one question: **are they a graveyard, or a hall of fame?**

Each machine gets its own page and **tells its own story in the first person** ("I was built with one urgent purpose in mind..."), in plain language a high school student can follow. Every story can also be **listened to** as an AI-narrated audio track. The goal is simple: a machine that has a story is never really forgotten.

## At a glance

| | |
| --- | --- |
| **36** | mission story pages |
| **3** | destinations: Moon (7), Mars (17), Deep Space (12) |
| **36** | narration tracks, one per story |
| **4** | short first-person chapters per story |

## Features

### Stories
- **First-person chapters.** Why the machine was built, its hardest moment, what it discovered, and its legacy.
- **Status badge.** Every machine is marked as still active or gone silent.
- **Mission stats** (launch date, destination, data returned, status), a **Did You Know?** fact, and **mission objectives**.
- **Quick quiz** with an explanation for each answer.
- **Image gallery** of mission photographs.
- **Previous / Next** navigation between stories.

### Audio
- **"Listen to my story" player** on every mission page: play/pause, progress bar, restart and mute.
- Clearly labelled **AI-GENERATED VOICE** .

### Exploration
- **Interactive 3D solar system** on the home page (Three.js with `.glb` models). The Moon and Mars lead into their story hubs.
- **3D coverflow carousel** for choosing a mission inside each destination.
- **NASA's Eyes on the Solar System** embedded on the Mars Odyssey page.

### App experience
- **Installable PWA** that runs in standalone mode on phones and desktops.
- **About page** covering the idea, features, sources, AI disclosure and team.
- **Scroll position restore** between pages, and a responsive layout from phone to desktop.

### Mission coverage

| Destination | Missions |
| --- | --- |
| **Moon (7)** | Surveyor 1, Surveyor 3, Surveyor 5/6/7, Clementine, Apollo 15 LRV, Apollo 16 LRV, Apollo 17 LRV |
| **Mars (17)** | Mariner 6, Mariner 7, Mariner 9, Viking 1 & 2, Mars Global Surveyor, Pathfinder, Sojourner, 2001 Mars Odyssey, Spirit & Opportunity, Opportunity, Mars Reconnaissance Orbiter, Phoenix, Curiosity, MAVEN, InSight, Mars 2020 (Ingenuity), Perseverance |
| **Deep Space (12)** | TIROS-1, Mariner Program, Pioneer 10 & 11, Voyager 1 & 2, Hubble, Chandra, Kepler, MESSENGER, New Horizons, Juno, OSIRIS-REx / APEX, James Webb Space Telescope |

## Tech stack

| Layer | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| 3D | Three.js (`GLTFLoader`, `OrbitControls`), `.glb` models |
| Animation and icons | motion, framer-motion, lucide-react |
| PWA | vite-plugin-pwa (Workbox) |
| Routing | Lightweight hash routing (`#/moon/surveyor1`), no router library |
| Hosting | Vercel (static, with SPA rewrite) |

The app is a **fully static front end**. It has no database and calls no live API at runtime.

## Getting started

### Prerequisites
- **Node.js** 20.19+ or 22.12+
- **npm** (bundled with Node.js)

### Install and run

```bash
git clone https://github.com/thzihanofficial/ssg-or-hof.git
cd ssg-or-hof
npm install --legacy-peer-deps
npm run dev
```

Open **http://localhost:3000**.

> If a plain `npm install` stops with an `ERESOLVE` peer-dependency error, use `--legacy-peer-deps`. Install and build both work with it.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build into `dist/` (also generates the service worker) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` |

### Deploy

Run `npm run build` and upload `dist/` to any static host. On Vercel, `vercel.json` already rewrites every route to `index.html`. Because routing uses URL hashes, no other redirect rules are needed.

## Project structure

```text
.
├── public/
│   ├── audios /{moon,mars,deep_space}/   # 36 AI-narrated story tracks (.mp3)
│   ├── planets/                          # 3D models (.glb)
│   ├── pwa-*.png, apple-touch-icon.png   # PWA icons
│   └── favicon.svg, robots.txt, sitemap.xml
├── src/
│   ├── App.tsx                           # Hash router and page transitions
│   ├── main.tsx                          # Entry point
│   ├── types.ts                          # Shared types
│   ├── data/
│   │   ├── landingContent.ts             # Brand text, hero copy, destinations
│   │   ├── allMissionImages.json         # Image list for the offline cache
│   │   └── offlineAssets.ts              # What is cached for offline use
│   ├── services/
│   │   ├── offlineCache.ts               # Service worker and cache warm-up
│   │   └── scrollRestoration.ts          # Per-page scroll memory
│   ├── hooks/usePWAInstall.ts            # "Install app" prompt logic
│   ├── components/
│   │   ├── MissionDetailLayout.tsx       # Shared template for every story page
│   │   ├── AudioStoryPlayer.tsx          # "Listen to my story" player
│   │   ├── SolarSystem3D.tsx             # Interactive 3D solar system
│   │   ├── Hero, Navbar, Footer, DestinationSection, CTASection
│   │   └── ui/                           # Coverflow carousel, slide tabs, reveal effects
│   └── pages/
│       ├── Home.tsx, AboutPage.tsx
│       ├── MoonPage.tsx, MarsPage.tsx, DeepSpacePage.tsx   # Destination hubs
│       ├── moon/        # 7 story pages
│       ├── mars/        # 17 story pages
│       └── deepspace/   # 12 story pages
├── vite.config.ts                        # Vite, Tailwind and PWA configuration
└── vercel.json                           # SPA rewrite
```


## Data sources and attribution

The site does **not** call any NASA API at runtime. All content is curated by hand and stored in the source code. Mission facts and images come from the sources below.

### NASA sources

| Source | Used for |
| --- | --- |
| [nasa.gov](https://www.nasa.gov) | Mission photographs and news |
| [science.nasa.gov](https://science.nasa.gov) | Planetary science mission pages and imagery |
| [mars.nasa.gov](https://mars.nasa.gov) | Mars mission imagery |
| [NASA Image and Video Library](https://images.nasa.gov) | Archive photographs |
| [NASA's Eyes on the Solar System](https://eyes.nasa.gov) | Embedded 3D view on the Mars Odyssey page |

### Other sources and credits
- **Wikimedia Commons** and Wikipedia: historical spacecraft photographs and background reading (licence as marked on each source page).
- **Music:** "Hazy Cosmos", used in the project videos.
- **Open-source libraries:** React, Vite, Tailwind CSS, Three.js, Motion, Lucide, vite-plugin-pwa.

### Text
The story chapters, quizzes and "Did You Know?" facts retell publicly documented mission facts in a first-person voice.

## Use of AI

In line with the NASA Space Apps Challenge rules, this is how AI was used:

| Tool | Used for |
| --- | --- |
| **Google AI Studio** | Building the web app (code generation) |
| **Claude** (Anthropic) | Rewriting and tightening the story text, fact-checking, and drafting narration scripts |
| **ElevenLabs** | AI voice for the 36 story narrations and the project video voice-over |
| **Gemini** and **Google Flow** | AI-generated images and video clips in the project videos |

The audio on the site is an AI voice, not a human recording, and is labelled as such. The idea, the choice of missions, the structure of the stories and the final review were done by the team.

## Known limitations

- Story content is hand-curated, so mission status (for example for Voyager, Juno or Curiosity) can go out of date over time.
- Narration is English only.

## Roadmap

- [ ] Every Language translation and narration
- [ ] More missions across the Moon, Mars and deep space

## Team

**Universe Breakers**, a team from Bangladesh.

| Name | Role |
| --- | --- |
| Tasnimul Hasan Zihan | Team leader, developer, storyteller |

