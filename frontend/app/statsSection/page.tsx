"use client";

import React from 'react';
import { CheckCircle, FileText, TrendingUp } from 'lucide-react';

const Page = () => {
  return (
    <div id="stats" className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-12 font-sans">
      
      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">

        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-8 z-10">
          
          {/* Badge */}
          <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
            <span className="text-red-700 font-semibold text-sm">Tech Solution</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15]">
            Ultimate Hub To Fuel <br />
            Your Digital Success
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            In today's fast-paced market, businesses demand agile, high-impact digital tools that drive growth like never before.
          </p>

          {/* Interactive List / Tabs */}
          <div className="space-y-4 pt-4">
            {/* Item 1 */}
            <div className="text-gray-600 font-medium text-lg px-6 py-3 cursor-pointer hover:text-gray-900 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1">Custom Strategies</h4>
              <p className="text-sm text-gray-500">Bespoke plans crafted to align perfectly with your brand's vision and growth targets.</p>
            </div>

            {/* Item 2 (Active State) */}
            <div className="bg-white rounded-xl shadow-xl shadow-gray-200/50 p-6 border-l-4 border-red-700 transform scale-105 transition-transform">
              <h3 className="text-[#ba1408] font-bold text-lg mb-2">Advanced Technology</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Leading-edge AR/VR/XR, SEO, and web tools delivering unmatched performance and results.
              </p>
            </div>

            {/* Item 3 */}
            <div className="text-gray-600 font-medium text-lg px-6 py-3 cursor-pointer hover:text-gray-900 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1">Insights & Research</h4>
              <p className="text-sm text-gray-500">Deep market analysis uncovering opportunities to outpace your competition.</p>
            </div>

            {/* Item 4 */}
            <div className="text-gray-600 font-medium text-lg px-6 py-3 cursor-pointer hover:text-gray-900 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1">Usability Testing</h4>
              <p className="text-sm text-gray-500">Rigorous checks ensuring seamless experiences that convert visitors into loyal customers.</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Images and Floating Cards */}
        <div className="relative">
          
          {/* Decorative Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ba1408]/10 rounded-full blur-3xl -z-10"></div>

          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-0">
            <img 
              src="/tech solution.png" 
              alt="Team working" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Card 1: Balance (Top Right) */}
          <div className="absolute -top-6 -right-0 sm:-right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="bg-gray-50 p-2 rounded-full">
              <CheckCircle className="w-6 h-6 text-[#ba1408]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Success Rate</p>
              <p className="text-xl font-bold text-gray-900">95%</p>
            </div>
          </div>

          {/* Floating Card 2: Usability Testing (Bottom Left) */}
          <div className="absolute bottom-8 -left-2 sm:-left-8 bg-white p-5 rounded-2xl shadow-xl w-48 z-20">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-[#ba1408]/10 p-1.5 rounded-lg">
                <FileText className="w-5 h-5 text-red-700" />
              </div>
              <div className="bg-green-50 px-2 py-0.5 rounded text-[10px] font-bold text-green-600">Verified</div>
            </div>
            <h4 className="font-bold text-gray-900 text-2xl">150+</h4>
            <p className="text-xs text-gray-500 mb-4">Case Studies</p>
            
            {/* Custom Bar Chart CSS */}
            <div className="flex items-end justify-between h-12 gap-1">
              <div className="w-2 bg-red-700 h-[40%] rounded-t-sm"></div>
              <div className="w-2 bg-[#ba1408] h-[70%] rounded-t-sm"></div>
              <div className="w-2 bg-red-700 h-[50%] rounded-t-sm"></div>
              <div className="w-2 bg-[#ba1408] h-[30%] rounded-t-sm"></div>
              <div className="w-2 bg-red-700 h-[100%] rounded-t-sm"></div>
              <div className="w-2 bg-[#ba1408] h-[60%] rounded-t-sm"></div>
            </div>
          </div>

          {/* Floating Card 3: Pie Chart (Bottom Right) */}
          <div className="absolute -bottom-6 right-2 sm:right-8 bg-white p-4 rounded-2xl shadow-xl z-20 w-40">
            <p className="text-xs font-semibold text-gray-800 mb-2">Monthly Growth</p>
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-2 rounded-full">
                <TrendingUp className="w-6 h-6 text-[#ba1408]" />
              </div>
              <div>
                 <p className="text-xl font-bold text-gray-900">63%</p>
                 <p className="text-[10px] text-green-600 font-bold">↑ Trending</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page;
