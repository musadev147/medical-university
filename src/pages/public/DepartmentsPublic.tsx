import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, Scissors, Baby, User } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function DepartmentsPublic() {
  const departments = [
    {
      name: 'Anatomy',
      description: 'Foundational study of human biology, systemic dissection laboratories, and micro-anatomical structures.',
      hod: 'Dr. Evelyn Carter, MD',
      faculty: 12,
      students: 360,
      icon: Activity,
    },
    {
      name: 'Physiology',
      description: 'Investigating cellular functionalities, internal system operations, and bio-regulation frameworks.',
      hod: 'Dr. Arthur Pendelton, MD, PhD',
      faculty: 10,
      students: 360,
      icon: Heart,
    },
    {
      name: 'Biochemistry',
      description: 'Exploring biochemical compounds, diagnostics, metabolic genetics, and endocrine laboratory profiles.',
      hod: 'Dr. Maria Sterling, PhD',
      faculty: 8,
      students: 360,
      icon: Activity,
    },
    {
      name: 'Pharmacology',
      description: 'Comprehensive teachings in drug actions, toxicities, therapeutics, and clinical trial pipelines.',
      hod: 'Dr. Julian Sterling, MD',
      faculty: 11,
      students: 320,
      icon: Activity,
    },
    {
      name: 'Pathology',
      description: 'Cellular pathology diagnostics, hematology libraries, autopsies, and active histology profiles.',
      hod: 'Dr. Robert Lawson, MD',
      faculty: 15,
      students: 280,
      icon: Activity,
    },
    {
      name: 'Microbiology',
      description: 'Immunology research, bacteriology, clinical virology parameters, and laboratory infections diagnostics.',
      hod: 'Dr. Sarah Patel, PhD',
      faculty: 9,
      students: 280,
      icon: Activity,
    },
    {
      name: 'General Medicine',
      description: 'Advanced diagnosis, emergency critical medicine, hotlines, and systemic internal health therapies.',
      hod: 'Prof. Dr. J. Rahman, MD',
      faculty: 22,
      students: 450,
      icon: Heart,
    },
    {
      name: 'General Surgery',
      description: 'Operation theater practices, surgical clinical anatomy, trauma operations, and post-op guidelines.',
      hod: 'Dr. Marcus Briggs, MD',
      faculty: 18,
      students: 400,
      icon: Scissors,
    },
    {
      name: 'Pediatrics',
      description: 'Neonatology care, immunizations scheduling, and systemic child physical & developmental therapies.',
      hod: 'Dr. Clara Oswald, MD',
      faculty: 12,
      students: 300,
      icon: Baby,
    },
    {
      name: 'Gynecology & Obstetrics',
      description: 'Reproductive surgeries, maternal care, labor theater setups, and clinical fetal screenings.',
      hod: 'Dr. Helena Rostova, MD',
      faculty: 14,
      students: 320,
      icon: Heart,
    },
    {
      name: 'Cardiology',
      description: 'Electro-physiology assessments, cardiac surgeries, angiographies, and coronary critical care setups.',
      hod: 'Dr. James Mercer, MD, FACC',
      faculty: 16,
      students: 240,
      icon: Heart,
    },
    {
      name: 'Neurology',
      description: 'Studies in neuropathies, neuro-critical monitoring, EEG, and organic brain disorders therapies.',
      hod: 'Prof. Dr. Linda Rahman, MD, PhD',
      faculty: 13,
      students: 200,
      icon: Brain,
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
            Academic Departments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Pillars of Medical Pedagogy & Clinical Expertise
          </motion.p>
        </div>
      </section>

      {/* Grid of 12 departments */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Departments & Clinical Wings"
          subtitle="Explore the 12 medical fields managing our institutional hospital and delivering lectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-[300px] relative group"
              >
                <div>
                  {/* Icon and Name */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-blue-50 text-[#003CC7] rounded-2xl group-hover:bg-[#003CC7] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {dept.faculty} Docs
                      </span>
                      <span className="text-[10px] font-bold text-[#003CC7] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {dept.students} Students
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#071A3D] uppercase tracking-tight mt-6 group-hover:text-[#003CC7] transition-colors duration-300">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                </div>

                {/* HOD marker */}
                <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#64748B]">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Head of Department</p>
                    <p className="text-xs font-bold text-[#071A3D] uppercase mt-0.5">{dept.hod}</p>
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
