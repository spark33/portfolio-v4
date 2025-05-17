// components/About.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills: string[] = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "NextJS",
    "Ruby on Rails",
    "UI/UX Design",
    "StorybookJS",
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
              Hello! I'm Sean Park, a frontend engineer specializing in building
              exceptional digital experiences. I'm currently working at
              Mindlogic in Seoul, South Korea as Industrial Technical Personnel
              (substituting mandatory military duty for South Korea).
            </p>
            <p>
              My journey in web development began during my time at Carnegie
              Mellon University, where I developed a passion for creating
              intuitive user interfaces and accessible web applications.
              Fast-forward to today, and I've had the privilege of working at
              companies like MongoDB and Deloitte Digital, where I've led the
              architecture and implementation of various frontend systems and
              components.
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
