import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3, LineChart, PieChart, TrendingUp, FileSpreadsheet } from "lucide-react";

const Analytics = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Custom Report Builder",
      description: "Create your own reports without IT help. Drag-and-drop interface lets you build custom dashboards and reports tailored to your business needs."
    },
    {
      icon: LineChart,
      title: "Real-time Dashboards",
      description: "Monitor key metrics in real-time with interactive dashboards. Track KPIs across projects, procurement, inventory, and financials instantly."
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "Transform complex data into easy-to-understand charts and graphs. S-Curves, pie charts, bar graphs, and trend lines for better insights."
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis & Forecasting",
      description: "Identify patterns and predict future trends with historical data analysis. Make data-driven decisions with confidence."
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Integration",
      description: "Export any report to Excel for further analysis. Import data from spreadsheets and integrate with existing workflows."
    },
    {
      icon: CheckCircle,
      title: "Scheduled Reports",
      description: "Automate report generation and distribution. Schedule daily, weekly, or monthly reports to be emailed to stakeholders automatically."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Powerful Reporting & Analytics
            </h1>
            <p className="text-xl opacity-90">
              Turn your manufacturing data into actionable insights. Custom reports, real-time dashboards, and powerful analytics to drive better decisions.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Sample Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Analytics Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze and visualize your business data
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

      {/* Sample Reports Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              50+ Pre-built Reports
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start analyzing immediately with our comprehensive library of ready-to-use reports
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-3">Project Reports</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cost vs Progress S-Curve</li>
                <li>• Budget Utilization</li>
                <li>• Project Performance</li>
                <li>• Milestone Tracking</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-3">Procurement Reports</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• PO Analysis</li>
                <li>• Vendor Performance</li>
                <li>• Budget vs Actual</li>
                <li>• Pending Deliveries</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-3">Inventory Reports</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stock Summary</li>
                <li>• Consumption Analysis</li>
                <li>• Reorder Alerts</li>
                <li>• Stock Valuation</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-3">Asset Reports</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Asset Register</li>
                <li>• Depreciation Schedule</li>
                <li>• Maintenance History</li>
                <li>• AMC Renewals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Make Faster, Smarter Decisions
              </h2>
              <p className="text-muted-foreground text-lg">
                Access the insights you need, when you need them. No more waiting for IT to create reports.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Build custom reports in minutes, not days</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Real-time data for accurate decision making</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Share insights across your organization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Mobile-friendly dashboards for on-the-go access</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-primary/20" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Interactive Analytics Dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlock the Power of Your Data
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start making data-driven decisions with powerful analytics and reporting.
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

export default Analytics;