// components/Projects.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  external?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "FactChat",
      description:
        "A multi-LLM platform designed for education. The platform leverages multiple large language models to provide educational content and enhance learning experiences. Built with a focus on user experience and educational efficacy.",
      tags: ["React", "NextJS", "TypeScript", "AI Integration", "UI/UX Design"],
      image: "/project1.jpg",
      external: "https://docs.mindlogic.ai",
    },
    {
      title: "MongoDB AI Chatbot UI Component Library",
      description:
        "Led the architecture and implementation of MongoDB's first reusable AI chatbot UI component library. This system was built using ReactJS and enabled consistent chatbot experiences across MongoDB's digital products.",
      tags: [
        "React",
        "TypeScript",
        "StorybookJS",
        "Component Architecture",
        "AI Integration",
      ],
      image: "/project2.jpg",
    },
  ];

  const otherProjects: Project[] = [
    {
      title: "Socius",
      description:
        "An app that helps street outreach teams input and track requests, claim requests in the area, and measure the long-run impact of their work. Designed and developed the first working version with interactive Google Map on Ruby on Rails.",
      tags: ["Ruby on Rails", "Google Maps API", "UI/UX Design"],
      external: "https://example.com",
    },
    {
      title: "TokenUnion",
      description:
        "Developed front-end components and interactions for tokenunion.io and WIP core product. TokenUnion automatically rewards users for holding Ether or ERC20 tokens.",
      tags: ["React", "Web3", "Cryptocurrency", "Frontend Development"],
      external: "https://example.com",
    },
    {
      title: "Scheduling App",
      description:
        "MEAN stack scheduling app with reporting CRUD functionalities. Built for CMU Computing Services to simplify shift trading, shift-specific reporting, and employee performance tracking on an intuitive interface.",
      tags: [
        "MongoDB",
        "Express",
        "Angular",
        "Node.js",
        "Materialize",
        "jQuery",
      ],
      external: "https://example.com",
    },
    {
      title: "TrialFinder",
      description:
        "Awarded Best Healthcare Hack at University of Pittsburgh's SteelHacks. TrialFinder matched patients to open clinical trials from the NIH database by cross-checking the eligibility criteria for the study with the patient's personal health profile.",
      tags: ["Healthcare", "API Integration", "Hackathon Project"],
    },
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
        <span className="section-number">03.</span> Some Things I've Built
      </motion.h2>

      {/* Featured Projects */}
      <div className="space-y-32 mt-16">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative grid grid-cols-12 gap-4 items-center">
              {/* Project Image */}
              <div
                className={`col-span-12 md:col-span-7 row-start-1 ${
                  i % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <div className="relative h-64 rounded overflow-hidden">
                  <div className="absolute inset-0 bg-green/20 z-10 hover:bg-transparent transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-navy/30 z-20 hover:bg-transparent transition-all duration-300"></div>
                  <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                    <span className="text-white">
                      Project Image Placeholder
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`col-span-12 md:col-span-7 row-start-1 ${
                  i % 2 === 0 ? "md:col-start-6" : "md:col-start-1"
                } z-10`}
              >
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:items-end md:text-right" : ""
                  }`}
                >
                  <p className="font-mono text-green mb-1">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-lightest-slate mb-4">
                    {project.title}
                  </h3>
                  <div className="p-5 bg-light-navy rounded-md shadow-lg mb-4">
                    <p className="text-slate">{project.description}</p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 mb-4 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag, j) => (
                      <li key={j} className="font-mono text-xs text-slate">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green"
                        aria-label="External Link"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Noteworthy Projects */}
      <motion.div
        className="mt-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-lightest-slate mb-10 text-center">
          Other Noteworthy Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              className="card flex flex-col h-full bg-light-navy rounded-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-green">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="4"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M20 10L28.6603 25H11.3397L20 10Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightest-slate hover:text-green"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightest-slate hover:text-green"
                      aria-label="External Link"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-xl font-semibold text-lightest-slate mb-2">
                {project.title}
              </h4>

              <p className="text-slate mb-8 flex-grow">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, j) => (
                  <li key={j} className="font-mono text-xs text-slate">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
