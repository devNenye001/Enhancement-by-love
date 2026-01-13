import React from 'react';
import './aboutSection.css';
import { motion as Motion } from "framer-motion";

const AboutSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="about-section" id="about">
      <Motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* --- Top Split Section --- */}
        <div className="about-top-content">
          {/* Left: Text Content */}
          <Motion.div className="about-text-col" variants={itemVariants}>
            <span className="brand-label">About The Brand</span>
            <h2 className="about-heading">
              Enhancing Confidence Through Healthy Choices
            </h2>
            <p className="about-description">
              At Enhancement by Love, we believe body goals should be achieved with
              care, patience, and the right support. Our products are thoughtfully
              selected to help you gain or lose weight in a healthy, sustainable way—
              without harmful shortcuts.
            </p>
          </Motion.div>

          {/* Right: Image Content */}
          <Motion.div className="about-image-col" variants={itemVariants}>
            <div className="image-wrapper">
              <img 
                src="/about.png" 
                alt="Founder holding products" 
                className="about-founder-img" 
              />
            </div>
          </Motion.div>
        </div>

        {/* --- Bottom Feature Banner --- */}
        <Motion.div className="feature-banner" variants={itemVariants}>
         
          <div className="banner-overlay">
            <h3 className="banner-text">
              Natural Ingredients · Safe & Effective · Customer-Focused Care
            </h3>
          </div>
        </Motion.div>

      </Motion.div>
    </section>
  );
};

export default AboutSection;