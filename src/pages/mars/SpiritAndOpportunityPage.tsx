import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const SpiritAndOpportunityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Twin Rovers"
      isStillActive={false}
      name="Spirit & Opportunity"
      dateRange="2003 - 2018"
      location="Gusev Crater & Meridiani Planum"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      imageAlt="Mars Exploration Rovers Spirit and Opportunity"
      capturedImages={[
        "https://media.gettyimages.com/id/84519086/photo/spirit-mars-exploration-rover-on-the-flank-of-husband-hill.jpg?s=612x612&w=0&k=20&c=oDoIKo2K3-VQpdZoBFPMMNNUv6JMFBXpLU-s2xmL2Uc=",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/PIA21497capetrib.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/8/89/PIA17759-MarsOpportunityRover-SelfPortrait-20140106.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://media.gettyimages.com/id/2852928/photo/mars-in-this-handout-released-by-nasa-a-mars-landscape-is-seen-in-a-picture-taken-by-the.jpg?s=612x612&w=0&k=20&c=Wg-nHDk7wz8Fhek25NgTSa6wsAMK8FR1Hk4v93DpvAc="
      ]}

      chapters={[
        {
          title: "Chapter 1: The Twin Geologists",
          content: "We landed in two different places on Mars, but together we proved that this Red Planet once had liquid water."
        },
        {
          title: "Chapter 2: Landing in Airbags",
          content: "In January 2004, Spirit touched down inside Gusev Crater, while Opportunity landed on the flat plains of Meridiani Planum, rolling directly into a small crater filled with hematite 'blueberries'!"
        },
        {
          title: "Chapter 3: Proof of Ancient Water",
          content: "Opportunity discovered sulfate minerals and hematite spherules formed in ancient acidic groundwater, while Spirit climbed the Columbia Hills and uncovered silica deposits from ancient hot springs."
        },
        {
          title: "Chapter 4: The Dust Devil Cleanings",
          content: "Designed for a 90-day sprint, wind gusts and dust devils repeatedly swept our solar panels clean, extending our mission for years of heroic exploration!"
        }
      ]}
      stats={{
        launchDate: "June 10 & July 7, 2003",
        landingDate: "January 4 & 25, 2004",
        dataSent: "Over 340,000 Total Images",
        status: "Missions Completed (Spirit 2010, Oppy 2018)",
        isStillActive: false
      }}
      didYouKnow="Martian dust devils actually saved Spirit and Opportunity multiple times by blowing heavy dust layers off their solar panels!"
      objectives={[
        "Search for rock and soil clues of past liquid water environments.",
        "Traverse multiple kilometers using autonomous hazard avoidance wheel drive.",
        "Perform micro-imaging and abrasion drilling on Martian rocks."
      ]}
      quiz={{
        question: "What natural Martian weather phenomenon repeatedly cleaned Spirit and Opportunity's solar panels?",
        options: [
          "Heavy rain showers",
          "Dust devils (whirlwinds)",
          "CO2 snowfall",
          "Methane bursts"
        ],
        correctIndex: 1,
        explanation: "Martian dust devils frequently blew across the rovers, unexpectedly clearing away thick dust from solar panels."
      }}
      prevStory={{
        name: "2001 Mars Odyssey",
        hash: "#/mars/marsodyssey"
      }}
      nextStory={{
        name: "Opportunity (MER-B)",
        hash: "#/mars/opportunity"
      }}
    />
  );
};
