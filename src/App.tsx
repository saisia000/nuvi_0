import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ConsumerData from "./pages/ConsumerData";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import NuviChat from "./pages/NuviChat";
import OurApproach from "./pages/OurApproach";
import OurMission from "./pages/OurMission";
import WhatWeBelieve from "./pages/WhatWeBelieve";
import HowWeHelpDyads from "./pages/HowWeHelpDyads";
import OurVision from "./pages/OurVision";
import FoundersStory from "./pages/FoundersStory";
import UnderstandingNuvori from "./pages/UnderstandingNuvori";
import AboutNuvi from "./pages/AboutNuvi";
import TalkToNuvi from "./pages/TalkToNuvi";
import NuviBlueprint from "./pages/NuviBlueprint";
import Survey from "./pages/Survey";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/chat" element={<NuviChat />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/consumer-data" element={<ConsumerData />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/what-we-believe" element={<WhatWeBelieve />} />
          <Route path="/how-we-help-dyads" element={<HowWeHelpDyads />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/founders-story" element={<FoundersStory />} />
          <Route path="/understanding-nuvori" element={<UnderstandingNuvori />} />
          <Route path="/about-nuvi" element={<AboutNuvi />} />
          <Route path="/talk-to-nuvi" element={<TalkToNuvi />} />
          <Route path="/nuvi-blueprint" element={<NuviBlueprint />} />
          <Route path="/survey" element={<Survey />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
