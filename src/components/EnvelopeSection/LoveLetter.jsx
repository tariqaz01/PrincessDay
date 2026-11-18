import { motion } from "framer-motion";
import teddy from "../../assets/teddy.webp";

function LoveLetter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="
        relative

        bg-orange-200

        w-[92vw]
        max-w-sm

        sm:max-w-md

        md:w-[480px]
        md:max-w-none

        lg:w-[520px]
        xl:w-[550px]

        h-[60vh]
        sm:h-[62vh]
        md:h-[70vh]
        lg:h-[72vh]
        xl:h-[74vh]

        max-h-[720px]

        rounded-3xl
        shadow-xl

        p-4
        sm:p-5
        md:p-6

        flex
        flex-col
      "
    >
      {/* ======================================
          HEADING
      ====================================== */}

      <h1
        className="
          shrink-0

          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl

          font-bold

          text-pink-600
          text-center

          mb-3
          md:mb-4
        "
      >
        A Message For Amna Gully ❤️
      </h1>

      {/* ======================================
          SCROLLABLE LETTER
      ====================================== */}

      <div
        className="
          custom-scrollbar

          flex-1
          min-h-0

          overflow-y-auto

          px-1
          pr-2
          md:px-3

          pb-12
          md:pb-16

          text-gray-800

          text-base
          sm:text-lg
          md:text-xl

          leading-7
          md:leading-8

          text-center
          font-cursive
        "
      >
        <div className="text-right text-xs sm:text-sm font-sans font-medium text-pink-600/90 mb-3 tracking-wider">
          📅 18 November 2026
        </div>

        <p>
          Dear Amna Gully,
          <br />
          <br />

          Happy Princess Day to my favorite person! 👑
          <br />
          <br />

          Thank you for filling my life with happiness just by being in it.
          <br />
          <br />

          You deserve every bit of love, magic, and success in this world.
          <br />
          <br />

          Never stop smiling, because it makes everything around you brighter.
          <br />
          <br />

          Thank you for being yourself.
          <br />
          <br />

          Lots of Love ✨
          <br />
          <br />

           ❤️
        </p>
      </div>

      {/* ======================================
          TEDDY BEAR
      ====================================== */}

      <motion.img
        src={teddy}
        alt="Teddy Bear"
        animate={{
          y: [0, -5, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          bottom-3
          right-3

          w-8
          h-8

          sm:w-10
          sm:h-10

          md:w-14
          md:h-14

          lg:w-16
          lg:h-16

          object-contain

          pointer-events-none
          select-none
        "
      />
    </motion.div>
  );
}

export default LoveLetter;