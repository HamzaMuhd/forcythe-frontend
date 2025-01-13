'use client';

import React from 'react';
import Button from './Button';
import TextAnimation from './ui/text-generate-effect';


const Hero = () => {
  return (
    <section className="w-full px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28 text-left from-[#030516] via-[#071626] to-[#030516] text-white">
      <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
        <div className="items-start max-w-[56rem]">
          <div className="min-h-[180px]">
            <h1 className="font-sans text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
              <TextAnimation
                text="We build"
                className="font-sans text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1]"
              />{' '}
              <span className="text-accent">
                <TextAnimation
                  text="products"
                  className="font-sans text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1]"
                />
              </span>{' '}
              <TextAnimation
                text="that shape a better future"
                className="font-sans text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1]"
              />
            </h1>
          </div>
          <div className="mb-8 max-w-3xl">
            <p className="font-sans text-darkGrey text-base md:text-lg mb-8 leading-7">
              <TextAnimation
                text="We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation."
                className="font-sans text-darkGrey text-base md:text-lg leading-7"
              />
            </p>
          </div>
          <div className="mb-5">
            <Button text="Book a Call" showIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
