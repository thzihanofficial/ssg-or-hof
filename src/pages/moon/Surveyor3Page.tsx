import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Surveyor3Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Surveyor 3"
      dateRange="April 1967 - May 1967"
      location="Oceanus Procellarum (Surveyor Crater)"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/7/77/Surveyor_3_on_Moon.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      imageAlt="Surveyor 3 Probe on the Moon"
      capturedImages={[
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Surveyor_3_on_Moon.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Surveyor_3_Fig_3-44.jpg/960px-Surveyor_3_Fig_3-44.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Surveyor_3_Fig_3-53.jpg/960px-Surveyor_3_Fig_3-53.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Surveyor_3_Fig_7-41b2.jpg/1280px-Surveyor_3_Fig_7-41b2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Digging Mission",
          content: "I landed inside a smooth crater in April 1967. Unlike my predecessors, I was equipped with a robotic claw and scoop so I could dig directly into the lunar soil to see what lay beneath."
        },
        {
          title: "Chapter 2: Digging the First Trenches",
          content: "I dug four trenches up to 7 inches deep and sent over 6,300 television pictures back to Earth. I proved that lunar soil behaves much like wet sand when compacted, reassuring engineers for human footsteps."
        },
        {
          title: "Chapter 3: The Surprise Visitors",
          content: "I sat alone in the quiet lunar silence for two and a half years. Then, in November 1969, I heard footsteps! Apollo 12 astronauts Pete Conrad and Alan Bean walked right up to me — I was no longer alone."
        },
        {
          title: "Chapter 4: A Return Ticket to Earth",
          content: "The astronauts carefully unbolted my television camera and mechanical arm, carrying them back to Earth. I became the only spacecraft in human history to have parts inspected after years on another world."
        }
      ]}
      stats={{
        launchDate: "April 17, 1967",
        landingDate: "April 20, 1967",
        dataSent: "6,315 Photos + Returned Camera",
        status: "Analyzed by Apollo 12",
        isStillActive: false
      }}
      didYouKnow="When scientists analyzed Surveyor 3's returned camera on Earth, they discovered living Streptococcus bacteria inside — raising debates on whether microbes survived in lunar vacuum!"
      objectives={[
        "Perform soil trenching and mechanical property testing with a motorized scoop.",
        "Transmit high-resolution television imagery of crater terrain.",
        "Serve as a target for precision lunar landing demonstration by Apollo 12."
      ]}
      quiz={{
        question: "Which Apollo mission landed next to Surveyor 3 and brought its camera back to Earth?",
        options: [
          "Apollo 11",
          "Apollo 12",
          "Apollo 14",
          "Apollo 17"
        ],
        correctIndex: 1,
        explanation: "Apollo 12 astronauts Conrad and Bean landed within walking distance of Surveyor 3 in 1969 and retrieved its camera."
      }}
      prevStory={{
        name: "Surveyor 1",
        hash: "#/moon/surveyor1"
      }}
      nextStory={{
        name: "Surveyor 5, 6 & 7",
        hash: "#/moon/surveyor567"
      }}
    />
  );
};
