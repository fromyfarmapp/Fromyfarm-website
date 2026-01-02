import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #014921 0%, #02632d 50%, #014921 100%)', backgroundSize: '200% 200%' }}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Manage Your Entire
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Agricultural Network
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Real-time visibility, comprehensive reporting, and powerful analytics for organizations managing 250+ farmers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#F3E46F', color: '#014921' }}
            >
              Schedule a Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#dashboards"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-lg font-semibold rounded-xl transition-all hover:bg-white/20 text-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48L60 40C120 32 240 16 360 16C480 16 600 32 720 37.3C840 43 960 37 1080 32C1200 27 1320 21 1380 18.7L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V48Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
