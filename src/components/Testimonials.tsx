import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Patel",
    role: "Operations Head",
    company: "MetalForm Industries",
    content: "Since using Bizsutra, our procurement time reduced by 40% and reporting accuracy improved dramatically. The S-curve analytics alone justify the investment.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    role: "Finance Manager",
    company: "Precision Components Ltd",
    content: "Finally, an ERP that doesn't require a PhD to operate. The cost tracking and budget reports are exactly what we needed without the enterprise complexity.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Plant Manager",
    company: "IndoTech Manufacturing",
    content: "Best decision we made this year. Real-time inventory visibility and automated change orders have transformed how we manage our production floor.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Manufacturers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what Indian manufacturers are saying about Bizsutra ERP
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
