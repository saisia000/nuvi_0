import { useState } from 'react';
import SignupModal from './SignupModal';

const HandwrittenCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleEarlyAccessClick = () => {
    setModalTitle('Get Early Access');
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
          Nuvori is made by and for real caregivers. No ads. No spam. Just safe, private support when you need it.
        </p>
        
        <div className="space-x-4">
          <button 
            className="handwritten-button px-9 py-3 text-xl font-patrick mr-3"
            onClick={handleEarlyAccessClick}
          >
            Get Early Access
          </button>
          <button 
            className="handwritten-button px-9 py-3 text-xl font-patrick"
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