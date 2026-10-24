import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const ClementinePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Clementine"
      dateRange="January 1994 - June 1994"
      location="Lunar Polar Orbit"
      imageSrc="https://images-assets.nasa.gov/image/PIA18159/PIA18159~orig.jpg"
      imageAlt="Clementine Spacecraft"
      capturedImages={[
        "https://www.nasa.gov/wp-content/uploads/2024/02/clementine-9-crater-rydberg-rotated.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Reiner-gamma-clem1.jpg/500px-Reiner-gamma-clem1.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Moon_South_Pole.jpg/960px-Moon_South_Pole.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Moon_North_Pole.jpg/960px-Moon_North_Pole.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Modern Return to the Moon",
          content: "For over two decades after Apollo, the Moon sat in darkness without major US orbiters. In 1994, I was launched jointly by NASA and the Strategic Defense Initiative to test lightweight sensors in deep space."
        },
        {
          title: "Chapter 2: Mapping in Multispectral Light",
          content: "I spent two months orbiting pole-to-pole, photographing 99% of the Moon in 11 different wavelengths. I created the first unified global topographic and mineralogical map of our celestial neighbor."
        },
        {
          title: "Chapter 3: The Ice Discovery at the Poles",
          content: "Using my bistatic radar beam pointed into the pitch-black South Pole craters — near the Shackleton Crater region — my signal bounced back with a radar signature that scientists interpreted as a possible hint of frozen water ice in shadowed basins. But the result was far from conclusive — some scientists, especially using the Arecibo radio telescope, later challenged the finding, arguing it could be explained by rough terrain rather than ice. It wasn't until the 2009 LCROSS mission directly confirmed water ice at the lunar south pole."
        },
        {
          title: "Chapter 4: Paving the Way for Artemis",
          content: "My radar evidence of polar ice ignited a new era of lunar exploration. Today, future Artemis lunar bases and water harvesting plans trace their roots directly back to my 1994 polar radar signals."
        }
      ]}
      stats={{
        launchDate: "January 25, 1994",
        landingDate: "Orbiter (Reached Feb 1994)",
        dataSent: "1.8 Million Digital Images",
        status: "Mission Completed",
        isStillActive: false
      }}
      didYouKnow="Clementine was officially named after the famous folk song 'Oh My Darling, Clementine' because the spacecraft would be 'lost and gone forever' after its mission!"
      objectives={[
        "Assess lightweight sensor performance in deep space radiation environments.",
        "Map global lunar topography, gravity, and surface mineralogy in multispectral bands.",
        "Search for water ice signatures in permanently shadowed polar craters using radar."
      ]}
      quiz={{
        question: "What ground-breaking discovery did Clementine's radar hint at near the Moon's South Pole?",
        options: [
          "Active volcanic eruptions",
          "Water ice deposits inside permanently shadowed craters",
          "Rich diamond fields",
          "Dense atmosphere pocket"
        ],
        correctIndex: 1,
        explanation: "Clementine's bistatic radar reflection revealed the first strong evidence of water ice inside frozen, shadowed craters at the lunar poles."
      }}
      prevStory={{
        name: "Apollo 17 LRV",
        hash: "#/moon/apollo17lrv"
      }}
      nextStory={undefined}
    />
  );
};
