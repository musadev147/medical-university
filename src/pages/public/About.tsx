import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Award, Target, Landmark, ShieldCheck, HeartPulse, Users } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function About() {
  const values = [
    {
      title: 'Academic Integrity',
      description: 'Maintaining uncompromising quality in medical lectures, practical labs, and student certifications.',
      icon: Compass,
      color: 'bg-blue-50 text-[#003CC7] border-blue-100',
    },
    {
      title: 'Clinical Excellence',
      description: 'Prioritizing patient safety, advanced treatment technologies, and direct compassionate healthcare systems.',
      icon: HeartPulse,
      color: 'bg-rose-50 text-[#E11D48] border-rose-100',
    },
    {
      title: 'Innovative Research',
      description: 'Facilitating clinical trials and global health projects to solve complex neurological and cardiovascular challenges.',
      icon: Target,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
  ];

  const milestones = [
    { year: '1998', title: 'Foundation of BMU', desc: 'Bangabandhu Medical University established as the premier postgraduate medical university in Bangladesh.' },
    { year: '2005', title: 'Tertiary Hospital Expansion', desc: 'Expansion of the affiliated university hospital to support extensive postgraduate clinical research.' },
    { year: '2012', title: 'New Academic Specialties', desc: 'Introduction of specialized MD, MS, and M.Phil residency programs across key disciplines.' },
    { year: '2020', title: 'ICT Cell & Portal launch', desc: 'Launch of the secure digital administrative grid for postgraduate fellows and hospital records.' },
    { year: '2026', title: '#1 Ranked University', desc: 'Ranked the top institution in Bangladesh for advanced clinical research and postgraduate degrees.' },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 bg-[#F7F9FC] pb-12">
      
      {/* Visual Header Banner */}
      <section className="relative bg-[#071A3D] text-white py-20 lg:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#003CC7]/30 blur-[90px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black uppercase tracking-tight"
          >
            Our Institutional Heritage
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Three Decades of Shaping Global Healthcare Leaders
          </motion.p>
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#071A3D] tracking-tight uppercase">
            Nurturing Science, Honoring Human Life
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Bangabandhu Medical University (BMU) has stood as the pinnacle of medical research and postgraduate pedagogy in Bangladesh since its establishment. We focus on integrating high-level clinical research with direct tertiary healthcare delivery at our affiliated medical complexes, allowing our postgraduate fellows to develop outstanding clinical intellect.
          </p>
          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            Our campus in Shahbagh contains advanced research laboratories, specialized academic blocks, and a massive multi-specialty clinical hospital. By utilizing secure digital grids to coordinate academic records and research schedules, we provide an educational ecosystem optimized for healthcare innovation.
          </p>
        </div>
        
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="p-6 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
            <Landmark className="w-8 h-8 text-[#003CC7] mb-3 stroke-[2]" />
            <h4 className="text-sm font-bold text-[#071A3D] uppercase">Accredited by</h4>
            <p className="text-xs text-[#64748B] mt-1 font-semibold leading-relaxed">WHO & Federal Medical Councils.</p>
          </div>
          <div className="p-6 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
            <ShieldCheck className="w-8 h-8 text-teal-600 mb-3 stroke-[2]" />
            <h4 className="text-sm font-bold text-[#071A3D] uppercase">Security Rating</h4>
            <p className="text-xs text-[#64748B] mt-1 font-semibold leading-relaxed">100% Secure SSL Grids.</p>
          </div>
          <div className="p-6 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
            <Users className="w-8 h-8 text-rose-500 mb-3 stroke-[2]" />
            <h4 className="text-sm font-bold text-[#071A3D] uppercase">Alumni Reach</h4>
            <p className="text-xs text-[#64748B] mt-1 font-semibold leading-relaxed">Practicing in over 45 countries.</p>
          </div>
          <div className="p-6 bg-white border border-[#D8E1EF] rounded-[24px] shadow-sm">
            <Award className="w-8 h-8 text-amber-500 mb-3 stroke-[2]" />
            <h4 className="text-sm font-bold text-[#071A3D] uppercase">Accreditation</h4>
            <p className="text-xs text-[#64748B] mt-1 font-semibold leading-relaxed">Joint Commission International.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-[#D8E1EF] p-8 rounded-[32px] text-left space-y-4 shadow-sm"
          >
            <div className="p-4 bg-blue-50 text-[#003CC7] rounded-2xl w-14 h-14 flex items-center justify-center border border-blue-100">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#071A3D] uppercase tracking-tight">Our Mission</h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              To provide elite, comprehensive healthcare pedagogy that merges advanced medical science with clinical sympathy. We strive to train medical practitioners who possess excellent diagnostics, outstanding ethical standards, and specialized research intellect.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-[#D8E1EF] p-8 rounded-[32px] text-left space-y-4 shadow-sm"
          >
            <div className="p-4 bg-rose-50 text-[#E11D48] rounded-2xl w-14 h-14 flex items-center justify-center border border-rose-100">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#071A3D] uppercase tracking-tight">Our Vision</h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              To remain a global, top-ranked medical academy recognized for groundbreaking clinical discoveries, high-performance administrative grids, and dedicated alumni who positively revolutionize regional and international healthcare frameworks.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Dean's Message */}
      <section className="px-4 max-w-7xl mx-auto py-8">
        <div className="bg-[#071A3D] rounded-[40px] text-white p-8 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left items-center">
          <div className="absolute inset-0 bg-radial-glow-dark opacity-80 pointer-events-none" />
          
          <div className="lg:col-span-4 flex justify-center">
            {/* Visual Avatar Placeholder */}
            <div className="w-64 h-64 rounded-[32px] bg-gradient-to-tr from-[#003CC7] to-indigo-900 border border-white/20 p-2 relative shadow-2xl overflow-hidden flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-[#071A3D]/40 z-10" />
              <Landmark className="w-24 h-24 text-white/20 absolute stroke-[1]" />
              <div className="relative z-20 text-center space-y-1">
                <span className="text-4xl font-extrabold tracking-wider text-white">VC</span>
                <span className="text-[10px] font-bold text-blue-200 block uppercase tracking-widest">VC MESSAGE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 relative z-10">
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Message from our Vice Chancellor</h3>
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight uppercase leading-tight">
              "Advancing Healthcare through Academic Excellence"
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
              "Welcome to Bangabandhu Medical University (BMU). The journey of postgraduate medical specialization requires continuous dedication, rigorous scientific inquiry, and high clinical standards. At BMU, we offer an advanced educational framework where clinical specialization and medical research are fully integrated. We are committed to nurturing clinical specialists who will serve the nation and humanity with excellence."
            </p>
            <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h4 className="text-base font-bold text-white uppercase">Prof. Dr. J. Rahman, MD, PhD</h4>
                <p className="text-xs text-slate-400 font-bold uppercase mt-0.5 tracking-wider">Vice Chancellor, Bangabandhu Medical University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Timeline */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Institutional Progress"
          subtitle="Explore the key historical landmarks that turned our academy into a major regional healthcare epicenter."
        />

        {/* Milestone Vertical Timeline */}
        <div className="relative border-l-2 border-[#D8E1EF] ml-4 md:ml-32 space-y-12 text-left">
          {milestones.map((mile, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Year marker */}
              <div className="absolute -left-[41px] top-0.5 bg-[#F7F9FC] p-1 border-2 border-[#D8E1EF] rounded-full group-hover:border-[#003CC7] transition-colors">
                <div className="w-3.5 h-3.5 rounded-full bg-[#D8E1EF] group-hover:bg-[#003CC7] transition-colors" />
              </div>
              
              <div className="md:absolute md:-left-32 md:top-1.5 text-left md:text-right w-24">
                <span className="text-xl font-extrabold text-[#003CC7] tracking-tight">{mile.year}</span>
              </div>
              
              <div className="bg-white border border-[#D8E1EF] p-6 rounded-[24px] shadow-sm max-w-3xl">
                <h4 className="text-base font-bold text-[#071A3D] uppercase tracking-wide">{mile.title}</h4>
                <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">{mile.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <CTASection />
    </div>
  );
}
