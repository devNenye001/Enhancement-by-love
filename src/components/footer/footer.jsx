import "./footer.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <Motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-top">
        {/* Logo */}
        <Motion.div
          className="footerdivmain"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <img
            src="/logo.png"
            alt="Enhancement by love logo"
            height="90"
          />
        </Motion.div>

        {/* Footer Groups */}
        <Motion.div
          className="footergroup"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Quick Links */}
          <Motion.div
            className="footerdiv"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Quick Links</h3>
            <a href="#hero">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About The Brand</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
          </Motion.div>

          {/* Offices */}
          <Motion.div
            className="footerdiv"
            id="footerdiv"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Our Products</h3>
            <p>Weight Gain Products</p>
            <p>Weight Loss Products</p>
          </Motion.div>

          {/* Contact */}
          <Motion.div
            className="footerdiv"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Contact</h3>
            <p>
              <span><FaPhoneAlt /></span> Call Us: 09126754369 | 08104428373
            </p>
            <p>
              <span><MdEmail /></span> Email: Onyinyechinwankwo124@gmail.com
            </p>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Bottom */}
      <Motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>© 2025 Enhancement by love. All rights reserved.</p>
      </Motion.div>
    </Motion.footer>
  );
};

export default Footer;
