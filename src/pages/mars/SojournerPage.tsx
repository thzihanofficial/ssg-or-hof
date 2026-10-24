import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const SojournerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Rover"
      isStillActive={false}
      name="Sojourner"
      dateRange="July 1997 - Sept 1997"
      location="Ares Vallis"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      imageAlt="Sojourner Rover"
      capturedImages={[
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Rover_movie_sol21_S0050N.gif?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/PIA04316.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS___4w8rJMNzUN80h25LSilZv35q5evHZCRPwia8msnA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4by3Y6ZAIXb4-B2QJKUPbNkQRIqv275HxEpv0_FF5w&s=10"
      ]}

      chapters={[
        {
          title: "Chapter 1: The Pioneer Micro-Rover",
          content: "I had to be driven from Earth, but every command took about 11 minutes to reach me — imagine if the steering wheel responded 11 minutes after you turned it!"
        },
        {
          title: "Chapter 2: Rolling Down the Ramp",
          content: "Weighing just 23 pounds and about the size of a microwave oven, I rolled off Pathfinder's ramp on July 5, 1997. I became the very first wheeled vehicle to drive on another planet."
        },
        {
          title: "Chapter 3: Naming the Rocks",
          content: "Scientists named the rocks around me after cartoon characters! I drove up to 'Barnacle Bill' and 'Yogi', pressing my Alpha Proton X-Ray Spectrometer against them to read their composition."
        },
        {
          title: "Chapter 4: The Legacy of Wheeled Exploration",
          content: "I traveled 330 feet over 83 days, proving that rovers were practical. Spirit, Opportunity, Curiosity, and Perseverance all followed in my small wheel tracks!"
        }
      ]}
      stats={{
        launchDate: "Dec 4, 1996 (with Pathfinder)",
        landingDate: "July 4, 1997",
        dataSent: "550 Photos + 16 Chemical Analyses",
        status: "Gone Silent on Mars",
        isStillActive: false
      }}
      didYouKnow="Sojourner was named after Sojourner Truth, the famous 19th-century abolitionist and women's rights activist!"
      objectives={[
        "Demonstrate remote autonomous driving and hazard avoidance on Mars.",
        "Perform chemical analysis of Martian rocks using APXS spectrometer.",
        "Test solar panel dust accumulation and wheel traction in fine soil."
      ]}
      quiz={{
        question: "How long did it take radio signals to travel between Earth and Sojourner on Mars?",
        options: [
          "1 second",
          "About 11 minutes",
          "2 hours",
          "1 day"
        ],
        correctIndex: 1,
        explanation: "Due to the speed of light across space, driving commands took about 11 minutes to reach Sojourner."
      }}
      prevStory={{
        name: "Mars Pathfinder",
        hash: "#/mars/marspathfinder"
      }}
      nextStory={{
        name: "2001 Mars Odyssey",
        hash: "#/mars/marsodyssey"
      }}
    />
  );
};
