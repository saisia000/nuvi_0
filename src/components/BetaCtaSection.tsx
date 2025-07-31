const BetaCtaSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-medium brand-text mb-6 font-outfit">
            <span className="font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuvori.</span> is currently in private beta
          </h2>

          <p className="text-lg brand-text opacity-80 mb-8 font-outfit leading-relaxed">
            We're building something truly special, with careful attention to every detail.
            Be among the first to experience this AI companion focused on emotional health for caregiver-survivor relationships.
          </p>

          <button className="glass-button px-10 py-4 rounded-full brand-text font-medium text-lg font-outfit hover:shadow-xl transition-all duration-300 mb-4">
            Be a Founding Member
          </button>

          <p className="text-sm brand-text opacity-60 font-outfit">
            Spaces are limited to ensure a high-quality, personalized experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaCtaSection;