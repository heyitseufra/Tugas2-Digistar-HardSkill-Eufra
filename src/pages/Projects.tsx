import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="px-16 py-8 bg-pink-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-pink-900">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
