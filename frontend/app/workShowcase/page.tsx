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
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  const showcaseData = [
    {
      id: 1,
      category: 'Excellent Performance',
      title: 'Creative UI/UX Designing',
      // Abstract 3D shape image
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', 
      bgColor: 'bg-[#5B8DEF]', // Light Periwinkle Blue
      overlayColor: 'mix-blend-overlay opacity-60'
    },
    {
      id: 2,
      category: 'Excellent Performance',
      title: 'Mobile Application Development',
      // Hand holding phone dark mode
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop', 
      bgColor: 'bg-[#00875A]', // Deep Green
      overlayColor: 'mix-blend-normal opacity-90'
    },
    {
      id: 3,
      category: 'Excellent Performance',
      title: 'Cloud Computing System',
      // Laptop mockup
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', 
      bgColor: 'bg-[#1E1B4B]', // Dark Navy/Purple
      overlayColor: 'mix-blend-normal opacity-80'
    },
    {
      id: 4,
      category: 'Excellent Performance',
      title: 'Mobile Application Design',
      // Dashboard UI
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', 
      bgColor: 'bg-[#8B5CF6]', // Bright Purple
      overlayColor: 'mix-blend-normal opacity-90'
    },
    {
      id: 5,
      category: 'Excellent Performance',
      title: 'Creative UI/UX Designing',
      // Duplicate abstract for loop effect
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop', 
      bgColor: 'bg-[#5B8DEF]',
      overlayColor: 'mix-blend-overlay opacity-60'
    }
  ];

  return (
    <div className="bg-[#110B38] py-20 min-h-screen font-sans flex flex-col justify-center">
      <div className="w-full px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/5">
            <span className="text-gray-200 text-sm font-medium tracking-wide">Work Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Comprehensive IT Solution <br />
            Growth & Efficiency
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="slider-wrapper">
          <Slider {...settings}>
            {showcaseData.map((item) => (
              <div key={item.id} className="px-3 outline-none">
                <div className="group cursor-pointer">
                  
                  {/* Card Container - Square Aspect Ratio */}
                  <div className={`relative rounded-[2rem] overflow-hidden aspect-square w-full ${item.bgColor} transition-all duration-300 hover:-translate-y-2`}>
                    
                    {/* Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.overlayColor}`}
                    />

                    {/* Floating Arrow Button (Top Right) */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 z-10">
                      <ArrowUpRight className="text-black w-5 h-5" strokeWidth={2.5} />
                    </div>

                    {/* Decorative Elements (Optional circles visible in design) */}
                    <div className="absolute top-10 right-24 w-3 h-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Text Content Below */}
                  <div className="mt-6 text-left pl-1">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">
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
          margin: 0 -12px;
          overflow: visible; /* Allows shadows/hover effects to not be clipped */
        }
        .slider-wrapper {
          overflow: hidden; /* Hides the overflow from visible list above */
        }
      `}</style>
    </div>
  );
};

export default WorkShowcaseSection;