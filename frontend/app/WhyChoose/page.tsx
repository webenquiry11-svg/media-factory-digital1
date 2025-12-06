'use client'; // <--- ADD THIS LINE HERE
import React from 'react';

// --- SVGs for the Brand Logos (Unchanged) ---
const FigmaLogo = () => (
  <svg width="40" height="40" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0C29.493 0 38 8.506 38 19C38 29.494 29.493 38 19 38L19 28.5C19 23.253 23.253 19 28.5 19C33.747 19 38 14.747 38 9.5C38 4.253 33.747 0 28.5 0L19 0Z" fill="#1ABCFE"/>
    <path d="M0 28.5C0 33.747 4.253 38 9.5 38L19 38L19 19L9.5 19C4.253 19 0 23.253 0 28.5Z" fill="#0ACF83"/>
    <path d="M19 0L9.5 0C4.253 0 0 4.253 0 9.5C0 14.747 4.253 19 9.5 19L19 19L19 0Z" fill="#F24E1E"/>
    <path d="M0 47.5C0 52.747 4.253 57 9.5 57C14.747 57 19 52.747 19 47.5L19 38L9.5 38C4.253 38 0 42.253 0 47.5Z" fill="#1ABCFE"/>
    <path d="M19 38L19 47.5C19 52.747 23.253 57 28.5 57C33.747 57 38 52.747 38 47.5C38 42.253 33.747 38 28.5 38L19 38Z" fill="#A259FF"/>
  </svg>
);

const NotionLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <path d="M4 4h16v16H4z" stroke="none" fill="none"/>
    <path d="M5 5h2l.5 .5v13l-.5 .5h-2"/>
    <path d="M8 6h1l6 9v-8h-1"/>
    <path d="M15 15h1v-9h-1"/>
  </svg>
);

const OpenAILogo = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
    <path d="M12 2L14.5 7.5L20 8.5L16 12.5L17 18L12 15.5L7 18L8 12.5L4 8.5L9.5 7.5L12 2Z" fill="none" stroke="currentColor"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor"/>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
  </svg>
);

const ColorfulCubeLogo = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF4F5E"/>
    <path d="M2 17L12 22L22 17" stroke="none"/>
    <path d="M2 7V17L12 22V12L2 7Z" fill="#20A0FF"/>
    <path d="M22 7V17L12 22V12L22 7Z" fill="#FDB32A"/>
  </svg>
);

const WhyChooseSection = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 lg:p-16 font-sans">
      
      {/* Container - Grid Layout with items-stretch to force equal height */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        
        {/* LEFT COLUMN: Image Composition */}
        {/* 'lg:h-auto' lets it grow with the neighbor. 'h-[500px]' acts as fallback for mobile stacking. */}
        <div className="relative w-full lg:w-[90%] h-[500px] lg:h-auto">
            
            {/* Image is Absolute to fill the stretched container entirely */}
            <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working together" 
                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] grayscale-[10%]"
            />

            {/* Floating Card: Figma (Top Left) */}
            <div className="absolute top-8 -left-4 lg:-left-8 bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 z-20">
                <FigmaLogo />
            </div>

            {/* Floating Card: Notion (Top Right) */}
            <div className="absolute top-12 right-4 lg:-right-4 bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 z-20">
                <NotionLogo />
            </div>

            {/* Floating Card: OpenAI (Middle Left) */}
            <div className="absolute top-[45%] left-8 lg:left-12 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl shadow-gray-300/50 z-20">
                <OpenAILogo />
            </div>

            {/* Floating Card: Colorful Cube (Bottom Center) */}
            <div className="absolute bottom-12 left-1/2 lg:left-[45%] -translate-x-1/2 bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 z-20">
                <ColorfulCubeLogo />
            </div>
            
        </div>

        {/* RIGHT COLUMN: Content */}
        {/* flex flex-col justify-center to center content vertically if image happens to be taller, though usually text drives height */}
        <div className="flex flex-col justify-center space-y-10 pl-0 lg:pl-4 py-4">
          
          <div className="space-y-6">
            <div className="inline-block bg-blue-600 px-6 py-2 rounded-full">
                <span className="text-white font-bold text-sm tracking-wide">Why Choose Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-[1.25]">
                <span className="font-bold">SassTech</span> makes you a better <br />
                elevating your team's wellness <br />
                optimizing <span className="font-extrabold text-black">Business Growth.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Expertise & Specialization</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    In today's competitive business demand cost-effective IT solutions has never
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-blue-500 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Expertise & Specialization</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    In today's competitive business demand cost-effective IT solutions has never
                </p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <span className="text-7xl font-bold text-blue-600 tracking-tight">
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