"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='glass text-theme-primary fixed w-full top-0 z-100'>
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href="/" className="cursor-pointer" aria-label="Go to Homepage">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-10 items-center'>
            <li className='group transition-all'>
              <Link
                href='/'
                className='flex flex-col items-center cursor-pointer group-hover:text-indigo-400 transition-colors'
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className='text-sm font-semibold tracking-wide'>Home</span>
                <span className='h-0.5 w-0 group-hover:w-full bg-indigo-400 transition-all duration-300'></span>
              </Link>
            </li>

            <li className='group transition-all'>
              <ScrollLink
                to='About me'
                smooth={true}
                duration={500}
                className='flex flex-col items-center cursor-pointer group-hover:text-indigo-400 transition-colors'
              >
                <span className='text-sm font-semibold tracking-wide'>About me</span>
                <span className='h-0.5 w-0 group-hover:w-full bg-indigo-400 transition-all duration-300'></span>
              </ScrollLink>
            </li>

            <li className='group transition-all'>
              <ScrollLink
                to='project'
                smooth={true}
                duration={500}
                className='flex flex-col items-center cursor-pointer group-hover:text-indigo-400 transition-colors'
              >
                <span className='text-sm font-semibold tracking-wide'>Project</span>
                <span className='h-0.5 w-0 group-hover:w-full bg-indigo-400 transition-all duration-300'></span>
              </ScrollLink>
            </li>

            <li className='group transition-all'>
              <ScrollLink
                to='contact'
                smooth={true}
                duration={500}
                className='flex flex-col items-center cursor-pointer group-hover:text-indigo-400 transition-colors'
              >
                <span className='text-sm font-semibold tracking-wide'>Contact</span>
                <span className='h-0.5 w-0 group-hover:w-full bg-indigo-400 transition-all duration-300'></span>
              </ScrollLink>
            </li>
          </ul>

          {/* Theme Toggle & Mobile Menu */}
          <div className='flex items-center gap-4'>
            <ThemeToggle />
            
            {/* Mobile Menu Icon */}
            <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-2xl focus:outline-none hover:text-indigo-400 transition-colors'
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className='flex flex-col items-center space-y-6 mt-6 pb-6 md:hidden glass border-t border-theme-primary rounded-b-2xl animate-fade-in'>
            <li className='w-full text-center'>
              <Link
                href='/'
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className='text-base font-semibold block py-2 hover:text-indigo-400 transition-colors'
              >
                Home
              </Link>
            </li>
            <li className='w-full text-center'>
              <ScrollLink
                to='About me'
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className='text-base font-semibold block py-2 hover:text-indigo-400 transition-colors cursor-pointer'
              >
                About me
              </ScrollLink>
            </li>
            <li className='w-full text-center'>
              <ScrollLink
                to='project'
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className='text-base font-semibold block py-2 hover:text-indigo-400 transition-colors cursor-pointer'
              >
                Project
              </ScrollLink>
            </li>
            <li className='w-full text-center'>
              <ScrollLink
                to='contact'
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className='text-base font-semibold block py-2 hover:text-indigo-400 transition-colors cursor-pointer'
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
