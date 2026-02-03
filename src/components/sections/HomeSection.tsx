"use client";
import React, { useEffect } from "react";
import { FileText, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const HomeSection: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const textVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className='relative flex items-center justify-center px-6 sm:px-8 lg:px-24 py-16 sm:py-20 lg:py-32 bg-theme-primary text-theme-primary min-h-screen overflow-hidden'
      aria-label="Home introduction"
    >
      {/* Decorative background elements */}
      <div
        className='absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-bl from-violet-600/12 via-fuchsia-600/8 to-transparent rounded-full blur-[150px] -z-10 animate-pulse'
        style={{ animationDuration: "8s" }}
        aria-hidden="true"
      ></div>
      <div
        className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-emerald-600/10 via-cyan-600/8 to-transparent rounded-full blur-[150px] -z-10 animate-pulse'
        style={{ animationDuration: "12s" }}
        aria-hidden="true"
      ></div>

      {/* Subtle grid pattern overlay */}
      <div
        className='absolute inset-0 opacity-25 -z-10'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      ></div>

      {/* Content Container */}
      <motion.div
        variants={textVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-[800px] text-center z-10'
      >
        <motion.div
          variants={childVariants}
          className='inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-linear-to-r from-violet-500/15 via-fuchsia-500/10 to-violet-500/15 backdrop-blur-xl border border-violet-400/25 text-violet-200 text-sm font-medium tracking-wide shadow-lg shadow-violet-500/15'
        >
          <div className='w-2 h-2 bg-violet-400 rounded-full animate-pulse' aria-hidden="true"></div>
          Available for New Projects
        </motion.div>

        <motion.h1
          id='hero-heading'
          variants={childVariants}
          className='text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] mb-8 tracking-tight'
        >
          <span className="bg-linear-to-r from-theme-primary via-violet-600 to-theme-primary bg-clip-text text-transparent">
            Frontend
          </span>
          <span className='block bg-linear-to-r from-violet-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent'>
            Developer
          </span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className='text-2xl sm:text-3xl text-theme-muted font-medium tracking-wide mb-2 italic leading-relaxed'
        >
          "Architecture in the digital realm"
        </motion.p>

        <motion.div
          variants={childVariants}
          className='flex items-center justify-center mt-12 mb-10'
        >
          <div className='flex-1 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent rounded-full max-w-[100px]' aria-hidden="true"></div>
          <h2 className='text-2xl font-bold text-violet-400 mx-6 tracking-wide'>
            About Me
          </h2>
          <div className='flex-1 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent rounded-full max-w-[100px]' aria-hidden="true"></div>
        </motion.div>

        <motion.p
          variants={childVariants}
          className='text-theme-secondary text-xl sm:text-2xl leading-relaxed max-w-[700px] mx-auto mb-12'
        >
          I specialize in creating{" "}
          <span className='relative inline-block'>
            <span className='relative z-10 text-theme-primary font-semibold px-1'>
              responsive, high-performance
            </span>
            <span className='absolute inset-0 bg-linear-to-r from-violet-500/25 to-fuchsia-500/25 rounded-sm -skew-x-1' aria-hidden="true"></span>
          </span>{" "}
          web applications. My approach combines technical precision with
          artistic vision to deliver immersive user experiences.
        </motion.p>

        <motion.a
          variants={childVariants}
          href='/docs/LinaEideh CV.pdf'
          download='LinaEideh_CV.pdf'
          className='group inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-violet-600 via-fuchsia-600 to-violet-600 hover:from-violet-500 hover:via-fuchsia-500 hover:to-violet-500 text-white font-semibold text-xl rounded-2xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/45 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Download Lina Eideh's Curriculum Vitae"
        >
          <FileText className='text-2xl transition-transform group-hover:rotate-12' aria-hidden="true" />
          <span>Download CV</span>
          <ArrowRight className='text-xl transition-transform group-hover:translate-x-1' aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HomeSection;
