// components/SocialIcon.js
import React from "react";

const SocialIcon = ({
  icon,
  url,
  label,
}: {
  icon: React.ReactNode;
  url: string;
  label: string;
}) => {
  return (
    <a
      href={url}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lightest-slate hover:text-green transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-xl">{icon}</div>
    </a>
  );
};

export default SocialIcon;
