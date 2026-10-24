import React, { useEffect } from 'react';
import { MissionDetailLayout } from '../../components/MissionDetailLayout';

export const HubbleTelescopePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MissionDetailLayout
      categoryName="Deep Space Exploration"
      categoryHash="#/deep-space"
      statusBadge="Still Active"
      isStillActive={true}
      name="Hubble Space Telescope"
      dateRange="1990 – Present"
      location="Low Earth Orbit (335 miles up)"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/4a/Hubble_2009_close-up_2.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
      imageAlt="Hubble Space Telescope"

      capturedImages={[
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/500px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/EmissionNebula_NGC6357.jpg/500px-EmissionNebula_NGC6357.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Hubble_Extreme_Deep_Field_%28full_resolution%29.png/960px-Hubble_Extreme_Deep_Field_%28full_resolution%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Color_image_of_galaxy_cluster_MCS_J0416.1%E2%80%932403.jpg/500px-Color_image_of_galaxy_cluster_MCS_J0416.1%E2%80%932403.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      ]}
      chapters={[
        {
          title: "Chapter 1: The Eye That Rewrote Astronomy",
          content: "I transformed how humans see the universe — from distant nebulae to the expansion of space itself. I have spent 36 years revealing cosmic beauty."
        },
        {
          title: "Chapter 2: Fixing the Spherical Aberration",
          content: "Launched in April 1990, my initial images were slightly blurry due to a mirror flaw off by 1/50th the width of a human hair. In 1993, Shuttle astronauts installed corrective optics like COSTAR 'contact lenses'!"
        },
        {
          title: "Chapter 3: The Pillars of Creation & Deep Fields",
          content: "I captured the iconic 'Pillars of Creation' in the Eagle Nebula and pointed my lens at a pitch-black patch of sky for 10 days to reveal 3,000 ancient galaxies in the Hubble Deep Field!"
        },
        {
          title: "Chapter 4: Discovering Dark Energy",
          content: "My observations of distant exploding supernovae proved that the expansion of the universe is accelerating under a mysterious force called dark energy."
        }
      ]}
      stats={{
        launchDate: "April 24, 1990",
        landingDate: "Low Earth Orbit ",
        dataSent: "Over 1.7 Million Observations",
        status: "🟢 Still Active (36+ Years Observing)",
        isStillActive: true
      }}
      didYouKnow="Hubble pointed its camera at an apparently empty, black patch of dark sky for 10 days — and discovered 10,000 previously unseen galaxies!"
      objectives={[
        "Observe astronomical objects in optical, ultraviolet, and near-infrared wavelengths above atmospheric distortion.",
        "Determine the precise rate of universe expansion (Hubble Constant).",
        "Perform deep field galaxy surveys looking back billions of years in cosmic time."
      ]}
      quiz={{
        question: "How did Space Shuttle astronauts fix Hubble's blurry vision in 1993?",
        options: [
          "They replaced the entire telescope",
          "They polished the mirror with sandpaper in space",
          "They installed COSTAR corrective optics ('glasses')",
          "They turned down the brightness"
        ],
        correctIndex: 2,
        explanation: "Astronauts installed COSTAR corrective optics that compensated for the spherical mirror flaw perfectly!"
      }}
      prevStory={{
        name: "Voyager 1 & 2",
        hash: "#/deep-space/voyager1and2"
      }}
      nextStory={{
        name: "Chandra X-Ray Observatory",
        hash: "#/deep-space/chandraobservatory"
      }}
    />
  );
};
