"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      subPages: [
        { name: "About Us", href: "/about" },
        { name: "Our Strategy", href: "/about/strategy" },
        { name: "Government", href: "/government" },
      ]
    },
    { name: "Tutorials", href: "/tutorials" },
    { 
      name: "Marketplace", 
      href: "#",
      subPages: [
        // { name: "Market Growth Awareness", href: "/marketplace/growth-awareness" },
        { name: "Conferences", href: "/conference" },
        { name: "Exhibitions", href: "/exhibitions" },
        // { name: "Market Campaign", href: "/marketplace/campaign" },
      ]
    },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    // { name: "Donate", href: "/donate" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header m-3 ">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
          <img src="/images/fmf.png" alt="fromyfarm logo" className="w-20 h-20  "/>
          </div>
          
          <span className="text-xl font-bold gradient-text">Fromyfarm</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div 
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center space-x-1">
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {item.subPages && (
                  <ChevronDown className="h-4 w-4 text-foreground group-hover:text-primary transition-colors duration-400" />
                )}
              </div>
              
              {/* Dropdown Menu */}
              {item.subPages && hoveredItem === item.name && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.subPages.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors duration-200 relative group/sub"
                    >
                      {subItem.name}
                      <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-primary scale-x-0 transition-transform duration-200 group-hover/sub:scale-x-100"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">

          {/* <Button variant="glass-primary" size="sm">
           Download
          </Button> */}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass mt-4 rounded-lg p-4 ">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 flex-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subPages && (
                    <button
                      onClick={() => setExpandedMobileItem(
                        expandedMobileItem === item.name ? null : item.name
                      )}
                      className="ml-2 p-1"
                    >
                      <ChevronDown 
                        className={`h-4 w-4 text-foreground transition-transform duration-200 ${
                          expandedMobileItem === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  )}
                </div>
                {item.subPages && expandedMobileItem === item.name && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    {item.subPages.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-200 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="glass-primary" size="sm">
                Get App
              </Button>
            </div> */}
          </div>
        </div>
      )}


    </header>
  )
}

export default Header