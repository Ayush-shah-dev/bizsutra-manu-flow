import Navigation from "@/components/Navigation";
import FeaturesSection from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Implementation from "@/components/Implementation";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <FeaturesSection />
        <Dashboard />
        <Implementation />
        <Footer />
      </div>
    </main>
  );
};

export default Features;
