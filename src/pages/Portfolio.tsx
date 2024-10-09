import React from 'react';
import Project from '../components/Project';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <h3>My Projects</h3>
      <div className="project-card">
      <Project 
      title="4096" 
      description="This is my first project working as a group" 
      link="https://github.com/jelliots2/4096" 
      imageUrl='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
      />
    </div>
    </section>
  );
};

export default Portfolio;
