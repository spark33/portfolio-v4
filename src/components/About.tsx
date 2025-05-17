// components/About.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills: string[] = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Express",
    "MongoDB",
  ];

  return (
    <>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-number">01.</span> About Me
      </motion.h2>

      <div className="grid grid-cols-12 gap-8 mt-10">
        <motion.div
          className="col-span-12 md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4 text-slate">
            <p>
              Hello! I'm Shiyu Park, a software engineer passionate about
              creating beautiful, functional and accessible websites. My journey
              in web development started back in 2018 when I decided to try
              creating custom themes — turns out hacking together a custom
              reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, and a tech company. My main focus
              these days is building accessible, inclusive products and digital
              experiences for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-5 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-60 h-60 lg:w-56 lg:h-56 group">
            <div className="absolute inset-0 rounded border-2 border-green group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-green/20 rounded group-hover:bg-transparent transition-all duration-300 z-10"></div>
            <div className="h-full w-full bg-light-navy rounded relative z-0 flex items-center justify-center">
              <div className="text-green font-mono text-5xl">SP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
