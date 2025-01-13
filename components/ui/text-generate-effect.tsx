'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextAnimationProps {
  text: string;
  className?: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, className }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        delay: index * 0.05,
      },
    }),
  };

  return (
    <span className={className} style={{ display: 'inline' }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TextAnimation;
