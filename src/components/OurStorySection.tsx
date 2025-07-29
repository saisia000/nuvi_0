import { ArrowRight } from 'lucide-react';

const OurStorySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-medium brand-text mb-6 font-outfit">
            Born from a Silent Crisis
          </h2>
          <p className="text-lg brand-text opacity-80 max-w-3xl mx-auto font-outfit leading-relaxed">
            Behind every caregiver is a story of love, sacrifice, and silent struggle.
            We understand because we've been there too.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Before */}
          <div className="glass-card p-8 text-center fade-in hover-scale group transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl font-medium brand-text mb-4 font-outfit group-hover:scale-105 transition-transform duration-300">Before</h3>
            <p className="brand-text opacity-70 text-sm font-outfit leading-relaxed group-hover:opacity-90 transition-opacity duration-300">
              Endless giving, invisible struggles, emotional exhaustion, and feeling lost in your own life.
            </p>
          </div>

          {/* Arrow through Nuvori */}
          <div className="flex flex-col items-center justify-center fade-in-delay relative group">
            <div className="flex items-center space-x-4 group-hover:scale-110 transition-transform duration-500">
              <div className="h-px bg-brand-text opacity-30 w-8 group-hover:opacity-60 transition-opacity duration-300"></div>
              <span className="font-light tracking-wide text-lg brand-text hover:scale-110 transition-transform duration-300 cursor-default" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuvori.</span>
              <div className="h-px bg-brand-text opacity-30 w-8 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <ArrowRight className="w-5 h-5 brand-text opacity-60 mt-2 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* After */}
          <div className="glass-card p-8 text-center fade-in hover-scale group transition-all duration-500 hover:shadow-2xl animate-fade-in">
            <h3 className="text-xl font-medium brand-text mb-4 font-outfit group-hover:scale-105 transition-transform duration-300">After</h3>
            <p className="brand-text opacity-70 text-sm font-outfit leading-relaxed group-hover:opacity-90 transition-opacity duration-300">
              Supported, understood, reconnected to yourself while still being the loving caregiver you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;