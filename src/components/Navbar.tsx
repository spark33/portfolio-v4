// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  url: string;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur shadow-lg py-4" : "py-6"
      }`}
    >
      <nav className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl text-text-primary hover:text-primary"
        >
          YN
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.url}
                className="px-3 py-2 text-sm font-mono relative hover:text-primary"
              >
                <span className="text-primary font-mono">{`0${i + 1}. `}</span>
                {link.name}
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="/resume.pdf"
              className="border border-primary text-primary rounded px-4 py-2 text-sm font-mono hover:bg-primary-10 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-background-light flex flex-col md:hidden z-50 p-6"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-primary text-2xl"
              >
                <FiX />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link, i) => (
                <li key={i} className="text-center">
                  <Link
                    href={link.url}
                    className="text-text-primary text-lg font-mono hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-primary">{`0${i + 1}.`}</div>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-8">
                <a
                  href="/resume.pdf"
                  className="border border-primary text-primary rounded px-6 py-3 font-mono hover:bg-primary-10 transition-colors duration-300"
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
      </nav>
    </header>
  );
};

export default Navbar;
