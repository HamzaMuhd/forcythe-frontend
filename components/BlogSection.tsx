"use client";
import React from "react";
import { blogs } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import TextAnimation from "./ui/text-generate-effect";

const BlogSection = () => {
  return (
    <div className="px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28 my-10 lg:mb-24">
      <div className="font-sans flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div>
          <TextAnimation
            text="Read our articles, news, and product blog"
            className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6"
          />
        </div>
        <div className="relative w-fit">
          <Button text="Visit Blog" showIcon />
        </div>
      </div>

      <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-500 hover:border-2 hover:border-[#064386]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-60 sm:h-56 relative mb-6">
              <Image
                src={blog.imgSrc}
                alt={blog.title}
                width={600}
                height={240}
                className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105 object-cover"
              />
            </div>
            <div className="pl-5 relative">
              <TextAnimation
                text={blog.category}
                className="text-lg font-semibold mb-1"
              />
              <div className="text-base text-gray-500 flex items-center mb-4">
                <span>{blog.author}</span>
                <div className="h-2 w-2 rounded-full bg-gray-500 mx-2"></div>
                <span>{blog.date}</span>
              </div>
              <TextAnimation
                text={blog.title}
                className="text-xl md:text-2xl font-semibold line-clamp-2"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
