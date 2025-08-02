import { useEffect } from 'react';

const SurveySection = () => {
  useEffect(() => {
    // Create and append the JotForm script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/252128489029059';
    script.async = true;
    
    // Find the container and append the script
    const container = document.getElementById('jotform-container');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Share Your Caregiving Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us understand your needs better by sharing your caregiving journey. 
            Your insights will help us build better support for families like yours.
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm border p-6">
          <div id="jotform-container" className="min-h-[400px]">
            {/* JotForm will be loaded here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;