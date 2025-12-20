"use client"
import React, { useState } from "react";
import { Target, Users, MapPin, Mail, Smartphone, Globe, X } from "lucide-react";
import DownloadButton from "@/components/DownloadButton";

export default function FromyfarmApp() {
      const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const features = [
    {
      icon: Smartphone,
      title: "Offline Functionality",
      description:
        "Works seamlessly offline, perfect for rural areas with limited connectivity",
    },
    {
      icon: Users,
      title: "Multi-User Platform",
      description:
        "Supports farmers, buyers, suppliers, and agents in one ecosystem",
    },
    {
      icon: Target,
      title: "Market Data Insights",
      description: "Real-time market trends and supply-demand analytics",
    },
    {
      icon: MapPin,
      title: "Location-Based Services",
      description:
        "Find nearby markets, suppliers, and agricultural services with GPS integration",
    },
    {
      icon: Mail,
      title: "Communication Hub",
      description:
        "Direct messaging between farmers, buyers, and agricultural experts",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description:
        "Available in local languages to serve diverse farming communities",
    },
  ];

  return (
    <div>
      {/* App Features Section */}
      <section className="container mx-auto px-6 py-20 ">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fromyfarm App Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools designed specifically for modern farmers and
            agricultural communities
          </p>
        </div>

        <div className=" ">
          <div className="flex">
            {/* Phone Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-left">
              <div className="relative">
                <img
                  src="/images/phones/iphonefmf.png"
                  alt="Fromyfarm App on Phone"
                  className="w-80 h-auto max-w-full"
                />
              </div>
            </div>

            {/* Scrollable Features List */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap- max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="container mx-auto px-6 py-10 flex justify-center ">
        <img
          src="/images/Dsitribution.jpg"
          alt="A chart showing the fromyfarm distribution network"
          className="w-3/6 h-auto object-cover rounded-lg shadow-lg cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        />
        {/* Image Preview Modal */}
        {typeof window !== "undefined" && isPreviewOpen && (
          <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full flex flex-col items-center">
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src="/images/Dsitribution.jpg"
            alt="Distribution Network Preview"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
          </div>
        )}
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download Fromyfarm and start your journey to agricultural success.
              Our tutorials will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row  justify-center items-center">
              <DownloadButton text="Download App"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
