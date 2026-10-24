import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const JunoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Mission Complete"
      isStillActive={false}
      name="Juno"
      dateRange="2011 – 2025"
      location="Polar Orbit around Jupiter"
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/03/pia21770large.jpg?w=1920&h=1280&fit=crop&crop=faces%2Cfocalpoint"
      imageAlt="Juno Spacecraft at Jupiter"
      capturedImages={[
        "https://science.nasa.gov/wp-content/uploads/2024/04/pia25031-junocam-giant-storms-and-high-clouds.jpg",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/06/pia21973.jpg?w=1080&h=1080&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/content/dam/science/psd/solar/internal_resources/3795/Animated_GIF_showing_clouds_moving_in_Jupiters_Great_Red_Spot.gif?w=720&h=405&fit=clip&crop=faces%2Cfocalpoint",
        "https://images-assets.nasa.gov/image/PIA26235/PIA26235~orig.jpg?w=400&h=352&fit=crop&crop=faces%2Cfocalpoint"
      ]}
      chapters={[
        {
          title: "Chapter 1: Diving Into Jupiter's Cloud Tops",
          content: "I fly dangerously close to Jupiter, peering through its thick, stormy clouds to see what lies at the heart of the solar system's largest planet."
        },
        {
          title: "Chapter 2: The Solar-Powered Outer Explorer",
          content: "Equipped with three giant 30-foot solar panels, I became the farthest solar-powered spacecraft in history. On July 4, 2016, I fired my main engine to slip into a 53-day polar orbit around Jupiter."
        },
        {
          title: "Chapter 3: Swirling Polar Storm Cyclones",
          content: "My JunoCam photographed geometric clusters of giant cyclones spinning at Jupiter's poles and measured a fuzzy, diluted core rather than a sharp solid rock."
        },
        {
          title: "Chapter 4: Extended Moon Encounters",
          content: "In my extended mission, I made close flybys of Ganymede, Europa, and volcanic Io, capturing incredible high-resolution photos of alien ice and lava worlds!"
        }
      ]}
      stats={{
        launchDate: "August 5, 2011",
        landingDate: "Jupiter Orbit (July 4, 2016)",
        dataSent: "Over 60 Polar Perijove Flybys",
        status: "🔴 Mission Complete — September 2025",
        isStillActive: false
      }}
      didYouKnow="Juno carries three LEGO mini-figures representing the Roman god Jupiter, his wife Juno, and astronomer Galileo Galilei made from space-grade aluminum!"
      objectives={[
        "Map Jupiter's gravitational and magnetic fields to investigate core structure.",
        "Measure atmospheric water and ammonia abundance in deep cloud layers.",
        "Perform close flybys of Galilean moons Ganymede, Europa, and Io."
      ]}
      quiz={{
        question: "What power source keeps Juno operating 500 million miles away at Jupiter?",
        options: [
          "Nuclear RTG generator",
          "Three giant solar panel arrays",
          "Chemical batteries only",
          "Magnetic induction"
        ],
        correctIndex: 1,
        explanation: "Juno was the first spacecraft to operate so far out at Jupiter powered entirely by three massive solar panels!"
      }}
      prevStory={{
        name: "Kepler Space Telescope",
        hash: "#/deep-space/keplertelescope"
      }}
      nextStory={{
        name: "MESSENGER",
        hash: "#/deep-space/messenger"
      }}
    />
  );
};
