// components/About.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  // Store text with apostrophes in variables to avoid React unescaped entity errors
  const paragraph1 =
    "Hello! I'm Sean Park, a frontend engineer specializing in building exceptional digital experiences. I'm currently working at Mindlogic in Seoul, South Korea as Industrial Technical Personnel (substituting mandatory military duty for South Korea).";
  const paragraph2 =
    "I believe great digital experiences happen at the sweet spot where code meets design meets human needs. As a frontend engineer who's equally at home architecting component systems and crafting micro-interactions, I bring a holistic view that makes complex technologies feel surprisingly simple.";
  const paragraph3 =
    "My journey has taken me from building AI chatbots at Mindlogic and MongoDB to mentoring development teams at Deloitte Digital. Along the way, I've discovered that my favorite problems to solve are the ones that require thinking beyond traditional engineering boundaries.";
  const paragraph4 =
    "When I'm not obsessing over performance optimizations or animation timings, you might find me exploring how emerging technologies can create more intuitive, delightful experiences. I'm looking for a founding role where this blend of technical precision and human empathy can help build something meaningful from the ground up.";
  const paragraph5 =
    "Here are a few technologies I've been working with recently:";

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
        className="flex items-center text-2xl font-semibold text-text-primary mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="font-mono mr-2 text-xl"
          style={{ color: "var(--color-primary)" }}
        >
          01.
        </span>{" "}
        About Me
        <span className="ml-4 h-px bg-background-lighter flex-grow"></span>
      </motion.h2>

      <div className="grid grid-cols-12 gap-8 mt-10">
        <motion.div
          className="col-span-12 md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4 text-text-secondary">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
            <p>{paragraph4}</p>
            <p>{paragraph5}</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className="mr-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    ▹
                  </span>
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
            <div className="absolute inset-0 rounded border-2 border-primary group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-primary-20 rounded group-hover:bg-transparent transition-all duration-300 z-10"></div>
            <div className="h-full w-full bg-background-light rounded relative z-0 flex items-center justify-center">
              <div
                className="font-mono text-5xl"
                style={{ color: "var(--color-primary)" }}
              >
                SP
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
