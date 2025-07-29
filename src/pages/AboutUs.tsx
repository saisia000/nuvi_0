import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 text-primary hover:text-primary-light"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-caveat text-5xl text-secondary mb-4" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            About Nuvori
          </h1>
          <p className="font-patrick text-xl text-primary max-w-2xl mx-auto">
            Born from love, built for caregivers, designed to restore the humanity in caring.
          </p>
        </div>

        {/* Our Mission */}
        <section className="handwritten-card p-8 mb-12">
          <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            Our Mission
          </h2>
          <div className="space-y-6 font-patrick text-primary">
            <p className="text-lg leading-relaxed">
              To relieve the immense logistical and emotional burden on caregiving dyads by empowering both partners—caregiver and survivor—with empathetic AI. Nuvi creates space for each person to reconnect with themselves, and, most importantly, with one another.
            </p>
          </div>
        </section>

        {/* What We Believe */}
        <section className="handwritten-card p-8 mb-12">
          <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            What We Believe
          </h2>
          <div className="space-y-8 font-patrick text-primary">
            <h3 className="font-caveat text-2xl text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              Caregiving as Love in Action
            </h3>
            <p className="text-lg leading-relaxed">
              Caregiving is one of the most profound expressions of human love and loyalty—but it can create distance and overwhelm when daily life becomes all logistics and management.
            </p>

            <h3 className="font-caveat text-2xl text-secondary" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              Partnership, Not Just Roles
            </h3>
            <p className="text-lg leading-relaxed">
              At Nuvori, we believe that real care is a shared journey—a true partnership. Nuvi is built to serve and restore the unique, evolving bond at the heart of every caregiving dyad, not just the individual roles on either side.
            </p>
          </div>
        </section>

        {/* How We Help Dyads Thrive */}
        <section className="handwritten-card p-8 mb-12">
          <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            How We Help Dyads Thrive
          </h2>
          <div className="space-y-6 font-patrick text-primary">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-xl">Automate complex care coordination</strong>
                  <p className="text-lg leading-relaxed mt-1">So both of you regain time and presence.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-xl">Provide emotional support and compassionate guidance</strong>
                  <p className="text-lg leading-relaxed mt-1">To both sides of the relationship—caregiver and survivor.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-xl">Spark meaningful moments and rituals</strong>
                  <p className="text-lg leading-relaxed mt-1">That rekindle your shared story.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-xl">Preserve and celebrate memories</strong>
                  <p className="text-lg leading-relaxed mt-1">You both cherish—and create space for new ones.</p>
                </div>
              </li>
            </ul>
            <p className="text-lg leading-relaxed italic text-center mt-8 p-4 bg-cream/20 rounded-lg">
              Our mission goes beyond efficiency—it's about preserving love, dignity, and the mutual humanity that defines every dyad.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section className="handwritten-card p-8 mb-12">
          <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            Our Vision
          </h2>
          <div className="space-y-6 font-patrick text-primary">
            <p className="text-lg leading-relaxed">
              We envision a world where technology—led by Nuvi—restores the emotional fabric of caregiving dyads, transforming relationships from a focus on survival to a celebration of shared connection, memory, and meaning.
            </p>

            <div className="mt-8">
              <h3 className="font-caveat text-3xl text-secondary mb-4" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                A Future Where Dyads Flourish
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                In this future, caregiving relationships are no longer reduced to to-do lists or daily stress. Instead, every dyad enjoys:
              </p>
              <div className="space-y-2 ml-4">
                <p className="text-lg leading-relaxed">
                  <strong>Moments of joy and meaning together,</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Memories cherished and built upon,</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>The support to be present as whole people</strong>—not just "giver" or "receiver."
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-caveat text-3xl text-secondary mb-4" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                Nuvi: Technology as a Dyad Companion
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                We're building Nuvi to understand and honor both partners. Our AI offers attuned, gentle support that feels genuinely helpful—not intrusive or overwhelming—enabling dyads to reclaim the closeness and trust that brought them together.
              </p>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong>Relationships Restored:</strong> Care partners rediscover the joys, rituals, and intimacy that make their connection unique and life-giving.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Both Sides Supported:</strong> Every member of a dyad is cared for—no one is left alone or unseen.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Memories Preserved:</strong> All the stories, photos, and quiet moments that define your life together become a living legacy.
                </p>
              </div>

              <p className="text-lg leading-relaxed mt-6">
                At Nuvori, we're not just building software. We're crafting a future where technology amplifies the bond at the heart of every care partnership, helping both people thrive—together.
              </p>

              <blockquote className="text-xl leading-relaxed italic text-center mt-8 p-6 bg-cream/30 rounded-lg border-l-4 border-secondary">
                "When caregiving feels like an expression of love, and every dyad can flourish, everyone wins."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="handwritten-card p-8 mb-12">
          <h2 className="font-caveat text-5xl text-secondary mb-8 text-center" style={{ textShadow: '2px 2px 0 #d6bfa3' }}>
            Founder's Story: The Night Nuvori Was Born
          </h2>
          <div className="space-y-6 font-patrick text-primary">
            <p className="text-lg leading-relaxed">
              No one plans to become a cancer survivor. Even fewer imagine how much it will reveal about the silent strength beside them — the ones who carry everything else, quietly.
            </p>

            <p className="text-lg leading-relaxed">
              My journey began in waiting rooms and fluorescent hospital lights. But it was in the hushed hours of the night that I came to understand the depth — and cost — of caregiving.
            </p>

            <p className="text-lg leading-relaxed">
              I remember one night in particular: 2:13 a.m. My ostomy pouch had sprung a leak, and I needed help. I reached for the one who had stood beside me through ER visits, chemo, radiation, and recovery after recovery. But they weren't there. I found them in the living room — not asleep, but overwhelmed. The stillness of their body couldn't hide the storm inside: the weight of spreadsheets, deadlines, bills, family responsibilities — all colliding with the exhaustion of care.
            </p>

            <p className="text-lg leading-relaxed">
              The person who had carried me through medical chaos now sat hollow-eyed — not from illness, but from invisibility. And yet, when I whispered for help, they didn't hesitate. They rose, tended to me with practiced gentleness, and held no complaint.
            </p>

            <p className="text-lg leading-relaxed">
              As they knelt beside me, I felt a surge of emotion so deep it shook me — a tangle of gratitude, shame, and helplessness. I remember whispering, "I'm sorry. Thank you." Because in that moment, I saw what the world didn't: that surviving hadn't been my journey alone. It had always been ours. I had simply been the one in the spotlight.
            </p>

            <p className="text-lg leading-relaxed">
              Everyone praised my inner strength through cancer. They called me "the Warrior."<br />
              But who saw the quiet devotion behind the warrior?<br />
              The hands that held me through it all. The presence that never left.<br />
              The soul carrying a second invisible battle — while the world watched only mine.
            </p>

            <p className="text-lg leading-relaxed">
              I wanted to care for the one who carried me.
            </p>

            <p className="text-lg leading-relaxed">
              We searched — through forums, self-help books, clinical research. We tried apps, tools, therapy when we could afford it. We joined groups. We downloaded trackers. We tried talking more, resting more, managing more.
            </p>

            <p className="text-lg leading-relaxed">
              But nothing spoke to us — not as individuals, but as a pair.
            </p>

            <p className="text-lg leading-relaxed">
              Nothing addressed the quiet distance growing between us. The rituals we'd abandoned. The laughter gone missing. The guilt we didn't know how to name.
            </p>

            {/* Pullout Quote */}
            <div className="my-12 p-8 bg-cream/30 rounded-lg border-l-4 border-secondary">
              <blockquote className="font-caveat text-2xl md:text-3xl text-secondary leading-relaxed italic text-center" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                Nuvori is here for every selfless caregiver out there —<br />
                the ones who give without asking,<br />
                who hold others up while quietly unraveling.<br />
                The ones the world forgets to thank.<br />
                The ones we never will.
              </blockquote>
              <br />
              <blockquote className="font-caveat text-2xl md:text-3xl text-secondary leading-relaxed italic text-center" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
                And Nuvori is here for every survivor —<br />
                the ones who've endured the unthinkable,<br />
                who've held onto their identity through pain, procedures, and fear.<br />
                The ones still finding their voice, their joy, their wholeness again.<br />
                The ones who aren't "done healing" just because treatment is over.
              </blockquote>
            </div>

            <p className="text-lg leading-relaxed">
              That sleepless night, curled up after another moment of crisis and apology, the seed for Nuvori was planted. I realized we didn't just need help — we needed something that understood both of us. Something to lighten the load, yes — but more importantly, something to help us find each other again. To restore the tiny, irreplaceable moments that illness tries to erase.
            </p>

            <p className="text-lg leading-relaxed">
              If nothing like that existed, I would build it.
            </p>

            <p className="text-lg leading-relaxed">
              Nuvori was born from a promise:<br />
              That no caregiving dyad should ever feel invisible.<br />
              That those walking the long arc of healing together should never lose their way back to one another.
            </p>

            <p className="text-lg leading-relaxed">
              So I began. I listened. I researched. I built. I poured relentless empathy into every pixel. Not for perfection — but for truth.
            </p>

            <p className="text-lg leading-relaxed">
              Our story is just one among thousands.<br />
              Nuvori exists for all of us who've walked that line between grace and guilt, exhaustion and devotion.<br />
              For every dyad navigating survival and care while trying to hold onto what makes them human.
            </p>

            <p className="text-lg leading-relaxed">
              Nuvori is not just software. It's a companion for the journey.<br />
              A quiet witness.<br />
              A gentle guide.<br />
              A space for both people in the dyad to be seen — fully, tenderly, and together.
            </p>

            <p className="text-lg leading-relaxed">
              Have you lived a dyad story like ours?<br />
              We'd be honored to hear it, hold it, and build Nuvori alongside you.<br />
              Share Your Story
            </p>

            <p className="text-lg leading-relaxed italic">
              Here, no one walks alone.<br />
              Here, every "us" matters.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="handwritten-card p-10 max-w-3xl mx-auto">
            <h2 className="font-caveat text-4xl text-secondary mb-6" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
              Share Your Story
            </h2>
            <p className="font-patrick text-xl text-primary mb-8 leading-relaxed">
              If you've lived a dyad story like ours… we want to hear it. Your journey matters, your love matters, and together we can build something that truly serves every caregiving partnership.
            </p>
            <button
              className="handwritten-button px-8 py-4 text-xl font-patrick"
              onClick={() => window.location.href = '/community'}
            >
              Share Your Story
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;