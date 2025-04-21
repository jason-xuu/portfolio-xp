
import { useState, useEffect } from "react";
import StartTooltip from "./StartTooltip";
import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import StartMenu from "./StartMenu";
import { WindowType } from "@/types/os-types";
import { wallpaperBase64 } from "@/assets/winxp-wallpaper";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState<WindowType[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  // Close start menu when clicking anywhere on the desktop
  useEffect(() => {
    const handleClickOutside = () => {
      if (isStartMenuOpen) {
        setIsStartMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStartMenuOpen]);

  const handleOpenWindow = (window: WindowType) => {
    // Check if window is already open
    if (openWindows.some((w) => w.id === window.id)) {
      // Just make it active
      setActiveWindow(window.id);
      return;
    }

    setOpenWindows((prev) => [...prev, window]);
    setActiveWindow(window.id);
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id));
    if (activeWindow === id) {
      const remainingWindows = openWindows.filter((window) => window.id !== id);
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null);
    }
  };

  const handleMinimizeWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, isMinimized: !window.isMinimized } : window
      )
    );
  };

  const handleMaximizeWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id
          ? {
              ...window,
              isMaximized: !window.isMaximized,
              position: !window.isMaximized ? { x: 0, y: 0 } : window.position, // Reset pos if maximizing
            }
          : window
      )
    );
  };

  const handleWindowFocus = (id: string) => {
    setActiveWindow(id);
  };

  const handleToggleStartMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  

  const desktopIcons = [
    {
      id: "projects",
      title: "My Projects",
      icon: "📁",
      window: {
        id: "projects-window",
        title: "My Projects",
        content: "ProjectsContent",
        width: 700,
        height: 500,
        isMinimized: false,
        isMaximized: false,
        position: { x: 50, y: 50 }
      }
    },
    {
      id: "experience",
      title: "Experience",
      icon: "📝",
      window: {
        id: "experience-window",
        title: "Professional Experience",
        content: "ExperienceContent",
        width: 650,
        height: 500,
        isMinimized: false,
        isMaximized: false,
        position: { x: 100, y: 100 }
      }
    },
    {
      id: "about",
      title: "About Me",
      icon: "👤",
      window: {
        id: "about-window",
        title: "About Me",
        content: "AboutContent",
        width: 600,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        position: { x: 150, y: 150 }
      }
    },
    {
      id: "skills",
      title: "Skills",
      icon: "⚙️",
      window: {
        id: "skills-window",
        title: "Skills & Capabilities",
        content: "SkillsContent",
        width: 550,
        height: 450,
        isMinimized: false,
        isMaximized: false,
        position: { x: 200, y: 200 }
      }
    },
    {
      id: "references",
      title: "References",
      icon: "📣",
      window: {
        id: "references-window",
        title: "References & Testimonials",
        content: "ReferencesContent",
        width: 500,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        position: { x: 250, y: 250 }
      }
    },
    {
      id: "connect",
      title: "Connect",
      icon: "🔗",
      window: {
        id: "connect-window",
        title: "Connect With Me",
        content: "ConnectContent",
        width: 500,
        height: 350,
        isMinimized: false,
        isMaximized: false,
        position: { x: 300, y: 300 }
      }
    }
  ];

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <div 
        className="flex-grow relative overflow-hidden" 
        onClick={() => setIsStartMenuOpen(false)}
        style={{ 
          backgroundImage: `url(${wallpaperBase64})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Desktop Icons */}
        <div className="p-4 grid grid-cols-6 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {desktopIcons.map((icon) => (
            <DesktopIcon
              key={icon.id}
              title={icon.title}
              icon={icon.icon}
              onClick={() => handleOpenWindow(icon.window)}
            />
          ))}
        </div>

        {/* Windows */}
        {openWindows.map((window) => (
          <Window
            key={window.id}
            window={window}
            isActive={activeWindow === window.id}
            onClose={() => handleCloseWindow(window.id)}
            onMinimize={() => handleMinimizeWindow(window.id)}
            onMaximize={() => handleMaximizeWindow(window.id)}
            onFocus={() => handleWindowFocus(window.id)}
            onDrag={(x, y) => updateWindowPosition(window.id, x, y)} // ✅ NEW PROP
          />
        ))}
        <StartTooltip />
      </div>

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={(id) => {
          const window = openWindows.find((w) => w.id === id);
          if (window) {
            if (window.isMinimized) {
              handleMinimizeWindow(id);
            }
            handleWindowFocus(id);
          }
        }}
        isStartMenuOpen={isStartMenuOpen}
        onStartClick={handleToggleStartMenu}
      />

      {/* Start Menu */}
      {isStartMenuOpen && (
        <StartMenu
          onItemClick={(window) => {
            handleOpenWindow(window);

            // ✅ Let React finish setting window state before closing the menu
            setTimeout(() => {
              setIsStartMenuOpen(false);
            }, 50);
          }}
        />
      )}
    </div>
  );
};

export default Desktop;
