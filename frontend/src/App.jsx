import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import SocialLinks from "./Components/SocialLinks";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const colorPalettes = [
  {
    bg: "bg-[#F8EBE3]",
    text: "text-[#161619]",
    accent: "text-[#161619]",
  },
  {
    bg: "bg-[#777767]",
    text: "text-[#131516]",
    accent: "text-[#131516]",
  },
  {
    bg: "bg-[#ef233c]",
    text: "text-[#f3ffe1]",
    accent: "text-[#ffffff]",
  },
  {
    bg: "bg-[#284262]",
    text: "text-[#dfe0e0]",
    accent: "text-[#dfe0e0]",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [palette, setPalette] = useState(colorPalettes[0]);

  const changePalette = () => {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    setPalette(colorPalettes[randomIndex]);
  };

  return (
    <div className={`${palette.bg} min-h-dvh p-10 press-start-2p-regular relative transition-colors duration-500 overflow-hidden`}>

      {/* Color Switcher Button */}
      <motion.button
        onClick={changePalette}
        whileTap={{ scale: 1.3, rotate: 360 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-[15%] right-[15%] w-10 h-10 text-white text-xl rounded-full bg-gradient-to-r from-purple-500 to-blue-500 backdrop-blur-md border blur-[5px] border-white/30 shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out"
      >
      </motion.button>

      {/* Content with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={palette.bg} // Ensures remount on palette change
          className="max-w-xl mx-auto overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          layout
        >
          <motion.section variants={sectionVariants}>
            <Header textColor={palette.text} />
          </motion.section>

          <motion.section variants={sectionVariants}>
            <Intro accentColor={palette.accent} />
          </motion.section>

          <motion.section variants={sectionVariants}>
            <SocialLinks />
          </motion.section>

          <motion.section variants={sectionVariants}>
            <Projects textColor={palette.text} />
          </motion.section>

          <motion.section variants={sectionVariants}>
            <Footer />
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
