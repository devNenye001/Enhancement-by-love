import React, { useState } from 'react';
import './testimonialSection.css';
import { motion as Motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {

  const testimonials = [
    {
      id: 1,
      name: "Ada Chima",
      location: "Enugu",
      avatar: "/pfp.svg", 
      resultImage: "/testimonial.png",
      quote: "I felt more confident using these products because I received proper guidance and support. The results have been steady and sustainable.",
    },
    {
      id: 2,
      name: "Zainab Bello",
      location: "Lagos",
      avatar: "/pfp2.jpg",
      resultImage: "/testimonial2.jpg",
      quote: "Finally found a brand that prioritizes health over quick fixes. My energy levels are up and I'm loving my new look!",
    },
    {
      id: 3,
      name: "Chioma Okeke",
      location: "Abuja",
      avatar: "/pfp3.jpg",
      resultImage: "/testimonial3.jpg",
      quote: "The weight gain syrup worked wonders for me. I gained 5kg in just one month without feeling bloated.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentItem = testimonials[currentIndex];

  // Animation Variants
  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.4 }
  };

  return (
    <section className="testimonial-section" id="testimonial">
      <div className="container">
        
        {/* --- Header Section --- */}
        <div className="testimonial-header">
          <Motion.div 
            className="header-text-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Testimonials</span>
            <h2 className="section-heading">
              Proven results, <br />
              real experiences
            </h2>
          </Motion.div>

          {/* Navigation Buttons */}
          <Motion.div 
            className="nav-buttons2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="nav-btn2 prev-btn" onClick={prevTestimonial}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="nav-btn2 next-btn" onClick={nextTestimonial}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </Motion.div>
        </div>

        {/* --- Content Area (Grid) --- */}
        <div className="testimonial-content">
          
          {/* Left Column: Result Image */}
          <div className="image-column">
            <AnimatePresence mode="wait">
              <Motion.img 
                key={currentItem.id} // Key triggers re-animation on change
                src={currentItem.resultImage} 
                alt="Before and after transformation" 
                className="result-img"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          {/* Right Column: Quote Card */}
          <div className="card-column">
            <AnimatePresence mode="wait">
              <Motion.div 
                className="testimonial-card"
                key={currentItem.id}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* User Info Header */}
                <div className="user-info">
                  <img src={currentItem.avatar} alt={currentItem.name} className="user-avatar" />
                  <div className="user-details">
                    <h4 className="user-name">{currentItem.name}</h4>
                    <span className="user-location">{currentItem.location}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="user-quote">
                  “{currentItem.quote}”
                </p>
              </Motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;