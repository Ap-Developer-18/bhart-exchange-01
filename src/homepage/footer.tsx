import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  DollarSign,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center underline space-x-2">
              <div className="rounded-lg flex gap-1 font-rose font-extrabold text-3xl items-center justify-center">
                <DollarSign className="stroke-4" /> BhartPay
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional salon management system helping beauty businesses
              thrive with modern tools and seamless customer experiences.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-pink--whittext-whiteition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink--whittext-whiteition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink--whittext-whiteition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/appointments"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Appointments
                </a>
              </li>
              <li>
                <a
                  href="/employees"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Staff Management
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/customers"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="/reports"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/tutorials"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Video Tutorials
                </a>
              </li>
              <li>
                <a
                  href="/api-docs"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="/status"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  support@salonpro.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Beauty Street
                  <br />
                  Salon City, SC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4 lg:mb-0">
                Get the latest updates on new features and salon management
                tips.
              </p>
            </div>
            <div className="lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <Input type="email" placeholder="Enter your email" />
                <Button className="text-primary" variant="outline">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} SalonPro. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>for salon owners</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-6 mt-4 md:mt-0 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
