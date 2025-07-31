import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const WhatWeBelieve = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-caveat text-primary mb-6 tracking-wide">
            What We Believe
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-caveat text-primary mb-6">Our Core Beliefs</h2>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed mb-6">
              At Nuvori, our beliefs shape everything we do. They guide our innovations, influence our decisions, and inspire our vision for the future of caregiving.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-8">
              <h3 className="text-3xl font-caveat text-primary mb-4">Emotions Are Data</h3>
              <p className="text-foreground/70 font-patrick text-lg leading-relaxed">
                We believe that emotions carry valuable information that can inform better care decisions. By understanding emotional patterns and responses, we can create more meaningful and effective support systems.
              </p>
            </div>

            <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 rounded-2xl p-8">
              <h3 className="text-3xl font-caveat text-primary mb-4">Technology Should Enhance, Not Replace</h3>
              <p className="text-foreground/70 font-patrick text-lg leading-relaxed">
                Human connection is irreplaceable. Our technology is designed to amplify the love, care, and understanding that already exists within dyads, not to substitute for genuine human interaction.
              </p>
            </div>

            <div className="bg-accent/5 border-2 border-dashed border-accent/20 rounded-2xl p-8">
              <h3 className="text-3xl font-caveat text-primary mb-4">Every Relationship Is Unique</h3>
              <p className="text-foreground/70 font-patrick text-lg leading-relaxed">
                No two caregiving relationships are the same. We believe in creating personalized solutions that adapt to the unique dynamics, needs, and preferences of each dyad.
              </p>
            </div>

            <div className="bg-muted/20 border-2 border-dashed border-muted/40 rounded-2xl p-8">
              <h3 className="text-3xl font-caveat text-primary mb-4">Preventive Care Is Better Than Reactive Care</h3>
              <p className="text-foreground/70 font-patrick text-lg leading-relaxed">
                By identifying patterns and potential issues before they become crises, we can help dyads maintain stronger, healthier relationships and prevent caregiver burnout.
              </p>
            </div>

            <div className="bg-primary/10 border-2 border-dashed border-primary/30 rounded-2xl p-8">
              <h3 className="text-3xl font-caveat text-primary mb-4">Privacy Is Sacred</h3>
              <p className="text-foreground/70 font-patrick text-lg leading-relaxed">
                The intimate nature of caregiving relationships requires the highest levels of privacy and security. We believe your personal data should remain personal, always.
              </p>
            </div>
          </div>
        </div>
      </main>

      <HandwrittenFooter />
    </div>
  );
};

export default WhatWeBelieve;