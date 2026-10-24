import { 
  CelestialDestinationProfile, 
  EquipmentStory, 
  FutureModulePreview, 
  EducationalPillar 
} from '../types';

export const BRAND = {
  name: "Solar System Graveyard... or Hall of Fame?",
  team: "Universe Breakers",
  event: "NASA Space Apps Challenge 2026",
  theme: "The Next Frontier",
  challengeTitle: "Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars",
  disclaimer: "Participant-created project for NASA Space Apps Challenge 2026. Not affiliated with or endorsed by the National Aeronautics and Space Administration (NASA).",
  domain: "ssg-or-hof.vercel.app",
  url: "https://ssg-or-hof.vercel.app"
};

export const HERO_CONTENT = {
  badge: "NASA SPACE APPS CHALLENGE 2026",
  title: "Solar System Graveyard... or Hall of Fame?",
  tagline: "Explore the stories behind the machines that carried science beyond Earth.",
  subtext: "Since the earliest space missions, exploration hardware has remained across planetary surfaces and deep space. These instruments are not merely discarded machinery—they are the quiet monuments to human curiosity, discovery, and enduring scientific inquiry.",
  primaryCta: "EXPLORE THE STORIES",
  secondaryCta: "DISCOVER THE MISSION",
  scrollNotice: "Scroll to begin the voyage"
};

export const IDEA_CONTENT = {
  eyebrow: "THE PERSPECTIVE",
  heading: "Not everything that stops moving stops mattering.",
  lead: "Across six decades of human space exploration, robotic and scientific hardware deployed to distant planetary surfaces completed vital mission objectives, transmitted groundbreaking telemetry, and ultimately stayed behind.",
  body: "Their operational lifetimes may conclude, but their scientific legacy endures indefinitely. From planetary seismic sensors to long-range probes traversing the cosmic void, every instrument established the foundations for modern planetary science and future human voyages.",
  highlightBox: {
    title: "The Challenge Concept",
    quote: "To tell the story of hardware left across the solar system in a way that introduces school-age space enthusiasts to the engineering, the missions, and the science made possible."
  }
};

export const DESTINATIONS: CelestialDestinationProfile[] = [
  {
    id: 'moon',
    destination: 'Moon',
    tagline: 'The First Frontier of Surface Science',
    description: 'Machines that helped extend human knowledge beyond Earth.',
    distanceContext: '~384,400 km from Earth',
    hardwareRole: 'Early lunar surface stations, retroreflectors, and mobility systems left in the silence of the lunar regolith.',
    scientificImpact: 'Measuring seismic activity, solar wind particle flows, and laser-ranging orbital dynamics that still inform lunar physics.'
  },
  {
    id: 'mars',
    destination: 'Mars',
    tagline: 'The Red Planet Robotic Archive',
    description: 'Robotic explorers that transformed another world into a place of scientific discovery.',
    distanceContext: 'Variable orbital distance (~55M to 400M km)',
    hardwareRole: 'Autonomous wheel assemblies, mast cameras, meteorological stations, and stationary landing modules on Martian soil.',
    scientificImpact: 'Uncovering ancient aqueous environments, atmospheric composition cycles, and geotechnical surface histories.'
  },
  {
    id: 'deep-space',
    destination: 'Deep Space',
    tagline: 'The Cosmic Horizon Trajectories',
    description: 'Hardware that continues to carry the story farther from home.',
    distanceContext: 'Traversing the heliosphere and interstellar boundaries',
    hardwareRole: 'High-gain dish transmitters, radioisotope power canisters, and passive sensor booms voyaging beyond planetary orbits.',
    scientificImpact: 'Sampling interstellar magnetic fields, boundary shockwaves, and cosmic rays far beyond the sun’s direct reach.'
  }
];

export const HARDWARE_CATEGORIES = [
  {
    name: 'Rovers',
    iconDescription: 'Wheeled robotic laboratories',
    summary: 'Autonomous and remotely commanded platforms engineered to sample rocks, climb crater slopes, and photograph Martian soil.'
  },
  {
    name: 'Instruments',
    iconDescription: 'Precision scientific sensors',
    summary: 'Seismometers, particle detectors, optical spectrometers, and laser retroreflectors that gathered objective physical data.'
  },
  {
    name: 'Probes',
    iconDescription: 'Atmospheric & deep-space scouts',
    summary: 'Vehicles dispatched to test entry trajectories, measure thin atmospheres, and transmit data before settling onto alien terrain.'
  },
  {
    name: 'Scientific Hardware',
    iconDescription: 'Stationary laboratory stations',
    summary: 'Power generators, descent stages, antenna mounts, and experimental packages designed to withstand extreme cosmic environments.'
  },
  {
    name: 'Exploration Systems',
    iconDescription: 'Mission support structures',
    summary: 'Deceleration heat shields, descent parachutes, mobility carts, and tool caches that enabled groundbreaking surface operations.'
  }
];

