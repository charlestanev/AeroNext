import React from "react";
import Image from "next/image";
import ArroRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import newLogo from "@/assets/new-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-gradient-to-b from-white/90 to-white/70 shadow-md">
      {/* Top Notification Bar */}
      <div className="flex justify-center items-center py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm gap-3">
        <p className="text-white/70 hidden md:block">
          🚀 Boost your business with our SaaS solution!
        </p>
        <div className="inline-flex gap-2 items-center font-medium cursor-pointer hover:opacity-80 transition">
          <p>Get started for free</p>
          <ArroRight className="h-4 w-4 animate-pulse" />
        </div>
      </div>

      {/* Main Header Section */}
      <div className="py-5">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <Image src={newLogo} alt="logo" height={50} width={50} className="hover:scale-105 transition-transform" />

            {/* Mobile Menu Icon */}
            <MenuIcon className="h-6 w-6 text-gray-700 md:hidden cursor-pointer" />

            {/* Navigation */}
            <nav className="hidden md:flex gap-8 text-gray-900 font-medium">
              <a href="#" className="hover:text-indigo-600 transition">About</a>
              <a href="#" className="hover:text-indigo-600 transition">Features</a>
              <a href="#" className="hover:text-indigo-600 transition">Customers</a>
              <a href="#" className="hover:text-indigo-600 transition">Updates</a>
              <a href="#" className="hover:text-indigo-600 transition">Help</a>
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
