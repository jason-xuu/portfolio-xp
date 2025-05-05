import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AudioProvider } from "./context/AudioContext";

const root = createRoot(document.getElementById("root")!);
root.render(
  <AudioProvider>
    <App />
  </AudioProvider>
);
