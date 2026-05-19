import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, ArrowRight, BookOpen, Microscope, HeartHandshake } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function Courses() {
  const courses = [
    {
      name: 'MD Program',
      fullName: 'Doctor of Medicine Postgraduate Residency',
      desc: 'Advanced postgraduate Residency specialty training providing rigorous clinical lectures, systemic research methodologies, and intensive medical emergency exposure at our specialized multi-specialty clinical chambers.',
      duration: '5 Years (Residency Phase A & B)',
      seats: '45 Seats / Specialization',
      keyFoci: ['Advanced Diagnostics & Pathology', 'Specialized Internal Medicine', 'Critical Care & Life Support', 'Clinical Research Methodologies'],
      icon: Microscope,
    },
    {
      name: 'MS Program',
      fullName: 'Master of Surgery Postgraduate Residency',
      desc: 'High-tier surgical training delivering profound knowledge in advanced operative techniques, anatomy dissection, pediatric and cardiovascular surgery, and intensive OT clinical modules.',
      duration: '5 Years (Residency Program)',
      seats: '35 Seats / Specialization',
      keyFoci: ['Advanced Anatomy & Dissection', 'Cardiovascular & Thoracic Surgery', 'Operative Theater Methodologies', 'Colorectal & General Surgeries'],
      icon: Award,
    },
    {
      name: 'M.Phil & Diplomas',
      fullName: 'Master of Philosophy & Postgraduate Diplomas',
      desc: 'Intensive academic pathways in basic science, clinical pharmacology, epidemiology, and specialized pediatric diploma training for practitioners.',
      duration: '2 to 3 Years (Non-Residency)',
      seats: '25 Seats / Specialty',
      keyFoci: ['Medical Microbiology', 'Pharmacological Research', 'Epidemiology & Public Health', 'Clinical Pediatric Diplomas'],
      icon: BookOpen,
    },
    {
      name: 'MSN Program',
      fullName: 'Master of Science in Nursing',
      desc: 'Premium postgraduate nursing training framework delivering advanced critical care pedagogy, healthcare systems administration, and active clinical research.',
      duration: '2 Years (Academic & Clinical Practice)',
      seats: '60 Seats / Year',
      keyFoci: ['Advanced Critical Care Systems', 'Healthcare Administration', 'Clinical Ethics & Diagnostics', 'Community Nursing Directives'],
      icon: HeartHandshake,
    },
  ];

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
            Academic Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Advanced Postgraduate & Fellowship Specialization Gateways
          </motion.p>
        </div>
      </section>

      {/* Courses list */}
      <section className="px-4 max-w-7xl mx-auto space-y-12">
        <SectionHeader 
          title="Degree Offerings & Fellowship Paths"
          subtitle="Accredited curriculums designed to train elite healthcare professionals, specialists, and researchers."
        />

        <div className="space-y-8">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className="bg-white border border-[#D8E1EF] rounded-[32px] p-8 lg:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start hover:shadow-lg transition-shadow"
              >
                {/* Visual block (4 cols) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="p-4 bg-blue-50 text-[#003CC7] rounded-[24px] border border-blue-100 w-16 h-16 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#071A3D] uppercase tracking-tight leading-none">{course.name}</h2>
                    <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide leading-relaxed">{course.fullName}</p>
                  </div>
                  
                  {/* Parameter badges */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-xs text-[#64748B] font-bold uppercase tracking-wider">
                      <Clock className="w-4.5 h-4.5 text-[#003CC7]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#64748B] font-bold uppercase tracking-wider">
                      <Users className="w-4.5 h-4.5 text-[#003CC7]" />
                      <span>{course.seats}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Syllabus (8 cols) */}
                <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-slate-100 lg:pl-12">
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    {course.desc}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#0F172A] tracking-wider uppercase">Core Study Focus areas</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.keyFoci.map((focus) => (
                        <div key={focus} className="flex items-center gap-2.5 text-xs font-bold text-slate-700 uppercase">
                          <span className="w-2 h-2 rounded-full bg-[#003CC7]" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="#download-syllabus" 
                      onClick={(e) => {
                        e.preventDefault();
                        alert("The comprehensive program syllabus is currently undergoing review for the 2026 academic batch. Please contact the Registrar's Academic desk.");
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#071A3D] hover:bg-[#003CC7] text-white rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-md hover:-translate-y-0.5 outline-none"
                    >
                      <span>Request Syllabus PDF</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA section */}
      <CTASection />
    </div>
  );
}
