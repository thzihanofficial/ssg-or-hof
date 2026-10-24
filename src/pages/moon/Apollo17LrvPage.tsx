import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Apollo17LrvPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Apollo 17 LRV"
      dateRange="December 1972"
      location="Taurus-Littrow Valley"
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/eugene_cernan-full-a.jpg?w=3295&h=1764&fit=clip&crop=faces%2Cfocalpoint"
      imageAlt="Apollo 17 Lunar Rover"
      hideCapturedImagesButton={true}
      chapters={[
        {
          title: "Chapter 1: The Final Voyage",
          content: "I was the final dune buggy of the Apollo era, assigned to carry Commander Gene Cernan and geologist Harrison Schmitt through the dramatic Taurus-Littrow mountain valley."
        },
        {
          title: "Chapter 2: The Duct Tape Fender Fix",
          content: "During EVA 1, Gene accidentally bumped my rear fender off with a hammer handle! To prevent blinding rooster-tails of dust from covering our control panel, the astronauts taped lunar maps together with duct tape and clamped them on!"
        },
        {
          title: "Chapter 3: Finding Orange Soil",
          content: "I logged 22.3 miles — the longest distance driven on the Moon. During our trek near Shorty Crater, geologist Harrison Schmitt shouted with joy when we discovered bright orange volcanic glass soil!"
        },
        {
          title: "Chapter 4: The Last Tracks",
          content: "Gene Cernan parked me 460 feet away from the lander so my remote TV camera could capture the ascent stage ignition. As Gene stepped off, he said 'We leave as we came, with peace and hope for all mankind.' I still guard the valley today."
        }
      ]}
      stats={{
        launchDate: "December 7, 1972",
        landingDate: "December 11, 1972",
        dataSent: "22.3 Miles (110 kg Samples)",
        status: "Parked on the Moon",
        isStillActive: false
      }}
      didYouKnow="When Apollo 17's fender broke, astronauts repaired it using lunar plastic maps and duct tape — proving duct tape works even on the Moon!"
      objectives={[
        "Traverse Taurus-Littrow valley to collect pyroclastic orange glass and impact rocks.",
        "Demonstrate long-range lunar rover endurance (over 22 miles total).",
        "Broadcast live TV of Apollo 17 Challenger lunar module liftoff."
      ]}
      quiz={{
        question: "How did Apollo 17 astronauts fix the broken fender on their Lunar Rover?",
        options: [
          "They welded it with a space torch",
          "They taped lunar plastic maps with duct tape and clamps",
          "They drove without wheels",
          "They used spare aluminum plates from the lander"
        ],
        correctIndex: 1,
        explanation: "Gene Cernan and Harrison Schmitt fashioned a improvised fender out of plastic-laminated maps, duct tape, and spring clamps!"
      }}
      prevStory={{
        name: "Apollo 16 LRV",
        hash: "#/moon/apollo16lrv"
      }}
      nextStory={{
        name: "Clementine",
        hash: "#/moon/clementine"
      }}
    />
  );
};
