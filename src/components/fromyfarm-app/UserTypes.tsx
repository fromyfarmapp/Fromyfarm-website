import React from "react";
import { Sprout, ShoppingCart, Package, Users } from "lucide-react";

export default function UserTypes() {
  const userTypes = [
    {
      icon: Sprout,
      title: "Farmers",
      description: "Manage your crops, track harvests, access real-time market prices, and connect directly with buyers. Get insights on best planting practices and weather updates.",
      features: ["Crop management", "Market price alerts", "Direct buyer connections", "Weather forecasts"],
    },
    {
      icon: ShoppingCart,
      title: "Buyers & Traders",
      description: "Find quality produce from verified farmers, negotiate prices transparently, manage orders, and build lasting supplier relationships.",
      features: ["Browse fresh produce", "Price negotiation", "Order tracking", "Supplier ratings"],
    },
    {
      icon: Package,
      title: "Suppliers",
      description: "Offer farming inputs like seeds, fertilizers, and equipment. Reach thousands of farmers and grow your business with data-driven insights.",
      features: ["Product listings", "Farmer network access", "Sales analytics", "Inventory management"],
    },
    {
      icon: Users,
      title: "Agents",
      description: "Connect farmers with buyers and suppliers. Facilitate transactions, earn commissions, and become a vital link in the agricultural value chain.",
      features: ["Multi-party connections", "Commission tracking", "Transaction facilitation", "Network building"],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Who Is Fromyfarm For?
        </h2>
        <p className="text-xl text-muted-foreground">
          One platform serving the entire agricultural ecosystem
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {userTypes.map((userType, index) => {
          const Icon = userType.icon;
          return (
            <div
              key={index}
              className="glass-card group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{userType.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {userType.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <ul className="space-y-2">
                  {userType.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
