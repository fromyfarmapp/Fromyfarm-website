"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AppScreens() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Map View",
      description: "Get a complete view of different districts and countries with farmers advertising farm produce. Locate farmers easily.",
      image: "/images/phones/fmf-map.png", 
    },
    {
      title: "Farmers Listings",
      description: "Discover and connect with farmers in a specific district. View their profiles, products, and ratings to make informed decisions.",
      image: "/images/phones/fmf-farm-list.png", 
    },
    {
      title: "Farmer Profile",
      description: "View detailed profiles of farmers including their produce, ratings and reviews to build trust.",
      image: "/images/phones/fmf-farm-del.png", 
    },
    {
      title: "Produce Listing & Details",
      description: "Easily browse through various farm produce to get detailed descriptions, prices, and farmer information.",
      image: "/images/phones/fmf-prod.png", 
    },
    {
      title: "Registration & Onboarding",
      description: "Quickly register and set up your account to start exploring and connecting with farmers, suppliers, and buyers.",
      image: "/images/phones/fmf-reg.png", 
    },
        {
      title: "Supplies Listing & Details",
      description: "Browse and purchase farming supplies with detailed information on each product and supplier.",
      image: "/images/phones/fmf-list-sup.png", 
    },
        {
      title: "Supplier Profile",
      description: "View detailed profiles of suppliers including their products, ratings and reviews to make informed purchasing decisions.",
      image: "/images/phones/fmf-sup-del.png", 
    },
  ];

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore the App
          </h2>
          <p className="text-xl text-muted-foreground">
            A snippet of Fromyfarm app  features and intuitive interface
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Screen Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={screens[currentScreen].image}
                    alt={screens[currentScreen].title}
                    className="w-80 h-auto max-w-full drop-shadow-2xl transition-all duration-500"
                  />
                </div>
              </div>

              {/* Screen Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {screens[currentScreen].title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {screens[currentScreen].description}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevScreen}
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label="Previous screen"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </button>

                  <div className="flex space-x-2">
                    {screens.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScreen(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentScreen
                            ? "w-8 bg-primary"
                            : "w-2 bg-primary/30 hover:bg-primary/50"
                        }`}
                        aria-label={`Go to screen ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextScreen}
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label="Next screen"
                  >
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </button>
                </div>

                {/* Screen Counter */}
                <p className="text-sm text-muted-foreground">
                  {currentScreen + 1} / {screens.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
