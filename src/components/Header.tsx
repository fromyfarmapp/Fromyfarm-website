"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/abou" },
    { name: "Tutorials", href: "/tutorial" },
    { name: "Marketplace", href: "/marketplac" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Donate", href: "/donate" },
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
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
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
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="glass-primary" size="sm">
                Get App
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header