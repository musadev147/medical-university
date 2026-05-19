import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, BookOpen, ShieldAlert, Award, FileText, CheckCircle } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function Admissions() {
  const steps = [
    { num: '01', title: 'Submit Online Application', desc: 'Fill out the institutional registration forms and upload primary marksheets.' },
    { num: '02', title: 'Institutional Counseling', desc: 'Secure high scores in the competitive institutional entrance board exam.' },
    { num: '03', title: 'Document Verification', desc: 'Present verified high school transcripts, fitness certificates, and ID cards.' },
    { num: '04', title: 'Secure Enrollment', desc: 'Submit standard semester tuition fees and clear the campus registry.' },
  ];

  const eligibility = [
    { program: 'Postgraduate Residency (MD / MS)', age: 'BMDC Registered Medical Graduates', edu: 'MBBS/BDS degree from a BMDC recognized medical institution with at least 1-year completed internship.' },
    { program: 'Non-Residency (M.Phil / MPH / Diploma)', age: 'Active BMDC Registered Practitioners', edu: 'MBBS/BDS degree with valid BMDC registration, passing the centralized BMU Non-Residency admission test.' },
    { program: 'Master of Science in Nursing (MSN)', age: 'Registered Nurses with BNMC License', edu: 'B.Sc. in Nursing or Post-Basic B.Sc. with active BNMC registration and a minimum of 2 years clinical experience.' },
    { program: 'Doctor of Philosophy (PhD)', age: 'Advanced Researchers & Medical Faculty', edu: 'MD, MS, M.Phil or equivalent postgraduate degree with published peer-reviewed medical research papers.' },
  ];

  const dates = [
    { event: 'Online Application Portal Opens', date: 'June 01, 2026' },
    { event: 'Residency/Non-Residency Admission Test', date: 'June 20, 2026' },
    { event: 'Official Entrance Scorecard Publication', date: 'July 05, 2026' },
    { event: 'Original Credentials & Medical Board Verification', date: 'July 18, 2026' },
    { event: 'Academic Semester Session Commences', date: 'July 26, 2026' },
  ];

  const fees = [
    { course: 'Postgraduate Residency (MD / MS)', tuition: '৳25,000 / sem', lab: '৳5,000 / sem', total: '৳30,000 / sem' },
    { course: 'Non-Residency (M.Phil / MPH / Diploma)', tuition: '৳18,000 / sem', lab: '৳3,000 / sem', total: '৳21,000 / sem' },
    { course: 'Master of Science in Nursing (MSN)', tuition: '৳15,000 / sem', lab: '৳2,500 / sem', total: '৳17,500 / sem' },
    { course: 'Doctor of Philosophy (PhD)', tuition: '৳35,000 / sem', lab: '৳10,000 / sem', total: '৳45,000 / sem' },
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
              Bangabandhu Medical University Admissions 2026
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
            >
              Join Bangladesh's premier postgraduate medical university. Follow the roadmap below to apply for Residency, Non-Residency, PhD, and MSN programs.
            </motion.p>

        </div>
      </section>

      {/* Process RoadMap */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Admission Roadmap"
          subtitle="Our simplified step-by-step registration flow to secure clinical enrollment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 text-left relative overflow-hidden shadow-sm"
            >
              <div className="text-4xl font-extrabold text-[#003CC7]/20 absolute top-4 right-6 pointer-events-none">
                {step.num}
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#003CC7] flex items-center justify-center font-extrabold text-sm border border-blue-100 mb-6">
                {step.num}
              </div>
              <h4 className="text-base font-bold text-[#071A3D] uppercase tracking-wide">{step.title}</h4>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split section: Eligibility & Dates */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left: Eligibility (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <BookOpen className="w-6 h-6 text-[#003CC7]" />
            <h3 className="text-xl font-bold text-[#071A3D] uppercase tracking-tight">Academic Eligibility</h3>
          </div>
          <div className="space-y-4">
            {eligibility.map((elig) => (
              <div key={elig.program} className="bg-white border border-[#D8E1EF] p-6 rounded-[20px] shadow-sm space-y-2">
                <h4 className="text-sm font-extrabold text-[#071A3D] uppercase">{elig.program}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Age Criteria: {elig.age}</p>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">{elig.edu}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <Calendar className="w-6 h-6 text-[#E11D48]" />
            <h3 className="text-xl font-bold text-[#071A3D] uppercase tracking-tight">Important Dates</h3>
          </div>
          <div className="bg-white border border-[#D8E1EF] rounded-[24px] overflow-hidden shadow-sm">
            {dates.map((d, i) => (
              <div 
                key={d.event} 
                className={`p-4 flex justify-between items-center text-xs ${
                  i !== dates.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                <span className="font-extrabold text-[#071A3D] uppercase tracking-wide">{d.event}</span>
                <span className="font-bold text-[#E11D48] bg-rose-50 border border-rose-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {d.date}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Required Documents Checklist */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="bg-white border border-[#D8E1EF] p-8 lg:p-12 rounded-[32px] shadow-sm text-left grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="p-4 bg-rose-50 text-[#E11D48] rounded-[24px] border border-rose-100 w-16 h-16 flex items-center justify-center mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#071A3D] uppercase tracking-tight leading-tight">Verification Papers Checklist</h3>
            <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">Ensure you prepare all certified original documents before verification counselors round panels.</p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase">Certified High School Transcripts</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase">Institutional Entrance Scorecard</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase">Certified Birth Certificate</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase">Migration or Transfer Certificates</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase">Institutional Medical Fitness Form</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-bold text-slate-700 uppercase">Recent Passport Sized Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fee Schedules */}
      <section className="px-4 max-w-7xl mx-auto py-8">
        <SectionHeader 
          title="Tuition & Fee Schedules"
          subtitle="Explore the standard credit and laboratory billing parameters for institutional courses."
        />

        <div className="bg-white border border-[#D8E1EF] rounded-[32px] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#071A3D] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-5">Institutional Program</th>
                  <th className="p-5">Tuition / Semester</th>
                  <th className="p-5">Laboratory / Semester</th>
                  <th className="p-5">Total Academic Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                {fees.map((f) => (
                  <tr key={f.course} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-[#071A3D] uppercase">{f.course}</td>
                    <td className="p-5">{f.tuition}</td>
                    <td className="p-5">{f.lab}</td>
                    <td className="p-5 font-bold text-[#003CC7]">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 p-4 rounded-2xl justify-center">
          <ShieldAlert className="w-4 h-4" />
          <span>Tuition charges do not include hostel board, security deposits, or uniform fees.</span>
        </div>
      </section>

      {/* CTA section */}
      <CTASection />
    </div>
  );
}
