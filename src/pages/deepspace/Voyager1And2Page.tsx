import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Voyager1And2Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Still Active"
      isStillActive={true}
      name="Voyager 1 & 2"
      dateRange="1977 – Present"
      location="Interstellar Space (Beyond Heliopause)"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUx20_mnEqD9w4LEkGQVL21Aa2sf6hZhOXBFahOICkzQ&s=10"
      imageAlt="Voyager Interstellar Probe"
      
      hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: The Interstellar Travelers",
          content: "We are the farthest human-made objects in existence — we have left our solar system behind and crossed into interstellar space."
        },
        {
          title: "Chapter 2: The Grand Tour of Gas Giants",
          content: "Taking advantage of a rare planetary alignment that occurs once every 175 years, Voyager 2 visited Jupiter, Saturn, Uranus, and Neptune! Voyager 1 discovered active volcanoes on Io and thick atmosphere on Titan."
        },
        {
          title: "Chapter 3: The Pale Blue Dot",
          content: "In 1990, Voyager 1 turned its camera back toward Earth from 3.7 billion miles away. Carl Sagan captured Earth as a single pixel of light — a 'Pale Blue Dot' suspended in a sunbeam."
        },
        {
          title: "Chapter 4: Entering Interstellar Space",
          content: "Voyager 1 crossed the heliopause into interstellar space in 2012, and Voyager 2 followed in 2018. Powered by radioisotope generators, we still transmit cosmic ray data back across 15 billion miles today in 2026."
        }
      ]}
      stats={{
        launchDate: "Aug 20 & Sep 5, 1977",
        landingDate: "Interstellar Crossing (2012 & 2018)",
        dataSent: "Over 67,000 Photos + Cosmic Ray Logs",
        status: "🟢 Still Active in Interstellar Space",
        isStillActive: true
      }}
      didYouKnow="Voyager 1 is over 15 billion miles (24 billion km) away from Earth — radio signals travelling at light speed take over 22 hours to reach it!"
      objectives={[
        "Execute the 'Grand Tour' alignment visit to Jupiter, Saturn, Uranus, and Neptune.",
        "Cross the heliopause into interstellar space.",
        "Carry the Golden Record featuring music, sounds, and greetings from 55 human languages."
      ]}
      quiz={{
        question: "What famous photograph did Voyager 1 take of Earth from 3.7 billion miles away in 1990?",
        options: [
          "The Blue Marble",
          "The Pale Blue Dot",
          "Earthrise",
          "Cosmic Oasis"
        ],
        correctIndex: 1,
        explanation: "Carl Sagan requested the 'Pale Blue Dot' photo, showing Earth as a tiny speck suspended in a shaft of sunlight."
      }}
      prevStory={{
        name: "Pioneer 10 & 11",
        hash: "#/deep-space/pioneer10and11"
      }}
      nextStory={{
        name: "Hubble Space Telescope",
        hash: "#/deep-space/hubbletelescope"
      }}
    />
  );
};
