import React from "react";
import HeroSection from "@/components/fromyfarm-app/HeroSection";
import UserTypes from "@/components/fromyfarm-app/UserTypes";
import AppScreens from "@/components/fromyfarm-app/AppScreens";
import Features from "@/components/fromyfarm-app/Features";
import HowItWorks from "@/components/fromyfarm-app/HowItWorks";
import DistributionNetwork from "@/components/fromyfarm-app/DistributionNetwork";
import CTASection from "@/components/fromyfarm-app/CTASection";

export default function FromyfarmApp() {
  return (
    <div>
      {/* Hero Section - App Overview */}
      <HeroSection />

      {/* Why Choose Fromyfarm */}
      {/* <WhyChoose /> */}

      {/* Who Is It For - User Types */}
      {/* <UserTypes /> */}
         {/* Distribution Network */}
      <DistributionNetwork />

      {/* App Screens Showcase */}
      <AppScreens />

      {/* Key Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

         {/* CTA Section with Tutorials Link */}
      <CTASection />
      
    </div>
  );
}
