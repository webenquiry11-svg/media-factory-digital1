import NavbarWithHeroSection from './NavbarWithHeroSection/page';
import RevenueSection from './service/page';
import WhyChooseSection from './WhyChoose/page';
import WorkShowcaseSection from './workShowcase/page';
import StatsSection from './statsSection/page';
import WorkingRoadmap from './workshop/page';
import AboutSection from './AboutUs/page';
import Footer from './Footer/page';

export default function Home() {
  return (
    <main className="relative">
      {/* Wrapper for Navbar/Hero to ensure it stays on top of other content's z-indexes */}
      <div className="relative z-50">
        <NavbarWithHeroSection />
      </div>
      
      {/* Wrapper for content sections to establish a lower stacking context */}
      <div className="relative z-0">
        <div id="about">
          <AboutSection />
        </div>
        <div id="process">
          <WorkingRoadmap />
        </div>
        <div id="services">
          <RevenueSection />
        </div>
        <div id="stats">
          <StatsSection />
        </div>
        <div id="why-choose-us">
          <WhyChooseSection />
        </div>
        <div id="portfolio">
          <WorkShowcaseSection />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </main>
  );
}
