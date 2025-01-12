import React from 'react';
import Image from "next/image";


interface ButtonProps {
  text: string; 
  showIcon?: boolean; 
  defaultIcon?: string;
  hoverIcon?: string; 
  onClick?: () => void; 
}

const Button = ({
  text,
  showIcon = false,
  defaultIcon = '/play.svg',
  hoverIcon = '/play-white.svg',
  onClick,
}: ButtonProps) => {
  return (
    <div className="relative w-fit group">
      <button
        onClick={onClick}
        className="font-sans action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                   bg-white text-black text-base relative z-10 font-semibold hover:bg-[#064386] hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
      >
        {text}
        {showIcon && (
          <div >
            {/* Default Icon */}
            <Image
              src={defaultIcon}
              alt="play"
              width={10}
              height={10}
              className="group-hover:hidden"
              loading="lazy"
              decoding="async"
              style={{ color: 'transparent' }}
            />
            {/* Hover Icon */}
            <Image
              src={hoverIcon}
              alt="play hover"
              width={10}
              height={10}
              className="hidden group-hover:block"
              loading="lazy"
              decoding="async"
              style={{ color: 'transparent' }}
            />
          </div>
        )}
      </button>

      <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
    </div>
  );
}

export default Button;
