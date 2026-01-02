"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
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
  ];

  return (
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
          {faqs.map((faq, idx) => (
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
  );
}
