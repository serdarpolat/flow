import React from 'react';
import Header from '../layout/Header';
import Hero from './Hero';
import InstantContent from './InstantContent';
import Features from './Features';
import AIFeatures from './AIFeatures';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Footer from '../layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500/30">
      <Header />
      <main>
        <Hero />
        <InstantContent />
        <Features />
        <AIFeatures />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;