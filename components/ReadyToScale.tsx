"use client";

import React from "react";
import Button from "./Button";
import TextAnimation from "./ui/text-generate-effect";

const ReadyToScaleSection = () => {
  return (
    <section
      className="section-padding py-10 text-center"
      style={{
        background: "linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)",
      }}
    >
      <div className="max-w-[45rem] mx-auto">
        {/* Heading */}
        <h2 className=" text-white  font-sans text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
          <span className="font-sans text-accent"> <TextAnimation text="Ready to Scale?"/></span>
          <br />
          <TextAnimation text="Join successful brands that chose us as their"/>
            <span className=" font-sans text-accent"> <TextAnimation text="growth accelerator"/> </span>
        </h2>

        {/* Button */}
        <div className="w-fit mx-auto mb-5">
          <Button text="Book a Call"/>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScaleSection;
