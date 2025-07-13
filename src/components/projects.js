import React from 'react';
<h2>Hello from Projects</h2>
const Projects = () => {
  const projectList = [
    {
      title: 'Age-Calculator',
      desc: 'A simple age calculator with add/delete functionality and local storage.',
      link: 'https://sheetalagecalculator.netlify.app/'
    },
    {
      title: 'GITM Portfolio Website',
      desc: 'A about Me portfolio using html and Bootstrap with reusable components.',
      link: 'https://sheportfolio.netlify.app/'
    },
    {
      title: 'Log-in Form',
      desc: 'A Front-end login form that include Email and Password .',
      link: 'https://sheetalloginform.netlify.app/'
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
                <a 
  href={project.link} 
  target="_blank" 
  rel="noreferrer" 
  className="btn btn-primary"
>
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
