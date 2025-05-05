
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useClickSound } from "@/utils/sfx";

interface DesktopIconProps {
  title: string;
  icon: string;
  onClick: () => void;
}

const DesktopIcon = ({ title, icon, onClick }: DesktopIconProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [doubleClickTimer, setDoubleClickTimer] = useState<NodeJS.Timeout | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { playClickSound } = useClickSound();

  const handleClick = () => {
    // First click starts timer for double-click detection
    if (!doubleClickTimer) {
      const timer = setTimeout(() => {
        setIsClicked(true);
        setDoubleClickTimer(null);
      }, 200);
      setDoubleClickTimer(timer);
    } else {
      // Second click within time window is a double-click
      clearTimeout(doubleClickTimer);
      setDoubleClickTimer(null);
      setIsClicked(false);
      setIsAnimating(true);
      // Animate before opening window
      setTimeout(() => {
        playClickSound();
        onClick();
        setIsAnimating(false);
      }, 150);
    }
  };

  // Click outside handler to deselect icon
  const handleDocumentClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(`[data-icon-id="${title}"]`)) {
      setIsClicked(false);
    }
  };

  // Add document listener when icon is clicked
  useEffect(() => {
    if (isClicked) {
      document.addEventListener("mousedown", handleDocumentClick);
      return () => document.removeEventListener("mousedown", handleDocumentClick);
    }
  }, [isClicked, title]);

  return (
    <motion.div
      data-icon-id={title}
      className={`desktop-icon w-24 h-24 flex flex-col items-center justify-center cursor-pointer p-2 rounded ${
        isClicked ? "bg-winxp-icon-bg bg-opacity-60" : "hover:bg-winxp-icon-bg hover:bg-opacity-40"
      }`}
      onClick={handleClick}
      onDoubleClick={() => {}}
      animate={isAnimating ? { scale: [1, 0.9, 1] } : {}}
      transition={{ duration: 0.15 }}
    >
      <div className="text-4xl mb-1">{icon}</div>
      <div className="text-center text-xs font-medium text-white drop-shadow-md">
        {title}
      </div>
    </motion.div>
  );
};

export default DesktopIcon;
