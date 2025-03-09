"use client";

import { motion } from "motion/react";


export default function HorizontalAutoScroll() {
  return (
    <div className="overflow-hidden w-28 relative">
      <motion.div
        className="left-0 top-0 flex space-x-4 w-max"
        animate={{ x: ["0%", "-50%"] }} // Moves left infinitely
        transition={{
          ease: "linear",
          duration: 10, // Adjust speed
          repeat: Infinity,
        }}
      >
        {/* Original Items */}
        {[1, 2, 3, 4, 5,6].map((item) => (
          <div
            key={item}
            className="w-64 h-40 bg-blue-500 flex items-center justify-center rounded-xl"
          >
            Item {item}
          </div>
        ))}
        {/* Duplicate Items (For Seamless Loop) */}
        {[1, 2, 3, 4, 5,6].map((item) => (
          <div
            key={`duplicate-${item}`}
            className="w-64 h-40 bg-blue-500 flex items-center justify-center rounded-xl"
          >
            Item {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}