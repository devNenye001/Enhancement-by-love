
import { motion as Motion } from "framer-motion";
import './notFound.css';


const NotFound = () => {
  // Variants for the parent container to control staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each element appearing
        delayChildren: 0.2,
      },
    },
  };

  // Variants for individual items (fade up)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
    <Motion.div 
      className="not-found-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Motion.h2 className="not-found-heading" variants={itemVariants}>
        Page not found!
      </Motion.h2>

      <Motion.p className="not-found-text" variants={itemVariants}>
        This page cant be transcribed. It looks like this page has <br />
        left the meeting - or maybe it never joined.
      </Motion.p>
      
      <Motion.h1 className="not-found-code" variants={itemVariants}>
        404
      </Motion.h1>
      
      <Motion.button 
        className="home2-button" 
        variants={itemVariants}
        whileHover={{ scale: 1.05 }} // Slight pop effect on hover
        whileTap={{ scale: 0.95 }}   // Click press effect
        onClick={() => window.location.href = '/'}
      >
        Go Home
      </Motion.button>
    </Motion.div>
  
    </>
  );
};

export default NotFound;