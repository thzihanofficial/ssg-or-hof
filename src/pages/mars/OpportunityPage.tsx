import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const OpportunityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Rover Record"
      isStillActive={false}
      name="Opportunity / MER-B"
      dateRange="2004 - 2018"
      location="Meridiani Planum to Endeavour Crater"
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/1057_rover2_768.jpg?w=768&h=576&fit=clip&crop=faces%2Cfocalpoint"
      imageAlt="Opportunity Rover"
      capturedImages={[
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3449/cliff_at_crater_rim_in_red-colored_desert.jpeg?w=1373&h=914&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3450/vast_plain_of_dunes_with_rover_tracks_leading_to_horizon.jpeg?w=1180&h=738&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3452/rover_casting_a_shadow.jpeg?w=1024&h=1024&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3451/rover_tracks_on_a_hillside_with_a_dust_devil_seen_in_the_distance.jpeg?w=1020&h=1024&fit=clip&crop=faces%2Cfocalpoint"
      ]}
      
      chapters={[
        {
          title: "Chapter 1: The 15-Year Marathon",
          content: "I was sent to work for just 90 days. I survived for 15 years and traveled farther across Mars than any human could have."
        },
        {
          title: "Chapter 2: The Hole-in-One Landing",
          content: "On January 25, 2004, my airbag cocoon bounced right into Eagle Crater — a literal 'hole-in-one'. Out my cameras, I saw pristine bedrock layered with hematite 'blueberries' formed in water!"
        },
        {
          title: "Chapter 3: Crossing the Martian Desert",
          content: "I drove 28.06 miles (45.16 km) across Mars — completing a full marathon on another world! I survived getting stuck in Purgatory Dune and navigated Victoria Crater's steep cliffs."
        },
        {
          title: "Chapter 4: My Final Transmission",
          content: "In June 2018, a giant global dust storm blocked out the Sun over Endeavour Crater. As my solar batteries drained, my last transmitted log translated to: 'My battery is low and it's getting dark.' Rest well, Oppy."
        }
      ]}
      stats={{
        launchDate: "July 7, 2003",
        landingDate: "January 25, 2004",
        dataSent: "28.06 Miles Driven (217,594 Photos)",
        status: "Gone Silent (Off-World Driving Record)",
        isStillActive: false
      }}
      didYouKnow="Opportunity holds the official world record for the longest distance driven by any vehicle on another celestial body — 28.06 miles (45.16 km)!"
      objectives={[
        "Search for hematite and sulfate minerals indicating past liquid water.",
        "Set off-world driving distance record traversing Martian crater rims.",
        "Survive 60 times longer than original 90-day design lifetime."
      ]}
      quiz={{
        question: "How many miles did Opportunity drive across the surface of Mars during its 15-year lifetime?",
        options: [
          "5 miles",
          "12.4 miles",
          "28.06 miles (Marathon distance)",
          "100 miles"
        ],
        correctIndex: 2,
        explanation: "Opportunity logged 28.06 miles (45.16 km), completing more than a full marathon on Mars!"
      }}
      prevStory={{
        name: "Spirit & Opportunity",
        hash: "#/mars/spiritandopportunity"
      }}
      nextStory={{
        name: "Mars Reconnaissance Orbiter",
        hash: "#/mars/marsreconnaissanceorbiter"
      }}
    />
  );
};
