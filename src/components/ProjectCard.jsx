import React from 'react';

const ProjectCard = ({ data }) => {
  const { h1, p, year, role, livelink, gitlink, img } = data;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden">
      <img
        src={img}
        alt={h1}
        className="w-full h-52 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
        }}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-black mb-2">{h1}</h2>
        <p className="text-gray-700 text-sm mb-3">{p}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{year}</span>
          <span>{role}</span>
        </div>
        <div className="flex gap-4">
          {livelink && (
            <a
              href={livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {gitlink && (
            <a
              href={gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