export const PLACEHOLDER_STORIES: EquipmentStory[] = [
  {
    id: 'preview-surface-seismometer',
    name: 'Planetary Surface Seismometer Station',
    category: 'Instruments',
    destination: 'Moon',
    mission: 'Early Planetary Science Program',
    purpose: 'Designed to detect minute vibrations, meteoroid impacts, and internal crustal dynamics on the lunar surface.',
    scientificContribution: 'Provided humanity’s first direct empirical data concerning the seismic interior, crust thickness, and cooling history of an extraterrestrial body.',
    historicalContext: 'Deployed directly on the regolith, demonstrating that planetary bodies preserve records of ancient solar system evolution.',
    operationalStatus: 'Mission completed; station preserved on the lunar surface as a historical monument of observational astrophysics.',
    significanceSummary: 'Proved the Moon possesses internal seismic events and recorded hundreds of natural impact resonances.',
    isPlaceholderPreview: true
  },
  {
    id: 'preview-robotic-mobile-scout',
    name: 'Long-Range Planetary Surface Rover',
    category: 'Rovers',
    destination: 'Mars',
    mission: 'Mars Exploration Initiative',
    purpose: 'Engineered to navigate rocky terrain, analyze sedimentary outcrops, and test ancient geological layers for signs of past water activity.',
    scientificContribution: 'Mapped kilometers of ancient lakebeds and river deltas, confirming that Mars once possessed sustained liquid surface environments.',
    historicalContext: 'Outlasted initial operational baselines by years, showing the immense resilience of redundant aerospace robotics.',
    operationalStatus: 'Mission completed; stationary on Martian dust plains after years of continuous telemetry generation.',
    significanceSummary: 'Discovered cross-stratified sedimentary rocks and hematite spheres formed in past water.',
    isPlaceholderPreview: true
  },
  {
    id: 'preview-deep-space-interstellar-probe',
    name: 'Heliospheric Boundary Scout',
    category: 'Probes',
    destination: 'Deep Space',
    mission: 'Outer Solar System & Beyond',
    purpose: 'Built to transmit baseline telemetry regarding the solar wind boundary and interstellar magnetic transition zones.',
    scientificContribution: 'Identified the exact threshold where the Sun’s magnetic influence gives way to the ambient interstellar medium.',
    historicalContext: 'Traveled farther from Earth than any manufactured hardware in history, carrying golden records and scientific instruments.',
    operationalStatus: 'Operating on minimal radioisotope telemetry as it traverses the cosmic void.',
    significanceSummary: 'Directly measured cosmic ray density outside the heliosphere for the first time in human history.',
    isPlaceholderPreview: true
  }
];

export const PROGRESSION_STAGES = [
  {
    number: "01",
    stage: "HARDWARE",
    title: "Precision Engineering",
    description: "Every machine begins on Earth: solar panels, resilient titanium chassis, optical spectrometers, and autonomous logic units designed for extreme cold and vacuum."
  },
  {
    number: "02",
    stage: "MISSION",
    title: "Voyage & Deployment",
    description: "Launch vehicle insertion, gravitational sling shots, delicate atmospheric atmospheric entry, and touchdown across unexplored planetary soil."
  },
  {
    number: "03",
    stage: "SCIENCE",
    title: "Direct Measurement",
    description: "Collecting soil drills, laser ranging photons, recording tectonic shifts, and analyzing dust storms millions of kilometers from Earth."
  },
  {
    number: "04",
    stage: "DISCOVERY",
    title: "Expanding Knowledge",
    description: "Confirming ancient liquid water, mapping the interior mantle of the Moon, and charting the density of interstellar space."
  },
  {
    number: "05",
    stage: "LEGACY",
    title: "Monuments of Human Will",
    description: "When the batteries deplete and telemetry ceases, the hardware remains—not as litter, but as humanity's eternal footprints in the cosmos."
  }
];

export const EDUCATION_PILLARS: EducationalPillar[] = [
  {
    title: "Translating Complex Science",
    subtitle: "Intuitive, not dumbed down",
    description: "School-age learners discover how mechanical components—like thermal radiators and spectrometer prisms—work using interactive visual models and real aerospace logic.",
    audienceTarget: "Ages 8–18 & Curious Minds"
  },
  {
    title: "Storytelling Over Dry Tables",
    subtitle: "Machines with character",
    description: "Instead of unreadable database rows, equipment is presented through missions, obstacles overcome, martian dust storms weathered, and triumphant breakthroughs.",
    audienceTarget: "Classrooms & Youth Space Clubs"
  },
  {
    title: "Inspiring the Next Pioneers",
    subtitle: "From history to the future",
    description: "Connecting past discarded hardware to upcoming Artemis and Mars crewed missions, proving that every future explorer stands on the shoulders of these quiet machines.",
    audienceTarget: "Educators, Mentors & Students"
  }
];

export const FUTURE_MODULES: FutureModulePreview[] = [
  {
    code: "01",
    title: "Explore Equipment",
    description: "Interactive 3D-oriented hardware index detailing structural anatomy, instruments, and survival timelines.",
    statusBadge: "COMING IN THE FULL EXPERIENCE",
    actionHint: "Future Interactive 3D Viewer"
  },
  {
    code: "02",
    title: "Follow Missions",
    description: "Chronological orbital paths, launch trajectories, landing sites, and key communications milestones.",
    statusBadge: "COMING IN THE FULL EXPERIENCE",
    actionHint: "Future Mission Trajectory Maps"
  },
  {
    code: "03",
    title: "Discover the Science",
    description: "Curriculum-aligned science modules breaking down spectroscopy, planetary geology, and cosmic radiation.",
    statusBadge: "COMING IN THE FULL EXPERIENCE",
    actionHint: "Future Interactive Lab Modules"
  },
  {
    code: "04",
    title: "Explore Timelines",
    description: "An unbroken historical continuum from the 1960s Surveyor and Apollo packages to contemporary rovers.",
    statusBadge: "COMING IN THE FULL EXPERIENCE",
    actionHint: "Future Timeline Explorer"
  },
  {
    code: "05",
    title: "Compare Hardware",
    description: "Side-by-side engineering comparisons of mobility, power sources, computer memory, and payload capacities.",
    statusBadge: "COMING IN THE FULL EXPERIENCE",
    actionHint: "Future Hardware Compare Matrix"
  },
  {
    code: "06",
    title: "Learn Through Stories",
    description: "Narrative audio-visual journeys capturing the final transmissions and everlasting silence of remote hardware.",
    statusBadge: "COMING IN THE FULL EXPERIENCE",
    actionHint: "Future Narrative Story Engine"
  }
];
