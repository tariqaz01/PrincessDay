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
  const unlockedRef = useRef(false); // has the muted-autoplay been unlocked yet?
  const [isMuted, setIsMuted] = useState(false); // icon: false = show 🎵

  useEffect(() => {
    // Use the <audio> already in the DOM (muted + autoplay from index.html)
    let audio = document.getElementById("bg-music");
    if (!audio) {
      audio = new Audio("/music/Icelight.mp3");
      audio.id = "bg-music";
      audio.preload = "auto";
      audio.loop = true;
      audio.muted = true;
      document.body.appendChild(audio);
      audio.play().catch(() => {});
    }
    audio.volume = 0.45;
    audioRef.current = audio;
    setIsMuted(false); // always show 🎵 on load

    // Unlock audio (unmute) on the FIRST user interaction that is NOT the music button.
    // If the music button is the first click, toggleMute() handles unlocking instead.
    const events = ["click", "touchstart", "pointerdown", "keydown", "scroll"];
    const unlock = (e) => {
      // Skip if the event is on our music button (toggleMute handles that case)
      if (e.target && e.target.closest && e.target.closest("[data-music-btn]")) return;
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      audio.muted = false;
      if (audio.paused) audio.play().catch(() => {});
      events.forEach((evt) => window.removeEventListener(evt, unlock, true));
    };
    events.forEach((evt) =>
      window.addEventListener(evt, unlock, { capture: true, passive: true })
    );

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, unlock, true));
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // First button press → treat as "unlock" (unmute the autoplay-muted audio), NOT as mute
    if (!unlockedRef.current) {
      unlockedRef.current = true;
      audio.muted = false;
      if (audio.paused) audio.play().catch(() => {});
      setIsMuted(false);
      return;
    }

    // Subsequent presses → normal mute / unmute toggle
    if (audio.paused) {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      const next = !audio.muted;
      audio.muted = next;
      setIsMuted(next);
    }
  };

  const nextStep = () => {
    const audio = audioRef.current;
    if (audio) {
      if (!unlockedRef.current) {
        unlockedRef.current = true;
        audio.muted = false;
      }
      if (audio.paused) audio.play().catch(() => {});
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div className="relative">
      {/* Floating Music Control Pill */}
      <button
        data-music-btn="true"
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
