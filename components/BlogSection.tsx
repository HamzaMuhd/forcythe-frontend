"use client";
import React from "react";
import { blogs } from "@/constants";
import Button from "@/components/Button";
import TextAnimation from "./ui/text-generate-effect";
import BlogCard from "./ui/BlogCard";

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
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
