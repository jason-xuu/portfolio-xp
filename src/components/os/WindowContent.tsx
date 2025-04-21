
import React from 'react';
import ProjectsContent from './content/ProjectsContent';
import ExperienceContent from './content/ExperienceContent';
import AboutContent from './content/AboutContent';
import SkillsContent from './content/SkillsContent';
import ReferencesContent from './content/ReferencesContent';
import ConnectContent from './content/ConnectContent';

interface WindowContentProps {
  contentType: string;
}

const WindowContent: React.FC<WindowContentProps> = ({ contentType }) => {
  switch (contentType) {
    case 'ProjectsContent':
      return <ProjectsContent />;
    case 'ExperienceContent':
      return <ExperienceContent />;
    case 'AboutContent':
      return <AboutContent />;
    case 'SkillsContent':
      return <SkillsContent />;
    case 'ReferencesContent':
      return <ReferencesContent />;
    case 'ConnectContent':
      return <ConnectContent />;
    default:
      return <div>Content not found</div>;
  }
};

export default WindowContent;
