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
    accent: "text-[#4B5563]",
  },
  {
    bg: "bg-[#161619]",
    text: "text-[#F8EBE3]",
    accent: "text-[#333333]",
  },
  {
    bg: "bg-[#2B2D42]",
    text: "text-[#F8EBE3]",
    accent: "text-[#5C5C5C]",
  },
  {
    bg: "bg-[#F8EBE3]",
    text: "text-[#2B2D42]",
    accent: "text-[#2B2B2B]",
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
        <button onClick={ changePalette } className="absolute bottom-[10%] right-[15%] w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-transform transform hover:rotate-180">
        
        </button>
      <div className="max-w-xl mx-auto overflow-x-hidden">
        <Header textColor={palette.text} changePalette={changePalette}/>
        <Intro accentColor={palette.accent} />
        <SocialLinks />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
