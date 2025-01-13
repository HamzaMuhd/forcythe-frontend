'use client';

import { imagesLinks } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import TextAnimation from './ui/text-generate-effect';

const InfiniteScroll = () => {
  return (
    <div>
      <div className="min-h-[60px]">
        <p className="font-sans text-white text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
          <TextAnimation text="Success in" />{' '}
          <span className="text-accent">
            <TextAnimation text="Motion" />
          </span>{' '}
          <TextAnimation text="– Our clients' journey" />
        </p>
      </div>

      {/* Top scroll container */}
      <div className="relative overflow-hidden z-0">
        <motion.div
          className="flex gap-5"
          animate={{ x: ['0%', '-100%'] }} // Move to the left
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30, // Adjust speed as needed
              ease: 'linear',
            },
          }}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {/* Duplicate images for seamless loop */}
          {[...imagesLinks, ...imagesLinks].map((src, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[340px] flex-shrink-0"
            >
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <Image
                alt={src.alt}
                className="overflow-hidden w-full h-full"
                src={src.icon}
                width={300}
                height={340}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll container */}
      <div className="relative mt-10 overflow-hidden z-0">
        <motion.div
          className="flex gap-5"
          animate={{ x: ['-100%', '0%'] }} // Move to the right
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30, // Adjust speed as needed
              ease: 'linear',
            },
          }}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {/* Duplicate images for seamless loop */}
          {[...imagesLinks, ...imagesLinks].map((src, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[340px] flex-shrink-0"
            >
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <Image
                alt={src.alt}
                className="overflow-hidden w-full h-full"
                src={src.icon}
                width={300}
                height={340}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
