import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioGrid from "./PortfolioGrid";
import ContactSection from "./ContactSection";

const HomePage = () => {
  // Animation variants for scroll reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Simple placeholder */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border/40 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/djjlogodark.png"
              alt="DJJ Software Solutions Logo"
              width="120"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#hero"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-24">
          <HeroSection />
        </section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <ServicesSection />
        </motion.section>

        {/* Portfolio Grid */}
        <motion.section
          id="portfolio"
          className="py-20 bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <PortfolioGrid />
        </motion.section>

        {/* Contact Section with Testimonials */}
        <motion.section
          id="contact"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <ContactSection />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">WebDevStudio</h3>
              <p className="text-sm text-muted-foreground">
                Creating exceptional digital experiences that drive business
                growth.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    E-commerce Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mobile Applications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} WebDevStudio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => {
          // Use the global Lenis instance to scroll to top
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
          } else {
            // Fallback to native scrolling if Lenis isn't available
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default HomePage;
