// components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  // Store text with apostrophes in variables to avoid React unescaped entity errors
  const description =
    "I'm a frontend engineer specializing in building exceptional digital experiences. Currently at Mindlogic, I focus on designing and implementing UI/UX for AI-powered applications, with previous experience at MongoDB and Deloitte Digital.";

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-mono mb-5" style={{ color: "var(--color-primary)" }}>
          Hi, my name is
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold text-text-primary mb-4"
      >
        Sean Park.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-4xl md:text-6xl font-bold text-text-secondary mb-8"
      >
        I design and build digital experiences.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-lg text-lg text-text-secondary mb-12"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="#projects"
          className="border px-7 py-4 rounded font-mono hover:bg-primary-10 transition-colors duration-300"
          style={{
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
          }}
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
