import React, {useState} from 'react';

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);
  const email = "youremail@example.com"; 

  const handleCopy = (e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 20000);
  };
  return (
    <div className="flex gap-4 mb-8 text-sm text-black">
      <a href="#" className="flex items-center gap-1 hover:underline">
        resume
      </a>
      <a href="https://x.com/aysahoo_04" className="flex items-center gap-1 hover:underline">
        twitter
      </a>
      <a href="https://github.com/aysahoo" className="flex items-center gap-1 hover:underline">
        github
      </a>
      <a href="https://www.linkedin.com/in/ayush-sahoo04/" className="flex items-center gap-1 hover:underline">
        linkedin
      </a>
      <a href="#"
         onClick={handleCopy}
         className="flex items-center gap-1 hover:underline">
         email
        {copied && (
          <span className="absolute top-105 text-green-400 text-[10px]">
            email copied!
          </span>
        )}
      </a>
    </div>
  );
};

export default SocialLinks;
