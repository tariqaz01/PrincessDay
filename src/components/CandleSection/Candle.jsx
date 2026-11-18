import { useState } from "react";
import { motion } from "framer-motion";

import bouquet from "../../assets/bouquet.webp";
import PartyPopper from "../Common/PartyPopper";

// ==========================================
// ROYAL TIARA / PRINCESS CROWN COMPONENT
// ==========================================
function RoyalTiara({ size = "w-36 sm:w-44 md:w-48" }) {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} h-auto drop-shadow-xl`}
    >
      <defs>
        {/* Royal 24K Gold Gradient */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7B2" />
          <stop offset="25%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* Rose Ruby Jewel Gradient */}
        <linearGradient id="roseGemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FECDD3" />
          <stop offset="40%" stopColor="#FB7185" />
          <stop offset="70%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>

        {/* Diamond Sparkle Gradient */}
        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Soft Golden Shimmer Filter */}
        <filter id="tiaraShimmer" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Base Arch Band */}
      <path
        d="M25 125 C 65 138, 135 138, 175 125 C 165 115, 135 124, 100 124 C 65 124, 35 115, 25 125 Z"
        fill="url(#goldGrad)"
        stroke="#92400E"
        strokeWidth="1.5"
      />

      {/* Band Pearls / Diamonds */}
      {[40, 60, 80, 100, 120, 140, 160].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={
            cx === 100
              ? 124
              : cx === 80 || cx === 120
              ? 125
              : cx === 60 || cx === 140
              ? 126
              : 127
          }
          r="3"
          fill="url(#diamondGrad)"
          stroke="#0284C7"
          strokeWidth="0.5"
        />
      ))}

      {/* Tiara Peaks & Filigree Arches */}
      <path
        d="M25 125 
           Q 20 85, 32 75 
           Q 44 95, 55 90 
           Q 60 55, 75 48 
           Q 85 75, 95 65 
           Q 100 22, 100 22 
           Q 105 22, 105 65 
           Q 115 75, 125 48 
           Q 140 55, 145 90 
           Q 156 95, 168 75 
           Q 180 85, 175 125
           C 135 135, 65 135, 25 125 Z"
        fill="url(#goldGrad)"
        stroke="#78350F"
        strokeWidth="2"
      />

      {/* Heart-Shaped Center Royal Gemstone */}
      <path
        d="M100 42 
           C 88 56, 75 78, 100 102 
           C 125 78, 112 56, 100 42 Z"
        fill="url(#roseGemGrad)"
        stroke="#FFF"
        strokeWidth="1.5"
        filter="url(#tiaraShimmer)"
      />

      {/* Side Teardrop Jewels */}
      <circle
        cx="75"
        cy="52"
        r="5.5"
        fill="url(#diamondGrad)"
        stroke="#0284C7"
        strokeWidth="0.8"
      />
      <circle
        cx="125"
        cy="52"
        r="5.5"
        fill="url(#diamondGrad)"
        stroke="#0284C7"
        strokeWidth="0.8"
      />
      <circle
        cx="32"
        cy="76"
        r="4.5"
        fill="url(#roseGemGrad)"
        stroke="#FFF"
        strokeWidth="0.6"
      />
      <circle
        cx="168"
        cy="76"
        r="4.5"
        fill="url(#roseGemGrad)"
        stroke="#FFF"
        strokeWidth="0.6"
      />

      {/* Top Pinnacle Diamond */}
      <circle
        cx="100"
        cy="20"
        r="6.5"
        fill="url(#diamondGrad)"
        stroke="#38BDF8"
        strokeWidth="1.2"
      />
      <circle cx="75" cy="46" r="3" fill="#FEF08A" />
      <circle cx="125" cy="46" r="3" fill="#FEF08A" />
      <circle cx="32" cy="71" r="2.5" fill="#FEF08A" />
      <circle cx="168" cy="71" r="2.5" fill="#FEF08A" />

      {/* Diamond Sparkle Star on Top Jewel */}
      <path
        d="M100 10 L100 30 M90 20 L110 20"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Candle({ nextStep }) {
  const [isCrowned, setIsCrowned] = useState(false);

  // Floating sparkle particles around the crown
  const sparkles = [
    { top: "-14%", left: "12%", delay: 0.1, size: "text-2xl", icon: "✨" },
    { top: "-8%", right: "12%", delay: 0.4, size: "text-xl", icon: "💖" },
    { bottom: "8%", left: "-8%", delay: 0.7, size: "text-lg", icon: "⭐" },
    { bottom: "12%", right: "-8%", delay: 0.3, size: "text-2xl", icon: "✨" },
    { top: "35%", left: "-14%", delay: 0.9, size: "text-xl", icon: "🌸" },
    { top: "35%", right: "-14%", delay: 0.6, size: "text-xl", icon: "💫" },
  ];

  // ==========================================
  // HANDLE CONTINUE
  // ==========================================
  const handleContinue = () => {
    nextStep();
  };

  // ==========================================
  // CROWN THE PRINCESS (TAP ACTION)
  // ==========================================
  const crownPrincess = () => {
    if (isCrowned) return;
    setIsCrowned(true);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        px-5
        text-center
        relative
        overflow-hidden
      "
    >
      {!isCrowned && (
        <>
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.03, 1],
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              scale: {
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              },
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-romantic
              text-pink-600
              mb-3
              tracking-wide
              drop-shadow-sm
            "
          >
            Happy Princess Day 👑
          </motion.h1>

          {/* Sweet, Romantic & Respectful Message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              text-base
              sm:text-lg
              md:text-xl
              text-pink-900/70
              font-medium
              max-w-md
              mx-auto
              mb-8
              leading-relaxed
            "
          >
            A crown for the sweetest soul whose kindness, grace, and pure heart
            make my whole universe magical ✨
          </motion.p>
        </>
      )}

      {!isCrowned ? (
        /* ======================================
           INTERACTIVE ROYAL TIARA (BEFORE TAP)
        ====================================== */
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: {
              repeat: Infinity,
              duration: 2.4,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={crownPrincess}
          className="
            cursor-pointer
            flex
            flex-col
            items-center
            relative
            py-4
          "
        >
          {/* Floating Sparkles & Hearts around Crown */}
          {sparkles.map((item, idx) => (
            <motion.span
              key={idx}
              animate={{
                scale: [0.75, 1.25, 0.75],
                opacity: [0.4, 1, 0.4],
                y: [0, -8, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className={`absolute ${item.size} pointer-events-none select-none`}
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
            >
              {item.icon}
            </motion.span>
          ))}

          {/* Shimmering Ambient Glow behind Tiara */}
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(251,191,36,0.35)) drop-shadow(0 0 20px rgba(244,114,182,0.3))",
                "drop-shadow(0 0 22px rgba(251,191,36,0.75)) drop-shadow(0 0 35px rgba(244,114,182,0.55))",
                "drop-shadow(0 0 10px rgba(251,191,36,0.35)) drop-shadow(0 0 20px rgba(244,114,182,0.3))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <RoyalTiara size="w-36 sm:w-44 md:w-52" />
          </motion.div>

          {/* Cute & Respectful Interactive Prompt */}
          <motion.p
            animate={{
              opacity: [0.75, 1, 0.75],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-6
              text-lg
              sm:text-xl
              font-cursive
              text-pink-600
              font-semibold
              tracking-wide
            "
          >
            ✨ Tap the crown to wear it, My Princess 👑 ✨
          </motion.p>
          <p className="text-xs sm:text-sm text-pink-400/80 mt-1 italic">
            Close your eyes and make a special royal wish
          </p>
        </motion.div>
      ) : (
        <>
          {/* ======================================
             CELEBRATION PARTY POPPERS
          ====================================== */}
          <div className="fixed top-5 left-5 z-50">
            <PartyPopper position="left" />
          </div>

          <div className="fixed bottom-5 right-5 z-50">
            <PartyPopper position="right" />
          </div>

          {/* ======================================
             CELEBRATION CONTENT (CROWNED MOMENT)
          ====================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="
              flex
              flex-col
              items-center
              relative
              z-10
              max-w-xl
              mx-auto
            "
          >
            {/* Centerpiece: Crown Floating Above Romantic Bouquet */}
            <div className="relative flex flex-col items-center">
              {/* Floating Crown above Bouquet */}
              <motion.div
                initial={{ opacity: 0, y: -40, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  scale: [0.6, 1.1, 1],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.7, ease: "easeOut" },
                  y: {
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut",
                    delay: 0.7,
                  },
                }}
                className="
                  z-20
                  -mb-8
                  filter
                  drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]
                "
              >
                <RoyalTiara size="w-24 sm:w-28 md:w-32" />
              </motion.div>

              {/* Romantic Rose Bouquet */}
              <motion.img
                src={bouquet}
                alt="Princess Rose Bouquet"
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: [0.6, 1.05, 1],
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="
                  w-40
                  sm:w-48
                  md:w-52
                  mx-auto
                  drop-shadow-2xl
                "
              />
            </div>

            {/* Celebration Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-romantic
                text-pink-600
                mt-4
                tracking-wide
                drop-shadow-sm
              "
            >
              Happy Princess Day, Amna Gully  👑💖
            </motion.h2>

            {/* Commemorative Date Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="
                text-xs
                sm:text-sm
                font-semibold
                text-pink-500
                tracking-widest
                uppercase
                mt-1
              "
            >
              ✨ 18 November 2026 • Royal Princess Day ✨
            </motion.p>

            {/* Romantic, Cute & Respectful Love Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="
                text-base
                sm:text-lg
                text-pink-800/85
                font-medium
                mt-3
                px-4
                leading-relaxed
                max-w-lg
              "
            >
              You don’t just hold a crown—you rule my heart with your innocence,
              kindness, and grace. May your smile forever shine like the stars,
              and may your life always be blessed with the pure happiness and
              endless love you deserve. 🌸🤍
            </motion.p>

            {/* ======================================
               CONTINUE BUTTON
            ====================================== */}
            <motion.button
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleContinue}
              className="
                mt-6
                bg-pink-500
                hover:bg-pink-600
                text-white
                text-sm
                sm:text-base
                font-semibold
                px-8
                py-2.5
                rounded-full
                shadow-lg
                hover:shadow-pink-300/50
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Continue →
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Candle;
