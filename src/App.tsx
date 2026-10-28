import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { MoonPage } from './pages/MoonPage';
import { MarsPage } from './pages/MarsPage';
import { DeepSpacePage } from './pages/DeepSpacePage';
import { AboutPage } from './pages/AboutPage';

// Import individual Moon pages
import { Surveyor1Page } from './pages/moon/Surveyor1Page';
import { Surveyor3Page } from './pages/moon/Surveyor3Page';
import { Surveyor567Page } from './pages/moon/Surveyor567Page';
import { ClementinePage } from './pages/moon/ClementinePage';
import { Apollo15LrvPage } from './pages/moon/Apollo15LrvPage';
import { Apollo16LrvPage } from './pages/moon/Apollo16LrvPage';
import { Apollo17LrvPage } from './pages/moon/Apollo17LrvPage';

// Import individual Mars pages
import { Mariner6Page } from './pages/mars/Mariner6Page';
import { Mariner7Page } from './pages/mars/Mariner7Page';
import { Mariner9Page } from './pages/mars/Mariner9Page';
import { Viking1And2Page } from './pages/mars/Viking1And2Page';
import { MarsGlobalSurveyorPage } from './pages/mars/MarsGlobalSurveyorPage';
import { MarsPathfinderPage } from './pages/mars/MarsPathfinderPage';
import { MarsOdysseyPage } from './pages/mars/MarsOdysseyPage';
import { SpiritAndOpportunityPage } from './pages/mars/SpiritAndOpportunityPage';
import { MarsReconnaissanceOrbiterPage } from './pages/mars/MarsReconnaissanceOrbiterPage';
import { PhoenixMarsLanderPage } from './pages/mars/PhoenixMarsLanderPage';
import { CuriosityRoverPage } from './pages/mars/CuriosityRoverPage';
import { MavenPage } from './pages/mars/MavenPage';
import { InSightLandersPage } from './pages/mars/InSightLandersPage';
import { Mars2020Page } from './pages/mars/Mars2020Page';
import { SojournerPage } from './pages/mars/SojournerPage';
import { OpportunityPage } from './pages/mars/OpportunityPage';
import { PerseverancePage } from './pages/mars/PerseverancePage';

// Import individual Deep Space pages
import { MarinerProgramPage } from './pages/deepspace/MarinerProgramPage';
import { Pioneer10And11Page } from './pages/deepspace/Pioneer10And11Page';
import { Voyager1And2Page } from './pages/deepspace/Voyager1And2Page';
import { MessengerPage } from './pages/deepspace/MessengerPage';
import { NewHorizonsPage } from './pages/deepspace/NewHorizonsPage';
import { JunoPage } from './pages/deepspace/JunoPage';
import { OsirisRexApexPage } from './pages/deepspace/OsirisRexApexPage';
import { Tiros1Page } from './pages/deepspace/Tiros1Page';
import { HubbleTelescopePage } from './pages/deepspace/HubbleTelescopePage';
import { ChandraObservatoryPage } from './pages/deepspace/ChandraObservatoryPage';
import { KeplerTelescopePage } from './pages/deepspace/KeplerTelescopePage';
import { JamesWebbTelescopePage } from './pages/deepspace/JamesWebbTelescopePage';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const [displayedHash, setDisplayedHash] = useState(() => window.location.hash);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setHash(window.location.hash);
    setDisplayedHash(window.location.hash);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (hash !== displayedHash) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setDisplayedHash(hash);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        setIsExiting(false);
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [hash, displayedHash]);

  const renderPage = (currentHash: string) => {
    if (currentHash === '#/moon') return <MoonPage />;
    if (currentHash === '#/moon/surveyor1') return <Surveyor1Page />;
    if (currentHash === '#/moon/surveyor3') return <Surveyor3Page />;
    if (currentHash === '#/moon/surveyor567') return <Surveyor567Page />;
    if (currentHash === '#/moon/clementine') return <ClementinePage />;
    if (currentHash === '#/moon/apollo15lrv') return <Apollo15LrvPage />;
    if (currentHash === '#/moon/apollo16lrv') return <Apollo16LrvPage />;
    if (currentHash === '#/moon/apollo17lrv') return <Apollo17LrvPage />;

    if (currentHash === '#/mars') return <MarsPage />;
    if (currentHash === '#/mars/mariner6') return <Mariner6Page />;
    if (currentHash === '#/mars/mariner7') return <Mariner7Page />;
    if (currentHash === '#/mars/mariner9') return <Mariner9Page />;
    if (currentHash === '#/mars/viking1and2') return <Viking1And2Page />;
    if (currentHash === '#/mars/marsglobalsurveyor') return <MarsGlobalSurveyorPage />;
    if (currentHash === '#/mars/marspathfinder') return <MarsPathfinderPage />;
    if (currentHash === '#/mars/marsodyssey') return <MarsOdysseyPage />;
    if (currentHash === '#/mars/spiritandopportunity') return <SpiritAndOpportunityPage />;
    if (currentHash === '#/mars/marsreconnaissanceorbiter') return <MarsReconnaissanceOrbiterPage />;
    if (currentHash === '#/mars/phoenixmarslander') return <PhoenixMarsLanderPage />;
    if (currentHash === '#/mars/curiosityrover') return <CuriosityRoverPage />;
    if (currentHash === '#/mars/maven') return <MavenPage />;
    if (currentHash === '#/mars/insightlanders') return <InSightLandersPage />;
    if (currentHash === '#/mars/mars2020') return <Mars2020Page />;
    if (currentHash === '#/mars/sojourner') return <SojournerPage />;
    if (currentHash === '#/mars/opportunity') return <OpportunityPage />;
    if (currentHash === '#/mars/perseverance') return <PerseverancePage />;

    if (currentHash === '#/deep-space') return <DeepSpacePage />;
    if (currentHash === '#/deep-space/marinerprogram') return <MarinerProgramPage />;
    if (currentHash === '#/deep-space/pioneer10and11') return <Pioneer10And11Page />;
    if (currentHash === '#/deep-space/voyager1and2') return <Voyager1And2Page />;
    if (currentHash === '#/deep-space/messenger') return <MessengerPage />;
    if (currentHash === '#/deep-space/newhorizons') return <NewHorizonsPage />;
    if (currentHash === '#/deep-space/juno') return <JunoPage />;
    if (currentHash === '#/deep-space/osirisrexapex') return <OsirisRexApexPage />;
    if (currentHash === '#/deep-space/tiros1') return <Tiros1Page />;
    if (currentHash === '#/deep-space/hubbletelescope') return <HubbleTelescopePage />;
    if (currentHash === '#/deep-space/chandraobservatory') return <ChandraObservatoryPage />;
    if (currentHash === '#/deep-space/keplertelescope') return <KeplerTelescopePage />;
    if (currentHash === '#/deep-space/jameswebbtelescope') return <JamesWebbTelescopePage />;
    if (currentHash === '#/about' || currentHash === '#about') return <AboutPage />;

    return <Home />;
  };

  return (
    <div 
      key={displayedHash} 
      className={isExiting ? 'page-fade-out' : 'page-fade-in'}
    >
      {renderPage(displayedHash)}
    </div>
  );
}
