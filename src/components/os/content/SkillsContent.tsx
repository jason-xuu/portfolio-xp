import React from 'react';

const SkillsContent: React.FC = () => {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: "🖥️",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 80 },
        { name: "Jest", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "PyTorch", level: 70 },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 90 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Go", level: 70 },
        { name: "Rust", level: 65 },
        { name: "Kotlin", level: 60 },
      ],
    },
    {
      id: "data",
      title: "Data Science & ML",
      icon: "📊",
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Statistical Analysis", level: 75 },
        { name: "Matlab", level: 70 },
        { name: "Apache Beam", level: 65 },
        { name: "Hadoop", level: 70 },
        { name: "Spark", level: 70 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Agile Methodologies", level: 80 },
        { name: "Jira", level: 75 },
        { name: "Jupyter", level: 80 },
        { name: "Tableau", level: 75 },
        { name: "BigQuery", level: 70 },
        { name: "GCP", level: 70 },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Skills & Capabilities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="bg-blue-50 border-b border-gray-200 p-4 flex items-center">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className="font-semibold text-blue-700">
                {category.title}
              </h3>
            </div>
            
            <div className="p-4 space-y-4">
              {category.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h3 className="font-semibold text-blue-700 mb-3">Additional Competencies</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Problem Solving",
            "System Design",
            "Technical Writing",
            "UI/UX Design",
            "Database Management",
            "Performance Optimization",
            "Team Leadership",
            "Project Management",
            "Code Review",
            "Mentoring",
            "Public Speaking",
            "Networking",
            "Languages: C++, Java, JavaScript, Python, R, Assembly, SQL, Go, Typescript, Rust, Kotlin, Matlab",
            "Technologies: Docker, Flask, Git, Node.js, PyTorch, React.js, REST APIs",
            "Tools: Apache Beam, Hadoop, Spark, BigQuery, GCP, Jira, Jupyter, Tableau"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white border border-blue-200 rounded-full text-sm text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-700 mb-2">Languages</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">English</span>
              <span className="text-xs font-medium text-gray-500">Native</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Mandarin</span>
              <span className="text-xs font-medium text-gray-500">Proficient</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>
          {[
            { name: "C++", level: 80 },
            { name: "Java", level: 80 },
            { name: "JavaScript", level: 95 },
            { name: "Python", level: 90 },
            { name: "R", level: 75 },
            { name: "Assembly", level: 60 },
            { name: "SQL", level: 85 },
            { name: "Go", level: 70 },
            { name: "Typescript", level: 85 },
            { name: "Rust", level: 65 },
            { name: "Kotlin", level: 60 },
            { name: "Matlab", level: 70 },
          ].map((lang, idx) => (
            <div key={lang.name} className="col-span-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                <span className="text-xs font-medium text-gray-500">{lang.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${lang.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
