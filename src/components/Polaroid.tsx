import { motion } from "motion/react";
import avatarImg from "@/assets/avatar.png";

/**
 * Animated profile card — adapted from "Animated Profile Card" by Ravi Katiyar
 * on 21st.dev, wrapped in a glass "Shine Border" treatment.
 * https://21st.dev/@ravikatiyar162/components/animated-profile-card
 */
export default function Polaroid() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-fit"
    >
      {/* Sticker */}
      <motion.div
        initial={{ opacity: 0, y: -8, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ delay: 0.25, type: "spring", stiffness: 220, damping: 14 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 cursor-default rounded-full border border-foreground/10 bg-background/90 px-3 py-1 shadow-[0_6px_20px_-6px_rgba(139,92,246,0.6)] backdrop-blur-md ring-1 ring-foreground/5 whitespace-nowrap"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        <span className="text-lg leading-none text-foreground">Hey, I'm Dhruv</span>
        <motion.span
          className="ml-1 inline-block"
          animate={{ rotate: [0, 14, -10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
        >
          👋
        </motion.span>
      </motion.div>

      {/* Photo */}
      <img
        src={avatarImg}
        alt="Dhruv Patel"
        width={640}
        height={640}
        className="h-40 w-40 rounded-full border border-foreground/10 object-cover object-top sm:h-48 sm:w-48"
      />
    </motion.div>
  );
}
