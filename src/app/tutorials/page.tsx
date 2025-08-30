"use client"

import DownloadButton from "@/components/DownloadButton"
import { Button } from "@/components/ui/button"
import { Play, User, ShoppingCart, Package, Users,Download,  BookOpen } from "lucide-react"
import { useState } from "react"

export default function TutorialsPage() {
  const [selectedUserType, setSelectedUserType] = useState("buyers")

  const userTypes = [
    { id: "buyers", label: "Buyers", icon: ShoppingCart, color: "from-blue-500 to-blue-600" },
    { id: "farmers", label: "Farmers", icon: User, color: "from-green-500 to-green-600" },
    { id: "suppliers", label: "Suppliers", icon: Package, color: "from-purple-500 to-purple-600" },
    { id: "agents", label: "Farmer Agents", icon: Users, color: "from-orange-500 to-orange-600" }
  ]

  const tutorialData = {
    buyers: [
      { title: "Registering as a Buyer", description: "Step-by-step guide to create your buyer account", duration: "3:45" },
      { title: "Reading Farmer Maps", description: "Navigate and understand farmer location data", duration: "2:30" },
      { title: "Using Produce Screens", description: "Browse and filter available agricultural produce", duration: "4:15" },
      { title: "Making Bids", description: "Place competitive bids on farmer produce", duration: "3:20" },
      { title: "Purchasing from Suppliers", description: "Direct purchasing workflow from suppliers", duration: "5:10" },
      { title: "Creating Product Demands", description: "Set up demand requests for specific produce", duration: "4:30" },
      { title: "Managing Bid Dashboard", description: "Monitor and manage all your active bids", duration: "3:55" }
    ],
    farmers: [
      { title: "Registering as a Farmer", description: "Complete your farmer profile setup", duration: "4:20" },
      { title: "Advertising Farm Produce", description: "List your produce with photos and details", duration: "5:30" },
      { title: "Using Farmer Maps", description: "Set your location and visibility preferences", duration: "3:10" },
      { title: "Updating Produce Listings", description: "Keep your produce information current", duration: "2:45" },
      { title: "Managing Bid Dashboard", description: "Review and respond to buyer bids", duration: "4:00" },
      { title: "Transaction Reports", description: "Track your sales and generate reports", duration: "3:35" },
      { title: "Invoice Management", description: "Create and manage invoices for sales", duration: "4:15" }
    ],
    suppliers: [
      { title: "Registering as a Supplier", description: "Set up your supplier business profile", duration: "4:10" },
      { title: "Advertising Products & Services", description: "Showcase your agricultural supplies", duration: "5:45" },
      { title: "Reading Bid Dashboards", description: "Monitor incoming bid requests", duration: "3:25" },
      { title: "Selling Supplies", description: "Complete the sales process", duration: "4:50" },
      { title: "Reviewing Bids", description: "Evaluate and respond to buyer bids", duration: "3:40" },
      { title: "Transaction Details", description: "Access detailed transaction history", duration: "3:15" },
      { title: "Inventory Management", description: "Track and update your supply inventory", duration: "4:25" }
    ],
    agents: [
      { title: "Becoming a Farmer Agent", description: "Requirements and registration process", duration: "5:00" },
      { title: "Registering New Farmers", description: "Help farmers join the platform", duration: "6:30" },
      { title: "Adding Farmer Produce", description: "List produce on behalf of registered farmers", duration: "4:45" },
      { title: "Managing Multiple Farmers", description: "Efficiently handle multiple farmer accounts", duration: "5:20" },
      { title: "Commission Structure", description: "Understanding your earnings and payments", duration: "3:30" },
      { title: "Training Resources", description: "Additional materials for farmer education", duration: "4:00" }
    ]
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Video Tutorials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides to help you master every feature of the Fromyfarm platform. 
            Choose your role and start learning today.
          </p>
        </div>
      </section>

      {/* User Type Selection */}
       <section className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {userTypes.map((type) => (
        <Button
          key={type.id}
          variant={selectedUserType === type.id ? "default" : "glass"}
          size="lg"
          onClick={() => setSelectedUserType(type.id)}
          className={`flex items-center space-x-2 px-6 py-3 transition-all duration-300
            ${selectedUserType === type.id ? "bg-gradient-to-br from-green-500 to-green-600 text-white" : ""}
          `}
        >
          <type.icon className="w-5 h-5" />
          <span>{type.label}</span>
        </Button>
          ))}
        </div>
      </section>

      {/* Tutorial Grid */}
      <section className="container mx-auto px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              {userTypes.find(type => type.id === selectedUserType)?.label} Tutorials
            </h2>
            <p className="text-lg text-muted-foreground">
              Master all the features available to {userTypes.find(type => type.id === selectedUserType)?.label.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialData[selectedUserType as keyof typeof tutorialData].map((tutorial, index) => (
              <div key={tutorial.title} className="glass-card group cursor-pointer animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {tutorial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <Button variant="ghost" size="sm" className="w-full justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Tutorial
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Resources</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Extra materials to help you get the most out of Fromyfarm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card text-center group animate-slide-in-left">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fromyfarm Guide</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Comprehensive PDF guide for Fromyfarm app
            </p>
            <Button variant="glass" size="sm">
              Download PDF
            </Button>
          </div>

          <div className="glass-card text-center group animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quick Start Guide</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Get up and running with Fromyfarm in under 10 minutes
            </p>
            <Button variant="glass" size="sm">
              View Guide
            </Button>
          </div>

          <div className="glass-card text-center group animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Support</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Join our community forum for tips, tricks, and support
            </p>
            <Button variant="glass" size="sm">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download Fromyfarm and start your journey to agricultural success. 
              Our tutorials will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row  justify-center items-center">
              <DownloadButton/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}