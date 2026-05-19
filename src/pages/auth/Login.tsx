import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, EyeOff, Lock, Mail, Users, ArrowRight, UserPlus, Sparkles, Award } from 'lucide-react';

type Role = 'Student' | 'Faculty' | 'Accountant' | 'Administrator';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState<Role>('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Highlight color maps based on approved directives
  const accentColor = selectedRole === 'Administrator' ? '#E11D48' : '#003CC7';
  const shadowColor = selectedRole === 'Administrator' ? 'rgba(225, 29, 72, 0.25)' : 'rgba(0, 60, 199, 0.25)';

  const rolesList: { name: Role; subtitle: string }[] = [
    { name: 'Student', subtitle: 'Grades & Rosters' },
    { name: 'Faculty', subtitle: 'Lectures & Marks' },
    { name: 'Accountant', subtitle: 'Tuitions & Payroll' },
    { name: 'Administrator', subtitle: 'Full Campus Grid' },
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!email.trim() || !password.trim()) {
      setError('Please provide your active email and password coordinates.');
      return;
    }

    setLoading(true);

    // Mock verification
    setTimeout(() => {
      const formattedEmail = email.toLowerCase().trim();
      let isValid = false;

      if (selectedRole === 'Administrator' && formattedEmail === 'admin@bmu.ac.bd' && password === 'admin123') {
        isValid = true;
      } else if (selectedRole === 'Student' && formattedEmail === 'student@bmu.ac.bd' && password === 'student123') {
        isValid = true;
      } else if (selectedRole === 'Faculty' && formattedEmail === 'faculty@bmu.ac.bd' && password === 'faculty123') {
        isValid = true;
      } else if (selectedRole === 'Accountant' && formattedEmail === 'accountant@bmu.ac.bd' && password === 'accountant123') {
        isValid = true;
      }

      if (isValid) {
        // Save session logs
        const sessionPayload = {
          email: formattedEmail,
          role: selectedRole,
          token: `m_token_${Math.random().toString(36).substr(2)}`,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('app_user', JSON.stringify(sessionPayload));
        
        // Dispatch event for sticky navbar check
        window.dispatchEvent(new Event('storage'));

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setLoading(false);
        setError(`Invalid credentials for role "${selectedRole}". Try standard mock logins (e.g., student@bmu.ac.bd / student123).`);
      }
    }, 1500);
  };

  return (
    <div className="min-h-[85vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#F7F9FC] text-left relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#003CC7]/15 blur-[90px] pointer-events-none" />

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
            Security Shield Active
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase leading-tight">
            Secure Entry to Your Academic Desk
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Protecting administrative logs, grade sheets, physician timetables, and campus accounting grids via military-grade SSL standards.
          </p>
        </div>

        {/* Trust disclaimer */}
        <div className="relative z-10 text-xs text-slate-500 font-bold uppercase tracking-wider">
          Accredited Portal System 2026
        </div>
      </div>

      {/* Right Column: Portal Login Frame (7 cols) */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-white border border-[#D8E1EF] rounded-[32px] p-6 sm:p-10 shadow-xl space-y-8"
        >
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#071A3D] uppercase tracking-tight">Institutional Login</h3>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Select your academic role below to access the college management systems.
            </p>
          </div>

          {/* Role Grid (2x2) */}
          <div className="grid grid-cols-2 gap-3.5">
            {rolesList.map((r) => {
              const isActive = selectedRole === r.name;
              // Highlighting mapping
              const roleHighlight = r.name === 'Administrator' ? '#E11D48' : '#003CC7';
              return (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => {
                    setSelectedRole(r.name);
                    setError('');
                  }}
                  style={{
                    borderColor: isActive ? roleHighlight : '#D8E1EF',
                    backgroundColor: isActive ? `${roleHighlight}08` : '#FFFFFF',
                  }}
                  className="p-4 border rounded-[20px] text-left transition-all duration-300 group cursor-pointer outline-none"
                >
                  <div className="flex justify-between items-center">
                    <span 
                      style={{ color: isActive ? roleHighlight : '#071A3D' }}
                      className="text-xs font-black uppercase tracking-wider"
                    >
                      {r.name}
                    </span>
                    <div 
                      style={{ 
                        backgroundColor: isActive ? roleHighlight : '#F1F5F9',
                        color: isActive ? '#FFFFFF' : '#64748B',
                      }}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-colors"
                    >
                      ✓
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">{r.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Form fields */}
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            
            {/* Mock Credentials Helper banner */}
            <div className="bg-[#F7F9FC] border border-[#D8E1EF] p-4 rounded-2xl text-[10px] font-bold text-slate-500 space-y-1">
              <span className="text-[#071A3D] uppercase tracking-wider block">Verified Mock Login:</span>
              <span className="block uppercase text-blue-600">Email: {selectedRole.toLowerCase()}@bmu.ac.bd</span>
              <span className="block uppercase text-blue-600">Password: {selectedRole.toLowerCase()}123</span>
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Portal Username (Email)</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-[#64748B] w-5 h-5 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={`${selectedRole.toLowerCase()}@bmu.ac.bd`}
                  className="w-full h-12 pl-12 pr-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Security Password</label>
                <Link to="/forgot-password" className="text-[10px] font-bold uppercase text-[#003CC7] hover:underline">Forgot Key?</Link>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-[#64748B] w-5 h-5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 pl-12 pr-12 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-[#64748B] hover:text-[#071A3D] cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error indicators */}
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
            </AnimatePresence>

            {/* Action Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 4px 14px ${shadowColor}`,
                }}
                className="w-full h-14 hover:opacity-95 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In to Portal
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

          {/* Footer registrations */}
          <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
            <span className="text-slate-400">New Practitioner?</span>
            <Link 
              to="/register"
              className="inline-flex items-center gap-1 text-[#003CC7] hover:text-[#071A3D] transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              Apply for Account
            </Link>
          </div>

        </motion.div>
      </div>

    </div>
  );
}
