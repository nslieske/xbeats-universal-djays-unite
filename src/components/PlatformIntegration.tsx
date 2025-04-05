
import React from 'react';
import { Button } from "@/components/ui/button";
import { Music, CheckCircle2 } from "lucide-react";

const PlatformIntegration = () => {
  const platforms = [
    { 
      name: 'Spotify', 
      color: 'from-green-500 to-green-700',
      features: ['90+ million tracks', 'Playlists', 'Podcasts']
    },
    { 
      name: 'YouTube Music', 
      color: 'from-red-500 to-red-700',
      features: ['Music videos', 'User content', 'Live performances']
    },
    { 
      name: 'Apple Music', 
      color: 'from-pink-500 to-purple-700',
      features: ['90+ million tracks', 'Radio stations', 'Exclusives']
    },
    { 
      name: 'SoundCloud', 
      color: 'from-orange-400 to-orange-600',
      features: ['Indie artists', 'DJ mixes', 'Remixes']
    },
    { 
      name: 'Amazon Music', 
      color: 'from-blue-400 to-teal-500',
      features: ['HD audio', 'Podcasts', 'Alexa integration']
    },
    { 
      name: 'Tidal', 
      color: 'from-blue-800 to-blue-900',
      features: ['HiFi quality', 'Music videos', 'Artist exclusives']
    },
  ];

  return (
    <div id="platforms" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">All Your Platforms, One Home</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Connect all your favorite music services and manage them in one place.
          </p>
        </div>

        {/* Platform Integrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-xbeats-medium rounded-xl overflow-hidden card-hover">
              <div className={`h-3 bg-gradient-to-r ${platform.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{platform.name}</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-xbeats-green" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Connect</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="mt-20 bg-xbeats-medium rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-xbeats-purple/20 via-xbeats-blue/10 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">One Universal Library</h3>
              <p className="text-white/70 text-lg mb-6">
                Connect all your accounts once and enjoy a seamless experience across platforms. No more switching between apps to find your favorite music.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-xbeats-light px-3 py-1 rounded-full text-sm">Smart Sync</span>
                <span className="bg-xbeats-light px-3 py-1 rounded-full text-sm">No Duplicates</span>
                <span className="bg-xbeats-light px-3 py-1 rounded-full text-sm">Cross-Platform Search</span>
                <span className="bg-xbeats-light px-3 py-1 rounded-full text-sm">Universal Playlists</span>
              </div>
              <Button className="btn-primary">Connect Your Accounts</Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-xbeats-purple/30 animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-xbeats-medium border-4 border-xbeats-purple flex items-center justify-center">
                    <span className="text-3xl font-bold">xB</span>
                  </div>
                </div>
                {/* Connected Platforms */}
                {platforms.slice(0, 5).map((platform, index) => {
                  const angle = (index * (2 * Math.PI / 5));
                  const x = Math.cos(angle) * 110;
                  const y = Math.sin(angle) * 110;
                  return (
                    <div 
                      key={index}
                      className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        top: '50%',
                        left: '50%',
                        marginTop: '-24px',
                        marginLeft: '-24px'
                      }}
                    >
                      <Music className="h-6 w-6 text-white" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformIntegration;
