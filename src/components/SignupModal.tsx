import { useState } from 'react';
import { X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const SignupModal = ({ isOpen, onClose, title }: SignupModalProps) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
      onClose();
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="handwritten-card bg-background max-w-md w-full p-8 relative animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-secondary transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="font-caveat text-3xl text-secondary mb-2" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                {title}
              </h2>
              <p className="font-patrick text-primary">
                Join thousands of caregivers finding peace and support
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-patrick text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="handwritten-input w-full p-3 border-2 border-secondary/30 rounded-lg font-patrick text-primary bg-background focus:border-secondary focus:outline-none transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-patrick text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="handwritten-input w-full p-3 border-2 border-secondary/30 rounded-lg font-patrick text-primary bg-background focus:border-secondary focus:outline-none transition-colors"
                  placeholder="Enter your email..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="handwritten-button w-full py-3 text-xl font-patrick disabled:opacity-50"
                >
                  {isLoading ? 'Joining...' : 'Join Nuvori'}
                </button>
              </div>
            </form>

            {/* Footer note */}
            <div className="mt-6 text-center">
              <p className="font-patrick text-sm text-primary opacity-75 italic">
                No spam, ever. Just gentle support when you need it.
              </p>
            </div>
          </>
        ) : (
          /* Success state */
          <div className="text-center animate-fade-in">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="font-caveat text-3xl text-secondary mb-4" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              Welcome to Nuvori!
            </h2>
            <p className="font-patrick text-primary mb-4">
              Thank you, {formData.name}! We'll be in touch soon with early access details.
            </p>
            <p className="font-patrick text-sm text-primary opacity-75 italic">
              You're not alone in this journey. We're here with you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;