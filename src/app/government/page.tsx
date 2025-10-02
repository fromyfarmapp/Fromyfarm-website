"use client";

import DownloadButton from "@/components/DownloadButton";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function GovernmentPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const benefitAreas = [
    {
      title: "Economic growth and competitiveness",
      points: [
        "Boost farm incomes by providing global market visibilityBoost farm incomes and wealth by providing high visibility to the global market for farm produce at the profitable prices for rural farmers.",
        "Incentivize farmers to increase production with the new global exposure, in addition to the local market.",
        "Incentivize farmers to increase the quality of produce through direct access to Suppliers of quality fertilizers, equipment, training, financial services, and Government assistance programs.",
        `Exposure to new buyers and suppliers, both domestic and international, will improve competitiveness of the farmers. It will also improve competitiveness of buyers if they want to maintain their market share of farm produce purchases.`
      ],
    },
    {
      title: "Inclusive development and social impact",
      points: [
        "All farmers will now have the means to participate in e-commerce using the most efficient personal portable device – the smart phone.",
        "All farmers will be able to join and interact with the community of Buyers, Suppliers, private Industry bodies and Government institutions through the app based social media forums that focus on addressing their specific needs without the distraction and high risks associated with the open internet social media space.",
        "For most of the farmers who are uneducated about the benefits and dangers of the Internet, fromyfarm app will provide the means to gain quality education from Service Providers recommended by Governments and recognised institutions.",
      ],
    },
    {
      title: "Innovation and Entrepreneurship",
      points: [
        "As a startup, developed by Ugandans, fromyfarm App is engineering a revolutionary approach to solving a long-standing roadblock to agricultural entrepreneurship by farmers.",
        `By using an innovatively sustainable approach to funding farmers to join e-commerce, fromyfarm app, will open an unknown expanse of possibilities of farmers once they have had a real taste of the power of e-commerce and its ability to significantly boost their bargaining power, their revenues, and their market reach globally directly from their farms.`,
        "With the assistance of Industry logistics and Government agencies, Farmers will be able to expand their network of Buyers and Suppliers to reach new markets and diversify their production sustainably for the long term",
      ],
    },
    {
      title: "Data-driven Decision making",
      points: [
        "Fromyfarm app, is based on the power of data- driven decision making by all open market participants",
        `These data are provided to address the specific needs of each type of market participant including Farmers, Buyers, and Suppliers. Data collected during their interactions in the app are then provided to them to assist them make data-driven, evidence-based decisions and to enable them to evaluate the benefits of their past decisions to ensure continuous improvement.`,
        `These data are also provided to address the collective needs of all participants. In particular, in the open market bidding process, the data for previous and current sales, current bids, and previous bids are transparent to all participants to enable each participant to make their own decisions with the same set of data.`,
        `The time-series data analytics will also be made available to Government institutions, private industry and academia as resources that will foster improved development and targeting of the needs of the participants in the Agricultural sector.`
      ],
    },
    {
      title: "Efficiency and effectiveness in government services",
      points: [
        "As Government processes are digitized and streamlined to improve delivery of public services, fromyfarm app will become a major delivery channel for educating and sensitizing of all the farmers, buyers and suppliers through a dedicated screen for Government related Policies and Services.",
        "With these Government services being directly sensitized via fromyfarm app, information asymmetry related corruption will be minimized. There will be reduction in misinformation about intent of Government services, as well as improved efficiencies in communication of these services’ availability.",
        
      ],
    },
    {
      title: "Regional Integration and Collaboration",
      points: [
        "Fromyfarm App will have multicurrency capabilities to enable cross-border trade between Farmers and Buyers in different countries. The ability of a farmer to elect the currency in which to advertise their farm produce will empower their foreign currency earning capabilities. This innovative option will encourage growth in cross-board trade.",
        "The ability of buyers and suppliers of farm inputs, transportation logistics, education and training, legal and banking services having direct access to farmers across the EAC borders through fromyfarm App will substantially increase collaboration as well as the diversity of services to all stakeholders.",
        
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Assisting Government</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Supporting Uganda's Digital Transformation Roadmap through innovative agricultural technology
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-6 ">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="glass-card animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Fromyfarm app aligns closely with Uganda's Digital Transformation Roadmap by leveraging digital technologies to enhance agricultural productivity, market access, and economic growth. Here's how the app contributes to the key objectives of the roadmap:
            </p>
          </div>

          {/* Vertical Tabs Layout */}
          <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
            {/* Left Side - Vertical Tabs */}
            <div className="lg:w-1/3 space-y-2">
              {benefitAreas.map((area, index) => (
                <button
                  key={area.title}
                  onClick={() => setSelectedTab(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                    selectedTab === index
                      ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg"
                      : "glass-card hover:bg-green-50 dark:hover:bg-green-950/20"
                  }`}
                >
                  <div className="font-semibold text-sm md:text-base">
                    {index + 1}. {area.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-2/3">
              <div className="glass-card h-full animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                  {benefitAreas[selectedTab].title}
                </h2>
                <ul className="space-y-4">
                  {benefitAreas[selectedTab].points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p>Source : https://ict.go.ug/programmes/digital-transformation-roadmap/</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Agriculture?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download Fromyfarm and be part of Uganda's digital transformation journey in agriculture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <DownloadButton text="Download App" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
