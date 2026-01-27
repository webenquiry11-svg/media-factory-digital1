"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  ArrowRight,
  Users,
  TrendingUp
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
            <Image src="/logo.png" alt="MediaFactory Logo" width={240} height={240} className="object-contain w-40 sm:w-48 lg:w-60" />
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
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        // Light theme colors: subtle slate or brand red accents
        this.color = Math.random() > 0.9 ? 'rgba(186, 20, 8, 0.3)' : 'rgba(15, 23, 42, 0.1)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const connectDistance = 200;

        if (distance < connectDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(186, 20, 8, ${0.15 * (1 - distance / connectDistance)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#F8F9FF] overflow-hidden min-h-[calc(100vh-130px)] lg:cursor-none flex flex-col"
      onMouseMove={(e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
        }
      }}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      
      {/* --- Custom Cursor Element --- */}
      <div 
        className={`hidden lg:flex fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-150 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
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

      {/* Interactive Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
          
          {/* --- Left Content --- */}
          <div className="max-w-2xl relative z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] text-[#0F172A] leading-[1.1] mb-6 lg:mb-8 tracking-tight font-sans cursor-text">
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
            <div className="relative w-[280px] h-[380px] sm:w-[340px] sm:h-[440px] lg:w-[420px] lg:h-[520px] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl flex items-end justify-center overflow-visible z-10">
               
               {/* 2. The Person Image */}
               <div className="relative w-full h-[90%] rounded-b-[2rem] sm:rounded-b-[3rem] overflow-hidden">
                 <Image 
                   src="/hero img.png" 
                   alt="Business Professional"
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 />
               </div>

               {/* 3. Floating Client Retention Badge (Top Right) */}
               <div className="absolute top-4 -right-4 sm:top-8 sm:-right-10 bg-white py-3 px-4 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-50 animate-bounce-slow z-20 flex items-center gap-3 sm:gap-4 min-w-[160px] sm:min-w-[200px]">
                  <div className="bg-blue-50 p-2.5 rounded-full">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Client Retention</p>
                    <p className="text-[#0F172A] font-bold text-xl">92%</p>
                  </div>
               </div>

               {/* 4. Floating "ROI" Card (Bottom Left) */}
               <div className="absolute bottom-6 -left-4 sm:bottom-8 sm:-left-12 bg-white/90 backdrop-blur-sm p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-white z-30 w-40 sm:w-52">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#ba1408]/10 p-2 rounded-lg">
                        <TrendingUp size={20} className="text-[#ba1408]" />
                    </div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Avg. Client ROI</p>
                  </div>
                  <p className="text-[#0F172A] text-3xl font-bold mb-1">3.2x</p>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-[#ba1408] h-full w-[85%] rounded-full"></div>
                  </div>
               </div>

               {/* 5. Floating "Experience" Badge (Bottom Right) */}
               <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-[#ba1408] text-white p-4 sm:p-6 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] rounded-tr-[0.75rem] sm:rounded-tr-[1rem] rounded-bl-[0.75rem] sm:rounded-bl-[1rem] rounded-br-[1.5rem] sm:rounded-br-[2rem] shadow-2xl z-30 flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36">
                  <span className="text-3xl sm:text-5xl font-bold">8+</span>
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
