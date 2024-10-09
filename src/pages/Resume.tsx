import React from "react";

const Resume: React.FC = () => {
  return (
    <div>
      <h2>My Resume</h2>
      <h4> Technical Skills</h4>
      <ul>
        <li>- HTML</li>
        <li>- CSS</li>
        <li>- JavaScript</li>
        <li>- React</li>
        <li>- Node</li>
        <li>- SQL</li>
        <a href="/files/example.pdf" download="example.pdf">
  Download the file
</a>
      </ul>
    </div>
  );
};

export default Resume;
