"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  additionalClassName = "",
}: {
  words: string;
  additionalClassName?: string; // Make it optional with default value
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate, wordsArray]);

  return (
    <motion.div ref={scope} className={`inline-block ${additionalClassName}`}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0 inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};
