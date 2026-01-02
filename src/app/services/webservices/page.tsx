import React from 'react';
import HeroSection from '@/components/webservices/HeroSection';
import ProblemSection from '@/components/webservices/ProblemSection';
import SolutionSection from '@/components/webservices/SolutionSection';
import HierarchyVisualization from '@/components/webservices/HierarchyVisualization';
import DashboardTypes from '@/components/webservices/DashboardTypes';
import FeaturesComparison from '@/components/webservices/FeaturesComparison';
import PricingSection from '@/components/webservices/PricingSection';
import FAQSection from '@/components/webservices/FAQSection';
import CTASection from '@/components/webservices/CTASection';

export default function WebservicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Hierarchy Visualization */}
      <HierarchyVisualization />

      {/* Dashboard Types */}
      <DashboardTypes />

      {/* Features Comparison */}
      <FeaturesComparison />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
