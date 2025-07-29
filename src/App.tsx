// src/App.tsx

import { Toaster } from "@/components/ui/toaster"; // Toast notifications (shadcn)
import { Toaster as Sonner } from "@/components/ui/sonner"; // Optional: Use one, not both
import { TooltipProvider } from "@/components/ui/tooltip"; // For nice tooltips
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // For caching, refetching
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ConsumerData from "./pages/ConsumerData";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import Profile from "./pages/Profile";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* If you're using Sonner instead of Toaster, comment out one of them */}
      {/* <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/consumer-data" element={<ConsumerData />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
