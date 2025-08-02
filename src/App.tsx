import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import RoleSelection from "./pages/RoleSelection";
import Investor from "./pages/Investor";
import Reviewer from "./pages/Reviewer";
import Press from "./pages/Press";
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
import ResearcherSelection from "./pages/ResearcherSelection";
import ClinicalResearcher from "./pages/ClinicalResearcher";
import EmotionalHealthResearcher from "./pages/EmotionalHealthResearcher";
import Product from "./pages/Product";
import ProfileSetup from "./pages/ProfileSetup";
import ResearchVerification from "./pages/ResearchVerification";
import Survey from "./pages/Survey";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/caregivers" element={<Landing />} />
          <Route path="/investor" element={<Investor />} />
          <Route path=
