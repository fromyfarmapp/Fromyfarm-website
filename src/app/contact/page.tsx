"use client";

import {
  MapPin,
  Phone,
  Mail,
  Users,
  Clock,
} from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Plot 4847 Bukoto Kisaasi Road",
        "Kisaasi, Dungu Zone",
        "Uganda",
      ],
      action: "Get Directions",
      url: "https://maps.app.goo.gl/3Zq8NxE3aHbPoC9J8",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+256 743 101 292", "+256 765 537 741"],
      action: "Call Now",
      url: "tel:+256743101292",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["fromyfarm@gmail.com"],
      action: "Send Email",
      url: "mailto:fromyfarm@gmail.com",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["Join our WhatsApp Group", "Get instant support"],
      action: "Join Group",
      url: "https://api.whatsapp.com/message/5HKYKB2APSRNA1?autoload=1&app_absent=0",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "#",
      color: "from-green-400 to-green-600",
    },
    {
      icon: FaXTwitter,
      name: "X (Twitter)",
      url: "https://x.com/fromyfarm",
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-10">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Stay <span className="gradient-text">Connected</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              We'd love to hear from you. Get in touch with us through any of
              the channels below.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Contact Information Cards */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="glass-card text-center animate-slide-in-right hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="text-muted-foreground text-sm"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
                >
                  {info.action}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Content - Contact Image */}
      <section className="container mx-auto  py-12">
        <div className="flex justify-between mx-auto flex-wrap gap-4">
          <div className=" animate-slide-in-left lg:w-3/5 sm:w-full md:w-full  space-y-8">
            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Find Us
              </h3>
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://maps.google.com/maps?q=Plot%204847%20Bukoto%20Kisaasi%20Road%2C%20Kisaasi%2C%20Dungu%20Zone&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Fromyfarm Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            {/* Contact Image */}
            {/* <div className="glass-card">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Contact image placeholder</p>
                    <p className="text-xs text-muted-foreground/70">Add your contact team photo here</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image and Additional Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Business Hours */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Join our community and stay updated with the latest news and
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="container mx-auto px-6 py-12"></section>
    </div>
  );
}
