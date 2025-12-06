"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Brain, 
  FileSearch, 
  Package, 
  Code, 
  ClipboardCheck, 
  Terminal, 
  Search, 
  Megaphone,
} from 'lucide-react';

const WorkingRoadmap = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Creates the sequential pop-in effect
        delayChildren: 0.1
      }
    }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 } as const, // Start lower and smaller
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 } // Bouncy pop-in
    }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    // Updated Section Styles: Added mx-4 (margin x-axis) and rounded-[3rem] (border-radius)
    <section className="bg-[#0B0F19] py-24 relative overflow-hidden font-sans text-white mx-4 md:mx-8 lg:mx-12 rounded-[3rem] my-8 shadow-2xl">
      
      {/* Background Bottom Wavy Line (Purple/Blue Gradient) */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-0">
         <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path 
                d="M0 80 C 400 120, 800 20, 1440 60" 
                fill="none" 
                stroke="url(#purpleGradient)" 
                strokeWidth="3" 
                className="opacity-60"
            />
            <path 
                d="M0 90 C 400 130, 800 30, 1440 70" 
                fill="none" 
                stroke="url(#purpleGradient)" 
                strokeWidth="10" 
                className="opacity-10 blur-xl"
            />
            <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
            </defs>
         </svg>
         
         {/* Dots positioned exactly on the curve with gentle pulse animation */}
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-[10%] left-[10%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA]"
         ></motion.div>
         <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className="absolute bottom-[30%] left-[50%] w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_#A855F7] border-[3px] border-[#0B0F19]"
         ></motion.div>
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
            className="absolute bottom-[48%] right-[15%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA]"
         ></motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-12 items-center">
          
          {/* --- Left Content --- */}
          <motion.div 
            className="xl:w-[30%] w-full flex flex-col items-start"
            variants={leftContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of element is visible
          >
            <span className="bg-[#1E293B] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg border border-slate-700/50">
              What We Do
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Working Roadmap
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button className="bg-[#1d4ed8] text-white px-9 py-4 rounded-full font-bold shadow-xl shadow-blue-900/30 hover:bg-blue-600 transition-all hover:-translate-y-1 text-sm">
                Get Started
              </button>
              
              {/* Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0F19] bg-gray-700 overflow-hidden relative">
                       <Image src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">2.3M+</p>
                  <p className="text-slate-500 text-xs mt-1">5000+ Client reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Content: Organic Bubble Layout --- */}
          <div className="xl:w-[70%] w-full relative pt-10">
             
             {/* Hand Drawn Arrow pointing to bubble 1 */}
             <motion.div 
                initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.8, rotate: 15, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-12 left-0 w-24 h-24 hidden xl:block"
             >
                <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 50 Q 40 10 90 30" />
                    <path d="M80 20 L 90 30 L 80 40" />
                </svg>
             </motion.div>

             {/* Animated Grid Container */}
             <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16 relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of grid is visible
             >
                
                {/* Connecting Line (SVG behind bubbles) */}
                <svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 800 400" preserveAspectRatio="none">
                    <motion.path 
                        d="M50 100 C 150 200, 250 50, 350 150 C 450 250, 550 100, 650 200 C 750 300, 800 200, 800 200" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="2" 
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                </svg>

                {/* 01 Brainstorming (Blue, Large) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:translate-y-8">
                    <motion.div 
                        animate={{ y: [0, -8, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <div className="absolute -top-2 -left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">01</div>
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#1d4ed8] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl hover:scale-105 transition-transform z-10 border-4 border-[#0B0F19]">
                            <Brain size={32} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-sm">Brainstorming</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 02 UX Research (Dark, Medium, High) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:-translate-y-12">
                    <motion.div 
                        animate={{ y: [0, -10, 0] }} 
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    >
                        <div className="absolute -top-1 left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">02</div>
                        <div className="w-28 h-28 lg:w-32 lg:h-32 bg-[#1E293B] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl hover:scale-105 transition-transform border border-slate-700/50">
                            <FileSearch size={24} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-xs text-slate-200">UX Research</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 03 Product Designing (Teal, Large) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:translate-y-4">
                    <motion.div 
                        animate={{ y: [0, -6, 0] }} 
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                    >
                        <div className="absolute -top-2 -left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">03</div>
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#0E7490] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl hover:scale-105 transition-transform z-10 border-4 border-[#0B0F19]">
                            <Package size={32} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-sm">Product Designing</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 04 Front-End (Dark, Medium, High) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:-translate-y-16">
                    <motion.div 
                        animate={{ y: [0, -9, 0] }} 
                        transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.7 }}
                    >
                        <div className="absolute -top-1 left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">04</div>
                        <div className="w-28 h-28 lg:w-32 lg:h-32 bg-[#1E1B4B] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl hover:scale-105 transition-transform border border-slate-700/50">
                            <Code size={24} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-xs text-slate-200">Front-End Development</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 05 Usability Testing (Dark, Medium, Low) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:translate-y-4">
                    <motion.div 
                        animate={{ y: [0, -7, 0] }} 
                        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.3 }}
                    >
                        <div className="absolute -top-1 left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">05</div>
                        <div className="w-28 h-28 lg:w-36 lg:h-36 bg-[#1E293B] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl hover:scale-105 transition-transform border border-slate-700/50">
                            <ClipboardCheck size={28} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-xs text-slate-200">Usability Testing</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 06 Back-End (Pink, Large) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:-translate-y-8">
                    <motion.div 
                        animate={{ y: [0, -10, 0] }} 
                        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.1 }}
                    >
                        <div className="absolute -top-2 -left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">06</div>
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#F43F5E] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl hover:scale-105 transition-transform z-10 border-4 border-[#0B0F19] shadow-pink-500/20">
                            <Terminal size={32} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-sm">Back-End Development</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 07 SEO (Blue, Large, Low) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:translate-y-12">
                    <motion.div 
                        animate={{ y: [0, -5, 0] }} 
                        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.6 }}
                    >
                        <div className="absolute -top-2 -left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">07</div>
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#1d4ed8] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl hover:scale-105 transition-transform z-10 border-4 border-[#0B0F19]">
                            <Search size={32} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-sm">SEO Optimization</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 08 Digital Marketing (Teal, Large, High) */}
                <motion.div variants={bubbleVariants} className="flex flex-col items-center relative group md:-translate-y-4">
                    <motion.div 
                        animate={{ y: [0, -8, 0] }} 
                        transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.4 }}
                    >
                        <div className="absolute -top-2 -left-2 bg-[#3B82F6] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">08</div>
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#0E7490] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl hover:scale-105 transition-transform z-10 border-4 border-[#0B0F19]">
                            <Megaphone size={32} className="text-white mb-2" strokeWidth={1.5} />
                            <span className="font-semibold text-sm">Digital Marketing</span>
                        </div>
                    </motion.div>
                </motion.div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingRoadmap;