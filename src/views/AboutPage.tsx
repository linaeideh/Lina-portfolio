"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Briefcase, Heart, Calendar, GraduationCap, Award } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<"education" | "internships" | "volunteering">("education");

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: "education", label: "Education", icon: <Book size={18} /> },
    { id: "internships", label: "Internships", icon: <Briefcase size={18} /> },
    { id: "volunteering", label: "Volunteers", icon: <Heart size={18} /> }
  ];

  return (
    <div className="bg-theme-primary min-h-screen text-theme-primary pb-24 pt-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-5xl sm:text-7xl font-black text-theme-primary mb-4 tracking-tight'
          >
            My Journey
          </motion.h1>
          <p className="text-theme-muted font-bold uppercase tracking-widest text-[10px] sm:text-xs">Growth & Experience</p>
        </div>

        {/* STRICT HORIZONTAL TABS FOR MOBILE */}
        <div className="sticky top-20 z-50 mb-12 sm:mb-16">
          <div className="flex justify-center">
            <div className="glass p-1.5 rounded-2xl sm:rounded-3xl border border-theme-primary flex flex-row items-center w-full max-w-2xl shadow-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 px-2 rounded-xl sm:rounded-2xl transition-all duration-500 relative ${
                    activeTab === tab.id 
                    ? "text-white" 
                    : "text-theme-secondary hover:bg-theme-tertiary/30"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-violet-600 rounded-xl sm:rounded-2xl -z-10 shadow-lg shadow-violet-600/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className={`${activeTab === tab.id ? "text-white" : "text-theme-accent"}`}>
                    {tab.icon}
                  </div>
                  <span className="text-[10px] sm:text-sm font-black whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 sm:space-y-10"
            >
              {activeTab === "education" && educationData.map((item, idx) => (
                <JourneyCard key={idx} icon={<GraduationCap />} color="blue" title={item.details.name} subtitle={item.details.degree} date={item.details.years} extra={`Grade: ${item.details.grade}`} desc={item.details.description} logo={item.logo} />
              ))}

              {activeTab === "internships" && internshipData.map((item, idx) => (
                <JourneyCard key={idx} icon={<Briefcase />} color="green" title={item.details.name} subtitle={item.details.role} date={item.details.years} desc={item.details.description} logo={item.logo} />
              ))}

              {activeTab === "volunteering" && (
                <JourneyCard icon={<Heart />} color="purple" title={volunteerData.details.name} subtitle={volunteerData.details.role} date={volunteerData.details.years} desc={volunteerData.details.description} logo={volunteerData.logo} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
interface JourneyCardProps {
  icon: React.ReactElement;
  color: string;
  title: string;
  subtitle: string;
  date: string;
  extra?: string;
  desc?: string;
  logo: StaticImageData;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ icon, color, title, subtitle, date, extra, desc, logo }) => {
  const colorMap: any = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    green: "text-green-500 bg-green-500/10 border-green-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20"
  };

  return (
    <motion.div className="glass p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] border border-theme-primary hover:border-violet-500/30 transition-all duration-500 group relative">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 sm:w-28 sm:h-28 bg-theme-primary rounded-2xl p-3 sm:p-5 border border-theme-primary shadow-xl flex items-center justify-center overflow-hidden">
            <Image src={logo} alt={title} fill className="object-contain p-2" />
          </div>
          <div className={`absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl flex items-center justify-center border shadow-lg ${colorMap[color]}`}>
            {React.cloneElement(icon, { size: 20 } as any)}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xl sm:text-3xl font-black text-theme-primary tracking-tight leading-tight">{title}</h3>
            <span className={`inline-block w-fit px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase border ${colorMap[color]}`}>
              {date}
            </span>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg sm:text-2xl font-bold text-theme-secondary opacity-90 leading-tight">{subtitle}</p>
            {extra && (
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-400">
                <Award size={16} /> {extra}
              </p>
            )}
          </div>

          {desc && (
            <p className="text-theme-muted text-sm sm:text-lg leading-relaxed italic border-l-4 border-theme-tertiary pl-5 sm:pl-8 mt-6">
              "{desc}"
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
