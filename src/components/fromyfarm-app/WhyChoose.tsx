import React from "react";
import { Check, Wifi, Smartphone, Globe, DollarSign } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: Globe,
      title: "Built for Africa",
      description: "Designed specifically for African farmers and agricultural communities with local language support",
    },
    {
      icon: Wifi,
      title: "Works Offline",
      description: "Full functionality even without internet connection—perfect for rural areas with limited connectivity",
    },
    {
      icon: Smartphone,
      title: "All-in-One Platform",
      description: "No need for multiple apps. Everything you need for farm management, trading, and communication in one place",
    },
    {
      icon: DollarSign,
      title: "Free to Use",
      description: "Access all core features at no cost. Empowering farmers without financial barriers",
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Fromyfarm?
          </h2>
          <p className="text-xl text-muted-foreground">
            More than just an app—a complete agricultural ecosystem designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="glass-card text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
