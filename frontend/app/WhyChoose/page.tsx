'use client'; // <--- ADD THIS LINE HERE
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- SVGs for the Brand Logos (Unchanged) ---

const WhyChooseSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div id="why-choose-us" className="bg-white min-h-screen flex items-center justify-center p-6 lg:p-16 font-sans">
      
      {/* Container - Grid Layout with items-stretch to force equal height */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        
        {/* LEFT COLUMN: Image Composition */}
        {/* 'lg:h-auto' lets it grow with the neighbor. 'h-[500px]' acts as fallback for mobile stacking. */}
        <div className="relative w-full lg:w-[90%] h-[500px] lg:h-auto">
            
            {/* Animated Background Orbs */}
            <motion.div 
                animate={{ y: [-20, 20, -20], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-80 h-80 bg-[#ba1408]/20 rounded-full blur-3xl -z-10"
            />
            <motion.div 
                animate={{ y: [20, -20, 20], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-12 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -z-10"
            />
            
            {/* Image is Absolute to fill the stretched container entirely */}
            <img 
                src="/why us.png" 
                alt="Team working together" 
                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] grayscale-[10%] z-10"
            />
            
        </div>

        {/* RIGHT COLUMN: Content */}
        {/* flex flex-col justify-center to center content vertically if image happens to be taller, though usually text drives height */}
        <div className="flex flex-col justify-center space-y-10 pl-0 lg:pl-4 py-4">
          
          <div className="space-y-6">
            <div className="inline-block bg-red-700 px-6 py-2 rounded-full">
                <span className="text-white font-bold text-sm tracking-wide">Why Choose Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.25]">
                Why Choose Media Factory?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Proven digital experts turning ambitious brands into market leaders with tailored strategies and cutting-edge tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onMouseEnter={() => setActiveCard(0)}
              className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCard === 0 
                  ? "bg-white border-[#ba1408] shadow-md transform scale-105" 
                  : "bg-white border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
                <h4 className="font-bold text-lg text-gray-900 mb-3">Results-Driven Creativity</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Bold campaigns that deliver measurable ROI through SEO, immersive tech, and stunning web experiences.
                </p>
            </div>

            <div 
              onMouseEnter={() => setActiveCard(1)}
              className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCard === 1 
                  ? "bg-white border-[#ba1408] shadow-md transform scale-105" 
                  : "bg-white border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
                <h4 className="font-bold text-lg text-gray-900 mb-3">Seamless Partnership</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Dedicated support from strategy to launch, ensuring your vision scales effortlessly with expert guidance.
                </p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <span className="text-7xl font-bold text-red-700 tracking-tight">
                1.3m
            </span>
            <div className="text-sm font-semibold text-gray-500 leading-snug">
                <p>Average revenue growth for</p>
                <p>per successful clients</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhyChooseSection;
