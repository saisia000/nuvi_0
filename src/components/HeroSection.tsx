import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setAnimationStage(0); // Burnout words
      setTimeout(() => setAnimationStage(1), 2000);  // Form "Nuvori."
      setTimeout(() => setAnimationStage(2), 4000);  // Peaceful words
      setTimeout(() => setAnimationStage(1), 6000);  // Back to "Nuvori." (distinction)
      setTimeout(() => setAnimationStage(0), 8000);  // Back to burnout words
    };

    cycle(); // Start immediately
    const interval = setInterval(cycle, 10000); // Loop every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const burnoutWords = ["exhausted", "invisible", "drained", "overwhelmed", "forgotten"];
  const peacefulWords = ["calm", "supported", "renewed", "seen", "valued"];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Text Sequence */}
        <div className="h-32 mb-8 flex items-center justify-center">
          {animationStage === 0 && (
            <div className="text-animation-container">
              {burnoutWords.map((word, index) => (
                <span
                  key={word}
                  className="burnout-word"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          )}
          
          {animationStage === 1 && (
            <div className="nuvori-formation">
              <span className="text-6xl md:text-8xl font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nuvori.
              </span>
            </div>
          )}
          
          {animationStage === 2 && (
            <div className="text-animation-container">
              {peacefulWords.map((word, index) => (
                <span
                  key={word}
                  className="peaceful-word"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Main Content - always visible */}
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-light brand-text mb-6 font-outfit leading-tight">
              <span className="float">You're holding everyone together.</span>
              <br />
              <span className="font-medium float-delay">But who's holding you?</span>
            </h1>
          </div>
          
          <div className="fade-in-delay">
            <p className="text-lg md:text-xl brand-text opacity-85 mb-8 max-w-3xl mx-auto font-outfit leading-relaxed font-light">
              <span className="font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuvori.</span> is your private AI support system—built for caregiver–survivor dyads who feel invisible, exhausted, and emotionally drained. You give endlessly. Let us give something back to you.
            </p>
          </div>
          
          <div className="fade-in-slow space-y-4">
            <button className="cta-button px-10 py-4 rounded-full brand-text font-medium text-lg font-outfit">
              Find your calm
            </button>
            
            <p className="text-sm brand-text opacity-70 font-outfit font-light">
              Your first step toward relief, recognition, and renewal with <span className="font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuvori.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;