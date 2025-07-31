import Navbar from '@/components/Navbar';
import HandwrittenHero from '@/components/HandwrittenHero';
import CaregivingDataSection from '@/components/CaregivingDataSection';
import HandwrittenFeatures from '@/components/HandwrittenFeatures';
import ImpactStoriesSection from '@/components/ImpactStoriesSection';
import CaregiverBurdenChart from '@/components/CaregiverBurdenChart';
import HandwrittenCTA from '@/components/HandwrittenCTA';
import HandwrittenFooter from '@/components/HandwrittenFooter';
import FallingFlowers from '@/components/FallingFlowers';
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
          </main>
          <HandwrittenFooter />
        </div>
      </div>
    </div>
  );
};

export default Landing;
