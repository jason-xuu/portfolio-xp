
import React from 'react';

const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Developing full-stack web applications and implementing machine learning solutions for client projects.",
      achievements: [
        "Led development of a facial recognition system for security applications",
        "Optimized database queries resulting in 40% faster performance",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      id: 2,
      role: "Software Engineering Intern",
      company: "DataSolutions Corp",
      period: "Summer 2020",
      description: "Worked on data processing pipelines and contributed to front-end development.",
      achievements: [
        "Built data visualization components using React",
        "Implemented automated testing for critical components",
        "Documented API endpoints for team reference"
      ]
    },
    {
      id: 3,
      role: "Research Assistant",
      company: "University AI Lab",
      period: "2019 - 2020",
      description: "Assisted in research projects focused on computer vision and natural language processing.",
      achievements: [
        "Co-authored research paper on image classification techniques",
        "Developed data collection scripts for training models",
        "Presented findings at university research symposium"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Professional Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`relative pl-8 ${
              index !== experiences.length - 1 ? "pb-6 border-l-2 border-blue-300" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
            
            {/* Content */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex flex-wrap justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-blue-700">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-md font-medium text-gray-600 mb-2">{exp.company}</div>
              <p className="text-gray-600 mb-3">{exp.description}</p>
              
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Key Achievements:</div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-semibold text-blue-800 mb-2">Education</h3>
        <div className="flex justify-between items-center mb-1">
          <div className="font-medium">B.S. Computer Science</div>
          <div className="text-sm text-gray-600">2017 - 2021</div>
        </div>
        <div className="text-gray-600">University of Technology</div>
      </div>
    </div>
  );
};

export default ExperienceContent;
