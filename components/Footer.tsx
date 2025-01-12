"use client";

import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-secondaryBackground   text-white section-padding py-10 px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28">
      {/* Main Footer Content */}
      <div className="lg:grid lg:grid-cols-3 gap-10 my-10">
        {/* Subscription Section */}
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="grid grid-cols-4 w-full">
            <input
              type="email"
              placeholder="Your Email Address"
              className="font-sans col-span-3 py-3 px-4 text-sm bg-transparent border border-white rounded-s-full placeholder:text-[#79767D] outline-none"
            />
            <button className="font-sans py-3 text-sm font-medium bg-white text-black hover:bg-[#064386] hover:text-white rounded-e-full border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div className="w-5 h-5 flex items-center justify-center border-2 border-white rounded-full cursor-pointer">
              <input type="checkbox" id="agreement" name="agreement" className="hidden" />
            </div>
            <label htmlFor="agreement" className="font-sans text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>

        {/* About and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10">
          {/* About */}
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <Logo width={130} height={9} className="b-5 md:mb-8"/>
            <p className="font-sans text-base text-darkGrey font-normal leading">
              We are the growth company for businesses looking to scale. We are dedicated to
              transforming businesses with bespoke digital solutions that drive growth.
            </p>
            {/* Social Media Links */}
            <div className="mt-10 hidden md:flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center border-[1px] border-textColorFooter rounded-full cursor-pointer"
                >
                  <Image src={link.icon} alt={link.alt} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:pl-10">
            <h3 className="font-sans mb-8 text-2xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-base font-medium text-textColorFooter"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Social Media Links */}
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center border-[1px] border-textColorFooter rounded-full cursor-pointer"
                >
                  <Image src={link.icon} alt={link.alt} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-[1px] border-textColorFooter">
        <p className="font-sans text-sm text-textColorFooter text-center md:text-left mt-5">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
