import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MarsPathfinderPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Lander"
      isStillActive={false}
      name="Mars Pathfinder"
      dateRange="1996 - 1997"
      location="Ares Vallis Floodplain"
      imageSrc="https://assets.thehansindia.com/h-upload/2023/07/03/1362499-nasa.webp"
      imageAlt="Mars Pathfinder Lander"
      capturedImages={[
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Pathfinder01.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Mars_sunset_PIA00920.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://science.nasa.gov/wp-content/uploads/2017/12/pia00621-pathfinder-and-sojourner-with-airbags-deflated.jpg",
        "https://science.nasa.gov/wp-content/uploads/2024/03/pia00609-1e7c7c.jpg"
      ]}
      chapters={[
        {
          title: "Chapter 1: Bouncing onto Mars",
          content: "I landed on Mars wrapped in airbags — bouncing all the way! And with me was a little friend, Sojourner, the first rover to drive across the Martian surface."
        },
        {
          title: "Chapter 2: The Ares Vallis Floodplain",
          content: "I touched down in Ares Vallis, an ancient catastrophic flood channel, on July 4, 1997. My airbags deflated, petals unfolded, and I revealed a landscape strewn with rounded flood rocks."
        },
        {
          title: "Chapter 3: Deploying Sojourner",
          content: "I lowered ramps and deployed Sojourner, a 23-pound micro-rover, serving as its communication relay tower as it rolled out to zap rocks with its X-ray spectrometer."
        },
        {
          title: "Chapter 4: A Revolution in Space Exploration",
          content: "I transmitted 16,500 images and 2.3 billion bits of data, proving that low-cost planetary missions with rovers were the future of Mars exploration."
        }
      ]}
      stats={{
        launchDate: "December 4, 1996",
        landingDate: "July 4, 1997",
        dataSent: "16,500 Images",
        status: "Gone Silent (Sojourner Relay Completed)",
        isStillActive: false
      }}
      didYouKnow="Pathfinder landed on Mars on July 4, 1997 — America's Independence Day — and attracted millions of web hits, crashing early NASA internet servers!"
      objectives={[
        "Demonstrate low-cost entry, descent, and landing using giant airbag cushions.",
        "Deploy Sojourner, humanity's first wheeled rover on another planet.",
        "Analyze rocks washed down by catastrophic ancient floods in Ares Vallis."
      ]}
      quiz={{
        question: "How did Mars Pathfinder cushion its landing impact on the Martian surface?",
        options: [
          "Nuclear thrusters",
          "Giant inflatable airbags",
          "Giant parachutes only",
          "Magnetic repulsors"
        ],
        correctIndex: 1,
        explanation: "Pathfinder bounced dozens of times across Mars encased in a cocoon of giant woven Kevlar airbags!"
      }}
      prevStory={{
        name: "Mars Global Surveyor",
        hash: "#/mars/marsglobalsurveyor"
      }}
      nextStory={{
        name: "Sojourner",
        hash: "#/mars/sojourner"
      }}
    />
  );
};
