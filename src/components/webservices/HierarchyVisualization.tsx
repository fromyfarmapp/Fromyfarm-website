import React from 'react';
import { Building2, Network, Users, UserCheck, Shield, CheckCircle2 } from 'lucide-react';

export default function HierarchyVisualization() {
  const keyPoints = [
    "Cooperatives can exist independently or under a partner organization",
    "Partners can manage other partners for larger organizational structures",
    "Farmer groups receive the same dashboard capabilities as cooperatives",
    "Each level maintains appropriate access and control over their network"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#BDF4DD', color: '#014921' }}>
            Network Structure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
            Understanding the Network Structure
          </h2>
          <p className="text-xl text-gray-600">
            Flexible hierarchy that adapts to your organizational structure
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col items-center space-y-8">
            {/* Partner Level */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-4 shadow-xl transition-transform group-hover:scale-110" style={{ backgroundColor: '#014921' }}>
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#014921' }}>Partner Organization</h3>
              <p className="text-gray-600">Manages 2+ cooperatives or branches</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#014921' }}></div>
            </div>

            {/* Cooperative Level */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
              {['Cooperative A', 'Cooperative B', 'Cooperative C'].map((coop, idx) => (
                <div key={idx} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl mb-4 shadow-lg transition-transform group-hover:scale-110" style={{ backgroundColor: '#F3E46F' }}>
                    <Network className="w-10 h-10" style={{ color: '#014921' }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#014921' }}>{coop}</h4>
                  <p className="text-sm text-gray-600">Branch/Farmer Group</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#014921' }}></div>
            </div>

            {/* Farmer/Agent Level */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
              {[Users, UserCheck, Users, UserCheck].map((Icon, idx) => (
                <div key={idx} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-3 shadow-md transition-transform group-hover:scale-110" style={{ backgroundColor: '#BDF4DD' }}>
                    <Icon className="w-8 h-8" style={{ color: '#014921' }} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#014921' }}>
                    {idx % 2 === 0 ? 'Farmers' : 'Agents'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl border-2" style={{ backgroundColor: '#F3E46F10', borderColor: '#F3E46F' }}>
            <h4 className="font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
              <Shield className="w-5 h-5 mr-2" />
              Key Points:
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: '#014921' }}>
              {keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start group">
                  <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
