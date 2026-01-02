import React from 'react';
import { Building2, Network, Users, Eye, Bell, CheckCircle2 } from 'lucide-react';

export default function DashboardTypes() {
  const partnerFeatures = [
    'Organizations managing 2 or more cooperatives',
    'Regional or national agricultural bodies',
    'Large-scale agri-business operations'
  ];

  const partnerMonitoring = [
    'All cooperatives and branches under your organization',
    'Total farmers across all cooperatives',
    'All agents working within your network',
    'Produce volumes and inventory across locations',
    'Payment tracking and financial analytics',
    'Network-wide notifications and alerts',
    'Comprehensive reports and statistics'
  ];

  const coopFeatures = [
    'Individual cooperatives managing 250+ farmers',
    'Farmer groups seeking organizational support',
    'Branches operating under partner organizations'
  ];

  const coopMonitoring = [
    'All farmers in your cooperative or group',
    'Agents working with your farmers',
    'Produce collection and inventory',
    'Real-time activity notifications',
    'Performance reports and analytics',
    'Payment tracking and records',
    'Operational statistics and trends'
  ];

  return (
    <section id="dashboards" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#014921', color: 'white' }}>
            Dashboard Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
            Choose Your Dashboard Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two powerful dashboard options designed for different organizational needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Partner Dashboard */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all hover:shadow-3xl hover:-translate-y-1" style={{ borderColor: '#014921' }}>
            <div className="p-8 relative overflow-hidden" style={{ backgroundColor: '#014921' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <Building2 className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Partner Dashboard</h3>
                <p className="text-white/90 text-lg">For organizations managing multiple cooperatives</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
                  <Users className="w-5 h-5 mr-2" />
                  Who is this for?
                </h4>
                <div className="space-y-3">
                  {partnerFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#014921' }} />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 rounded-xl border-2 shadow-lg">
                <img src="/images/webservices/partner.png" alt="Partner dashboard interface" />
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
                  <Eye className="w-5 h-5 mr-2" />
                  What you can monitor:
                </h4>
                <div className="space-y-3">
                  {partnerMonitoring.map((item, idx) => (
                    <div key={idx} className="flex items-center group">
                      <div className="w-2 h-2 rounded-full mr-3 transition-transform group-hover:scale-150" style={{ backgroundColor: '#014921' }}></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border-2" style={{ backgroundColor: '#F3E46F20', borderColor: '#F3E46F' }}>
                <p className="text-sm font-medium flex items-start" style={{ color: '#014921' }}>
                  <Bell className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Note:</strong> Partners can also manage other partner organizations for enterprise-level operations</span>
                </p>
              </div>
            </div>
          </div>

          {/* Cooperative Dashboard */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all hover:shadow-3xl hover:-translate-y-1" style={{ borderColor: '#F3E46F' }}>
            <div className="p-8 relative overflow-hidden" style={{ backgroundColor: '#F3E46F' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <Network className="w-16 h-16 mb-4" style={{ color: '#014921' }} />
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#014921' }}>Cooperative / Branch Dashboard</h3>
                <p className="text-lg" style={{ color: '#014921' }}>For independent cooperatives and farmer groups</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
                  <Users className="w-5 h-5 mr-2" />
                  Who is this for?
                </h4>
                <div className="space-y-3">
                  {coopFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#014921' }} />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 rounded-xl border-2 shadow-lg">
                <img src="/images/webservices/coop.png" alt="Cooperative dashboard interface" />
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
                  <Eye className="w-5 h-5 mr-2" />
                  What you can monitor:
                </h4>
                <div className="space-y-3">
                  {coopMonitoring.map((item, idx) => (
                    <div key={idx} className="flex items-center group">
                      <div className="w-2 h-2 rounded-full mr-3 transition-transform group-hover:scale-150" style={{ backgroundColor: '#014921' }}></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border-2" style={{ backgroundColor: '#BDF4DD50', borderColor: '#BDF4DD' }}>
                <p className="text-sm font-medium flex items-start" style={{ color: '#014921' }}>
                  <Network className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Flexible Structure:</strong> Operate independently or choose to work under a partner organization for additional support and resources</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
