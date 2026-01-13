import React from "react";
import "./contactSection.css";
import { motion as Motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Motion.div
          className="cta-banner"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="cta-content">
            <Motion.h2
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Start Your Journey Today
            </Motion.h2>

            <Motion.p
              className="cta-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Get personalized recommendations and support directly on WhatsApp.
            </Motion.p>

            <Motion.button
              className="cta-button"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 106, 132, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(255, 106, 132, 0)",
                  "0 0 20px rgba(255, 106, 132, 0.3)",
                  "0 0 0 rgba(255, 106, 132, 0)",
                ],
              }}
              onClick={() =>
                window.open("https://wa.me/2349126754369", "_blank")
              }
            >
              Order on Whatsapp
            </Motion.button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
