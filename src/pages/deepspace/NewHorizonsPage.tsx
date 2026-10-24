import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const NewHorizonsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Still Active"
      isStillActive={true}
      name="New Horizons"
      dateRange="2006 – Present"
      location="Kuiper Belt (Pluto & Arrokoth Flybys)"
      imageSrc="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg/960px-15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      imageAlt="New Horizons Probe at Pluto"
      capturedImages={[
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/PIA09245_Ganymede.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        "https://upload.wikimedia.org/wikipedia/commons/d/db/NH_Jupiter_IR_%28contrast_enhanced%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/330px-Pluto_in_True_Color_-_High-Res.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Snakeskin_terrain_on_Pluto_%28PIA19957%29.png/500px-Snakeskin_terrain_on_Pluto_%28PIA19957%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: The High-Speed Speedster",
          content: "I raced across 3 billion miles of space to visit Pluto — I was the fastest spacecraft ever launched from Earth."
        },
        {
          title: "Chapter 2: The Speed Demon Launch",
          content: "In January 2006, an Atlas V rocket shot me off Earth at a record-breaking 36,000 mph. I crossed the orbit of the Moon in just 9 hours!"
        },
        {
          title: "Chapter 3: The Heart of Pluto",
          content: "On July 14, 2015, I zoomed past Pluto at 31,000 mph, photographing its giant nitrogen-ice heart glacier (Sputnik Planitia), ice mountains, and hazy blue atmosphere."
        },
        {
          title: "Chapter 4: Beyond to Arrokoth",
          content: "In 2019, I flew past Arrokoth, a snowman-shaped Kuiper Belt contact binary 4 billion miles from Earth. Today I continue tudying the distant Kuiper Belt and the outer heliospere!"
        }
      ]}
      stats={{
        launchDate: "January 19, 2006",
        landingDate: "Pluto Flyby (July 14, 2015)",
        dataSent: "Pluto & Arrokoth",
        status: "🟢 Still Active in Kuiper Belt",
        isStillActive: true
      }}
      didYouKnow="New Horizons flew past Pluto carrying ashes of Clyde Tombaugh — the American astronomer who discovered Pluto in 1930!"
      objectives={[
        "Perform first reconnaissance flyby of Pluto and its moons (Charon, Styx, Nix, Kerberos, Hydra).",
        "Map global composition, surface temperatures, and atmospheric haze of Pluto.",
        "Explore Kuiper Belt objects like contact binary Arrokoth."
      ]}
      quiz={{
        question: "What prominent feature did New Horizons discover on the surface of Pluto?",
        options: [
          "A giant liquid ocean",
          "A vast heart-shaped nitrogen ice glacier (Sputnik Planitia)",
          "A glowing ring system",
          "Active lava volcanoes"
        ],
        correctIndex: 1,
        explanation: "New Horizons revealed Pluto's famous heart-shaped glacier named Sputnik Planitia!"
      }}
      prevStory={{
        name: "Chandra X-Ray Observatory",
        hash: "#/deep-space/chandraobservatory"
      }}
      nextStory={{
        name: "Kepler Space Telescope",
        hash: "#/deep-space/keplertelescope"
      }}
    />
  );
};
