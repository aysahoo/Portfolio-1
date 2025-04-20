import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2 className="font-bold text-lg mb-2">Projects</h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <div className='flex justify-between items-center'>
            <h1>
            <strong>Memory Lane</strong>
            </h1>
            <a 
            href="https://memory-lane-alpha.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 text-sm hover:underline flex items-center">
            Visit <span className="ml-1">→</span>
            </a>
            </div>

            <p className="text-[11px]">Upload, search, and chat with your audio files.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
