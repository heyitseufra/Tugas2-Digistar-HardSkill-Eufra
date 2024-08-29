import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  image,
  description,
}) => {
  return (
    <Link
      to={`/projects/${id}`}
      className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={`/images/projects/${image}`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
