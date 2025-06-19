import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Head Office: Sialkot, Punjab, Pakistan"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: +92 334 0022920",
        "Support: +92 334 0022920",
        "Emergency: +92 334 0022920",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "General: fidaq@fidaqsports.com",
        "Support: fidaqsports@gmail.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Local: Mon-Sat 9:00 AM - 6:00 PM (PST)",
        "International: Mon-Sat 9:00 AM - 8:00 PM",
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Contact FIDAQ Sports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, bulk orders, or
            partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black mb-6">
              Our Contact Details
            </h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-black mb-3">
                Live Chat Support
              </h4>
              <p className="text-gray-600 mb-2">
                Available during business hours:
              </p>
              <a
                href="https://wa.me/923340022920"
                className="text-black font-medium hover:underline"
              >
                WhatsApp: +92 334 0022920
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6">
              Send Your Inquiry
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (with country code)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="+92 334 0022920"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="product">Product Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="distributor">Distributor Application</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="Please include product details, quantities, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
