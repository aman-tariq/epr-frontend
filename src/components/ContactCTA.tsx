import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Achieve Compliance. Promote Circularity.
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            Partner with EPR Nexuss for comprehensive waste management and EPR credit solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a href="mailto:info@eprnexuss.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
              <Mail size={18} /> info@eprnexuss.com
            </a>
            <a href="tel:+919289659966" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
              <Phone size={18} /> +91 9289659966
            </a>
            <span className="flex items-center gap-2 text-primary-foreground/80">
              <Globe size={18} /> www.eprnexuss.com
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-secondary text-primary-foreground font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 text-sm"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
