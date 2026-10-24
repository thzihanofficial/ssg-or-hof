import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Tiros1Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Historical Satellite"
      isStillActive={false}
      name="TIROS-1"
      dateRange="April 1960 - June 1960"
      location="Low Earth Orbit"
      imageSrc="https://www.sri.com/wp-content/uploads/2021/11/TIROS-1-weather-satellite.jpg"
      imageAlt="TIROS-1 Weather Satellite"
      hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: The Eye in the Sky",
          content: "I was the first instrument to capture images of Earth’s clouds from space — before me, no one knew it was possible to see storms coming from above."
        },
        {
          title: "Chapter 2: The First Weather Television",
          content: "Launched on April 1, 1960, I carried two small Vidicon television cameras in a drum-shaped body. Within hours, I beamed back the first TV photo of Earth's cloud bands."
        },
        {
          title: "Chapter 3: Tracking Tropical Typhoons",
          content: "Over my 78 days of operation, I transmitted 22,952 images, capturing a large tropical typhoon off New Zealand and proving satellite weather forecasting was possible."
        },
        {
          title: "Chapter 4: The Birth of Modern Meteorology",
          content: "I transformed meteorology forever. Today's modern weather satellites, hurricane tracking systems, and climate monitoring all trace their lineage directly back to me."
        }
      ]}
      stats={{
        launchDate: "April 1, 1960",
        landingDate: "Orbited (78 Days Active)",
        dataSent: "22,952 Earth Photos",
        status: "Decommissioned in Orbit",
        isStillActive: false
      }}
      didYouKnow="TIROS-1 stood for 'Television Infrared Observation Satellite' and was humanity's very first successful weather satellite!"
      objectives={[
        "Demonstrate feasibility of observing Earth cloud cover from orbit.",
        "Transmit television imagery of global weather patterns.",
        "Provide early warning detection for tropical storms and hurricanes."
      ]}
      quiz={{
        question: "What was TIROS-1 the very first satellite in human history to do?",
        options: [
          "Land on Mars",
          "Transmit TV pictures of Earth's clouds and weather from space",
          "Orbit the Moon",
          "Fly past Jupiter"
        ],
        correctIndex: 1,
        explanation: "TIROS-1 was the first television weather satellite, proving that Earth's cloud systems could be tracked from orbit."
      }}
      prevStory={undefined}
      nextStory={{
        name: "Mariner Program",
        hash: "#/deep-space/marinerprogram"
      }}
    />
  );
};
