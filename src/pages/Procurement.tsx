import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingCart, FileCheck, BarChart3, Users2, Clock } from "lucide-react";

const Procurement = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Purchase Order Management",
      description: "Create, track, and manage purchase orders with approval workflows. Auto-generate POs from material requirements and get real-time status updates."
    },
    {
      icon: Users2,
      title: "Vendor Management",
      description: "Maintain comprehensive vendor database with performance ratings, payment terms, and contact details. Track vendor reliability and delivery performance."
    },
    {
      icon: FileCheck,
      title: "RFQ & Quotation Comparison",
      description: "Send RFQs to multiple vendors simultaneously. Compare quotations side-by-side with price, delivery time, and terms analysis."
    },
    {
      icon: BarChart3,
      title: "Budget vs Actual Tracking",
      description: "Monitor procurement spending against budgets in real-time. Visual dashboards show budget utilization and spending patterns across departments."
    },
    {
      icon: Clock,
      title: "Delivery Tracking",
      description: "Track expected vs actual delivery dates. Get automated alerts for delayed shipments and maintain complete delivery history."
    },
    {
      icon: CheckCircle,
      title: "Three-way Matching",
      description: "Automatically match purchase orders, goods receipts, and invoices. Prevent payment errors and ensure accurate vendor payments."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Smart Procurement Management
            </h1>
            <p className="text-xl opacity-90">
              Streamline your purchasing process from requisition to payment. Save time, reduce costs, and maintain complete control over procurement activities.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Procurement Solution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All the tools you need to manage purchasing efficiently
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
                <BarChart3 className="h-24 w-24 text-primary/20" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Budget Utilization Dashboard
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Reduce Procurement Costs by 30%
              </h2>
              <p className="text-muted-foreground text-lg">
                Our customers report significant cost savings through better vendor negotiation, bulk ordering, and reduced maverick spending.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Automated approval workflows save time</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Vendor performance tracking improves quality</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Budget alerts prevent overspending</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Complete audit trail for compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Streamline Your Procurement Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start managing your purchasing process more efficiently with Bizsutra ERP.
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

export default Procurement;