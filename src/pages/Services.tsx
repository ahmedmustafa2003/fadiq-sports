import {
  Package,
  Palette,
  Truck,
  Headphones,
  Globe,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Package,
      title: "Custom Manufacturing",
      description:
        "End-to-end manufacturing of sports equipment and apparel from our Sialkot facilities.",
      features: [
        "Product Design & Development",
        "Material Sourcing & Selection",
        "Stringent Quality Control",
        "Bulk Production Capacity",
      ],
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      delay: "0.1s",
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description:
        "Complete customization services with your branding and specifications.",
      features: [
        "Logo Embroidery & Printing",
        "Custom Color Matching",
        "Size Variations & Fit Customization",
        "Design Consultation",
      ],
      image:
        "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      delay: "0.2s",
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description:
        "Reliable worldwide shipping with 1000+ successful shipments completed.",
      features: [
        "Air & Sea Freight Options",
        "Bulk Container Shipments",
        "Customs Documentation",
        "Real-time Tracking",
      ],
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      delay: "0.3s",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Personalized account management for our 500+ business clients.",
      features: [
        "Dedicated Account Manager",
        "Multilingual Support",
        "Technical Assistance",
        "Order Monitoring",
      ],
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      delay: "0.4s",
    },
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "International Distribution",
      description: "Become our authorized distributor in your region",
      delay: "0.1s",
    },
    {
      icon: Shield,
      title: "Quality Certification",
      description: "ISO and international standard compliance",
      delay: "0.2s",
    },
    {
      icon: Clock,
      title: "Fast-Track Production",
      description: "Expedited manufacturing for urgent orders",
      delay: "0.3s",
    },
    {
      icon: Award,
      title: "Sports Federation Approval",
      description: "Assistance with FIFA and other certifications",
      delay: "0.4s",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We discuss your requirements, quantities, and specifications in detail.",
      delay: "0.1s",
    },
    {
      step: "02",
      title: "Design & Quotation",
      description:
        "Our team creates technical designs and provides competitive pricing.",
      delay: "0.2s",
    },
    {
      step: "03",
      title: "Sample Production",
      description:
        "We produce physical samples for your evaluation and approval.",
      delay: "0.3s",
    },
    {
      step: "04",
      title: "Full Production",
      description:
        "Manufacturing begins with regular quality checks and updates.",
      delay: "0.4s",
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Rigorous testing and inspection before packaging.",
      delay: "0.5s",
    },
    {
      step: "06",
      title: "Shipping & Delivery",
      description: "Secure packaging and reliable global logistics.",
      delay: "0.6s",
    },
  ];

  return (
    <div className="pt-20 page-container">
      {/* Hero Section */}
      <section className="py-20 gradient-bg-dark text-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="font-gliker-bold text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional sports equipment manufacturing and business solutions
            trusted by 500+ clients worldwide since 2016.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions from our 50+ team members in Sialkot,
              Pakistan
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 animate-slide-in-${
                  index % 2 === 0 ? "left" : "right"
                } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                style={{ animationDelay: service.delay }}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={`FIDAQ Sports ${service.title}`}
                      className="rounded-xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center animate-pulse-glow">
                      <service.icon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="font-gliker-bold text-3xl font-bold text-black">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="btn-primary bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Value-added services to support your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="card-enhanced bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in"
                style={{ animationDelay: service.delay }}
              >
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-gliker text-xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent workflow from concept to delivery with 8+ years of
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative card-enhanced bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: step.delay }}
              >
                <div className="absolute -top-4 -left-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg animate-pulse-glow">
                  {step.step}
                </div>
                <h3 className="font-gliker text-xl font-bold text-black mb-4 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Contact our team today to discuss your sports equipment needs
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Request Quote
            </button>
            <button className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
              Call +92 334 0022920
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
