import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const OurVision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-caveat text-primary mb-6 tracking-wide">
            Our Vision
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-4xl font-caveat text-primary mb-6 text-center">A World Where Love Scales</h2>
            <p className="text-foreground/80 font-patrick text-xl leading-relaxed text-center mb-6">
              We envision a future where technology amplifies human compassion, where every caregiving relationship is supported by intelligent systems that understand the heart as well as the mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">Global Impact</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                We see a world where millions of caregiving dyads are supported by emotionally intelligent technology, reducing isolation and burnout while enhancing quality of life.
              </p>
            </div>
            
            <div className="bg-background/50 border-2 border-dashed border-accent/30 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">Seamless Integration</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                Our Emotional OS becomes an invisible yet essential part of daily life, as natural as breathing, supporting relationships without intruding.
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border-2 border-dashed border-accent/30 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-caveat text-primary mb-6">The Future We're Building</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background font-bold text-sm">1</div>
                <div>
                  <h4 className="text-xl font-caveat text-primary mb-2">Preventive Emotional Care</h4>
                  <p className="text-foreground/70 font-patrick">
                    Before stress becomes burnout, before miscommunication becomes conflict, Nuvori helps dyads stay connected and supported.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-background font-bold text-sm">2</div>
                <div>
                  <h4 className="text-xl font-caveat text-primary mb-2">Personalized Support Ecosystems</h4>
                  <p className="text-foreground/70 font-patrick">
                    Each dyad receives a unique constellation of support tools, resources, and interventions tailored to their specific needs and relationship dynamics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-bold text-sm">3</div>
                <div>
                  <h4 className="text-xl font-caveat text-primary mb-2">Connected Communities</h4>
                  <p className="text-foreground/70 font-patrick">
                    Dyads are connected to supportive communities and resources, creating networks of care that extend beyond the immediate relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-caveat text-primary mb-4">Join Us in Building Tomorrow</h3>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              This vision isn't just our dream—it's a future we're actively creating with every line of code, every user interaction, and every meaningful connection we facilitate.
            </p>
            <p className="text-primary font-patrick font-semibold text-lg">
              Together, we're making care more caring.
            </p>
          </div>
        </div>
      </main>

      <HandwrittenFooter />
    </div>
  );
};

export default OurVision;