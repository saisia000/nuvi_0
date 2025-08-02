import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Survey = () => {
  useEffect(() => {
    // Load JotForm script when component mounts
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/252128489029059';
    script.async = true;
    
    script.onload = () => {
      console.log('JotForm loaded successfully');
    };
    
    script.onerror = () => {
      console.error('Failed to load JotForm');
    };
    
    document.head.appendChild(script);
    
    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header with back button */}
      <header className="border-b border-border/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Survey content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            🤍 Share Your Caregiving Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Your voice matters! Help us understand your caregiving experience to build better support for families like yours.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              ⏱️ Takes about 3-5 minutes • 🔒 Your responses are confidential • 💝 Helps improve support for caregivers
            </p>
          </div>
        </div>
        
        {/* JotForm container */}
        <div className="bg-card rounded-lg shadow-sm border p-6">
          <div id="jotform-container" className="min-h-[600px]">
            {/* JotForm will be loaded here */}
          </div>
        </div>
        
        {/* Additional encouragement */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Thank you for taking the time to share your experience with us. 🙏
          </p>
        </div>
      </main>
    </div>
  );
};

export default Survey;