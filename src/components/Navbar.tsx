import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import nuvoriLogo from '@/assets/nuvori-logo.png';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b-2 border-dashed border-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={nuvoriLogo} alt="Nuvori" className="w-12 h-12" />
              <h1 className="text-3xl font-caveat text-primary tracking-wide font-bold">Nuvori.</h1>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <button
                  className="text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => navigate('/about')}
                >
                  About Us
                </button>

                <button
                  className="text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => navigate('/community')}
                >
                  Join the Dyad Bridge Community
                </button>
              </div>

              <button
                className="wobbly-button px-6 py-2 text-primary font-patrick font-medium hover:bg-secondary/20 hover:scale-105 transition-all duration-200"
                onClick={() => setIsModalOpen(true)}
              >
                Get Early Access
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary hover:text-background hover:bg-primary rounded-lg transition-all duration-200 transform hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-2 border-secondary rounded-xl mt-2 p-6 space-y-6">
              <div className="space-y-4">
                <button
                  className="block w-full text-left text-primary font-patrick font-medium text-lg hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200"
                  onClick={() => {
                    navigate('/about');
                    setIsMenuOpen(false);
                  }}
                >
                  About Us
                </button>
              </div>

              <div className="space-y-4">
                <button
                  className="block w-full text-left text-primary font-patrick font-medium text-lg hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200"
                  onClick={() => {
                    navigate('/community');
                    setIsMenuOpen(false);
                  }}
                >
                  Join the Dyad Bridge Community
                </button>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-secondary">
                <button
                  className="w-full wobbly-button px-6 py-3 text-primary font-patrick font-medium hover:bg-secondary/20 hover:scale-105 transition-all duration-200"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Get Early Access
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Early Access"
      />
    </>
  );
};

export default Navbar;