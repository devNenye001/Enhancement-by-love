import React from 'react';
import './productSection.css';
import { motion as Motion } from "framer-motion";
import ProductCard from '../../productCard/productCard';

const ProductSection = () => {
  // Mock Data for the products
  const weightGainProducts = [
    {
      id: 1,
      imageSrc: "/product1.png",
      title: "Weight gain powder",
      subtitle: "Supports appetite and energy",
      price: "N7500"
    },
    {
      id: 2,
      imageSrc: "/product2.png",
      title: "Balance Weight Gain Tonic",
      subtitle: "Supports gradual, healthy weight gain",
      price: "N15500"
    },
    {
      id: 3,
      imageSrc: "/product3.png",
      title: "Build-Up Nutrition Shake",
      subtitle: "Supports daily calorie intake",
      price: "N30,000"
    }
  ];

  const weightLossProducts = [
    {
      id: 4,
      imageSrc: "/product.jpg", // Using placeholders
      title: "Weight Loss Tea",
      subtitle: "Reduces appetite and boosts metabolism",
      price: "N8500"
    },
    {
      id: 5,
      imageSrc: "/product4.png",
      title: "Fat Burner Capsules",
      subtitle: "Enhances fat metabolism and energy",
      price: "N25500"
    },
    {
      id: 6,
      imageSrc: "/product5.png",
      title: "Detox / Slimming Shake",
      subtitle: "Supports weight loss and detoxification",
      price: "N37,000"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="product-section" id="products">
      <div className="container">
        {/* Main Section Header */}
        <Motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="main-title">
            Product <span className="highlight-pink">Categories</span>
          </h2>
        </Motion.div>

        {/* --- Category 1: Weight Gain --- */}
        <div className="category-group">
          <div className="category-header">
            <h3 className="category-title">Weight Gain Products</h3>
            <Motion.button 
              className="whatsapp-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://wa.me/2349126754369", "_blank")}
            >
              Order on Whatsapp
            </Motion.button>

          </div>

          <Motion.div 
            className="product-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {weightGainProducts.map((product) => (
              <Motion.div key={product.id} variants={itemVariants}>
                <ProductCard 
                  imageSrc={product.imageSrc}
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                />
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* --- Category 2: Weight Loss --- */}
        <div className="category-group">
          <div className="category-header">
            <h3 className="category-title">Weight Loss Products</h3>
            <Motion.button 
              className="whatsapp-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://wa.me/2349126754369", "_blank")}
            >
              Order on Whatsapp
            </Motion.button>
          </div>

          <Motion.div 
            className="product-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {weightLossProducts.map((product) => (
              <Motion.div key={product.id} variants={itemVariants}>
                <ProductCard 
                  imageSrc={product.imageSrc}
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                />
              </Motion.div>
            ))}
          </Motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;