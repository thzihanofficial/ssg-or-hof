import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const PerseverancePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Still Active"
      isStillActive={true}
      name="Perseverance Rover"
      dateRange="2021 - Present"
      location="Jezero Crater River Delta"
      imageSrc="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Perseverance-Selfie-at-Rochette-Horizontal-V2.gif/960px-Perseverance-Selfie-at-Rochette-Horizontal-V2.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      imageAlt="Perseverance Rover on Mars"

      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Jezero_sol_0089_Mastcam-Z_229%C2%B0-231%C2%B0_16-13_LMST.gif/960px-Jezero_sol_0089_Mastcam-Z_229%C2%B0-231%C2%B0_16-13_LMST.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Jezero_sol_0092_SuperCam_232%C2%B0_11-09_LMST.png/500px-Jezero_sol_0092_SuperCam_232%C2%B0_11-09_LMST.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Map_of_Perseverance%27s_Delta_Top_Campaign.jpg/330px-Map_of_Perseverance%27s_Delta_Top_Campaign.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/MarsPerseveranceRover-EDL-Overview-20210218.jpg/500px-MarsPerseveranceRover-EDL-Overview-20210218.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}

      chapters={[
        {
          title: "Chapter 1: The Sample Catcher",
          content: "I am drilling into rocks, collecting samples, and leaving them on the Martian surface — one day, another spacecraft may come and bring them back to Earth."
        },
        {
          title: "Chapter 2: Landing in Jezero Crater",
          content: "On February 18, 2021, my Terrain-Relative Navigation system guided my Sky Crane into Jezero Crater — an ancient lakebed fed by a 3.5-billion-year-old river delta."
        },
        {
          title: "Chapter 3: Drilling & Oxygen Generation",
          content: "Using my coring drill on my 7-foot robotic arm, I seal rock cores into airtight titanium tubes. My MOXIE instrument even made breathable oxygen out of Mars' carbon dioxide air!"
        },
        {
          title: "Chapter 4: Preparing for Mars Sample Return",
          content: "I deposited a backup sample cache on the dirt at Three Forks. I am searching for ancient biosignatures while waiting for NASA and ESA's future Sample Return mission to pick them up!"
        }
      ]}
      stats={{
        launchDate: "July 30, 2020",
        landingDate: "February 18, 2021",
        dataSent: "30+ Sealed Titanium Sample Tubes",
        status: "🟢 Still Active (Exploring Ancient Rocks West of Jezero Crater)",
        isStillActive: true
      }}
      didYouKnow="Perseverance's MOXIE experiment successfully extracted pure breathable oxygen from the carbon dioxide in Mars' atmosphere — enough to keep a small dog alive for hours!"
      objectives={[
        "Search for signs of ancient microbial life in Jezero river delta sediments.",
        "Collect and seal rock/regolith samples in titanium tubes for future return to Earth.",
        "Demonstrate oxygen production from CO2 air using MOXIE technology."
      ]}
      quiz={{
        question: "What onboard instrument on Perseverance successfully created breathable oxygen out of Mars' air?",
        options: [
          "MOXIE",
          "PIXL",
          "SHERLOC",
          "SuperCam"
        ],
        correctIndex: 0,
        explanation: "MOXIE (Mars Oxygen ISRU Experiment) extracted pure oxygen from Mars' carbon dioxide atmosphere!"
      }}
      prevStory={{
        name: "Mars 2020 / Ingenuity",
        hash: "#/mars/mars2020"
      }}
      nextStory={undefined}
    />
  );
};
