import React from 'react';

const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Intern",
      company: "OmniSynk AI",
      period: "July 2024 – February 2025",
      location: "",
      description: "Developed features for 1,500+ e-commerce listings, enhancing operational efficiency by 30%.",
      achievements: [
        "Designed and deployed RESTful APIs for real-time inventory management, reducing response times by 25%.",
        "Enhanced UI components using React, CSS, and SCSS to improve page load speeds by 15%.",
        "Collaborated in Agile sprints, delivering high-quality software on tight deadlines."
      ]
    },
    {
      id: 2,
      role: "AI/ML Research Intern",
      company: "MBDA Federal Procurement Center",
      period: "June 2023 - August 2023",
      location: "Washington D.C.",
      description: "Researched machine learning and distributed storage technologies to identify 20+ opportunities for minority business enterprises (MBEs).",
      achievements: [
        "Authored a 10-page analysis report on generative AI and transfer learning, presenting 5 federal market applications.",
        "Promoted AI/ML adoption among MBEs, resulting in a 15% increase in technology integration."
      ]
    },
    {
      id: 3,
      role: "Research Assistant",
      company: "Seattle University",
      period: "June 2022 - August 2022",
      location: "Seattle, WA",
      description: "Automated data collection and analysis from 50+ retirement communities using Python, improving data accuracy and efficiency.",
      achievements: [
        "Conducted data mining and analysis in Excel, driving a 15% increase in program enrollment through actionable insights.",
        "Used pandas and matplotlib to generate visual reports for stakeholder presentations.",
        "Maintained version control of research scripts and data notebooks using Git."
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
          <div className="font-medium">B.S. in Computer Science</div>
          <div className="text-sm text-gray-600">University of Washington</div>
        </div>
        <div className="text-gray-600">Relevant Courses: Data Structures, Algorithms, Database Systems, Operating Systems, Discrete Mathematics</div>
      </div>
    </div>
  );
};

export default ExperienceContent;
