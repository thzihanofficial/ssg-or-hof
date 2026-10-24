import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MarsGlobalSurveyorPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Orbiter"
      isStillActive={false}
      name="Mars Global Surveyor"
      dateRange="1996 - 2006"
      location="Polar Orbit (Full Topographic Survey)"
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/mgs_768.jpg?w=768&h=650&fit=crop&crop=faces%2Cfocalpoint"
      imageAlt="Mars Global Surveyor"

      capturedImages={[
        "https://science.nasa.gov/wp-content/uploads/2024/03/mars-dust-storms-global-pia03170.jpg?resize=768,409",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCQYEXTIrEL7OOXXHdaAycfAPn6ZtfEXrt3bQCU0NVg&s=10",
        "https://science.nasa.gov/wp-content/uploads/2024/03/mars-global-surveyor-hellas-mola-.jpg?resize=768,707",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXxrGZsbx80-z7fFiriMD2GzE64f85ylsng53LdUqHw&s=10"
      ]}

      chapters={[
        {
          title: "Chapter 1: The Ten-Year Mapping Odyssey",
          content: "I spent 10 years orbiting Mars, studying every mountain and every dust storm in detail — I mapped an entire planet all by myself."
        },
        {
          title: "Chapter 2: Aerobraking Through Mars Air",
          content: "To save fuel, I skimmed through the upper atmosphere of Mars for months, using friction to shape my orbit into a circular polar path."
        },
        {
          title: "Chapter 3: Discovering Recent Gullies",
          content: "My high-resolution Mars Orbiter Camera spotted young gullies on crater walls that showed signs of liquid water flows within the last decade!"
        },
        {
          title: "Chapter 4: Finding Landing Sites",
          content: "I mapped hematite mineral deposits that led scientists directly to Spirit, Opportunity, and Curiosity landing sites before my battery failed in 2006."
        }
      ]}
      stats={{
        launchDate: "November 7, 1996",
        landingDate: "Orbited Sept 12, 1997",
        dataSent: "240,000 High-Res Photos",
        status: "Decommissioned in Orbit",
        isStillActive: false
      }}
      didYouKnow="Mars Global Surveyor discovered magnetic 'stripes' on Mars' crust, showing Mars once had a protective magnetic field similar to Earth!"
      objectives={[
        "Map global laser altimetry topography with MOLA laser instrument.",
        "Detect mineral signatures indicating past liquid water using thermal emissions.",
        "Identify safe landing sites for future rovers like Spirit and Opportunity."
      ]}
      quiz={{
        question: "What evidence of recent liquid water did Mars Global Surveyor discover on crater walls?",
        options: [
          "Massive liquid lakes",
          "Freshly carved gullies",
          "Geysers shooting steam",
          "Rain clouds"
        ],
        correctIndex: 1,
        explanation: "MGS spotted fresh, young gullies where liquid water or brines appeared to have flowed down crater walls in recent years."
      }}
      prevStory={{
        name: "Viking 1 & 2",
        hash: "#/mars/viking1and2"
      }}
      nextStory={{
        name: "Mars Pathfinder",
        hash: "#/mars/marspathfinder"
      }}
    />
  );
};
