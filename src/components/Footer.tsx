import Link from "next/link"
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/abot" },
    { name: "Tutorials", href: "/tutorial" },
    { name: "Marketplace", href: "/marketplac" },
  ]

  const support = [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Donate", href: "/donate" },
  ]

  const userTypes = [
    { name: "For Farmers", href: "/tutorial" },
    { name: "For Buyers", href: "/tutorial" },
    { name: "For Suppliers", href: "/tutorial" },
    { name: "For Agents", href: "/tutorial" },
  ]

  return (
    <footer className="glass-header m-4 mt-20 ">
      <div className="container mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
              <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
          <img src="/images/fmf.png" alt="fromyfarm logo" className="w-20 h-20  "/>
          </div>
          
          <span className="text-xl font-bold gradient-text">Fromyfarm</span>
        </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the Golden Tractor Moment. A digital agricultural marketplace connecting farmers, buyers, and suppliers globally.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Plot 4847 Bukoto Kisaasi Road, Kisaasi, Dungu Zonea</span>
              </div>
            </div>

            {/* App Store Downloads */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                {/* Google Play Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.fromyfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex transform hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src="/images/android.png" 
                    alt="Get it on Google Play" 
                    className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>

                {/* Apple App Store */}
                <a
                  href="https://apps.apple.com/ug/app/fromyfarm/id6742323473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex transform hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src="/images/apple.png" 
                    alt="Download on the App Store" 
                    className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Types */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">User Guides</h3>
            <ul className="space-y-2">
              {userTypes.map((type) => (
                <li key={type.name}>
                  <Link
                    href={type.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
                
            </ul>

            {/* Contact Section */}
          </div>
            <div className="mt-6 space-y-4">
              <div className="flex space-x-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/256772123456?text=Hello%20Fromyfarm%20Team%2C%20I%20have%20a%20question%20about%20your%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-green-100 hover:bg-green-200 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-600 group-hover:text-green-700" />
                </a>

                {/* Email */}
                <a
                  href="mailto:info@fromyfarm.com?subject=Inquiry%20about%20Fromyfarm&body=Hello%20Fromyfarm%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20platform."
                  className="group flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="Email"
                >
                  <Mail className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/fromyfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-sky-100 hover:bg-sky-200 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="Twitter"
                >
                  <FaXTwitter className="w-5 h-5 text-sky-600 group-hover:text-sky-700" />
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <div className="flex flex-row space-y-3">
                <span>+256 743 101 292</span>
                <span>+256 772 123 456</span>
                </div>

              </div>
            </div>
        </div>

        {/* Social Media & App Downloads */}
        <div className="border-t border-white/20 mt-12 pt-4">
          {/* Copyright */}
          <div className="border-t border-white/10  flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Fromyfarm. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Experience the</span>
              <span className="gradient-text font-semibold">Golden Tractor Moment</span>
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer