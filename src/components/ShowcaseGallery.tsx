import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";
import showcase5 from "@/assets/showcase-5.jpg";
import showcase6 from "@/assets/showcase-6.jpg";

const showcaseItems = [
  {
    image: showcase1,
    title: "Waste Management Process",
    description: "Complete recycling workflow from collection to processing"
  },
  {
    image: showcase2,
    title: "Protecting Our Planet",
    description: "Sustainable solutions for a greener tomorrow"
  },
  {
    image: showcase3,
    title: "EPR Compliance Cycle",
    description: "End-to-end compliance management in India"
  },
  {
    image: showcase4,
    title: "AI-Powered Solutions",
    description: "Advanced technology for waste management"
  },
  {
    image: showcase5,
    title: "Modern E-Waste Facility",
    description: "State-of-the-art recycling infrastructure"
  },
  {
    image: showcase6,
    title: "Digital Connectivity",
    description: "Seamless integration across platforms"
  }
];

const ShowcaseGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Transforming Waste Management
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive approach to sustainable waste management and EPR compliance
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {item.description}
                </p>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/50 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={showcaseItems[selectedImage].image}
                alt={showcaseItems[selectedImage].title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {showcaseItems[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {showcaseItems[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseGallery;
