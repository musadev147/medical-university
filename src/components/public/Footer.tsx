import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071A3D] text-white border-t border-white/10 pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Glow sphere */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#003CC7]/15 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
        
        {/* Column 1: Institutional Intro (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#003CC7] p-2 rounded-xl flex items-center justify-center border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-extrabold tracking-wider text-white block">Bangabandhu Medical University</span>
              <span className="text-[10px] font-bold text-white/50 block tracking-widest mt-[-4px]">UNIVERSITY</span>
            </div>
          </Link>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            Advancing healthcare education and postgraduate clinical technologies to shape next-generation medical leaders, specialist doctors, and research practitioners in Bangladesh.
          </p>
          <div className="flex items-center gap-3">
            <a href="#facebook" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/10 hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#twitter" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500/10 hover:text-sky-400 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#linkedin" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#github" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-slate-700/10 hover:text-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (2.5 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-bold text-white tracking-widest uppercase border-b border-white/10 pb-3">Quick Links</h3>
          <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Institution</Link></li>
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">College Departments</Link></li>
            <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses & Syllabus</Link></li>
            <li><Link to="/admissions" className="hover:text-blue-400 transition-colors">Admission Details</Link></li>
            <li><Link to="/news" className="hover:text-blue-400 transition-colors">College News & Events</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Directory</Link></li>
          </ul>
        </div>

        {/* Column 3: Departments (2.5 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xs font-bold text-white tracking-widest uppercase border-b border-white/10 pb-3">Departments</h3>
          <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Anatomy & Physiology</Link></li>
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Pathology & Microbiology</Link></li>
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Pharmacology</Link></li>
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">General Medicine & Surgery</Link></li>
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Gynecology & Pediatrics</Link></li>
            <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Cardiology & Neurology</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact info (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xs font-bold text-white tracking-widest uppercase border-b border-white/10 pb-3">Contact Desk</h3>
          <ul className="space-y-4 text-xs text-slate-400 font-semibold">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Shahbagh, Dhaka-1000, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>+880 2-55165787 (Admissions Hotline)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>registrar@bmu.ac.bd</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold gap-4">
        <p>© 2026 Bangabandhu Medical University. All rights reserved.</p>
        <p className="uppercase tracking-wider text-[10px]">Security Audited By BMU ICT Cell</p>
      </div>
    </footer>
  );
}
