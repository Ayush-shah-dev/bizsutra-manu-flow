import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, DollarSign, Calendar, Users, FileText } from "lucide-react";

const ProjectManagement = () => {
  const features = [
    {
      icon: Calendar,
      title: "Project Planning & Scheduling",
      description: "Create detailed project timelines with Gantt charts, milestones, and dependencies. Track progress against planned schedules in real-time."
    },
    {
      icon: DollarSign,
      title: "Budget Management & Cost Control",
      description: "Set project budgets, track expenses, and monitor cost vs. progress with S-Curve analysis. Get instant alerts on budget overruns."
    },
    {
      icon: TrendingUp,
      title: "Real-time Progress Tracking",
      description: "Monitor project completion with visual dashboards. Track tasks, deliverables, and percentage completion across all projects."
    },
    {
      icon: Users,
      title: "Resource Allocation",
      description: "Assign team members, equipment, and materials to projects. Optimize resource utilization across multiple concurrent projects."
    },
    {
      icon: FileText,
      title: "Change Order Management",
      description: "Track all project changes, approvals, and variations. Maintain complete audit trails of scope modifications and their impact on budget and timeline."
    },
    {
      icon: CheckCircle,
      title: "Multi-project Dashboard",
      description: "View all your projects in one place. Compare performance, identify bottlenecks, and make data-driven decisions."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Project & Cost Management
            </h1>
            <p className="text-xl opacity-90">
              Complete control over your manufacturing projects from planning to execution. Track budgets, schedules, and progress with powerful visual analytics.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Project Management Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage manufacturing projects efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S-Curve Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Visual Cost vs Progress Analytics
              </h2>
              <p className="text-muted-foreground text-lg">
                Track project performance with industry-standard S-Curve analysis. Instantly identify if projects are on track, over budget, or behind schedule.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Real-time cost accumulation tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Planned vs actual progress visualization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Early warning indicators for delays</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Export reports for stakeholders</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-24 w-24 text-primary/20" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                S-Curve: Cost vs Progress Tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join leading manufacturers who trust Bizsutra ERP for their project management needs.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Request Demo - ₹2,000/month
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectManagement;