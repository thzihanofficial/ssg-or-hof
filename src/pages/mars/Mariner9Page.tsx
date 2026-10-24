import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Mariner9Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Orbiter"
      isStillActive={false}
      name="Mariner 9"
      dateRange="May 1971 - October 1972"
      location="Martian Orbit (85% Mapped)"
      imageSrc="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Mariner09.jpg/960px-Mariner09.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      imageAlt="Mariner 9 Orbiter"
      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/M09_mtvs4187_45.gif/500px-M09_mtvs4187_45.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Mariner_9_-_Olympus_Mons_Caldera_%2839210604190%29.png/500px-Mariner_9_-_Olympus_Mons_Caldera_%2839210604190%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://media.gettyimages.com/id/921869242/photo/photograph-of-mars-showing-long-lava-flows-as-viewed-by-mariner-9-mariner-9-was-an-unmanned.jpg?s=612x612&w=0&k=20&c=1athi0Opy4zAaDhFXDxrdg7d7bctz4Iy55xco14FXLM=",
        "https://media.gettyimages.com/id/615297154/photo/meande-ring-a-river-on-mars-taken-by-mariner-9.jpg?s=612x612&w=0&k=20&c=fjiup9zYygJhVqPoHF6lk3Lrp5VLCXH2KG47j8FIjto="
      ]}
      chapters={[
        {
          title: "Chapter 1: The First Planetary Orbiter",
          content: "I was the first human-made spacecraft to orbit another planet. But when I arrived in November 1971, I found Mars completely covered by a massive global dust storm — I had to wait!"
        },
        {
          title: "Chapter 2: Waiting Out the Dust Storm",
          content: "For weeks, only the high peak of a mysterious giant mountain poked through the orange dust. I patiently orbited until the dust settled in January 1972, revealing breathtaking wonders!"
        },
        {
          title: "Chapter 3: Discovering Olympus Mons & Valles Marineris",
          content: "That mountain was Olympus Mons — a volcano three times taller than Mount Everest! I also discovered a canyon 2,500 miles long, named Valles Marineris in my honor, along with ancient dry riverbeds."
        },
        {
          title: "Chapter 4: The Map That Changed Everything",
          content: "I mapped 85% of the Martian globe with 7,329 photos before running out of attitude gas in late 1972. I proved Mars was once a warm, active world with flowing water."
        }
      ]}
      stats={{
        launchDate: "May 30, 1971",
        landingDate: "Orbited Nov 14, 1971",
        dataSent: "7,329 Detailed Photos",
        status: "Decommissioned in Orbit",
        isStillActive: false
      }}
      didYouKnow="Mariner 9 discovered Valles Marineris — a grand canyon so massive it could stretch all the way across the entire United States from Los Angeles to New York!"
      objectives={[
        "Become the first spacecraft to enter orbit around another planet.",
        "Map over 70% of the Martian surface at high resolution.",
        "Study atmospheric seasonal changes and volcanic geology."
      ]}
      quiz={{
        question: "What gigantic canyon system discovered by Mariner 9 was named after the spacecraft?",
        options: [
          "Grand Canyon",
          "Valles Marineris",
          "Gale Crater",
          "Olympus Rift"
        ],
        correctIndex: 1,
        explanation: "Valles Marineris (Mariner Valleys) was named in honor of Mariner 9 after its discovery in 1972."
      }}
      prevStory={{
        name: "Mariner 7",
        hash: "#/mars/mariner7"
      }}
      nextStory={{
        name: "Viking 1 & 2",
        hash: "#/mars/viking1and2"
      }}
    />
  );
};
