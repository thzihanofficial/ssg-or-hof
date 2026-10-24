/**
 * Architecture & Data Structures for Nothing is Impossible
 * NASA Space Apps Challenge 2026
 *
 * Prepared for full application scalability:
 * Hardware catalog, missions database, storytelling narratives, and educational tracks.
 */

export type CelestialDestination = 'Moon' | 'Mars' | 'Deep Space';

export type HardwareCategory = 
  | 'Rovers'
  | 'Instruments'
  | 'Probes'
  | 'Scientific Hardware'
  | 'Exploration Systems';

export interface EquipmentTimelineEntry {
  year: number;
  phase: string;
  significance: string;
}

export interface EquipmentStory {
  id: string;
  name: string;
  category: HardwareCategory;
  destination: CelestialDestination;
  mission: string;
  purpose: string;
  scientificContribution: string;
  historicalContext: string;
  operationalStatus: string;
  significanceSummary: string;
  isPlaceholderPreview?: boolean;
  timeline?: EquipmentTimelineEntry[];
  sources?: {
    name: string;
    verifiedReference: string;
  }[];
}

export interface CelestialDestinationProfile {
  id: 'moon' | 'mars' | 'deep-space';
  destination: CelestialDestination;
  tagline: string;
  description: string;
  distanceContext: string;
  hardwareRole: string;
  scientificImpact: string;
}

export interface FutureModulePreview {
  code: string;
  title: string;
  description: string;
  statusBadge: string;
  actionHint: string;
}

export interface EducationalPillar {
  title: string;
  subtitle: string;
  description: string;
  audienceTarget: string;
}
