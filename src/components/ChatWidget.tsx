import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, ChevronDown } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello EPR Nexuss, I would like to know about your services.");
    window.open(`https://wa.me/919773870268?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+919773870268", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl p-4 mb-2 max-w-[250px] border border-gray-100 relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={12} />
            </button>
            <p className="text-sm text-gray-700 font-medium">
              👋 Hi! How can we help you today?
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Chat with us on WhatsApp or Call directly
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl p-4 mb-2 w-[280px] border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <h4 className="font-semibold text-gray-800">Contact Us</h4>
                <p className="text-xs text-gray-500">We typically reply in minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="space-y-3">
              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-white/80">+91 97738 70268</p>
                </div>
              </motion.button>

              {/* Call Button */}
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">Call Us</p>
                  <p className="text-xs text-white/80">+91 97738 70268</p>
                </div>
              </motion.button>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400">
                Available Mon-Sat, 9AM-6PM
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-gray-600 rotate-0" 
            : "bg-[#25D366] hover:bg-[#128C7E]"
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
