"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  url: string;
};

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentActiveSection = "";
      let minDistance = Number.MAX_VALUE;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id");

        // Find the section closest to the top of the viewport
        const absDistance = Math.abs(sectionTop);
        if (absDistance < minDistance && sectionId) {
          minDistance = absDistance;
          currentActiveSection = sectionId;
        }
      });

      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const navLinks: NavLink[] = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Nav */}
      <div className="flex justify-between items-center py-6 lg:hidden">
        <Link
          href="/"
          className="font-bold text-2xl text-text-primary hover:text-primary"
        >
          SP
        </Link>
        <button
          className="text-text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-background z-50 p-8 lg:hidden"
        >
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/"
              className="font-bold text-2xl text-text-primary hover:text-primary"
            >
              SP
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-primary text-2xl"
            >
              <FiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  className="group flex items-center text-lg font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary">{`0${i + 1}. `}</span>
                  <span
                    className={`relative ${
                      activeSection === link.url.substring(1)
                        ? "text-primary"
                        : "text-text-primary"
                    } transition-colors duration-300`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                        activeSection === link.url.substring(1)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <a
                href="/resume.pdf"
                className="border border-primary text-primary rounded px-6 py-3 font-mono hover:bg-primary-10 transition-colors duration-300 inline-block"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}

      {/* Desktop Side Nav */}
      <div className="hidden lg:flex lg:flex-col lg:h-full">
        <div className="mb-12">
          <Link
            href="/"
            className="font-bold text-4xl text-text-primary hover:text-primary"
          >
            SP
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Sean Park
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mb-8">
            Frontend Engineer
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-md pr-4">
            I design and build exceptional digital experiences with a focus on
            UI/UX and frontend architecture.
          </p>

          <nav className="mb-12">
            <ul className="space-y-4">
              {navLinks.map((link, i) => (
                <li key={i} className="overflow-hidden">
                  <Link
                    href={link.url}
                    className="text-base font-mono relative group flex items-center"
                  >
                    <span className="text-primary w-8">{`0${i + 1}.`}</span>
                    <motion.div
                      className="relative"
                      animate={{
                        color:
                          activeSection === link.url.substring(1)
                            ? "rgb(100, 255, 218)"
                            : "rgb(204, 214, 246)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            activeSection === link.url.substring(1)
                              ? "100%"
                              : "0%",
                        }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      ></motion.span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/resume.pdf"
            className="border border-primary text-primary rounded px-6 py-3 font-mono hover:bg-primary-10 transition-colors duration-300 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SideNav;
