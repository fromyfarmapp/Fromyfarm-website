"use client"
import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Bell, FileText, Network, Building2, Sprout, UserCheck, Eye, Zap, PieChart, Calendar, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Shield, Globe, Smartphone } from 'lucide-react';

export default function WebservicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
 
      {/* Hero Section with gradient animation */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #014921 0%, #02632d 50%, #014921 100%)', backgroundSize: '200% 200%' }}>
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            {/* <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="text-white/90 text-sm font-medium flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Trusted by 500+ Agricultural Organizations
              </span>
            </div> */}
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

      {/* Stats Bar */}
      {/* <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Farmers', value: '50K+', icon: Users },
              { label: 'Cooperatives', value: '200+', icon: Network },
              { label: 'Countries', value: '15+', icon: Globe },
              { label: 'Success Rate', value: '98%', icon: TrendingUp }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <stat.icon className="w-8 h-8 mx-auto mb-2 transition-transform group-hover:scale-110" style={{ color: '#014921' }} />
                <div className="text-3xl font-bold mb-1" style={{ color: '#014921' }}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Problem Section with cards */}
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
            {[
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
            ].map((item, idx) => (
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

      {/* Solution Section with improved layout */}
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
            {[
              { icon: Zap, title: "Real-Time Monitoring", description: "See activities as they happen across your network" },
              { icon: BarChart3, title: "Comprehensive Reporting", description: "Generate detailed reports on produce, payments, and performance" },
              { icon: Network, title: "Multi-Level Management", description: "Oversee partners, cooperatives, and farmer groups seamlessly" },
              { icon: Bell, title: "Smart Notifications", description: "Stay informed with intelligent alerts and updates" },
              { icon: PieChart, title: "Advanced Analytics", description: "Make data-driven decisions with powerful insights" },
              { icon: Calendar, title: "Strategic Planning", description: "Plan ahead with historical data and trend analysis" },
              { icon: Users, title: "User Management", description: "Control access and permissions across your organization" },
              { icon: FileText, title: "Export Capabilities", description: "Download reports in multiple formats for stakeholders" }
            ].map((feature, idx) => (
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

      {/* Hierarchy Visualization with modern design */}
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
                {[
                  "Cooperatives can exist independently or under a partner organization",
                  "Partners can manage other partners for larger organizational structures",
                  "Farmer groups receive the same dashboard capabilities as cooperatives",
                  "Each level maintains appropriate access and control over their network"
                ].map((point, idx) => (
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

      {/* Dashboard Types Section with enhanced cards */}
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
                    {[
                      'Organizations managing 2 or more cooperatives',
                      'Regional or national agricultural bodies',
                      'Large-scale agri-business operations'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#014921' }} />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced placeholder */}
                <div className="mb-8 rounded-xl  border-2 shadow-lg" >
           
                      <img src="/images/webservices/partner.png" alt="dashboard image"   />

                </div>


                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
                    <Eye className="w-5 h-5 mr-2" />
                    What you can monitor:
                  </h4>
                  <div className="space-y-3">
                    {[
                      'All cooperatives and branches under your organization',
                      'Total farmers across all cooperatives',
                      'All agents working within your network',
                      'Produce volumes and inventory across locations',
                      'Payment tracking and financial analytics',
                      'Network-wide notifications and alerts',
                      'Comprehensive reports and statistics'
                    ].map((item, idx) => (
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
                    {[
                      'Individual cooperatives managing 250+ farmers',
                      'Farmer groups seeking organizational support',
                      'Branches operating under partner organizations'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#014921' }} />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced placeholder */}
                <div className="mb-8 rounded-xl  border-2 shadow-lg" >
           
                      <img src="/images/webservices/coop.png" alt="dashboard image"   />
        
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#014921' }}>
                    <Eye className="w-5 h-5 mr-2" />
                    What you can monitor:
                  </h4>
                  <div className="space-y-3">
                    {[
                      'All farmers in your cooperative or group',
                      'Agents working with your farmers',
                      'Produce collection and inventory',
                      'Real-time activity notifications',
                      'Performance reports and analytics',
                      'Payment tracking and records',
                      'Operational statistics and trends'
                    ].map((item, idx) => (
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

      {/* Features Comparison with modern table */}
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
                  {[
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
                  ].map((row, idx) => (
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

      {/* Eligibility & Pricing with enhanced design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#F3E46F', color: '#014921' }}>
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
              Eligibility & Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing based on your organizational needs
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2" style={{ borderColor: '#BDF4DD' }}>
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#014921' }}>
                  <CheckCircle2 className="w-7 h-7 mr-3" />
                  Minimum Requirements
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      num: '1',
                      title: 'Manage 250+ Farmers',
                      desc: 'Your organization must oversee at least 250 farmers to qualify for dashboard access'
                    },
                    {
                      num: '2',
                      title: 'Active Operations',
                      desc: 'Regular agricultural activities and produce management'
                    }
                  ].map((req, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 shadow-md transition-transform group-hover:scale-110" style={{ backgroundColor: '#014921' }}>
                        <span className="text-white font-bold text-lg">{req.num}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-lg">{req.title}</p>
                        <p className="text-gray-600 leading-relaxed">{req.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t-2 pt-10" style={{ borderColor: '#BDF4DD' }}>
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#014921' }}>
                  <TrendingUp className="w-7 h-7 mr-3" />
                  Pricing Structure
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Dashboard pricing is <strong>customized based on your specific needs</strong> and the features required for your organization. Factors that influence pricing include:
                  </p>
                  <ul className="space-y-3 ml-6">
                    {[
                      // 'Number of cooperatives, branches, or farmer groups',
                      // 'Total farmers and agents in your network',
                      'Specific features and integrations needed',
                      'Level of support and training required'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 transition-transform group-hover:scale-150" style={{ backgroundColor: '#014921' }}></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-2" style={{ backgroundColor: '#F3E46F30', borderColor: '#F3E46F' }}>
                <p className="font-medium text-lg flex items-start" style={{ color: '#014921' }}>
                  <span className="text-2xl mr-3">💡</span>
                  <span>Each organization is unique. We'll work with you to create a pricing plan that fits your operational needs and budget.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with modern accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#BDF4DD', color: '#014921' }}>
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#014921' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can a cooperative operate independently without a partner?",
                a: "Yes! Cooperatives can operate completely independently using the Cooperative Dashboard. However, they can also choose to join a partner organization for additional support and resources."
              },
              {
                q: "What's the difference between a cooperative and a farmer group?",
                a: "Functionally, they receive the same dashboard capabilities. The term 'cooperative' typically refers to formally registered organizations, while 'farmer group' can refer to informal community groups. Both can use the Cooperative Dashboard if they meet the 250+ farmer requirement."
              },
              {
                q: "Can we manage farmers if we're under a partner organization?",
                a: "Absolutely! Cooperatives maintain full control over their own farmers and agents. The partner organization provides oversight and support, but day-to-day management remains with the cooperative."
              },
              {
                q: "What types of reports can we generate?",
                a: "You can generate comprehensive reports on produce volumes, farmer participation, agent activities, payment tracking, seasonal trends, and network performance. Reports are available in both real-time and periodic formats, exportable for stakeholder sharing."
              },
              {
                q: "How quickly can we get started?",
                a: "Once you contact our team, we'll schedule a consultation to understand your needs, provide a demo, and create a customized implementation plan. Most organizations are fully operational within 2-4 weeks."
              },
              {
                q: "Is training provided for the dashboard?",
                a: "Yes! We provide comprehensive onboarding and training for all dashboard users. This includes live sessions, documentation, and ongoing support to ensure your team can maximize the platform's capabilities."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden transition-all hover:shadow-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <div className="flex-shrink-0">
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-6 h-6 transition-transform" style={{ color: '#014921' }} />
                    ) : (
                      <ChevronDown className="w-6 h-6 transition-transform" style={{ color: '#014921' }} />
                    )}
                  </div>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-5 animate-fadeIn">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced gradient */}
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


    </div>
  );
}