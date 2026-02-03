"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/images/About.png";

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-theme-primary text-theme-primary flex items-center justify-center px-8 lg:px-24 py-24 relative overflow-hidden" id="About me" aria-label="About Lina"> 
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-primary/8 rounded-full blur-[100px] -z-10" aria-hidden="true"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image Container */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg group">
            <div className="absolute -inset-2 bg-linear-to-r from-accent-primary to-accent-tertiary rounded-[40px] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true"></div>
            <div className="relative aspect-square rounded-[32px] overflow-hidden border border-theme-primary shadow-2xl">
              <Image
                src={AboutImg}
                alt="Lina - Front-end Developer portrait"
                fill
                sizes="(max-width: 768px) 100vw, 512px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-theme-secondary/40 via-transparent to-transparent" aria-hidden="true"></div>
            </div>

            {/* Decorative boxes */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-primary/12 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-tertiary/10 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left z-10">
          <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-8">
            <span className="w-12 h-0.5 bg-accent-primary rounded-full" aria-hidden="true"></span>
            <span className="text-theme-accent font-bold uppercase tracking-[0.2em] text-sm">My Story</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-[1.2]">
            Hi, I'm <span className="text-theme-primary relative inline-block">
              Lina
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-primary/20 -z-10" aria-hidden="true"></span>
            </span>
          </h2>

          <p className="text-xl text-theme-muted leading-relaxed mb-12 font-medium">
            I'm a front-end developer passionate about crafting <span className="text-theme-accent">responsive, accessible, and interactive</span> web experiences. 
            I focus on clean design, efficient code, and continuous learning to create intuitive user interfaces that engage and inspire.
          </p>

          <Link href="/about">
            <motion.button 
              className="group flex items-center gap-4 px-10 py-5 bg-theme-tertiary/50 hover:bg-theme-tertiary text-theme-primary font-bold rounded-2xl border border-theme-primary transition-all duration-300 mx-auto lg:mx-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Navigate to full About Me page"
            >
              <span className="tracking-wide">Explore My Journey</span>
              <ArrowRight className="text-indigo-400 transition-transform group-hover:translate-x-2" aria-hidden="true" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
