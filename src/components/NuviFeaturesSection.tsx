const NuviFeaturesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-caveat text-4xl text-secondary mb-12 text-center" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
          What Makes Nuvi Special
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="handwritten-card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">Empathetic Support</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Nuvi offers gentle guidance tailored to both caregiver and survivor needs
            </p>
          </div>

          <div className="handwritten-card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">24/7 Availability</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Always here when you need someone who understands
            </p>
          </div>

          <div className="handwritten-card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">Relationship-Focused</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Designed to strengthen the bond between care partners
            </p>
          </div>

          <div className="handwritten-card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">Organize & Automate</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Quietly manage care routines, reminders, and daily tasks so you can focus on your relationship, not just logistics
            </p>
          </div>

          <div className="handwritten-card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">Emotional Support & Nudges</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Offer kind check-ins, soothing encouragement, or gentle prompts to reflect, smile, or pause
            </p>
          </div>

          <div className="handwritten-card p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">Memory & Connection Prompts</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Suggest and celebrate rituals, shared stories, or "On This Day" memories to help dyads reconnect
            </p>
          </div>

          <div className="handwritten-card p-6 md:col-span-2">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <h4 className="font-patrick text-primary text-xl font-bold">Always On Your Terms</h4>
            </div>
            <p className="font-patrick text-primary text-lg">
              Interact via text, voice, or video—exactly as you choose, with clear privacy boundaries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuviFeaturesSection;