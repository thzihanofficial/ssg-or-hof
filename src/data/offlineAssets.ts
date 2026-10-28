import missionImages from './allMissionImages.json';

export const OFFLINE_CACHE_NAME = 'ssg-offline-vault-v1';

export const MISSION_AUDIO_PATHS: string[] = [
  // Moon
  '/audios /moon/Surveyor1Page.mp3',
  '/audios /moon/Surveyor3Page.mp3',
  '/audios /moon/Surveyor567Page.mp3',
  '/audios /moon/ClementinePage.mp3',
  '/audios /moon/Apollo15LrvPage.mp3',
  '/audios /moon/Apollo16LrvPage.mp3',
  '/audios /moon/Apollo17LrvPage.mp3',

  // Mars
  '/audios /mars/Mariner6Page.mp3',
  '/audios /mars/Mariner7Page.mp3',
  '/audios /mars/Mariner9Page.mp3',
  '/audios /mars/Viking1And2Page.mp3',
  '/audios /mars/MarsGlobalSurveyorPage.mp3',
  '/audios /mars/MarsPathfinderPage.mp3',
  '/audios /mars/MarsOdysseyPage.mp3',
  '/audios /mars/SpiritAndOpportunityPage.mp3',
  '/audios /mars/MarsReconnaissanceOrbiterPage.mp3',
  '/audios /mars/PhoenixMarsLanderPage.mp3',
  '/audios /mars/CuriosityRoverPage.mp3',
  '/audios /mars/MavenPage.mp3',
  '/audios /mars/InSightLandersPage.mp3',
  '/audios /mars/Mars2020Page.mp3',
  '/audios /mars/SojournerPage.mp3',
  '/audios /mars/OpportunityPage.mp3',
  '/audios /mars/PerseverancePage.mp3',

  // Deep Space
  '/audios /deep_space/MarinerProgramPage.mp3',
  '/audios /deep_space/Pioneer10And11Page.mp3',
  '/audios /deep_space/Voyager1And2Page.mp3',
  '/audios /deep_space/MessengerPage.mp3',
  '/audios /deep_space/NewHorizonsPage.mp3',
  '/audios /deep_space/JunoPage.mp3',
  '/audios /deep_space/OsirisRexApexPage.mp3',
  '/audios /deep_space/Tiros1Page.mp3',
  '/audios /deep_space/HubbleTelescopePage.mp3',
  '/audios /deep_space/ChandraObservatoryPage.mp3',
  '/audios /deep_space/KeplerTelescopePage.mp3',
  '/audios /deep_space/JamesWebbTelescopePage.mp3',
];

export const PLANET_3D_MODELS: string[] = [
  '/planets/jupiter.glb',
  '/planets/moon.glb',
  '/planets/neptune.glb',
  '/planets/saturn.glb',
  '/planets/sun.glb',
  '/planets/uranus.glb',
];

export const CORE_PWA_ASSETS: string[] = [
  '/',
  '/favicon.svg',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/pwa-maskable-512x512.png',
  '/apple-touch-icon.png',
  '/robots.txt',
  '/sitemap.xml',
];

export const ALL_MISSION_IMAGES: string[] = missionImages;

export const ALL_OFFLINE_RESOURCES: string[] = [
  ...CORE_PWA_ASSETS,
  ...PLANET_3D_MODELS,
  ...MISSION_AUDIO_PATHS,
  ...ALL_MISSION_IMAGES,
];
