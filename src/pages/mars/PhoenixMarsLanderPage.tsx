import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const PhoenixMarsLanderPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Polar Lander"
      isStillActive={false}
      name="Phoenix Mars Lander"
      dateRange="2007 - 2008"
      location="Vastitas Borealis (Martian Arctic)"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHkX_W1m7F2Pv_S83CPWr9-9uoYkAFQwTsBW9CuwcZA&s=10"
      imageAlt="Phoenix Mars Lander"

      capturedImages={[
        "https://science.nasa.gov/wp-content/uploads/2024/03/phoenix-icy-trenches.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Phoenix_mission_landing.jpg/330px-Phoenix_mission_landing.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Phoenix_Sol1_pic3.jpg/330px-Phoenix_Sol1_pic3.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/PIA10741_Possible_Ice_Below_Phoenix.jpg/330px-PIA10741_Possible_Ice_Below_Phoenix.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: Touching Down in the Arctic",
          content: "I proved that there really is ice hidden beneath the Martian soil — I dug it out with my own robotic arm."
        },
        {
          title: "Chapter 2: Landing in the Frozen North",
          content: "On May 25, 2008, I landed using pulse thrusters in the flat arctic plains of Vastitas Borealis at 68 degrees north latitude."
        },
        {
          title: "Chapter 3: Digging Up Ice Chunks",
          content: "My 7.7-foot robotic arm scraped into the soil beneath my landing thrusters. In a trench named 'Dodo-Goldilocks', I uncovered bright white chunks of pure ice that vaporized into gas over four days!"
        },
        {
          title: "Chapter 4: The Arctic Winter Encitement",
          content: "I detected calcium carbonate and perchlorate salts in the soil and even photographed falling snow from Martian clouds before the dark, freezing polar winter encased me in CO2 ice."
        }
      ]}
      stats={{
        launchDate: "August 4, 2007",
        landingDate: "May 25, 2008",
        dataSent: "25,000+ Photos & Soil Readings",
        status: "Encased in Polar Winter Ice",
        isStillActive: false
      }}
      didYouKnow="Phoenix watched water-ice snow fall from Martian clouds 2.5 miles above its arctic landing site!"
      objectives={[
        "Verify presence of sub-surface water ice in arctic plains.",
        "Scrape soil and ice samples into TEGA ovens to analyze organic volatile gases.",
        "Monitor polar atmospheric weather and seasonal ice accumulation."
      ]}
      quiz={{
        question: "What happened to the bright white chunks Phoenix dug up in its 'Dodo-Goldilocks' trench over 4 days?",
        options: [
          "They turned into liquid water",
          "They sublimated (vaporized directly into gas)",
          "They grew larger",
          "They turned blue"
        ],
        correctIndex: 1,
        explanation: "Because Mars' atmospheric pressure is so low, pure water ice sublimates directly into gas when exposed to sunlight!"
      }}
      prevStory={{
        name: "Mars Reconnaissance Orbiter",
        hash: "#/mars/marsreconnaissanceorbiter"
      }}
      nextStory={{
        name: "Curiosity Rover",
        hash: "#/mars/curiosityrover"
      }}
    />
  );
};
