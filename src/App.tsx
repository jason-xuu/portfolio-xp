import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    let source: AudioBufferSourceNode | null = null;

    const LOOP_END = 19.336;

    fetch("/audio/lotuswaters.ogg")
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        source = context.createBufferSource();
        source.buffer = audioBuffer;

        source.loop = true;
        source.loopStart = 0.0;
        source.loopEnd = LOOP_END;

        source.connect(context.destination);

        const resumeAudio = () => {
          context.resume().then(() => {
            source?.start(0);
          });

          window.removeEventListener("click", resumeAudio);
        };

        window.addEventListener("click", resumeAudio);
      });

    return () => {
      source?.stop();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
