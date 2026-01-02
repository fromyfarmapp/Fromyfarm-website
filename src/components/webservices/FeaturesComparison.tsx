import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FeaturesComparison() {
  const features = [
    { feature: 'Real-Time Monitoring', partner: true, coop: true },
    { feature: 'Farmer Management', partner: true, coop: true },
    { feature: 'Agent Tracking', partner: true, coop: true },
    { feature: 'Produce Analytics', partner: true, coop: true },
    { feature: 'Payment Tracking', partner: true, coop: true },
    { feature: 'Notification System', partner: true, coop: true },
    { feature: 'Report Generation', partner: true, coop: true },
    { feature: 'Multi-Cooperative View', partner: true, coop: false },
    { feature: 'Partner Management', partner: true, coop: false },
    { feature: 'Network-Wide Analytics', partner: true, coop: false },
    { feature: 'Independent Operation', partner: true, coop: true },
    { feature: 'Farmer Group Support', partner: true, coop: true }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#BDF4DD', color: '#014921' }}>
            Feature Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
            Powerful Features for Every Dashboard
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: '#014921' }}>
                <tr>
                  <th className="px-6 py-5 text-left text-white font-bold text-lg">Feature</th>
                  <th className="px-6 py-5 text-center text-white font-bold text-lg">Partner Dashboard</th>
                  <th className="px-6 py-5 text-center text-white font-bold text-lg">Cooperative Dashboard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((row, idx) => (
                  <tr key={idx} className={`transition-colors ${idx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}`}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.partner ? (
                        <CheckCircle2 className="w-6 h-6 mx-auto" style={{ color: '#014921' }} />
                      ) : (
                        <span className="text-gray-300 text-2xl">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.coop ? (
                        <CheckCircle2 className="w-6 h-6 mx-auto" style={{ color: '#014921' }} />
                      ) : (
                        <span className="text-gray-300 text-2xl">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
