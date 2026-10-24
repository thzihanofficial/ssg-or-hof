import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MarinerProgramPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Historical Program"
      isStillActive={false}
      name="Mariner Program"
      dateRange="1962 – 1973"
      location="Inner Solar System (Venus, Mars, Mercury)"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/02/Mariner_5.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
      imageAlt="Mariner Spacecraft Fleet"
      hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: The Inner System Pioneers",
          content: "We are 10 siblings who flew past Venus, Mars, and Mercury one after another — we were the first to show humanity what other planets looked like up close."
        },
        {
          title: "Chapter 2: Unveiling Scorching Venus",
          content: "Mariner 2 became the first spacecraft to fly past Venus in 1962, measuring extreme temperatures of 800°F under crushing carbon dioxide clouds."
        },
        {
          title: "Chapter 3: First Orbit of Mars & Mercury Flybys",
          content: "Mariner 9 became the first orbiter around Mars in 1971, while Mariner 10 used Venus' gravity to fly past Mercury three times in 1974."
        },
        {
          title: "Chapter 4: The Blueprint for Interstellar Flight",
          content: "Our innovative solar panels, star trackers, and gravity-assist maneuvers provided the engineering foundation for Voyager, Magellan, and Cassini!"
        }
      ]}
      stats={{
        launchDate: "1962 - 1973 (10 Spacecraft)",
        landingDate: "Venus, Mars, Mercury Targets",
        dataSent: "Tens of Thousands of Photos",
        status: "Program Completed (10 Missions)",
        isStillActive: false
      }}
      didYouKnow="Mariner 10 was the very first spacecraft to use 'gravity assist' — using one planet's gravity (Venus) to slingshot toward another (Mercury)!"
      objectives={[
        "Perform first successful flybys of Venus, Mars, and Mercury.",
        "Demonstrate interplanetary navigation, solar radiation pressure steering, and gravity-assists.",
        "Provide first atmospheric and magnetic field measurements of inner terrestrial planets."
      ]}
      quiz={{
        question: "Which planet's gravity did Mariner 10 use to slingshot toward Mercury in 1974?",
        options: [
          "Earth",
          "Venus",
          "Jupiter",
          "Mars"
        ],
        correctIndex: 1,
        explanation: "Mariner 10 executed the first planetary gravity assist at Venus to bend its orbit towards Mercury!"
      }}
      prevStory={{
        name: "TIROS-1",
        hash: "#/deep-space/tiros1"
      }}
      nextStory={{
        name: "Pioneer 10 & 11",
        hash: "#/deep-space/pioneer10and11"
      }}
    />
  );
};
