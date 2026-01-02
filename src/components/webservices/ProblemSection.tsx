import React from 'react';
import { Eye, FileText, TrendingUp } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Eye,
      title: "Limited Visibility",
      description: "Difficult to track what's happening across cooperatives, branches, and farmer groups in real-time",
      color: '#FF6B6B'
    },
    {
      icon: FileText,
      title: "Fragmented Data",
      description: "Scattered information makes it hard to generate accurate reports and make informed decisions",
      color: '#4ECDC4'
    },
    {
      icon: TrendingUp,
      title: "Slow Response Times",
      description: "Without real-time insights, opportunities are missed and problems escalate before you can act",
      color: '#FFE66D'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#BDF4DD', color: '#014921' }}>
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
            The Challenge of Scaling Agricultural Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As your network grows beyond 250 farmers, managing operations across multiple locations becomes increasingly complex
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-opacity-0 transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: item.color }}></div>
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.color}20` }}>
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#014921' }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
