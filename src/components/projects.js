import React from 'react';
<h2>Hello from Projects</h2>
const Projects = () => {
  const projectList = [
    {
      title: 'To-Do App',
      desc: 'A simple React to-do list with add/delete functionality and local storage.',
      link: '#'
    },
    {
      title: 'Responsive Portfolio Website',
      desc: 'A responsive portfolio using React and Bootstrap with reusable components.',
      link: '#'
    },
    {
      title: 'Weather App',
      desc: 'Weather forecast app using OpenWeatherMap API and Bootstrap UI.',
      link: '#'
    }
  ];

  return (
    <div className="container my-5" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
