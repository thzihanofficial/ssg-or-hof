import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Viking1And2Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Viking 1 & 2"
      dateRange="1975 - 1982"
      location="Chryse Planitia & Utopia Planitia"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtLUbMS9m1y779K-Eq-BvAVb0Je5ojhbQUX3zNM_vlA&s=10"
      imageAlt="Viking Lander"
      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/22g144_netoyee.jpg/250px-22g144_netoyee.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/21i090_21i093_21d224-225-226_LOW_RESOLUTION_COLOR.jpg/250px-21i090_21i093_21d224-225-226_LOW_RESOLUTION_COLOR.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mars_Viking_21i093.png/250px-Mars_Viking_21i093.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Mars_Viking_12a002.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Search for Life",
          content: "We tested the soil of Mars to answer one question — is there life there? The answer still remains a subject of debate among scientists today."
        },
        {
          title: "Chapter 2: The First Color Photos from Mars",
          content: "Viking 1 touched down on Chryse Planitia on July 20, 1976. Within minutes, its camera swept across the ground, sending back the first color panoramas of a red, rocky Martian desert under a pinkish sky!"
        },
        {
          title: "Chapter 3: Digging for Microbes",
          content: "Using our robotic arms, we scooped soil samples into mini-biological laboratories onboard. One experiment detected gas emissions, while others found no organic molecules, puzzling researchers for decades."
        },
        {
          title: "Chapter 4: Operating for Years",
          content: "Designed for 90 days, Viking 1 operated for over 6 years on the surface, taking thousands of weather readings and photos before an inadvertent command lost contact in 1982."
        }
      ]}
      stats={{
        launchDate: "Aug 20 & Sep 9, 1975",
        landingDate: "July 20 & Sep 3, 1976",
        dataSent: "50,000+ Photos (Orbiters + Landers)",
        status: "Gone Silent (6 Years Active)",
        isStillActive: false
      }}
      didYouKnow="Viking 1 landed on Mars on July 20, 1976 — exactly seven years to the day after Apollo 11 landed on the Moon!"
      objectives={[
        "Achieve the first successful US soft landings on Mars.",
        "Perform direct biological and organic chemistry tests on soil samples.",
        "Monitor daily weather patterns, atmospheric pressure, and surface temperature."
      ]}
      quiz={{
        question: "On what anniversary date did Viking 1 land on Mars in 1976?",
        options: [
          "Jul 4 (US Bicentennial)",
          "July 20 (7th anniversary of Apollo 11)",
          "Dec 25 (Christmas Day)",
          "Jan 1 (New Year)"
        ],
        correctIndex: 1,
        explanation: "Viking 1 landed on July 20, 1976, exactly 7 years after Neil Armstrong's Moonwalk."
      }}
      prevStory={{
        name: "Mariner 9",
        hash: "#/mars/mariner9"
      }}
      nextStory={{
        name: "Mars Global Surveyor",
        hash: "#/mars/marsglobalsurveyor"
      }}
    />
  );
};
