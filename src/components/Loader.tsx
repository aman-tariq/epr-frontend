import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop } from "lucide-react";

interface LoaderProps {
  children: React.ReactNode;
}

const Loader = ({ children }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -inset-[100%] opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Glassmorphism card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Laptop container with glow */}
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  }}
                />

                {/* Laptop icon */}
                <motion.div
                  className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/10"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Laptop
                    size={80}
                    strokeWidth={1.5}
                    className="text-white"
                  />

                  {/* Screen glow animation */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-12 h-8 rounded-sm"
                    style={{
                      background: "linear-gradient(180deg, #3b82f6, #06b6d4)",
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              {/* Loading text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 text-white/80 text-sm font-medium tracking-wider uppercase"
              >
                Preparing your experience
              </motion.p>

              {/* Progress bar container */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 w-48"
              >
                {/* Progress bar background */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  {/* Progress bar fill */}
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Percentage text */}
                <motion.p
                  className="text-center mt-2 text-white/60 text-xs font-mono"
                  key={Math.round(progress)}
                >
                  {Math.min(Math.round(progress), 100)}%
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Bottom branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-8 text-center"
            >
              <p className="text-white/40 text-sm font-medium">
                EPR <span className="text-blue-400">Nexuss</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - shown after loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Loader;
