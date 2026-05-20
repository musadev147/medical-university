import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-14 relative overflow-hidden ${centered ? 'mx-auto flex flex-col items-center text-center' : 'text-left flex flex-col items-start'}`}
    >

      {/* Premium Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 mb-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
        <span className="w-2 h-2 rounded-full bg-[#003CC7] animate-pulse" />
        <span className="text-[10px] font-extrabold text-[#003CC7] uppercase tracking-[0.2em]">Highlight</span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight mb-5 leading-tight text-[#071A3D]">
        {title}
        <span 
          className="block h-1.5 w-24 bg-gradient-to-r from-[#003CC7] to-transparent rounded-full mt-4" 
          style={{ margin: centered ? '16px auto 0' : '16px 0 0' }} 
        />
      </h2>
      
      <p className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl">
        {subtitle}
      </p>


    </motion.div>
  );
}
