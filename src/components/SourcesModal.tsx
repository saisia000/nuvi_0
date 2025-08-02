import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SurveyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen the survey
    const hasSeenSurvey = localStorage.getItem('hasSeenSurvey');
    
    if (!hasSeenSurvey) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      console.log('Modal opened, loading JotForm...');
      
      // Remove any existing scripts first
      const existingScript = document.querySelector('script[src*="jotform.com"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Create and append the JotForm script when modal opens
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://form.jotform.com/jsform/252128489029059';
      script.async = true;
      
      script.onload = () => {
        console.log('JotForm script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Failed to load JotForm script');
      };
      
      // Append to document head instead of container
      document.head.appendChild(script);
      
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!hasInteracted) {
      toast({
        title: "Survey Available",
        description: "You can always find the survey at the bottom of the page when you're ready to share your experience.",
        duration: 5000,
      });
    }
    
    setIsOpen(false);
    localStorage.setItem('hasSeenSurvey', 'true');
  };

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  const handleFillOut = () => {
    setHasInteracted(true);
    console.log('Fill out button clicked');
    
    // Check if form is loaded in modal first
    const formContainer = document.getElementById('jotform-modal-container');
    const formInModal = formContainer?.querySelector('form, iframe, .jotform-form');
    
    if (formInModal) {
      console.log('Form found in modal, scrolling to it');
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const firstInput = formContainer.querySelector('input, textarea, select');
        if (firstInput) {
          (firstInput as HTMLElement).focus();
        }
      }, 500);
    } else {
      console.log('Form not found in modal, closing and directing to bottom form');
      // Close modal and scroll to bottom form
      setIsOpen(false);
      localStorage.setItem('hasSeenSurvey', 'true');
      
      setTimeout(() => {
        const bottomForm = document.getElementById('jotform-container');
        if (bottomForm) {
          bottomForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      
      toast({
        title: "Survey Form",
        description: "Scrolling to the survey form below!",
        duration: 3000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-foreground">
            🤍 Share Your Caregiving Journey
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="py-4">
          <div className="text-center mb-6">
            <p className="text-lg text-muted-foreground mb-4">
              Your voice matters! Help us understand your caregiving experience to build better support for families like yours.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <p className="text-sm text-muted-foreground">
                ⏱️ Takes about 3-5 minutes • 🔒 Your responses are confidential • 💝 Helps improve support for caregivers
              </p>
            </div>
          </div>
          
          <div 
            id="jotform-modal-container" 
            className="min-h-[400px] bg-background rounded-lg"
            onClick={handleInteraction}
            onFocus={handleInteraction}
          >
            {/* JotForm will be loaded here */}
          </div>
          
          <div className="text-center mt-4">
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="mr-2"
            >
              Maybe Later
            </Button>
            <Button onClick={handleFillOut}>
              I'll Fill This Out
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyModal;
