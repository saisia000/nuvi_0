
const HandwrittenFeatures = () => {
  const features = [
    {
      title: "Hands-Off Relief",
      description: "Imagine waking up and seeing today's care routine already organized, reminders ready, and time made for you.",
      detail: "AI-powered automations handle the daily chores, reminders, and logistics—so your head and heart are freed for what matters."
    },
    {
      title: "Restore Real Connection",
      description: "No more feeling lost in checklists. Nuvori gently surfaces memories, shared traditions, and prompts for joy—helping you and your loved one rediscover the spark beyond \"just getting by.\"",
      detail: "Reignite family rituals and celebrate milestones, even in the toughest days."
    },
    {
      title: "You're Not Alone—Ever",
      description: "Step into a true community for caregivers and survivors, where kindness flows and stories are shared.",
      detail: "Find companionship, answers, and encouragement—all in one safe, private space."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="font-caveat text-4xl md:text-5xl mb-8 text-center text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
        How Nuvori Helps
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