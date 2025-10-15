import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Transform Your Factory Operations
              </h2>
              <p className="text-xl opacity-90">
                Try Bizsutra ERP today and experience the difference
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Email us at</p>
                  <p className="font-semibold">sales@bizsutra.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Visit us at</p>
                  <p className="font-semibold">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold">14 Days</div>
                <div className="text-sm opacity-70">Free Demo</div>
              </div>
              <div>
                <div className="text-3xl font-bold">₹2,000</div>
                <div className="text-sm opacity-70">Per Month</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-70">Support</div>
              </div>
            </div>
          </div>

          {/* Right content - Contact form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
            
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Work Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Company Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 resize-none"
                />
              </div>

              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
                size="lg"
              >
                Send Request
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <p className="text-sm text-center mt-4 opacity-70">
              We'll respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
