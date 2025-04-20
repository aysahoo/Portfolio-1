import React from 'react';

const Intro = ({ accentColor }) => {
  return (
    <p className={`${accentColor} text-md mb-6`}>
     Hey, I’m Ayush, a 20-y/o CS grad at OUTR BBSR who loves designing & building. I’m currently exploring the world of AI with skills of <strong> full stack developement</strong>. I love turning ideas into real, working products and pushing the limits of what tech can do.
    </p>
  );
};

export default Intro;
