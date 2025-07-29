import { Instagram, Youtube, Facebook, Linkedin, Twitter, MessageCircle, CircleIcon } from 'lucide-react';

const HandwrittenFooter = () => {
  return (
    <footer className="italic font-patrick bg-background text-primary p-5 text-center border-t-2 border-dashed border-secondary text-base mt-10">
      <div className="hand-drawn-separator mb-4"></div>

      <p className="mb-3">
        Multilingual, privacy-first, real people ready to help if you need us.
      </p>

      <p className="mb-4 text-sm opacity-90">
        "Care for your loved ones. But don't lose yourself in the process. We're here with you."
      </p>

      <div className="signature-note mb-6">
        <p className="text-sm font-caveat transform -rotate-1">
          Thank you for caring — The Nuvori Team <span className="text-pink-500 animate-pulse">♥</span>
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <a href="#" className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="flex items-center justify-center text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="Threads">
          <img src="/uploads/threads.png" alt="Threads" className="w-5 h-5 object-contain" />
        </a>
        <a href="#" className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="YouTube">
          <Youtube size={20} />
        </a>
        <a href="#" className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="X (Twitter)">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#" className="flex items-center justify-center text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="INSPIRED">
          <img src="/uploads/inspired.png" alt="INSPIRED" className="w-5 h-5 object-contain" />
        </a>
        <a href="#" className="flex items-center justify-center text-primary/70 hover:text-primary transition-colors transform hover:scale-110 duration-200" title="Reddit">
          <img src="/uploads/reddit.png" alt="Reddit" className="w-5 h-5 object-contain" />
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-xs opacity-70 mb-4">
        <a href="/privacy" className="hover:opacity-100 transition-opacity underline">
          Privacy Policy
        </a>
        <span>•</span>
        <a href="/terms" className="hover:opacity-100 transition-opacity underline">
          Terms and Conditions
        </a>
        <span>•</span>
        <a href="/consumer-data" className="hover:opacity-100 transition-opacity underline">
          Consumer Health Data
        </a>
      </div>

      <p className="text-xs opacity-60">
        © 2025 Nuvori. Built by caregivers and survivors. A Product of SANJEEVANIAI LLC.
      </p>
    </footer>
  );
};

export default HandwrittenFooter;