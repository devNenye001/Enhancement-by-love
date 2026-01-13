import React from 'react';
import './featuresSection.css';
import { motion as Motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      image: "/feature1.png", // Replace with your image
      text: "Natural Ingredients"
    },
    {
      id: 2,
      image: "/feature2.png",     // Replace with your image
      text: "Safe & Effective"
    },
    {
      id: 3,
      image: "/feature3.png",    // Replace with your image
      text: "Customer-Focused Care"
    }
  ];

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

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="features-section" id="features">
      <div className="container">
        
        {/* Section Heading */}
        <Motion.h2 
          className="features-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Designed With Love & Responsibility
        </Motion.h2>

        {/* Features Grid */}
        <Motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <Motion.div 
              className="feature-card" 
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image Container with Zoom Effect */}
              <div className="feature-image-wrapper">
                <Motion.img 
                  src={feature.image} 
                  alt={feature.text} 
                  className="feature-img"
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Text Label */}
              <div className="feature-label">
                {/* Pink Checkmark Icon */}
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FF6A84" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="label-text">{feature.text}</span>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;