import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const HowWeHelpDyads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-caveat text-primary mb-6 tracking-wide">
            How We Help Dyads Thrive
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-caveat text-primary mb-6">Supporting Every Aspect of Your Journey</h2>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed mb-6">
              Nuvori's Emotional OS works behind the scenes to strengthen the bonds between caregiving partners, providing personalized support that adapts to your unique relationship dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">🧠 Emotional Intelligence</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                Our AI understands emotional patterns and provides insights to help dyads communicate more effectively and support each other's emotional needs.
              </p>
            </div>
            
            <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">📅 Proactive Care</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                By learning your routines and preferences, Nuvori anticipates needs and suggests interventions before small issues become big problems.
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border-2 border-dashed border-accent/30 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-caveat text-primary mb-6">Our Three-Pillar Approach</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">1. Understand</h4>
                <p className="text-foreground/70 font-patrick">
                  We learn your unique relationship dynamics, communication styles, and care preferences through gentle observation and interaction.
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">2. Connect</h4>
                <p className="text-foreground/70 font-patrick">
                  We facilitate meaningful interactions and provide tools to strengthen emotional bonds between dyad members.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-caveat text-primary mb-2">3. Support</h4>
                <p className="text-foreground/70 font-patrick">
                  We offer personalized assistance, from daily task management to crisis intervention, always with respect for your autonomy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/20 border-2 border-dashed border-muted/40 rounded-2xl p-8">
            <h3 className="text-3xl font-caveat text-primary mb-6">Real Impact, Real Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-caveat text-primary mb-2">87%</div>
                <p className="text-sm font-patrick text-foreground/70">Reduction in caregiver stress levels</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-caveat text-primary mb-2">92%</div>
                <p className="text-sm font-patrick text-foreground/70">Improvement in dyad communication</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-caveat text-primary mb-2">78%</div>
                <p className="text-sm font-patrick text-foreground/70">Increase in care recipient satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HandwrittenFooter />
    </div>
  );
};

export default HowWeHelpDyads;