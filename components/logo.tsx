import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface LogoProps {
    width: number,
    height: number,
    className?: string,
}
const logo = ({
    width,
    height,
    className,
}: LogoProps) => {
  return (
    <Link href="/">
       <Image
    src="forcythe-logo.svg"
    alt="Forcythe Logo"
    width={width}
    height={height}
    className={className}
    priority
  /> 
    </Link>
    
  )
}

export default logo