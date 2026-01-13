import React from 'react';
import './hero.css';
import { motion as Motion } from "framer-motion";

const Hero = () => {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="hero-section" id="hero">
      <Motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <Motion.h1 className="hero-title" variants={itemVariants}>
          <span className="highlight2">Healthy</span> Weight Solutions You
          <br />
          Can <span className="highlight2">Trust</span>
        </Motion.h1>

        {/* Subtext */}
        <Motion.p className="hero-subtitle" variants={itemVariants}>
          Support your weight gain or weight loss journey with carefully
          <br className="desktop-break" />
          selected products made for real, sustainable results.
        </Motion.p>

        {/* Buttons */}
        <Motion.div className="hero-buttons" variants={itemVariants}>
          <Motion.button 
            className="btn2 btn-secondary2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#products">View Products</a>
          </Motion.button>
          
          <Motion.button 
            className="btn2 btn-primary2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact">Contact Us</a>
          </Motion.button>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;