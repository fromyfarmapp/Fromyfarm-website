import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export default function PricingSection() {
  const requirements = [
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
  ];

  const pricingFactors = [
    'Specific features and integrations needed',
    'Level of support and training required'
  ];

  return (
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
                {requirements.map((req, idx) => (
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
                  {pricingFactors.map((item, idx) => (
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
  );
}
