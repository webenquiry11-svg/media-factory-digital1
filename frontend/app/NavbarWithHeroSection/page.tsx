"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  CheckCircle, 
  Zap, 
  BarChart, 
  Star,
  Settings,
  ArrowUp,
  User,
  Mail,
  KeyRound,
  MessageSquare,
  Send,
  Triangle,
  Square,
  LayoutGrid,
  ArrowRight
} from 'lucide-react';
import { useModal } from '../service/ModalContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <>
      {/* --- 2. Main Navigation --- */}
      <header className="w-full bg-white border-b border-gray-100 relative z-50">
        <div className="container mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="MediaFactory Logo" width={240} height={240} className="object-contain" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-base font-bold text-slate-600">
            <Link href="/" className="flex items-center gap-1 text-[#ba1408]">Home</Link>
            <Link href="#services" className="flex items-center gap-1 hover:text-[#ba1408] transition-colors">Services</Link>
            <Link href="#about" className="flex items-center gap-1 hover:text-[#ba1408] transition-colors">About Us</Link>
            <Link href="#portfolio" className="flex items-center gap-1 hover:text-[#ba1408] transition-colors">Portfolio</Link>
            <Link href="#contact" className="hover:text-[#ba1408] transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div 
            className="hidden lg:flex items-center gap-4 relative"
          >
            <motion.button 
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-[#ba1408] to-[#d91f12] text-white font-bold shadow-[0_10px_20px_-10px_rgba(186,20,8,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(186,20,8,0.6)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-5">
            <Link href="/" className="text-[#ba1408] font-bold text-lg">Home</Link>
            <Link href="#services" className="text-slate-600 font-bold text-lg">Services</Link>
            <Link href="#about" className="text-slate-600 font-bold text-lg">About Us</Link>
            <Link href="#portfolio" className="text-slate-600 font-bold text-lg">Portfolio</Link>
            <Link href="#contact" className="text-slate-600 font-bold text-lg">Contact</Link>
            <button className="bg-[#0F172A] text-white px-6 py-4 rounded-full text-base font-bold w-full mt-2">Sign Up Now</button>
          </div>
        )}
      </header>
    </>
  );
};

