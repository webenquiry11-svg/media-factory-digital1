"use client";

import React from 'react';
import { BarChart3, ChevronDown, MoreHorizontal } from 'lucide-react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-12 font-sans">
      
      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">

        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-8 z-10">
          
          {/* Badge */}
          <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
            <span className="text-blue-600 font-semibold text-sm">Tech Solution</span>
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
            <div className="bg-white rounded-xl shadow-xl shadow-gray-200/50 p-6 border-l-4 border-blue-600 transform scale-105 transition-transform">
              <h3 className="text-blue-900 font-bold text-lg mb-2">Advanced Technology</h3>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team working" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Card 1: Balance (Top Right) */}
          <div className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="bg-gray-50 p-2 rounded-full">
              <div className="w-6 h-6 rounded-full bg-red-500 overflow-hidden relative">
                 {/* CSS Flag Simulation */}
                 <div className="absolute top-0 left-0 w-3 h-3 bg-blue-700 z-10"></div>
                 <div className="w-full h-1 bg-white mt-1"></div>
                 <div className="w-full h-1 bg-white mt-1"></div>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Your balance</p>
              <p className="text-xl font-bold text-gray-900">$1,000</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
          </div>

          {/* Floating Card 2: Usability Testing (Bottom Left) */}
          <div className="absolute bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl w-48 z-20">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 p-1.5 rounded-lg">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">Usability testing</h4>
            <p className="text-xs text-gray-500 mb-4">12 products</p>
            
            {/* Custom Bar Chart CSS */}
            <div className="flex items-end justify-between h-12 gap-1">
              <div className="w-2 bg-blue-600 h-[40%] rounded-t-sm"></div>
              <div className="w-2 bg-blue-900 h-[70%] rounded-t-sm"></div>
              <div className="w-2 bg-blue-600 h-[50%] rounded-t-sm"></div>
              <div className="w-2 bg-blue-900 h-[30%] rounded-t-sm"></div>
              <div className="w-2 bg-blue-600 h-[100%] rounded-t-sm"></div>
              <div className="w-2 bg-blue-900 h-[60%] rounded-t-sm"></div>
            </div>
          </div>

          {/* Floating Card 3: Pie Chart (Bottom Right) */}
          <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-2xl shadow-xl z-20 w-40">
            <p className="text-xs font-semibold text-gray-800 mb-2">Your Pie Chart</p>
            <div className="flex items-center gap-4">
              {/* CSS Pie Chart */}
              <div className="w-12 h-12 rounded-full border-4 border-blue-50 relative bg-white">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-blue-600 border-r-transparent border-b-transparent transform rotate-45"
                ></div>
              </div>
              <div>
                 <p className="text-xs text-gray-400">Monthly</p>
                 <div className="flex gap-2 text-[10px] mt-1 font-bold">
                    <span>63%</span>
                    <span className="text-gray-400">25%</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page;