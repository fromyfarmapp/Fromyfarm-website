import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#014921' }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-3 lg:px-3 text-center relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your
          <br />
          Agricultural Network?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join leading agricultural organizations using Fromyfarm's Admin Dashboards to drive efficiency and growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
            style={{ backgroundColor: '#F3E46F', color: '#014921' }}
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:fromyfarm@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
