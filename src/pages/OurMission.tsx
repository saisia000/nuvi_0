import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-caveat text-primary mb-6 tracking-wide">
            Our Mission
          </h1>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-background/50 border-2 border-dashed border-secondary rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-caveat text-primary mb-6">What Drives Us</h2>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed mb-6">
              Our mission is to bridge the gap between innovative technology and the deepest human needs in caregiving relationships. We believe that emotional intelligence should be at the heart of every technological solution.
            </p>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed mb-6">
              Through Nuvori's Emotional OS, we aim to create a world where caregiving dyads—whether it's parent-child, spouse-spouse, or caregiver-patient—feel supported, understood, and empowered in their journey together.
            </p>
            <p className="text-foreground/80 font-patrick text-lg leading-relaxed">
              We're not just building technology; we're building bridges of understanding, connection, and hope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/10 border-2 border-dashed border-primary/30 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">For Caregivers</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                To reduce the invisible burden of caregiving by providing emotional support, practical assistance, and meaningful connections.
              </p>
            </div>
            
            <div className="bg-accent/10 border-2 border-dashed border-accent/30 rounded-2xl p-6">
              <h3 className="text-2xl font-caveat text-primary mb-4">For Care Recipients</h3>
              <p className="text-foreground/70 font-patrick leading-relaxed">
                To enhance dignity, independence, and quality of life through technology that understands and responds to emotional needs.
              </p>
            </div>
          </div>
        </div>
      </main>

      <HandwrittenFooter />
    </div>
  );
};

export default OurMission;