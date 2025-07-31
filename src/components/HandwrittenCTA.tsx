import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupModal from './SignupModal';

const HandwrittenCTA = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleDemoClick = () => {
    setModalTitle('Experience Nuvi Demo');
    setIsModalOpen(true);
  };

  const handleCommunityClick = () => {
    setModalTitle('Join the Dyad Bridge Community');
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="text-center mb-15">
        <h2 className="font-caveat text-4xl mb-4 text-primary" style={{ textShadow: '1px 1px 0 #f3e2cd' }}>
          Ready to stop surviving, and start living again?
        </h2>

        <p className="mb-2 font-bold font-patrick text-lg">
          No stress. No spam. Just care, restored.
        </p>

        <p className="mb-6 font-patrick text-base opacity-80 italic">
          Nuvori. is made by and for real caregivers. No ads. No spam. Just safe, private support when you need it.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <button
            className="handwritten-button px-6 py-3 text-lg font-patrick w-full relative"
            onClick={handleDemoClick}
          >
            <span className="absolute -top-2 -right-2 bg-secondary text-background text-xs px-2 py-1 rounded-full font-bold">Coming Soon</span>
            Experience Nuvi
          </button>
          <button
            className="handwritten-button px-6 py-3 text-lg font-patrick w-full"
            onClick={() => navigate('/chat')}
          >
            Talk to Nuvi
          </button>
          <button
            className="handwritten-button px-6 py-3 text-lg font-patrick w-full"
            onClick={handleCommunityClick}
          >
            Join Community Now
          </button>
        </div>
      </section>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </>
  );
};

export default HandwrittenCTA;