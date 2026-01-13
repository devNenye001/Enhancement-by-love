import React from "react";
import "./productCard.css";
import { motion as Motion } from "framer-motion";

const ProductCard = ({ 
  imageSrc = "/product1.png", // Replace with your actual image path
  title = "Weight gain powder", 
  subtitle = "Supports appetite and energy", 
  price = "N7500" 
}) => {
  
  // Animation variants for the fade-in effect
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <Motion.div 
      className="product-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animates only once when scrolled into view
      whileHover={{ y: -5 }}    // Subtle lift on hover
    >
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-price">{price}</p>
      </div>
    </Motion.div>
  );
};

export default ProductCard;