// components/Footer.tsx
"use client";

import React from "react";
import SocialIcon from "./SocialIcon";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

interface Social {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const Footer: React.FC = () => {
  // Store text with apostrophes in variables to avoid React unescaped entity errors
  const sectionHeading = "04. What's Next?";
  const contactText =
    "Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!";

  const socials: Social[] = [
    {
      icon: <FiGithub />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FiTwitter />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <FiLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FiInstagram />,
      url: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    { icon: <FiMail />, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2
          className="font-mono mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          {sectionHeading}
        </h2>
        <h3 className="text-4xl font-semibold text-text-primary mb-4">
          Get In Touch
        </h3>
        <p className="text-text-secondary max-w-md mx-auto mb-10">
          {contactText}
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block border px-7 py-4 rounded font-mono hover:bg-primary-10 transition-colors duration-300 mb-16"
          style={{
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
          }}
        >
          Say Hello
        </a>

        {/* Social Links - Mobile Only */}
        <div className="md:hidden flex justify-center gap-6 mb-8">
          {socials.map((social, i) => (
            <SocialIcon
              key={i}
              icon={social.icon}
              url={social.url}
              label={social.label}
            />
          ))}
        </div>

        <p className="font-mono text-xs text-text-secondary">
          Designed & Built by Your Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
