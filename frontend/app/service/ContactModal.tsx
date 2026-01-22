"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useModal } from './ModalContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactModal = () => {
  const { isOpen, closeModal } = useModal();

  // Animation Variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring" as const, duration: 0.5, bounce: 0.3 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
          >
            {/* Left Side: Visuals */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-[#020617] flex flex-col justify-between p-10 text-white">
              
              {/* Animated Background Blobs */}
              <div className="absolute inset-0">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3], 
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-20 -left-20 w-96 h-96 bg-[#ba1408] rounded-full blur-[100px]"
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -30, 0],
                    y: [0, 50, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-600 rounded-full blur-[80px]"
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 40, 0],
                    y: [0, 40, 0]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col">
                
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-white/90 mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for new projects
                  </div>
                  <h3 className="text-4xl font-bold leading-tight mb-3">
                    Let's Build <br/> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba1408] to-red-400">Extraordinary</span>
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    We help brands and businesses grow with cutting-edge digital solutions.
                  </p>
                </div>

                {/* Center Visual */}
                <div className="flex-1 flex items-center justify-center">
                   <div className="relative w-full max-w-[280px] aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl"></div>
                      <DotLottieReact
                        src="https://lottie.host/e708f4ca-2928-4c4c-a444-d66787a72e65/A5ayUiZD7T.lottie"
                        loop
                        autoplay
                      />
                   </div>
                </div>

              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <div className="h-full flex flex-col justify-center max-w-md mx-auto">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.1 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
                    <p className="text-gray-500">Fill out the form below and we'll get back to you.</p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                    
                    {/* Full Name */}
                    <motion.div variants={formItemVariants} className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ba1408] transition-colors" size={18} />
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#ba1408] focus:ring-4 focus:ring-[#ba1408]/10 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        />
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={formItemVariants} className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ba1408] transition-colors" size={18} />
                        <input 
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#ba1408] focus:ring-4 focus:ring-[#ba1408]/10 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        />
                      </div>
                    </motion.div>

                    {/* Phone Number */}
                    <motion.div variants={formItemVariants} className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ba1408] transition-colors" size={18} />
                        <input 
                          type="tel" 
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#ba1408] focus:ring-4 focus:ring-[#ba1408]/10 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                        />
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={formItemVariants} className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#ba1408] transition-colors" size={18} />
                        <textarea 
                          rows={3}
                          placeholder="Tell us about your project..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#ba1408] focus:ring-4 focus:ring-[#ba1408]/10 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400 resize-none"
                        />
                      </div>
                    </motion.div>

                    <motion.button
                      variants={formItemVariants}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#ba1408] hover:bg-[#991106] text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 transition-all flex items-center justify-center gap-2 mt-2 group"
                    >
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;