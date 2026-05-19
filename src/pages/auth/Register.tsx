import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, EyeOff, Lock, Mail, Users, ArrowRight, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';

export default function Register() {
  const [role, setRole] = useState('Student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid personal or institutional email address.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide your active mobile coordinates.');
      return;
    }
    if (password.length < 6) {
      setError('Security keys must be at least 6 characters in length.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Confirm password coordinates do not match.');
      return;
    }

    setLoading(true);

    // Simulate sending API application
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Simulate a small timeout before moving to login
      setTimeout(() => {
        navigate('/login');
      }, 2500);
    }, 1500);
  };

  return (
    <div className="min-h-[85vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#F7F9FC] text-left relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      
      {/* Left Column: Context Card (5 cols) */}
      <div className="hidden lg:flex lg:col-span-5 bg-[#071A3D] text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow-dark opacity-90 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#003CC7]/30 blur-[90px] pointer-events-none" />

        {/* Brand emblem */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#003CC7] p-2.5 rounded-xl flex items-center justify-center border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <span className="text-base font-extrabold tracking-wider text-white block">Bangabandhu Medical University</span>
              <span className="text-xs font-bold text-white/50 block tracking-widest mt-[-4px]">UNIVERSITY</span>
            </div>
          </Link>
        </div>

        {/* Informative text */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#003CC7]/30 border border-[#003CC7]/40 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-blue-200 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Board Open
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase leading-tight">
            Apply for Your Campus Credentials
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Registered students, expert doctors, and payroll managers can apply for credential logs to coordinate schedules and verify credits.
          </p>
        </div>

        {/* Trust disclaimer */}
        <div className="relative z-10 text-xs text-slate-500 font-bold uppercase tracking-wider">
          Accredited Portal System 2026
        </div>
      </div>

      {/* Right Column: Portal Register Frame (7 cols) */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-white border border-[#D8E1EF] rounded-[32px] p-6 sm:p-10 shadow-xl space-y-8"
        >
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#071A3D] uppercase tracking-tight">Create Account</h3>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Fill out your details below to apply for certified campus portal credentials.
            </p>
          </div>

          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            
            {/* Role dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Institutional Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-12 px-4 text-xs font-bold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all text-[#071A3D] uppercase tracking-wider cursor-pointer"
              >
                <option value="Student">Student (Grades & Syllabus)</option>
                <option value="Faculty">Faculty (Lectures & Marks)</option>
                <option value="Accountant">Accountant (Billing & Payroll)</option>
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Mobile Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+880 1XXXXXXXXX"
                  className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Active Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Password fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Security Key (Password)</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Confirm Security Key</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Show password checkbox helper */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="show-pass"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="w-4 h-4 rounded text-[#003CC7] border-[#D8E1EF] focus:ring-[#003CC7]/10 cursor-pointer"
              />
              <label htmlFor="show-pass" className="text-[10px] font-bold uppercase text-slate-400 cursor-pointer select-none">Show Security Keys</label>
            </div>

            {/* Alerts */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2 text-xs font-bold text-red-600 bg-red-50 border border-red-100 p-4 rounded-xl text-left"
                >
                  <ShieldCheck className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-left"
                >
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span>Your registration was logged! Account is undergoing review. Routing back to login...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading || success}
                className="w-full h-14 bg-gradient-to-r from-[#003CC7] to-[#1E60FF] hover:from-[#1E60FF] hover:to-[#003CC7] text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer outline-none disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

          {/* Footer registrations */}
          <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
            <span className="text-slate-400">Already Registered?</span>
            <Link 
              to="/login"
              className="inline-flex items-center gap-1 text-[#003CC7] hover:text-[#071A3D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Sign In Instead
            </Link>
          </div>

        </motion.div>
      </div>

    </div>
  );
}
