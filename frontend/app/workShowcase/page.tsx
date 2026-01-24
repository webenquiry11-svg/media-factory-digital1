'use client'; // <--- ADD THIS LINE HERE

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowUpRight } from 'lucide-react';

const WorkShowcaseSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500, // Large screens
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1280, // Laptops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '24px',
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const showcaseData = [
    {
      id: 1,
      category: 'Excellent Performance',
      title: 'Creative Designing',
      image: '/creative.png', 
      bgColor: 'bg-gray-100',
      overlayColor: ''
    },
    {
      id: 2,
      category: 'Excellent Performance',
      title: 'Targeted Marketing',
      image: '/marketing.png', 
      bgColor: 'bg-[#00875A]',
      overlayColor: 'mix-blend-normal opacity-90'
    },
    {
      id: 3,
      category: 'Excellent Performance',
      title: 'SEO Mastery',
      image: '/seo.png', 
      bgColor: 'bg-[#ba1408]',
      overlayColor: 'mix-blend-normal opacity-80'
    },
    {
      id: 4,
      category: 'Excellent Performance',
      title: 'Custom Web Builds',
      image: '/web dev.png', 
      bgColor: 'bg-[#8B5CF6]',
      overlayColor: 'mix-blend-normal opacity-90'
    },
    {
      id: 5,
      category: 'Excellent Performance',
      title: 'AR/VR/XR Experiences',
      image: '/arvr.png', 
      bgColor: 'bg-gray-100',
      overlayColor: ''
    }
  ];

  return (
    <div id="portfolio" className="bg-gray-50 py-12 lg:py-20 min-h-0 lg:min-h-screen font-sans flex flex-col justify-center">
      <div className="w-full px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-16 space-y-4">
          <div className="inline-block px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="text-[#ba1408] text-sm font-bold tracking-wide">Portfolio Highlights</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Digital Excellence<br />
            Delivered Impact & Innovation
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="slider-wrapper py-12 -my-12">
          <Slider {...settings}>
            {showcaseData.map((item) => (
              <div key={item.id} className="px-3 outline-none">
                <div className="group cursor-pointer">
                  
                  {/* Card Container - Square Aspect Ratio */}
                  <div className={`relative rounded-[2rem] overflow-hidden aspect-square w-full ${item.bgColor} transition-all duration-500 ease-out hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2`}>
                    
                    {/* Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 ${item.overlayColor}`}
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Arrow Button (Top Right) */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:bg-[#ba1408] group-hover:text-white group-hover:rotate-45 group-hover:scale-110 z-10">
                      <ArrowUpRight className="w-5 h-5 transition-colors duration-300" strokeWidth={2.5} />
                    </div>

                    {/* Decorative Elements (Optional circles visible in design) */}
                    <div className="absolute top-10 right-24 w-3 h-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Text Content Below */}
                  <div className="mt-6 text-left pl-1">
                    <p className="text-gray-500 text-sm font-medium mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-gray-900 text-xl lg:text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        /* Remove default slick padding issues */
        .slider-wrapper .slick-list {
          overflow: visible; /* Allows shadows/hover effects to not be clipped */
        }
        @media (min-width: 640px) {
          .slider-wrapper .slick-list {
            margin: 0 -12px;
          }
        }
        .slider-wrapper {
          overflow: hidden; /* Hides the overflow from visible list above */
        }
      `}</style>
    </div>
  );
};

export default WorkShowcaseSection;
