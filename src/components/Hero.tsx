
import React from 'react';
import { Button } from "@/components/ui/button";
import { Music, Headphones, ListMusic, Share2, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left md:pr-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your Music, <span className="text-gradient">Unified</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto md:mx-0">
              One platform for all your music, across all services. Create playlists, be your own DJ, or let AI do it for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-primary text-lg px-8 py-6">Get Started Free</Button>
              <Button variant="outline" className="text-white text-lg px-8 py-6">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Platforms */}
            <div className="mt-12 text-white/50">
              <p className="text-sm mb-4">WORKS WITH ALL YOUR FAVORITES</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-green-500 to-black flex items-center justify-center">
                    <Music className="h-4 w-4 text-white" />
                  </div>
                  <span>Spotify</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
                    <Music className="h-4 w-4 text-white" />
                  </div>
                  <span>YouTube</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                    <Music className="h-4 w-4 text-white" />
                  </div>
                  <span>SoundCloud</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                    <Music className="h-4 w-4 text-white" />
                  </div>
                  <span>Apple Music</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Music className="h-4 w-4 text-white" />
                  </div>
                  <span>Amazon Music</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="flex-1 mt-12 md:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-xbeats-purple/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative bg-xbeats-light rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">Your Universal Library</h3>
                      <p className="text-white/70">All your music in one place</p>
                    </div>
                    <Headphones className="h-10 w-10 text-xbeats-purple" />
                  </div>
                  
                  {/* Music Visualization */}
                  <div className="mt-4 mb-8 flex items-end justify-center gap-1 h-24">
                    <div className="w-3 bg-xbeats-purple h-16 rounded-sm animate-wave-1"></div>
                    <div className="w-3 bg-xbeats-blue h-32 rounded-sm animate-wave-2"></div>
                    <div className="w-3 bg-xbeats-pink h-20 rounded-sm animate-wave-3"></div>
                    <div className="w-3 bg-xbeats-green h-28 rounded-sm animate-wave-4"></div>
                    <div className="w-3 bg-xbeats-purple h-12 rounded-sm animate-wave-1"></div>
                    <div className="w-3 bg-xbeats-blue h-24 rounded-sm animate-wave-2"></div>
                    <div className="w-3 bg-xbeats-pink h-32 rounded-sm animate-wave-3"></div>
                    <div className="w-3 bg-xbeats-green h-16 rounded-sm animate-wave-4"></div>
                  </div>
                  
                  {/* Feature Icons */}
                  <div className="flex justify-around">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-xbeats-dark flex items-center justify-center mx-auto mb-2">
                        <ListMusic className="h-6 w-6 text-xbeats-green" />
                      </div>
                      <span className="text-sm">Playlists</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-xbeats-dark flex items-center justify-center mx-auto mb-2">
                        <Share2 className="h-6 w-6 text-xbeats-blue" />
                      </div>
                      <span className="text-sm">Share</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-xbeats-dark flex items-center justify-center mx-auto mb-2">
                        <div className="relative">
                          <Music className="h-6 w-6 text-xbeats-pink" />
                          <span className="absolute -top-1 -right-1 text-xs bg-xbeats-purple rounded-full w-4 h-4 flex items-center justify-center">AI</span>
                        </div>
                      </div>
                      <span className="text-sm">AI DJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
