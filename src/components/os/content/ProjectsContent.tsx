import React from 'react';

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: (
        <a href="https://github.com/jason-xuu/Stock-Tracker-Project" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
          StockSense: Market Tracker Dashboard
        </a>
      ),
      description: "Full-stack dashboard for real-time stock data, sentiment-based market analysis, and dynamic charting.",
      technologies: ["React", "Tailwind CSS", "FastAPI", "yfinance", "Plotly.js"],
      image: "📈",
      period: "Feb 2025",
      details: [
        "Deployed a dashboard that fetches, analyzes, and visualizes stock data for any ticker, reducing lookup time by 80%.",
        "Engineered sentiment-driven market state engine using news and trend data.",
        "Integrated Axios, Plotly, and Render CI/CD for a responsive frontend with <1s load times."
      ]
    },
    {
      id: 2,
      title: (
        <a href="https://github.com/jason-xuu/calendar-plus" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
          CalendarPlus
        </a>
      ),
      description: "Feature-rich calendar platform with dynamic event creation, agenda view, and multi-calendar support.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn-ui", "Vite", "Framer Motion"],
      image: "📅",
      details: [
        "Deployed to 10+ production environments in 2 weeks.",
        "Improved user scheduling efficiency by 40% in test groups.",
        "Real-time search and responsive UI across devices.",
        "Maintained CI/CD with GitHub Actions and Vercel."
      ]
    },
    {
      id: 3,
      title: (
        <a href="https://www.linkedin.com/company/omnisynkai/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
          E-commerce Platform
        </a>
      ),
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "🛒💳",
    },
    {
      id: 4,
      title: "Web Portfolio OS Simulation",
      description: "Interactive portfolio website designed as a Windows XP simulation.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "💻🎨",
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
