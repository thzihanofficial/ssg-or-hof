import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MarsReconnaissanceOrbiterPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Still Active"
      isStillActive={true}
      name="Mars Reconnaissance Orbiter (MRO)"
      dateRange="2005 - Present"
      location="Martian Orbit (HiRISE Camera)"
      imageSrc="https://science.nasa.gov/wp-content/uploads/2017/12/mars-reconnaissance-orbiter-pia04916.jpg"
      imageAlt="Mars Reconnaissance Orbiter"

      capturedImages={[
        "https://science.nasa.gov/wp-content/uploads/2024/03/pia25707.jpg?resize=1200,750",
        "https://science.nasa.gov/wp-content/uploads/2024/03/mars-underground-fluids.jpg",
        "https://science.nasa.gov/wp-content/uploads/2024/03/mars-cool-as-ice.jpg?resize=768,576",
        "https://science.nasa.gov/wp-content/uploads/2024/03/mars-perseverance-descent.jpg?resize=1536,866"
      ]}
      chapters={[
        {
          title: "Chapter 1: The High-Speed Relay Orbiter",
          content: "I am the messenger for every robot on Mars — I send everything they discover back to Earth. I have been doing this for 20 years."
        },
        {
          title: "Chapter 2: The Eagle Eye HiRISE Camera",
          content: "Carrying a giant 20-inch telescopic camera named HiRISE, I capture photos so detailed you can see individual boulder tracks, dust devils in motion, and rovers driving on the surface!"
        },
        {
          title: "Chapter 3: Spotting Avalanche & Ice Layers",
          content: "I photographed ice avalanches tumbling off polar cliffs in real-time, discovered recurring slope lineae (seasonal dark streaks), and mapped clay minerals left by ancient rivers."
        },
        {
          title: "Chapter 4: The Backbone of Mars Telecom",
          content: "Over my 20 years in orbit, I have relayed over 400 terabits of science data for Curiosity, Perseverance, and InSight back to NASA controllers."
        }
      ]}
      stats={{
        launchDate: "August 12, 2005",
        landingDate: "Orbited March 10, 2006",
        dataSent: "Over 400 Terabits of Data",
        status: "🟢 Still Active (HiRISE Operating)",
        isStillActive: true
      }}
      didYouKnow="MRO's HiRISE camera is so powerful it routinely takes crisp pictures of Perseverance and Curiosity rovers driving on Mars from 180 miles up in space!"
      objectives={[
        "Capture ultra-high resolution surface images with HiRISE telescope.",
        "Detect sub-surface ice sheets using SHARAD ground-penetrating radar.",
        "Provide high-bandwidth X-band data relay for surface rovers."
      ]}
      quiz={{
        question: "What is the name of MRO's famous high-resolution camera that can photograph rovers on Mars?",
        options: [
          "Hubble",
          "HiRISE",
          "NavCam",
          "Mastcam"
        ],
        correctIndex: 1,
        explanation: "HiRISE (High Resolution Imaging Science Experiment) can resolve objects as small as 30 centimeters on the Martian surface!"
      }}
      prevStory={{
        name: "Opportunity / MER-B",
        hash: "#/mars/opportunity"
      }}
      nextStory={{
        name: "Phoenix Mars Lander",
        hash: "#/mars/phoenixmarslander"
      }}
    />
  );
};
