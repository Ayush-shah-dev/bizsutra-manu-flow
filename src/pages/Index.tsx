import Hero from "@/components/Hero";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Dashboard from "@/components/Dashboard";
import Testimonials from "@/components/Testimonials";
import Implementation from "@/components/Implementation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Modules />
      <Features />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <Implementation />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
