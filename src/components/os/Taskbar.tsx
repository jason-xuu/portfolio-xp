import { useState, useEffect } from "react";
import { WindowType } from "@/types/os-types";
import AudioTray from "./AudioTray";

interface TaskbarProps {
  openWindows: WindowType[];
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
  isStartMenuOpen: boolean;
  onStartClick: (e: React.MouseEvent) => void;
}

// Helper function to get formatted time immediately
const getFormattedTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
};

const Taskbar = ({
  openWindows,
  activeWindow,
  onWindowClick,
  isStartMenuOpen,
  onStartClick,
}: TaskbarProps) => {
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime()); // set immediately

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-12 bg-gradient-to-r from-winxp-taskbar to-winxp-start flex items-center justify-between px-1 z-50">
      {/* Start Button */}
      <button
        onClick={onStartClick}
        className={`h-10 flex items-center px-2 rounded-md ${
          isStartMenuOpen
            ? "bg-blue-800 text-white"
            : "bg-gradient-to-r from-winxp-start to-blue-500 text-white hover:brightness-105"
        } font-bold text-sm transition-all`}
      >
        <div className="flex items-center">
          <span className="mr-2 text-lg">🪟</span>
          <span>start</span>
        </div>
      </button>

      {/* Open Windows */}
      <div className="flex-grow flex items-center ml-2 space-x-1 overflow-x-auto">
        {openWindows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            className={`h-10 px-2 flex items-center min-w-[120px] max-w-[200px] ${
              activeWindow === window.id
                ? "bg-blue-500 bg-opacity-60 text-white"
                : "bg-blue-400 bg-opacity-50 text-white hover:bg-opacity-60"
            } rounded-md truncate transition-all`}
          >
            <span className="mr-1">
              {window.content === "AboutContent" ? "👤" :
               window.content === "ProjectsContent" ? "📁" :
               window.content === "ExperienceContent" ? "📝" :
               window.content === "SkillsContent" ? "⚙️" :
               window.content === "ReferencesContent" ? "📣" :
               window.content === "ConnectContent" ? "🔗" : "🖼️"}
            </span>
            <span className="truncate">{window.title}</span>
          </button>
        ))}
      </div>

      {/* Tray + Clock */}
      <div className="flex items-center space-x-2">
        <AudioTray />
        <div className="bg-blue-400 bg-opacity-50 h-10 flex items-center px-3 rounded-md">
          <div className="text-white">{currentTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
