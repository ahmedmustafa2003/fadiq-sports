import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Logo from "../assets/images/Logo_original_white.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const businessLinks = [
    { name: "Bulk Inquiry", href: "/bulk-inquiry" },
    { name: "Distributor Application", href: "/distributor-application" },
    { name: "B2B Login", href: "/login" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
  ];

  const regions = [
    "Europe (France, Germany, Italy, Spain)",
    "Middle East (UAE, Saudi Arabia, Qatar)",
    "Americas (USA, Canada, Brazil)",
    "Asia Pacific (China, Japan, Australia)",
    "Africa (South Africa, Nigeria, Kenya)",
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="FIDAQ Sports Logo"
                className="h-20 w-auto rounded"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Professional manufacturer of sports equipment and apparel since
              2016, serving 500+ clients worldwide with 1000+ successful
              shipments.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Sialkot, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+92 334 0022920</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">fidaq@fidaqsports.com</span>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>
                    <strong>Working Hours (Local):</strong> Mon–Sat: 9:00 AM to
                    6:00 PM (Pakistan Standard Time)
                  </p>
                  <p>
                    <strong>Working Hours (International):</strong> Mon–Sat:
                    9:00 AM to 8:00 PM (International Support)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business</h3>
            <ul className="space-y-3">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FIDAQ Sports. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Certified by:</span>
            <div className="flex space-x-4">
              <span className="text-gray-400 text-xs bg-gray-800 px-2 py-1 rounded">
                ISO 9001
              </span>
              <span className="text-gray-400 text-xs bg-gray-800 px-2 py-1 rounded">
                CE
              </span>
              <span className="text-gray-400 text-xs bg-gray-800 px-2 py-1 rounded">
                FIFA
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
