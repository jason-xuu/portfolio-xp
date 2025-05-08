import { motion } from "framer-motion";
import { WindowType } from "@/types/os-types";
import { useClickSound } from "@/utils/sfx"; 

interface StartMenuProps {
  onItemClick: (window: WindowType) => void;
}

const StartMenu = ({ onItemClick }: StartMenuProps) => {
  const { playClickSound } = useClickSound(); 

  const menuItems = [
    {
      icon: "👤",
      title: "About Me",
      window: {
        id: "about-window",
        title: "About Me",
        content: "AboutContent",
        width: 600,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        position: { x: 150, y: 150 },
      },
    },
    {
      icon: "📁",
      title: "My Projects",
      window: {
        id: "projects-window",
        title: "My Projects",
        content: "ProjectsContent",
        width: 700,
        height: 500,
        isMinimized: false,
        isMaximized: false,
        position: { x: 50, y: 50 },
      },
    },
    {
      icon: "📝",
      title: "Experience",
      window: {
        id: "experience-window",
        title: "Professional Experience",
        content: "ExperienceContent",
        width: 650,
        height: 500,
        isMinimized: false,
        isMaximized: false,
        position: { x: 100, y: 100 },
      },
    },
    {
      icon: "⚙️",
      title: "Skills",
      window: {
        id: "skills-window",
        title: "Skills & Capabilities",
        content: "SkillsContent",
        width: 550,
        height: 450,
        isMinimized: false,
        isMaximized: false,
        position: { x: 200, y: 200 },
      },
    },
    {
      icon: "📣",
      title: "References",
      window: {
        id: "references-window",
        title: "References & Testimonials",
        content: "ReferencesContent",
        width: 500,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        position: { x: 250, y: 250 },
      },
    },
    {
      icon: "🔗",
      title: "Connect",
      window: {
        id: "connect-window",
        title: "Connect With Me",
        content: "ConnectContent",
        width: 500,
        height: 350,
        isMinimized: false,
        isMaximized: false,
        position: { x: 300, y: 300 },
      },
    },
  ];

  return (
    <motion.div
      className="absolute bottom-12 left-0 w-64 bg-blue-50 border-2 border-winxp-window-border rounded-tr-md rounded-b-md shadow-lg z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* User Profile Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white flex items-center">
        <div className="w-12 h-12 bg-white rounded-full overflow-hidden mr-3 border-2 border-white">
          <span className="text-4xl flex items-center justify-center h-full">
            👦🏼
          </span>
        </div>
        <div>
          <div className="font-bold">Jason Xu</div>
          <div className="text-sm">Software Engineer</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        {menuItems.map((item) => (
          <div
            key={item.window.id}
            className="flex items-center p-2 hover:bg-blue-100 rounded-md cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing the menu when clicking an item
              playClickSound(); // play click on item select
              onItemClick(item.window);
            }}
          >
            <span className="text-2xl mr-3">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-gray-300 flex justify-between items-center">
        <div
          className="flex items-center p-2 hover:bg-blue-100 rounded-md cursor-pointer"
          onClick={() => {
            playClickSound(); // play click on "About This Site"
            onItemClick({
              id: "about-window",
              title: "About This Site",
              content: "AboutContent",
              width: 400,
              height: 300,
              isMinimized: false,
              isMaximized: false,
              position: { x: 200, y: 200 },
            });
          }}
        >
          <span className="text-xl mr-2">ℹ️</span>
          <span className="text-sm">About This Site</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StartMenu;
