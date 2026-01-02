import React from 'react';
import { Zap, BarChart3, Network, Bell, PieChart, Calendar, Users, FileText } from 'lucide-react';

export default function SolutionSection() {
  const features = [
    { icon: Zap, title: "Real-Time Monitoring", description: "See activities as they happen across your network" },
    { icon: BarChart3, title: "Comprehensive Reporting", description: "Generate detailed reports on produce, payments, and performance" },
    { icon: Network, title: "Multi-Level Management", description: "Oversee partners, cooperatives, and farmer groups seamlessly" },
    { icon: Bell, title: "Smart Notifications", description: "Stay informed with intelligent alerts and updates" },
    { icon: PieChart, title: "Advanced Analytics", description: "Make data-driven decisions with powerful insights" },
    { icon: Calendar, title: "Strategic Planning", description: "Plan ahead with historical data and trend analysis" },
    { icon: Users, title: "User Management", description: "Control access and permissions across your organization" },
    { icon: FileText, title: "Export Capabilities", description: "Download reports in multiple formats for stakeholders" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#F3E46F', color: '#014921' }}>
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
            One Platform, Complete Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fromyfarm's Admin Dashboards give you the power to monitor, manage, and optimize your entire agricultural network from a single interface
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-xl bg-white border-2 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer" style={{ borderColor: '#BDF4DD' }}>
              <div className="inline-flex p-3 rounded-lg mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: '#BDF4DD' }}>
                <feature.icon className="w-6 h-6" style={{ color: '#014921' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#014921' }}>{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
