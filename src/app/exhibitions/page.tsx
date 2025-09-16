"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Building2,
  Award,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/DownloadButton";

export default function ExhibitionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const exhibitions = [
    {
      title: "Harvest Money Exhibitions 2024",
      location: "Kampala, Uganda",
      date: "2024",
      description: "Showcasing Fromyfarm's innovative agricultural marketplace solutions to connect farmers with buyers and promote sustainable farming practices. Focus on demonstrating how technology can transform agricultural value chains.",
      highlights: [
        "Demonstrated Fromyfarm app features for agricultural marketplace",
        "Connected farmers with potential buyers and suppliers",
        "Showcased digital solutions for agricultural value chains",
        "Promoted sustainable farming practices and technology adoption"
      ],
      images: [
        "/images/exhibitions/harvest2.png",
        "/images/exhibitions/havest1.png",
        "/images/exhibitions/harvest4.png",
        "/images/exhibitions/harvest3.png",
        "/images/exhibitions/harvest5.png",
        "/images/exhibitions/harvest6.png"
      ],
      icon: Target,
    },
    {
      title: "Lubiri, Kampala, Uganda Exhibitions 2024",
      location: "Lubiri, Kampala, Uganda",
      date: "2024",
      description: "Strategic exhibitions at Lubiri showcasing Fromyfarm's mission to support small-scale farmers through digital marketplace solutions. Emphasis on market growth, awareness building, and community engagement.",
      highlights: [
        "Emphasized support for small-scale farmers through technology",
        "Promoted market growth and agricultural awareness",
        "Engaged with local farming communities and stakeholders",
        "Demonstrated comprehensive agricultural marketplace features"
      ],
      images: [
        "/images/exhibitions/lubiri1.png",
        "/images/exhibitions/lubiri2.png",
        "/images/exhibitions/lubiri3.png"
      ],
      video: "/images/exhibitions/Lubiri-Exhibition.mp4",
      icon: Building2,
    },
  ];

  // Get all exhibition images for modal navigation
  const allExhibitionImages = exhibitions.flatMap((exhibition) =>
    exhibition.images.map(img => ({
      src: img,
      title: exhibition.title,
      location: exhibition.location,
      alt: `${exhibition.title} - Exhibition photo`
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
        ? (currentImageIndex + 1) % allExhibitionImages.length
        : (currentImageIndex - 1 + allExhibitionImages.length) % allExhibitionImages.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(allExhibitionImages[newIndex].src);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Fromyfarm <span className="gradient-text">Exhibitions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Showcasing agricultural innovation and marketplace solutions across Uganda.
              Discover how we're connecting farmers with buyers and promoting sustainable farming practices.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Exhibitions Section */}
      <section className="container mx-auto px-6 py-12">


        <div className="grid gap-12 lg:gap-16">
          {exhibitions.map((exhibition, index) => {
            const Icon = exhibition.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className=" animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  {/* Images & Video Section */}
                  <div className="w-full lg:w-3/5">
                    {/* Special layout for Lubiri (video-first) */}
                    {exhibition.video ? (
                      <div className="space-y-4">
                        {/* Main Video */}
                        <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                          <video
                            src={exhibition.video}
                            controls
                            className="w-full h-full object-cover"
                            poster={exhibition.images[0]}
                          />
                        </div>
                        {/* Supporting Images Grid */}
                        <div className="grid grid-cols-3 gap-2">
                          {exhibition.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group cursor-pointer"
                              onClick={() => {
                                const globalIndex = allExhibitionImages.findIndex(img => img.src === image);
                                openImageModal(image, globalIndex);
                              }}
                            >
                              <img
                                src={image}
                                alt={`${exhibition.title} - Photo ${imgIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Regular Images Grid for Harvest */
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {exhibition.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`${imgIndex === 0 ? 'col-span-2 row-span-2' : 'aspect-square'} bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group cursor-pointer`}
                            onClick={() => {
                              const globalIndex = allExhibitionImages.findIndex(img => img.src === image);
                              openImageModal(image, globalIndex);
                            }}
                          >
                            <img
                              src={image}
                              alt={`${exhibition.title} - Photo ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-2/5 space-y-6 flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exhibition.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exhibition.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exhibition.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exhibition.description}
                    </p>

                    {/* Exhibition Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {exhibition.highlights.map((highlight, idx) => (
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

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-16">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Download className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Join the Agricultural Marketplace
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download the Fromyfarm app and become part of Uganda's growing agricultural marketplace.
              Connect with farmers, buyers, and suppliers to transform agriculture together.
            </p>
            <div className="flex  justify-center items-center">
                     <DownloadButton/>

           
            </div>
          </div>
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
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={allExhibitionImages[currentImageIndex]?.src}
                alt={allExhibitionImages[currentImageIndex]?.alt}
                className="w-full h-full object-cover"
              />
              {/* Image overlay with description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <p className="text-lg font-medium">{allExhibitionImages[currentImageIndex]?.title}</p>
                  <p className="text-white/80 text-sm mt-2">{allExhibitionImages[currentImageIndex]?.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}