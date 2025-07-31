import Navbar from '@/components/Navbar';
import HandwrittenFooter from '@/components/HandwrittenFooter';
import NuviChat from '@/pages/NuviChat';

export default function TalkToNuvi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <NuviChat />
      </main>
      <HandwrittenFooter />
    </div>
  );
}
