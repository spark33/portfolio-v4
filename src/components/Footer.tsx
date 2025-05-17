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
import { IconType } from "react-icons";

interface Social {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const Footer: React.FC = () => {
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
    <footer id="contact" className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="font-mono text-green mb-4">04. What's Next?</h2>
        <h3 className="text-4xl font-semibold text-lightest-slate mb-4">
          Get In Touch
        </h3>
        <p className="text-slate max-w-md mx-auto mb-10">
          Whether you have a question or just want to say hi, my inbox is always
          open. I'll try my best to get back to you!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block border border-green text-green rounded px-7 py-4 font-mono hover:bg-green/10 transition-colors duration-300 mb-16"
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

        <p className="font-mono text-xs text-slate">
          Designed & Built by Your Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
