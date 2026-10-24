import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MessengerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Historical Mercury Orbiter"
      isStillActive={false}
      name="MESSENGER"
      dateRange="2004 – 2015"
      location="Mercury Polar Orbit"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/MESSENGER_-_spacecraft_at_mercury_-_atmercury_lg.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      imageAlt="MESSENGER Spacecraft"
      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/View_of_Earth_from_MESSENGER.jpg/500px-View_of_Earth_from_MESSENGER.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "http://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/MESSENGERearth.jpg/330px-MESSENGERearth.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/MESSENGER_-_Venus_630_nm_stretch.jpg/330px-MESSENGER_-_Venus_630_nm_stretch.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/MESSENGER_EN0108828359M.png/330px-MESSENGER_EN0108828359M.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: Surmounting the Sun's Furnace",
          content: "I survived intense radiation and scorching heat from the Sun to become the first spacecraft ever to orbit Mercury."
        },
        {
          title: "Chapter 2: The Sunshade Defense",
          content: "Operating near Mercury meant facing solar heating 11 times stronger than Earth! I wore a ceramic cloth sunshade heat shield that kept my instruments at room temperature while my sunward side baked at 700°F."
        },
        {
          title: "Chapter 3: Ice in Mercury's Craters",
          content: "My neutron spectrometer and laser altimeter probed the dark craters at Mercury's poles. I confirmed the presence of water ice frozen in permanent darkness!"
        },
        {
          title: "Chapter 4: The Final Impact",
          content: "In April 2015, after 4 years and 100,000 photos, my thruster gas was depleted. I impacted Mercury at 8,700 mph, carving a new crater on the planet I mapped so faithfully."
        }
      ]}
      stats={{
        launchDate: "August 3, 2004",
        landingDate: "Mercury Orbit (March 18, 2011)",
        dataSent: "290,000+ High-Res Images",
        status: "Impacted Mercury (April 30, 2015)",
        isStillActive: false
      }}
      didYouKnow="MESSENGER confirmed abundant frozen water ice sitting inside pitch-black polar craters on Mercury — the closest planet to the blazing Sun!"
      objectives={[
        "Become the first probe to enter orbit around Mercury.",
        "Map global chemical composition and core structure with X-ray/Gamma instruments.",
        "Detect water ice in permanently shadowed polar craters."
      ]}
      quiz={{
        question: "What protective gear allowed MESSENGER to survive 700°F heat near the Sun?",
        options: [
          "Liquid nitrogen cooling tanks",
          "A ceramic cloth heat shade",
          "Refrigeration coils",
          "Gold foil wrap"
        ],
        correctIndex: 1,
        explanation: "MESSENGER used a custom ceramic cloth sunshade that blocked extreme solar heat, keeping electronics at room temperature."
      }}
      prevStory={{
        name: "Juno",
        hash: "#/deep-space/juno"
      }}
      nextStory={{
        name: "OSIRIS-REx & OSIRIS-APEX",
        hash: "#/deep-space/osirisrexapex"
      }}
    />
  );
};
