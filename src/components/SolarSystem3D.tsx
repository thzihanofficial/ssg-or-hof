import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Sparkles, RotateCcw, Play, Pause, ExternalLink } from 'lucide-react';

interface PlanetData {
  id: string;
  name: string;
  glbPath?: string;
  size: number;
  distance: number;
  speed: number;
  rotationSpeed: number;
  color: string;
  isInteractive: boolean;
  route?: string;
  subtitle: string;
  description: string;
  hasRings?: boolean;
  orbitAngle: number;
}

const PLANETS: PlanetData[] = [
  {
    id: 'sun',
    name: 'Sun',
    glbPath: '/planets/sun.glb',
    size: 5.2,
    distance: 0,
    speed: 0,
    rotationSpeed: 0.002,
    color: '#ffaa00',
    isInteractive: false,
    subtitle: 'G2V Main-Sequence Star',
    description: 'The gravitational anchor and central energy source of the Solar System.',
    orbitAngle: 0,
  },
  {
    id: 'mercury',
    name: 'Mercury',
    size: 0.7,
    distance: 10,
    speed: 0.022,
    rotationSpeed: 0.005,
    color: '#a8a8a8',
    isInteractive: false,
    subtitle: 'Innermost World',
    description: 'Heavily cratered terrestrial planet facing extreme temperature swings.',
    orbitAngle: 0.5,
  },
  {
    id: 'venus',
    name: 'Venus',
    size: 1.15,
    distance: 15,
    speed: 0.016,
    rotationSpeed: -0.003,
    color: '#e3bb76',
    isInteractive: false,
    subtitle: 'Toxic Atmosphere',
    description: 'Blanketed by dense CO2 clouds with crushing surface pressures.',
    orbitAngle: 1.8,
  },
  {
    id: 'earth',
    name: 'Earth',
    size: 1.3,
    distance: 21,
    speed: 0.011,
    rotationSpeed: 0.01,
    color: '#2b82c9',
    isInteractive: false,
    subtitle: 'Home World',
    description: 'Abundant liquid water, vibrant biosphere and blue atmosphere.',
    orbitAngle: 3.2,
  },
  {
    id: 'moon',
    name: 'Moon',
    glbPath: '/planets/moon.glb',
    size: 0.55,
    distance: 2.8, // Orbiting Earth
    speed: 0.035,
    rotationSpeed: 0.008,
    color: '#d0d0d0',
    isInteractive: true,
    route: '#/moon',
    subtitle: 'Apollo & Surveyor Target',
    description: 'CLICK TO EXPLORE: 7 NASA Lunar Landings & Rover Sites',
    orbitAngle: 0,
  },
  {
    id: 'mars',
    name: 'Mars',
    glbPath: '/planets/mars.glb',
    size: 0.95,
    distance: 28,
    speed: 0.008,
    rotationSpeed: 0.009,
    color: '#d14a28',
    isInteractive: true,
    route: '#/mars',
    subtitle: 'The Red Planet',
    description: 'CLICK TO EXPLORE: 16 NASA Landers, Rovers & Orbiters',
    orbitAngle: 4.5,
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    glbPath: '/planets/jupiter.glb',
    size: 2.8,
    distance: 37,
    speed: 0.005,
    rotationSpeed: 0.02,
    color: '#d8a070',
    isInteractive: false,
    subtitle: 'Gas Giant Giant',
    description: 'Massive turbulent storm bands and Great Red Spot.',
    orbitAngle: 2.1,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    glbPath: '/planets/saturn.glb',
    size: 2.3,
    distance: 46,
    speed: 0.0035,
    rotationSpeed: 0.018,
    color: '#e4cb97',
    hasRings: true,
    isInteractive: false,
    subtitle: 'Jewel of Solar System',
    description: 'Prominent ice and dust ring system.',
    orbitAngle: 5.2,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    glbPath: '/planets/uranus.glb',
    size: 1.7,
    distance: 55,
    speed: 0.0025,
    rotationSpeed: -0.012,
    color: '#70d8d0',
    isInteractive: false,
    subtitle: 'Tilted Ice Giant',
    description: 'Methane atmosphere with unique extreme axial tilt.',
    orbitAngle: 0.9,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    glbPath: '/planets/neptune.glb',
    size: 1.6,
    distance: 63,
    speed: 0.0018,
    rotationSpeed: 0.014,
    color: '#4070d8',
    isInteractive: false,
    subtitle: 'Outer Frontier',
    description: 'Deep blue windswept ice giant with supersonic storms.',
    orbitAngle: 3.8,
  },
];

