import {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    ReactNode,
  } from "react";
  
  type AudioContextType = {
    isMusicMuted: boolean;
    isSfxMuted: boolean;
    toggleMusic: () => void;
    toggleSfx: () => void;
  };
  
  const AudioContext = createContext<AudioContextType | null>(null);
  
  export const AudioProvider = ({ children }: { children: ReactNode }) => {
    const [isMusicMuted, setIsMusicMuted] = useState(true);
    const [isSfxMuted, setIsSfxMuted] = useState(true);
    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceRef = useRef<AudioBufferSourceNode | null>(null);
    const bufferRef = useRef<AudioBuffer | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);
  
    const LOOP_END = 19.336;
  
    const initAudio = async () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
      }
  
      if (!bufferRef.current) {
        const res = await fetch('/audio/lotuswaters.ogg');
        const arrayBuffer = await res.arrayBuffer();
        bufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
      }
  
      if (!gainNodeRef.current) {
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.gain.value = 0.1; 
        gainNodeRef.current.connect(audioContextRef.current.destination);
      }
  
      if (!sourceRef.current) {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = bufferRef.current!;
        source.loop = true;
        source.loopStart = 0.0;
        source.loopEnd = LOOP_END;
        source.connect(gainNodeRef.current); 
        sourceRef.current = source;
      }
    };
  
    const toggleMusic = async () => {
      if (isMusicMuted) {
        await initAudio();
        await audioContextRef.current!.resume();
        try {
          sourceRef.current!.start(0);
        } catch (e) {
          console.log("Music already playing or already started:", e);
        }
      } else {
        sourceRef.current?.stop();
        sourceRef.current = null;
      }
  
      setIsMusicMuted((prev) => !prev);
    };
  
    const toggleSfx = () => {
      setIsSfxMuted((prev) => !prev);
    };
  
    useEffect(() => {
      return () => {
        sourceRef.current?.stop();
      };
    }, []);
  
    return (
      <AudioContext.Provider
        value={{ isMusicMuted, isSfxMuted, toggleMusic, toggleSfx }}
      >
        {children}
      </AudioContext.Provider>
    );
  };
  
  export const useAudio = () => {
    const ctx = useContext(AudioContext);
    if (!ctx) throw new Error("useAudio must be used within AudioProvider");
    return ctx;
  };
  