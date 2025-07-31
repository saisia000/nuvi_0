import React from 'react';
import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';
import NuvoriBlueprint from '@/components/NuvoriBlueprint';

export default function NuviBlueprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-caveat text-center text-primary mb-6 transform -rotate-1">
            Nuvi Blueprint
          </h1>
          
          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12 transform rotate-1">
            <p className="text-xl text-foreground/70 font-patrick leading-relaxed text-center">
              Explore the interconnected elements that make Nuvi an emotionally intelligent companion. 
              This blueprint shows how innovation, emotional AI, and human needs work together to create 
              meaningful support for caregiving dyads.
            </p>
          </div>
          
          <div className="mb-12">
            <NuvoriBlueprint />
          </div>
          
          <div className="bg-background/50 border-2 border-dashed border-primary/20 rounded-2xl p-8 transform -rotate-1">
            <p className="text-lg font-patrick text-center text-foreground/70">
              This interactive blueprint shows how Nuvi's components work together to support caregiving relationships. 
              Hover over each element to explore the system in detail.
            </p>
          </div>
        </div>
      </div>
      
      <HandwrittenFooter />
    </div>
  );
}