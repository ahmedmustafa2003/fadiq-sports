import React from 'react';
import { Dumbbell, Heart, Users2, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength & Conditioning',
      description: 'Comprehensive strength training programs designed to build power, endurance, and athletic performance.',
      features: ['Personalized workout plans', 'Progressive overload training', 'Injury prevention focus', 'Performance tracking']
    },
    {
      icon: Heart,
      title: 'Sports Medicine',
      description: 'Professional sports medicine services including injury prevention, treatment, and rehabilitation.',
      features: ['Injury assessment', 'Rehabilitation programs', 'Movement analysis', 'Recovery protocols']
    },
    {
      icon: Users2,
      title: 'Team Training',
      description: 'Specialized group training sessions for teams looking to improve coordination and performance.',
      features: ['Team building exercises', 'Tactical training', 'Group fitness sessions', 'Competition preparation']
    },
    {
      icon: Calendar,
      title: 'Personal Coaching',
      description: 'One-on-one coaching sessions tailored to individual goals and athletic development needs.',
      features: ['Individual assessment', 'Custom training plans', 'Technique refinement', 'Mental coaching']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive sports training and development services designed to elevate your athletic performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;