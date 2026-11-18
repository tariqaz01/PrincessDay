import { useState, useEffect, useRef } from "react";
import Welcome from "../components/WelcomeSection/Welcome";
import BalloonCompo from "../components/BalloonSection/BalloonCompo";
import Candle from "../components/CandleSection/Candle";
import Bouquet from "../components/BouquetSection/Bouquet";
import MomentsSlider from "../components/MomentsSection/MomentsSlider";
import Envelope from "../components/EnvelopeSection/Envelope";
import GiftBox from "../components/GiftSection/GiftBox";
import FinalCelebration from "../components/FinalSection/FinalCelebration";

function BirthdaySurprise() {
  const [step, setStep] = useState(1);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // ==========================================
  // GLOBAL BACKGROUND MUSIC (Start to End)
  // Plays "/music/Icelight.mp3" continuously
  // ==========================================
  useEffect(() => {
    const audio = new Audio("/music/Icelight.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    const startAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          // Autoplay was blocked, will start on user interaction
        });
      }
    };

    // Attempt autoplay
    startAudio();

    // User gesture fallback (starts on very first click/tap anywhere)
    const handleFirstGesture = () => {
      startAudio();
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };

    window.addEventListener("pointerdown", handleFirstGesture);
    window.addEventListener("keydown", handleFirstGesture);

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const nextStep = () => {
    // Ensure audio starts on step transition if not started yet
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div className="relative">
      {/* Floating Music Control Pill */}
      <button
        onClick={toggleMute}
        title={isMuted ? "Unmute Music" : "Mute Music"}
        className="
          fixed
          top-4
          right-4
          z-50
          bg-white/80
          hover:bg-white
          backdrop-blur-md
          p-2.5
          rounded-full
          shadow-md
          border
          border-pink-200
          text-pink-600
          text-lg
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
          cursor-pointer
        "
      >
        {isMuted ? "🔇" : "🎵"}
      </button>

      {step === 1 && (
        <Welcome nextStep={nextStep} />
      )}
      {step === 2 && (
        <BalloonCompo nextStep={nextStep} />
      )}
      {step === 3 && (
        <Candle nextStep={nextStep} />
      )}
      {step === 4 && (
        <Bouquet nextStep={nextStep} />
      )}
      {step === 5 && (
        <MomentsSlider nextStep={nextStep} />
      )}
      {step === 6 && (
        <Envelope nextStep={nextStep} />
      )}
      {step === 7 && (
        <GiftBox nextStep={nextStep} />
      )}
      {step === 8 && (
        <FinalCelebration />
      )}
    </div>
  );
}

export default BirthdaySurprise;
