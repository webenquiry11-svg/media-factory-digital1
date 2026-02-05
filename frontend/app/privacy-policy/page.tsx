"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, Share2, Cookie, Server, UserCheck, Baby, RefreshCw, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- Header / Hero Section --- */}
      <div className="bg-[#0B0F19] text-white pt-24 pb-32 px-6 lg:px-12 relative overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ba1408]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto relative z-10 max-w-5xl">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group text-sm font-medium">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ba1408]/10 border border-[#ba1408]/20 text-[#ba1408] text-xs font-bold uppercase tracking-wider mb-6">
                    <ShieldCheck size={14} />
                    Legal & Privacy
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba1408] to-red-500">Policy</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                    We value your trust and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Last updated: February 3, 2026
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- Content Body --- */}
      <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-20 pb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
                
                <PolicySection 
                    icon={<Eye className="text-[#ba1408]" size={24} />}
                    title="Information We Collect"
                >
                    <p>We collect personal data you provide directly, such as your name, email address, phone number, and company details, when you submit inquiries, use contact forms, or sign up for newsletters. We also collect usage data, such as IP address, browser type, pages visited, and time spent, via cookies and analytics tools to improve site performance. No sensitive financial information is collected.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Server className="text-[#ba1408]" size={24} />}
                    title="How We Use Your Information"
                >
                    <p>Your data helps us respond to inquiries, provide services such as digital marketing consultations or project quotes, send updates, and personalize your experience. We analyze this data to improve website functionality, optimize SEO strategies, and understand user preferences for better AR/VR/XR or web development services. We never sell your data to third parties.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Share2 className="text-[#ba1408]" size={24} />}
                    title="Sharing Your Information"
                >
                    <p>We share data only with trusted service providers (such as hosting and email tools) under strict confidentiality for operational needs. In cases of business transfers or legal provisions, data may be disclosed. All partners comply with this policy and applicable laws.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Cookie className="text-[#ba1408]" size={24} />}
                    title="Cookies and Tracking"
                >
                    <p>Our site uses essential cookies for functionality and optional analytics cookies (e.g., Google Analytics) for insights. You can manage preferences through your browser settings. Third-party links (e.g., social media) adhere to their own privacy policies.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Lock className="text-[#ba1408]" size={24} />}
                    title="Data Security"
                >
                    <p>We use industry-standard measures like encryption, firewalls, and access controls to secure your data. However, no online transmission is fully secure, so we cannot guarantee absolute protection.</p>
                </PolicySection>

                <PolicySection 
                    icon={<UserCheck className="text-[#ba1408]" size={24} />}
                    title="Your Rights and Choices"
                >
                    <p>You can access, update, or delete your data by contacting us. To opt out of marketing emails, please use the unsubscribe links provided.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Baby className="text-[#ba1408]" size={24} />}
                    title="Children's Privacy"
                >
                    <p>Our services are only aimed at businesses and we do not knowingly collect data from children under 18. Parents can contact us to request the removal of any such information.</p>
                </PolicySection>

                <PolicySection 
                    icon={<RefreshCw className="text-[#ba1408]" size={24} />}
                    title="Changes to This Policy"
                >
                    <p>We may update this policy on a regular interval. Changes will be posted online with the date. Continued use after updates means acceptance of the changes.</p>
                </PolicySection>

            </div>

            {/* Sidebar / Contact Card */}
            <div className="lg:col-span-4">
                <div className="sticky top-8">
                    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="w-12 h-12 bg-[#ba1408]/10 rounded-xl flex items-center justify-center mb-6">
                            <Mail className="text-[#ba1408]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Have Questions?</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            If you have any questions or concerns about our privacy practices, please feel free to reach out.
                        </p>
                        
                        <div className="space-y-4">
                            <a href="mailto:info@mediafactory.in" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#ba1408] group-hover:text-white transition-colors">
                                    <Mail size={14} />
                                </div>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">info@mediafactory.in</span>
                            </a>
                            
                            <Link href="/#contact" className="block w-full py-3 px-4 bg-[#ba1408] hover:bg-red-700 text-white text-center text-sm font-bold rounded-xl transition-colors shadow-lg shadow-red-900/20">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const PolicySection = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
    >
        <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1 p-2 bg-slate-50 rounded-lg">
                {icon}
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
                <div className="text-slate-600 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    </motion.div>
);

export default PrivacyPolicy;