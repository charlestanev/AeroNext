"use client"; // Ensures this is a Client Component

import Image from "next/image";
import newLogo from "@/assets/new-logo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-12">
      <div className="container mx-auto text-center px-6">
        {/* Logo with hover effect */}
        <div className="inline-block relative hover:scale-105 transition-transform">
          <Image src={newLogo} height={40} alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6 text-gray-300">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Customers</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Help</a>
          <a href="#" className="hover:text-white transition">Careers</a>
        </nav>

        {/* Social Media Icons with Real Links */}
        <div className="flex justify-center gap-5 mt-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition">
            <SocialX className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition">
            <SocialInsta className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition">
            <SocialLinkedIn className="h-6 w-6" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:scale-110 transition">
            <SocialPin className="h-6 w-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:scale-110 transition">
            <SocialYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Notice with Dynamic Year */}
        <p className="mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
