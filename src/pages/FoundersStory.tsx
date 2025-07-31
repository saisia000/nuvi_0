import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const FoundersStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-caveat text-primary mb-6 tracking-wide">
            Founder's Story
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-caveat text-primary mb-6">The Journey That Started It All</h2>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed mb-6">
              Nuvori was born from a deeply personal experience—watching the invisible struggles of caregiving unfold within my own family. What started as a quest to help my grandmother and mother navigate their changing relationship became a mission to support millions of caregiving dyads worldwide.
            </p>
          </div>

          <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-caveat text-primary mb-6">The Moment Everything Changed</h3>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              It was 3 AM when my phone rang. My mother's voice was exhausted, frustrated, and heartbroken. "I don't know how to help her anymore," she whispered, talking about my grandmother who was struggling with early-stage dementia. 
            </p>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              In that moment, I realized that the most sophisticated AI systems could recognize my face, predict my shopping habits, and recommend movies—but nothing existed to understand the emotional complexity of caregiving relationships or help families navigate these challenging waters.
            </p>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed">
              That night, the idea for Nuvori's Emotional OS was born.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/10 border-2 border-dashed border-secondary/30 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">The Problem I Couldn't Ignore</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                Over 470 million people worldwide are unpaid family caregivers, yet most feel isolated, overwhelmed, and unsupported. Existing solutions focused on logistics—scheduling, medication reminders, health tracking—but ignored the emotional heart of caregiving.
              </p>
            </div>
            
            <div className="bg-accent/10 border-2 border-dashed border-accent/30 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">The Vision That Emerged</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                What if technology could understand the subtle dynamics between caregiving partners? What if AI could help families communicate better, anticipate needs, and maintain emotional connection even through difficult transitions?
              </p>
            </div>
          </div>

          <div className="bg-muted/20 border-2 border-dashed border-muted/40 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-caveat text-primary mb-6">Building with Purpose</h3>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              Every feature we build, every algorithm we train, and every interaction we design is informed by real experiences from real families. We don't just talk to users—we listen to their stories, understand their struggles, and celebrate their victories.
            </p>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              My grandmother passed away two years ago, but the lessons from her journey with my mother continue to guide Nuvori's development. Her legacy lives on in every dyad we support, every caregiver we help, and every moment of connection we facilitate.
            </p>
          </div>

          <div className="bg-primary/10 border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-caveat text-primary mb-4">A Personal Promise</h3>
            <p className="text-foreground/70 font-patrick text-lg leading-relaxed mb-6">
              To every family beginning their caregiving journey, to every person feeling overwhelmed by the responsibility of caring for someone they love, and to every dyad searching for understanding—this is for you.
            </p>
            <p className="text-primary font-patrick font-semibold text-lg">
              You are not alone. Your love matters. And your relationship deserves support.
            </p>
            <div className="mt-6 text-right">
              <p className="text-foreground/60 font-patrick italic">
                — The Nuvori Team
              </p>
            </div>
          </div>
        </div>
      </main>

      <HandwrittenFooter />
    </div>
  );
};

export default FoundersStory;