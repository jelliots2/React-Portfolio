import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src='.\src\assets\Me.jpg' alt='picture of me.' />
      {/* Look I don't have any good pictures so this is the best I got */}
      {/* And yes I was too lazy to crop it for this project I'm crunching rn */}
      <p>My name is Elliot Stocker, and I am a student programmer in a full-stack 
        developer Bootcamp. I am motivated to learn so I can improve my skills and
        put them to use in a professional setting.
      </p>
      <p>I am also a hobbyist music producer. Here is one of
        my most recent projects: <a href='https://www.youtube.com/watch?v=iWy985AHeac'> YouTube</a>
      </p>
    </div>
  );
};

export default About;