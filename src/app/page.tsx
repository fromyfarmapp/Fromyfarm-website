"use client";

import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  Tractor,
  ShoppingCart,
  Package,
  DollarSign,
  UserCheck,
  Store,
  Truck,
  HandHeart,
  Building2,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Multi-User Platform",
      description:
        "Connect farmers, buyers, suppliers, and agents in one ecosystem",
      color: "emerald",
      highlight: "Connect",
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description:
        "Access international markets and expand your agricultural business",
      color: "yellow",
      highlight: "Global",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Works offline and optimized for smartphones and tablets",
      color: "green",
      highlight: "Mobile",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Bidding",
      description: "Competitive bidding system for the best prices on produce",
      color: "amber",
      highlight: "Real-Time",
    },
  ];
  const userTypes = [
    {
      title: "For Farmers",
      pricing: [
        { label: "Annual Registration", price: "Free" },
        {
          label: "30 days Advertising per product type (e.g., Maize)",
          price: "Free",
        },
        { label: "Per Buyer Contact Details", price: "$1.57" },
      ],
      note: "Payment for buyer details is only required when a produce has a bid.",
    },
    {
      title: "For Buyers",
      pricing: [
        { label: "Annual Registration", price: "$3.09" },
        { label: "Per Farmer Contact Details", price: "$1.55" },
        { label: "Per Supplier Contact Details", price: "$1.55" },
      ],
      note: "Bidding applies to non-equipment items only.",
    },
    {
      title: "For Suppliers",
      pricing: [
        { label: "Annual Registration", price: "$3.09" },
        {
          label: "30 days Advertising per supplies type (e.g., Gumboots)",
          price: "$1.55",
        },
      ],
      note: "No quantity limits apply.",
    },
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-gradient-to-br from-emerald-500 to-green-600",
      hover: "group-hover:from-emerald-600 group-hover:to-green-700",
      border: "border-emerald-200",
      shadow: "shadow-emerald-100",
      glow: "group-hover:shadow-emerald-200/50",
    },
    yellow: {
      bg: "bg-gradient-to-br from-yellow-500 to-amber-600",
      hover: "group-hover:from-yellow-600 group-hover:to-amber-700",
      border: "border-yellow-200",
      shadow: "shadow-yellow-100",
      glow: "group-hover:shadow-yellow-200/50",
    },
    green: {
      bg: "bg-gradient-to-br from-green-500 to-emerald-600",
      hover: "group-hover:from-green-600 group-hover:to-emerald-700",
      border: "border-green-200",
      shadow: "shadow-green-100",
      glow: "group-hover:shadow-green-200/50",
    },
    amber: {
      bg: "bg-gradient-to-br from-amber-500 to-yellow-600",
      hover: "group-hover:from-amber-600 group-hover:to-yellow-700",
      border: "border-amber-200",
      shadow: "shadow-amber-100",
      glow: "group-hover:shadow-amber-200/50",
    },
  };
  const cardColors = [
    {
      gradient: "from-emerald-500 to-green-600",
      lightGradient: "from-emerald-50 to-green-50",
      border: "border-emerald-200",
      shadow: "shadow-emerald-100",
      glow: "group-hover:shadow-emerald-300/50",
      text: "text-emerald-600",
      icon: Tractor,
      badge: "Most Affordable",
    },
    {
      gradient: "from-yellow-500 to-amber-600",
      lightGradient: "from-yellow-50 to-amber-50",
      border: "border-yellow-200",
      shadow: "shadow-yellow-100",
      glow: "group-hover:shadow-yellow-300/50",
      text: "text-yellow-600",
      icon: ShoppingCart,
      badge: "Most Popular",
    },
    {
      gradient: "from-green-500 to-emerald-600",
      lightGradient: "from-green-50 to-emerald-50",
      border: "border-green-200",
      shadow: "shadow-green-100",
      glow: "group-hover:shadow-green-300/50",
      text: "text-green-600",
      icon: Package,
      badge: "Best Value",
    },
  ];
  const phoneImages = [
    {
      src: "/images/phones/fmfphone.png",
      alt: "fromyfarm phone 1",
    },
    {
      src: "/images/phones/iphonefmf.png",
      alt: "fromyfarm phone 2",
    },
  ];

  const identityOptions = [
    {
      title: "FARMER",
      icon: Tractor,
      description: "Uploads and sells produce in an open market",
      benefits: [
        "Trade produce in an open market",
        "Receive competitive bids from buyers",
        "Decide which buyer's bid to accept",
        "Access to wider market opportunities"
      ],
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      lightGradient: "from-emerald-50 to-green-50",
      border: "border-emerald-200",
      shadow: "shadow-emerald-100",
      glow: "group-hover:shadow-emerald-300/50",
      text: "text-emerald-600",
    },
    {
      title: "BUYER",
      icon: ShoppingCart,
      description: "Access farm produce directly from farmers",
      benefits: [
        "Bid on farmer's produce",
        "Pay for farmer contact details",
        "Annual registration fee of $3.09",
        "Direct access to agricultural suppliers"
      ],
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      lightGradient: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
      shadow: "shadow-blue-100",
      glow: "group-hover:shadow-blue-300/50",
      text: "text-blue-600",
    },
    {
      title: "SUPPLIER",
      icon: Package,
      description: "Advertise supplies to agricultural community",
      benefits: [
        "Advertise supplies (e.g., gumboots)",
        "30-day advertising per supply type",
        "Annual registration fee of $3.09",
        "Connect with farmers and agri-businesses"
      ],
      color: "purple",
      gradient: "from-purple-500 to-violet-600",
      lightGradient: "from-purple-50 to-violet-50",
      border: "border-purple-200",
      shadow: "shadow-purple-100",
      glow: "group-hover:shadow-purple-300/50",
      text: "text-purple-600",
    },
    {
      title: "FARMER AGENT",
      icon: UserCheck,
      description: "Support farmers as a trusted intermediary",
      benefits: [
        "Represent multiple farmers",
        "Facilitate market connections",
        "Provide agricultural guidance",
        "Bridge technology gaps"
      ],
      color: "orange",
      gradient: "from-orange-500 to-amber-600",
      lightGradient: "from-orange-50 to-amber-50",
      border: "border-orange-200",
      shadow: "shadow-orange-100",
      glow: "group-hover:shadow-orange-300/50",
      text: "text-orange-600",
    },
    {
      title: "AGRI-BUSINESS",
      icon: Building2,
      description: "Scale your agricultural business operations",
      benefits: [
        "Large-scale market access",
        "B2B trading opportunities",
        "Bulk sourcing capabilities",
        "Enterprise-level solutions"
      ],
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
      lightGradient: "from-teal-50 to-cyan-50",
      border: "border-teal-200",
      shadow: "shadow-teal-100",
      glow: "group-hover:shadow-teal-300/50",
      text: "text-teal-600",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-100/30 via-transparent to-blue-100/20"></div>
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full floating animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full floating animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full floating animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] mt-3">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl  lg:text-6xl xl:text-7xl flex font-bold leading-relaxed  flex justify-center lg:justify-start ">
                  <span className="block">Fro</span>
                  <span className="gradient-text">myfarm</span>
                </h1>
                <p className="text-lg sm:text-xl  lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  A digital agricultural marketplace connecting farmers, buyers,
                  and suppliers globally. Transform your subsistence farming
                  into a thriving business network.
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fromyfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src="/images/android.png"
                    alt="Get it on Google Play"
                    className="sm:h-16 lg:h-24  w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/ug/app/fromyfarm/id6742323473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src="/images/apple.png"
                    alt="Download on the App Store"
                    className="sm:h-16 lg:h-24  w-auto"
                  />
                </a>
              </div>

              <div className="pt-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Experience the{" "}
                  <span className="gradient-text">Golden Tractor Moment</span>
                </h2>
              </div>
            </div>

            {/* Right Content - Phone Carousel */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <Carousel
                  className="w-full max-w-md lg:max-w-lg"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {phoneImages.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="flex items-center justify-center p-4">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="max-h-96 sm:max-h-[500px] lg:max-h-[600px] w-auto object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* App Info */}
                <div className="text-center mt-6 space-y-2">
                  <p className="text-muted-foreground">
                    Available on Android & iOS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Info Section */}
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
                  Where all <span className="gradient-text">Farmers</span> and{" "}
                  <span className="gradient-text">Buyers</span> trade in an open
                  market
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-3">
                  For the first time, small and large scale Farmers can get the
                  best price offers that any Buyer will offer in an open
                  competitive bid with other Buyers. The farmer will be the one
                  who decides the winner of the bids by accepting the price a
                  Buyer offers from a listing of 5 Top Bids for each produce.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative  overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200/40 to-amber-300/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/25 to-emerald-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-amber-200/35 to-yellow-300/25 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Fromyfarm</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the future of agriculture with our comprehensive
              platform designed to revolutionize how farmers, buyers, and
              suppliers connect and trade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const colors =
                colorClasses[feature.color as keyof typeof colorClasses];

              return (
                <div
                  key={feature.title}
                  className={`relative bg-white/80 backdrop-blur-sm border-2 ${colors.border} rounded-2xl p-6 text-center group hover:bg-white transition-all duration-500 transform hover:-translate-y-2 ${colors.shadow} hover:shadow-xl ${colors.glow} animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <feature.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />

                    {/* Icon Glow Effect */}
                    <div
                      className={`absolute inset-0 ${colors.bg} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}

          <div className="pt-10 flex justify-center ">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Discover All Features{" "}
            </Button>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-green-300/15 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-12 w-24 h-24 bg-gradient-to-br from-blue-200/25 to-indigo-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-200/15 to-violet-300/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 right-20 w-28 h-28 bg-gradient-to-br from-orange-200/20 to-amber-300/15 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Who do you <span className="gradient-text">identify</span> yourself as?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose your role in the agricultural ecosystem and discover how Fromyfarm can transform your business.
              <span className="block mt-2 text-primary font-medium">Click the cards for more information!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {identityOptions.map((option, index) => {
              const IconComponent = option.icon;

              return (
                <div
                  key={option.title}
                  className={`relative bg-white/95 backdrop-blur-sm border-2 ${option.border} rounded-2xl overflow-hidden group hover:bg-white transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 ${option.shadow} hover:shadow-2xl ${option.glow} animate-slide-in-up cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${option.lightGradient} p-6 text-center`}>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="p-6 space-y-3">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${benefitIndex * 50}ms` }}
                      >
                        <div
                          className={`w-6 h-6 bg-gradient-to-br ${option.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Action Button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${option.gradient} hover:opacity-90 text-white`}
                    >
                      Get Started as {option.title}
                    </Button>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Not sure which role fits you best?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Download App & Explore All Options
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8  sm:py-20 lg:py-15 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Fromyfarm</span> Pricing List
            </h2>
            {/* <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple, transparent pricing with no hidden fees. Pay only for what you use.
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {userTypes.map((type, index) => {
              const colors = cardColors[index];
              const IconComponent = colors.icon;

              return (
                <div
                  key={index}
                  className={`relative bg-white/95 backdrop-blur-sm border-2 ${colors.border} rounded-3xl overflow-hidden group hover:bg-white transition-all duration-500 transform hover:-translate-y-3 hover:scale-100 ${colors.shadow} hover:shadow-2xl ${colors.glow} animate-slide-in-right`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Header Section */}
                  <div
                    className={`bg-gradient-to-br ${colors.lightGradient} p-3 text-center`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {type.title}
                    </h3>
                  </div>

                  {/* Pricing Items Section */}
                  <div className="p-4 space-y-4">
                    {type.pricing.map((item, itemIndex) => {
                      const isFree = item.price.toLowerCase() === "free";

                      return (
                        <div
                          key={itemIndex}
                          className="flex items-center space-x-4 p-2 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white transition-colors duration-300 "
                        >
                          <div
                            className={`w-8 h-8 ${
                              isFree
                                ? "bg-emerald-500"
                                : `bg-gradient-to-br ${colors.gradient}`
                            } rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            {isFree ? (
                              <CheckCircle className="w-4 h-4 text-white" />
                            ) : (
                              <DollarSign className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className="flex-1 items-start">
                            <div className="flex  justify-between mt-4">
                              <h5 className="font-medium text-gray-900 text-sm leading-tight">
                                {item.label}
                              </h5>
                              <span
                                className={`font-bold text-lg ml-2 ${
                                  isFree ? "text-emerald-600" : colors.text
                                } flex-shrink-0`}
                              >
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Note Section */}
                  <div className="px-8 pb-6">
                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-300">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">
                            i
                          </span>
                        </div>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          <strong>Note:</strong> {type.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container mx-auto px-6 py-20">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-8">
          
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Agricultural Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of farmers, buyers, and suppliers who are already
              experiencing their Golden Tractor Moment with Fromyfarm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" className="text-lg px-8 py-4">
                Download from Play Store
              </Button>
              <Button size="lg" variant="glass" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
