// components/Experience.tsx
"use client";

import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<number>(0);

  const jobs: Job[] = [
    {
      company: "Company One",
      title: "Senior Frontend Developer",
      date: "January 2022 - Present",
      duties: [
        "Develop and maintain major features of the company's customer-facing web application",
        "Work with a variety of languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Next.js, and Contentful",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        "Lead the development team in implementing accessibility standards across all projects",
      ],
      skills: ["React", "Next.js", "TypeScript", "GraphQL"],
    },
    {
      company: "Company Two",
      title: "Frontend Developer",
      date: "July 2020 - December 2021",
      duties: [
        "Built and shipped the company's first mobile app using React Native",
        "Architected and implemented the frontend of a new product feature that increased user engagement by 20%",
        "Collaborated with UX team to implement design system components",
        "Conducted code reviews and mentored junior developers",
      ],
      skills: ["React", "React Native", "JavaScript", "Redux"],
    },
    {
      company: "Company Three",
      title: "Web Developer",
      date: "March 2019 - June 2020",
      duties: [
        "Developed and styled interactive web applications for various clients",
        "Built and shipped the marketing website for a startup that helped secure additional funding",
        "Interface with clients on a weekly basis, providing technological expertise",
        "Collaborated with designers to implement responsive, mobile-first websites",
      ],
      skills: ["JavaScript", "HTML", "CSS", "WordPress"],
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

      <div className="grid grid-cols-12 gap-4 mt-10">
        {/* Tab List */}
        <motion.div
          className="col-span-12 md:col-span-3 flex md:flex-col overflow-x-auto md:overflow-visible mb-5 md:mb-0 border-b md:border-b-0 md:border-l border-lightest-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`px-5 py-3 font-mono text-sm whitespace-nowrap md:border-l-2 md:border-b-0 border-l-0 border-b-2 transition-colors duration-300 ${
                activeTab === i
                  ? "text-green border-green bg-light-navy/30 md:bg-light-navy/30"
                  : "text-slate border-transparent hover:text-green hover:bg-light-navy/10"
              }`}
              onClick={() => setActiveTab(i)}
            >
              {job.company}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          className="col-span-12 md:col-span-9 p-1"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl text-lightest-slate font-medium">
            {jobs[activeTab].title}
            <span className="text-green"> @ {jobs[activeTab].company}</span>
          </h3>
          <p className="font-mono text-sm mt-1 mb-4 text-slate">
            {jobs[activeTab].date}
          </p>
          <ul className="space-y-4">
            {jobs[activeTab].duties.map((duty, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green mr-2 mt-1">▹</span>
                <span>{duty}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {jobs[activeTab].skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-light-navy rounded text-green text-sm font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;
