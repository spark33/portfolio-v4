"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const SideLinks: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="py-8"
    >
      <ul className="flex flex-col items-start space-y-6">
        <li>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors duration-300 text-xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors duration-300 text-xl"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors duration-300 text-xl"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors duration-300 text-xl"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href="mailto:your.email@example.com"
            className="text-lightest-slate hover:text-green transition-colors duration-300 text-xl"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </li>
        <li className="pt-4">
          <div className="h-24 w-[1px] bg-lightest-slate"></div>
        </li>
      </ul>
    </motion.div>
  );
};

export default SideLinks;
