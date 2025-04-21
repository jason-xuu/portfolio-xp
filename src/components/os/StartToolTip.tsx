import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StartTooltip = () => {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-[65px] left-2 w-64 bg-yellow-100 border border-yellow-300 text-sm text-gray-800 p-3 rounded shadow-md z-[9999]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-start">
            <div className="font-semibold text-yellow-800">
              Tip: Try the Start Menu!
            </div>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setShow(false)}
            >
              ✕
            </button>
          </div>
          <p className="text-sm mt-1">
            Click the Start button on the bottom-left to explore more sections.
          </p>

          {/* Triangle Pointer */}
          <div className="absolute -bottom-2 left-4 w-4 h-4 bg-yellow-100 border-l border-b border-yellow-300 rotate-45 z-[-1]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartTooltip;
