import { FileSearch, Settings, GraduationCap, Headphones } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Requirement Analysis",
    description: "We understand your unique manufacturing needs and workflows",
  },
  {
    icon: Settings,
    title: "Setup & Customization",
    description: "Configure modules and features specific to your business",
  },
  {
    icon: GraduationCap,
    title: "Onboarding & Training",
    description: "Comprehensive training for your team to get started confidently",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    description: "24/7 dedicated support to ensure smooth operations",
  },
];

const Implementation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Implementation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From signup to full deployment in weeks, not months. We make it easy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                        isEven ? 'md:ml-auto' : 'md:mr-auto'
                      } max-w-md`}>
                        <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                    </div>

                    {/* Spacer for layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary to-accent text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Manufacturing Operations?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get started with a free demo and see Bizsutra ERP in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Book a Free Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Talk to Our Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
