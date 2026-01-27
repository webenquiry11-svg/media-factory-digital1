"use client";

import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp,
  ArrowUpRight
} from 'lucide-react';
import { useModal } from '../service/ModalContext';

const Footer = () => {
  const { openModal } = useModal();
  return (
    <footer className="bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* ==========================================
          TOP SECTION: Stats, Features, App Download
         ========================================== */}
      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-24 relative">
        
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-2/3">
            
            {/* 1. Stats Row */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-10">
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="flex items-start">
                  <ArrowUp className="text-red-700 w-8 h-8 mt-2" strokeWidth={3} />
                  <span className="text-7xl font-bold tracking-tighter">95%</span>
                </div>
                <div className="text-gray-500 text-sm leading-relaxed max-w-[150px]">
                  success rate in SEO, web development, and immersive tech initiatives.
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <span className="text-7xl font-bold tracking-tighter">1.5m</span>
                <div className="text-gray-500 text-sm leading-relaxed max-w-[150px]">
                  leads generated, driving client growth with targeted digital marketing.
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200 mb-10"></div>

            {/* 3. Request Quote Button */}
            <div>
              <button onClick={openModal} className="bg-[#ba1408] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-red-900/20 transition-all hover:-translate-y-1 text-sm flex items-center gap-2">
                Request A Free Quote
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT: Phone Image */}
          {/* Positioned absolutely on desktop to overlap neatly like the design */}
          <div className="w-full lg:w-1/3 mt-12 lg:mt-0 relative flex justify-center items-center">
             {/* Decorative Circles behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gray-200 rounded-full opacity-50"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-200 rounded-full opacity-30"></div>
             
             {/* Logo Image */}
             <Image 
               src="/logo.png" 
               alt="MediaFactory Logo"
               width={500}
               height={500}
               className="relative z-10 w-auto h-auto max-w-[250px] lg:max-w-[320px] object-contain drop-shadow-xl"
             />
          </div>
        </div>
      </div>


      {/* ==========================================
          BOTTOM SECTION: Links & Contact
         ========================================== */}
      <div className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: Brand & Newsletter */}
            <div className="space-y-6">
              {/* Newsletter Form */}
              <div className="flex items-stretch mt-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-[#111] border border-gray-800 text-white px-4 py-3 rounded-l-md w-full focus:outline-none focus:border-red-700 placeholder-gray-600 text-sm"
                />
                <button className="bg-red-700 hover:bg-red-700-700 text-white px-5 rounded-r-md font-medium text-sm whitespace-nowrap transition-colors">
                  Sign Up &gt;
                </button>
              </div>
              
              <p className="text-gray-500 text-xs">
                By subscribing, you're accept <a href="#" className="text-white underline decoration-gray-600 underline-offset-2">Privacy Policy</a>
              </p>
            </div>

            {/* Column 2: My Account */}
            <div className="lg:pl-8">
              <h3 className="text-lg font-medium text-white mb-6">My account</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-700 transition-colors">Forum Support</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Help & FAQ</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Pricing and plans</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Cookies Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Service */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Service</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-700 transition-colors">It Consultation</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Cloud Services</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">AI Machine Learning</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Data Security</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-red-700 transition-colors">Cyber Security</a></li>
              </ul>
            </div>

            {/* Column 4: Locations & Contact */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Locations</h3>
              <div className="flex gap-3 mb-8">
                <MapPin className="text-red-700 shrink-0 mt-0.5" size={18} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ludhiana, Punjab, 141001
                </p>
              </div>

              <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
              <div className="space-y-3">
                 <a href="mailto:info@mediafactory.in" className="text-gray-400 text-sm hover:text-white transition-colors block">
                   info@mediafactory.in
                 </a>
                 <div className="flex items-center gap-3 text-white">
                   <Phone className="text-red-700" size={18} />
                   <span className="text-lg font-normal">9814746565</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==========================================
          COPYRIGHT & SOCIALS
         ========================================== */}
      <div className="border-t border-gray-900 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 <span className="text-red-700">MediaFactory</span> - IT Services. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Facebook size={16} className="text-red-700" /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Twitter size={16} className="text-sky-400" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Instagram size={16} className="text-pink-600" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Linkedin size={16} className="text-red-600" /> Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
