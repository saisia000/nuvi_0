import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';
import NuvoriBlueprint from '@/components/NuvoriBlueprint';

const UnderstandingNuvori = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-caveat text-primary mb-6 tracking-wide">
            Understanding Nuvori
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl font-patrick text-foreground/70 max-w-3xl mx-auto">
            A deep dive into how our Emotional OS bridges innovation with unmet human needs
          </p>
        </div>

        {/* Interactive Blueprint */}
        <div className="mb-16">
          <NuvoriBlueprint />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-caveat text-primary mb-6">The Nuvori Framework</h2>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed mb-6">
              Nuvori represents more than just a product—it's a complete operating system for emotional intelligence in caregiving relationships. Our framework bridges cutting-edge innovation with the deeply human needs that traditional technology overlooks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">🚀 Innovation</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed mb-4">
                Advanced AI algorithms that understand emotional patterns, predict needs, and adapt to unique relationship dynamics.
              </p>
              <ul className="text-sm font-patrick text-foreground/60 space-y-1">
                <li>• Machine learning models</li>
                <li>• Natural language processing</li>
                <li>• Behavioral pattern recognition</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
            
            <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">🧠 Emotional AI</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed mb-4">
                The intelligent bridge that translates between technological capabilities and human emotional needs.
              </p>
              <ul className="text-sm font-patrick text-foreground/60 space-y-1">
                <li>• Emotional state recognition</li>
                <li>• Communication facilitation</li>
                <li>• Relationship orchestration</li>
                <li>• Adaptive interventions</li>
              </ul>
            </div>
            
            <div className="bg-accent/5 border-2 border-dashed border-accent/20 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">❤️ Human Needs</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed mb-4">
                The invisible burdens, exhaustion, and isolation that caregiving dyads face every day.
              </p>
              <ul className="text-sm font-patrick text-foreground/60 space-y-1">
                <li>• Emotional support</li>
                <li>• Communication clarity</li>
                <li>• Stress reduction</li>
                <li>• Connection maintenance</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/20 border-2 border-dashed border-muted/40 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-caveat text-primary mb-6">How The Magic Happens</h3>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">1. Observation & Learning</h4>
                <p className="text-foreground/70 font-patrick">
                  Nuvori quietly observes interaction patterns, communication styles, and emotional rhythms within the dyad, building a deep understanding of the unique relationship dynamics.
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">2. Pattern Recognition</h4>
                <p className="text-foreground/70 font-patrick">
                  Our Emotional AI identifies patterns that indicate stress, confusion, conflict, or opportunities for positive intervention, learning what works best for each specific dyad.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">3. Proactive Support</h4>
                <p className="text-foreground/70 font-patrick">
                  Before small issues become big problems, Nuvori provides gentle interventions, communication assistance, and emotional support tailored to the moment and the relationship.
                </p>
              </div>
              
              <div className="border-l-4 border-muted pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">4. Continuous Adaptation</h4>
                <p className="text-foreground/70 font-patrick">
                  As relationships evolve and needs change, Nuvori adapts its approach, ensuring that support remains relevant, helpful, and respectful of the dyad's autonomy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-caveat text-primary mb-4">The Result</h3>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              Technology that doesn't just work—it cares. An operating system that understands not just what you need to do, but how you feel about doing it. A companion that supports the love between people, making hard moments a little easier and good moments even better.
            </p>
            <p className="text-primary font-patrick font-semibold text-lg">
              This is Nuvori. This is the future of emotional intelligence.
            </p>
          </div>
        </div>
      </main>

      <HandwrittenFooter />
    </div>
  );
};

export default UnderstandingNuvori;