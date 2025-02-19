
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative w-32 h-32 mx-auto"
    >
      <div className="absolute inset-0 float">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-sky-500"
        >
          <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.2" />
          <path
            d="M50 10 C 60 30, 80 40, 90 50 C 80 60, 60 70, 50 90 C 40 70, 20 60, 10 50 C 20 40, 40 30, 50 10"
            fill="currentColor"
          />
        </svg>
      </div>
    </motion.div>
  );
};
