import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const KeplerTelescopePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Historical Planet Hunter"
      isStillActive={false}
      name="Kepler Space Telescope"
      dateRange="2009 – 2018"
      location="Earth-Trailing Heliocentric Orbit"
      imageSrc="https://images-assets.nasa.gov/image/PIA18904/PIA18904~large.jpg?w=1920&h=1536&fit=clip&crop=faces%2Cfocalpoint"
      imageAlt="Kepler Space Telescope"
      capturedImages={[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-m0p-sOqKOR-QnztDxn6Ruou_egwtWH1rOyTt7EfKVg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHMQ_hftASBuEMEHWZrqtVSkEx5pI11_rYzFg1Ap2Sg&s=10",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/NGC_6791_cluster.jpg/500px-NGC_6791_cluster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Kepler_First_Light_Detail_TrES-2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Exoplanet Hunter",
          content: "I proved that there are more planets in our galaxy than there are stars — I discovered thousands of alien worlds."
        },
        {
          title: "Chapter 2: Watching 150,000 Stars",
          content: "Launched in 2009, I stared continuously at a single patch of 150,000 stars in Cygnus and Lyra, measuring tiny dips in brightness when planets passed in front of their host stars."
        },
        {
          title: "Chapter 3: Earth Cousins & Multi-Planet Systems",
          content: "I discovered super-Earths, hot Jupiters, and Earth cousins orbiting in the habitable 'Goldilocks' zone where liquid water could exist."
        },
        {
          title: "Chapter 4: 2,600 Worlds Discovered",
          content: "Before my reaction wheels and thruster fuel ran out in 2018, I confirmed 2,662 exoplanets, proving that virtually every star in the Milky Way hosts planets!"
        }
      ]}
      stats={{
        launchDate: "March 7, 2009",
        landingDate: "Heliocentric Orbit",
        dataSent: "2,662 Confirmed Exoplanets",
        status: "Decommissioned in Orbit (2018)",
        isStillActive: false
      }}
      didYouKnow="Kepler proved that statistically, there are more planets than stars in our Milky Way galaxy!"
      objectives={[
        "Determine how common Earth-sized planets in habitable zones are around Sun-like stars.",
        "Detect transit dips in brightness across 150,000 target stars.",
        "Measure orbital periods and radii of thousands of alien exoplanets."
      ]}
      quiz={{
        question: "How many confirmed exoplanets did Kepler discover during its mission?",
        options: [
          "8",
          "150",
          "Over 2,600",
          "1 million"
        ],
        correctIndex: 2,
        explanation: "Kepler confirmed 2,662 exoplanets, discovering over half of all known worlds outside our solar system!"
      }}
      prevStory={{
        name: "New Horizons",
        hash: "#/deep-space/newhorizons"
      }}
      nextStory={{
        name: "Juno",
        hash: "#/deep-space/juno"
      }}
    />
  );
};
