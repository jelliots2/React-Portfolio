import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, imageUrl }) => {
  return (
    <div className="project">
      <a href={link} target="_blank" rel='noopener noreferrer'>
        <img src={imageUrl} alt={title} className="project-image" />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;