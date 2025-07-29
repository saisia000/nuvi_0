import { Calendar, MessageCircle, Users } from 'lucide-react';

const HowNuvoriHelpsSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Lift the Logistical Weight",
      description: "Smart coordination, appointment management, and task organization that actually understands caregiving complexity."
    },
    {
      icon: MessageCircle,
      title: "Empathetic Emotional Support",
      description: "A compassionate AI companion that listens without judgment and helps you process the emotional weight of caregiving."
    },
    {
      icon: Users,
      title: "Foster Relational Reconnection",
      description: "Gentle guidance to help you maintain connections with loved ones and rediscover parts of yourself beyond caregiving."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-medium brand-text mb-6 font-outfit">
            How <span className="font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuvori.</span> Helps
          </h2>
          <p className="text-lg brand-text opacity-80 max-w-2xl mx-auto font-outfit leading-relaxed">
            AI-powered emotional health support designed specifically for the unique dynamics of caregiver-survivor relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center fade-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center glass-button rounded-full">
                <feature.icon className="w-10 h-10 brand-text opacity-70" />
              </div>
              <h3 className="text-xl font-medium brand-text mb-4 font-outfit">
                {feature.title}
              </h3>
              <p className="brand-text opacity-70 font-outfit leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowNuvoriHelpsSection;