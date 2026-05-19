import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Filter, GraduationCap, MapPin, UserCheck } from 'lucide-react';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function FacultyPublic() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');

  const faculty = [
    {
      name: 'Prof. Dr. J. Rahman, MD',
      role: 'Professor & Senior Clinician',
      dept: 'General Medicine',
      email: 'jrahman@bmu.ac.bd',
      acc: 'MD - Harvard Medical School',
      office: 'Medicine Wing, Room 302',
    },
    {
      name: 'Dr. Evelyn Carter, MD',
      role: 'Associate Professor & HOD',
      dept: 'Anatomy',
      email: 'ecarter@bmu.ac.bd',
      acc: 'MD - Johns Hopkins Academy',
      office: 'Basic Science Block, Room 104',
    },
    {
      name: 'Dr. James Mercer, MD, FACC',
      role: 'Professor & Lead Cardiologist',
      dept: 'Cardiology',
      email: 'jmercer@bmu.ac.bd',
      acc: 'MD - Stanford Health Science',
      office: 'Cardio Core, Room 405',
    },
    {
      name: 'Prof. Dr. Linda Rahman, MD, PhD',
      role: 'Associate Professor & Senior Researcher',
      dept: 'Neurology',
      email: 'lrahman@bmu.ac.bd',
      acc: 'MD, PhD - Yale Medical School',
      office: 'Neuroscience Wing, Room 318',
    },
    {
      name: 'Dr. Marcus Briggs, MD',
      role: 'Professor & Chief Surgical Consultant',
      dept: 'Surgery',
      email: 'mbriggs@bmu.ac.bd',
      acc: 'MD - Oxford Health Center',
      office: 'Surgical Block, Room 201',
    },
    {
      name: 'Dr. Clara Oswald, MD',
      role: 'Assistant Professor & Pediatric HOD',
      dept: 'Pediatrics',
      email: 'coswald@bmu.ac.bd',
      acc: 'MD - University of Toronto',
      office: 'Pediatric Wing, Room 112',
    },
    {
      name: 'Dr. Robert Lawson, MD',
      role: 'Professor & Pathology Specialist',
      dept: 'Pathology',
      email: 'rlawson@bmu.ac.bd',
      acc: 'MD - King\'s College London',
      office: 'Laboratory Block, Room 205',
    },
    {
      name: 'Dr. Sarah Patel, PhD',
      role: 'Associate Professor & Microbiology Lead',
      dept: 'Microbiology',
      email: 'spatel@bmu.ac.bd',
      acc: 'PhD - University of Edinburgh',
      office: 'Bio Science Center, Room 108',
    },
  ];

  const departments = ['All', 'Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology', 'Pathology', 'Microbiology', 'General Medicine', 'Surgery', 'Pediatrics', 'Cardiology', 'Neurology'];

  // Filtered List
  const filteredFaculty = faculty.filter((fac) => {
    const matchesSearch = fac.name.toLowerCase().includes(search.toLowerCase()) || 
                          fac.role.toLowerCase().includes(search.toLowerCase()) ||
                          fac.acc.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === 'All' || fac.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

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
            Specialist Faculty Roster
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Learn Directly From Leading Doctors and Scientists
          </motion.p>
        </div>
      </section>

      {/* Roster & Search Filters */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Search & Faculty Directory"
          subtitle="Query academic doctors by active medical wings or credentials parameters instantly."
        />

        {/* Filter controls */}
        <div className="bg-white p-6 rounded-[28px] border border-[#D8E1EF] shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md flex items-center">
            <Search className="absolute left-4 text-[#64748B] pointer-events-none w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, credentials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 pl-12 pr-4 text-sm font-medium bg-[#F7F9FC] border border-[#D8E1EF] rounded-[18px] focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Department Filter dropdown */}
          <div className="relative w-full md:max-w-xs flex items-center">
            <Filter className="absolute left-4 text-[#64748B] pointer-events-none w-5 h-5" />
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="w-full h-14 pl-12 pr-4 text-sm font-bold bg-[#F7F9FC] border border-[#D8E1EF] rounded-[18px] focus:ring-4 focus:ring-[#003CC7]/10 focus:border-[#003CC7] outline-none transition-all text-[#071A3D] uppercase tracking-wider appearance-none cursor-pointer"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Faculty Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredFaculty.map((fac) => (
              <motion.div
                layout
                key={fac.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 text-left flex flex-col justify-between h-[310px] hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
              >
                <div>
                  {/* Visual Header */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#003CC7] to-[#1E60FF] flex items-center justify-center text-white text-xs font-black">
                      {fac.name.split(' ')[1]?.charAt(0) || 'D'}
                    </div>
                    <span className="text-[10px] font-bold text-[#003CC7] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {fac.dept}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1">
                    <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight group-hover:text-[#003CC7] transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-rose-600 font-bold uppercase tracking-wider">{fac.role}</p>
                  </div>

                  {/* Accreditations list */}
                  <div className="mt-4 space-y-2 text-xs text-[#64748B] font-semibold">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#64748B]" />
                      <span>{fac.acc}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#64748B]" />
                      <span>{fac.office}</span>
                    </div>
                  </div>
                </div>

                {/* Email Footer linkage */}
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                  <a 
                    href={`mailto:${fac.email}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {fac.email}
                  </a>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 uppercase tracking-widest flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-emerald-500" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredFaculty.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-[#D8E1EF] p-12 rounded-[24px] text-center max-w-md mx-auto mt-12 space-y-3"
          >
            <p className="text-sm font-bold text-[#071A3D] uppercase tracking-wider">No Faculty Members Found</p>
            <p className="text-xs text-[#64748B] font-medium leading-relaxed">No medical specialists match your search criteria. Please adjust filters.</p>
          </motion.div>
        )}
      </section>

      {/* CTA section */}
      <CTASection />
    </div>
  );
}
