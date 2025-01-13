'use client';

import { useState } from 'react';
import Image from 'next/image';
import { stories } from '@/constants';
import TextAnimation from './ui/text-generate-effect';

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-10 px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28 bg-primaryBackground text-white">
      {/* Heading */}
      <div className="font-sans text-center mb-12">
        <h2 className="font-sans text-white text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto">
          <TextAnimation text="Discover the" />{' '}
          <span className="text-[#60a6e7]">
            <TextAnimation text="transformative" />
          </span>{' '}
          <TextAnimation text="stories of startups that scaled new heights with us" />
        </h2>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="flex justify-between items-center space-x-0 border border-[#06438C] rounded-full p-2 bg-[#0A1C2E]">
          {stories.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 flex items-center justify-center px-3 py-2 rounded-full transition-all duration-200 ${
                activeTab === index
                  ? 'bg-[#1F3B5B] text-white shadow-md'
                  : 'bg-transparent text-gray-300 hover:text-white'
              }`}
            >
              <Image
                src={story.image}
                alt={story.name}
                width={50}
                height={50}
                className="h-8"
              />
              {story.name === 'Starks' && (
                <span className="ml-2 font-medium text-sm">
                  <TextAnimation text={story.name} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Story Content */}
      <div className="font-sans mt-10 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col md:flex-row p-5 sm:p-7 bg-[#0C2645] mx-auto shadow-lg">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">
            <TextAnimation text={stories[activeTab].title} />
          </h3>
          <p className="text-sm leading-6 text-gray-300 mb-4">
            <TextAnimation text={stories[activeTab].content} />
          </p>
          <p className="text-sm font-semibold">
            <TextAnimation text={stories[activeTab].author} />
          </p>
        </div>
        <div className="flex-1 mt-5 md:mt-0 md:ml-5">
          <Image
            src={stories[activeTab].imageUrl}
            alt={stories[activeTab].author}
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
