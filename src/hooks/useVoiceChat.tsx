import { useCallback, useState } from 'react';
import { useConversation } from '@11labs/react';

const ELEVENLABS_API_KEY = 'sk_717f797d1d295af6a86411b06ce18722259f293ecffc9a58';

export const useVoiceChat = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log('Voice chat connected');
      setIsConnected(true);
    },
    onDisconnect: () => {
      console.log('Voice chat disconnected');
      setIsConnected(false);
      setConversationId(null);
    },
    onMessage: (message) => {
      console.log('Voice message:', message);
    },
    onError: (error) => {
      console.error('Voice chat error:', error);
    },
    overrides: {
      agent: {
        prompt: {
          prompt: `You are Nuvi, a gentle, empathetic AI companion designed specifically to support caregiving dyads. You should respond with warmth, understanding, and genuine care. Keep responses conversational and supportive, focusing on the emotional well-being of both caregivers and care recipients. Be a good listener and offer practical, gentle suggestions when appropriate.`
        },
        firstMessage: "Ta-da....! Nuvi reporting for duty. I've got a heart full of stickers and a pocket full of 'you got this!' Whether you're feeling 'meh', 'blah', or just need a virtual hug — I've got a soft spot just for you, {{user_name}}. Let's make today a little lighter, one smile at a time!",
        language: "en",
      },
      tts: {
        voiceId: "EXAVITQu4vr4xnSDxMaL"
      }
    }
  });

  const startVoiceChat = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      console.log('Starting voice chat with ElevenLabs...');

      // For now, we'll use a public agent or direct connection
      // In production, you should create a custom agent in ElevenLabs dashboard
      // Try to start conversation - you need to create an agent in ElevenLabs dashboard
      // and replace "your-agent-id" with your actual agent ID
      const id = await conversation.startSession({
        agentId: "agent_1801k1f31jezfhvbswgq89g5ns1y"
      });
      setConversationId(id);

    } catch (error) {
      console.error('Failed to start voice chat:', error);
      // Don't set connected state on error
    }
  }, [conversation]);

  const endVoiceChat = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error('Failed to end voice chat:', error);
    }
    setIsConnected(false);
    setConversationId(null);
  }, [conversation]);

  const setVolume = useCallback(async (volume: number) => {
    try {
      await conversation.setVolume({ volume });
    } catch (error) {
      console.error('Failed to set volume:', error);
    }
  }, [conversation]);

  return {
    startVoiceChat,
    endVoiceChat,
    setVolume,
    isConnected,
    conversationId,
    isSpeaking: conversation.isSpeaking,
    status: conversation.status
  };
};