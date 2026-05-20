import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Building } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#071A3D]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/cldgC7YZ0Ck?autoplay=1&mute=1&loop=1&playlist=cldgC7YZ0Ck&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110 sm:scale-125"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        {/* Deep navy overlay for prestige */}
        <div className="absolute inset-0 bg-[#071A3D]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-transparent to-[#071A3D]/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Title Area */}
          <div className="lg:col-span-8 text-white space-y-6">
            <div className="inline-flex items-center gap-3 border-l-4 border-amber-500 pl-4 py-1">
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">Est. 1998</span>
              <span className="text-white/60 font-medium tracking-widest text-xs sm:text-sm uppercase">| Bangladesh's Premier Medical Institution</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold leading-[1.1] drop-shadow-xl" style={{ fontFamily: 'Georgia, serif' }}>
              Shaping the Future <br/> of Global Healthcare
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed tracking-wide">
              Dedicated to rigorous clinical research, compassionate patient care, and educating the next generation of medical leaders.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Link to="/admissions" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2 shadow-lg">
                <GraduationCap className="w-5 h-5" />
                Apply for Admission
              </Link>
              <Link to="/departments" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2">
                <Building className="w-5 h-5" />
                Explore Faculties
              </Link>
            </div>
          </div>

          {/* Quick Links / Notice Board - Classic University Feature */}
          <div className="lg:col-span-4">
            <div className="bg-[#0A224E]/95 backdrop-blur-md border-t-4 border-amber-500 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <BookOpen className="w-32 h-32" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                <div className="p-2 bg-amber-500/20 text-amber-500 rounded-sm">
                  <BookOpen className="w-4 h-4" />
                </div>
                Quick Resources
              </h3>
              
              <ul className="space-y-4 relative z-10">
                <li>
                  <Link to="/admissions" className="group flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors pb-4 border-b border-white/10">
                    <span className="font-medium text-sm tracking-wide">Admissions 2026</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="group flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors pb-4 border-b border-white/10">
                    <span className="font-medium text-sm tracking-wide">Academic Calendar</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="group flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors pb-4 border-b border-white/10">
                    <span className="font-medium text-sm tracking-wide">Student & Faculty Portal</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="group flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors pb-2">
                    <span className="font-medium text-sm tracking-wide">Recent Bulletins & News</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
