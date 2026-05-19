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
      className={`max-w-3xl mb-12 ${centered ? 'text-center mx-auto' : 'text-left'}`}
    >
      <h2 className="text-3xl lg:text-4xl font-extrabold text-[#071A3D] tracking-tight uppercase">
        {title}
      </h2>
      <div className={`h-1 w-16 bg-[#003CC7] rounded-full mt-3 ${centered ? 'mx-auto' : 'mr-auto'}`} />
      <p className="text-base text-[#64748B] mt-4 leading-relaxed font-medium">
        {subtitle}
      </p>
    </motion.div>
  );
}
