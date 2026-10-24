import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const OsirisRexApexPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Still Active"
      isStillActive={true}
      name="OSIRIS-REx & OSIRIS-APEX"
      dateRange="2016 – Present"
      location="Asteroid Bennu & Apophis"
      imageSrc="https://science.nasa.gov/wp-content/uploads/2023/10/230924-osiris-apex-0001.jpg"
      imageAlt="OSIRIS-REx Spacecraft"
       hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: Grabbing a Piece of an Asteroid",
          content: "I reached out a robotic arm, touched a spinning asteroid 200 million miles away, and brought a sample of primitive carbon rock back to Earth!"
        },
        {
          title: "Chapter 2: The High-Five at Nightingale Crater",
          content: "On October 20, 2020, I approached near-Earth asteroid Bennu, extended my TAGSAM arm, and pressed nitrogen gas into its surface, grabbing 121.6 grams of pristine 4.5-billion-year-old rock samples!"
        },
        {
          title: "Chapter 3: Sample Return to Utah",
          content: "On September 24, 2023, I released my sample capsule over Earth. It parachuted down into the Utah desert containing rich water-bearing clay minerals and carbon building blocks."
        },
        {
          title: "Chapter 4: Reborn as OSIRIS-APEX",
          content: "With fuel remaining, NASA extended my journey as OSIRIS-APEX! I am now traveling to rendezvous with potentially hazardous asteroid Apophis in 2029 during its close flyby of Earth."
        }
      ]}
      stats={{
        launchDate: "September 8, 2016",
        landingDate: "Sample Returned Sept 2023",
        dataSent: "121.5 Grams Asteroid Rocks Returned",
        status: "🟢 Still Active (En Route to Apophis)",
        isStillActive: true
      }}
      didYouKnow="OSIRIS-REx collected 121.5 grams of asteroid Bennu — more than twice NASA's original 60-gram mission target!"
      objectives={[
        "Collect and return at least 60 grams of pristine carbonaceous regolith from asteroid Bennu.",
        "Analyze organic molecules and water-bearing minerals from the early solar system.",
        "Redirect mission as OSIRIS-APEX to study close-approach asteroid Apophis in 2029."
      ]}
      quiz={{
        question: "Where did OSIRIS-REx drop off its asteroid sample capsule in September 2023?",
        options: [
          "Pacific Ocean",
          "Utah Desert (UTTR test range)",
          "Moon surface",
          "Sahara Desert"
        ],
        correctIndex: 1,
        explanation: "OSIRIS-REx released its sample capsule into the Utah Test and Training Range desert on September 24, 2023."
      }}
      prevStory={{
        name: "MESSENGER",
        hash: "#/deep-space/messenger"
      }}
      nextStory={{
        name: "James Webb Space Telescope",
        hash: "#/deep-space/jameswebbtelescope"
      }}
    />
  );
};
