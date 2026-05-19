import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: 'General',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!formData.name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid institutional or personal email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please provide your contact mobile number.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please type your inquiry details.');
      return;
    }

    setLoading(true);

    // Simulate sending API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        subject: 'General',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      // Clear success banner after 5s
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="space-y-16 lg:space-y-24 bg-[#F7F9FC] pb-12">
      
      {/* Banner */}
      <section className="relative bg-[#071A3D] text-white py-20 lg:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#003CC7]/30 blur-[90px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black uppercase tracking-tight"
          >
            Contact Campus Directory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Get in touch with the Registrar, Admissions Desk, or IT support
          </motion.p>
        </div>
      </section>

      {/* Split Form / Contact Desk */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left: Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#071A3D] uppercase tracking-tight">Academic Help Desks</h3>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
              If you are a student, parent, or doctor experiencing issues with active course rosters, portal logins, or tuition fees, contact our specialist desks directly.
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="flex items-start gap-4 p-5 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
              <div className="p-3 bg-blue-50 text-[#003CC7] border border-blue-100 rounded-2xl shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Admissions Helpline</h4>
                <p className="text-sm font-extrabold text-[#071A3D]">+880 2-55165787</p>
                <p className="text-[10px] text-[#64748B] font-semibold">Available Sun-Thu, 9:00 AM - 5:00 PM BST</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
              <div className="p-3 bg-rose-50 text-[#E11D48] border border-rose-100 rounded-2xl shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office of the Registrar</h4>
                <p className="text-sm font-extrabold text-[#071A3D]">registrar@bmu.ac.bd</p>
                <p className="text-[10px] text-[#64748B] font-semibold">For transcripts, credentials verification, or transfers</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
              <div className="p-3 bg-teal-50 text-teal-600 border border-teal-100 rounded-2xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">BMU Campus Location</h4>
                <p className="text-sm font-extrabold text-[#071A3D] uppercase">Academic Block, Shahbagh</p>
                <p className="text-[10px] text-[#64748B] font-semibold">Shahbagh, Dhaka-1000, Bangladesh</p>
              </div>
            </div>

          </div>

          <div className="bg-[#071A3D] text-white p-6 rounded-[24px] relative overflow-hidden border border-white/10 shadow-lg text-left space-y-3">
            <div className="absolute inset-0 bg-radial-glow-dark opacity-60 pointer-events-none" />
            <HelpCircle className="w-8 h-8 text-amber-400 relative z-10 stroke-[2]" />
            <h4 className="text-sm font-extrabold relative z-10 uppercase">General Inquiries Notice</h4>
            <p className="text-[10px] text-slate-300 font-semibold leading-relaxed relative z-10">
              Admission application statuses are processed within 5 business days. Please ensure you have verified your email coordinates before submitting inquiries to avoid feedback latency.
            </p>
          </div>
        </div>

        {/* Right: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#D8E1EF] rounded-[32px] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#071A3D] uppercase border-b border-slate-100 pb-4 mb-6">Send An Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Dropdown subject */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Inquiry Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-12 px-4 text-xs font-bold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all text-[#071A3D] uppercase tracking-wider cursor-pointer"
                >
                  <option value="General">General Inquiry</option>
                  <option value="Admissions">Admissions & Eligibility</option>
                  <option value="Billing">Billing & Accountant Office</option>
                  <option value="Technical">Portal Technical Support</option>
                </select>
              </div>

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Mobile Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+880 1XXXXXXXXX"
                  className="w-full h-12 px-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Inquiry Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your question in detail..."
                  className="w-full p-4 text-xs font-semibold bg-[#F7F9FC] border border-[#D8E1EF] rounded-xl focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Error and Success states */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 border border-red-100 p-4 rounded-xl"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 p-4 rounded-xl"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Your inquiry was submitted successfully! A desk officer will contact you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit btn */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-gradient-to-r from-[#003CC7] to-[#1E60FF] hover:from-[#1E60FF] hover:to-[#003CC7] text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer outline-none"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Academic Inquiry
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </section>

    </div>
  );
}
