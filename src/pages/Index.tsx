
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PlatformIntegration from '@/components/PlatformIntegration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-xbeats-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <PlatformIntegration />
      <Footer />
    </div>
  );
};

export default Index;
