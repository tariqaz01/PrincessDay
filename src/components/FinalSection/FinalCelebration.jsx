import { motion } from "framer-motion";

import teddy from "../../assets/birthday-teddy.webp";

import Confetti from "./Confetti";
import Butterflies from "./Butterflies";
import ReplayButton from "../Common/ReplayButton";

function FinalCelebration() {
  const handleReplay = () => {
    // ReplayButton will perform actual reload
  };

  return (
    <div
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        flex
        justify-center
        items-center
        px-4
        sm:px-5
      "
    >
      {/* Confetti */}
      <Confetti />

      {/* Butterflies */}
      <Butterflies />

      {/* Main Content */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          w-full
          flex
          flex-col
          items-center
          text-center
          mt-3
          sm:mt-6
        "
      >
        {/* ====================================
            TEDDY CARD WITH PRINCESS CROWN
        ==================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            relative
            bg-gradient-to-br
            from-white
            via-pink-50
            to-rose-100
            rounded-[35px]
            border-4
            border-pink-100
            shadow-2xl
            shadow-pink-200
            p-4
            sm:p-5
            md:p-6
            mb-3
          "
        >
          {/* Princess Day Crown Badge floating above characters */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-3.5
              sm:-top-4
              left-1/2
              -translate-x-1/2
              z-20
              inline-flex
              items-center
              justify-center
              gap-1.5
              bg-gradient-to-r
              from-pink-500
              via-rose-500
              to-pink-500
              text-white
              font-bold
              px-4
              py-1
              rounded-full
              shadow-lg
              shadow-pink-300/60
              border-2
              border-white
              whitespace-nowrap
              text-xs
              sm:text-sm
              tracking-wider
              uppercase
            "
          >
            <span>👑</span>
            <span className="drop-shadow-sm font-semibold tracking-wide">Princess Day</span>
            <span>✨</span>
          </motion.div>

          {/* Teddy Movement */}
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={teddy}
              alt="Princess Teddy"
              className="
                w-40
                sm:w-48
                md:w-56
                lg:w-60
                object-contain
              "
            />
          </motion.div>

          {/* ==================================
              PUMPING HEART BADGE
          ================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.25, 1],
            }}
            transition={{
              opacity: {
                duration: 0.4,
                delay: 0.8,
              },
              scale: {
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              top-3
              right-3
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              bg-pink-500
              text-white
              text-lg
              flex
              justify-center
              items-center
              shadow-lg
              shadow-pink-300
            "
          >
            💖
          </motion.div>
        </motion.div>

        {/* ====================================
            MAIN CELEBRATION HEADING
        ==================================== */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-romantic
            font-semibold
            text-pink-600
            tracking-wide
            leading-relaxed
            mb-2
            text-center
            drop-shadow-sm
          "
        >
          LOTS OF LOVE FOR MY PRINCESS Gully 👑💖
        </motion.h1>

        {/* ====================================
            HAPPY PRINCESS DAY TITLE
        ==================================== */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.1,
          }}
          className="
            text-lg
            sm:text-xl
            md:text-2xl
            font-cursive
            font-semibold
            text-pink-500
            mb-1
          "
        >
          Happy Princess Day, Amna Gully! 🌸👑
        </motion.p>

        {/* Date Commemoration Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="
            inline-flex
            items-center
            gap-2
            bg-pink-100/90
            text-pink-600
            px-4
            py-0.5
            rounded-full
            text-xs
            sm:text-sm
            font-semibold
            tracking-wider
            mb-3
            border
            border-pink-200
            shadow-sm
          "
        >
          <span>✨</span>
          <span>18 November 2026</span>
          <span>✨</span>
        </motion.div>

        {/* ====================================
            MESSAGE 1 (Respectful & Cute)
        ==================================== */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.5,
          }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-700
            leading-6
            sm:leading-7
            max-w-md
            px-3
          "
        >
          May your life always be as graceful, beautiful, and radiant as your heart.
        </motion.p>

        {/* ====================================
            MESSAGE 2 (Romantic & Sincere)
        ==================================== */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.9,
          }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-pink-700/90
            font-medium
            mt-1
            mb-4
            leading-6
            sm:leading-7
            max-w-md
            px-3
          "
        >
          You will always be the purest and most cherished princess in my universe. 🤍✨
        </motion.p>

        {/* ====================================
            REPLAY BUTTON
        ==================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 2.3,
          }}
        >
          <ReplayButton onBeforeReplay={handleReplay} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FinalCelebration;
