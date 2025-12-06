"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Settings,
  ArrowUp,
  Target,
  Lightbulb,
  Smile,
  BarChart2 
} from 'lucide-react';

const AboutSection = () => {
  // --- Tilt Animation Setup ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  // Calculate rotation based on mouse position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">

        {/* Floating Up Arrow on bottom right */}
        <div className="absolute right-8 bottom-10 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg border border-gray-100 text-orange-400 cursor-pointer hover:-translate-y-1 transition-all z-40">
            <ArrowUp size={20} />
        </div>

        <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* --- Left Side: Bento Grid with 3D Tilt --- */}
                <div style={{ perspective: 1200 }}>
                    <motion.div 
                        className="relative"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ 
                            rotateX, 
                            rotateY, 
                            transformStyle: "preserve-3d" 
                        }}
                    >
                        <div className="grid grid-cols-2 gap-5" style={{ transform: "translateZ(20px)" }}>
                            
                            {/* 1. Top Left: 88% Growth */}
                            <div className="bg-[#2563EB] rounded-[2rem] p-6 text-white flex flex-col justify-center items-center text-center aspect-[4/4.5] shadow-xl relative overflow-hidden group">
                                {/* Background Glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                                
                                <div className="flex flex-col items-center gap-1 mb-2 relative z-10">
                                    <ArrowUp size={36} strokeWidth={2} className="mb-2" />
                                    <span className="text-5xl lg:text-6xl font-bold tracking-tight">88%</span>
                                </div>
                                <p className="text-xs lg:text-sm font-medium text-blue-100 leading-snug relative z-10 max-w-[140px]">
                                    Average revenue growth for per successful clients
                                </p>
                            </div>

                            {/* 2. Top Right: Image & Badge */}
                            <div className="bg-[#0F172A] rounded-[2rem] relative overflow-hidden aspect-[4/4.5] shadow-xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                                    alt="Happy Client"
                                    fill
                                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Orange Curved Arrow Overlay */}
                                <div className="absolute top-6 right-6 z-20">
                                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-orange-400 rotate-12 drop-shadow-md opacity-90">
                                        <path d="M20 80 Q 60 10 90 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                                        <path d="M70 30 L 90 40 L 85 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    </svg>
                                </div>

                                {/* Floating Satisfaction Badge */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-800 p-2.5 px-4 rounded-xl shadow-lg flex items-center gap-3 w-[90%] animate-in slide-in-from-bottom-4 duration-700">
                                    <div className="bg-gray-100 p-2 rounded-full shrink-0">
                                        <Smile size={18} className="text-slate-600" />
                                    </div>
                                    <div>
                                        <p className="font-extrabold text-lg leading-none text-[#0F172A]">99.8%</p>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wide mt-0.5">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Bottom Left: 78% Circle */}
                            <div className="bg-[#0B1121] rounded-[2rem] p-6 text-white flex flex-col justify-center items-center text-center aspect-[4/4.5] shadow-xl relative overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#020617] opacity-50"></div>
                                
                                <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-4 z-10">
                                    {/* SVG Circle Progress */}
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                                        <path className="text-[#2563EB]" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                    <span className="absolute text-2xl lg:text-3xl font-bold">78%</span>
                                </div>
                                <p className="text-xs font-medium text-slate-400 relative z-10 leading-relaxed max-w-[140px]">
                                    Average revenue growth for per successful clients
                                </p>
                            </div>

                            {/* 4. Bottom Right: Stacked Pills */}
                            <div className="flex flex-col justify-center items-center gap-3 pl-2 lg:pl-4 aspect-[4/4.5]">
                                <div className="w-full bg-[#0F172A] text-white py-3.5 px-4 rounded-full text-[11px] lg:text-xs font-bold text-center shadow-lg hover:scale-105 transition-transform cursor-pointer border border-slate-700 whitespace-nowrap">
                                    Cybersecurity
                                </div>
                                <div className="w-full bg-[#E11D48] text-white py-3.5 px-4 rounded-full text-[11px] lg:text-xs font-bold text-center shadow-lg hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
                                    Infrastructure Management
                                </div>
                                <div className="w-full bg-[#2563EB] text-white py-3.5 px-4 rounded-full text-[11px] lg:text-xs font-bold text-center shadow-lg hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
                                    Operational Excellence
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* --- Right Side: Text Content --- */}
                <div>
                    <span className="bg-blue-50 text-[#2563EB] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                        About Us
                    </span>
                    
                    <h2 className="text-4xl lg:text-[3.5rem] text-[#0F172A] mb-10 leading-[1.1]">
                        <span className="font-bold">Comprehensive</span> <span className="font-[300]">IT Solution</span> <br/>
                        <span className="font-[300]">Growth</span> <span className="font-bold">& Efficiency</span>
                    </h2>

                    <div className="space-y-10">
                        {/* Feature 1 */}
                        <div className="flex gap-6 group">
                            <div className="mt-1 bg-white w-14 h-14 rounded-full border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-blue-200 transition-colors duration-300">
                                <Lightbulb className="text-[#0F172A] w-7 h-7 group-hover:text-[#2563EB] transition-all duration-300 group-hover:-translate-y-1.5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">Innovation at our core</h4>
                                <p className="text-slate-500 leading-relaxed text-[15px] font-medium max-w-md">In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-6 group">
                            <div className="mt-1 bg-white w-14 h-14 rounded-full border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-blue-200 transition-colors duration-300">
                                <Target className="text-[#0F172A] w-7 h-7 group-hover:text-[#2563EB] transition-all duration-300 group-hover:-translate-y-1.5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">Simplifying complexity</h4>
                                <p className="text-slate-500 leading-relaxed text-[15px] font-medium max-w-md">In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-6 group">
                            <div className="mt-1 bg-white w-14 h-14 rounded-full border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-blue-200 transition-colors duration-300">
                                <BarChart2 className="text-[#0F172A] w-7 h-7 group-hover:text-[#2563EB] transition-all duration-300 group-hover:-translate-y-1.5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">Empowering growth</h4>
                                <p className="text-slate-500 leading-relaxed text-[15px] font-medium max-w-md">In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;