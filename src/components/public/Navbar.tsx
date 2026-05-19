import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, LogOut, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  // Check login state
  useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('app_user');
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    checkUser();
    // Listen for localstorage updates
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, [location]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Faculty', path: '/faculty-public' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Courses', path: '/courses' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('app_user');
    setUser(null);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-md">
      {/* Top Bangladesh Govt Style Notice Marquee */}
      <div className="bg-[#0f5132] text-white text-[10px] sm:text-[11px] font-bold py-2 px-4 flex justify-between items-center border-b border-white/10 relative z-50">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse shrink-0" />
          <span className="uppercase tracking-wider text-[9px] sm:text-[10px] text-amber-300">BMU BULLETINS:</span>
        </div>
        <div className="overflow-hidden w-full mx-6 relative h-4">
          <div className="animate-marquee whitespace-nowrap absolute flex gap-16 text-slate-100 text-[10px] sm:text-[11px]">
            <span>📢 Result of BSc in Nursing Admission Test Session 2025-2026 is published! Visit our portal to apply.</span>
            <span>📢 Result of Master of Science in Nursing (MSN) Admission July 2026 session has been released.</span>
            <span>📢 Notice of form fill-up for MD Forensic Medicine Residency Program July 2026 session is open now!</span>
            <span>📢 BMU-RCP Joint International Collaboration Meeting successfully finalized postgraduate standards.</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0 text-slate-300 text-[9px] uppercase font-extrabold tracking-widest">
          <span>GOVT APPROVED</span>
          <span>|</span>
          <span className="text-emerald-300">ENGLISH</span>
        </div>
      </div>

      <nav className={`transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-[#071A3D]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5' 
          : 'bg-[#071A3D]/80 backdrop-blur-sm border-b border-white/5 py-4.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo Emblem */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-[#003CC7] to-[#1E60FF] p-2 rounded-xl shadow-md flex items-center justify-center border border-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-sm font-extrabold tracking-wider text-white block">Bangabandhu Medical University</span>
            <span className="text-[10px] font-bold text-white/50 block tracking-widest mt-[-4px]">UNIVERSITY</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-extrabold uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button stack */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="px-5 py-2.5 bg-[#003CC7] hover:bg-[#1E60FF] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border border-white/10"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="p-2.5 bg-white/5 hover:bg-rose-500/10 text-slate-300 hover:text-red-400 border border-white/10 rounded-xl transition-all cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/admissions"
                className="px-5 py-2.5 bg-gradient-to-r from-[#003CC7] to-[#1E60FF] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 flex items-center gap-1.5"
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger menu */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-xl border border-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#071A3D] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 text-left flex flex-col">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold uppercase tracking-wider py-2 border-b border-white/5 ${
                      isActive ? 'text-blue-400' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 flex flex-col gap-3">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="w-full h-12 bg-[#003CC7] text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Portal Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full h-12 bg-white/5 border border-white/10 text-rose-400 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full h-12 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/admissions"
                      onClick={() => setIsOpen(false)}
                      className="w-full h-12 bg-gradient-to-r from-[#003CC7] to-[#1E60FF] text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </div>
  );
}
