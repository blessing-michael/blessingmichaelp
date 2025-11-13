import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container-about">

        {/* LEFT TEXT - SLIDE IN ON SCROLL */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 0.68, 0.37, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="about-tag">Nice to meet you!</p>
          <h2 className="about-title">Hi there, I'm Blessing</h2>

          <p className="about-description">
            I’m a software developer! I can help you build a product, feature or
            website. Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hesitate to
            contact me.
          </p>
        </motion.div>

        {/* RIGHT BLOB MOVE ANIMATION */}
        <motion.div
          className="about-blob"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}

export default About;
