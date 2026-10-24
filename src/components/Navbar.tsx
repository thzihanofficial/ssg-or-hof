import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ExternalLink, ChevronRight } from 'lucide-react';
import { BRAND } from '../data/landingContent';
import { SlideTabs } from './ui/slide-tabs';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'destinations', 'closing-cta'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      window.location.hash = "";
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getActiveTabIdx = () => {
    if (activeSection === 'hero') return 0;
    if (activeSection === 'destinations') return 1;
    return 2; // About / Closing CTA
  };

  const desktopTabs = [
    { label: "Home", onClick: () => scrollToSection('hero') },
    { label: "Explore", onClick: () => scrollToSection('destinations') },
    { label: "About", onClick: () => scrollToSection('closing-cta') }
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full">
      {/* Global Nav */}
      <nav 
        id="global-nav"
        aria-label="Global Navigation"
        className={`w-full h-[54px] bg-black/95 backdrop-blur-md text-white flex items-center px-4 md:px-8 border-b-4 border-[#2997ff] transition-all ${
          isScrolled 
            ? 'shadow-[0px_4px_16px_rgba(0,0,0,0.9),0px_4px_0px_0px_#000000]' 
            : 'shadow-[0px_4px_0px_0px_#000000]'
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between text-[13px] uppercase tracking-wider">
          {/* Brand Mark */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-white hover:text-[#2997ff] transition-colors focus:outline-none border-2 border-white bg-black px-3 py-1 shadow-[3px_3px_0px_0px_#2997ff] cursor-pointer"
          >
            <span className="font-black text-[13px] sm:text-[14px] uppercase tracking-tight text-white">{BRAND.name}</span>
            <span className="text-[#2997ff] hidden sm:inline font-black">|</span>
            <span className="text-white/80 hidden sm:inline font-bold text-[11px] uppercase">BY UNIVERSE BREAKERS</span>
          </button>
          
          {/* Desktop Global Links */}
          <div className="hidden md:block">
            <SlideTabs tabs={desktopTabs} activeIdx={getActiveTabIdx()} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white border-2 border-white bg-black shadow-[3px_3px_0px_0px_#2997ff] cursor-pointer font-bold"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="md:hidden bg-black text-white border-b-4 border-[#2997ff] px-6 py-6 shadow-[0px_8px_0px_0px_#000000]"
        >
          <div className="flex flex-col space-y-4 text-[16px] font-black uppercase tracking-wider">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 text-white hover:text-[#2997ff] border-b-2 border-white/30 flex items-center justify-between"
            >
              <span>HOME</span>
              <span className="text-[#2997ff] text-[12px]">SYS 01</span>
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="text-left py-2 text-white hover:text-[#2997ff] border-b-2 border-white/30 flex items-center justify-between"
            >
              <span>EXPLORE DESTINATIONS</span>
              <span className="text-[#2997ff] text-[12px]">SYS 02</span>
            </button>
            <button 
              onClick={() => scrollToSection('closing-cta')}
              className="text-left py-2 text-white hover:text-[#2997ff] border-b-2 border-white/30 flex items-center justify-between"
            >
              <span>ABOUT / MISSION</span>
              <span className="text-[#2997ff] text-[12px]">SYS 03</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('destinations')}
                className="w-full bg-[#0066cc] text-white text-center py-3 border-2 border-white font-black uppercase shadow-[4px_4px_0px_0px_#ffffff]"
              >
                LAUNCH EXPLORER
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
