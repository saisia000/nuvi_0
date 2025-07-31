import { useState, useEffect } from 'react';
import { ArrowLeft, MessageCircle, Mic, Video, Calendar, Heart, Users, Sparkles, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useVoiceChat } from '@/hooks/useVoiceChat';

const NuviChat = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [chatMode, setChatMode] = useState<'text' | 'voice' | 'video'>('text');
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const {
    startVoiceChat,
    endVoiceChat,
    isConnected,
    isSpeaking,
    status
  } = useVoiceChat();

  useEffect(() => {
    // Cleanup voice chat when component unmounts
    return () => {
      if (isConnected) {
        endVoiceChat();
      }
    };
  }, [isConnected, endVoiceChat]);

  const handleVoiceModeToggle = async () => {
    if (chatMode === 'voice' && isConnected) {
      await endVoiceChat();
    } else if (chatMode === 'voice' && !isConnected) {
      await startVoiceChat();
    }
  };

  const handleModeChange = async (mode: 'text' | 'voice' | 'video') => {
    // End voice chat if switching away from voice mode
    if (chatMode === 'voice' && mode !== 'voice' && isConnected) {
      await endVoiceChat();
    }

    setChatMode(mode);

    // Start voice chat if switching to voice mode
    if (mode === 'voice') {
      await startVoiceChat();
    }
  };

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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 font-patrick"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-caveat text-5xl text-secondary mb-8" style={{ textShadow: '1px 1px 0 #d6bfa3' }}>
            Meet Nuvi, Your AI Companion
          </h1>

          {/* Floating Nuvi with Audio */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8">
            <div
              className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="/uploads/nuvi.png"
                alt="Nuvi AI Companion"
                className="w-64 lg:w-72 animate-float object-contain hover:brightness-110 transition-all duration-300"
              />
            </div>

            {/* Audio Player */}
            <div className="handwritten-card p-6 max-w-sm">
              <h3 className="font-caveat text-2xl text-secondary mb-4 text-center">About Nuvi Podcast</h3>
              <audio controls className="w-full mb-3">
                <source src="/uploads/About_Nuvi_podcast.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm font-patrick text-secondary-foreground/80 text-center italic">
                Discover Nuvi's story
              </p>
            </div>
          </div>

          {/* Brief Introduction */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="handwritten-card p-8">
              <p className="font-patrick text-primary text-lg lg:text-xl leading-relaxed">
                Nuvi isn't just another chatbot—she's your gentle, responsive AI companion designed specifically to support caregiving dyads with warmth, empathy, and understanding for your unique journey.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-2xl mx-auto">
          <div className="handwritten-card p-8">
            <h2 className="font-caveat text-2xl text-primary text-center mb-6">
              Chat with Nuvi
            </h2>

            {/* Mode Toggle */}
            <div className="flex justify-center gap-2 p-2 bg-background rounded-lg mb-6">
              <Button
                variant={chatMode === 'text' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleModeChange('text')}
                className="flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                Text
              </Button>
              <Button
                variant={chatMode === 'voice' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleModeChange('voice')}
                className="flex items-center gap-1 relative"
              >
                {isConnected && isSpeaking ? (
                  <div className="w-4 h-4 relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
                    <Mic className="w-4 h-4 relative z-10" />
                  </div>
                ) : isConnected ? (
                  <Mic className="w-4 h-4 text-green-500" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
                Voice
                {isConnected && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                )}
              </Button>
              <Button
                variant={chatMode === 'video' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleModeChange('video')}
                className="flex items-center gap-1"
              >
                <Video className="w-4 h-4" />
                Video
              </Button>
            </div>

            {/* Voice Chat Status */}
            {chatMode === 'voice' && (
              <div className="bg-background p-4 rounded-lg border border-secondary/30 mb-6">
                <div className="flex items-center justify-center gap-3">
                  {isConnected ? (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-patrick text-primary text-sm">
                          {isSpeaking ? 'Nuvi is speaking...' : 'Listening... Speak to Nuvi'}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={endVoiceChat}
                        className="flex items-center gap-1"
                      >
                        <MicOff className="w-4 h-4" />
                        End Call
                      </Button>
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="font-patrick text-primary/70 text-sm mb-2">
                        Voice chat is {status === 'connecting' ? 'connecting...' : 'disconnected'}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={startVoiceChat}
                        className="flex items-center gap-1"
                      >
                        <Mic className="w-4 h-4" />
                        Start Voice Chat
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Initial Message */}
            {!selectedPrompt && (
              <div className="bg-background p-4 rounded-lg border border-secondary/30 mb-6">
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
              <div className="space-y-3">
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
        </div>


      </div>
    </div>
  );
};

export default NuviChat;