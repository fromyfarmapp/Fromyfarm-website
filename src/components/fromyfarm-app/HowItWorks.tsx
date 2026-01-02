import React from "react";
import { Download, UserPlus, Network, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Download the App",
      description: "Get Fromyfarm from Google Play Store or Apple App Store. Free and quick to install.",
    },
    {
      icon: UserPlus,
      number: "02",
      title: "Create Your Profile",
      description: "Sign up and select your user type—Farmer, Buyer or Supplier Customize your profile.",
    },
    {
      icon: Network,
      number: "03",
      title: "Start Connecting",
      description: "Browse products, connect with other users, post listings, and start trading within your agricultural network.",
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Explore Tutorials",
      description: "Access step-by-step tutorials and guides to master advanced features and maximize your success.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-xl text-muted-foreground">
          Get started with Fromyfarm in just four simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="glass-card text-center relative z-10 hover:scale-105 transition-transform duration-300">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/10 mb-2">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
