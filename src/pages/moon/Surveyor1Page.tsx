import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Surveyor1Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Moon Exploration"
      categoryHash="#/moon"
      statusBadge="Historical Landmark"
      isStillActive={false}
      name="Surveyor 1"
      dateRange="June 1966 - July 1966"
      location="Oceanus Procellarum (Ocean of Storms)"
      imageSrc="https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_2_model.jpg"
      imageAlt="Surveyor 1 Lunar Soft Lander"
      capturedImages={[
        "https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_2_model.jpg",
        "https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_6_shadow_lunarsurface.jpg",
        "https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_4_foot_pad.jpg",
        "https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_7_mosaic_image.jpg"
      ]}
      chapters={[
        {
          title: "Chapter 1: Born for a Critical Goal",
          content: "I was built with one urgent purpose in mind — to answer a terrifying question before any astronaut ever stepped onto the Moon: 'Will a spacecraft sink like a stone into deep, soft dust or land safely on solid ground?'"
        },
        {
          title: "Chapter 2: The Terrifying Descent",
          content: "On June 2, 1966, after traveling 240,000 miles through space, my main retrorocket fired to slow me down from 6,000 mph. Three small vernier engines fired silently as I neared the surface in the Ocean of Storms. The world held its breath as my three landing pads touched down at 10 feet per second — and held!"
        },
        {
          title: "Chapter 3: What I Discovered",
          content: "The moment my feet touched the lunar dust, my strain gauges confirmed the soil was firm enough to support an Apollo lander. I immediately deployed my television camera and transmitted over 11,200 crisp images showing cratered horizons, fine dust grains, and pristine rocks."
        },
        {
          title: "Chapter 4: My Lasting Legacy",
          content: "I survived the harsh, freezing 14-day lunar night and continued sending signal telemetry until January 1967. My successful soft landing proved to NASA that humans could safely walk on the Moon."
        }
      ]}
      stats={{
        launchDate: "May 30, 1966",
        landingDate: "June 2, 1966",
        dataSent: "11,237 Photos",
        status: "Gone Silent (Mission Accomplished)",
        isStillActive: false
      }}
      didYouKnow="Before Surveyor 1 landed, some prominent scientists feared the Moon's surface was covered in miles of quicksand-like dust that would swallow any spacecraft whole!"
      objectives={[
        "Accomplish a precision soft landing on the lunar surface.",
        "Obtain high-resolution television imagery of the surrounding lunar terrain.",
        "Secure vital engineering telemetry on radar reflectivity and soil bearing strength."
      ]}
      quiz={{
        question: "What major question did Surveyor 1 answer before Apollo 11 landed?",
        options: [
          "Whether the Moon had liquid water oceans",
          "Whether lunar soil was firm enough to support a lander",
          "Whether alien life existed under the surface",
          "Whether the Moon possessed a magnetic field"
        ],
        correctIndex: 1,
        explanation: "Surveyor 1 proved that the lunar soil was firm and could easily support the weight of heavy Apollo spacecraft without sinking into dust."
      }}
      prevStory={undefined}
      nextStory={{
        name: "Surveyor 3",
        hash: "#/moon/surveyor3"
      }}
    />
  );
};
