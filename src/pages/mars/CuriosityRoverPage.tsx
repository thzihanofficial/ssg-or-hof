import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const CuriosityRoverPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Still Active"
      isStillActive={true}
      name="Curiosity Rover"
      dateRange="2011 - Present"
      location="Gale Crater & Mount Sharp"
      imageSrc="https://www.nasa.gov/wp-content/uploads/2026/04/25382-pia24173-1600.jpg"
      imageAlt="Curiosity Rover on Mars"
      capturedImages={[
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia26/pia26695/PIA26695-Curiosity_Uses_its_Flashlight_to_View_Nevado_Sajama.jpg?w=900&h=802&fit=crop&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/msl/2024/08/image-release/PIA26403.jpg?w=1200&h=771&fit=crop&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/msl/2026/august-images/PIA26691-Curiosity%20Views%20Gale%20Craters%20Floor%20From%20Valle%20Grande.png?w=29239&h=8175&fit=clip&crop=faces%2Cfocalpoint",
        "https://www.nasa.gov/wp-content/uploads/2026/02/1-pia26693-curiosity-surveys-the-boxwork-region-web.jpg"
      ]}
      chapters={[
        {
          title: "Chapter 1: The One-Ton Nuclear Laboratory",
          content: "I am still exploring Mars, drilling into the floor of an ancient lake — one day, I may find evidence that life really could have existed on Mars."
        },
        {
          title: "Chapter 2: The Sky Crane Descent",
          content: "On August 6, 2012, I completed the terrifying 'Seven Minutes of Terror' when a rocket-powered Sky Crane lowered my 2,000-pound body onto cables inside Gale Crater!"
        },
        {
          title: "Chapter 3: Proving Habitability in Yellowknife Bay",
          content: "Within months, I drilled into mudstone rocks at Yellowknife Bay. My onboard SAM and CheMin labs confirmed ancient fresh water once flowed here for millions of years with carbon, hydrogen, nitrogen, and oxygen!"
        },
        {
          title: "Chapter 4: Climbing Mount Sharp",
          content: "For over 14 years, I have been climbing the 3-mile-high slopes of Mount Sharp, passing through mudstone layers, hematite ridges, and sulfate zones, reading Mars' climate history like pages in a book."
        }
      ]}
      stats={{
        launchDate: "November 26, 2011",
        landingDate: "August 6, 2012",
        dataSent: "Over 1.1 Million Images & Drills",
        status: "🟢 Still Active (Climbing Mount Sharp)",
        isStillActive: true
      }}
      didYouKnow="Curiosity plays 'Happy Birthday' to itself on Mars every year on August 6 by vibrating its SAM instrument sample frequency!"
      objectives={[
        "Determine whether Gale Crater ever offered habitable environmental conditions for microbial life.",
        "Drill rock powder and perform mass spectrometry with onboard SAM laboratory.",
        "Ascend Mount Sharp to document millions of years of changing climate strata."
      ]}
      quiz={{
        question: "How was the one-ton Curiosity rover lowered safely onto the surface of Mars?",
        options: [
          "Airbag bounce",
          "Rocket-powered Sky Crane tether",
          "Giant glider wings",
          "Magnetic brake"
        ],
        correctIndex: 1,
        explanation: "Because Curiosity was too heavy for airbags, NASA engineered a rocket-powered Sky Crane that lowered Curiosity on nylon cables."
      }}
      prevStory={{
        name: "Phoenix Mars Lander",
        hash: "#/mars/phoenixmarslander"
      }}
      nextStory={{
        name: "MAVEN",
        hash: "#/mars/maven"
      }}
    />
  );
};
