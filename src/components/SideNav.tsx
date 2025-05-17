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

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id");

        if (sectionTop < 200 && sectionTop >= -200 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className="font-bold text-2xl text-lightest-slate hover:text-green"
        >
          SP
        </Link>
        <button
          className="text-lightest-slate text-2xl"
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
          className="fixed inset-0 bg-navy z-50 p-8 lg:hidden"
        >
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/"
              className="font-bold text-2xl text-lightest-slate hover:text-green"
            >
              SP
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lightest-slate text-2xl"
            >
              <FiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  className={`text-lg font-mono ${
                    activeSection === link.url.substring(1)
                      ? "text-green"
                      : "text-lightest-slate"
                  } hover:text-green`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-green">{`0${i + 1}. `}</span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <a
                href="/resume.pdf"
                className="border border-green text-green rounded px-6 py-3 font-mono hover:bg-green/10 transition-colors duration-300 inline-block"
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
            className="font-bold text-4xl text-lightest-slate hover:text-green"
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
          <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
            Shiyu Park
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate mb-8">
            Software Engineer
          </h2>
          <p className="text-lg text-slate mb-12 max-w-md pr-4">
            I build accessible, human-centered products and digital experiences
            for the web.
          </p>

          <nav className="mb-12">
            <ul className="space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    className={`text-base font-mono relative group flex items-center ${
                      activeSection === link.url.substring(1)
                        ? "text-green"
                        : "text-lightest-slate"
                    } hover:text-green`}
                  >
                    <span className="text-green w-8">{`0${i + 1}.`}</span>
                    {link.name}
                    <span
                      className={`h-[1px] w-0 group-hover:w-16 transition-all duration-300 bg-green ml-2 ${
                        activeSection === link.url.substring(1) ? "w-16" : ""
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/resume.pdf"
            className="border border-green text-green rounded px-6 py-3 font-mono hover:bg-green/10 transition-colors duration-300 inline-block"
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
