import Navbar from '@/components/Navbar';
import HoliColors from '@/components/HoliColors';
import HandwrittenHero from '@/components/HandwrittenHero';
import CaregivingDataSection from '@/components/CaregivingDataSection';
import HandwrittenFeatures from '@/components/HandwrittenFeatures';
import NuviIntroSection from '@/components/NuviIntroSection';
import NuviFeaturesSection from '@/components/NuviFeaturesSection';
import HandwrittenWhy from '@/components/HandwrittenWhy';

import ImpactStoriesSection from '@/components/ImpactStoriesSection';
import CaregiverBurdenChart from '@/components/CaregiverBurdenChart';
import HandwrittenCTA from '@/components/HandwrittenCTA';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <HoliColors />
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
            <NuviIntroSection />
            <div className="hand-drawn-separator my-8"></div>
            <NuviFeaturesSection />
            <div className="hand-drawn-separator my-8"></div>
            <HandwrittenWhy />
            <div className="hand-drawn-separator my-8"></div>
            <ImpactStoriesSection />
            <div className="hand-drawn-separator my-8"></div>
            <CaregiverBurdenChart />
            <div className="hand-drawn-separator my-8"></div>
            <HandwrittenCTA />
          </main>
          <HandwrittenFooter />
        </div>
      </div>
    </div>
  );
};

export default Index;