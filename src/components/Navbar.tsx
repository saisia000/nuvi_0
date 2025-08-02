import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import nuvoriLogo from '@/assets/nuvori-logo.png';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNuviDropdownOpen, setIsNuviDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
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
            <img src={nuvoriLogo} alt="Nuvori." className="w-12 h-12" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {/* Nuvori Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center gap-1 text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsNuviDropdownOpen(!isNuviDropdownOpen)}
                >
                  Nuvori
                  <ChevronDown size={16} className={`transition-transform ${isNuviDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isNuviDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border-2 border-secondary rounded-lg shadow-lg z-50">
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/about-nuvi');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      About Nuvi
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/understanding-nuvori');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      Understanding Nuvi
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/talk-to-nuvi');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      Talk to Nuvi
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/nuvi-blueprint');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      Nuvi Blueprint
                    </button>
                    <div className="border-t border-secondary/20 my-1"></div>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/our-mission');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      Our Mission
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/what-we-believe');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      What We Believe
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/how-we-help-dyads');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      How We Help Dyads Thrive
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 transition-colors"
                      onClick={() => {
                        navigate('/our-vision');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      Our Vision
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-3 text-primary font-patrick hover:bg-secondary/20 rounded-b-lg transition-colors"
                      onClick={() => {
                        navigate('/founders-story');
                        setIsNuviDropdownOpen(false);
                      }}
                    >
                      Founder's Story
                    </button>
                  </div>
                )}
              </div>
              
              <button 
                className="text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                onClick={() => navigate('/community')}
              >
                Join the Dyad Bridge Community
              </button>
              
              <button 
                className="text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                onClick={() => navigate('/survey')}
              >
                Share Your Experience
              </button>
            </div>
            
            <button 
              className="wobbly-button px-6 py-2 text-primary font-patrick font-medium hover:bg-secondary/20 hover:scale-105 transition-all duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              Be a Founding Member
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
              <div className="space-y-2">
                <div className="px-3 py-1 text-primary font-patrick font-bold text-sm">Nuvori</div>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/about-nuvi');
                    setIsMenuOpen(false);
                  }}
                >
                  About Nuvi
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/understanding-nuvori');
                    setIsMenuOpen(false);
                  }}
                >
                  Understanding Nuvi
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/talk-to-nuvi');
                    setIsMenuOpen(false);
                  }}
                >
                  Talk to Nuvi
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/nuvi-blueprint');
                    setIsMenuOpen(false);
                  }}
                >
                  Nuvi Blueprint
                </button>
                <div className="border-t border-secondary/20 my-2 ml-2"></div>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/our-mission');
                    setIsMenuOpen(false);
                  }}
                >
                  Our Mission
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/what-we-believe');
                    setIsMenuOpen(false);
                  }}
                >
                  What We Believe
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/how-we-help-dyads');
                    setIsMenuOpen(false);
                  }}
                >
                  How We Help Dyads Thrive
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/our-vision');
                    setIsMenuOpen(false);
                  }}
                >
                  Our Vision
                </button>
                <button 
                  className="block w-full text-left text-primary font-patrick font-medium hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200 ml-2"
                  onClick={() => {
                    navigate('/founders-story');
                    setIsMenuOpen(false);
                  }}
                >
                  Founder's Story
                </button>
              </div>
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
              
              <button 
                className="block w-full text-left text-primary font-patrick font-medium text-lg hover:text-background hover:bg-primary px-3 py-2 rounded-lg transition-all duration-200"
                onClick={() => {
                  navigate('/survey');
                  setIsMenuOpen(false);
                }}
              >
                Share Your Experience
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
                Be a Founding Member
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    
    <SignupModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Be a Founding Member"
    />
  </>
  );
};

export default Navbar;
