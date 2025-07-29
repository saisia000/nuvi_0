import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mic, Video, Calendar, Heart, Users, Sparkles } from 'lucide-react';

const NuviIntroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMode, setChatMode] = useState<'text' | 'voice' | 'video'>('text');
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handlePromptClick = (prompt: string, response: string) => {
    setSelectedPrompt(response);
  };

  const prompts = [
    {
      icon: Calendar,
      text: "Help me organize my day.",
      response: "Of course. Want a gentle reminder for medication, a break, or something else? Let's set up your perfect routine together."
    },
    {
      icon: Heart,
      text: "I'm feeling overwhelmed.",
      response: "I hear you. That's a lot to carry. Want a tip for taking a breath, or would you like to talk it out with me for a minute?"
    },
    {
      icon: Sparkles,
      text: "Share a memory or ritual.",
      response: "Let's revisit a happy moment or start a new tradition. Have time for a quick story or would you like a prompt?"
    },
    {
      icon: Users,
      text: "Connect me with community.",
      response: "You're never alone here. Want to meet others who understand? I can show you our Dyad Bridge stories or help you join the community."
    }
  ];

  return (
    <>
      <section className="py-16 px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-caveat text-5xl text-secondary mb-8" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            Meet Nuvi, Your AI Companion
          </h2>

          {/* Floating Nuvi */}
          <div className="relative mb-8">
            <div
              className={`transition-transform duration-300 cursor-pointer ${isHovered ? 'scale-110' : 'scale-100'} inline-block`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsChatOpen(true)}
            >
              <img
                src="/uploads/nuvi.png"
                alt="Nuvi AI Companion - Click to chat"
                className="w-80 lg:w-96 mx-auto animate-float object-contain hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>

          {/* Brief Introduction */}
          <div className="max-w-3xl mx-auto">
            <div className="handwritten-card p-8">
              <p className="font-patrick text-primary text-lg lg:text-xl leading-relaxed mb-8">
                Nuvi isn't just another chatbot—she's your gentle, responsive AI companion designed specifically to support caregiving dyads with warmth, empathy, and understanding for your unique journey.
              </p>

              <button
                onClick={() => setIsChatOpen(true)}
                className="handwritten-button text-lg px-8 py-3 font-patrick"
              >
                Start Talking to Nuvi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="max-w-md mx-auto bg-cream border-2 border-secondary">
          <DialogHeader>
            <DialogTitle className="font-caveat text-2xl text-primary text-center">
              Chat with Nuvi
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Mode Toggle */}
            <div className="flex justify-center gap-2 p-2 bg-background rounded-lg">
              <Button
                variant={chatMode === 'text' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setChatMode('text')}
                className="flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                Text
              </Button>
              <Button
                variant={chatMode === 'voice' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setChatMode('voice')}
                className="flex items-center gap-1"
              >
                <Mic className="w-4 h-4" />
                Voice
              </Button>
              <Button
                variant={chatMode === 'video' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setChatMode('video')}
                className="flex items-center gap-1"
              >
                <Video className="w-4 h-4" />
                Video
              </Button>
            </div>

            {/* Initial Message */}
            {!selectedPrompt && (
              <div className="bg-background p-4 rounded-lg border border-secondary/30">
                <p className="font-patrick text-primary text-center mb-4">
                  "Want to chat, say hi, or just smile? Nuvi's here for you."
                </p>
                <p className="font-patrick text-primary/70 text-sm text-center">
                  Tap to choose how you want to talk with Nuvi. You're always in control.
                </p>
              </div>
            )}

            {/* Prompt Buttons */}
            {!selectedPrompt && (
              <div className="space-y-2">
                {prompts.map((prompt, index) => {
                  const IconComponent = prompt.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-3 p-4 h-auto text-left font-patrick"
                      onClick={() => handlePromptClick(prompt.text, prompt.response)}
                    >
                      <IconComponent className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{prompt.text}</span>
                    </Button>
                  );
                })}
              </div>
            )}

            {/* Response Display */}
            {selectedPrompt && (
              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-secondary/30">
                  <p className="font-patrick text-primary">{selectedPrompt}</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedPrompt(null)}
                  className="w-full font-patrick"
                >
                  ← Back to options
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NuviIntroSection;