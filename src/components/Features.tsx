import { TrendingUp, FileBarChart, GitCompare, Wrench, IndianRupee, Globe, HeadphonesIcon, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-time S-Curve Analytics",
    description: "Visual cost vs progress tracking that keeps projects on budget and on time",
  },
  {
    icon: FileBarChart,
    title: "Budget vs Actual Reports",
    description: "Instant procurement insights showing exactly where your money goes",
  },
  {
    icon: GitCompare,
    title: "Change Order Tracker",
    description: "Automated change management that eliminates paperwork and confusion",
  },
  {
    icon: Wrench,
    title: "Custom Report Builder",
    description: "Create any report you need without waiting for IT or developers",
  },
  {
    icon: FileBarChart,
    title: "Document Management",
    description: "Integrated DMS for drawings, files, and technical documentation",
  },
  {
    icon: IndianRupee,
    title: "Depreciation Module",
    description: "Fixed equipment depreciation tracking — rare in mid-range ERPs",
  },
  {
    icon: Globe,
    title: "Made for India",
    description: "Affordable cloud ERP specifically designed for Indian manufacturing",
  },
  {
    icon: HeadphonesIcon,
    title: "Local Support",
    description: "Simple onboarding with dedicated support in your timezone",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-4">
            <Zap className="h-4 w-4" />
            Unique Advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Features That Set Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise capabilities at SME pricing. Everything you'd expect from top-tier ERPs, 
            without the complexity or cost
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground font-semibold">
            Everything you need. Nothing you don't. At a price that makes sense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
