import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const ChandraObservatoryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Still Active"
      isStillActive={true}
      name="Chandra X-Ray Observatory"
      dateRange="1999 – Present"
      location="Elliptical High Earth Orbit"
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/astro/missions/Chandra20years.webp?w=1536"
      imageAlt="Chandra X-Ray Observatory"
      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/PIA21061-Pluto-DwarfPlanet-XRays-20160914.jpg/250px-PIA21061-Pluto-DwarfPlanet-XRays-20160914.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://upload.wikimedia.org/wikipedia/commons/8/85/X-RayFlare-BlackHole-MilkyWay-20140105.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/0/03/NASA-SNR0519690-ChandraXRayObservatory-20150122.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/6/60/M31_Core_in_X-rays.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      ]}

      chapters={[
        {
          title: "Chapter 1: The X-Ray Visionary",
          content: "I see the universe in high-energy X-rays — revealing black holes, supernova explosions, and colliding galaxy clusters invisible to normal eyes."
        },
        {
          title: "Chapter 2: Highly Smooth Mirrors",
          content: "Launched by Space Shuttle Columbia in 1999, my cylindrical iridium-coated glass mirrors are polished so smooth that if they were as big as the Earth, the highest mountain would be less than 6 feet tall!"
        },
        {
          title: "Chapter 3: Imaging Supernova Remnants & Black Holes",
          content: "I captured the first X-ray image of the point-like object in the center of the Cassiopeia A supernova remnant and tracked supermassive black holes devouring surrounding gas."
        },
        {
          title: "Chapter 4: Evidence of Dark Matter",
          content: "By photographing the Bullet Cluster, where two galaxy clusters collided, I provided direct empirical evidence of dark matter by observing normal hot gas separating from gravitational dark matter."
        }
      ]}
      stats={{
        launchDate: "July 23, 1999",
        landingDate: "Highly Elliptical High-Earth Orbit",
        dataSent: "Over 27+ Years of X-Ray Data",
        status: "🟢 Still Active",
        isStillActive: true
      }}
      didYouKnow="Chandra's mirrors are so smooth that if you expanded them to the size of Earth, the tallest bump on the glass would be less than 6 feet high!"
      objectives={[
        "Observe high-energy X-ray emission from black holes, neutron stars, and supernova remnants.",
        "Map million-degree hot gas clouds in galaxy clusters.",
        "Study dark matter distribution during cosmic cluster collisions."
      ]}
      quiz={{
        question: "What type of light does the Chandra Observatory detect from deep space?",
        options: [
          "Radio waves",
          "High-energy X-rays",
          "Microwave radiation",
          "Visible rainbow light"
        ],
        correctIndex: 1,
        explanation: "Chandra detects high-energy X-rays emitted by matter heated to millions of degrees near black holes and supernova explosions."
      }}
      prevStory={{
        name: "Hubble Space Telescope",
        hash: "#/deep-space/hubbletelescope"
      }}
      nextStory={{
        name: "New Horizons",
        hash: "#/deep-space/newhorizons"
      }}
    />
  );
};
