import React from 'react';
import './stepsSection.css';
import { motion as Motion } from "framer-motion";

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Goal",
      description: "Select weight gain or weight loss based on your needs."
    },
    {
      id: 2,
      title: "Get Guidance",
      description: "We help you understand how to use the products correctly."
    },
    {
      id: 3,
      title: "Stay Consistent",
      description: "Follow the routine and track healthy progress over time."
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  return (
    <section className="steps-section" id="how-it-works">
      <div className="container">
        <Motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </Motion.h2>

        <Motion.div 
          className="steps-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* The dashed line background (Desktop only) */}
          <div className="steps-connecting-line"></div>

          {steps.map((step) => (
            <Motion.div 
              className="step-item" 
              key={step.id} 
              variants={itemVariants}
            >
              <div className="step-circle-wrapper">
                <div className="step-circle">
                  {step.id}
                </div>
              </div>
              
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default StepsSection;