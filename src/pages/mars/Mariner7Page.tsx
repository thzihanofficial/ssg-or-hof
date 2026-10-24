import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const Mariner7Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Mars Exploration"
      categoryHash="#/mars"
      statusBadge="Historical Flyby"
      isStillActive={false}
      name="Mariner 7"
      dateRange="March 1969 - August 1969"
      location="South Polar Cap of Mars"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYMmzNwMfGaqPfWivlo6xtXppTrJZ8mgNsILg4Qk08A&s=10"
      imageAlt="Mariner 7 Probe"

      capturedImages={[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSzvMGAh5cbz4Cpje8owTVyT42ZytExK6_RigCjCEng&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BbQVlUwqqQHqZR5Vli4DZjgI-my5qbAvwuf4T6wdZQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJj5TXLyYd5Dt9fryR6bTjW7caYuRIsJpO2ucXFl2v9w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEHM4YKuzrPDrkAhuCWAl6eQgF6vHrdaZuysKs_cYWw&s=10"
      ]}
      chapters={[
        {
          title: "Chapter 1: Following My Twin",
          content: "Just one month after my twin, Mariner 6, I also flew past Mars — and I discovered the ice caps at Mars poles!"
        },
        {
          title: "Chapter 2: The Polar Flyby",
          content: "On August 5, 1969, I flew within 2,130 miles of Mars, focusing my telephoto camera on the mysterious south polar cap."
        },
        {
          title: "Chapter 3: Ice Made of Carbon Dioxide",
          content: "My instruments revealed that the bright white ice cap was not frozen water, but dry ice — frozen carbon dioxide at freezing temperatures of -190°F!"
        },
        {
          title: "Chapter 4: A Triumphant Duo",
          content: "Together with Mariner 6, we returned 201 pictures that transformed human understanding of Mars from science fiction myths to real planetary science."
        }
      ]}
      stats={{
        launchDate: "March 27, 1969",
        landingDate: "Flyby (August 5, 1969)",
        dataSent: "126 High-Resolution Photos",
        status: "Heliocentric Orbit",
        isStillActive: false
      }}
      didYouKnow="Just days before reaching Mars, Mariner 7 lost radio contact when its battery exploded, but controllers heroically recovered control in time for the flyby!"
      objectives={[
        "Execute close flyby over the South Pole of Mars.",
        "Photograph polar ice cap features and ridges.",
        "Measure surface temperature and atmospheric pressure at polar latitudes."
      ]}
      quiz={{
        question: "What did Mariner 7 discover the Martian polar ice cap was primarily made of?",
        options: [
          "Frozen nitrogen",
          "Dry ice (frozen carbon dioxide)",
          "Liquid methane",
          "Pure liquid water"
        ],
        correctIndex: 1,
        explanation: "Mariner 7 confirmed that the polar cap was predominantly dry ice (frozen CO2) sitting at -125°C."
      }}
      prevStory={{
        name: "Mariner 6",
        hash: "#/mars/mariner6"
      }}
      nextStory={{
        name: "Mariner 9",
        hash: "#/mars/mariner9"
      }}
    />
  );
};
