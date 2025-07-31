
const HandwrittenFeatures = () => {
  const features = [
    {
      title: "Dyadic Mastery is in Our DNA",
      description: "Nuvori.'s 'Nuvi' is the only AI agent with true, ongoing dual-awareness—tracking and nurturing the full dynamic between caregiver and survivor.",
      detail: "Relational memory graph unique to Nuvori. No other system integrates the history, context, rituals, and rupture-points of a living caregiving relationship."
    },
    {
      title: "Evidence and Empathy—Lived First, Engineered Second",
      description: "Birthed from survivor–caregiver pain, refined through thousands of interviews, validated with real frontline users. We are the data moat.",
      detail: "Nuvori. encodes rituals, cultural nuance, caregiving milestones, and intimate relationship arcs no outside founder can simulate."
    },
    {
      title: "The Emotional OS Model—Uncopyable at Scale",
      description: "Modular 'helper agents' for every major caregiving scenario, orchestrated by Nuvi, the Core. No single-use app can match that flexibility.",
      detail: "Our OS learns quietly, respectfully—never intrusive. Industry-first relational AI designed for two lives at once, for reconnection and memory."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="font-caveat text-4xl md:text-5xl mb-8 text-center text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
        What Sets Nuvori. Apart—Now, and Always
      </h2>

      <div className="flex flex-wrap gap-8 justify-between">
        {features.map((feature, index) => {
          return (
            <article key={index} className="wobbly-card p-7 flex-1 min-w-64 mb-5">
              <h3 className="text-2xl font-patrick text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="mb-4 font-patrick text-lg">
                {feature.description}
              </p>
              <ul className="list-none">
                <li className="relative pl-7 mb-4 text-lg font-patrick">
                  <span className="absolute left-0 text-secondary text-xl">✓</span>
                  {feature.detail}
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HandwrittenFeatures;