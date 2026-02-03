"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import School from "../assets/images/School.webp";
import University from "../assets/images/University.webp";
import Udemy from "../assets/images/Udemy.webp";
import VolunteerIcon from "../assets/images/khccc.png";
import InternshipIcon from "../assets/images/About.png";
import creativology from "../assets/images/creativologyme_logo.jpg";
import iconSoftWare from "../assets/images/iconSoftware.jpg";

interface EducationItem {
  category: string;
  logo: StaticImageData;
  details: {
    name: string;
    degree: string;
    grade: string;
    years: string;
    description?: string;
  };
}

interface InternshipItem {
  category: string;
  logo: StaticImageData;
  details: {
    name: string;
    role: string;
    description: string;
    years: string;
  };
}

interface VolunteerData {
  category: string;
  logo: StaticImageData;
  details: {
    name: string;
    role: string;
    description: string;
    years: string;
  };
}

const AboutPage: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      category: "School",
      logo: School,
      details: {
        name: "Sweileh Girls Secondary School",
        degree: "General Secondary Education – Scientific Stream",
        grade: "85.8%",
        years: "2019-2020",
      },
    },
    {
      category: "University",
      logo: University,
      details: {
        name: "Al-Balqa Applied University",
        degree: "Bachelor of Computer Information Systems",
        grade: "3.30 / 4",
        years: "2020-2024",
      },
    },
    {
      category: "Courses",
      logo: Udemy,
      details: {
        name: "Udemy - Coursera",
        degree: "Courses in React, JS",
        grade: "Completed",
        years: "2024",
        description:
          "Learned foundational and advanced concepts in frontend and backend development.",
      },
    }
  ];

  const internshipData: InternshipItem[] = [
    {
      category: "Self Study",
      logo: InternshipIcon,
      details: {
        name: "Personal Learning Projects",
        role: "Independent Developer",
        description:
          "Started self-study projects since September focusing on building and improving practical development skills.",
        years: "SEP/2025 - Present",
      },
    },
    {
      category: "Creativology",
      logo: creativology,
      details: {
        name: "Creativology Company",
        role: "Backend Intern – Laravel",
        description:
          "Working on backend development using Laravel, focusing on RESTful APIs and database integration.",
        years: "SEP/2025 - Present",
      },
    },
    {
      category: "Icon Software",
      logo: iconSoftWare,
      details: {
        name: "Icon Software",
        role: "Frontend Intern – Next.js & React Native",
        description:
          "Training on frontend frameworks (Next.js, React Native) and contributing to UI/UX development projects.",
        years: "JUL/2025 - Present",
      },
    },
  ];

  const volunteerData: VolunteerData = {
    category: "Community Service",
    logo: VolunteerIcon,
    details: {
      name: "King Hussein Cancer Center (KHCC)",
      role: "Volunteer Coordinator",
      description:
        "Organized community events and workshops to promote education and social engagement.",
      years: "2024-2025",
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove(
              "opacity-0",
              "translate-x-10",
              "-translate-x-10"
            );
          } else {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            if (entry.target.classList.contains("left")) {
              entry.target.classList.add("opacity-0", "translate-x-10");
              entry.target.classList.remove("-translate-x-10");
            } else {
              entry.target.classList.add("opacity-0", "-translate-x-10");
              entry.target.classList.remove("translate-x-10");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="bg-theme-primary min-h-screen text-theme-primary pb-20">
      {/* Quick Navigation Section */}
      <section className='glass py-10 sticky top-[72px] z-50 border-b border-theme-primary'>
        <div className='max-w-4xl mx-auto px-8'>
          <h1 className='text-3xl font-black text-theme-primary mb-6 text-center mt-4 tracking-tight'>
            My Journey
          </h1>
          <div className='flex flex-wrap justify-center gap-4'>
            {[
              { id: "education", label: "Education", color: "hover:bg-blue-600", icon: <Book className="w-5 h-5" /> },
              { id: "internships", label: "Internships", color: "hover:bg-green-600", icon: <Briefcase className="w-5 h-5" /> },
              { id: "volunteering", label: "Volunteering", color: "hover:bg-purple-600", icon: <Heart className="w-5 h-5" /> }
            ].map(btn => (
              <motion.button
                key={btn.id}
                onClick={() => scrollToSection(btn.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 bg-theme-tertiary/50 border border-theme-primary ${btn.color} hover:text-theme-primary text-theme-secondary font-bold py-3 px-8 rounded-2xl transition-all duration-300 shadow-xl`}
              >
                {btn.icon}
                {btn.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id='education' className='py-24 relative overflow-hidden scroll-mt-40'>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
        <div className='max-w-5xl mx-auto px-8'>
          <div className="flex flex-col items-center mb-16">
            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-4 text-center">Academic Background</span>
            <h2 className='text-5xl font-black text-theme-primary text-center'>Education</h2>
          </div>

          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 w-px bg-linear-to-b from-blue-500/50 via-blue-500/20 to-transparent h-full hidden sm:block'></div>

            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`timeline-item ${isLeft ? "left" : "right"} opacity-0 ${
                    isLeft
                      ? "sm:w-1/2 sm:pr-12"
                      : "sm:w-1/2 sm:ml-auto sm:pl-12"
                  } transition-all duration-700 ease-out mb-16 relative`}
                >
                  <div className='glass p-8 rounded-[32px] border border-theme-primary hover:border-blue-500/30 transition-all duration-500 group'>
                    <div className={`hidden sm:block absolute top-1/2 ${isLeft ? "-right-2" : "-left-2"} w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1/2 border-4 border-gray-950 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]`}></div>

                    <div className='flex justify-between items-start mb-6'>
                      <div>
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">{item.category}</span>
                        <h3 className='text-2xl font-black text-theme-primary mt-1 group-hover:text-blue-300 transition-colors'>{item.details.name}</h3>
                      </div>
                      <div className="w-14 h-14 bg-theme-tertiary/50 rounded-2xl p-2 flex items-center justify-center border border-theme-primary relative">
                        <Image src={item.logo} alt={item.category} fill className='object-contain p-2' />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className='text-lg font-bold text-gray-200'>{item.details.degree}</p>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Grade: {item.details.grade}</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {item.details.years}</span>
                      </div>
                      {item.details.description && (
                        <p className='text-gray-400 text-sm leading-relaxed mt-4 italic'>
                          {item.details.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id='internships' className='py-24 bg-theme-secondary/50 relative overflow-hidden scroll-mt-40'>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[100px] -z-10"></div>
        <div className='max-w-5xl mx-auto px-8'>
          <div className="flex flex-col items-center mb-16">
            <span className="text-green-400 font-black uppercase tracking-[0.3em] text-xs mb-4 text-center">Professional Experience</span>
            <h2 className='text-5xl font-black text-theme-primary text-center'>Internships</h2>
          </div>

          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 w-px bg-linear-to-b from-green-500/50 via-green-500/20 to-transparent h-full hidden sm:block'></div>

            {internshipData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`timeline-item ${isLeft ? "left" : "right"} opacity-0 ${
                    isLeft
                      ? "sm:w-1/2 sm:pr-12"
                      : "sm:w-1/2 sm:ml-auto sm:pl-12"
                  } transition-all duration-700 ease-out mb-16 relative`}
                >
                  <div className='glass p-8 rounded-[32px] border border-theme-primary hover:border-green-500/30 transition-all duration-500 group'>
                    <div className={`hidden sm:block absolute top-1/2 ${isLeft ? "-right-2" : "-left-2"} w-4 h-4 bg-green-500 rounded-full transform -translate-y-1/2 border-4 border-gray-950 z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)]`}></div>

                    <div className='flex justify-between items-start mb-6'>
                      <div>
                        <span className="text-green-400 font-bold text-xs uppercase tracking-widest">{item.category}</span>
                        <h3 className='text-2xl font-black text-theme-primary mt-1 group-hover:text-green-300 transition-colors'>{item.details.name}</h3>
                      </div>
                      <div className="w-14 h-14 bg-theme-tertiary/50 rounded-2xl p-2 flex items-center justify-center border border-theme-primary relative">
                        <Image src={item.logo} alt={item.category} fill className='object-contain p-2' />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className='text-lg font-bold text-gray-200'>Role: {item.details.role}</p>
                      <p className='text-green-400 text-sm font-black tracking-widest uppercase'>{item.details.years}</p>
                      <p className='text-gray-400 text-sm leading-relaxed mt-4 italic'>
                        {item.details.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id='volunteering' className='py-24 relative overflow-hidden scroll-mt-40'>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>
        <div className='max-w-3xl mx-auto px-8'>
          <div className="flex flex-col items-center mb-16">
            <span className="text-purple-400 font-black uppercase tracking-[0.3em] text-xs mb-4 text-center">Community Impact</span>
            <h2 className='text-5xl font-black text-theme-primary text-center'>Volunteering</h2>
          </div>
          
          <div className='timeline-item opacity-0 transition-all duration-700 ease-out'>
            <div className='glass p-10 rounded-[40px] border border-theme-primary hover:border-purple-500/30 transition-all duration-500 group'>
              <div className='flex flex-col sm:flex-row justify-between items-start gap-6 mb-8'>
                <div>
                  <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">{volunteerData.category}</span>
                  <h3 className='text-3xl font-black text-theme-primary mt-2 group-hover:text-purple-300 transition-colors'>{volunteerData.details.name}</h3>
                </div>
                <div className="bg-theme-tertiary/50 rounded-2xl p-4 border border-theme-primary relative w-24 h-24">
                  <Image src={volunteerData.logo} alt={volunteerData.category} fill className='object-contain p-2' />
                </div>
              </div>
              
              <div className="space-y-4">
                <p className='text-xl font-bold text-gray-200'>Role: {volunteerData.details.role}</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-black text-xs tracking-widest uppercase">
                  {volunteerData.details.years}
                </div>
                <p className='text-gray-400 text-lg leading-relaxed mt-6 italic'>
                  {volunteerData.details.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
