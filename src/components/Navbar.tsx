
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Music, Search, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Music className="h-8 w-8 text-xbeats-purple" />
              <span className="text-xl font-bold">xBeats</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="nav-link">Features</a>
            <a href="#platforms" className="nav-link">Platforms</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#download" className="nav-link">Download</a>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button className="btn-primary">Sign Up</Button>
            <Button variant="outline" className="text-white">Log In</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-xbeats-darker p-4 transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-full opacity-100" : "-top-[400px] opacity-0"
        )}>
          <div className="flex flex-col gap-4 py-4">
            <a href="#features" className="nav-link py-2 px-4 hover:bg-xbeats-light rounded-md">Features</a>
            <a href="#platforms" className="nav-link py-2 px-4 hover:bg-xbeats-light rounded-md">Platforms</a>
            <a href="#pricing" className="nav-link py-2 px-4 hover:bg-xbeats-light rounded-md">Pricing</a>
            <a href="#download" className="nav-link py-2 px-4 hover:bg-xbeats-light rounded-md">Download</a>
            <div className="border-t border-white/10 my-2"></div>
            <a href="/signup" className="btn-primary text-center">Sign Up</a>
            <a href="/login" className="btn-secondary text-center">Log In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
