
import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center text-6xl border-4 border-blue-300">
          👨‍💻
        </div>
        
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-blue-800">Jason Xu</h2>
          <p className="text-gray-600 mb-2">Software Engineer & Full-Stack Developer</p>
          <div className="flex justify-center sm:justify-start gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
              Problem Solver
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
              Tech Enthusiast
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
              Lifelong Learner
            </span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">About Me</h3>
        <p className="text-gray-600 mb-4">
          Hello! I'm Jason, a passionate software engineer with expertise in full-stack development and 
          machine learning applications. My journey in technology started with a curiosity about how 
          things work, which led me to pursue computer science and continuously expand my skills.
        </p>
        <p className="text-gray-600">
          I enjoy tackling complex problems and creating elegant, efficient solutions. When I'm not coding, 
          you can find me exploring new technologies, contributing to open-source projects, or sharing 
          my knowledge through technical blog posts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">My Background</h3>
          <p className="text-gray-600">
            With a background in Computer Science and several years of professional experience, 
            I've developed a deep understanding of software development principles and best practices. 
            My work spans web development, data science, and artificial intelligence applications.
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">My Philosophy</h3>
          <p className="text-gray-600">
            I believe in writing clean, maintainable code that solves real problems. User experience 
            is at the center of everything I build, and I'm committed to creating software that is 
            both powerful and accessible. Continuous learning keeps me at the cutting edge.
          </p>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg border border-blue-100 p-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Fun Facts</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>I've contributed to over 15 open-source projects</li>
          <li>I built my first computer when I was 12 years old</li>
          <li>I enjoy competitive programming challenges</li>
          <li>I can solve a Rubik's cube in under 2 minutes</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContent;
