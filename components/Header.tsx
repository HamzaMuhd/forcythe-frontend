import React from 'react';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="min-h-screen md:min-h-screen bg-[url('/header-background.svg')] bg-no-repeat bg-top bg-cover flex">
      <div className="relative z-10 w-full">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
