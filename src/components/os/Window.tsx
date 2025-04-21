import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { WindowType } from "@/types/os-types";
import WindowContent from "./WindowContent";
import { motion } from "framer-motion";

interface WindowProps {
  window: WindowType;
  isActive: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onDrag: (x: number, y: number) => void;
}

const Window = ({
  window,
  isActive,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onDrag
}: WindowProps) => {
  const nodeRef = useRef(null);
  const resizeRef = useRef<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState({ width: window.width, height: window.height });
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    if (isResizing) {
      const handleMouseMove = (e: MouseEvent) => {
        if (resizeRef.current) {
          const dx = e.clientX - resizeRef.current.x;
          const dy = e.clientY - resizeRef.current.y;
          setSize(prev => ({
            width: Math.max(300, prev.width + dx),
            height: Math.max(200, prev.height + dy)
          }));
          resizeRef.current = { x: e.clientX, y: e.clientY };
        }
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        resizeRef.current = null;
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isResizing]);

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    resizeRef.current = { x: e.clientX, y: e.clientY };
  };

  if (window.isMinimized) {
    return null;
  }

  const windowStyle = {
    width: window.isMaximized ? "100%" : `${size.width}px`,
    height: window.isMaximized ? "calc(100% - 48px)" : `${size.height}px`,
    zIndex: isActive ? 10 : 5,
  };

  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const windowContent = (
    <div
      ref={nodeRef}
      className={`absolute rounded-md shadow-lg flex flex-col overflow-hidden border ${
        isActive
          ? "border-winxp-window-border shadow-lg"
          : "border-gray-400 shadow-md"
      }`}
      style={windowStyle}
    >
      {/* Window Title Bar */}
      <div
        className={`window-title-bar flex items-center justify-between px-2 py-1 ${
          isActive
            ? "bg-gradient-to-r from-winxp-window-headerActive to-blue-500"
            : "bg-gradient-to-r from-winxp-window-header to-blue-400"
        } text-winxp-window-headerText`}
      >
        <div className="flex items-center space-x-1">
          <span className="text-lg">
            {window.content === "AboutContent" ? "👤" :
              window.content === "ProjectsContent" ? "📁" :
              window.content === "ExperienceContent" ? "📝" :
              window.content === "SkillsContent" ? "⚙️" :
              window.content === "ReferencesContent" ? "📣" :
              window.content === "ConnectContent" ? "🔗" : "🖼️"}
          </span>
          <span className="font-medium text-sm">{window.title}</span>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={onMinimize}
            className="w-5 h-5 bg-blue-300 hover:bg-blue-200 text-white flex items-center justify-center rounded-sm"
          >
            &#8211;
          </button>
          <button
            onClick={onMaximize}
            className="w-5 h-5 bg-blue-300 hover:bg-blue-200 text-white flex items-center justify-center rounded-sm"
          >
            {window.isMaximized ? "❐" : "□"}
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center rounded-sm"
          >
            &#10005;
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-grow bg-winxp-window-body overflow-auto p-4">
        <WindowContent contentType={window.content} />
      </div>

      {/* Resize Handle */}
      {!window.isMaximized && (
        <div
          className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize"
          onMouseDown={handleResizeStart}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-500">
            <path
              fill="currentColor"
              d="M8 8L16 16H0L8 8zM16 0L8 8L0 0H16z"
            />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
      className="absolute"
      style={window.isMaximized
        ? { top: 0, left: 0, right: 0, bottom: "48px" } // leave space for taskbar
        : {}}
    >
      {window.isMaximized ? (
        windowContent
      ) : (
        <Draggable
          nodeRef={nodeRef}
          handle=".window-title-bar"
          defaultPosition={window.position}
          bounds="parent"
          onMouseDown={onFocus}
          onStop={(e, data) => {
            onFocus();
            onDrag(data.x, data.y);
          }}
        >
          {windowContent}
        </Draggable>
      )}
    </motion.div>
  );
};

export default Window;
