import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { motion as Motion, AnimatePresence } from "framer-motion";
import Button from "../button/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/">
          <img src="/logo2.png" alt="Enhancement by love logo" height="70" />
        </Link>
      </Motion.div>

      {/* Hamburger */}
      <Motion.button
        className="hamburger"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </Motion.button>

      {/* Desktop Links */}
      <div className="navlinks">
        {[
          { label: "Home", id: "hero" },
          { label: "Products", id: "products" },
          { label: "About The Brand", id: "about" },
          { label: "How It Works", id: "how-it-works" },
          { label: "Testimonial", id: "testimonial" },
        ].map((item, i) => (
          <Motion.div
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          </Motion.div>
        ))}
      </div>

      {/* Contact Button */}
      <Motion.div
        className="contact-desktop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => window.open("https://wa.me/2349126754369", "_blank")}
      >
        <Button label="Contact Us" />
      </Motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            className="navlinks active"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[
              { label: "Home", id: "hero" },
              { label: "Products", id: "products" },
              { label: "About The Brand", id: "about" },
              { label: "How It Works", id: "how-it-works" },
              { label: "Testimonial", id: "testimonial" },
            ].map((item, i) => (
              <Motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </Motion.div>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
