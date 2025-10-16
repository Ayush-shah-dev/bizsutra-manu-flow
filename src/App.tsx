import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import ProjectManagement from "./pages/ProjectManagement";
import Procurement from "./pages/Procurement";
import Inventory from "./pages/Inventory";
import AssetManagement from "./pages/AssetManagement";
import Analytics from "./pages/Analytics";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