const HeroSection = () => {
  // State for Custom Cursor
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const { openModal } = useModal();

  return (
    <section 
      className="relative bg-[#F8F9FF] overflow-hidden min-h-[calc(100vh-130px)] cursor-none flex flex-col"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      
      {/* --- Custom Cursor Element --- */}
      <div 
        className={`fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-150 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        style={{ left: mousePos.x, top: mousePos.y }}
      >
         <div className="w-10 h-10 border border-slate-900 rounded-full flex items-center justify-center bg-transparent backdrop-blur-[1px]">
            <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
         </div>
      </div>

      {/* Styles for the Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
      }}></div>

      {/* --- Ticker Strip --- */}
      <div className="w-full border-b border-gray-200/60 bg-white/50 backdrop-blur-sm hidden lg:block overflow-hidden">
        <div className="animate-marquee py-4">
          <div className="flex-shrink-0 flex justify-around items-center min-w-full px-12">
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><Globe size={16} className="text-[#ba1408]" /> Innovation in every click</div>
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><Zap size={16} className="text-[#ba1408]" /> Smart IT for smarter business</div>
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><CheckCircle size={16} className="text-[#ba1408]" /> Tailored tech, measurable results</div>
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><BarChart size={16} className="text-[#ba1408]" /> Secure, scalable, and always on</div>
          </div>
          <div className="flex-shrink-0 flex justify-around items-center min-w-full px-12">
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><Globe size={16} className="text-[#ba1408]" /> Innovation in every click</div>
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><Zap size={16} className="text-[#ba1408]" /> Smart IT for smarter business</div>
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><CheckCircle size={16} className="text-[#ba1408]" /> Tailored tech, measurable results</div>
              <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium uppercase tracking-wide"><BarChart size={16} className="text-[#ba1408]" /> Secure, scalable, and always on</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-16 pb-12 lg:pb-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* --- Left Content --- */}
          <div className="max-w-2xl relative z-20">
            <h1 className="text-6xl lg:text-[5rem] text-[#0F172A] leading-[1.1] mb-8 tracking-tight font-sans cursor-text">
              <span className="font-[700]">Elevate Your Business</span> <br />
              <span className="font-[700]">With Strategic</span> <br />
              <span className="font-[700]">IT Solutions</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-normal cursor-text">
              In today's competitive market, businesses require efficient, scalable, and cost-effective IT services that drive growth, reduce complexity, and stay ahead of change.
            </p>
            
            <div className="flex items-center gap-8 mb-10">
              {/* Added cursor-pointer to buttons so the custom cursor still indicates clickability implicitly or we can override */}
              <button onClick={openModal} className="bg-[#ba1408] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-[#ba1408]/30 hover:bg-red-700-700 transition-all hover:-translate-y-1 text-sm cursor-none">
                Get Started
              </button>
            </div>
          </div>

          {/* --- Right Image Section --- */}
          <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end lg:right-12">
            
            {/* Main White Card Container */}
            <div className="relative w-[340px] h-[440px] lg:w-[420px] lg:h-[520px] bg-white rounded-[3rem] shadow-2xl flex items-end justify-center overflow-visible z-10">
               
               {/* 2. The Person Image */}
               <div className="relative w-full h-[90%] rounded-b-[3rem] overflow-hidden">
                 <Image 
                   src="/hero img.png" 
                   alt="Business Professional"
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 />
               </div>

               {/* 3. Floating Trustpilot Badge (Top Right) */}
               <div className="absolute top-8 -right-10 bg-white py-3 px-5 rounded-2xl shadow-lg border border-slate-50 animate-bounce-slow z-20 flex items-center gap-4 min-w-[180px]">
                  <div>
                    <div className="flex gap-0.5 mb-1">
                        {[1,2,3,4,5].map(i => (
                        <div key={i} className="bg-[#00B67A] p-0.5 rounded-[1px]">
                            <Star size={8} className="text-white fill-white" />
                        </div>
                        ))}
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">Trust pilot</span>
                  </div>
                  <div className="bg-[#ba1408]/10 p-1 rounded-full ml-auto">
                      <CheckCircle size={16} className="text-[#ba1408] fill-[#ba1408] text-white" />
                  </div>
                  <div className="absolute -top-3 -right-2 bg-[#00B67A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">4.9 ★</div>
               </div>

               {/* 4. Floating "Revenue" Card (Bottom Left) */}
               <div className="absolute bottom-8 -left-12 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white z-30 w-52">
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold mb-1">Revenue</p>
                  <p className="text-[#0F172A] text-2xl font-bold mb-3">$4820.00</p>
                  {/* Chart Graphic */}
                  <div className="flex items-end gap-1.5 h-10 w-full justify-between">
                     <div className="w-full h-[40%] bg-[#ba1408]/20 rounded-sm relative group overflow-hidden"><div className="absolute bottom-0 w-full h-0 bg-[#ba1408] transition-all group-hover:h-full duration-500"></div></div>
                     <div className="w-full h-[70%] bg-[#ba1408]/20 rounded-sm relative group overflow-hidden"><div className="absolute bottom-0 w-full h-0 bg-[#ba1408] transition-all group-hover:h-full duration-500 delay-75"></div></div>
                     <div className="w-full h-[50%] bg-[#ba1408]/20 rounded-sm relative group overflow-hidden"><div className="absolute bottom-0 w-full h-0 bg-[#ba1408] transition-all group-hover:h-full duration-500 delay-100"></div></div>
                     <div className="w-full h-[100%] bg-[#ba1408] rounded-sm relative shadow-md"></div>
                     <div className="w-full h-[60%] bg-[#ba1408]/20 rounded-sm relative group overflow-hidden"><div className="absolute bottom-0 w-full h-0 bg-[#ba1408] transition-all group-hover:h-full duration-500 delay-150"></div></div>
                  </div>
               </div>

               {/* 5. Floating "Experience" Badge (Bottom Right) */}
               <div className="absolute -bottom-8 -right-8 bg-[#ba1408] text-white p-6 rounded-tl-[2rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-br-[2rem] shadow-2xl z-30 flex flex-col items-center justify-center w-36 h-36">
                  <span className="text-5xl font-bold">8+</span>
                  <span className="text-[11px] font-medium text-red-100 mt-1">Years Experience</span>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <ArrowUp size={18} className="text-[#ba1408] rotate-45" />
                  </div>
               </div>

               {/* 6. Settings Icon (Far Right Edge) */}
               <div className="absolute top-1/2 -right-20 -translate-y-1/2 bg-[#ba1408] w-12 h-12 flex items-center justify-center rounded-lg shadow-lg text-white cursor-pointer hover:bg-red-700-700 transition-colors hidden xl:flex">
                   <Settings size={24} className="animate-spin" />
               </div>

            </div>

            {/* Background Glows */}
            <div className="absolute -bottom-10 left-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>

      {/* --- Bottom Logo Slider --- */}
      <div className="w-full border-t border-gray-100/50 bg-white/50 backdrop-blur-sm pt-8 pb-10 z-20 overflow-hidden mt-auto">
        <div className="animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-around min-w-full gap-16 md:gap-32 px-8">
              <div className="flex items-center gap-3 shrink-0 group cursor-none"><div className="w-7 h-7 bg-[#5F3DC4] text-white flex items-center justify-center rounded-md font-serif font-bold text-sm">C</div><span className="text-xl font-bold text-slate-800 group-hover:text-[#5F3DC4] transition-colors">customer.io</span></div>
              <div className="flex items-center gap-2 shrink-0 group cursor-none"><div className="w-7 h-7 bg-[#FF3366] rounded-full flex items-center justify-center"><span className="text-white font-bold text-xs">in</span></div><span className="text-xl font-bold text-slate-800 group-hover:text-[#FF3366] transition-colors">invision</span></div>
              <div className="flex items-center gap-2 shrink-0 group cursor-none"><Triangle size={24} className="text-[#FBBD08] fill-[#FBBD08]" /><span className="text-xl font-bold text-slate-800 group-hover:text-[#FBBD08] transition-colors">Airtable</span></div>
              <div className="flex items-center gap-1 shrink-0 group cursor-none"><div className="flex gap-0.5"><div className="w-2 h-2 rounded-full bg-[#FF5B5B]"></div><div className="w-2 h-2 rounded-full bg-[#FFC400]"></div><div className="w-2 h-2 rounded-full bg-[#00D084]"></div></div><span className="text-xl font-bold text-slate-800 ml-1 group-hover:text-slate-900 transition-colors">monday<span className="font-normal text-slate-500">.com</span></span></div>
              <div className="flex items-center gap-2 shrink-0 group cursor-none"><Square size={20} className="text-[#FF4D79] fill-[#FF4D79] rounded-sm" /><span className="text-xl font-bold text-slate-800 group-hover:text-[#FF4D79] transition-colors">pendo</span></div>
              <div className="flex items-center gap-2 shrink-0 group cursor-none"><LayoutGrid size={24} className="text-[#FF9F1C] fill-[#FF9F1C]" /><span className="text-xl font-bold text-slate-800 group-hover:text-[#FF9F1C] transition-colors">productboard</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NavbarWithHeroSection = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#ba1408]/20">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default NavbarWithHeroSection;
