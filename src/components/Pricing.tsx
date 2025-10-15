import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium ERP. SME Pricing.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Others charge ₹2,000–₹10,000 per user/month or lakhs annually. 
            We give you full enterprise features for a fraction of the cost.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Monthly Plan */}
          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">₹2,500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {["All modules included", "Unlimited users", "Cloud-based access", "Email support", "Regular updates"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Yearly Plan - Highlighted */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-2 border-primary shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                Save ₹6,000
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Yearly</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">₹2,000</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
                <p className="text-sm text-primary-foreground/70 mt-2">
                  Billed annually at ₹24,000/year
                </p>
              </div>
              
              <ul className="space-y-3">
                {["All modules included", "Unlimited users", "Cloud-based access", "Priority support", "Regular updates", "Free training sessions"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
                size="lg"
              >
                Start 14-Day Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Compare with Market</h3>
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-48 font-medium">Typical ERP Cost</div>
              <div className="flex-1 h-12 bg-destructive/20 rounded-lg relative overflow-hidden">
                <div 
                  className="h-full bg-destructive/60 rounded-lg flex items-center justify-end px-4 text-sm font-semibold transition-all duration-1000"
                  style={{ width: '80%' }}
                >
                  ₹60,000 - ₹5,00,000/year
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-48 font-medium">Bizsutra ERP</div>
              <div className="flex-1 h-12 bg-primary/20 rounded-lg relative overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-lg flex items-center justify-end px-4 text-sm font-semibold text-primary-foreground transition-all duration-1000"
                  style={{ width: '25%', transitionDelay: '300ms' }}
                >
                  ₹24,000/year
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <p className="text-2xl font-bold mb-4">
            Experience the simplicity and power of Bizsutra ERP
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Made in India for manufacturers. Try it free for 14 days.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
            Book a Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
