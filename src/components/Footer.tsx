import React from 'react';
import DoodleCrewFooter, { CrewMember, FooterColumn, FooterAction } from './ui/doodle-crew-footer';
import { BRAND } from '../data/landingContent';

const SPACE_CREW: CrewMember[] = [
  { kind: "yeti", letter: 0, seat: "front", offset: -0.32, name: "Houston", says: "Transmission received. Standing by!" },
  { kind: "bird", letter: 8, seat: "top", offset: 0.05, name: "Apollo", says: "The Eagle has landed on the Moon!" },
  { kind: "kid", letter: 17, seat: "top", offset: -0.05, name: "Voyager", says: "Entering the interstellar cosmic void!" },
  { kind: "ghost", letter: 21, seat: "behind", offset: 0, name: "Surveyor", says: "Quietly waiting in the lunar regolith." },
  { kind: "mushroom", letter: 28, seat: "front", offset: -0.15, scale: 0.95, name: "Curiosity", says: "Still roving across Martian sand dunes!" },
  { kind: "cat", letter: 39, seat: "front", offset: 0.42, flip: true, name: "Cosmo", says: "Tracking orbits across the asteroid belt." },
];

const SPACE_COLUMNS: FooterColumn[] = [
  {
    title: "NAVIGATION",
    links: [
      { label: "HOME", href: "#hero" },
      { label: "EXPLORE", href: "#destinations" },
      { label: "ABOUT", href: "#closing-cta" },
    ],
  },
  {
    title: "TARGETS",
    links: [
      { label: "THE MOON", href: "#/moon" },
      { label: "MARS", href: "#/mars" },
      { label: "DEEP SPACE", href: "#/deep-space" },
    ],
  },
];

const SPACE_ACTIONS: FooterAction[] = [
  { label: "Explore The Moon", href: "#/moon", icon: "star", variant: "solid" },
  { label: "Journey To Mars", href: "#/mars", icon: "flame", variant: "outline" },
  { label: "Deep Space Void", href: "#/deep-space", icon: "sparkle", variant: "solid" },
];

export const Footer: React.FC = () => {
  return (
    <div id="footer" className="w-full border-t-4 border-white bg-[#0b0c10] font-mono-retro">
      <DoodleCrewFooter
        wordmark="Solar System Graveyard... or Hall of Fame?"
        brand="SOLAR SYSTEM GRAVEYARD... OR HALL OF FAME?"
        blurb="Telling the stories of NASA's discarded equipment on the Moon, on Mars, and in deep space to inspire the next generation of explorers."
        tagline="Silent monuments to human curiosity enduring across the cosmic void."
        columns={SPACE_COLUMNS}
        actions={SPACE_ACTIONS}
        crew={SPACE_CREW}
        doodles={["star", "sparkle", "bolt", "plane", "flame", "star"]}
        doodleCount={14}
        preset="night"
        palette={{
          background: "#0b0c10",
          ink: "#ffffff",
          accent: "#2997ff",
        }}
        fontFamily='"Arial Black", "Inter Display", Inter, ui-sans-serif, system-ui, sans-serif'
        serifFamily='ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
        copyright="■ COPYRIGHT © 2026 UNIVERSE BREAKERS. ALL RIGHTS RESERVED."
        legal={[]}
        socials={[]}
        backToTop={false}
        height="720px"
      />
    </div>
  );
};
