import React from "react";
import {  motion } from "framer-motion";
const Animatescroll = ({
  children,
  className = "",
  id,
  initial = { opacity: 0, y: 0 },
  whileInView = { opacity: 1, y: -50 },
  transition = { duration: 1.8, ease: "easeInOut" },
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      {children}
    </motion.section>
  );
};

export default Animatescroll;
