import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import ExpressParcel from "./pages/ExpressParcel";
import PartTruckload from "./pages/PartTruckload";
import FullTruckload from "./pages/FullTruckload";
import CrossBorder from "./pages/CrossBorder";
import SupplyChainSolutions from "./pages/SupplyChainSolutions";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import HealthcarePharma from "./pages/HealthcarePharma";
import Warehousing from "./pages/Warehousing";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/express-parcel" element={<ExpressParcel />} />
          <Route path="/services/part-truckload" element={<PartTruckload />} />
          <Route path="/services/full-truckload" element={<FullTruckload />} />
          <Route path="/services/cross-border" element={<CrossBorder />} />
          <Route path="/services/supply-chain-solutions" element={<SupplyChainSolutions />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
          <Route path="/solutions/ecommerce" element={<EcommerceSolutions />} />
          <Route path="/solutions/healthcare-pharma" element={<HealthcarePharma />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
