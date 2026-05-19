import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 px-4 bg-[#F7F9FC]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-[#071A3D] rounded-[32px] overflow-hidden relative p-8 md:p-16 text-center text-white border border-white/10 shadow-2xl"
      >
        {/* Glow Spheres */}
        <div className="absolute inset-0 bg-radial-glow-dark opacity-80 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#003CC7]/40 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E11D48]/20 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm border border-white/10 text-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open 2026 - 2027
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
            Shape the Future of Medicine with Us
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Join a community of dedicated healthcare professionals, research innovators, and academic excellence. Take your first step today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/admissions"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#003CC7] to-[#1E60FF] hover:from-[#1E60FF] hover:to-[#003CC7] rounded-2xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-300 flex items-center justify-center gap-2 outline-none focus:ring-4 focus:ring-blue-500/20"
            >
              Apply Online Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all border border-white/15 hover:border-white/25 flex items-center justify-center gap-2 outline-none"
            >
              Contact Registrar
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
