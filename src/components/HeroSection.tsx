import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Crafting Digital Experiences That Transform Businesses",
  subtitle = "We build modern, responsive websites and web applications that help businesses grow, engage customers, and increase revenue.",
  ctaText = "Get Started",
  onCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500 blur-[120px]" />
          <div className="absolute top-2/3 left-1/2 w-80 h-80 rounded-full bg-cyan-500 blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              Software Solutions Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-lg"
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=80"
                alt="Decorative"
                className="h-16 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=80"
                alt="Decorative"
                className="h-16 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=80"
                alt="Decorative"
                className="h-16 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
