// components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-green font-mono mb-5">Hi, my name is</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4"
      >
        Your Name.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-4xl md:text-6xl font-bold text-slate mb-8"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-lg text-lg text-slate mb-12"
      >
        I'm a frontend developer specializing in building exceptional digital
        experiences. Currently, I'm focused on building accessible,
        human-centered products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="#projects"
          className="border border-green text-green px-7 py-4 rounded font-mono hover:bg-green/10 transition-colors duration-300"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
