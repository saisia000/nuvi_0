import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SignupModal from '@/components/SignupModal';

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    setIsModalOpen(true);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-6 text-primary hover:text-primary-light"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-caveat text-5xl text-secondary mb-4" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              The Dyad Bridge Community
            </h1>
            <p className="font-patrick text-xl text-primary max-w-2xl mx-auto">
              Where caregivers find understanding, support, and the reminder that they're not alone.
            </p>
          </div>

          {/* What is the Dyad Bridge */}
          <section className="handwritten-card p-8 mb-12">
            <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              What is the Dyad Bridge?
            </h2>
            <div className="space-y-6 font-patrick text-primary">
              <p className="text-lg leading-relaxed">
                A "dyad" is the beautiful, unbreakable bond between caregiver and care recipient.
                The Dyad Bridge is our community space where these precious relationships are
                celebrated, supported, and strengthened.
              </p>
              <p className="text-lg leading-relaxed">
                Here, you'll find other caregivers who understand the unique joys and challenges
                of loving someone through illness, aging, or disability. This isn't just a support
                group—it's a bridge to a better way of caring.
              </p>
            </div>
          </section>

          {/* Community Features */}
          <section className="handwritten-card p-8 mb-12">
            <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              What You'll Find Here
            </h2>
            <div className="grid md:grid-cols-2 gap-8 font-patrick text-primary">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Real Stories, Real Support</h3>
                  <p>Share your journey and find comfort in stories from caregivers who truly understand.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">AI-Powered Insights</h3>
                  <p>Get early access to Nuvi, our AI companion that learns from community wisdom to better support your dyad.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Peer Connections</h3>
                  <p>Connect with caregivers facing similar challenges and celebrate victories together.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Practical Tools</h3>
                  <p>Early access to Nuvori features and beta testing opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="handwritten-card p-8 mb-12">
            <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              Our Community Values
            </h2>
            <div className="space-y-4 font-patrick text-primary">
              <div>
                <span><strong>Compassion First:</strong> Every story shared here comes from love.</span>
              </div>
              <div>
                <span><strong>No Judgment:</strong> We all do our best with what we have.</span>
              </div>
              <div>
                <span><strong>Privacy Respected:</strong> What's shared in confidence stays here.</span>
              </div>
              <div>
                <span><strong>Hope Shared:</strong> We lift each other up, always.</span>
              </div>
            </div>
          </section>

          {/* Join CTA */}
          <div className="text-center">
            <div className="handwritten-card p-8">
              <h3 className="font-caveat text-3xl text-secondary mb-4" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                Ready to Connect?
              </h3>
              <p className="font-patrick text-lg text-primary mb-6">
                Join thousands of caregivers who've found their community. No sales pitches,
                no spam—just real support from people who get it.
              </p>
              <button
                className="handwritten-button px-8 py-3 text-xl font-patrick"
                onClick={handleJoinCommunity}
              >
                Join the Community
              </button>
              <p className="font-patrick text-sm text-primary opacity-75 italic mt-4">
                Free to join, always will be.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Join the Dyad Bridge Community"
      />
    </>
  );
};

export default Community;