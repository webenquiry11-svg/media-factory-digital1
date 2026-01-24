"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  FileSearch, 
  Package, 
  Code, 
  ClipboardCheck, 
  Terminal, 
  Search, 
  Megaphone,
  Palette,
  PenTool,
  Glasses,
  Gamepad2,
  ArrowRight,
  X
} from 'lucide-react';
import { useModal } from '../service/ModalContext';

const WorkingRoadmap = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
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

  const { openModal } = useModal();

  const servicesData = [
    {
      id: '01',
      title: 'Digital Marketing',
      icon: Megaphone,
      bgColor: 'bg-[#ba1408]',
      borderClass: 'border-4 border-[#0B0F19]',
      textClass: 'font-semibold text-sm text-white',
      shadowClass: 'shadow-2xl',
      positionClass: 'md:translate-y-8',
      floatDuration: 4,
      floatDelay: 0,
      description: "Maximize your reach with targeted strategies across social media, SEO, and PPC campaigns designed to convert visitors into loyal customers."
    },
    {
      id: '02',
      title: 'SEO',
      icon: Search,
      bgColor: 'bg-[#1E293B]',
      borderClass: 'border border-slate-700/50',
      textClass: 'font-semibold text-xs text-slate-200',
      shadowClass: 'shadow-xl',
      positionClass: 'md:-translate-y-12',
      floatDuration: 5,
      floatDelay: 0.5,
      description: "Climb search rankings and drive organic traffic with technical SEO, keyword optimization, and content strategy tailored to your niche."
    },
    {
      id: '03',
      title: 'Graphic Designing',
      icon: Palette,
      bgColor: 'bg-[#ba1408]',
      borderClass: 'border-4 border-[#0B0F19]',
      textClass: 'font-semibold text-sm text-white',
      shadowClass: 'shadow-2xl',
      positionClass: 'md:translate-y-4',
      floatDuration: 4.5,
      floatDelay: 0.2,
      description: "Visual storytelling that captivates. From logos to branding materials, we create designs that leave a lasting impression on your audience."
    },
    {
      id: '04',
      title: 'UI/UX Designing',
      icon: PenTool,
      bgColor: 'bg-[#ba1408]',
      borderClass: 'border border-slate-700/50',
      textClass: 'font-semibold text-xs text-slate-200',
      shadowClass: 'shadow-xl',
      positionClass: 'md:-translate-y-16',
      floatDuration: 5.2,
      floatDelay: 0.7,
      description: "User-centric interfaces that are intuitive and engaging. We design experiences that users love to interact with, reducing friction and boosting retention."
    },
    {
      id: '05',
      title: 'Website Development',
      icon: Code,
      bgColor: 'bg-[#1E293B]',
      borderClass: 'border border-slate-700/50',
      textClass: 'font-semibold text-xs text-slate-200',
      shadowClass: 'shadow-xl',
      positionClass: 'md:translate-y-4',
      floatDuration: 4.8,
      floatDelay: 0.3,
      description: "Robust, scalable, and secure websites built with modern technologies to drive your business growth online and ensure 99.9% uptime."
    },
    {
      id: '06',
      title: 'Product Designing',
      icon: Package,
      bgColor: 'bg-[#F43F5E]',
      borderClass: 'border-4 border-[#0B0F19] shadow-pink-500/20',
      textClass: 'font-semibold text-sm text-white',
      shadowClass: 'shadow-2xl',
      positionClass: 'md:-translate-y-8',
      floatDuration: 4.2,
      floatDelay: 0.1,
      description: "From concept to prototype, we help you design innovative products that solve real-world problems and stand out in the market."
    },
    {
      id: '07',
      title: 'AR/VR Development',
      icon: Glasses,
      bgColor: 'bg-[#ba1408]',
      borderClass: 'border-4 border-[#0B0F19]',
      textClass: 'font-semibold text-sm text-white',
      shadowClass: 'shadow-2xl',
      positionClass: 'md:translate-y-12',
      floatDuration: 5.5,
      floatDelay: 0.6,
      description: "Immersive augmented and virtual reality experiences that bridge the gap between the digital and physical worlds for training, gaming, or retail."
    },
    {
      id: '08',
      title: 'Game Development',
      icon: Gamepad2,
      bgColor: 'bg-[#ba1408]',
      borderClass: 'border-4 border-[#0B0F19]',
      textClass: 'font-semibold text-sm text-white',
      shadowClass: 'shadow-2xl',
      positionClass: 'md:-translate-y-4',
      floatDuration: 4.6,
      floatDelay: 0.4,
      description: "Engaging and high-performance games for mobile and web, built with passion and cutting-edge engines to entertain millions."
    }
  ];

  return (
    // Updated Section Styles: Added mx-4 (margin x-axis) and rounded-[3rem] (border-radius)
    <section id="process" className="bg-[#0B0F19] py-24 relative overflow-hidden font-sans text-white mx-4 md:mx-8 lg:mx-12 rounded-[3rem] my-8 shadow-2xl">
      
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
                    <stop offset="0%" stopColor="#ba1408" stopOpacity="0" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#ba1408" stopOpacity="0" />
                </linearGradient>
            </defs>
         </svg>
         
         {/* Dots positioned exactly on the curve with gentle pulse animation */}
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-[10%] left-[10%] w-3 h-3 bg-red-700 rounded-full shadow-[0_0_10px_#ba1408]"
         ></motion.div>
         <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className="absolute bottom-[30%] left-[50%] w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_#A855F7] border-[3px] border-[#0B0F19]"
         ></motion.div>
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
            className="absolute bottom-[48%] right-[15%] w-3 h-3 bg-red-700 rounded-full shadow-[0_0_10px_#ba1408]"
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
              Your Path to Digital Success
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              In today's digital-first landscape, businesses need more than effective solutions—they need a defined strategy for growth.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button 
                onClick={openModal}
                className="bg-[#ba1408] text-white px-9 py-4 rounded-full font-bold shadow-xl shadow-[#ba1408]/30 hover:bg-red-700 transition-all hover:-translate-y-1 text-sm"
              >
                Get Started
              </button>
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
                
                {/* Mapped Services Bubbles */}
                {servicesData.map((service) => (
                  <motion.div 
                    key={service.id}
                    variants={bubbleVariants} 
                    drag
                    dragSnapToOrigin
                    dragElastic={0.2}
                    whileHover={{ scale: 1.05 }}
                    whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center relative group cursor-pointer ${service.positionClass} ${selectedService === service.id ? 'z-50' : 'z-10'}`}
                    onMouseEnter={() => setSelectedService(service.id)}
                    onMouseLeave={() => setSelectedService(null)}
                  >
                    <motion.div 
                        animate={{ y: selectedService === service.id ? 0 : [0, -8, 0] }} 
                        transition={{ y: { repeat: Infinity, duration: service.floatDuration, ease: "easeInOut", delay: service.floatDelay } }}
                        className={`transition-opacity duration-300 ${selectedService === service.id ? 'opacity-0' : 'opacity-100'}`}
                    >
                        <div className="absolute -top-2 -left-2 bg-[#ba1408] text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#0B0F19] z-20 shadow-lg">{service.id}</div>
                        <div className={`w-32 h-32 lg:w-40 lg:h-40 ${service.bgColor} rounded-full flex flex-col items-center justify-center text-center p-4 ${service.shadowClass} transition-transform z-10 ${service.borderClass}`}>
                            <service.icon size={32} className="text-white mb-2" strokeWidth={1.5} />
                            <span className={service.textClass}>{service.title}</span>
                        </div>
                    </motion.div>

                    <AnimatePresence>
                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center ${service.bgColor} border-2 border-white/20`}
                        >
                          <service.icon size={28} className="text-white mb-3" />
                          <h4 className="text-white font-bold text-sm mb-2">{service.title}</h4>
                          <p className="text-white/90 text-xs leading-relaxed font-medium">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingRoadmap;
