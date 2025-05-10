import React from 'react';

const Projects = ({textColor}) => {
  const projectsList = [
    {
      title: "Memory Lane",
      url: "https://memory-lane-alpha.vercel.app/",
      description: "Upload, search, and chat with your audio files."
    },
    {
      title: "ChatBot",
      url: "https://chatbot-flame-three.vercel.app/",
      description: "Simple Chatbot implementation."
    },
    {
      title: "GSAP Project",
      url: "https://gsap1-tau.vercel.app/",
      description: "Animation showcase using GSAP library."
    }
  ];

  return (
    <section>
      <h2 className={`font-bold text-xl mb-2 ${textColor}`}>Projects</h2>
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-4 w-full">
          {projectsList.map((project, index) => (
            <div className="w-full" key={index}>
              <div className='flex justify-between items-center'>
                <h1 className={`text-lg font-bold ${textColor}`}>
                  <strong>{project.title}</strong>
                </h1>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 text-sm hover:underline flex items-center">
                  Visit <span className="ml-1">→</span>
                </a>
              </div>
              <p className="text-[8px] sm:text-[13px]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
