import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const JamesWebbTelescopePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Still Active"
      isStillActive={true}
      name="James Webb Space Telescope (JWST)"
      dateRange="2021 – Present"
      location="Sun-Earth Lagrange Point 2 (L2)"
      imageSrc="https://science.nasa.gov/wp-content/uploads/2024/05/jwst_artist_concept_0.png"
      imageAlt="James Webb Space Telescope"
      capturedImages={[
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/science/2026/09/STScI-01M0JFFAD7SDCCNHWT7T7P3QX9.png?w=1616&h=2000&fit=crop&crop=faces%2Cfocalpoint",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/NASA%E2%80%99s_Webb_Reveals_Cosmic_Cliffs%2C_Glittering_Landscape_of_Star_Birth.jpg/960px-NASA%E2%80%99s_Webb_Reveals_Cosmic_Cliffs%2C_Glittering_Landscape_of_Star_Birth.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/NASA%E2%80%99s_Webb_Reveals_Cosmic_Cliffs%2C_Glittering_Landscape_of_Star_Birth_-_Flickr_-_James_Webb_Space_Telescope.png/960px-NASA%E2%80%99s_Webb_Reveals_Cosmic_Cliffs%2C_Glittering_Landscape_of_Star_Birth_-_Flickr_-_James_Webb_Space_Telescope.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Southern_Ring_Nebula_%28NIRCam_and_MIRI_Images_Side_by_Side%29.png/960px-Southern_Ring_Nebula_%28NIRCam_and_MIRI_Images_Side_by_Side%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Golden Eye on the Cosmic Dawn",
          content: "I can look back in time to the very first galaxies formed after the Big Bang — my golden mirrors see the invisible infrared universe."
        },
        {
          title: "Chapter 2: The Origami Unfolding in Deep Space",
          content: "Launched on Christmas Day 2021, I traveled 1 million miles to Lagrange Point 2. Over 14 days, I executed over 300 single points of failure, unfolding a tennis-court-sized sunshield and 18 gold-coated beryllium mirror segments."
        },
        {
          title: "Chapter 3: Seeing First Light",
          content: "My infrared eyes pierce through cosmic dust clouds, photographing star nurseries in Carina Nebula, water vapor in exoplanet atmospheres, and ancient galaxies formed just 280 million years after the Big Bang."
        },
        {
          title: "Chapter 4: A New Chapter in Human Knowledge",
          content: "Operating at -370°F, I am rewriting astrophysics textbooks every single day in 2026, revealing the chemical origins of stars, black holes, and world systems."
        }
      ]}
      stats={{
        launchDate: "December 25, 2021",
        landingDate: "Arrived L2 (Jan 24, 2022)",
        dataSent: "Deepest Infrared Images Ever Taken",
        status: "🟢 Still Active (20+ Year Fuel Life)",
        isStillActive: true
      }}
      didYouKnow="JWST's 18 hexagonal mirror segments are coated in a micro-layer of real 24-karat gold just 100 nanometers thick to reflect infrared light!"
      objectives={[
        "Observe the first stars and galaxies that formed in the universe after the Big Bang.",
        "Analyze atmospheres of exoplanets for water, methane, carbon dioxide, and biosignatures.",
        "Study planetary formation inside dust clouds and stellar nurseries."
      ]}
      quiz={{
        question: "What material coats the 18 hexagonal mirror segments of the James Webb Space Telescope?",
        options: [
          "Silver",
          "Pure 24-karat Gold",
          "Aluminum alloy",
          "Diamond dust"
        ],
        correctIndex: 1,
        explanation: "JWST's mirrors are coated in a micro-thin layer of pure 24-karat gold, which reflects infrared light with extreme efficiency."
      }}
      prevStory={{
        name: "OSIRIS-REx & OSIRIS-APEX",
        hash: "#/deep-space/osirisrexapex"
      }}
      nextStory={{
        name: "TIROS-1",
        hash: "#/deep-space/tiros1"
      }}
    />
  );
};
