import { FolderKanban, Package, GitBranch, Boxes, BarChart2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    icon: FolderKanban,
    title: "Project & Cost Management",
    description: "Plan, track, and control project budgets and costs with precision. Real-time visibility into every rupee spent.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Package,
    title: "Procurement & Inventory",
    description: "Smart purchasing, vendor tracking, and real-time stock control. Never run out of critical materials again.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GitBranch,
    title: "Change Management",
    description: "Simplify change requests and orders with automatic tracking. Keep all stakeholders in the loop effortlessly.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Boxes,
    title: "Asset & Equipment",
    description: "Manage lifecycle, maintenance, depreciation, and locations. Complete visibility of your fixed assets.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart2,
    title: "Reporting & Analytics",
    description: "Real-time dashboards with S-Curves, utilization charts, and performance KPIs. Make data-driven decisions.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Users,
    title: "HR & Utilities",
    description: "Timesheets, payroll, and leave tracking integrated in one system. Streamline your workforce management.",
    color: "from-pink-500 to-rose-500",
  },
];

const Modules = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete ERP Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run your manufacturing business efficiently, all in one integrated platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 space-y-4">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${module.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{module.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;
