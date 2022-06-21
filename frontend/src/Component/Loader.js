import React from "react";
import { motion } from "framer-motion";
import '../Asset/Loader/Loader.scss'

const loadingContainer = {
  width: "25rem",
  height: "10rem",
  display: "flex",
  justifyContent: "space-evenly",
};

const loadingCircle = {
  display: "block",
  width: "3.8rem",
  height: "3.8rem",
  backgroundColor: "#3e8ace",
  borderRadius: "15rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};

const loadingCircleTransition = {
  duration : 0.4,
  yoyo : Infinity,
  ease: 'easeInOut'
}

const Loader = () => {
  return (
    <div className="loader">
      <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30"></div>
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
      <p>Welcome back to Furniture Shop......</p>
      <p>Waiting for some seconds to load data to website......</p>
    </div>
  );
};

export default Loader;