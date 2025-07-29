import { useState, useEffect, useRef } from 'react';

const ImpactStoriesSection = () => {
  const [counters, setCounters] = useState({ careTasks: 0, memories: 0, dyads: 0, rating: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: "12.3M", label: "Care Tasks Managed", target: 12.3, suffix: "M" },
    { number: "7.9M", label: "Memories & Rituals Revived", target: 7.9, suffix: "M" },
    { number: "42.4K", label: "Dyads Supported", target: 42.4, suffix: "K" },
    { number: "4.8★", label: "1000+ Reviews", target: 4.8, suffix: "★" }
  ];

  const testimonials = [
    { quote: "I've forgotten what it feels like to be a wife. Now I'm just a scheduler, a nurse, a logistics machine.", source: "Caregiver (Survey)" },
    { quote: "There's no time to breathe, let alone process. I cry in the shower because it's the only moment I get alone.", source: "Mother caring for spouse with ALS (Conversation)" },
    { quote: "We talk all day, but not about anything real. Just meds, insurance, and appointments.", source: "Cancer survivor (Interview)" },
    { quote: "If there's something—anything that can help me be less of a robot and more of a human again, I want to try it.", source: "Caregiver (Conversation)" },
    { quote: "An assistant for the relationship, not just the disease? That's the kind of help no one else is offering.", source: "Spouse of dementia patient (Survey)" },
    { quote: "Just having someone remember my pain without me explaining it every time… that alone feels like magic.", source: "Survivor of long COVID (Interview)" },
    { quote: "You're the first person who asked what we need! Not just what the patient needs. That means more than you know.", source: "Partner of stroke survivor (Conversation)" },
    { quote: "This is the first time I feel like someone sees me...not just as a caregiver, but as a person with a heart and limits.", source: "Caregiver to parent (Interview)" },
    { quote: "It's like you put words to something I couldn't articulate. The weight of love shouldn't crush us.", source: "Wife of cancer survivor (Survey)" },
    { quote: "Thank you for thinking of me", source: "Husband of cancer survivor (Conversation)" }
  ];

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Reset animation on page refresh or when component unmounts and remounts
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && hasAnimated) {
        // Reset counters when page becomes visible again
        setCounters({ careTasks: 0, memories: 0, dyads: 0, rating: 0 });
        setHasAnimated(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [hasAnimated]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3); // Ease out animation

      setCounters({
        careTasks: Math.min(12.3, 12.3 * easeOut),
        memories: Math.min(7.9, 7.9 * easeOut),
        dyads: Math.min(42.4, 42.4 * easeOut),
        rating: Math.min(4.8, 4.8 * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ careTasks: 12.3, memories: 7.9, dyads: 42.4, rating: 4.8 });
      }
    }, stepTime);
  };

  const formatNumber = (value: number, suffix: string) => {
    if (suffix === "★") {
      return `${value.toFixed(1)}★`;
    } else if (suffix === "M") {
      return `${value.toFixed(1)}M`;
    } else {
      return `${value.toFixed(1)}K`;
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentTestimonialIndex + i) % testimonials.length;
      visible.push({ testimonial: testimonials[index], index });
    }
    return visible;
  };

  return (
    <section ref={sectionRef} className="wobbly-card p-8 bg-accent/20 mb-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-caveat text-4xl md:text-5xl text-primary mb-4">
          Real Voices From the Frontlines of Care
        </h2>
        <p className="font-patrick text-lg text-secondary-foreground max-w-4xl mx-auto leading-relaxed">
          We sent out surveys, hosted conversations, and interviewed over 2,000 caregivers and survivors of ages 25 to 65. These are their raw, unfiltered truths. Each one reflects the invisible weight of loving through illness, and the desperate need for support that sees both hearts in the dyad.
        </p>
      </div>

      {/* Testimonials Reel */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center min-h-[400px]">
          {getVisibleTestimonials().map((item, displayIndex) => (
            <div
              key={`${currentTestimonialIndex}-${displayIndex}`}
              className="sticky-note w-80 h-auto p-5 font-caveat text-lg leading-relaxed testimonial-slide-in"
              style={{
                transform: `rotate(${(displayIndex % 3 - 1) * 2}deg)`,
                animationDelay: `${displayIndex * 0.1}s`
              }}
            >
              <div className="mb-3">
                "{item.testimonial.quote}"
              </div>
              <div className="text-right font-patrick text-sm opacity-75">
                — {item.testimonial.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where We're Headed Section */}
      <div className="text-center">
        <h3 className="font-caveat text-3xl md:text-4xl text-primary mb-4">
          Where We're Headed
        </h3>
        <p className="font-patrick text-lg text-secondary-foreground mb-8 max-w-3xl mx-auto">
          Nuvori isn't just a product—it's a mission. Our north star guides us towards transformative outcomes:
        </p>

        <div className="flex justify-center flex-wrap gap-8">
          <div className="text-center">
            <div className="font-patrick text-lg text-primary max-w-48">
              <strong>Care Tasks:</strong> We aim to simplify the lives of 1M caregivers with streamlined management tools by 2027.
            </div>
          </div>
          <div className="text-center">
            <div className="font-patrick text-lg text-primary max-w-48">
              <strong>Memories:</strong> We want to help families preserve and create 10M meaningful moments by 2027.
            </div>
          </div>
          <div className="text-center">
            <div className="font-patrick text-lg text-primary max-w-48">
              <strong>Dyads:</strong> We're dedicated to supporting 500K caregiver and patient pairs in their journey together by 2027.
            </div>
          </div>
          <div className="text-center">
            <div className="font-patrick text-lg text-primary max-w-48">
              <strong>Experience:</strong> An exceptional experience we're committed to delivering and maintaining.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;