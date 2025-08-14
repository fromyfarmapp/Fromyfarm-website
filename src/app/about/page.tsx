"use client"

import { Button } from "@/components/ui/button"
import { Target, Eye, Users, MapPin, Mail, Smartphone } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Stephen Odonga",
      role: "Chief Executive Officer",
      description: "Visionary leader driving agricultural transformation across Africa",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Ojok",
      role: "Co-founder / Project Manager",
      description: "Strategic planning and project execution specialist",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Raymond Adelo",
      role: "Co-founder / Software Developer",
      description: "Technical architect building scalable agricultural solutions",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Maria Tuhirirwe",
      role: "Co-founder / Software Developer",
      description: "Full-stack developer creating seamless user experiences",
      image: "/api/placeholder/150/150"
    }
  ]

  const partners = [
    "Jeroma Farmers",
    "Green Culture Africa",
    "Uganda Agricultural Cooperative",
    "East Africa Farming Network"
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Offline Functionality",
      description: "Works seamlessly offline, perfect for rural areas with limited connectivity"
    },
    {
      icon: Users,
      title: "Multi-User Platform",
      description: "Supports farmers, buyers, suppliers, and agents in one ecosystem"
    },
    {
      icon: Target,
      title: "Market Data Insights",
      description: "Real-time market trends and supply-demand analytics"
    }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="gradient-text">Fromyfarm</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re on a mission to transform subsistence farmers into thriving businesses 
            with global networks of buyers and suppliers through innovative technology.
          </p>
        </div>
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
              "A fairer marketplace for farmers to sell ever increasing volumes of their produce 
              both profitably and yet at competitive prices."
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
              "An open market data supply provided to Farmers that will drive increased production 
              based on real market data on trends in demand and supply."
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Highlights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for agricultural communities with unique needs and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.title} className="glass-card text-center group animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
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
            <div key={member.name} className="glass-card text-center group animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Information</h2>
            <p className="text-xl text-muted-foreground">
              Headquartered in Uganda, serving agricultural communities across East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">
                    Plot 4847 Bukoto Kisaasi Road<br/>
                    Kisaasi, Dungu Zone<br/>
                    Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Contact Email</h3>
                  <p className="text-muted-foreground">userfromyfarm@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Platform Requirements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Android version 7 and above</li>
                  <li>• Offline functionality available</li>
                  <li>• Multi-language support</li>
                  <li>• Multi-currency transactions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Our Partners</h3>
                <div className="flex flex-wrap gap-2">
                  {partners.map((partner, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Agricultural Revolution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of the movement transforming agriculture across Africa. 
              Download Fromyfarm today and experience your Golden Tractor Moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" className="text-lg px-8 py-4">
                Download App
              </Button>
              <Button size="lg" variant="glass" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}