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
  // isMuted = true means audio is muted (but always playing from start)
  const [isMuted, setIsMuted] = useState(false);

  // ==========================================
  // GLOBAL BACKGROUND MUSIC (Start to End)
  // Uses muted autoplay trick — music starts muted, unmutes on first interaction
  // ==========================================
  useEffect(() => {
    // Grab the <audio> element injected in index.html (already autoplaying muted)
    let audio = document.getElementById("bg-music");
    if (!audio) {
      // Fallback: create it if somehow not in DOM
      audio = new Audio("/music/Icelight.mp3");
      audio.id = "bg-music";
      audio.preload = "auto";
      audio.loop = true;
      audio.muted = true;
      audio.playsInline = true;
      document.body.appendChild(audio);
      audio.play().catch(() => {});
    }

    audio.volume = 0.45;
    audioRef.current = audio;

    // Sync icon with actual muted state (starts muted until user touches screen)
    const syncMuted = () => setIsMuted(audio.muted);
    syncMuted();

    // Watch for the inline script's unlock (muted → unmuted transition)
    const observer = new MutationObserver(syncMuted);
    // No mutation for muted — use polling for 3s then stop
    const timer = setInterval(() => {
      setIsMuted(audio.muted);
      if (!audio.muted) clearInterval(timer);
    }, 100);
    setTimeout(() => clearInterval(timer), 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  const nextStep = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.muted = false;
      audio.play().catch(() => {});
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
