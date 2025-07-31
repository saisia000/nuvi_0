import { useState } from 'react';
import SignupModal from './SignupModal';

const HandwrittenHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="text-center p-10 mb-12 handwritten-card max-w-4xl mx-auto">
        <h1 className="font-caveat text-5xl md:text-6xl text-primary mb-4" style={{ textShadow: '1px 1px 1px #e5d4cb' }}>
          Nuvori.
        </h1>
        <h2 className="font-caveat text-3xl md:text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 1px #e5d4cb' }}>
          The world's first Emotional OS — bridging innovation and unmet human needs.
        </h2>

        <p className="text-xl italic max-w-2xl mx-auto mb-8 text-secondary-foreground font-patrick">
          For the first time ever, there's a system built not just for caregivers, or survivors, but for the sacred bond between them. Meet Nuvi—the only AI with true dual-awareness.
        </p>

        <button
          className="handwritten-button px-9 py-3 text-xl font-patrick"
          onClick={() => setIsModalOpen(true)}
        >
          Join the Waitlist
        </button>
      </section>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Be a Founding Member"
      />
    </>
  );
};

export default HandwrittenHero;