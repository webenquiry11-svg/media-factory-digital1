"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, Users, Cpu, Briefcase, Shield, AlertTriangle, Ban, Globe, Phone, Mail, Scale, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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
                    <FileText size={14} />
                    Legal & Terms
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba1408] to-red-500">Conditions</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                    Media Factory's Terms & Conditions set the guidelines for using our website and services. By accessing our site or utilizing our digital marketing, SEO optimization, AR/VR/XR technology, website development, or logo designing solutions, you agree to these guidelines.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Last updated: February 4, 2026
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
                    icon={<CheckCircle className="text-[#ba1408]" size={24} />}
                    title="1. Acceptance of Terms"
                >
                    <p>These Terms & Conditions constitute a binding agreement between you and Media Factory. We may update them periodically; continued use after any changes signifies acceptance. Please check this page regularly for updates.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Briefcase className="text-[#ba1408]" size={24} />}
                    title="2. Services Description"
                >
                    <p>Media Factory provides professional services, including:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                        <li>Digital Marketing</li>
                        <li>Search Engine Optimization</li>
                        <li>Immersive AR/VR/XR experiences</li>
                        <li>Website Development</li>
                        <li>Logo Designing</li>
                    </ul>
                    <p className="mt-3">All services are delivered in accordance with project proposals, quotes, or agreed-upon statements of work. Timelines, deliverables, and pricing details are outlined in the signed contract.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Users className="text-[#ba1408]" size={24} />}
                    title="3. User Eligibility and Accounts"
                >
                    <p>You must be at least 18 years old or legally authorized to use our services. Please provide accurate information when making inquiries or registrations. You’re responsible for maintaining the security of your account, if applicable. Notify us immediately if there is any unauthorized use.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Cpu className="text-[#ba1408]" size={24} />}
                    title="4. Intellectual Property Rights"
                >
                    <p>We retain ownership of our pre-existing tools, templates, and proprietary technology, including custom AR/VR frameworks. Upon full payment, you will receive a limited, non-exclusive license to use the deliverables for your business. Additionally, you grant us the right to use any content you provide (such as logos and text) for the purpose of delivering our services. The final designs will be transferred to you once full payment is completed.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Scale className="text-[#ba1408]" size={24} />}
                    title="5. Client Responsibilities"
                >
                    <p>Provide timely feedback, content, assets, and approvals. Ensure that all materials provided don’t infringe on third-party rights. Delays on your part may extend timelines without any additional cost to us.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Shield className="text-[#ba1408]" size={24} />}
                    title="6. Confidentiality"
                >
                    <p>Both parties mutually agree to protect any confidential information shared throughout the duration of the project. This commitment includes ensuring that such information is only disclosed to authorized individuals and used solely for the purposes for which it was intended, thereby maintaining the highest standards of confidentiality and integrity.</p>
                </PolicySection>

                <PolicySection 
                    icon={<AlertTriangle className="text-[#ba1408]" size={24} />}
                    title="7. Warranties and Disclaimers"
                >
                    <p>We provide services professionally but do not guarantee specific results, such as SEO rankings or lead volumes. Our services are provided "as is" without any warranties beyond the Statement of Work. We’re not liable for issues arising from third-party platforms, including changes to Google’s algorithm.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Ban className="text-[#ba1408]" size={24} />}
                    title="8. Termination"
                >
                    <p>Either party may terminate for material breach with 15 days’ written notice to cure the breach. We reserve the right to suspend access for non-payment. Upon termination, you are responsible for payment for any completed work.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Globe className="text-[#ba1408]" size={24} />}
                    title="9. Website Usage Rules"
                >
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        <li>No unauthorized scraping, copying, or reverse-engineering.</li>
                        <li>Respect copyright; contact us for permissions.</li>
                        <li>Do not use the site for illegal activities.</li>
                        <li>We may block access for any violations.</li>
                    </ul>
                </PolicySection>

                <PolicySection 
                    icon={<LinkIcon className="text-[#ba1408]" size={24} />}
                    title="10. Third-Party Links"
                >
                    <p>Links to external sites are provided for convenience; we are not responsible for their content or privacy practices.</p>
                </PolicySection>

                <PolicySection 
                    icon={<Phone className="text-[#ba1408]" size={24} />}
                    title="11. Contact Information"
                >
                    <p>If you have any questions regarding these Terms, please email <a href="mailto:info@mediafactory.in" className="text-[#ba1408] font-medium hover:underline">info@mediafactory.in</a>. By using our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions.</p>
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
                            If you have any questions or concerns about our terms, please feel free to reach out.
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

export default TermsAndConditions;