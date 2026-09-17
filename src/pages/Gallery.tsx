"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from "lucide-react";

/* ------------------------------------------------------------------
 * SEO / METADATA
 * ---------------------------------------------------------------- */
export const galleryPageMeta = {
  title: "Gallery — EPR Nexuss",
  description:
    "A visual look at plastic recycling, industrial processing and waste management operations — from EPR Nexuss.",
  path: "/gallery",
};

/* ------------------------------------------------------------------
 * IMAGE SOURCE
 * Real photographs, sourced from Wikimedia Commons (public domain /
 * freely licensed — see credit note at the bottom of the page).
 * Swap any `file` below for your own photo path whenever you have
 * real site photography — nothing else in this component changes.
 * ---------------------------------------------------------------- */
function commonsUrl(file: string, width = 1200) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file
  )}?width=${width}`;
}

interface GalleryItem {
  id: string;
  title: string;
  credit: string;
  file: string; // Wikimedia Commons filename
  aspect: "square" | "tall" | "wide";
}

const items: GalleryItem[] = [
  {
    id: "g01",
    title: "Materials recovery facility floor",
    credit: "Wikimedia Commons",
    file: "Materials recovery facility.jpg",
    aspect: "tall",
  },
  {
    id: "g02",
    title: "Workers sorting recyclables, Montgomery County MRF",
    credit: "USEPA / Wikimedia Commons (public domain)",
    file: "Municipal recycling facilities, Montgomery County, MD. 2007, Credit USEPA (14410405277).jpg",
    aspect: "wide",
  },
  {
    id: "g03",
    title: "Automated sorting line",
    credit: "Wikimedia Commons",
    file: "Materials recovery facility 2.jpg",
    aspect: "square",
  },
  {
    id: "g04",
    title: "Trommel screen separator",
    credit: "Wikimedia Commons",
    file: "Trommel separating municipal waste.JPG",
    aspect: "square",
  },
  {
    id: "g05",
    title: "Magnetic separator unit",
    credit: "Wikimedia Commons",
    file: "Separador magnético.JPG",
    aspect: "tall",
  },
  {
    id: "g07",
    title: "Ballistic separator system",
    credit: "Wikimedia Commons",
    file: "Separador balístico.JPG",
    aspect: "square",
  },
  {
    id: "g08",
    title: "Non-selective waste sorting machine",
    credit: "Wikimedia Commons",
    file: "Non-selective domestic waste sorting machine.JPG",
    aspect: "square",
  },
  
  {
    id: "g10",
    title: "Manual waste sorting line",
    credit: "Wikimedia Commons",
    file: "TriagemDeLixo.jpg",
    aspect: "square",
  },
  {
    id: "g11",
    title: "Waste reception pit",
    credit: "Wikimedia Commons",
    file: "Foso de recepción.JPG",
    aspect: "wide",
  },
  {
    id: "g12",
    title: "Recovered material processing line",
    credit: "Wikimedia Commons",
    file: "Materials recovery facility 3.jpg",
    aspect: "square",
  },
  {
    id: "g13",
    title: "Pneumatic material collection system",
    credit: "Wikimedia Commons",
    file: "Batería de captaciones neumáticas.jpg",
    aspect: "tall",
  },
  {
    id: "g14",
    title: "Recycled aggregate, 20–40mm",
    credit: "Wikimedia Commons",
    file: "20 to 40mm recycled aggregates (6069277558).jpg",
    aspect: "square",
  },
];

const aspectClass: Record<GalleryItem["aspect"], string> = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
};

/* ------------------------------------------------------------------
 * TILE
 * ---------------------------------------------------------------- */
function GalleryTile({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative w-full mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card ${aspectClass[item.aspect]} text-left`}
    >
      <img
        src={commonsUrl(item.file)}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm font-medium leading-snug">{item.title}</p>
      </div>

      <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="h-4 w-4 text-white" />
      </div>
    </motion.button>
  );
}

/* ------------------------------------------------------------------
 * LIGHTBOX
 * ---------------------------------------------------------------- */
function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 sm:px-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full"
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
          <img
            src={commonsUrl(item.file, 1600)}
            alt={item.title}
            className="w-full max-h-[70vh] object-contain mx-auto"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-white font-medium">{item.title}</p>
            <p className="text-white/50 text-xs mt-0.5">{item.credit}</p>
          </div>
          <p className="text-white/50 text-sm tabular-nums">
            {index + 1} / {items.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
 * PAGE
 * ---------------------------------------------------------------- */
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const navLightbox = (dir: 1 | -1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev + dir + items.length) % items.length;
    });
  };

  return (
    <main className="w-full bg-background text-foreground font-sans md:mt-10">
      {/* ---------------- HERO ---------------- */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <svg
          className="absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.14] pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="45" stroke="white" strokeWidth="3" />
        </svg>

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Images className="h-4 w-4" />
              Gallery
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold mt-5">
              Inside recycling & industrial operations
            </h1>
            <p className="text-white/85 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
              Sorting lines, materials recovery facilities and processing
              equipment — a visual look at the operations behind plastic
              EPR compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- MASONRY GRID ---------------- */}
      <section className="w-full py-10 sm:py-14">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {items.map((item, i) => (
              <GalleryTile key={item.id} item={item} onOpen={() => setLightboxIndex(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CREDIT NOTE ---------------- */}
     
      {/* ---------------- LIGHTBOX ---------------- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox index={lightboxIndex} onClose={closeLightbox} onNav={navLightbox} />
        )}
      </AnimatePresence>
    </main>
  );
}