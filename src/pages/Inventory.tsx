import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, TrendingUp, AlertTriangle, MapPin, BarChart } from "lucide-react";

const Inventory = () => {
  const features = [
    {
      icon: Package,
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels across multiple warehouses in real-time. Get instant visibility into stock quantities, locations, and movements."
    },
    {
      icon: AlertTriangle,
      title: "Smart Reorder Alerts",
      description: "Set minimum stock levels and get automatic alerts when inventory runs low. Never run out of critical materials with intelligent reorder suggestions."
    },
    {
      icon: MapPin,
      title: "Multi-location Management",
      description: "Manage inventory across multiple warehouses, plants, and storage locations. Transfer stock between locations with complete tracking."
    },
    {
      icon: BarChart,
      title: "Inventory Valuation",
      description: "Track inventory value using FIFO, LIFO, or weighted average methods. Generate inventory valuation reports for accounting and compliance."
    },
    {
      icon: TrendingUp,
      title: "Consumption Analytics",
      description: "Analyze material consumption patterns and usage trends. Optimize inventory levels based on historical data and demand forecasting."
    },
    {
      icon: CheckCircle,
      title: "Barcode & Serial Tracking",
      description: "Use barcode scanning for fast and accurate stock movements. Track serialized items throughout their lifecycle from receipt to dispatch."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Intelligent Inventory Management
            </h1>
            <p className="text-xl opacity-90">
              Maintain optimal stock levels, reduce carrying costs, and never miss a sale due to stockouts. Complete visibility and control over your inventory.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Inventory Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage stock efficiently
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
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Reduce Inventory Costs by 25%
              </h2>
              <p className="text-muted-foreground text-lg">
                Optimize stock levels, reduce waste, and improve cash flow with data-driven inventory management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Eliminate stockouts and overstocking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Reduce dead stock with usage analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Automated stock reconciliation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Complete material traceability</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                <Package className="h-24 w-24 text-primary/20" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Real-time Inventory Dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Control of Your Inventory
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join manufacturers who improved their inventory management with Bizsutra ERP.
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

export default Inventory;