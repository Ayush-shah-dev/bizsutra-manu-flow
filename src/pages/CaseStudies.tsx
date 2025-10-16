import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, CheckCircle } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "MetalCraft Industries",
      industry: "Metal Fabrication",
      size: "150 employees",
      challenge: "Manual project tracking leading to cost overruns and delayed deliveries",
      solution: "Implemented Bizsutra ERP's Project & Cost Management module with real-time S-Curve tracking",
      results: [
        "40% reduction in project cost overruns",
        "30% improvement in on-time delivery",
        "Real-time visibility into project budgets",
        "Automated change order tracking"
      ],
      metrics: [
        { icon: DollarSign, label: "Cost Savings", value: "₹45 Lakhs/year" },
        { icon: Clock, label: "Time Saved", value: "200 hrs/month" },
        { icon: TrendingUp, label: "Efficiency Gain", value: "40%" }
      ]
    },
    {
      company: "AutoParts Manufacturing Ltd",
      industry: "Automotive Components",
      size: "300 employees",
      challenge: "Inefficient procurement process with multiple vendors and delayed approvals",
      solution: "Deployed Bizsutra ERP's Procurement & Vendor Management system with automated workflows",
      results: [
        "50% faster purchase order processing",
        "Better vendor negotiation with data analytics",
        "Eliminated maverick spending",
        "Complete procurement audit trail"
      ],
      metrics: [
        { icon: DollarSign, label: "Procurement Savings", value: "₹65 Lakhs/year" },
        { icon: Clock, label: "Cycle Time", value: "-60%" },
        { icon: TrendingUp, label: "Vendor Rating", value: "4.8/5" }
      ]
    },
    {
      company: "PlastiPack Solutions",
      industry: "Plastic Packaging",
      size: "120 employees",
      challenge: "Frequent stockouts and excess inventory leading to cash flow issues",
      solution: "Implemented Bizsutra ERP's Inventory Management with automated reorder alerts",
      results: [
        "Zero stockouts in 6 months",
        "25% reduction in inventory carrying costs",
        "Real-time stock visibility across warehouses",
        "Improved cash flow management"
      ],
      metrics: [
        { icon: DollarSign, label: "Working Capital", value: "₹35 Lakhs saved" },
        { icon: Clock, label: "Stock Turns", value: "+45%" },
        { icon: TrendingUp, label: "Service Level", value: "99.5%" }
      ]
    },
    {
      company: "TechMachine Tools",
      industry: "Industrial Machinery",
      size: "200 employees",
      challenge: "Poor equipment maintenance tracking causing frequent breakdowns and downtime",
      solution: "Rolled out Bizsutra ERP's Asset Management with preventive maintenance scheduling",
      results: [
        "35% increase in equipment uptime",
        "Automated maintenance scheduling",
        "Complete asset lifecycle tracking",
        "Reduced emergency repairs by 60%"
      ],
      metrics: [
        { icon: DollarSign, label: "Maintenance Costs", value: "-40%" },
        { icon: Clock, label: "Downtime", value: "-35%" },
        { icon: TrendingUp, label: "Equipment Life", value: "+25%" }
      ]
    },
    {
      company: "ChemProcess Industries",
      industry: "Chemical Manufacturing",
      size: "180 employees",
      challenge: "Lack of real-time reporting and analytics for decision making",
      solution: "Implemented Bizsutra ERP's Analytics & Reporting module with custom dashboards",
      results: [
        "Real-time KPI monitoring across all departments",
        "Custom reports built without IT help",
        "Data-driven decision making culture",
        "Improved forecasting accuracy"
      ],
      metrics: [
        { icon: DollarSign, label: "Better Planning", value: "₹28 Lakhs saved" },
        { icon: Clock, label: "Report Generation", value: "-80%" },
        { icon: TrendingUp, label: "Forecast Accuracy", value: "92%" }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Success Stories
            </h1>
            <p className="text-xl opacity-90">
              See how Indian manufacturers transformed their operations with Bizsutra ERP
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left Column - Company Info */}
                <div className="lg:col-span-1 bg-gradient-to-br from-primary/5 to-accent/5 p-8">
                  <h2 className="text-2xl font-bold mb-4">{study.company}</h2>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Industry:</span>
                      <span className="ml-2 font-semibold">{study.industry}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Company Size:</span>
                      <span className="ml-2 font-semibold">{study.size}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-8 space-y-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <metric.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                          <div className="font-bold">{metric.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Challenge & Solution */}
                <div className="lg:col-span-2 p-8">
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-destructive">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-primary">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">Results</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join these leading manufacturers and transform your operations with Bizsutra ERP
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

export default CaseStudies;