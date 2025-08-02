import Navbar from '@/components/Navbar';
import HandwrittenHero from '@/components/HandwrittenHero';
import CaregivingDataSection from '@/components/CaregivingDataSection';
import HandwrittenFeatures from '@/components/HandwrittenFeatures';
import ImpactStoriesSection from '@/components/ImpactStoriesSection';
import CaregiverBurdenChart from '@/components/CaregiverBurdenChart';
import HandwrittenCTA from '@/components/HandwrittenCTA';
import HandwrittenFooter from '@/components/HandwrittenFooter';
import FallingFlowers from '@/components/FallingFlowers';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Falling flowers background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FallingFlowers />
      </div>

      <div className="relative z-20">
        <Navbar />
        <div className="flex flex-col justify-between py-8 px-4">
          <main className="max-w-4xl mx-auto">
            <HandwrittenHero />
            <div className="hand-drawn-separator my-8"></div>
            <CaregivingDataSection />
            <div className="hand-drawn-separator my-8"></div>
            <HandwrittenFeatures />
            <div className="hand-drawn-separator my-8"></div>
            <HandwrittenCTA />
            <div className="h-20"></div>
            <ImpactStoriesSection />
            <div className="hand-drawn-separator my-8"></div>
            <CaregiverBurdenChart />
            <div className="hand-drawn-separator my-8"></div>
            
            {/* Private Survey Link - No Reddit Tracking */}
            <section className="py-16 px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">🤍 Share Your Caregiving Experience</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Help us understand your journey better. Your insights will help us build the right support for families like yours.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-6 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground">
                  ⏱️ Takes 3-5 minutes • 🔒 Confidential • 💝 Shapes our MVP
                </p>
              </div>
              <Link to="/survey">
                <Button size="lg" className="text-lg px-8 py-3">
                  Take Our Survey
                </Button>
              </Link>
            </section>
            
          </main>
          <HandwrittenFooter />
        </div>
      </div>
    </div>
  );
};

export default Landing;
