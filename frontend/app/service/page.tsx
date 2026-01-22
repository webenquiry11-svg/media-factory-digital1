"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brush } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RevenueSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger effect for cards
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 15 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* --- Header Section --- */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="max-w-3xl">
            <span className="bg-[#ba1408]/10 text-[#ba1408] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              What We Offering
            </span>
            <h2 className="text-4xl lg:text-[3.5rem] font-bold text-[#0F172A] leading-[1.15]">
              Provides Full-Cycle Custom
              <br className="hidden lg:block" />
              Digital Services
            </h2>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-slate-500 text-lg leading-relaxed">
              In the current competitive environment, the need for effective and
              business-ready digital solutions is more essential than ever.
            </p>
          </div>
        </motion.div>

        {/* --- Services Bento Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 1. IT Management (Top Left) */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFF5F7] rounded-[2.5rem] p-10 flex flex-col justify-between h-[520px] relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0F172A] leading-tight mb-8">
                Digital <br /> Marketing
              </h3>

              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <ArrowUpRight className="text-[#E11D48]" size={24} />
              </button>
            </div>

            {/* Decorative Graph */}
            <div className="absolute bottom-0 left-0 w-full h-[220px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 220"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FB7185" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFF5F7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 180 L 80 160 L 160 180 L 240 100 L 320 120 L 400 20 L 400 220 L 0 220 Z"
                  fill="url(#pinkGradient)"
                />
                <path
                  d="M0 180 L 80 160 L 160 180 L 240 100 L 320 120 L 400 20"
                  fill="none"
                  stroke="#E11D48"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="80"
                  cy="160"
                  r="4"
                  fill="white"
                  stroke="#E11D48"
                  strokeWidth="2"
                />
                <circle
                  cx="240"
                  cy="100"
                  r="4"
                  fill="white"
                  stroke="#E11D48"
                  strokeWidth="2"
                />
                <circle
                  cx="320"
                  cy="120"
                  r="4"
                  fill="white"
                  stroke="#E11D48"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </motion.div>

          {/* 2. Website Design (Center - Spans 2 Rows) */}
          <motion.div
            variants={cardVariants}
            className="bg-[#ba1408]/5 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300 lg:row-span-2 h-auto min-h-[520px]"
          >
            <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-[#ba1408]/20"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0F172A] leading-tight mb-8">
                Website <br /> Development
              </h3>

              <button className="w-14 h-14 bg-[#ba1408] rounded-full flex items-center justify-center shadow-lg shadow-[#ba1408]/30 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <ArrowUpRight className="text-white" size={24} />
              </button>
            </div>

            {/* Expanded Tech Graphic */}
            <div className="relative w-full h-full flex-grow mt-12 min-h-[600px]">
              {/* Floating Logos */}
              <div className="absolute top-0 left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20 animate-bounce-slow border border-slate-100">
                <span className="font-bold text-yellow-500 text-sm">JS</span>
              </div>
              <div className="absolute top-20 right-10 w-20 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20 animate-bounce-slow delay-75 border border-slate-100">
                <span className="font-bold text-[#ba1408] text-sm">React</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20 animate-bounce-slow delay-150 border border-slate-100">
                <span className="font-bold text-green-500 text-sm">Vue</span>
              </div>

              {/* Tall Browser Window - Covering full height */}
              <div className="absolute bottom-0 right-0 w-[90%] h-[95%] bg-white rounded-tl-3xl border-t border-l border-[#ba1408]/20 shadow-2xl overflow-hidden translate-x-6 translate-y-6">
                <div className="bg-[#1E293B] h-10 w-full flex items-center gap-2 px-5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-0 h-full bg-slate-50 relative">
                  <div className="absolute right-0 bottom-0 w-[150px] h-[150px] bg-[#ba1408] rounded-tl-[4rem] flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">V</span>
                  </div>
                  <div className="p-8 space-y-6 opacity-40">
                    <div className="h-3 w-1/2 bg-slate-400 rounded-full"></div>
                    <div className="h-3 w-3/4 bg-slate-400 rounded-full"></div>
                    <div className="h-3 w-2/3 bg-slate-400 rounded-full"></div>
                    <div className="h-3 w-full bg-slate-300 rounded-full mt-8"></div>
                    <div className="h-3 w-full bg-slate-300 rounded-full"></div>
                    {/* Added more mock content to fill the taller space */}
                    <div className="h-3 w-5/6 bg-slate-300 rounded-full mt-8"></div>
                    <div className="h-3 w-4/5 bg-slate-300 rounded-full"></div>
                    <div className="h-3 w-full bg-slate-300 rounded-full mt-8"></div>
                    <div className="h-3 w-1/2 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. CRM Software (Top Right) */}
          <motion.div
            variants={cardVariants}
            className="bg-[#F8FAFC] rounded-[2.5rem] p-10 flex flex-col justify-between h-[520px] relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0F172A] leading-tight mb-8">
                SEO <br /> Optimization
              </h3>

              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <ArrowUpRight className="text-[#ba1408]" size={24} />
              </button>
            </div>

            {/* Decorative Dashboard */}
            <div className="absolute bottom-0 right-0 w-[110%] h-[240px] translate-x-4 translate-y-4">
              <div className="absolute bottom-0 right-0 w-[85%] h-[200px] bg-white rounded-tl-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-6 border-t border-l border-slate-50">
                <div className="flex gap-6 h-full items-end pb-4">
                  <div className="w-3/5">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <p className="text-[10px] text-slate-400 font-medium">
                          Daily Traffic
                        </p>
                        <p className="text-2xl font-bold text-slate-800">
                          2.579
                        </p>
                      </div>
                      <span className="text-[10px] text-green-500 font-bold bg-green-50 px-1.5 py-0.5 rounded">
                        +2.45%
                      </span>
                    </div>
                    <div className="flex items-end gap-2 h-16">
                      <div className="w-1/5 bg-[#ba1408]/20 h-[40%] rounded-sm"></div>
                      <div className="w-1/5 bg-[#ba1408] h-[70%] rounded-sm"></div>
                      <div className="w-1/5 bg-[#ba1408]/20 h-[50%] rounded-sm"></div>
                      <div className="w-1/5 bg-[#ba1408] h-[100%] rounded-sm"></div>
                      <div className="w-1/5 bg-[#ba1408]/20 h-[60%] rounded-sm"></div>
                    </div>
                  </div>
                  <div className="absolute -top-12 right-12 bg-white p-3 rounded-2xl shadow-lg border border-slate-50 w-28 h-28 flex flex-col items-center justify-center">
                    <p className="text-[8px] text-slate-400 font-bold mb-1 w-full text-left">
                      Pie Chart
                    </p>
                    <div className="relative w-12 h-12">
                      <svg
                        viewBox="0 0 32 32"
                        className="w-full h-full -rotate-90"
                      >
                        <circle cx="16" cy="16" r="16" fill="#ba1408" fillOpacity="0.1" />
                        <circle
                          cx="16"
                          cy="16"
                          r="8"
                          fill="transparent"
                          stroke="#ba1408"
                          strokeWidth="16"
                          strokeDasharray="75 100"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Mobile App Dev (Bottom Left) */}
          <motion.div
            variants={cardVariants}
            className="bg-[#F0FDF4] rounded-[2.5rem] p-10 flex flex-col justify-between h-[520px] relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0F172A] leading-tight mb-8">
                Logo <br /> Designing
              </h3>

              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <ArrowUpRight className="text-[#16A34A]" size={24} />
              </button>
            </div>

            {/* Decorative Phone Mockups */}
            <div className="absolute bottom-0 right-0 w-[80%] h-[200px] bg-white rounded-tl-3xl shadow-lg border-t border-l border-green-100 translate-x-4 translate-y-4 overflow-hidden">
              <div className="w-full h-full p-6 flex flex-col items-center bg-slate-50">
                <div className="w-16 h-1.5 bg-gray-300 rounded-full mb-6"></div>
                <div className="grid grid-cols-2 gap-3 w-full opacity-60">
                  <div className="bg-green-200 h-20 rounded-xl"></div>
                  <div className="bg-green-200 h-20 rounded-xl"></div>
                  <div className="bg-green-200 h-20 rounded-xl"></div>
                  <div className="bg-green-200 h-20 rounded-xl"></div>
                </div>
                <div className="absolute bottom-6 right-6 bg-[#16A34A] p-3 rounded-xl shadow-md">
                  <Brush className="text-white" size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Cloud Solutions (Bottom Right) */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FAF5FF] rounded-[2.5rem] p-10 flex flex-col justify-between h-[520px] relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0F172A] leading-tight mb-8">
                Immersive <br /> Technology
              </h3>

              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <ArrowUpRight className="text-[#9333EA]" size={24} />
              </button>
            </div>

            {/* Decorative Cloud Graphic */}
            <div className="absolute bottom-0 left-0 w-full h-[220px] flex items-end justify-center">
              <div className="relative w-full h-full">
                {/* Abstract Cloud Shapes */}
                <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 bg-[#ba1408]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[40px] left-[20%] w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-32 h-32">
                    <DotLottieReact
                      src="https://lottie.host/e708f4ca-2928-4c4c-a444-d66787a72e65/A5ayUiZD7T.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueSection;
