import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LogOut, Landmark, User, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardStub() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('app_user');
      if (!stored) {
        navigate('/login');
      } else {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          navigate('/login');
        }
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('app_user');
    window.dispatchEvent(new Event('storage'));
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white border border-[#D8E1EF] rounded-[32px] p-8 lg:p-12 shadow-xl text-left space-y-8 relative z-10"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#071A3D] uppercase tracking-tight">Access Authorized</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">BMU Secure Session Active</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer outline-none border border-rose-100"
          >
            <LogOut className="w-3.5 h-3.5" />
            Log Out
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
          <div className="p-5 bg-[#F7F9FC] border border-[#D8E1EF] rounded-2xl space-y-1 text-left">
            <span className="text-slate-400 uppercase tracking-widest block text-[10px]">User Role Profile</span>
            <span className="text-sm font-extrabold text-[#071A3D] uppercase tracking-wide flex items-center gap-2 mt-1">
              <User className="w-4 h-4 text-blue-600" />
              {user.role}
            </span>
          </div>

          <div className="p-5 bg-[#F7F9FC] border border-[#D8E1EF] rounded-2xl space-y-1 text-left">
            <span className="text-slate-400 uppercase tracking-widest block text-[10px]">Verified Email Address</span>
            <span className="text-sm font-extrabold text-[#071A3D] flex items-center gap-2 mt-1">
              <Mail className="w-4 h-4 text-blue-600" />
              {user.email}
            </span>
          </div>

          <div className="p-5 bg-[#F7F9FC] border border-[#D8E1EF] rounded-2xl space-y-1 text-left">
            <span className="text-slate-400 uppercase tracking-widest block text-[10px]">Secure Session Token</span>
            <span className="text-xs font-mono font-bold text-slate-500 block break-all mt-1">
              {user.token}
            </span>
          </div>

          <div className="p-5 bg-[#F7F9FC] border border-[#D8E1EF] rounded-2xl space-y-1 text-left">
            <span className="text-slate-400 uppercase tracking-widest block text-[10px]">Active Session Since</span>
            <span className="text-sm font-extrabold text-[#071A3D] flex items-center gap-2 mt-1 uppercase tracking-wide">
              <Calendar className="w-4 h-4 text-blue-600" />
              {new Date(user.timestamp).toLocaleTimeString()}
            </span>
          </div>
        </div>

        <div className="bg-[#071A3D] text-white p-6 rounded-[24px] relative overflow-hidden border border-white/10 shadow-lg text-left space-y-3">
          <div className="absolute inset-0 bg-radial-glow-dark opacity-60 pointer-events-none" />
          <Landmark className="w-8 h-8 text-amber-400 relative z-10 stroke-[2]" />
          <h4 className="text-sm font-extrabold relative z-10 uppercase">Secure Academic Integration</h4>
          <p className="text-[10px] text-slate-300 font-medium leading-relaxed relative z-10">
            BMU management databases have authorized this dashboard session. Grade rosters, research schedules, clinical timesheets, and accounting billing items are active.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
