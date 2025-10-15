import Navigation from "@/components/Navigation";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Contact;
