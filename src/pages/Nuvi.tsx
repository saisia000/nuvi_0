import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';

const Nuvi = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="relative z-20">
        <Navbar />
        <div className="flex flex-col justify-between py-8 px-4">
          <main className="max-w-4xl mx-auto">
            
            {/* Mission Section */}
            <section className="handwritten-card p-7 mb-12">
              <h1 className="font-caveat text-5xl md:text-6xl text-primary mb-6 text-center" style={{ textShadow: '1px 1px 1px #e5d4cb' }}>
                Nuvi's Core Mission
              </h1>
              
              <div className="text-center mb-8">
                <p className="text-2xl font-patrick font-semibold text-secondary mb-4">
                  "Ensure emotional bonding, visibility, and comfort between caregiver–survivor dyads — across any condition — while offloading task burden through disease-specific AI helpers."
                </p>
                
                <p className="text-xl italic font-patrick text-secondary-foreground">
                  In plain English: Nuvi ensures that caregivers and survivors truly see each other — beyond tasks, roles, and routines — as whole, feeling humans. That sacred reconnection is Nuvi's mission.
                </p>
              </div>
            </section>

            <div className="hand-drawn-separator my-8"></div>

            {/* 2-Layer Architecture Section */}
            <section className="handwritten-card p-7 mb-12">
              <h2 className="font-caveat text-4xl mb-6 text-center text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                The Nuvi System: 2-Layer AI Architecture
              </h2>

              {/* Layer 1 */}
              <div className="mb-10">
                <h3 className="font-caveat text-3xl text-primary mb-4">
                  Layer 1: The Nuvi Agent (Human-AI Bridge)
                </h3>
                <p className="text-lg font-patrick mb-4">
                  Nuvi's job is universal. Disease-agnostic. Relationship-type agnostic. Its sole obsession = nurturing the emotional fabric of the dyad.
                </p>
                
                <h4 className="font-patrick text-xl font-semibold mb-4 text-secondary">Nuvi's Superpowers:</h4>
                <ul className="space-y-3 text-lg font-patrick ml-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    Detects emotional disconnection (withdrawal, avoidance, irritability, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    Deploys rituals, prompts, check-ins, and reconnection micro-tasks
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    Ensures that helper agent tasks don't just get done, but serve the bond
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    Validates, celebrates, de-escalates — all emotionally intelligent actions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    Automates bonding, not just admin
                  </li>
                </ul>
                
                <p className="text-xl font-patrick font-semibold text-center mt-6 italic">
                  Nuvi doesn't just suggest reconnection. Nuvi orchestrates and ensures it happens.
                </p>
              </div>

              {/* Layer 2 */}
              <div>
                <h3 className="font-caveat text-3xl text-primary mb-4">
                  Layer 2: Helper Agents (Condition-Specific Specialists)
                </h3>
                <p className="text-lg font-patrick mb-6">
                  These are the Ops Units under Nuvi's emotional command.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-primary/20 font-patrick">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-primary/20 p-3 text-left">Agent Name</th>
                        <th className="border border-primary/20 p-3 text-left">Disease Focus</th>
                        <th className="border border-primary/20 p-3 text-left">Example Tasks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-primary/20 p-3 font-semibold">Onco</td>
                        <td className="border border-primary/20 p-3">Cancer</td>
                        <td className="border border-primary/20 p-3">Chemo calendar, nutrition sync, fatigue tracker</td>
                      </tr>
                      <tr>
                        <td className="border border-primary/20 p-3 font-semibold">Neuro</td>
                        <td className="border border-primary/20 p-3">Dementia/Alz</td>
                        <td className="border border-primary/20 p-3">Safety alerts, memory reinforcement, routine reminders</td>
                      </tr>
                      <tr>
                        <td className="border border-primary/20 p-3 font-semibold">Cardio</td>
                        <td className="border border-primary/20 p-3">Heart disease</td>
                        <td className="border border-primary/20 p-3">Medication + vitals logs, risk prediction</td>
                      </tr>
                      <tr>
                        <td className="border border-primary/20 p-3 font-semibold">CareNav</td>
                        <td className="border border-primary/20 p-3">General elderly</td>
                        <td className="border border-primary/20 p-3">Paperwork, insurance, ADL checklists</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-lg font-patrick mt-4 italic text-center">
                  Each one is deeply embedded in the real-world pain points of its domain. They handle what needs to be done — but Nuvi makes sure it matters emotionally.
                </p>
              </div>
            </section>

            <div className="hand-drawn-separator my-8"></div>

            {/* How Nuvi Sees Section */}
            <section className="handwritten-card p-7 mb-12">
              <h2 className="font-caveat text-4xl mb-6 text-center text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                How Nuvi "Sees" the Dyad
              </h2>
              
              <p className="text-lg font-patrick mb-6 text-center">
                When we say "see each other," we're talking about something deep:
              </p>
              
              <ul className="space-y-3 text-lg font-patrick mb-8 ml-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  See the daily pain behind the mask
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  See the effort, not just the outcome
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  See the sacredness of being alive together, even in illness
                </li>
              </ul>
              
              <p className="text-lg font-patrick mb-6">And Nuvi reinforces this by:</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-patrick text-xl font-semibold mb-2 text-secondary">1. Creating Moments of Recognition</h4>
                  <p className="font-patrick italic">"Your partner did something brave today. Want to acknowledge it together?"</p>
                </div>
                
                <div>
                  <h4 className="font-patrick text-xl font-semibold mb-2 text-secondary">2. Orchestrating Emotional Reciprocity</h4>
                  <p className="font-patrick italic">"Yesterday you expressed feeling alone. They responded with warmth. Want to revisit that?"</p>
                </div>
                
                <div>
                  <h4 className="font-patrick text-xl font-semibold mb-2 text-secondary">3. Capturing Shared Micro-Memories</h4>
                  <p className="font-patrick italic">Nuvi stores and gently reminds dyads of what's good, real, and felt.</p>
                </div>
              </div>
            </section>

            <div className="hand-drawn-separator my-8"></div>

            {/* Systemic Automation Section */}
            <section className="handwritten-card p-7 mb-12">
              <h2 className="font-caveat text-4xl mb-6 text-center text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                Systemic Automation = No Scheduling BS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-patrick text-xl font-semibold mb-4 text-red-600">We're rejecting this broken model:</h3>
                  <ul className="space-y-3 font-patrick">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">❌</span>
                      "Oh you feel sad? Here's a link to a therapist. Good luck."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">❌</span>
                      "Let me remind you 17 times to talk to your partner."
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-patrick text-xl font-semibold mb-4 text-green-600">Instead, we're building this:</h3>
                  <ul className="space-y-3 font-patrick">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✅</span>
                      Nuvi coordinates helper agents to remove burden.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✅</span>
                      Then, it launches bonding rituals automatically.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✅</span>
                      It knows when emotional attention is needed — and ensures it happens.
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-2xl font-patrick font-semibold text-center text-primary">
                Nuvi doesn't ask for change. It initiates it.
              </p>
            </section>

            <div className="hand-drawn-separator my-8"></div>

            {/* Comparison Table */}
            <section className="handwritten-card p-7 mb-12">
              <h2 className="font-caveat text-4xl mb-6 text-center text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                Nuvi vs the World
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-primary/20 font-patrick">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-primary/20 p-3 text-left">Function</th>
                      <th className="border border-primary/20 p-3 text-left">Nuvi</th>
                      <th className="border border-primary/20 p-3 text-left">Other Systems</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-primary/20 p-3 font-semibold">Task Automation</td>
                      <td className="border border-primary/20 p-3">Delegates to specialist AI agents</td>
                      <td className="border border-primary/20 p-3">Often manual or half-automated</td>
                    </tr>
                    <tr>
                      <td className="border border-primary/20 p-3 font-semibold">Emotional Intelligence</td>
                      <td className="border border-primary/20 p-3">Core priority</td>
                      <td className="border border-primary/20 p-3">Add-on or absent</td>
                    </tr>
                    <tr>
                      <td className="border border-primary/20 p-3 font-semibold">Relationship Awareness</td>
                      <td className="border border-primary/20 p-3">Dyadic, contextual, lived</td>
                      <td className="border border-primary/20 p-3">Individual, symptom-based</td>
                    </tr>
                    <tr>
                      <td className="border border-primary/20 p-3 font-semibold">Disease Agnosticism</td>
                      <td className="border border-primary/20 p-3">Universal human layer</td>
                      <td className="border border-primary/20 p-3">Condition-specific only</td>
                    </tr>
                    <tr>
                      <td className="border border-primary/20 p-3 font-semibold">Execution Guarantee</td>
                      <td className="border border-primary/20 p-3">"Mission Accomplished" mindset</td>
                      <td className="border border-primary/20 p-3">Passive nudges, no follow-through</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </main>
          <HandwrittenFooter />
        </div>
      </div>
    </div>
  );
};

export default Nuvi;