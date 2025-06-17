import { Target, Users, Trophy, Zap, Globe, Award, Shield, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art facilities ensuring consistent quality and precision in every product.',
      delay: '0.1s'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Serving clients across Europe, Middle East, Americas, Asia, and Africa with local support.',
      delay: '0.2s'
    },
    {
      icon: Trophy,
      title: 'Proven Excellence',
      description: 'Trusted by professional teams, academies, and distributors worldwide for over 15 years.',
      delay: '0.3s'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Continuous investment in R&D to deliver cutting-edge sports equipment and technology.',
      delay: '0.4s'
    }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with local understanding and international standards.',
      delay: '0.1s'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every product meets rigorous quality standards and international certifications.',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships through consistent delivery and service excellence.',
      delay: '0.3s'
    },
    {
      icon: Truck,
      title: 'Efficient Logistics',
      description: 'Streamlined supply chain ensuring timely delivery to any location worldwide.',
      delay: '0.4s'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started as a small sports equipment manufacturer in Europe', delay: '0.1s' },
    { year: '2012', title: 'International Expansion', description: 'Expanded operations to Middle East and Africa markets', delay: '0.2s' },
    { year: '2016', title: 'Technology Innovation', description: 'Launched advanced manufacturing processes and quality systems', delay: '0.3s' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented B2B platform and enhanced customer experience', delay: '0.4s' },
    { year: '2024', title: 'Global Leadership', description: 'Serving 50+ countries with 1000+ satisfied business clients', delay: '0.5s' }
  ];

  return (
    <div className="pt-20 page-container">
      {/* Hero Section */}
      <section className="py-20 gradient-bg-dark text-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-gliker-bold text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
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
                className="text-center group animate-bounce-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-lg">
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-gliker text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="font-gliker-bold text-3xl font-bold text-black mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower athletes, teams, and sports organizations worldwide by providing 
                  premium quality sports equipment and apparel. We believe that every athlete 
                  deserves access to professional-grade gear that enhances performance and safety.
                </p>
              </div>
              
              <div>
                <h2 className="font-gliker-bold text-3xl font-bold text-black mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the global leader in sports equipment manufacturing, recognized for 
                  innovation, quality, and customer service. We envision a world where every 
                  sports organization has access to customized, high-quality equipment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-black">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
                  <div className="text-3xl font-bold text-black">1000+</div>
                  <div className="text-gray-600">Business Clients</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <div className="text-3xl font-bold text-black">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  <div className="text-3xl font-bold text-black">500K+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Manufacturing facility"
                className="rounded-xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
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
                className="card-enhanced bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in"
                style={{ animationDelay: value.delay }}
              >
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <value.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-gliker text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white page-bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold text-black mb-6 text-gradient">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth from a local manufacturer to a global sports equipment leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-black via-gray-400 to-black"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: milestone.delay }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-enhanced bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-black mb-2">{milestone.year}</div>
                      <h3 className="font-gliker text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg animate-pulse-glow"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="font-gliker-bold text-4xl sm:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our global network of satisfied clients. Experience the FIDAQ Sports difference 
            in quality, service, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Contact Our Team
            </button>
            <button className="btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
              Download Company Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;