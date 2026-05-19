import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import Footer from '../components/public/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function PublicLayout() {
  const location = useLocation();

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content frame with padding for the sticky header */}
      <main className="flex-grow pt-[124px] lg:pt-[142px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
}
