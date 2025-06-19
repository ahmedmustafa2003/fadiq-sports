import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Users,
  Award,
  Truck,
  Star,
  ChevronDown,
} from "lucide-react";
import Sports_ball from "../assets/images/Sports_ball.jpeg";
import Team_uniform from "../assets/images/Team_uniform.jpeg";
import training from "../assets/images/traning.jpeg";
import protective from "../assets/images/protective.jpg";

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving 500+ clients across Europe, Middle East, Americas, Asia, and Africa",
      delay: "0.1s",
    },
    {
      icon: Users,
      title: "8+ Years Experience",
      description:
        "Established in 2016 with 50+ team members delivering excellence",
      delay: "0.2s",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Professional-grade sports equipment and apparel manufacturing",
      delay: "0.3s",
    },
    {
      icon: Truck,
      title: "1000+ Shipments",
      description: "Successful global deliveries with competitive bulk pricing",
      delay: "0.4s",
    },
  ];

  const productCategories = [
    {
      title: "Sports Balls",
      image: Sports_ball,
      description: "Professional footballs, basketballs, volleyballs, and more",
      delay: "0.1s",
    },
    {
      title: "Team Uniforms",
      image: Team_uniform,
      description: "Custom jerseys, shorts, and complete team kits",
      delay: "0.2s",
    },
    {
      title: "Protective Gear",
      image: protective,
      description: "Gloves, pads, helmets, and safety equipment",
      delay: "0.3s",
    },
    {
      title: "Training Equipment",
      image: training,
      description: "Cones, agility ladders, training accessories",
      delay: "0.4s",
    },
  ];

  const testimonials = [
    {
      name: "Global Sportswear Buyer",
      company: "Europe",
      country: "",
      text: "FIDAQ SPORTS consistently delivers world-class quality and attention to detail. We trust them as our long-term manufacturing partner.",
      rating: 5,
      delay: "0.1s",
    },
    {
      name: "International Sports Club Director",
      company: "USA",
      country: "",
      text: "Exceptional service, fast production times, and truly premium product finishes. Highly recommended.",
      rating: 5,
      delay: "0.2s",
    },
    {
      name: "Academy Manager",
      company: "Middle East",
      country: "",
      text: "Working with FIDAQ SPORTS has been a seamless experience from design to delivery. Excellent customer care.",
      rating: 5,
      delay: "0.3s",
    },
  ];

  return (
    <div className="pt-20 page-container">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-pattern">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 transform rotate-45 animate-float"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white/20 transform rotate-45 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/20 transform rotate-45 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="font-gliker-bold text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-shadow">
              FIDAQ SPORTS
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-300 mt-4">
                Professional Sports Equipment Manufacturer Since 2016
              </span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              Serving 500+ clients worldwide with premium sports equipment,
              custom uniforms, and professional gear. Trusted by clubs,
              academies and distributors across Europe, Asia, Americas and
              Africa.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                to="/products"
                className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/bulk-inquiry"
                className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                Request Bulk Quote
              </Link>
              <Link
                to="/distributor-application"
                className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-white hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Become a Distributor
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Why Choose FIDAQ Sports?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a supplier – we're your strategic partner in sports
              excellence with 8+ years of manufacturing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-enhanced text-center group hover:transform hover:scale-105 transition-all duration-300 p-8 animate-bounce-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-all duration-300 animate-pulse-glow">
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-gliker text-xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50 page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Our Product Lines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of professional sports equipment and apparel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="card-enhanced bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: category.delay }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-gliker text-xl font-bold text-black mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="text-black font-semibold hover:underline flex items-center space-x-1 transition-all duration-300"
                  >
                    <span>View Products</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Trusted by 500+ Clients Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our international clients say about our products and
              service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-enhanced bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-gliker">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-gliker-bold font-semibold text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  {testimonial.country && (
                    <p className="text-sm text-gray-500">
                      {testimonial.country}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join our 500+ satisfied clients worldwide. Get a custom quote for
              your team, club, or distribution needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <Link
                to="/register"
                className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                Create B2B Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
