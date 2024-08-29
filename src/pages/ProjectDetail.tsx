import React from "react";  
import { useParams } from "react-router-dom"; // Menghapus Link import  
import { projects } from "../data/projects";  

const ProjectDetail: React.FC = () => {  
  const { projectId } = useParams();  
  const id = parseInt(projectId ?? "", 10);  
  const project = projects.find((p) => p.id === id);  

  if (!project) {  
    return (  
      <div className="px-16 py-8 min-h-screen">  
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>  
        <p className="text-xl">The project with ID {id} could not be found.</p>  
      </div>  
    );  
  }  

  return (  
    <div className="px-16 py-8 min-h-screen bg-pink-100 text-pink-900">  
      <h1 className="text-4xl font-bold mb-8">{project.name}</h1>  
      <div className="flex flex-col md:flex-row items-center gap-x-12">  
        <img  
          src={`/images/projects/${project.image}`}  
          alt={project.name}  
          className="w-full md:w-1/2 h-72 object-cover rounded-md mb-4 md:mb-0"  
        />  
        <div className="flex flex-col gap-y-8">  
          <p className="text-lg">{project.description}</p>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ProjectDetail;  