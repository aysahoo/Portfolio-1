import React, { useState } from "react";
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

export default function App() {
  const [palette, setPalette] = useState(colorPalettes[0]);

  const changePalette = () => {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    setPalette(colorPalettes[randomIndex]);
  };

  return (
    <div className={`${palette.bg} min-h-screen p-10 press-start-2p-regular`}>
        <button 
          onClick={changePalette} 
          className="absolute bottom-[10%] right-[15%] w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center animate-pulse transition-transform transform hover:rotate-180 hover:scale-110 duration-300 ease-in-out"
        >
        </button>
      <div className="max-w-xl mx-auto overflow-x-hidden">
        <Header textColor={palette.text} />
        <Intro accentColor={palette.accent} />
        <SocialLinks />
        <Projects textColor={palette.text} />
        <Footer />
      </div>
    </div>
  );
}
