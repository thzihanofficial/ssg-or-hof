import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Mars2020Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Achievement"
      isStillActive={false}
      name="Mars 2020 / Perseverance & Ingenuity"
      dateRange="2020 - Present"
      location="Jezero Crater Delta"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_helicopter_on_sol_46.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
      imageAlt="Mars 2020 Perseverance and Ingenuity"
      capturedImages={[
        "https://assets.science.nasa.gov/content/dam/science/psd/mars/resources/detail_files/2/5/25796_heli-movement-far.gif?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/content/dam/science/psd/mars/resources/detail_files/2/5/25792_PIA24548-1200.gif?w=1200&h=861&fit=clip&crop=faces%2Cfocalpoint",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/4/5/45954_PIA24581.jpg?w=1578&h=1176&fit=clip&crop=faces%2Cfocalpoint",
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Combination_of_two_images%2C_one_each_from_Ingenuity%27s_Navigation_Camera_and_colour_camera_%28RTE%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Tiny Helicopter That Flew",
          content: "I am a tiny helicopter weighing just 1.8 kilograms. But I was the first aircraft to fly on another planet — in Mars's thin atmosphere, where flying was almost impossible."
        },
        {
          title: "Chapter 2: The Wright Brothers Moment on Mars",
          content: "On April 19, 2021, my dual counter-rotating carbon fiber blades spun at 2,400 RPM. I lifted off the ground, hovered 10 feet up, and landed safely at Wright Brothers Field on Mars!"
        },
        {
          title: "Chapter 3: From 5 Flights to 72 Flights",
          content: "Originally built as a simple 30-day technology demonstration for 5 flights, I became Perseverance's aerial scout, flying ahead over sand dunes, scouting river deltas, and logging 72 total flights!"
        },
        {
          title: "Chapter 4: An Immortal Aviation Legacy",
          content: "A small piece of fabric from the Wright Brothers' 1903 Flyer was tucked under my solar panel. I proved that powered, controlled flight is possible anywhere in the solar system."
        }
      ]}
      stats={{
        launchDate: "July 30, 2020",
        landingDate: "February 18, 2021",
        dataSent: "72 Flights (17.0 km Traveled)",
        status: "Retired after 72 Historic Flights",
        isStillActive: false
      }}
      didYouKnow="Ingenuity carried a tiny piece of wing fabric from the Wright Brothers' original 1903 Kitty Hawk Flyer taped underneath its solar panel!"
      objectives={[
        "Achieve the first powered, controlled flight of an aircraft on another planet.",
        "Scout hazardous terrain and driving routes for the Perseverance rover.",
        "Demonstrate high-speed blade aerodynamics in 1% surface atmospheric density."
      ]}
      quiz={{
        question: "How many total flights did the Ingenuity helicopter complete on Mars before retirement?",
        options: [
          "1 flight",
          "5 flights",
          "72 flights",
          "500 flights"
        ],
        correctIndex: 2,
        explanation: "Ingenuity completed 72 historic flights, far exceeding its original 5-flight demonstration goal!"
      }}
      prevStory={{
        name: "InSight Landers",
        hash: "#/mars/insightlanders"
      }}
      nextStory={{
        name: "Perseverance",
        hash: "#/mars/perseverance"
      }}
    />
  );
};
