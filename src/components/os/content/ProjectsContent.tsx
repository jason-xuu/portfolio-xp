
import React from 'react';

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Facial Recognition System",
      description: "Developed a facial recognition system using deep learning for secure access control.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      image: "👤🔍",
    },
    {
      id: 2,
      title: "AI Prediction Model",
      description: "Created predictive models for financial forecasting with high accuracy rates.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      image: "📊🤖",
    },
    {
      id: 3,
      title: "Web Portfolio OS Simulation",
      description: "Interactive portfolio website designed as a Windows XP simulation.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "💻🎨",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "🛒💳",
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <div key={project.id} className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
            <div className="p-4">
              <div className="text-3xl mb-2 flex justify-center">{project.image}</div>
              <h3 className="text-lg font-semibold text-blue-700">{project.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
              
              <div className="mt-2">
                <div className="text-xs font-semibold text-gray-500 mb-1">Technologies:</div>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
