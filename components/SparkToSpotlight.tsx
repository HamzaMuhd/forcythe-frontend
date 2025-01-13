'use client';

import { stepsContent } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import TextAnimation from './ui/text-generate-effect';

type Step = keyof typeof stepsContent;

const SparkToSpotlight = () => {
  const [activeStep, setActiveStep] = useState<Step>('Idea');
  const steps = Object.keys(stepsContent) as Step[];

  return (
    <section className="font-sans px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 bg-primaryBackground text-white">
      {/* Header Section */}
      <div className="text-left max-w-[45rem] mb-12">
        <h2 className="text-[2.4rem] leading-[3rem] sm:text-[2.6rem] sm:leading-[3.2rem] lg:text-[2.8rem] lg:leading-[3.4rem] font-semibold">
          <TextAnimation text="From" />{' '}
          <span className="text-[#60a6e7] capitalize">
            <TextAnimation text="Spark" />
          </span>{' '}
          <TextAnimation text="to" />{' '}
          <span className="text-[#60a6e7] capitalize">
            <TextAnimation text="Spotlight:" />
          </span>{' '}
          <TextAnimation text="we take you every step of the way to success." />
        </h2>
      </div>

      {/* Main Content: Tabs and Image */}
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Section: Tabs and Content */}
        <div className="flex-1">
          {/* Steps Navigation */}
          <div className="mb-8">
            <div className="flex items-center justify-start p-1 rounded-full border border-[#60a6e7] bg-transparent w-full max-w-[500px]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center text-base font-medium cursor-pointer transition-all duration-300 ${
                    activeStep === step
                      ? 'bg-[#60a6e7] text-black rounded-full py-3'
                      : 'text-white py-3'
                  }`}
                  onClick={() => setActiveStep(step)}
                >
                  <TextAnimation text={step} />
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="text-left">
            <h3 className="text-[2rem] sm:text-[2.2rem] font-semibold leading-[2.6rem] mb-4">
              <TextAnimation text={stepsContent[activeStep].title} />
            </h3>
            <p className="text-[#a8b3cf] text-lg leading-7 mb-8">
              <TextAnimation text={stepsContent[activeStep].description} />
            </p>
            {/* CTA Button */}
            <div>
              <Button text="Book a Call" showIcon />
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 mt-10 lg:mt-0">
          <Image
            src={stepsContent[activeStep].image}
            alt={`${activeStep} Illustration`}
            width={500}
            height={500}
            className="w-full max-w-[400px] h-auto object-contain mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SparkToSpotlight;
