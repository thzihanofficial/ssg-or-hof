import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { DestinationSection } from '../components/DestinationSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
      {/* 01 Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero */}
        <Hero />

        {/* Moon / Mars / Deep Space */}
        <ScrollReveal>
          <DestinationSection />
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
