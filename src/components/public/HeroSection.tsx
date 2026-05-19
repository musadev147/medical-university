import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-[#071A3D] text-white overflow-hidden py-24 lg:py-36 px-4 min-h-[90vh] flex items-center">
      {/* Background Video (High-speed Pexels/Vimeo Medical Research Loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 scale-[1.02]"
      >
        <source
          src="/library.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Premium Overlay Gradient for maximum text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/95 via-[#071A3D]/85 to-[#071A3D]/65 z-10 pointer-events-none" />
      
      {/* Golden-Blue Academic Highlight Bottom Trim */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#0f5132] via-[#003CC7] to-[#1E60FF] z-20 pointer-events-none" />

      {/* Radial ambient spheres */}
      <div className="absolute inset-0 bg-radial-glow-dark opacity-40 pointer-events-none z-10" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#003CC7]/30 blur-[130px] pointer-events-none z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E11D48]/15 blur-[120px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Headline and Description */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#003CC7]/20 border border-[#003CC7]/40 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-blue-200 backdrop-blur-sm"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Accredited Institutional Excellence
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] uppercase">
              Advancing Healthcare
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-blue-400 to-[#1E60FF] bg-clip-text text-transparent uppercase">
              Empowering Leaders
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] uppercase text-white">
              in Medicine
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium"
          >
            Bangladesh's premier postgraduate medical university offering state-of-the-art clinical teaching, research innovations, and world-class healthcare programs for medical professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              to="/admissions"
              className="px-8 py-4 bg-gradient-to-r from-[#003CC7] to-[#1E60FF] hover:from-[#1E60FF] hover:to-[#003CC7] rounded-2xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-300 flex items-center justify-center gap-2 outline-none"
            >
              Enroll Online
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all border border-white/15 hover:border-white/25 flex items-center justify-center gap-2 outline-none text-center"
            >
              Explore Campus Heritage
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Floating Showcase */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[420px] bg-white/5 backdrop-blur-glass border border-white/10 p-8 rounded-[32px] shadow-2xl relative space-y-6"
          >
            {/* Visual Header */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-6 text-left">
              <div className="p-3 bg-[#003CC7] rounded-2xl text-white">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg uppercase tracking-tight text-white">College Portal Gateway</h3>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Secure Institutional Hub</p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Grid-Protected Gateway</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed mt-0.5">Encrypted administrative pathways for students, doctors, and payroll managers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mt-0.5 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Verified Credentials</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed mt-0.5">Institutional gatekeeper ensures zero-trust active session protection.</p>
                </div>
              </div>
            </div>

            {/* Action Direct Link */}
            <div className="pt-2">
              <Link
                to="/login"
                className="w-full h-14 bg-white text-[#071A3D] hover:bg-[#F7F9FC] font-extrabold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-300 outline-none shadow-md hover:-translate-y-0.5"
              >
                Access College Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
