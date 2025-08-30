"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Users,
  MapPin,
  Mail,
  Smartphone,
  X,
  Linkedin,
  Twitter,
  Github,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const team = [
    {
      name: "Stephen Odonga",
      role: "Chief Executive Officer",
      socialMedia: [
        {
          icon: Linkedin,
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/stephen-odonga-123456",
        },
        {
          icon: Twitter,
          platform: "Twitter",
          url: "https://twitter.com/stephenodonga",
        },
      ],
      image: "/images/team/steven.png",
    },
    {
      name: "David Ojok",
      role: "Co-founder / Project Manager",
      socialMedia: [
        {
          icon: Linkedin,
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/david-ojok-123456",
        },
        {
          icon: Twitter,
          platform: "Twitter",
          url: "https://twitter.com/davidojok",
        },
      ],
      image: "/images/team/David1.png",
    },
    {
      name: "Raymond Adelo",
      role: "Co-founder / Software Developer",
      socialMedia: [
        {
          icon: Github,
          platform: "GitHub",
          url: "https://github.com/raymondadelo",
        },
        {
          icon: Linkedin,
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/raymond-adelo",
        },
      ],
      image: "/images/team/adelo.jpg",
    },
    {
      name: "Maria Tuhirirwe",
      role: "Co-founder / Software Developer",
      socialMedia: [
        {
          icon: Github,
          platform: "GitHub",
          url: "https://github.com/mariatuhirirwe",
        },
        {
          icon: Linkedin,
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/maria-tuhirirwe",
        },
      ],
      image: "/images/team/maria.jpg",
    },
  ];

  const partners = [
    {
      name: "Jeroma Farmers",
      image: "/images/partners/jerom.jpeg",
      website: "https://jeromaformers.com",
    },
    {
      name: "Green Culture Africa",
      image: "/images/partners/greenculture.jpeg",
      website: "https://greencultureafrica.com",
    },
    {
      name: "DIGIA",
      image: "/images/partners/digia.jpeg",
      website: "https://ugandaagricoop.org",
    },
    {
      name: "Mcash",
      image: "/images/partners/mcash.jpeg",
      website: "https://eastafricafarming.net",
    },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Offline Functionality",
      description:
        "Works seamlessly offline, perfect for rural areas with limited connectivity",
    },
    {
      icon: Users,
      title: "Multi-User Platform",
      description:
        "Supports farmers, buyers, suppliers, and agents in one ecosystem",
    },
    {
      icon: Target,
      title: "Market Data Insights",
      description: "Real-time market trends and supply-demand analytics",
    },
    {
      icon: MapPin,
      title: "Location-Based Services",
      description: "Find nearby markets, suppliers, and agricultural services with GPS integration",
    },
    {
      icon: Mail,
      title: "Communication Hub",
      description: "Direct messaging between farmers, buyers, and agricultural experts",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Available in local languages to serve diverse farming communities",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* about Section */}
      <section className="relative  overflow-hidden">
        <div className="container mx-auto px- sm:px-6 lg:px-8  sm:py-20 lg:py-3 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="order-1 lg:order-1 relative  flex justify-center">
              <div className="relative  p-2 sm:px-6  ml-5">
                <img
                  src="/images/phones/infor-section.png"
                  alt="Fromyfarm mobile app showing marketplace with maps and produce listings"
                  className="w-4/5 h-auto object-contain rounded-lg"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Content Section */}
            <div className="order-2 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  <span className="gradient-text">Fromyfarm</span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-3">
                  Welcome to Fromyfarm, your gateway to agricultural empowerment
                  and global market access. We are a revolutionary mobile
                  application committed to providing unparalleled benefits to
                  farmers, suppliers, and buyers across the globe. Fromyfarm is
                  primarily a smart phone App first focus. It is NOT a Web-app
                  that requires continuous Internet access. The App is fully
                  functional even when offline, except, for financial
                  transactions, online search and updates for changes in the
                  status of the In-phone App offline databases. The name of the
                  App, fromyfarm, is self-explanatory and easily understood by
                  any farmer.
                </p>
              </div>

              <div className="pt-6">
                {/* App Store Downloads */}
                <div className="space-y-4">
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={() => setIsDownloadPopupOpen(true)}
                >
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10 flex justify-center ">
        <img
          src="/images/Dsitribution.jpg"
          alt="A chart showing the fromyfarm distribution network"
          className="w-1/3 h-auto object-cover rounded-lg shadow-lg cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        />
        {/* Image Preview Modal */}
        {typeof window !== "undefined" && isPreviewOpen && (
          <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full flex flex-col items-center">
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src="/images/Dsitribution.jpg"
            alt="Distribution Network Preview"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
          </div>
        )}
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card space-y-6 animate-slide-in-left">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "A fairer marketplace for farmers to sell ever increasing volumes
              of their produce both profitably and yet at competitive prices."
            </p>
          </div>

          <div className="glass-card space-y-6 animate-slide-in-right">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "An open market data supply provided to Farmers that will drive
              increased production based on real market data on trends in demand
              and supply."
            </p>
          </div>
        </div>
      </section>


      {/* App Features Section */}
      <section className="container mx-auto px-6 py-20 ">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fromyfarm App Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools designed specifically for modern farmers and agricultural communities
          </p>
        </div>

        <div className=" ">
          <div className="flex">
            {/* Phone Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-left">
              <div className="relative">
                <img
                  src="/images/phones/iphonefmf.png"
                  alt="Fromyfarm App on Phone"
                  className="w-80 h-auto max-w-full"
                />
              </div>
            </div>

            {/* Scrollable Features List */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap- max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate team behind Fromyfarm&apos;s agricultural revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="glass-card text-center group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-36 h-36 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-36 h-36  rounded-full flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 object-cover rounded-full border-4 border-white"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <div className="flex justify-center space-x-3">
                {member.socialMedia.map((social, socialIndex) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={socialIndex}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors duration-200 group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Team of Contractors */}
        <div className="text-center mt-12 mb-8">
          <p className="text-lg text-muted-foreground italic">
            And a team of contractors
          </p>
        </div>
      </section>

      {/* partners section */}
      <section className="container mx-auto px-6 py-20 ">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <div className="partners-carousel overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {partners.concat(partners).map((partner, index) => (
                <a
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <div className="w-36 h-36 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      {/* <section className="container mx-auto px-6 py-20">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Agricultural Revolution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of the movement transforming agriculture across Africa.
              Download Fromyfarm today and experience your Golden Tractor
              Moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="default"
                className="text-lg px-8 py-4"
                onClick={() => setIsDownloadPopupOpen(true)}
              >
                Download App
              </Button>
              <Button size="lg" variant="glass" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Download App Popup */}
      {isDownloadPopupOpen && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsDownloadPopupOpen(false)}
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold gradient-text mb-2">
                Download Fromyfarm App
              </h3>
              <p className="text-foreground/80 text-sm">
                Get the app and never miss an update
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.fromyfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsDownloadPopupOpen(false)}
              >
                <img
                  src="/images/android.png"
                  alt="Get it on Google Play"
                  className="h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <a
                href="https://apps.apple.com/ug/app/fromyfarm/id6742323473"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsDownloadPopupOpen(false)}
              >
                <img
                  src="/images/apple.png"
                  alt="Download on the App Store"
                  className="h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
