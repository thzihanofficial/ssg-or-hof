import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Surveyor567Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Surveyor 5, 6 & 7"
      dateRange="1967 - 1968"
      location="Mare Tranquillitatis, Sinus Medii & Tycho Crater"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/2/2a/Surveyor_NASA_lunar_lander.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      imageAlt="Surveyor Trio Spacecraft"
      capturedImages={[
        "https://upload.wikimedia.org/wikipedia/commons/2/2a/Surveyor_NASA_lunar_lander.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Surveyor_5_Fig_7-41c1.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Surveyor_6_Effects-of-the-vernier-rock.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Surveyor_7_Fig_3-54.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Chemical Trio",
          content: "We were three sister landers sent to unlock the chemical secrets of the Moon. Armed with alpha-scattering instruments, we analyzed the exact element composition of lunar basalt rocks for the first time."
        },
        {
          title: "Chapter 2: The First Lunar Liftoff",
          content: "Surveyor 6 accomplished a historic feat — after landing on Sinus Medii, it reignited its vernier engines, lifted 10 feet into the air, and moved 8 feet sideways to become the first craft to lift off from the Moon!"
        },
        {
          title: "Chapter 3: Exploring the Highlands",
          content: "While 5 and 6 mapped smooth lunar maria, Surveyor 7 braved the treacherous, rugged ejecta blanket of Tycho Crater in the southern highlands, proving landers could touch down on dangerous terrain."
        },
        {
          title: "Chapter 4: Legacy of Tranquility",
          content: "Surveyor 5's landing site in Mare Tranquillitatis was so ideal that NASA selected it as the landing site for Apollo 11 and Neil Armstrong just two years later."
        }
      ]}
      stats={{
        launchDate: "Sept 1967 - Jan 1968",
        landingDate: "1967 - 1968",
        dataSent: "Over 68,000 Total Photos",
        status: "Gone Silent (All Missions Successful)",
        isStillActive: false
      }}
      didYouKnow="Surveyor 6 was the very first spacecraft to lift off from the Moon's surface under rocket power, proving lunar re-launch was feasible!"
      objectives={[
        "Perform in-situ alpha-scattering chemical analysis of lunar rocks.",
        "Test rocket engine reignition and controlled translation hopping on the Moon.",
        "Map highlands near Tycho Crater to expand Apollo site candidates."
      ]}
      quiz={{
        question: "Which Surveyor lander site was chosen for Neil Armstrong and Apollo 11?",
        options: [
          "Surveyor 1 site",
          "Surveyor 3 site",
          "Surveyor 5 site in Sea of Tranquility",
          "Surveyor 7 site in Tycho Crater"
        ],
        correctIndex: 2,
        explanation: "Surveyor 5 surveyed Mare Tranquillitatis, confirming it was flat and safe enough for Neil Armstrong and Buzz Aldrin to land Apollo 11."
      }}
      prevStory={{
        name: "Surveyor 3",
        hash: "#/moon/surveyor3"
      }}
      nextStory={{
        name: "Apollo 15 LRV",
        hash: "#/moon/apollo15lrv"
      }}
    />
  );
};
