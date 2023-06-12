import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { FaAngleDown } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import './HeroSection.css';

const HeroSection = () => {
    const scrollToWork = () => {
      scroll.scrollTo('work');
    };
  
    return (
      <section className="hero-section">
        <Helmet>
          <style>{`
            .hero-section {
              /* Add your hero section styles */
            }
  
            .scroll-arrow {
              /* Add your scroll arrow styles */
            }
          `}</style>
        </Helmet>
        <div className="scroll-arrow" onClick={scrollToWork}>
          <span className="scroll-text">Scroll Down for Work</span>
          <FaAngleDown className="arrow-icon" />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  