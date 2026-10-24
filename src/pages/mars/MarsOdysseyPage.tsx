import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const MarsOdysseyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Still Active"
      isStillActive={true}
      name="2001 Mars Odyssey"
      dateRange="2001 - Present"
      location="Martian Polar Orbit"
      imageSrc="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=600&auto=format&fit=crop"
      imageAlt="2001 Mars Odyssey Orbiter"
      iframeSrc="https://eyes.nasa.gov/apps/solar-system/#/sc_mars_odyssey?featured=false&detailPanel=false&search=false&shareButton=false&menu=false&collapseSettingsOptions=true&surfaceMapTiling=true&hd=true"
      
      capturedImages={[
        "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2017/12/morning-frost-on-mars-pia25233.jpg?w=1080&h=606&fit=crop&crop=faces%2Cfocalpoint",
        "https://media.gettyimages.com/id/1545692/photo/scientists-say-that-a-huge-sea-of-ice-may-lie-under-the-surface-of-mars-may-27-2002-in-the.jpg?s=612x612&w=0&k=20&c=BNCif4fZr5OHfGI1vnRr7Zs-kX69DpmtDSdr2eGs0hg=",
        "https://media.gettyimages.com/id/143068445/photo/global-view-of-mars-global-map-of-mars-in-epithermal-neutrons-created-from-data-collected-by.jpg?s=612x612&w=0&k=20&c=ndaARfsjkgDjple6lSWpGdx2NqLDDPnE5tOkoU9_Sm0=",
        "https://media.gettyimages.com/id/1545691/photo/scientists-say-that-a-huge-sea-of-ice-may-lie-under-the-surface-of-mars-may-27-2002-in-the.jpg?s=612x612&w=0&k=20&c=oUe-5neLCqJ9B3YbgaWkdEnZd6IqtvatyDeQWjH5z5M="
      ]}

      chapters={[
        {
          title: "Chapter 1: The Marathon Orbiter",
          content: "I have been orbiting Mars for more than 20 years — of all the spacecraft at Mars, I have been operating the longest, and I still haven't stopped."
        },
        {
          title: "Chapter 2: Discovering Sub-Surface Ice",
          content: "In 2002, my Gamma Ray Spectrometer detected vast deposits of hydrogen just below the soil surface, mapping vast reservoirs of underground water ice across Mars' polar regions!"
        },
        {
          title: "Chapter 3: The Vital Data Relay",
          content: "Besides mapping minerals, I serve as the main communications relay station for surface rovers including Spirit, Opportunity, Curiosity, and Phoenix, sending their discoveries home."
        },
        {
          title: "Chapter 4: Breaking World Records",
          content: "In December 2010, I broke the record for the longest continually operating spacecraft at Mars, and today in 2026, I am still transmitting telemetry, mapping thermal inertia, and relaying rover science!"
        }
      ]}
      stats={{
        launchDate: "April 7, 2001",
        landingDate: "Orbited Oct 24, 2001",
        dataSent: "Over 1 Million Images Relayed",
        status: "🟢 Still Active (25 Years in Space)",
        isStillActive: true
      }}
      didYouKnow="Mars Odyssey was named in tribute to Arthur C. Clarke's iconic sci-fi masterpiece '2001: A Space Odyssey'!"
      objectives={[
        "Map global hydrogen and water-ice distribution using Gamma Ray Spectrometer.",
        "Provide thermal infrared imaging with THEMIS instrument to map surface rocks.",
        "Serve as high-speed UHF radio relay for surface landers and rovers."
      ]}
      quiz={{
        question: "Which major discovery did 2001 Mars Odyssey make in 2002?",
        options: [
          "Active rivers",
          "Vast sub-surface water ice deposits",
          "Alien artifacts",
          "Volcano eruptions"
        ],
        correctIndex: 1,
        explanation: "Odyssey mapped vast sub-surface hydrogen deposits, confirming massive water-ice ice sheets under the Martian polar regolith."
      }}
      prevStory={{
        name: "Sojourner",
        hash: "#/mars/sojourner"
      }}
      nextStory={{
        name: "Spirit & Opportunity",
        hash: "#/mars/spiritandopportunity"
      }}
    />
  );
};
