import React from "react";
import DownloadButton from "@/components/DownloadButton";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Complete Agricultural
            <span className="text-primary"> Marketplace</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fromyfarm connects farmers, buyers, suppliers, and agents in one powerful mobile platform.
            Manage your farm, access real-time market prices, and grow your agricultural business—all from your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <DownloadButton text="Download App" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative">
            <img
              src="/images/phones/iphonefmf.png"
              alt="Fromyfarm App"
              className="w-96 h-auto max-w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
