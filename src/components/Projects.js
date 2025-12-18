import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A web application built with React and modern CSS",
      tech: ["React", "CSS3", "JavaScript"]
    },
    {
      id: 2,
      title: "Project Two", 
      description: "An interactive dashboard with data visualization",
      tech: ["React", "Chart.js", "API Integration"]
    },
    {
      id: 3,
      title: "Project Three",
      description: "A responsive e-commerce website",
      tech: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;