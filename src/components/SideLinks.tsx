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
            href="https://github.com/spark6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-primary transition-colors duration-300 text-xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/spark6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-primary transition-colors duration-300 text-xl"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/seanpark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-primary transition-colors duration-300 text-xl"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/sean.park"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-primary transition-colors duration-300 text-xl"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href="mailto:spark@mindlogic.ai"
            className="text-text-primary hover:text-primary transition-colors duration-300 text-xl"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </li>
        <li className="pt-4">
          <div className="h-24 w-[1px] bg-text-primary"></div>
        </li>
      </ul>
    </motion.div>
  );
};

export default SideLinks;
