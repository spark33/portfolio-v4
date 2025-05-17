"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0.5, 1]);

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
