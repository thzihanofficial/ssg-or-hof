import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const InSightLandersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Geophysical Lander"
      isStillActive={false}
      name="InSight Landers"
      dateRange="2018 - 2022"
      location="Elysium Planitia"
      imageSrc="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/PIA22743-Mars-InSightLander-ArtistConcept-20181024.jpg/960px-PIA22743-Mars-InSightLander-ArtistConcept-20181024.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      imageAlt="InSight Lander"

      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/PIA22812-Mars-InSightLander-Landing-20181010.jpg/500px-PIA22812-Mars-InSightLander-Landing-20181010.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/PIA25287-MarsInSightLander-BeforeAfterDustySelfies-20220523.gif/500px-PIA25287-MarsInSightLander-BeforeAfterDustySelfies-20220523.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/PIA22575_IDC_Camera_First_Image.jpg/960px-PIA22575_IDC_Camera_First_Image.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/PIA23301-MarsInSightLander-PitsMadeByThrusters-20181214.jpg/960px-PIA23301-MarsInSightLander-PitsMadeByThrusters-20181214.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: Listening to the Red Planet",
          content: "I listened to the interior of Mars by detecting seismic waves from hundreds of marsquakes—the first mission to directly measure seismic activity inside another planet."
        },
        {
          title: "Chapter 2: Placing the Seismometer",
          content: "On November 26, 2018, I landed on the flat plains of Elysium Planitia. Using my robotic arm, I carefully lifted the SEIS seismometer from my deck and placed it directly onto the Martian surface. I then positioned a protective Wind and Thermal Shield over it"
        },
        {
          title: "Chapter 3: Over 1,300 Marsquakes",
          content: "SEIS was incredibly sensitive, capable of detecting ground motions smaller than the width of a hydrogen atom. I recorded 1,319 seismic events, including a magnitude 5 marsquake—the largest detected during my mission—confirming that Mars is still seismically active."
        },
        {
          title: "Chapter 4: Mapping the Core of Mars",
          content: "By analyzing how seismic waves traveled through Mars, I helped scientists determine the structure of its crust, mantle, and large liquid iron-rich core. After more than four years on Mars, dust covering my solar panels reduced my power, and my mission came to an end in December 2022."
        }
      ]}
      stats={{
        launchDate: "May 5, 2018",
        landingDate: "November 26, 2018",
        dataSent: "1,319 Quakes Recorded",
        status: "Gone Silent (Mission Complete Dec 2022)",
        isStillActive: false
      }}
      didYouKnow="InSight's seismometer was so sensitive it picked up the sound of meteorites slamming into Mars over 1,000 miles away!"
      objectives={[
        "Place ultra-sensitive SEIS seismometer directly onto Martian ground.",
        "Measure internal crust, mantle, and core dimensions using seismic waves.",
        "Monitor subsurface heat flow and meteorite impact frequencies."
      ]}
      quiz={{
        question: "How many marsquakes did InSight detect during its mission inside Mars?",
        options: [
          "0",
          "12",
          "Over 1,300",
          "1 million"
        ],
        correctIndex: 2,
        explanation: "InSight recorded 1,319 marsquakes, unlocking the interior structure of Mars for the first time."
      }}
      prevStory={{
        name: "MAVEN",
        hash: "#/mars/maven"
      }}
      nextStory={{
        name: "Mars 2020 / Ingenuity",
        hash: "#/mars/mars2020"
      }}
    />
  );
};
