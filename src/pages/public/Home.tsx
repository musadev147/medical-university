import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Compass, ChevronRight, Stethoscope, Activity, Heart, ArrowRight, FileText, HeartHandshake } from 'lucide-react';
import HeroSection from '../../components/public/HeroSection';
import SectionHeader from '../../components/public/SectionHeader';
import CTASection from '../../components/public/CTASection';

export default function Home() {
  const stats = [
    { value: '3,255+', label: 'Active Students', icon: Users, color: 'text-blue-600' },
    { value: '800+', label: 'Faculty Members', icon: Stethoscope, color: 'text-rose-500' },
    { value: '58', label: 'Departments', icon: Activity, color: 'text-teal-500' },
    { value: '54', label: 'Affiliated Institutes', icon: Award, color: 'text-amber-500' },
  ];

  const features = [
    {
      title: 'Advanced Medical Research',
      description: 'Pioneering scientific investigations and clinical trials in collaboration with global health organizations.',
      icon: Activity,
    },
    {
      title: 'Expert Clinical Training',
      description: 'Hands-on clinical exposure at our state-of-the-art 1000-bed institutional multi-specialty hospital.',
      icon: Stethoscope,
    },
    {
      title: 'Smart Administrative Grid',
      description: 'High-speed administrative portal protecting grades, schedules, payrolls, and security pathways.',
      icon: Compass,
    },
    {
      title: 'Elite Academic Faculty',
      description: 'Learn directly from certified doctor-educators, clinical scientists, and healthcare leaders.',
      icon: BookOpen,
    },
  ];

  const deptPreviews = [
    {
      name: 'Cardiology',
      description: 'Comprehensive research and clinical training in cardiovascular healthcare, pathology, and therapy.',
      icon: Heart,
      students: '1.2k+ Trained',
    },
    {
      name: 'Anatomy & Physiology',
      description: 'Foundational scientific teaching in human structural biology, dissection labs, and cellular operations.',
      icon: Activity,
      students: '3k+ Trained',
    },
    {
      name: 'General Surgery',
      description: 'State-of-the-art OT simulations, surgical anatomy, and post-operative critical patient management.',
      icon: Stethoscope,
      students: '800+ Trained',
    },
  ];

  const testimonials = [
    {
      quote: "The clinical exposure at Bangabandhu Medical University is outstanding. Working in the multi-specialty university hospital has fully prepared me for my residency.",
      author: "Dr. Sarah Jenkins",
      role: "Cardiology Resident, Class of 2025",
    },
    {
      quote: "BMU's academic research frameworks are highly efficient. Scheduling research hours and accessing resources takes seconds, keeping us focused on studies.",
      author: "Dr. Rafiqul Islam",
      role: "Postgraduate Fellow",
    },
  ];

  const newsItems = [
    {
      date: "Feb 16, 2026",
      title: "Achievements of Bangladesh Medical University (BMU) Published",
      excerpt: "Discover the major highlights and institutional achievements of BMU between August 2024 and February 2026.",
      tag: "Institutional",
    },
    {
      date: "Nov 11, 2025",
      title: "International session on 'Advances in Multiple Myeloma Treatment' held",
      excerpt: "Renowned hematologists and oncology professors assembled at BMU for advanced medical panels on myeloma diagnostics.",
      tag: "Academic Session",
    },
    {
      date: "Nov 10, 2025",
      title: "BMU–RCP Collaboration Meeting Held",
      excerpt: "Bilateral collaboration meeting between BMU leadership and Royal College of Physicians to advance postgraduate medical standards.",
      tag: "Collaboration",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 bg-[#F7F9FC]">
      {/* Hero Block */}
      <HeroSection />

      {/* Statistics Row */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-8 rounded-[32px] shadow-sm border border-[#D8E1EF]">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 p-4"
              >
                <div className={`p-3 rounded-2xl bg-slate-50 border border-slate-100 ${stat.color}`}>
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-4xl font-extrabold text-[#071A3D] tracking-tight">{stat.value}</span>
                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pillars / Features Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Institutional Pillars"
          subtitle="Combining elite medical pedagogy, active healthcare science, and modern administrative efficiency."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 text-left hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-[230px] group"
              >
                <div className="p-3.5 bg-blue-50 text-[#003CC7] rounded-2xl w-12 h-12 flex items-center justify-center border border-blue-100/50 group-hover:bg-[#003CC7] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-bold text-[#071A3D] uppercase tracking-wide">{feat.title}</h3>
                  <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Departments Preview Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Specialist Pathways"
          subtitle="Explore our leading departments designed to turn promising students into expert medical practitioners."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deptPreviews.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white border border-[#D8E1EF] rounded-[32px] p-8 text-left space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-rose-50 text-[#E11D48] rounded-2xl border border-rose-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {dept.students}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#071A3D] uppercase tracking-tight">{dept.name}</h3>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">{dept.description}</p>
                </div>
                <div className="pt-2">
                  <Link 
                    to="/departments"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider"
                  >
                    View Curriculum
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#071A3D] text-white p-8 lg:p-16 rounded-[40px] relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#003CC7]/30 blur-[100px] pointer-events-none" />
          
          <div className="lg:col-span-6 text-left space-y-6 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
              A PREMIER HUB OF CLINICAL EXCELLENCE
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
              For over three decades, Bangabandhu Medical University has set standard benchmarks in postgraduate medical pedagogy in Bangladesh. Our students learn in fully equipped research labs, gain extensive exposure in active tertiary clinical sectors, and utilize modern digital tools to advance their studies.
            </p>
            <ul className="space-y-4 text-sm font-bold text-blue-200">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#003CC7] border border-white/10 flex items-center justify-center text-white text-xs">✓</span>
                <span>Highly Integrated 1000-Bed Multi-Specialty Hospital</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#003CC7] border border-white/10 flex items-center justify-center text-white text-xs">✓</span>
                <span>Active Research Grants from Global Health Councils</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#003CC7] border border-white/10 flex items-center justify-center text-white text-xs">✓</span>
                <span>High-Trust Zero-Security Institutional Admin Portal</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            <div className="p-6 rounded-[24px] backdrop-blur-glass border border-white/10 text-left">
              <h3 className="text-2xl font-extrabold text-white">98%</h3>
              <p className="text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">Placement Rate</p>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">Graduates accepted in top healthcare institutions globally.</p>
            </div>
            <div className="p-6 rounded-[24px] backdrop-blur-glass border border-white/10 text-left">
              <h3 className="text-2xl font-extrabold text-white">50k+</h3>
              <p className="text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">Alumni Network</p>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">A powerful community of doctors and scientists worldwide.</p>
            </div>
            <div className="p-6 rounded-[24px] backdrop-blur-glass border border-white/10 text-left">
              <h3 className="text-2xl font-extrabold text-white">#1</h3>
              <p className="text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">Regional Ranking</p>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">Consistently ranked the top healthcare institution in academic grids.</p>
            </div>
            <div className="p-6 rounded-[24px] backdrop-blur-glass border border-white/10 text-left">
              <h3 className="text-2xl font-extrabold text-white">35+</h3>
              <p className="text-xs font-bold text-slate-300 mt-1 uppercase tracking-wider">Years Heritage</p>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">Built on decades of educational dedication and high trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Student Encounters"
          subtitle="Read what current students and residents say about their educational journey and portal interaction."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white border border-[#D8E1EF] rounded-[32px] p-8 text-left space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-slate-600 text-sm font-semibold italic leading-relaxed">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#003CC7] to-[#1E60FF] flex items-center justify-center text-white text-xs font-black">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-[#071A3D] text-sm uppercase tracking-tight">{test.author}</h4>
                  <p className="text-xs text-[#64748B] font-bold mt-0.5 uppercase tracking-wider">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="Campus Chronicle"
          subtitle="Keep up to date with recent developments, academic awards, and upcoming conferences at BMU."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-[#D8E1EF] rounded-[24px] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 text-left space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{news.date}</span>
                  <span className="text-[10px] font-bold text-[#003CC7] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {news.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-[#071A3D] text-base group-hover:text-[#003CC7] transition-colors leading-snug uppercase">
                  {news.title}
                </h3>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 text-left border-t border-slate-50">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bangladesh National e-Governance & NIS Services Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title="National e-Governance & University Services"
          subtitle="Direct access to our statutory compliance charters, healthcare wings, and integrity portals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          <div className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-[#0f5132]/10 text-[#0f5132] rounded-2xl w-12 h-12 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight mt-6">Super Specialized Hospital</h3>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">
                First smart specialized healthcare center in Bangladesh, offering state-of-the-art diagnostic, clinical, and intensive care services.
              </p>
            </div>
            <a href="https://ssh.bmu.ac.bd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-slate-50">
              Visit SSH Portal <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-[#0f5132]/10 text-[#0f5132] rounded-2xl w-12 h-12 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight mt-6">Annual Performance Agreement (APA)</h3>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">
                Review official APA guidelines, annual performance indicators, evaluation report grids, and steering committee instructions.
              </p>
            </div>
            <a href="https://www.bmu.ac.bd/annual-performance-agreement-apa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-slate-50">
              APA Documents <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-[#0f5132]/10 text-[#0f5132] rounded-2xl w-12 h-12 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight mt-6">National Integrity Strategy (NIS)</h3>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">
                National purity action guidelines (জাতীয় শুদ্ধাচার কৌশল), execution directives, integrity prizes, and committee decisions.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-slate-50">
              NIS Guidelines <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-[#0f5132]/10 text-[#0f5132] rounded-2xl w-12 h-12 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight mt-6">Innovation & Research Wing</h3>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">
                BMU Innovation Team dashboard including digital solutions, e-governance applications, and research showcase highlights.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-slate-50">
              Innovation Hub <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-[#0f5132]/10 text-[#0f5132] rounded-2xl w-12 h-12 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight mt-6">Citizen's Charter</h3>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">
                Official list of patient service commitments (সেবা প্রদান প্রতিশ্রুতি), registrar contact parameters, and feedback gateways.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-slate-50">
              Citizen Charter <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border border-[#D8E1EF] rounded-[24px] p-6 lg:p-8 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-[#0f5132]/10 text-[#0f5132] rounded-2xl w-12 h-12 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#071A3D] uppercase tracking-tight mt-6">Right to Information (RTI)</h3>
              <p className="text-xs text-[#64748B] mt-2 font-medium leading-relaxed">
                Access official university publications, appeal officers contact listings, and download file request formats under RTI Act.
              </p>
            </div>
            <a href="https://www.bmu.ac.bd/the-right-to-information-act" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003CC7] hover:text-[#071A3D] transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-slate-50">
              Read RTI Rules <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Enrollment Banner */}
      <CTASection />
    </div>
  );
}
