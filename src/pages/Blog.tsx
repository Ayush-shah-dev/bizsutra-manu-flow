import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways ERP Systems Transform Manufacturing Operations",
      excerpt: "Discover how modern ERP solutions help manufacturers streamline production, reduce costs, and improve quality. Learn from real-world examples of Indian manufacturing companies.",
      author: "Rahul Sharma",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Manufacturing"
    },
    {
      title: "Complete Guide to Procurement Automation for SMEs",
      excerpt: "Manual procurement processes costing you time and money? Learn how to automate purchase orders, vendor management, and approval workflows to save 40% on procurement time.",
      author: "Priya Patel",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "Procurement"
    },
    {
      title: "Inventory Management Best Practices for 2025",
      excerpt: "Reduce carrying costs and eliminate stockouts with smart inventory management. This comprehensive guide covers reorder points, ABC analysis, and demand forecasting techniques.",
      author: "Amit Kumar",
      date: "March 5, 2025",
      readTime: "12 min read",
      category: "Inventory"
    },
    {
      title: "How to Choose the Right ERP for Your Manufacturing Business",
      excerpt: "Not all ERP systems are created equal. Learn the key features to look for, questions to ask vendors, and how to calculate ROI before making this critical business decision.",
      author: "Sneha Reddy",
      date: "February 28, 2025",
      readTime: "15 min read",
      category: "Buying Guide"
    },
    {
      title: "Project Cost Overruns: Causes and Prevention Strategies",
      excerpt: "Manufacturing projects running over budget? Explore the top reasons for cost overruns and proven strategies to keep projects on track with real-time monitoring and control.",
      author: "Vikram Singh",
      date: "February 20, 2025",
      readTime: "9 min read",
      category: "Project Management"
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
              Bizsutra ERP Blog
            </h1>
            <p className="text-xl opacity-90">
              Insights, tips, and best practices for modern manufacturing management
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-muted-foreground">
              Get the latest manufacturing insights and ERP tips delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;