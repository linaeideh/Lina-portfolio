"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap, Briefcase, Heart } from "lucide-react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const journeyLinks = [
    { name: "Education", id: "education", icon: <GraduationCap size={18} /> },
    { name: "Internships", id: "internships", icon: <Briefcase size={18} /> },
    { name: "Volunteering", id: "volunteering", icon: <Heart size={18} /> },
  ];

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push(`/#${to}`);
    }
  };

  // Helper for scroll links logic
  const NavItem = ({ to, label, isScroll = true }: { to: string, label: string, isScroll?: boolean }) => {
    if (pathname === "/" && isScroll) {
      return (
        <ScrollLink 
          to={to} 
          smooth={true} 
          duration={500} 
          spy={true}
          activeClass="text-theme-accent"
          className="cursor-pointer text-sm font-black tracking-wide text-theme-primary transition-colors hover:text-theme-accent"
        >
          {label}
        </ScrollLink>
      );
    }
    return (
      <Link 
        href={isScroll ? `/#${to}` : to} 
        className="text-sm font-black tracking-wide text-theme-primary transition-colors hover:text-theme-accent"
      >
        {label}
      </Link>
    );
  };

  return (
    <div className='glass text-theme-primary fixed w-full top-0 z-[100]'>
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href="/" className="cursor-pointer" aria-label="Go to Homepage">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-8 items-center'>
            <li>
              <Link href='/' className='text-sm font-black tracking-wide text-theme-primary transition-colors hover:text-theme-accent'>
                Home
              </Link>
            </li>

            <li className='group transition-all'>
              <NavItem to="About me" label="About me" />
            </li>

            {/* My Journey Dropdown */}
            <li 
              className='relative'
              onMouseEnter={() => setIsJourneyOpen(true)}
              onMouseLeave={() => setIsJourneyOpen(false)}
            >
              <Link href="/about" className="text-sm font-black tracking-wide text-theme-primary transition-colors hover:text-theme-accent flex items-center gap-1">
                My Journey <ChevronDown size={14} className={`transition-transform duration-300 ${isJourneyOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              <AnimatePresence>
                {isJourneyOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 glass rounded-2xl border border-theme-primary overflow-hidden shadow-2xl py-2"
                  >
                    {journeyLinks.map((link) => (
                      <Link 
                        key={link.id} 
                        href={`/about#${link.id}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-theme-tertiary transition-colors text-sm font-bold text-theme-secondary hover:text-theme-accent"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <NavItem to="project" label="Projects" />
            </li>

            <li>
              <NavItem to="contact" label="Contact" />
            </li>
          </ul>

          {/* Theme Toggle & Mobile Menu */}
          <div className='flex items-center gap-4'>
            <ThemeToggle />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden text-2xl focus:outline-none hover:text-theme-accent transition-colors'
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className='md:hidden overflow-hidden glass border-t border-theme-primary flex flex-col'
            >
              <Link href='/' onClick={() => setIsOpen(false)} className='text-lg font-black block py-4 px-6 hover:text-theme-accent transition-colors border-b border-theme-primary/10'>Home</Link>
              <Link href='/#About me' onClick={() => setIsOpen(false)} className='text-lg font-black block py-4 px-6 hover:text-theme-accent transition-colors border-b border-theme-primary/10'>About me</Link>
              <Link href='/about' onClick={() => setIsOpen(false)} className='text-lg font-black block py-4 px-6 hover:text-theme-accent transition-colors border-b border-theme-primary/10'>My Journey</Link>
              <Link href='/#project' onClick={() => setIsOpen(false)} className='text-lg font-black block py-4 px-6 hover:text-theme-accent transition-colors border-b border-theme-primary/10'>Projects</Link>
              <Link href='/#contact' onClick={() => setIsOpen(false)} className='text-lg font-black block py-4 px-6 hover:text-theme-accent transition-colors'>Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
