"use client";

import { useState } from "react";
import { MapPin, Users, Globe, TrendingUp } from "lucide-react";

export default function StrategyPage() {
  const [activeTab, setActiveTab] = useState(0);
  
  const stages = [
    {
      number: 1,
      title: "Uganda",
      goal: "Activate ALL Ugandan farmers to join online commodities exchange",
      keyFact: "The Food and Agricultural Organisation (FAO.ORG) estimates Uganda's farm production can feed 200 million people",
      highlights: [
        "80% of Uganda's land is arable",
        "Only 35% is being cultivated", 
        "Uganda has nearly 50% of all the arable land in the East African Community countries.​ "
      ],
      icon: MapPin,
      color: "from-green-500 to-emerald-600",
      image: "/images/strategies/Stage_1.png"
    },
    {
      number: 2,
      title: "East African Community", 
      goal: "ALL East African Community (EAC) farmers to join the online fromyfarm commodities exchange  so that they can maximize their farm output and profitability",
      keyFact: "Total population of these 8 countries is over 300 million (3.7% of global population)",
      highlights: [
        "Uganda, Tanzania, Kenya",
        "Burundi, Rwanda, DR Congo",
        "South Sudan, Somalia"
      ],
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      image: "/images/strategies/Stage_2.png"
    },
    {
      number: 3,
      title: "Sub-Saharan Africa",
      goal: "Activate farmers in 46 Sub-Saharan countries", 
      keyFact: "t is estimated that Africa contains nearly 60% of the world’s uncultivated agricultural land.",
      highlights: [
        "46 Sub-Saharan African countries",
        "Massive untapped agricultural potential",
        "Africa can feed the entire world if all its arable land was productive"
      ],
      icon: Globe,
      color: "from-orange-500 to-red-600",
      image: "/images/strategies/Stage_3.png"
    },
    {
      number: 4,
      title: "Global Empowerment",
      goal: "Empower farmers worldwide to maximize profitability",
      keyFact: "Increased production and efficiencies through fromyfarm app",
      highlights: [
        "Worldwide farmer empowerment",
        "Maximum profitability focus", 
        "Production and efficiency optimization"
      ],
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-600",
      image: "/images/strategies/Stage_4.png-scaled.jpg"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Strategy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            The four stages of Global Community Impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Strategy Stages - Tabs */}
      <section className="container mx-auto px-6 py-3">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8  gap-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${stage.color} text-white shadow-lg scale-105`
                      : 'glass text-foreground hover:scale-105'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">Stage {stage.number}</span>
                  <span className="sm:hidden">{stage.number}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="glass-card animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={stages[activeTab].image}
                    alt={`Stage ${stages[activeTab].number}: ${stages[activeTab].title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                {/* Stage Header */}
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stages[activeTab].color} flex items-center justify-center text-white text-xl font-bold`}>
                    {stages[activeTab].number}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    {stages[activeTab].title}
                  </h2>
                </div>
                
                {/* Goal */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Goal:</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {stages[activeTab].goal}
                  </p>
                </div>

                {/* Key Fact */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Key Fact:</h3>
                  <p className="text-muted-foreground italic text-lg font-medium">
                    {stages[activeTab].keyFact}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Highlights:</h3>
                  <ul className="space-y-3">
                    {stages[activeTab].highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <span className="text-primary mr-3 font-bold text-lg">•</span>
                        <span className="text-muted-foreground text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}