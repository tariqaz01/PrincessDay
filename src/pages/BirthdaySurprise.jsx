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

  useEffect(() => {
    // Create audio and preload it — but DON'T play yet (browser blocks unmuted autoplay)
    const audio = new Audio("/music/Icelight.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audio.preload = "auto";
    audioRef.current = audio;

    // Play with FULL SOUND on the very first user interaction (click, tap, key)
    // This website requires a click to start anyway ("Open Your Surprise"),
    // so music effectively auto-starts the moment user touches the page.
    const events = ["click", "touchstart", "pointerdown", "keydown"];
    const startOnFirstGesture = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
      events.forEach((e) => document.removeEventListener(e, startOnFirstGesture, true));
    };
    events.forEach((e) =>
      document.addEventListener(e, startOnFirstGesture, { capture: true, passive: true })
    );

    return () => {
      events.forEach((e) => document.removeEventListener(e, startOnFirstGesture, true));
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="relative">
      {/* Floating Music Control Pill */}
      <button
        onClick={toggleMute}
        title={isMuted ? "Unmute Music" : "Mute Music"}
        className="
          fixed top-4 right-4 z-50
          bg-white/80 hover:bg-white
          backdrop-blur-md p-2.5 rounded-full
          shadow-md border border-pink-200
          text-pink-600 text-lg
          transition-all duration-300
          hover:scale-110 active:scale-95 cursor-pointer
        "
      >
        {isMuted ? "🔇" : "🎵"}
      </button>

      {step === 1 && <Welcome nextStep={nextStep} />}
      {step === 2 && <BalloonCompo nextStep={nextStep} />}
      {step === 3 && <Candle nextStep={nextStep} />}
      {step === 4 && <Bouquet nextStep={nextStep} />}
      {step === 5 && <MomentsSlider nextStep={nextStep} />}
      {step === 6 && <Envelope nextStep={nextStep} />}
      {step === 7 && <GiftBox nextStep={nextStep} />}
      {step === 8 && <FinalCelebration />}
    </div>
  );
}

export default BirthdaySurprise;
