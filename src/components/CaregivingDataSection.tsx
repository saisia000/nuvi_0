

const CaregivingDataSection = () => {
  return (
    <section className="mb-12">
      <div className="wobbly-card p-8 bg-accent/30">
        <div className="mb-6">
          <h2 className="font-caveat text-4xl text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            Your privacy and trust come first.
          </h2>
        </div>

        <div className="space-y-4 font-patrick text-lg">
          <p>
            Nuvori is committed to the highest standards of privacy, security, and respect for your personal information.
            Your stories, memories, and moments stay safe—always encrypted, never sold, and fully in your control.
          </p>

          <p className="text-secondary font-medium">
            Learn more about how we protect your data in our{' '}
            <a href="#" className="underline hover:no-underline transition-all">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaregivingDataSection;