import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (messageType = "") => {
    const phoneNumber = "+923340022920"; // FIDAQ Sports WhatsApp number
    let message = "Hello FIDAQ Sports team!";

    switch (messageType) {
      case "business":
        message = "I have a business inquiry about your products.";
        break;
      case "product":
        message = "I need information about your sports products.";
        break;
      case "distributor":
        message = "I am interested in becoming a distributor.";
        break;
      case "quote":
        message = "I would like to request a custom quote.";
        break;
      default:
        message = "Hello! I am interested in FIDAQ Sports products.";
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold">FIDAQ Sports Support</h3>
                <p className="text-xs opacity-90">
                  Mon-Sat: 9:00 AM - 8:00 PM (PST)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hello! Welcome to FIDAQ Sports. We're here to assist you
                with:
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => handleWhatsAppClick("business")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm flex items-center"
              >
                <span className="mr-2">💼</span> Business & Bulk Inquiries
              </button>
              <button
                onClick={() => handleWhatsAppClick("product")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm flex items-center"
              >
                <span className="mr-2">⚽</span> Product Information
              </button>
              <button
                onClick={() => handleWhatsAppClick("distributor")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm flex items-center"
              >
                <span className="mr-2">🌍</span> Distributor Partnership
              </button>
              <button
                onClick={() => handleWhatsAppClick("quote")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm flex items-center"
              >
                <span className="mr-2">💰</span> Custom Quote Request
              </button>
            </div>

            <button
              onClick={() => handleWhatsAppClick()}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              Start WhatsApp Chat
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Typically replies within 30 minutes during business hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
