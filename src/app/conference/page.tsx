"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Mic,
  Building2,
  Award,
  ArrowRight,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Video,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConferencePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");

  const conferences = [
    {
      location: "Arua, Uganda",
      district: "Arua",
      date: "2024",
      description:
        "Fromyfarm App presentation at multiple conferences to increase agricultural production. We previously presented to CIP (International Potato Centre) and are seeking greater awareness among agricultural stakeholders.",
      highlights: [
        "Presented Fromyfarm App to enhance agricultural production and market connectivity in Northern Uganda",
        "Engaged with local farmers and agricultural stakeholders",
        "Demonstrated platform features for connecting farmers with buyers and suppliers",
      ],
      status: "completed",
      icon: MapPin,
    },
    {
      location: "Kiryandongo, Uganda",
      district: "Kiryandongo",
      date: "2024",
      description:
        "Engaging with local farmers and agricultural stakeholders to promote the Fromyfarm platform. Focus on building connections between farmers, buyers, and suppliers in the agricultural ecosystem.",
      highlights: [
        "Promoted the Fromyfarm platform to local farming communities",
        "Built partnerships with agricultural organizations",
        "Showcased digital farming solutions and technology adoption",
      ],
      status: "completed",
      icon: Users,
    },
    {
      location: "Lira, Uganda",
      district: "Lira",
      date: "2024",
      description:
        "Demonstrating how Fromyfarm connects farmers, buyers, and suppliers in the agricultural ecosystem. Presented by David Ojok with sponsorship from Mount Meru Group and Palladium Group.",
      highlights: [
        "Demonstrated comprehensive platform functionality",
        "Connected with key agricultural stakeholders",
        "Showcased technology solutions for farming communities",
      ],
      status: "completed",
      icon: Building2,
    },
    {
      location: "Gulu, Uganda",
      district: "Gulu",
      date: "2024",
      description:
        "Building partnerships with local agricultural organizations and promoting digital farming solutions. Focus on increasing agricultural production through technology adoption.",
      highlights: [
        "Built strategic partnerships with local organizations",
        "Promoted digital farming solutions",
        "Enhanced awareness among agricultural stakeholders",
      ],
      status: "completed",
      icon: Award,
    },
    {
      location: "Soroti, Uganda (SOCADIDO)",
      district: "Soroti",
      date: "2024",
      description:
        "SOCADIDO visit - Collaborating with local development organizations to enhance app impact and reach more farming communities across Uganda.",
      highlights: [
        "Collaborated with SOCADIDO development organization",
        "Enhanced app impact at grassroots level",
        "Strengthened community engagement initiatives",
      ],
      status: "completed",
      icon: Mic,
      hasVideos: true,
    },
  ];

  const speakers = [
    {
      name: "David Ojok",
      role: "Co-founder / Project Manager",
      company: "Fromyfarm",
      bio: "Leading the charge in agricultural technology innovation across Uganda, presenting Fromyfarm's vision to empower farmers through digital solutions.",
      image: "/images/team/David1.png",
    },
  ];

  const organizations = [
    {
      name: "Mount Meru Group",
      role: "Conference Sponsor",
      description:
        "Supporting agricultural innovation initiatives across Uganda.",
      logo: "/images/conferences/kiri1.jpg",
    },
    {
      name: "Palladium Group",
      role: "Event Organizer",
      description:
        "Facilitating agricultural development conferences and stakeholder engagement.",
      logo: "/images/partners/palladium.png",
    },
    {
      name: "CIP (International Potato Centre)",
      role: "Agricultural Partner",
      description:
        "Collaborating on agricultural research and development initiatives.",
      logo: "/images/partners/cip.png",
    },
    {
      name: "SOCADIDO",
      role: "Local Development Partner",
      description:
        "Working together to enhance agricultural technology adoption at grassroots level.",
      logo: "/images/partners/socadido.png",
    },
  ];

  const socadidoVideos = [
    {
      title: "SOCADIDO Partnership Overview",
      description:
        "Collaborative efforts with SOCADIDO to enhance agricultural technology adoption",
      thumbnail: "/images/conferences/socadido1.jpg",
      videoUrl: "/images/conferences/socadido1.mp4",
    },
    {
      title: "SOCADIDO Partnership Overview",
      description:
        "Collaborative efforts with SOCADIDO to enhance agricultural technology adoption",
      thumbnail: "/images/conferences/socadido1.jpg",
      videoUrl: "/images/conferences/socadido2.mp4",
    },
  ];

  // Extract unique districts from conferences
  const districts = ["All", ...Array.from(new Set(conferences.map(conf => conf.district)))];

  // Filter conferences based on selected district
  const filteredConferences = selectedDistrict === "All"
    ? conferences
    : conferences.filter(conf => conf.district === selectedDistrict);

  // Conference images mapped to actual photos
  const getConferenceImages = (location: string, index: number) => {
    const baseLocation = location.toLowerCase().split(",")[0];

    switch (baseLocation) {
      case "arua":
        return [
          {
            src: "/images/conferences/arua3.jpg",
            alt: "Arua Conference - Q&A session",
          },
          // { src: "/images/conferences/arua2.jpg", alt: "Arua Conference - Audience engagement" },
          {
            src: "/images/conferences/arua.jpg",
            alt: "Arua Conference - Main presentation",
          },
        ];
      case "lira":
        return [
          {
            src: "/images/conferences/lira1.jpg",
            alt: "Lira Conference - Opening session",
          },
          {
            src: "/images/conferences/lira2.jpg",
            alt: "Lira Conference - App demonstration",
          },
          {
            src: "/images/conferences/lira3.jpg",
            alt: "Lira Conference - Farmer interaction",
          },
        ];
      case "soroti":
        return [
          {
            src: "/images/conferences/socadido1.jpg",
            alt: "SOCADIDO visit - Collaboration meeting",
          },
          // { src: "/images/conferences/socadido1.jpg", alt: "SOCADIDO visit - Partnership discussion" },
          // { src: "/images/conferences/socadido1.jpg", alt: "SOCADIDO visit - Strategic planning" }
        ];
      default:
        // Fallback for conferences without specific images
        return [
          {
            src: "/images/conferences/arua.jpg",
            alt: `${location} - Conference session`,
          },
          {
            src: "/images/conferences/lira1.jpg",
            alt: `${location} - Presentation`,
          },
          {
            src: "/images/conferences/lira2.jpg",
            alt: `${location} - Discussion`,
          },
        ];
    }
  };

  // Get all conference images for modal navigation (based on filtered conferences)
  const allConferenceImages = filteredConferences.flatMap((conf, idx) =>
    getConferenceImages(conf.location, idx).map((img) => ({
      ...img,
      location: conf.location,
      description: `${conf.location} - ${img.alt}`,
    }))
  );

  const openImageModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % allConferenceImages.length
        : (currentImageIndex - 1 + allConferenceImages.length) %
          allConferenceImages.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(allConferenceImages[newIndex].src);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Fromyfarm <span className="gradient-text">Conferences</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Bringing agricultural innovation directly to farmers across
              Uganda. Discover how we're transforming agriculture through
              technology and community engagement.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"></div>
      </section>

      {/* District Filter Section */}
      <section className="container mx-auto px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-center">Filter by District</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {districts.map((district) => (
                <button
                  key={district}
                  onClick={() => setSelectedDistrict(district)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedDistrict === district
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-lg scale-105"
                      : "bg-card border border-border hover:border-primary/50 text-foreground hover:scale-105"
                  }`}
                >
                  {district}
                </button>
              ))}
            </div>
            {selectedDistrict !== "All" && (
              <p className="text-sm text-muted-foreground">
                Showing {filteredConferences.length} conference{filteredConferences.length !== 1 ? 's' : ''} in {selectedDistrict}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Individual Conferences */}
      <section className="container mx-auto px-6 py-12">


        <div className="grid gap-8 lg:gap-12">
          {filteredConferences.map((conference, index) => {
            const Icon = conference.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className=" animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  {/* Images & Videos Section */}
                  <div className="w-full lg:w-2/5 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                      {getConferenceImages(conference.location, index).map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`${
                            imgIndex === 0 ? "col-span-2" : ""
                          } aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group cursor-pointer`}
                          onClick={() =>
                            openImageModal(image.src, allConferenceImages.findIndex(img => img.src === image.src && img.location === conference.location))
                          }
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                    {conference.hasVideos && (
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {socadidoVideos.map((video, vidIdx) => (
                          <div
                            key={vidIdx}
                            className="relative aspect-video rounded-lg overflow-hidden group bg-gradient-to-br from-primary/10 to-secondary/10"
                          >
                            <video
                              src={video.videoUrl}
                              controls
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-3/5 space-y-6 flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{conference.location}</h3>
                        <p className="text-muted-foreground">{conference.date}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {conference.description}
                    </p>

                    {/* Conference Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {conference.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={allConferenceImages[currentImageIndex]?.src}
                alt={allConferenceImages[currentImageIndex]?.alt}
                className="w-full h-full object-cover"
              />
              {/* Image overlay with description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <p className="text-lg font-medium">
                    {allConferenceImages[currentImageIndex]?.location}
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    {allConferenceImages[currentImageIndex]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
