import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MavenPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Gone Silent"
      isStillActive={false}
      name="MAVEN"
      dateRange="2013 - 2026"
      location="Upper Atmosphere Orbit"
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia18/pia18811/PIA18811.tif?w=2048"
      imageAlt="MAVEN Spacecraft"
      
      capturedImages={[
        "https://science.nasa.gov/wp-content/uploads/2024/04/mars-perseverance-zl0-0204-0685052630-206ecm-n0071716zcam08228-110085j.jpg?resize=600,454",
        "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/05020/opgs/edr/fcam/FLB_843158430EDR_F1250534FHAZ00200M_.JPG",
        "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/05020/opgs/edr/ccam/CR0_843137866EDR_F1250534CCAM02020M_-br.jpg",
        "https://mars.nasa.gov/msl-raw-images/msss/05020/mhli/5020MH0003360001804263C00_DXXX-br.jpg"
      ]}
      chapters={[
        {
          title: "Chapter 1: Unraveling the Atmospheric Mystery",
          content: "Mars once had a thick atmosphere, rivers, and lakes — so where did it all go? I am searching for the answer to the mystery of how the solar wind gradually stripped away Mars's atmosphere."
        },
        {
          title: "Chapter 2: Dipping into the Thermosphere",
          content: "In September 2014, I entered orbit around Mars. I perform 'deep dips', swooping down to 78 miles above the surface to sample atmospheric gases directly."
        },
        {
          title: "Chapter 3: Solar Wind Stripping",
          content: "My neutral gas and ion instruments measured solar storms in real-time, showing that intense solar wind strips away 100 grams of gas per second from Mars' unprotected atmosphere!"
        },
        {
          title: "Chapter 4: The Key to Mars' Past",
          content: "By studying atmospheric escape and Mars' interaction with the solar wind, I helped scientists understand how Mars lost much of its ancient atmosphere. Mars' global magnetic field had largely disappeared billions of years ago, leaving the atmosphere more vulnerable to solar-wind-driven loss. This atmospheric loss contributed to Mars becoming the cold, dry world we see today."
        }
      ]}
      stats={{
        launchDate: "November 18, 2013",
        landingDate: "Orbited Sept 21, 2014",
        dataSent: "More than 11 years in Mars orbit",
        status: "🔴 Mission Ended — June 3, 2026",
        isStillActive: false
      }}
      didYouKnow="MAVEN measured solar storms stripping away 100 grams of gas every single second from Mars' upper atmosphere!"
      objectives={[
        "Determine the history and rate of atmospheric gas loss to space over time.",
        "Understand the role of solar wind and magnetic field loss in Martian climate change.",
        "Serve as high-altitude data relay for surface rovers like Perseverance."
      ]}
      quiz={{
        question: "What primary force caused Mars to lose most of its ancient thick atmosphere?",
        options: [
          "Asteroid impacts blowing gas away",
          "Solar wind erosion after losing its magnetic field",
          "Gases freezing into the core",
          "Gravitational pull of Jupiter"
        ],
        correctIndex: 1,
        explanation: "MAVEN proved that intense solar wind stripped away Mars' atmosphere after its core cooled and magnetic shield died."
      }}
      prevStory={{
        name: "Curiosity Rover",
        hash: "#/mars/curiosityrover"
      }}
      nextStory={{
        name: "InSight Landers",
        hash: "#/mars/insightlanders"
      }}
    />
  );
};
