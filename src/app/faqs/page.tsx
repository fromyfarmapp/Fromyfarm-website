"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Users, CreditCard, Smartphone, TrendingUp } from "lucide-react";

const faqData = [
  {
    category: "Payments",
    icon: CreditCard,
    questions: [
      {
        question: "How many payments does a Farmer have to make?",
        answer: "Farmers make two types of payments:\n• Annual payment: UGX 5,000 + VAT 18% = UGX 5,900\n• Advertising produce payment (every 30 days): UGX 5,000 + VAT 18% = UGX 5,900"
      },
      {
        question: "How many payments does a Buyer have to make?",
        answer: "Buyers make three types of payments:\n• Annual payment: UGX 10,000 + VAT 18% = UGX 11,800\n• Farmer contact details: UGX 5,000 + VAT 18% = UGX 5,900\n• Supplier contact details: UGX 5,000 + VAT 18% = UGX 5,900"
      },
      {
        question: "How many payments does a Supplier have to make?",
        answer: "Suppliers make two types of payments:\n• Annual payment: UGX 10,000 + VAT 18% = UGX 11,800\n• Advertising supplies payment (every 30 days): UGX 5,000 + VAT 18% = UGX 5,900"
      }
    ]
  },
  {
    category: "Bidding",
    icon: TrendingUp,
    questions: [
      {
        question: "As a buyer, how can I make a bid?",
        answer: "Follow these simple steps to make a bid:\n• Step 1: Tap the produce of interest\n• Step 2: Choose a farmer and tap the bid button\n• Step 3: Enter your price and amount needed\n• Step 4: Tap submit (farmer receives notification)"
      },
      {
        question: "What does \"Real-time sales by all farmers\" mean?",
        answer: "This feature displays successful bids made by other buyers with farmers selling the same produce. It helps you understand current market prices and trends for better decision-making."
      }
    ]
  },
  {
    category: "Software Updates",
    icon: Smartphone,
    questions: [
      {
        question: "How do I update the Fromyfarm app?",
        answer: "To update your Fromyfarm app:\n• Step 1: Tap Play Store icon on your device\n• Step 2: Search for \"fromyfarm\"\n• Step 3: Click \"update\" button when available"
      }
    ]
  }
];

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredData = selectedCategory === "all" 
    ? faqData 
    : faqData.filter(category => category.category.toLowerCase() === selectedCategory);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative  py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Find answers to common questions about Fromyfarm app features, payments, and how to get the most out of our platform.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`glass-button transition-all duration-300 ${
              selectedCategory === "all" 
                ? "bg-primary/20 text-primary border-primary/30" 
                : "hover:bg-white/10"
            }`}
          >
            All Categories
          </button>
          {faqData.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category.toLowerCase())}
                className={`glass-button flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.category.toLowerCase() 
                    ? "bg-primary/20 text-primary border-primary/30" 
                    : "hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.category}
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.category}
                className="glass-card animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category} FAQs</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemId = `${category.category}-${questionIndex}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <div
                        key={questionIndex}
                        className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        >
                          <span className="font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4 animate-fade-in">
                            <div className="border-t border-white/10 pt-4">
                              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="glass-card text-center max-w-2xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Can't find what you're looking for? Our support team is here to help you get the most out of Fromyfarm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256743101292"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button hover:bg-primary/10 transition-all duration-300"
            >
              Contact Support 
            </a>
            <a
              href="/tutorials"
              className="glass-button hover:bg-secondary/10 transition-all duration-300"
            >
              View Tutorials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}