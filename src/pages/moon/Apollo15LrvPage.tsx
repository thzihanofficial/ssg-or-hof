import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Apollo15LrvPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Apollo 15 LRV"
      dateRange="July 1971 - August 1971"
      location="Hadley-Apennine Region"
      imageSrc="https://www.nasa.gov/wp-content/uploads/2023/03/as15-88-11901orig.jpg"
      imageAlt="Apollo 15 Lunar Roving Vehicle"
      hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: The First Moon Car",
          content: "I was the first vehicle on the Moon — no roads, no maps, just me and two astronauts in a completely unknown world. Built from lightweight aluminum with wire-mesh tires, I folded into a tight 5-foot package during flight."
        },
        {
          title: "Chapter 2: Driving Across Hadley Rille",
          content: "When David Scott and James Irwin unfolded me on the Moon, I doubled their exploration range! Powered by four electric hub motors, I zipped across rocky slopes at 8 mph towards the giant Hadley Rille gorge."
        },
        {
          title: "Chapter 3: Finding the Genesis Rock",
          content: "Together, we traveled 17.3 miles across the lunar landscape and helped astronauts discover the famous 4.1-billion-year-old 'Genesis Rock', unlocking ancient solar system history."
        },
        {
          title: "Chapter 4: Parked for Eternity",
          content: "When Apollo 15 departed, my color TV camera filmed their dramatic liftoff live for Earth viewers. I remain parked at Hadley-Apennine, waiting under the silent lunar sky."
        }
      ]}
      stats={{
        launchDate: "July 26, 1971",
        landingDate: "July 30, 1971",
        dataSent: "17.3 Miles Driven (77 kg Rocks)",
        status: "Parked on the Moon",
        isStillActive: false
      }}
      didYouKnow="The LRV's tires were not made of rubber (which would shatter in lunar cold), but constructed from woven zinc-coated steel piano wire with titanium treads!"
      objectives={[
        "Expand astronaut mobility range beyond walking distance from the Lunar Module.",
        "Traverse Hadley Rille and Apennine Mountain slopes to collect geological samples.",
        "Provide live color TV broadcasts during EVAs and spacecraft liftoff."
      ]}
      quiz={{
        question: "What unique material were the tires of the Lunar Rover made from?",
        options: [
          "Solid rubber",
          "Woven steel piano wire with titanium treads",
          "Fiberglass mesh",
          "Pressurized Kevlar tube"
        ],
        correctIndex: 1,
        explanation: "Rubber would freeze and shatter in the -250°F lunar night, so Boeing built the wheels from flexible woven steel wire."
      }}
      prevStory={{
        name: "Surveyor 5, 6 & 7",
        hash: "#/moon/surveyor567"
      }}
      nextStory={{
        name: "Apollo 16 LRV",
        hash: "#/moon/apollo16lrv"
      }}
    />
  );
};
