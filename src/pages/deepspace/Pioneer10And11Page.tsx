import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Pioneer10And11Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Historical Pioneer"
      isStillActive={false}
      name="Pioneer 10 & 11"
      dateRange="1972 - 2003"
      location="Outer Solar System & Interstellar Boundary"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHt2aJCzmgrBsEacizamxXaFUv29hfV17WqLQXs8g7g&s=10"
      imageAlt="Pioneer 10 Spacecraft"
      capturedImages={[
        "https://www.nasa.gov/wp-content/uploads/2019/08/pioneer_11_saturn_post_encounter.jpg",
        "https://www.nasa.gov/wp-content/uploads/2023/03/739508main_739460main_AC79-9107.3-full_full.jpg",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/740/Pioneer_plaque_mounted_to_spacecraft.jpeg?w=1600&h=900&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/5211/Pioneer_10_Ganymede-1.jpeg?w=800&h=600&fit=clip&crop=faces%2Cfocalpoint"
      ]}

      chapters={[
        {
          title: "Chapter 1: Crossing the Asteroid Belt",
          content: "We were the first to cross the dangerous Asteroid Belt and see Jupiter and Saturn up close — and we carried a message for any intelligence in the universe."
        },
        {
          title: "Chapter 2: Surviving Jupiter's Radiation",
          content: "In December 1973, Pioneer 10 plunged through Jupiter's intense magnetic field, taking close-up images of the Great Red Spot! "
        },
        {
          title: "Chapter 3: Pioneer 11 at Saturn",
          content: "Pioneer 11 used Jupiter's gravity to fly to Saturn in September 1979, discovering new narrow rings and Titan's thick atmosphere."
        },
        {
          title: "Chapter 4: The Gold Plaque into Eternity",
          content: "Bolted to our airframes are gold-anodized aluminum plaques depicting a man, woman, and solar system coordinates. As we glide into interstellar space, our message travels forever."
        }
      ]}
      stats={{
        launchDate: "March 2, 1972 & April 6, 1973",
        landingDate: "Jupiter (1973) & Saturn (1979)",
        dataSent: "First Outer Planet Photos",
        status: "Gone Silent in Interstellar Space",
        isStillActive: false
      }}
      didYouKnow="Pioneer 10 and 11 carry a famous gold plaque designed by Carl Sagan with illustrations of humans and Earth's location for any alien civilization that finds them!"
      objectives={[
        "Cross the Asteroid Belt between Mars and Jupiter for the first time.",
        "Obtain close-up imaging and radiation readings of Jupiter and Saturn.",
        "Carry a physical message plaque into interstellar space."
      ]}
      quiz={{
        question: "What physical artifact designed by Carl Sagan is bolted to Pioneer 10 and 11?",
        options: [
          "A gold record with Earth songs",
          "A gold-anodized aluminum plaque showing human figures and solar coordinates",
          "A digital hard drive",
          "A glass crystal sphere"
        ],
        correctIndex: 1,
        explanation: "Pioneer 10 & 11 carry gold plaques drawn by Carl Sagan and Linda Salzman Sagan to introduce humanity to extra-terrestrials."
      }}
      prevStory={{
        name: "Mariner Program",
        hash: "#/deep-space/marinerprogram"
      }}
      nextStory={{
        name: "Voyager 1 & 2",
        hash: "#/deep-space/voyager1and2"
      }}
    />
  );
};
