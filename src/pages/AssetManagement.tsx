import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wrench, Calendar, DollarSign, MapPin, FileText } from "lucide-react";

const AssetManagement = () => {
  const features = [
    {
      icon: Wrench,
      title: "Equipment Lifecycle Tracking",
      description: "Track fixed assets from acquisition to disposal. Maintain complete history of purchases, transfers, maintenance, and depreciation."
    },
    {
      icon: Calendar,
      title: "Preventive Maintenance Scheduling",
      description: "Schedule and track maintenance activities to prevent breakdowns. Get automated reminders for routine servicing and inspections."
    },
    {
      icon: DollarSign,
      title: "Depreciation Management",
      description: "Calculate depreciation automatically using straight-line, written down value, or custom methods. Generate depreciation schedules for accounting."
    },
    {
      icon: MapPin,
      title: "Asset Location Tracking",
      description: "Track asset movements across departments, plants, and locations. Maintain custody records and transfer history for complete accountability."
    },
    {
      icon: FileText,
      title: "Warranty & Insurance Tracking",
      description: "Store warranty details, insurance policies, and renewal dates. Get alerts before warranties expire or policies need renewal."
    },
    {
      icon: CheckCircle,
      title: "AMC & Service Contract Management",
      description: "Manage annual maintenance contracts and service agreements. Track vendor performance, costs, and renewal schedules."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Complete Asset & Equipment Management
            </h1>
            <p className="text-xl opacity-90">
              Maximize asset uptime, reduce maintenance costs, and ensure compliance with comprehensive fixed asset and equipment management.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-featured Asset Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manage your valuable assets efficiently and cost-effectively
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                <Wrench className="h-24 w-24 text-primary/20" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Asset Maintenance Dashboard
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Increase Equipment Uptime by 35%
              </h2>
              <p className="text-muted-foreground text-lg">
                Preventive maintenance scheduling and tracking helps you avoid costly breakdowns and extend asset life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Automated maintenance schedules</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Complete asset history and documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Automatic depreciation calculation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Compliance-ready reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Feature Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fixed Equipment Depreciation Module
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A feature rarely found in mid-range ERPs! Our advanced depreciation module supports multiple methods, custom schedules, and automatic journal entries for seamless accounting integration.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold mb-2">Multiple Methods</h3>
                <p className="text-sm text-muted-foreground">SLM, WDV, or custom depreciation calculations</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold mb-2">Automatic Posting</h3>
                <p className="text-sm text-muted-foreground">Auto-generate accounting entries</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold mb-2">Compliance Ready</h3>
                <p className="text-sm text-muted-foreground">Meet statutory requirements effortlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Asset Investments
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start managing your equipment and fixed assets more effectively with Bizsutra ERP.
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

export default AssetManagement;