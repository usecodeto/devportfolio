import React, { useState, useEffect } from 'react';


export function Projects() {
   
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/usecodeto/repos', {
          method: "GET",
          headers: {
            "Authorization": "token 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",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }

        const projectsData = await response.json();
        setProjects(projectsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, []);



  return (
    <>
      <section id="projects">
        <div className="project-cards ">
          {projects.map((project) => (
            <div key={project.id} className="project-card h-40 justify-center items-center bg-blue m-2 flex-col inline-block" style={{width : '300px' , height: '200px'}}>
              <div className="project-image w-full"><img src='imgs/chatting.jpg' alt='nothing' /></div>
              <div className="project-content flex flex-col ">
                <p className="project-heading text-center font-bold">{project.name}</p>
                <p className="project-description">{project.description  ?project.description : 'its still need to be updated ' } </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
