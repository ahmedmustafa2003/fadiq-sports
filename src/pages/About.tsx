import React from 'react';
import { Target, Users, Trophy, Zap, Globe, Award, Shield, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art facilities ensuring consistent quality and precision in every product.'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Serving clients across Europe, Middle East, Americas, Asia, and Africa with local support.'
    },
    {
      icon: Trophy,
      title: 'Proven Excellence',
      description: 'Trusted by professional teams, academies, and distributors worldwide for over 15 years.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Continuous investment in R&D to deliver cutting-edge sports equipment and technology.'
    }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with local understanding and international standards.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every product meets rigorous quality standards and international certifications.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships through consistent delivery and service excellence.'
    },
    {
      icon: Truck,
      title: 'Efficient Logistics',
      description: 'Streamlined supply chain ensuring timely delivery to any location worldwide.'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started as a small sports equipment manufacturer in Europe' },
    { year: '2012', title: 'International Expansion', description: 'Expanded operations to Middle East and Africa markets' },
    { year: '2016', title: 'Technology Innovation', description: 'Launched advanced manufacturing processes and quality systems' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented B2B platform and enhanced customer experience' },
    { year: '2024', title: 'Global Leadership', description: 'Serving 50+ countries with 1000+ satisfied business clients' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About FIDAQ Sports
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leading manufacturer of professional sports equipment and apparel, 
              serving athletes, teams, and organizations worldwide since 2008.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower athletes, teams, and sports organizations worldwide by providing 
                  premium quality sports equipment and apparel. We believe that every athlete 
                  deserves access to professional-grade gear that enhances performance and safety.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the global leader in sports equipment manufacturing, recognized for 
                  innovation, quality, and customer service. We envision a world where every 
                  sports organization has access to customized, high-quality equipment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">1000+</div>
                  <div className="text-gray-600">Business Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">500K+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Manufacturing facility"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth from a local manufacturer to a global sports equipment leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-black mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our global network of satisfied clients. Experience the FIDAQ Sports difference 
            in quality, service, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Contact Our Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
              Download Company Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;