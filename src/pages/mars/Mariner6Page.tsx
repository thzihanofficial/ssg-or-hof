import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Mariner6Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Flyby"
      isStillActive={false}
      name="Mariner 6"
      dateRange="February 1969 - July 1969"
      location="Martian Equatorial Belt"
      imageSrc="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/07/mariner6_7.gif?w=640&h=480&fit=clip&crop=faces%2Cfocalpoint"
      imageAlt="Mariner 6 Flyby Probe"
      capturedImages={[
        "https://www.nasa.gov/wp-content/uploads/2019/07/mar-6n16-new.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCG5fUFsujdS77vNjlhSVfiPUGexktIjrCy0OP2kWZQ&s=10",
        "https://www.nasa.gov/wp-content/uploads/2019/07/mar-6n16-new.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCG5fUFsujdS77vNjlhSVfiPUGexktIjrCy0OP2kWZQ&s=10"
      ]}
      chapters={[
        {
          title: "Chapter 1: The First Close-Up Glance",
          content: "I was the first spacecraft to capture close-up images of the Martian equator — and what I saw shocked scientists. Mars was even more mysterious than they had imagined."
        },
        {
          title: "Chapter 2: The Equatorial Flyby",
          content: "On July 31, 1969, I swooped within 2,130 miles of the Martian surface. My television camera snapped 75 television images, revealing heavily cratered terrain resembling the Moon rather than canals."
        },
        {
          title: "Chapter 3: Measuring the Atmosphere",
          content: "My infrared and ultraviolet spectrometers peered into Mars's thin air, confirming that the atmosphere was composed almost entirely of thin carbon dioxide with zero liquid surface water."
        },
        {
          title: "Chapter 4: Heading Into Solar Orbit",
          content: "After sending my photos back to Earth, my thrusters pushed me into an eternal heliocentric solar orbit, where I silently glide past the stars today."
        }
      ]}
      stats={{
        launchDate: "February 24, 1969",
        landingDate: "Flyby (July 31, 1969)",
        dataSent: "75 Close-Up Photographs",
        status: "Heliocentric Orbit",
        isStillActive: false
      }}
      didYouKnow="Mariner 6 flew past Mars just 11 days after Neil Armstrong walked on the Moon in July 1969!"
      objectives={[
        "Perform close equatorial flyby to photograph Martian surface features.",
        "Analyze atmospheric composition and pressure using UV/IR sensors.",
        "Provide thermal radiometer temperature readings of the equatorial surface."
      ]}
      quiz={{
        question: "What main gas did Mariner 6 discover made up most of Mars' atmosphere?",
        options: [
          "Nitrogen",
          "Oxygen",
          "Carbon Dioxide",
          "Methane"
        ],
        correctIndex: 2,
        explanation: "Mariner 6 confirmed that Mars' atmospheric envelope was 95% thin Carbon Dioxide."
      }}
      prevStory={undefined}
      nextStory={{
        name: "Mariner 7",
        hash: "#/mars/mariner7"
      }}
    />
  );
};
