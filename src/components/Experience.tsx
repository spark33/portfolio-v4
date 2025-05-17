// components/Experience.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface JobSkill {
  readonly [key: string]: string;
}

interface Job {
  company: string;
  title: string;
  date: string;
  duties: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      company: "Mindlogic Inc",
      title: "Frontend Engineer",
      date: "April 2024 - Present",
      duties: [
        "Designing and building FactChat, a multi-LLM platform designed for education",
        "Designing and building docs.mindlogic.ai",
        "Managing the UI/UX design and frontend engineering for the digital transformation of an embeddable AI chatbot plugin supporting 5 locales",
        "Managing the UI/UX design and frontend engineering for the digital transformation of the UI customization / management dashboard",
        "Building the company website and other external client POCs and deliverables in React / React Native",
      ],
      skills: ["React", "React Native", "NextJS", "UI/UX Design"],
    },
    {
      company: "MongoDB",
      title: "UI Engineer",
      date: "February 2022 - January 2024",
      duties: [
        "Led the architecture and implementation of MongoDB's first reusable AI chatbot UI component library using ReactJS",
        "Led the architecture and development of web features for NextJS documentation site including Okta SSO integration and 2 CMS migrations",
        "Implemented features and improvements across component library including dark mode implementation, major StorybookJS upgrades, and component file structure standardization",
      ],
      skills: [
        "React",
        "NextJS",
        "StorybookJS",
        "SSO Integration",
        "TypeScript",
      ],
    },
    {
      company: "Deloitte Digital",
      title: "Frontend Engineer",
      date: "September 2019 - February 2022",
      duties: [
        "Performed duties of a front-end architect & lead developer, making technical stack decisions, setting development standards & socializing decisions to the client's lead technical architects & developers",
        "Mentored 6 developers in India in React / Typescript / NextJS & delivering features ahead of schedule",
        "Led bi-weekly feature demos for client's broader business teams & weekly code reviews with client's lead developers",
        "Owned code-level front-end architecture decisions around state management & codebase file structure that were later reused in other Deloitte Digital assets",
        "Enhanced static UI/UX designs with micro-interactions during development phase",
      ],
      skills: ["React", "TypeScript", "NextJS", "Architecture", "Mentoring"],
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
        <span className="section-number">02.</span> Where I've Worked
      </motion.h2>

      <div className="mt-10 space-y-16">
        {jobs.map((job, jobIndex) => (
          <motion.div
            key={jobIndex}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: jobIndex * 0.1 }}
          >
            {/* Timeline connector */}
            {jobIndex < jobs.length - 1 && (
              <div className="absolute left-[7px] top-[70px] bottom-[-80px] w-[2px] bg-lightest-navy"></div>
            )}

            {/* Experience card */}
            <div className="flex gap-5">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green mt-[6px] z-10"></div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl text-lightest-slate font-medium flex flex-wrap items-baseline">
                  <span>{job.title}</span>
                  <span className="text-green ml-2"> @ {job.company}</span>
                </h3>
                <p className="font-mono text-sm mt-1 mb-4 text-slate">
                  {job.date}
                </p>
                <ul className="space-y-4 mb-4">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green mr-2 mt-1">▹</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-4 py-1.5 bg-navy border border-lightest-navy rounded-full text-green text-xs font-mono whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
