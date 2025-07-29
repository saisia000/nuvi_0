import { useState } from 'react';
import SignupModal from './SignupModal';

const HandwrittenHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="text-center p-10 mb-12 handwritten-card max-w-4xl mx-auto">
        <h1 className="font-caveat text-5xl md:text-6xl text-primary mb-4" style={{ textShadow: '1px 1px 1px #e5d4cb' }}>
          Care for your loved ones. Revive your own life.
        </h1>

        <p className="text-xl italic max-w-2xl mx-auto mb-8 text-secondary-foreground font-patrick">
          Nuvori lifts the invisible weight—organizing care, reviving connection, and making you and your loved ones breathe, smile, and feel human again.
        </p>

        <button
          className="handwritten-button px-9 py-3 text-xl font-patrick"
          onClick={() => setIsModalOpen(true)}
        >
          Try Nuvori Early
        </button>
      </section>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Early Access"
      />
    </>
  );
};

export default HandwrittenHero;