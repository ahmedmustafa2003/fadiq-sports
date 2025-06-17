import { Package, Palette, Truck, Headphones, Globe, Shield, Clock, Award } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Package,
      title: 'Custom Manufacturing',
      description: 'End-to-end manufacturing of sports equipment and apparel tailored to your specifications.',
      features: ['Product Design', 'Material Selection', 'Quality Control', 'Bulk Production'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      delay: '0.1s'
    },
    {
      icon: Palette,
      title: 'Design & Customization',
      description: 'Complete design services from concept to final product with your branding and specifications.',
      features: ['Logo Integration', 'Color Matching', 'Size Variations', 'Design Consultation'],
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      delay: '0.2s'
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Worldwide shipping and logistics solutions ensuring timely delivery to any destination.',
      features: ['Express Shipping', 'Bulk Delivery', 'Customs Handling', 'Tracking System'],
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      delay: '0.3s'
    },
    {
      icon: Headphones,
      title: 'B2B Support',
      description: 'Dedicated account management and support for business clients and distributors.',
      features: ['Account Manager', '24/7 Support', 'Technical Assistance', 'Order Tracking'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      delay: '0.4s'
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'International Distribution',
      description: 'Partner with us as a distributor in your region',
      delay: '0.1s'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and certification processes',
      delay: '0.2s'
    },
    {
      icon: Clock,
      title: 'Rush Orders',
      description: 'Expedited production for urgent requirements',
      delay: '0.3s'
    },
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Help with sports federation approvals and certifications',
      delay: '0.4s'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your requirements, timeline, and specifications in detail.',
      delay: '0.1s'
    },
    {
      step: '02',
      title: 'Design & Quote',
      description: 'Our team creates designs and provides detailed pricing and timeline.',
      delay: '0.2s'
    },
    {
      step: '03',
      title: 'Sample Approval',
      description: 'We produce samples for your approval before full production begins.',
      delay: '0.3s'
    },
    {
      step: '04',
      title: 'Production',
      description: 'Manufacturing begins with regular updates on progress and quality checks.',
      delay: '0.4s'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Comprehensive testing and inspection before packaging and shipping.',
      delay: '0.5s'
    },
    {
      step: '06',
      title: 'Delivery',
      description: 'Secure packaging and reliable shipping to your specified location.',
      delay: '0.6s'
    }
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
            Comprehensive sports equipment manufacturing and business solutions 
            for teams, clubs, distributors, and organizations worldwide.
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
              End-to-end solutions for all your sports equipment and apparel needs
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: service.delay }}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={service.image}
                      alt={service.title}
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
                    <h3 className="font-gliker-bold text-3xl font-bold text-black">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
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
              Comprehensive support services to enhance your business success
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
                <h3 className="font-gliker text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              From initial consultation to final delivery, we ensure a smooth and transparent process
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
                <h3 className="font-gliker text-xl font-bold text-black mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
            Let's discuss your project requirements and create a custom solution 
            that meets your needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Request Quote
            </button>
            <button className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;