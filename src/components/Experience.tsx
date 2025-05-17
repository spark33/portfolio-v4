// components/Experience.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Job {
  company: string;
  title: string;
  date: string;
  duties: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  // Store text with apostrophes in variables to avoid React unescaped entity errors
  const sectionTitle = "Where I've Worked";

  const jobs: Job[] = [
    {
      company: "Mindlogic Inc",
      title: "Frontend Engineer",
      date: "April 2024 - Present",
      duties: [
        "Developed a multilingual embeddable AI chatbot plugin supporting 5 locales with a customizable UI that seamlessly integrates with client websites",
        "Built and maintained the Mindlogic documentation site (docs.mindlogic.ai) with comprehensive guides, API documentation, and integration examples for developers",
        "Designed and built FactChat, a multi-LLM platform designed for educational contexts that leverages multiple large language models",
        "Created an intuitive UI customization dashboard for clients to configure and personalize their chatbot's appearance and behavior",
        "Implemented internationalization and localization features to support multiple languages across all products",
        "Collaborated with backend engineers to define and implement API interfaces for all frontend applications",
      ],
      skills: [
        "React",
        "React Native",
        "NextJS",
        "TypeScript",
        "UI/UX Design",
        "Internationalization",
        "API Design",
      ],
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
          02.
        </span>
        {sectionTitle}
        <span className="ml-4 h-px bg-background-lighter flex-grow"></span>
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
              <div className="absolute left-[7px] top-[70px] bottom-[-80px] w-[2px] bg-background-lighter"></div>
            )}

            {/* Experience card */}
            <div className="flex gap-5">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-[6px] z-10"></div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl text-text-primary font-medium flex flex-wrap items-baseline">
                  <span>{job.title}</span>
                  <span
                    className="ml-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {" "}
                    @ {job.company}
                  </span>
                </h3>
                <p className="font-mono text-sm mt-1 mb-4 text-text-secondary">
                  {job.date}
                </p>
                <ul className="space-y-4 mb-4">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className="mr-2 mt-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        ▹
                      </span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-4 py-1.5 bg-background border border-background-lighter rounded-full text-xs font-mono whitespace-nowrap"
                      style={{ color: "var(--color-primary)" }}
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
