import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Dashboards & Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions with real-time insights and beautiful visualizations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Metric cards */}
          <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cost vs Progress</p>
                <p className="text-2xl font-bold">S-Curve Analytics</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Procurement</p>
                <p className="text-2xl font-bold">Budget Utilization</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tasks</p>
                <p className="text-2xl font-bold">Completion Rate</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main dashboard visualization */}
        <Card className="p-8 border-2 animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* S-Curve Chart */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cost vs Progress S-Curve</h3>
              <div className="h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 relative overflow-hidden">
                {/* Simulated S-curve */}
                <svg viewBox="0 0 300 200" className="w-full h-full">
                  <path
                    d="M 10 180 Q 50 150, 100 100 T 290 20"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    className="animate-fade-in"
                  />
                  <path
                    d="M 10 190 Q 60 165, 110 115 T 290 40"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-fade-in"
                    style={{ animationDelay: '300ms' }}
                  />
                </svg>
                <div className="absolute bottom-4 left-4 flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-primary"></div>
                    <span>Actual Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-accent border-dashed"></div>
                    <span>Planned</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Budget Utilization</h3>
              <div className="h-64 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Simulated pie chart */}
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="20"
                      strokeDasharray="188 63"
                      className="transition-all duration-1000"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="20"
                      strokeDasharray="63 188"
                      strokeDashoffset="-188"
                      className="transition-all duration-1000"
                      style={{ transitionDelay: '300ms' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">75%</div>
                      <div className="text-xs text-muted-foreground">Utilized</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Used (75%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span>Available (25%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t">
            {[
              { label: "Projects Active", value: "24" },
              { label: "Invoices Processed", value: "1,247" },
              { label: "Assets Tracked", value: "386" },
              { label: "Reports Generated", value: "892" },
            ].map((metric, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
