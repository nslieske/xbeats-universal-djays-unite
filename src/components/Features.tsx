
import React from 'react';
import { Music, Headphones, ListMusic, Share2, Zap, LayoutGrid, Disc3, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div id="features" className="py-16 md:py-24 bg-xbeats-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Endless Possibilities</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            All your music, one platform, infinite ways to enjoy it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-xbeats-medium p-8 rounded-xl card-hover">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-xbeats-purple to-xbeats-blue flex items-center justify-center mb-6">
              <LayoutGrid className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Universal Library</h3>
            <p className="text-white/70 mb-4">
              Connect all your music services into one unified library. Access everything from Spotify, YouTube, SoundCloud, Apple Music, and more.
            </p>
            <Button variant="ghost" className="text-xbeats-purple hover:text-xbeats-purple hover:bg-xbeats-purple/10 p-0">
              Learn More →
            </Button>
          </div>

          {/* Feature 2 */}
          <div className="bg-xbeats-medium p-8 rounded-xl card-hover">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-xbeats-blue to-xbeats-green flex items-center justify-center mb-6">
              <ListMusic className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Cross-Platform Playlists</h3>
            <p className="text-white/70 mb-4">
              Create playlists with songs from different platforms. Mix Spotify tracks with YouTube videos and SoundCloud discoveries in one seamless experience.
            </p>
            <Button variant="ghost" className="text-xbeats-blue hover:text-xbeats-blue hover:bg-xbeats-blue/10 p-0">
              Learn More →
            </Button>
          </div>

          {/* Feature 3 */}
          <div className="bg-xbeats-medium p-8 rounded-xl card-hover">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-xbeats-pink to-xbeats-purple flex items-center justify-center mb-6">
              <Bot className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI DJ Assistant</h3>
            <p className="text-white/70 mb-4">
              Let our AI create the perfect playlist based on your mood, activity, or music taste. Smart mixing with beat-matching transitions.
            </p>
            <Button variant="ghost" className="text-xbeats-pink hover:text-xbeats-pink hover:bg-xbeats-pink/10 p-0">
              Learn More →
            </Button>
          </div>

          {/* Feature 4 */}
          <div className="bg-xbeats-medium p-8 rounded-xl card-hover">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-xbeats-green to-xbeats-blue flex items-center justify-center mb-6">
              <Disc3 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Be Your Own DJ</h3>
            <p className="text-white/70 mb-4">
              Access powerful yet intuitive mixing tools. Create seamless transitions, adjust tempo, and mix tracks like a pro with our user-friendly interface.
            </p>
            <Button variant="ghost" className="text-xbeats-green hover:text-xbeats-green hover:bg-xbeats-green/10 p-0">
              Learn More →
            </Button>
          </div>

          {/* Feature 5 */}
          <div className="bg-xbeats-medium p-8 rounded-xl card-hover">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-xbeats-blue to-xbeats-pink flex items-center justify-center mb-6">
              <Share2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Social Sharing</h3>
            <p className="text-white/70 mb-4">
              Share your universal playlists with friends regardless of what platform they use. Your friends can listen even without switching services.
            </p>
            <Button variant="ghost" className="text-xbeats-blue hover:text-xbeats-blue hover:bg-xbeats-blue/10 p-0">
              Learn More →
            </Button>
          </div>

          {/* Feature 6 */}
          <div className="bg-xbeats-medium p-8 rounded-xl card-hover">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-xbeats-purple to-xbeats-pink flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Listening History</h3>
            <p className="text-white/70 mb-4">
              Track and analyze your historical listening activity across all platforms. Discover your habits and get personalized recommendations.
            </p>
            <Button variant="ghost" className="text-xbeats-purple hover:text-xbeats-purple hover:bg-xbeats-purple/10 p-0">
              Learn More →
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="btn-primary text-lg px-8 py-6">Start Your Free Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