// Helper to convert spherical lat/long to canvas 2D coordinates
function latLongToXY(lat: number, lon: number, w: number, h: number) {
  const x = ((lon + 180) / 360) * w;
  const y = ((90 - lat) / 180) * h;
  return { x, y };
}

// Photorealistic 1024x512 Canvas Map Generators
function createRealisticPlanetTexture(id: string, baseColor: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const w = canvas.width;
  const h = canvas.height;

  if (id === 'earth') {
    // 1. Photorealistic Earth Equirectangular Texture
    // Deep Ocean
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, h);
    oceanGrad.addColorStop(0, '#103058');
    oceanGrad.addColorStop(0.5, '#16487e');
    oceanGrad.addColorStop(1, '#103058');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, w, h);

    // Shallow Ocean Coastal Shelves
    ctx.fillStyle = '#216aa2';
    // North America shelf
    ctx.beginPath(); ctx.ellipse(250, 180, 160, 100, 0, 0, Math.PI * 2); ctx.fill();
    // Eurasia shelf
    ctx.beginPath(); ctx.ellipse(650, 160, 260, 120, 0, 0, Math.PI * 2); ctx.fill();
    // Africa shelf
    ctx.beginPath(); ctx.ellipse(540, 270, 120, 130, 0, 0, Math.PI * 2); ctx.fill();
    // South America shelf
    ctx.beginPath(); ctx.ellipse(330, 330, 90, 140, 0, 0, Math.PI * 2); ctx.fill();

    // Re-fill Ocean background with blending
    ctx.fillStyle = 'rgba(16, 50, 90, 0.4)';
    ctx.fillRect(0, 0, w, h);

    // Continents Landmasses (Realistic Shapes)
    const drawLand = (path: { x: number; y: number }[], fillColor = '#2e743d') => {
      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.closePath();
      ctx.fill();
    };

    // North America
    drawLand([
      { x: 120, y: 80 }, { x: 260, y: 70 }, { x: 300, y: 120 }, { x: 280, y: 170 },
      { x: 250, y: 220 }, { x: 210, y: 240 }, { x: 180, y: 210 }, { x: 120, y: 160 }
    ], '#367e43');

    // South America
    drawLand([
      { x: 280, y: 250 }, { x: 360, y: 280 }, { x: 380, y: 340 }, { x: 320, y: 440 },
      { x: 290, y: 450 }, { x: 270, y: 360 }, { x: 280, y: 280 }
    ], '#2d6d39');

    // Eurasia
    drawLand([
      { x: 450, y: 140 }, { x: 550, y: 90 }, { x: 720, y: 80 }, { x: 920, y: 100 },
      { x: 950, y: 180 }, { x: 880, y: 220 }, { x: 780, y: 240 }, { x: 700, y: 210 },
      { x: 620, y: 230 }, { x: 520, y: 220 }, { x: 460, y: 180 }
    ], '#3b8549');

    // Africa
    drawLand([
      { x: 460, y: 200 }, { x: 580, y: 210 }, { x: 610, y: 270 }, { x: 580, y: 380 },
      { x: 520, y: 410 }, { x: 480, y: 320 }, { x: 450, y: 250 }
    ], '#357841');

    // Sahara & Arabian Deserts
    ctx.fillStyle = '#bfa15f';
    ctx.beginPath(); ctx.ellipse(530, 225, 65, 25, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(620, 215, 35, 20, 0, 0, Math.PI * 2); ctx.fill();

    // Australia
    drawLand([
      { x: 820, y: 330 }, { x: 910, y: 340 }, { x: 930, y: 400 },
      { x: 850, y: 420 }, { x: 810, y: 380 }
    ], '#ab8848');

    // Polar Ice Caps
    ctx.fillStyle = '#ffffff';
    // North Pole (Greenland/Arctic)
    ctx.beginPath(); ctx.ellipse(280, 50, 70, 25, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(0, 0, w, 25);
    // South Pole (Antarctica)
    ctx.fillRect(0, 470, w, 42);

    // Realistic Atmospheric Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let i = 0; i < 70; i++) {
      const cx = (i * 37 + 120) % w;
      const cy = 40 + (i * 19) % (h - 80);
      const rx = 80 + (i % 5) * 30;
      const ry = 10 + (i % 3) * 6;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0.15, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (id === 'mars') {
    // 2. Photorealistic Mars Equirectangular Surface Map
    // Rich Rusty Orange Base
    ctx.fillStyle = '#be4318';
    ctx.fillRect(0, 0, w, h);

    // Dark Basalt Volcanic Highlands & Basins (Syrtis Major, Acidalia Planitia, Hellas)
    ctx.fillStyle = '#5c1f0d';
    ctx.beginPath(); ctx.ellipse(600, 260, 110, 70, -0.3, 0, Math.PI * 2); ctx.fill(); // Syrtis Major
    ctx.beginPath(); ctx.ellipse(320, 160, 180, 50, 0.1, 0, Math.PI * 2); ctx.fill(); // Acidalia
    ctx.beginPath(); ctx.ellipse(680, 370, 120, 60, 0, 0, Math.PI * 2); ctx.fill(); // Hellas Basin
    ctx.beginPath(); ctx.ellipse(180, 320, 150, 70, 0.2, 0, Math.PI * 2); ctx.fill(); // Mare Erythraeum

    // Valles Marineris Grand Canyon Rift across Equator
    ctx.fillStyle = '#3a1207';
    ctx.beginPath();
    ctx.ellipse(380, 256, 160, 12, -0.05, 0, Math.PI * 2);
    ctx.fill();

    // Olympus Mons Caldera Ring
    ctx.strokeStyle = '#280b04';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(220, 220, 28, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#8f2f11';
    ctx.beginPath(); ctx.arc(220, 220, 25, 0, Math.PI * 2); ctx.fill();

    // Ochre Dust Storm Trails
    ctx.fillStyle = 'rgba(235, 155, 95, 0.3)';
    for (let i = 0; i < 120; i++) {
      const cx = (i * 53) % w;
      const cy = (i * 29) % h;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 70, 12, 0.1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Impact Crater Rings
    ctx.strokeStyle = 'rgba(50, 12, 4, 0.5)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 80; i++) {
      const cx = (i * 97) % w;
      const cy = 40 + (i * 43) % (h - 80);
      const r = 4 + (i % 6) * 3;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    }

    // Crisp Polar Ice Caps (Carbon Dioxide & Water Ice)
    ctx.fillStyle = '#f5f7fa';
    ctx.beginPath(); ctx.ellipse(w / 2, 18, 380, 22, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w / 2, 494, 380, 22, 0, 0, Math.PI * 2); ctx.fill();
  } else if (id === 'moon') {
    // 3. Photorealistic Lunar Surface (Highlands, Maria Basalt, Crater Rays)
    ctx.fillStyle = '#9c9c9e';
    ctx.fillRect(0, 0, w, h);

    // Lunar Maria Basalt Seas
    ctx.fillStyle = '#4a4a4c';
    ctx.beginPath(); ctx.ellipse(280, 180, 110, 80, 0.2, 0, Math.PI * 2); ctx.fill(); // Oceanus Procellarum
    ctx.beginPath(); ctx.ellipse(400, 150, 75, 50, -0.1, 0, Math.PI * 2); ctx.fill(); // Mare Imbrium
    ctx.beginPath(); ctx.ellipse(500, 200, 55, 45, 0, 0, Math.PI * 2); ctx.fill(); // Mare Tranquillitatis
    ctx.beginPath(); ctx.ellipse(510, 140, 45, 35, 0, 0, Math.PI * 2); ctx.fill(); // Mare Serenitatis
    ctx.beginPath(); ctx.ellipse(420, 230, 40, 30, 0, 0, Math.PI * 2); ctx.fill(); // Mare Nubium

    // Tycho Crater Radial Ray Ejecta System
    ctx.strokeStyle = 'rgba(235, 235, 240, 0.45)';
    ctx.lineWidth = 2;
    const tychoX = 350, tychoY = 380;
    for (let a = 0; a < Math.PI * 2; a += 0.15) {
      ctx.beginPath();
      ctx.moveTo(tychoX, tychoY);
      ctx.lineTo(tychoX + Math.cos(a) * 220, tychoY + Math.sin(a) * 220);
      ctx.stroke();
    }
    // Tycho Crater Center
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(tychoX, tychoY, 10, 0, Math.PI * 2); ctx.fill();

    // Copernicus & Kepler Craters
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(360, 210, 8, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(280, 220, 6, 0, Math.PI * 2); ctx.fill();

    // Fine Impact Craters
    ctx.strokeStyle = 'rgba(40, 40, 42, 0.6)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 200; i++) {
      const cx = (i * 73) % w;
      const cy = (i * 37) % h;
      const r = 3 + (i % 5) * 3;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    }
  } else if (id === 'sun') {
    const grad = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, h);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.25, '#ffe57f');
    grad.addColorStop(0.6, '#ff8c00');
    grad.addColorStop(0.85, '#d93800');
    grad.addColorStop(1, '#800000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = Math.random() * 8 + 2;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  } else if (id === 'jupiter') {
    for (let y = 0; y < h; y++) {
      const normY = y / h;
      const band = Math.sin(normY * Math.PI * 22) + Math.cos(normY * Math.PI * 11) * 0.5;
      const bandColor = band > 0.2 ? '#d29662' : band > -0.2 ? '#bd7a48' : '#e6be98';
      ctx.fillStyle = bandColor;
      ctx.fillRect(0, y, w, 1);
    }
    // Great Red Spot
    ctx.fillStyle = '#b3301a';
    ctx.beginPath(); ctx.ellipse(650, 320, 75, 45, 0, 0, Math.PI * 2); ctx.fill();
  } else if (id === 'saturn') {
    for (let y = 0; y < h; y++) {
      const normY = y / h;
      const band = Math.sin(normY * Math.PI * 28);
      ctx.fillStyle = band > 0 ? '#e3c896' : '#ccaa70';
      ctx.fillRect(0, y, w, 1);
    }
  } else if (id === 'mercury') {
    ctx.fillStyle = '#828282';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#525252';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      ctx.beginPath(); ctx.ellipse(x, y, 70, 40, 0, 0, Math.PI * 2); ctx.fill();
    }
  } else {
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    for (let i = 0; i < 200; i++) {
      ctx.fillRect(Math.random() * w, Math.random() * h, Math.random() * 40 + 10, Math.random() * 15 + 3);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export const SolarSystem3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const planetMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const orbitPivotsRef = useRef<Map<string, THREE.Group>>(new Map());
  const floatingBtnRef = useRef<HTMLDivElement>(null);
  const floatTimeRef = useRef(0);
  const isPausedRef = useRef(isPaused);
  const prevHoveredIdRef = useRef<string | null>(null);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const handleDeepSpaceClick = () => {
    window.location.hash = '#/deep-space';
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 600;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#08090d');
    sceneRef.current = scene;

    scene.fog = new THREE.FogExp2('#08090d', 0.0025);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 38, 72);
    cameraRef.current = camera;

    // 3. High-Performance WebGL Renderer (optimized DPR to eliminate fillrate lag)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // 4. Controls (Rotation, Zoom, and Pan disabled per user rules)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = false;
    controlsRef.current = controls;

    // 5. Optimized Single-Pass Lighting (Eliminated redundant light passes)
    const ambientLight = new THREE.AmbientLight('#ffffff', 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight('#ffea9f', 4.0, 320, 0.15);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const dirLight = new THREE.DirectionalLight('#ffffff', 1.1);
    dirLight.position.set(40, 60, 50);
    scene.add(dirLight);

    // 6. Optimized Starfield Background (1400 points)
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1400;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 260 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const colorChoice = Math.random();
      if (colorChoice > 0.8) {
        starColors[i * 3] = 0.6; starColors[i * 3 + 1] = 0.85; starColors[i * 3 + 2] = 1.0;
      } else if (colorChoice > 0.6) {
        starColors[i * 3] = 1.0; starColors[i * 3 + 1] = 0.85; starColors[i * 3 + 2] = 0.6;
      } else {
        starColors[i * 3] = 0.95; starColors[i * 3 + 1] = 0.95; starColors[i * 3 + 2] = 1.0;
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 7. GLTF Loader
    const gltfLoader = new GLTFLoader();

    // 8. Build Planets with Dedicated Lightweight Hit-Testing Targets
    const hitTargets: THREE.Mesh[] = [];

    PLANETS.forEach((planet) => {
      const pivot = new THREE.Group();
      pivot.rotation.y = planet.orbitAngle;
      scene.add(pivot);
      orbitPivotsRef.current.set(planet.id, pivot);

      // Orbital Path Line (optimized segments)
      if (planet.distance > 0 && planet.id !== 'moon') {
        const ringGeo = new THREE.RingGeometry(planet.distance - 0.12, planet.distance + 0.12, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: planet.isInteractive ? (planet.id === 'mars' ? '#ff5533' : '#44aaff') : '#ffffff',
          side: THREE.DoubleSide,
          transparent: true,
          opacity: planet.isInteractive ? 0.38 : 0.14,
        });
        const orbitRing = new THREE.Mesh(ringGeo, ringMat);
        orbitRing.rotation.x = Math.PI / 2;
        scene.add(orbitRing);
      }

      const planetGroup = new THREE.Group();
      planetGroup.name = planet.id;
      planetGroup.userData = { planetData: planet };

      if (planet.id !== 'moon') {
        planetGroup.position.x = planet.distance;
        pivot.add(planetGroup);
      }

      planetMeshesRef.current.set(planet.id, planetGroup);

      // Lightweight Invisible Hit-Test Sphere (Fast O(1) Raycasting without deep traversal)
      const hitGeo = new THREE.SphereGeometry(Math.max(planet.size * 1.35, 1.8), 12, 12);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitSphere = new THREE.Mesh(hitGeo, hitMat);
      hitSphere.name = `${planet.id}-hit`;
      hitSphere.userData = { planetData: planet };
      planetGroup.add(hitSphere);
      hitTargets.push(hitSphere);

      // Fallback planet sphere (32x32 segments for 75% vertex reduction)
      const texture = createRealisticPlanetTexture(planet.id, planet.color);
      const geometry = new THREE.SphereGeometry(planet.size, 32, 32);

      let material: THREE.Material;
      if (planet.id === 'sun') {
        material = new THREE.MeshBasicMaterial({ map: texture });
        const glowGeo = new THREE.SphereGeometry(planet.size * 1.25, 24, 24);
        const glowMat = new THREE.MeshBasicMaterial({
          color: '#ff9900',
          transparent: true,
          opacity: 0.3,
          side: THREE.BackSide,
        });
        const glowMesh = new THREE.Mesh(glowGeo, glowMat);
        planetGroup.add(glowMesh);
      } else if (planet.id === 'earth') {
        material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.5,
          metalness: 0.1,
        });
        const atmosGeo = new THREE.SphereGeometry(planet.size * 1.06, 24, 24);
        const atmosMat = new THREE.MeshBasicMaterial({
          color: '#00aaff',
          transparent: true,
          opacity: 0.22,
          side: THREE.BackSide,
        });
        const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
        planetGroup.add(atmosMesh);
      } else {
        material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.6,
          metalness: 0.1,
        });
      }

      const defaultMesh = new THREE.Mesh(geometry, material);
      defaultMesh.name = `${planet.id}-mesh`;
      planetGroup.add(defaultMesh);

      // Saturn Rings
      if (planet.hasRings) {
        const ringGeo = new THREE.RingGeometry(planet.size * 1.4, planet.size * 2.4, 48);
        const ringCanvas = document.createElement('canvas');
        ringCanvas.width = 256;
        ringCanvas.height = 1;
        const rctx = ringCanvas.getContext('2d')!;
        const rgrad = rctx.createLinearGradient(0, 0, 256, 0);
        rgrad.addColorStop(0, 'rgba(220, 190, 140, 0.1)');
        rgrad.addColorStop(0.3, 'rgba(220, 190, 140, 0.9)');
        rgrad.addColorStop(0.6, 'rgba(190, 160, 120, 0.7)');
        rgrad.addColorStop(0.8, 'rgba(220, 190, 140, 0.85)');
        rgrad.addColorStop(1, 'rgba(170, 140, 100, 0.05)');
        rctx.fillStyle = rgrad;
        rctx.fillRect(0, 0, 256, 1);

        const ringTex = new THREE.CanvasTexture(ringCanvas);
        ringTex.colorSpace = THREE.SRGBColorSpace;
        const ringMat = new THREE.MeshStandardMaterial({
          map: ringTex,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2.3;
        planetGroup.add(ringMesh);
      }

      // Load Official GLB Model with Memory Cleanup
      if (planet.glbPath) {
        gltfLoader.load(
          planet.glbPath,
          (gltf) => {
            const model = gltf.scene;

            model.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = false;
                mesh.receiveShadow = false;

                if (mesh.material) {
                  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                  mats.forEach((mat: any) => {
                    mat.needsUpdate = true;
                    if (mat.map) {
                      mat.map.colorSpace = THREE.SRGBColorSpace;
                      mat.map.needsUpdate = true;
                    }
                    if (mat.emissiveMap) {
                      mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
                    }
                    mat.side = THREE.DoubleSide;
                  });
                }
              }
            });

            // Auto-scale GLB model
            const bbox = new THREE.Box3().setFromObject(model);
            const sizeVec = new THREE.Vector3();
            bbox.getSize(sizeVec);
            const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z) || 1;
            const targetScale = (planet.size * 2) / maxDim;
            model.scale.set(targetScale, targetScale, targetScale);

            bbox.setFromObject(model);
            const center = new THREE.Vector3();
            bbox.getCenter(center);
            model.position.sub(center);

            // Dispose replaced fallback mesh to free VRAM
            const oldMesh = planetGroup.getObjectByName(`${planet.id}-mesh`) as THREE.Mesh;
            if (oldMesh) {
              planetGroup.remove(oldMesh);
              if (oldMesh.geometry) oldMesh.geometry.dispose();
              if (oldMesh.material) {
                if (Array.isArray(oldMesh.material)) {
                  oldMesh.material.forEach((m) => m.dispose());
                } else {
                  oldMesh.material.dispose();
                }
              }
            }
            planetGroup.add(model);
          },
          undefined,
          () => {}
        );
      }
    });

    // Attach Moon to Earth Group
    const moonGroup = planetMeshesRef.current.get('moon');
    const earthGroup = planetMeshesRef.current.get('earth');
    if (moonGroup && earthGroup) {
      moonGroup.position.set(PLANETS.find((p) => p.id === 'moon')!.distance, 0, 0);
      earthGroup.add(moonGroup);
    }

    // 9. Ultra-Fast Throttled Raycasting (Zero Layout Thrashing & Zero Redundant Re-Renders)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastRaycastTime = 0;

    const handlePointerMove = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastRaycastTime < 35) return; // Throttled to ~28fps
      lastRaycastTime = now;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hitTargets, false);
      const planet = intersects.length > 0 ? (intersects[0].object.userData.planetData as PlanetData) : null;
      const targetId = planet ? planet.id : null;

      // Only invoke state update IF the hovered planet actually changed!
      if (prevHoveredIdRef.current !== targetId) {
        prevHoveredIdRef.current = targetId;
        setHoveredPlanet(planet);
        renderer.domElement.style.cursor = planet ? 'pointer' : 'default';
      }
    };

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hitTargets, false);
      if (intersects.length > 0) {
        const planet = intersects[0].object.userData.planetData as PlanetData;
        if (planet.id === 'moon') {
          window.location.hash = '#/moon';
        } else if (planet.id === 'mars') {
          window.location.hash = '#/mars';
        }
      }
    };

    const canvasEl = renderer.domElement;
    canvasEl.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvasEl.addEventListener('click', handleCanvasClick);

    // 10. Viewport Visibility Tracking (Pause 100% GPU/CPU when scrolled out of view)
    let isCanvasVisible = true;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isCanvasVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    // 11. Optimized 60 FPS Render Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip render passes completely when scrolled off-screen
      if (!isCanvasVisible) return;

      if (!isPausedRef.current) {
        floatTimeRef.current += 0.0055;

        orbitPivotsRef.current.forEach((pivot, id) => {
          const pData = PLANETS.find((p) => p.id === id);
          if (pData && pData.speed > 0) {
            pivot.rotation.y += pData.speed * 0.3;
          }
        });

        planetMeshesRef.current.forEach((group, id) => {
          const pData = PLANETS.find((p) => p.id === id);
          if (pData) {
            group.rotation.y += pData.rotationSpeed * 0.8;
          }
        });

        // Drift floating DEEP SPACE button across full area of 3D canvas
        if (floatingBtnRef.current) {
          const time = floatTimeRef.current;
          const xPct = 46 + Math.sin(time) * 38; // 8% to 84% width
          const yPct = 40 + Math.cos(time * 0.65) * 30; // 10% to 70% height
          floatingBtnRef.current.style.left = `${xPct}%`;
          floatingBtnRef.current.style.top = `${yPct}%`;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvasEl.removeEventListener('pointermove', handlePointerMove);
      canvasEl.removeEventListener('click', handleCanvasClick);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleFocusPlanet = (planetId: string) => {
    const pData = PLANETS.find((p) => p.id === planetId);
    if (!pData || !controlsRef.current || !cameraRef.current) return;

    if (pData.id === 'moon') {
      window.location.hash = '#/moon';
      return;
    }
    if (pData.id === 'mars') {
      window.location.hash = '#/mars';
      return;
    }

    const group = planetMeshesRef.current.get(planetId);
    if (group) {
      const worldPos = new THREE.Vector3();
      group.getWorldPosition(worldPos);
      cameraRef.current.position.set(worldPos.x + 12, worldPos.y + 8, worldPos.z + 18);
      controlsRef.current.target.copy(worldPos);
    }
  };

  const handleResetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 38, 72);
      controlsRef.current.target.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full rounded-none overflow-hidden border-4 border-white bg-black shadow-[8px_8px_0px_0px_#ffffff]">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-[560px] sm:h-[660px] lg:h-[720px] xl:h-[760px] bg-[#08090d] cursor-grab active:cursor-grabbing relative" />

      {/* Top Left Pause/Play Rotation Button (Icon Only, No Text) */}
      <div className="absolute top-5 left-5 z-30 pointer-events-auto">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-3 bg-black/80 text-white border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center"
          aria-label={isPaused ? 'Play Orbit Rotation' : 'Pause Orbit Rotation'}
        >
          {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
        </button>
      </div>

      {/* Floating Circular "Deep Space" Button moving smoothly across full canvas area */}
      <div
        ref={floatingBtnRef}
        className="absolute z-30 pointer-events-auto transition-all duration-100 ease-out"
        style={{ left: '80%', top: '10%' }}
      >
        <button
          onClick={handleDeepSpaceClick}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/90 text-[#2997ff] border-2 border-[#2997ff] shadow-[0_0_15px_rgba(41,151,255,0.4)] hover:bg-[#2997ff] hover:text-black hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-1 text-center"
          title="Explore Deep Space"
        >
          <span className="text-[10px] sm:text-[11px] font-black uppercase leading-tight tracking-wider">
            DEEP<br />SPACE
          </span>
        </button>
      </div>

      {/* Active Planet Info Hover Card */}
      {hoveredPlanet && (
        <div className="absolute bottom-20 left-6 right-6 sm:left-6 sm:right-auto z-20 max-w-sm bg-black/95 border-3 border-white p-4 shadow-[6px_6px_0px_0px_#ffffff] animate-fadeIn">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span
              className={`text-xs font-black uppercase px-2 py-0.5 border ${
                hoveredPlanet.isInteractive
                  ? 'bg-[#2997ff] text-black border-white'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-600'
              }`}
            >
              {hoveredPlanet.isInteractive ? 'Interactive Mission Target' : 'Celestial Body'}
            </span>
            {hoveredPlanet.isInteractive && (
              <span className="flex items-center gap-1 text-[11px] font-bold text-[#2997ff]">
                Click to Open Page <ExternalLink className="w-3 h-3" />
              </span>
            )}
          </div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            {hoveredPlanet.name}
          </h3>
          <p className="text-xs text-[#2997ff] font-bold uppercase mb-2">
            {hoveredPlanet.subtitle}
          </p>
          <p className="text-xs text-zinc-300 font-medium leading-relaxed">
            {hoveredPlanet.description}
          </p>
        </div>
      )}

      {/* Bottom Planet Quick Navigation Rail */}
      <div className="absolute bottom-5 left-0 right-0 z-20 px-3 sm:px-4 pointer-events-none flex justify-center">
        <div className="inline-flex items-center gap-2.5 sm:gap-4 py-2 px-3 sm:px-5 bg-black/95 backdrop-blur-xl border-2 border-white shadow-[6px_6px_0px_0px_#2997ff] pointer-events-auto max-w-[calc(100vw-24px)] overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
            </span>
            <span className="text-[11px] font-black tracking-widest text-zinc-300 uppercase whitespace-nowrap hidden xs:inline">
              EXPLORE TARGET:
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              onClick={() => handleFocusPlanet('moon')}
              className="group h-9 inline-flex items-center gap-2 px-3 sm:px-4 text-xs font-black uppercase tracking-wider text-white bg-zinc-900 border-2 border-zinc-400 hover:border-white hover:bg-white hover:text-black transition-all cursor-pointer shadow-[2px_2px_0px_0px_#ffffff] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none shrink-0 select-none whitespace-nowrap"
              title="Explore Moon Landing Sites"
            >
              <span className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-black transition-colors shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
              <span className="whitespace-nowrap">MOON</span>
            </button>

            <button
              onClick={() => handleFocusPlanet('mars')}
              className="group h-9 inline-flex items-center gap-2 px-3 sm:px-4 text-xs font-black uppercase tracking-wider text-[#ff5533] bg-[#ff5533]/15 border-2 border-[#ff5533] hover:bg-[#ff5533] hover:text-black transition-all cursor-pointer shadow-[2px_2px_0px_0px_#ff5533] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none shrink-0 select-none whitespace-nowrap"
              title="Explore Mars Surface Hardware"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff5533] group-hover:bg-black transition-colors shrink-0 shadow-[0_0_6px_#ff5533]" />
              <span className="whitespace-nowrap">MARS</span>
            </button>

            <button
              onClick={handleDeepSpaceClick}
              className="group h-9 inline-flex items-center gap-2 px-3 sm:px-4 text-xs font-black uppercase tracking-wider text-[#2997ff] bg-[#2997ff]/15 border-2 border-[#2997ff] hover:bg-[#2997ff] hover:text-black transition-all cursor-pointer shadow-[2px_2px_0px_0px_#2997ff] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none shrink-0 select-none whitespace-nowrap"
              title="Explore Deep Space Missions & Probes"
            >
              <span className="w-2 h-2 rounded-full bg-[#2997ff] group-hover:bg-black transition-colors shrink-0 shadow-[0_0_6px_#2997ff]" />
              <span className="whitespace-nowrap">DEEP SPACE</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wideFloat {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            transform: translate(-280px, 45px) rotate(-1deg);
          }
          40% {
            transform: translate(-580px, 110px) rotate(1deg);
          }
          60% {
            transform: translate(-380px, 260px) rotate(-1.5deg);
          }
          80% {
            transform: translate(-120px, 160px) rotate(1deg);
          }
        }
        .animate-wide-float {
          animation: wideFloat 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
