"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextAnimation from "./text-generate-effect";

interface BlogCardProps {
  blog: {
    imgSrc: string;
    title: string;
    category: string;
    author: string;
    date: string;
    link: string;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <motion.a
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
        <TextAnimation text={blog.category} className="text-lg font-semibold mb-1" />
        <div className="text-base text-gray-500 flex items-center mb-4">
          <span>{blog.author}</span>
          <div className="h-2 w-2 rounded-full bg-gray-500 mx-2"></div>
          <span>{blog.date}</span>
        </div>
        <TextAnimation text={blog.title} className="text-xl md:text-2xl font-semibold line-clamp-2" />
      </div>
    </motion.a>
  );
};

export default BlogCard;
