import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ChevronRight, Bell, Clock, MapPin, Award } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function News() {
  const [activeTab, setActiveTab] = useState('All');

  const newsData = [
    {
      id: 1,
      category: 'Research',
      date: 'May 15, 2026',
      title: 'BMU Cardiology Team Receives National Research Grant',
      desc: 'The Bangladesh Medical Research Council has awarded a ৳25 Million grant for our research in pediatric congenital heart disorders. Clinical testing commences next semester.',
      tag: 'Heart Science',
    },
    {
      id: 2,
      category: 'Academics',
      date: 'May 10, 2026',
      title: 'Annual Professional Exam Rosters & Guidelines Published',
      desc: 'MD / MS residency postgraduate professional examination rosters for the batch of 2026 are now active on the student dashboard. Check verified schedules today.',
      tag: 'Professional Exams',
    },
    {
      id: 3,
      category: 'Events',
      date: 'April 28, 2026',
      title: 'New Automated Neuro-Simulation Lab Commissioned',
      desc: 'Vice Chancellor Prof. Dr. J. Rahman inaugurates our brand new neuro-surgery and EEG diagnostic simulation labs for postgrad residency training.',
      tag: 'Campus Tech',
    },
    {
      id: 4,
      category: 'Notices',
      date: 'April 20, 2026',
      title: 'Registrar Announces Summer Tuition Rebate Applications',
      desc: 'Students eligible for academic scholarships can now submit application files via the billing dashboard portal before June 15th.',
      tag: 'Scholarships',
    },
    {
      id: 5,
      category: 'Research',
      date: 'March 18, 2026',
      title: 'Neurology Department Publishes Groundbreaking EEG Findings',
      desc: 'Prof. Dr. Linda Rahman and resident doctors publish findings on high-density neural responses in international neurology publications.',
      tag: 'Brain Study',
    },
    {
      id: 6,
      category: 'Events',
      date: 'March 12, 2026',
      title: 'Vice Chancellor Announces Annual Medical Colloquium Dates',
      desc: 'Leading health directors, chief cardiac surgeons, and regional research scholars will assemble at BMU on June 18th for global medical panels.',
      tag: 'Academics Colloquium',
    },
  ];

  const upcomingEvents = [
    { title: 'Global Cardiology Panel Seminar', date: 'June 08, 2026', time: '10:00 AM', venue: 'Academic Hall A' },
    { title: 'Postgrad Dissection Workshop', date: 'June 12, 2026', time: '02:00 PM', venue: 'Anatomy Lab Grid' },
    { title: 'Vice Chancellor\'s Institutional Address', date: 'June 18, 2026', time: '09:00 AM', venue: 'Campus Auditorium' },
  ];

  const categories = ['All', 'Academics', 'Research', 'Events', 'Notices'];

  const filteredNews = activeTab === 'All' 
    ? newsData 
    : newsData.filter(item => item.category === activeTab);

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
            Campus Chronicle & Notices
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Academic Circulars, News, and Event Schedules
          </motion.p>
        </div>
      </section>

      {/* Split: News vs Events */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left: News Grid (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-[#071A3D] uppercase tracking-tight">Institutional Circulars</h3>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    activeTab === cat
                      ? 'bg-[#003CC7] border-[#003CC7] text-white'
                      : 'bg-white border-[#D8E1EF] text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence>
              {filteredNews.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#D8E1EF] rounded-[24px] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[280px]"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold">
                      <span className="text-slate-400 uppercase tracking-widest">{item.date}</span>
                      <span className="text-[#003CC7] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-[#071A3D] text-base group-hover:text-[#003CC7] leading-snug uppercase line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex justify-between items-center text-xs">
                    <span className="font-bold text-rose-500 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <button
                      onClick={() => alert(`Reviewing Full Notice Details for ID #${item.id}. The verified institutional PDF certificate remains protected.`)}
                      className="inline-flex items-center gap-1 font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Read Notice
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right: Events Calendar Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Bell className="w-6 h-6 text-[#E11D48]" />
            <h3 className="text-xl font-bold text-[#071A3D] uppercase tracking-tight">Active Calendar</h3>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((evt) => (
              <div key={evt.title} className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-[#E11D48] bg-rose-50 border border-rose-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {evt.date}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </div>
                </div>
                
                <h4 className="text-sm font-extrabold text-[#071A3D] uppercase leading-snug">{evt.title}</h4>
                
                <div className="border-t border-slate-50 pt-3 flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <MapPin className="w-4 h-4 text-[#64748B] shrink-0" />
                  <span>{evt.venue}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic notice banner */}
          <div className="bg-[#071A3D] text-white p-6 rounded-[24px] relative overflow-hidden border border-white/10 shadow-lg text-left space-y-3">
            <div className="absolute inset-0 bg-radial-glow-dark opacity-60 pointer-events-none" />
            <Award className="w-8 h-8 text-amber-400 relative z-10 stroke-[2]" />
            <h4 className="text-sm font-extrabold relative z-10 uppercase">Notice Board Alerts</h4>
            <p className="text-[10px] text-slate-300 font-semibold leading-relaxed relative z-10">
              Exam registration schedules, medical fitness declarations, and counseling notifications are pushed directly to active student accounts. Check portal login directories.
            </p>
          </div>
        </div>

      </section>

      {/* CTA section */}
      <CTASection />
    </div>
  );
}
