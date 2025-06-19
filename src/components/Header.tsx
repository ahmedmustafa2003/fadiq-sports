import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/images/Logo_black.png";
import pkFlag from "../assets/images/pakistan_flag.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name - Left */}
          <Link
            to="/"
            className="flex items-center space-x-3 focus:outline-none"
          >
            <img src={Logo} alt="Company Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold">
              FIDAQ
              <span className="text-gray-400"> SPORTS</span>
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-black"
                    : "text-gray-600"
                } hover:text-black text-sm px-3 py-2 font-medium transition-colors duration-200 relative group link-hover-underline`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Section and Flag - Right */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* User Menu */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none hover-lift"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none hover-lift"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none hover-lift"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 focus:outline-none transform hover:scale-105"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Pakistani Flag */}
            <img src={pkFlag} alt="Pakistani Flag" className="h-12 w-auto" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Search (Mobile) */}
            <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none">
              <Search className="h-5 w-5" />
            </button>

            {/* Pakistani Flag (Mobile) */}
            <img src={pkFlag} alt="Pakistani Flag" className="h-8 w-auto" />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-black transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg mt-2 shadow-lg animate-slide-in-left">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-black bg-gray-100"
                    : "text-gray-700"
                } hover:text-black hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 relative group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t border-gray-200 pt-2 mt-2">
              {isAuthenticated ? (
                <div className="space-y-1">
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-black hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-black hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-black hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-black text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none mx-3 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
