import { Cloud, FileText, RefreshCw, Database, BarChart3, Shield } from "lucide-react";

const features = [
  { icon: Cloud, label: "Cloud-based access" },
  { icon: BarChart3, label: "Custom report builder" },
  { icon: RefreshCw, label: "Change management" },
  { icon: FileText, label: "Document integration" },
  { icon: Database, label: "Powerful dashboards" },
  { icon: Shield, label: "Secure & reliable" },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Bizsutra?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bizsutra ERP is designed specifically for Indian manufacturers who want 
              enterprise-grade control without enterprise-level cost. Manage your projects, 
              procurement, inventory, assets, and finances — all in one seamless system.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-center">{feature.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="pt-8">
            <p className="text-lg font-medium text-primary">
              Built for manufacturing. Priced for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
