import React from 'react';
import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';
import NuviFeaturesSection from '@/components/NuviFeaturesSection';

export default function AboutNuvi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-caveat text-center text-primary mb-6 transform -rotate-1">
            About Nuvi
          </h1>

          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12 transform rotate-1">
            <p className="text-xl text-foreground/70 font-patrick leading-relaxed text-center">
              Meet Nuvi, your compassionate AI companion designed specifically for caregiving dyads.
              Nuvi understands the unique challenges you face and provides emotional support,
              practical guidance, and meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">Emotional Intelligence</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                Nuvi is built with advanced emotional AI that recognizes and responds to the complex feelings
                that arise in caregiving relationships, providing empathetic support when you need it most.
              </p>
            </div>

            <div className="bg-background/50 border-2 border-dashed border-accent/30 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">Personalized Care</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                Every interaction with Nuvi is tailored to your unique situation, learning from your conversations
                to provide increasingly relevant and helpful guidance over time.
              </p>
            </div>
          </div>


          <NuviFeaturesSection />
        </div>
      </div>

      <HandwrittenFooter />
    </div>
  );
}