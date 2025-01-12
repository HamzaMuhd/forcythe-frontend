"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";
import Button from "./Button";
import Logo from "./Logo";
import { ButtonBorder } from "./ui/moving-border";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar w-full fixed gap-10 top-0 left-0 py-7 px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28 flex justify-between items-center z-30 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-20">
        <Logo width={140} height={31} />
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-white hover:text-white transition duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Call-to-action Button */}
      <div className="hidden md:block">
        <Button text="Book a Call"/>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="menuBtn md:hidden bg-white bg-opacity-10 p-2 rounded-md"
      >
        <Image
          src="/menu.svg"
          alt="menu"
          width={20}
          height={20}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        
        <div className="absolute top-20 right-6 w-60 p-6  from-[#071626] via-[#071626] to-transparent rounded-2xl flex flex-col gap-4 z-40 border-0 transition duration-500">
          {/* Radial Gradient Background */}
          <ButtonBorder>
          <div className="absolute inset-0 z-0 rounded-[inherit] bg-gradient-radial from-[#3275f8] via-transparent to-transparent filter blur-sm"></div>
          
          {/* Menu Items */}
          <div className="z-10 text-white w-full">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full py-2.5">
                  <Link
                    href={link.href}
                    className="w-full text-base py-3 font-sans text-white hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Overlay background */}
          <div className="absolute inset-0 bg-black z-1 rounded-[inherit] opacity-30"></div>
          </ButtonBorder>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
