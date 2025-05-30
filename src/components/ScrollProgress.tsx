"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left shadow-md bg-primary"
      style={{
        scaleX: scrollYProgress,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ScrollProgress;
