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
  const [isPlaying, setIsPlaying] = useState(false);

  // ==========================================
  // GLOBAL BACKGROUND MUSIC (Start to End)
  // Plays "/music/Icelight.mp3" continuously
  // ==========================================
  useEffect(() => {
    let audio = document.getElementById("bg-music");
    if (!audio) {
      audio = new Audio("/music/Icelight.mp3");
      audio.id = "bg-music";
      audio.preload = "auto";
      audio.loop = true;
      audio.autoplay = true;
      audio.playsInline = true;
      document.body.appendChild(audio);
    }

    audio.volume = 0.45;
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    if (!audio.paused) {
      setIsPlaying(true);
    }

    const startAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };

    // Attempt autoplay immediately
    startAudio();

    // User gesture fallback (starts on very first click/tap/scroll anywhere)
    const gestureEvents = ["click", "touchstart", "touchend", "pointerdown", "mousedown", "keydown", "scroll"];
    const handleFirstGesture = () => {
      startAudio();
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture, true);
        document.removeEventListener(evt, handleFirstGesture, true);
      });
    };

    gestureEvents.forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { capture: true, passive: true });
      document.addEventListener(evt, handleFirstGesture, { capture: true, passive: true });
    });

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture, true);
        document.removeEventListener(evt, handleFirstGesture, true);
      });
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
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
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Music"}
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
        {isPlaying ? "🎵" : "🔇"}
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
