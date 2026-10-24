import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Apollo16LrvPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Apollo 16 LRV"
      dateRange="April 1972"
      location="Descartes Highlands"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/0d/Moon_Buggy_Ap16-KSC-71PC-777.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
      imageAlt="Apollo 16 Lunar Roving Vehicle"
      hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: The Mountain Climber",
          content: "I was the second dune buggy on the Moon, assigned to explore the highest mountainous highlands ever visited by humans — the Descartes Highlands."
        },
        {
          title: "Chapter 2: The Lunar Grand Prix",
          content: "Astronaut John Young put my electric motors to the test during the famous 'Lunar Grand Prix', driving me at a top speed of about 6.2 mph (10 km/h) across crater rims while Charles Duke filmed my fishtailing maneuvers. The actual lunar land speed record of 11.2 mph was set later by Eugene Cernan during Apollo 17"
        },
        {
          title: "Chapter 3: Exploring Stone Mountain",
          content: "I carried the astronauts up 18-degree slopes of Stone Mountain to collect 209 pounds of ancient breccia rocks, proving the highlands were formed by impact impacts rather than volcanoes."
        },
        {
          title: "Chapter 4: Left in the Highlands",
          content: "I drove 16.8 miles across rough mountain terrain without a single breakdown. Today I rest quietly in the bright sun of Descartes, waiting for future explorers."
        }
      ]}
      stats={{
        launchDate: "April 16, 1972",
        landingDate: "April 21, 1972",
        dataSent: "16.8 Miles Driven (95 kg Samples)",
        status: "Parked on the Moon",
        isStillActive: false
      }}
      didYouKnow="Astronaut John Young set the off-world speed record driving Apollo 16's Rover at 11.2 mph (18 km/h) down a steep slope!"
      objectives={[
        "Explore Descartes Highlands crater slopes and Cayley Formation plains.",
        "Demonstrate high-speed maneuvering and climbing ability on 18° slopes.",
        "Deploy ultraviolet camera equipment to photograph Earth's magnetosphere from the Moon."
      ]}
      quiz={{
        question: "What top speed record did John Young set driving the Apollo 16 Rover?",
        options: [
          "5 mph",
          "11.2 mph",
          "25 mph",
          "45 mph"
        ],
        correctIndex: 1,
        explanation: "John Young drove the Apollo 16 LRV down a slope at 11.2 mph (18 km/h), setting the unofficial lunar driving speed record!"
      }}
      prevStory={{
        name: "Apollo 15 LRV",
        hash: "#/moon/apollo15lrv"
      }}
      nextStory={{
        name: "Apollo 17 LRV",
        hash: "#/moon/apollo17lrv"
      }}
    />
  );
};
