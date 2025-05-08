import { useAudio } from "@/context/AudioContext";

export const useClickSound = () => {
  const { isSfxMuted } = useAudio();

  const playClickSound = () => {
    if (isSfxMuted) return;

    const clickAudio = new Audio('/portfolio-xp/audio/mouse-click.mp3');
    clickAudio.volume = 0.3;
    clickAudio.play().catch((e) => {
      console.warn("Failed to play click sound:", e);
    });
  };

  return { playClickSound };
};
