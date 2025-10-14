import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Bizsutra ERP
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-primary-foreground/90">
                The Smart ERP for Manufacturers
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              From procurement to production, finance to assets — manage everything in one seamless platform designed for Indian manufacturers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" /> Watch Video
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">99.9%</div>
                <div className="text-sm text-primary-foreground/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">24/7</div>
                <div className="text-sm text-primary-foreground/70">Support</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard preview */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-50 blur-xl animate-pulse"></div>
              
              {/* Mock dashboard interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-8 w-32 bg-white/20 rounded"></div>
                  <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="h-4 w-24 bg-white/30 rounded mb-2"></div>
                    <div className="h-8 w-16 bg-white/40 rounded"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="h-4 w-24 bg-white/30 rounded mb-2"></div>
                    <div className="h-8 w-16 bg-white/40 rounded"></div>
                  </div>
                </div>

                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm h-48 flex items-end justify-around">
                  {[60, 80, 45, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="bg-accent/60 rounded-t w-12 transition-all duration-1000"
                      style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
