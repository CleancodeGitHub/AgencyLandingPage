import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We create innovative digital solutions that help businesses grow and succeed in the modern world.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full flex items-center gap-2 backdrop-blur-sm transition-colors">
              Watch Demo
              <Play className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}