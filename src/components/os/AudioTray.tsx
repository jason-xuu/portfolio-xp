import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

const AudioTray = () => {
  const {
    isMusicMuted,
    isSfxMuted,
    toggleMusic,
    toggleSfx
  } = useAudio();

  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000); // Auto-dismiss after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center space-x-1">
      {/* LEFT BUTTON: SFX (mouse click sounds) */}
      <button onClick={toggleSfx} className="text-xl hover:opacity-80">
        {isSfxMuted ? "🔇" : "🔊"}
      </button>

      {/* RIGHT BUTTON: BACKGROUND MUSIC */}
      <button onClick={toggleMusic} className="text-xl hover:opacity-80">
        {isMusicMuted ? "🚫🎵" : "🎵"}
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-14 right-0 w-64 bg-yellow-100 border border-yellow-300 text-sm text-gray-800 p-3 rounded shadow-md z-[9999]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start">
              <div className="font-semibold text-yellow-800">
                Audio Controls
              </div>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowTooltip(false)}
              >
                ✕
              </button>
            </div>
            <p className="text-sm mt-1">
              Use these icons to mute/unmute sound effects and system audio.
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-yellow-100 border-l border-b border-yellow-300 rotate-45 z-[-1]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AudioTray;
