import Image from "next/image";
import React from "react";
import { ButtonBorder } from "./moving-border";
import TextAnimation from "./text-generate-effect";


interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="relative flex items-center flex-col gap-5 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
      <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
        <ButtonBorder>
          <div className="text-left font-sans w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey transition duration-300">
            <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
              <Image
                src="/layers-three.svg"
                alt={title}
                width={30}
                height={30}
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Adding text animation for the title */}
            <h4 className="text-2xl font-medium mb-5">
              <TextAnimation text={title} />
            </h4>
            {/* Adding text animation for the description */}
            <p className="mb-0 text-darkGrey text-[17.5px]">
              <TextAnimation text={description} />
            </p>
          </div>
        </ButtonBorder>
      </div>
      <div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          background:
            "radial-gradient(17.2724% 44.2316% at 8.2% 58.2%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></div>
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
    </div>
  );
};

export default Card;
