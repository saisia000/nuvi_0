import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const OurApproach = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-20">
        <Navbar />
        <div className="flex flex-col justify-between py-8 px-4">
          <main className="max-w-4xl mx-auto">
            
            <section className="handwritten-card p-7 mb-12">
              <h1 className="font-caveat text-5xl md:text-6xl text-primary mb-6 text-center" style={{ textShadow: '1px 1px 1px #e5d4cb' }}>
                Protecting What Makes Nuvori. Unique
              </h1>
              
              <p className="mb-6 text-lg font-patrick text-center italic">
                At Nuvori., we're committed to building a platform that genuinely honors the caregiving–survivor journey—not just as the first to do so, but as responsible stewards for all who rely on our innovations.
              </p>
              
              <ul className="space-y-6 text-lg font-patrick">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <div>
                    <strong>Ongoing Preprinting & Transparent Innovation:</strong> We share our scientific and technical breakthroughs with the wider community through preprints and open-access research—ensuring our methods are recognized, respected, and timestamped as originals.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <div>
                    <strong>Patent-Backed Emotional OS Architecture:</strong> Key elements of Nuvori.'s architecture—like our relational memory graph and dyad-centered emotional programming—are in active patent filings to safeguard our approach.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <div>
                    <strong>Rooted in Authentic Experience:</strong> Our system is designed by survivors and caregivers with lived experience, translated into a proprietary emotional OS no one else offers.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <div>
                    <strong>Community Trust Is Our Priority:</strong> We partner directly—often under NDA—with advocacy groups, support networks, and families to co-create features and safeguard privacy and emotional well-being.
                  </div>
                </li>
              </ul>
            </section>

          </main>
          <HandwrittenFooter />
        </div>
      </div>
    </div>
  );
};

export default OurApproach;