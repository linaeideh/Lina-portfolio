"use client"
import React from "react"
import { Github, Atom, Wind, Zap, Code, FileCode } from "lucide-react"
import { motion } from "framer-motion"

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  team: string;
  duration: string;
  proficiency: number;
  description: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "React Development",
      icon: <Atom className="h-8 w-8" />,
      color: "bg-blue-600",
      team: "Internship",
      duration: "2 Month",
      proficiency: 90,
      description: "Building dynamic and responsive web applications with React.",
    },
    {
      name: "Next.js",
      icon: <FileCode className="h-8 w-8" />,
      color: "bg-slate-900",
      team: "Personal",
      duration: "3 Projects",
      proficiency: 85,
      description: "Building server-side rendered and static web applications with Next.js.",
    },
    {
      name: "Vite",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-yellow-500",
      team: "Personal",
      duration: "5 Projects",
      proficiency: 90,
      description: "Fast frontend tooling and development server.",
    },
    {
      name: "Tailwind CSS",
      icon: <Wind className="h-8 w-8" />,
      color: "bg-cyan-500",
      team: "Design Team",
      duration: "3 Days Left",
      proficiency: 85,
      description: "Crafting modern and responsive UI with Tailwind CSS.",
    },
    {
      name: "Git & GitHub",
      icon: <Github className="h-8 w-8" />,
      color: "bg-green-600",
      team: "Youtube",
      duration: "1 Week Left",
      proficiency: 85,
      description: "Version control and collaborative development with Git and GitHub.",
    },
    {
      name: "HTML, CSS, JS",
      icon: <Code className="h-8 w-8" />,
      color: "bg-orange-500",
      team: "Udemy",
      duration: "1 Month Left",
      proficiency: 95,
      description: "Core web technologies for building robust websites.",
    },
  ]

  return (
    <section className="py-24 bg-theme-primary px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-primary/8 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-0.5 bg-accent-primary rounded-full"></span>
            <span className="text-theme-accent font-bold uppercase tracking-widest text-sm text-center">Expertise</span>
            <span className="w-8 h-0.5 bg-accent-primary rounded-full"></span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-theme-primary">My Skills</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass p-8 rounded-[24px] group hover:border-accent-primary/50 transition-all duration-500 hover:-translate-y-2 relative h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/8 rounded-full blur-2xl group-hover:bg-accent-primary/12 transition-colors"></div>
              
              <div className={`w-16 h-16 rounded-2xl ${skill.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {skill.icon}
              </div>

              <h2 className="text-2xl font-bold text-theme-primary mb-3 group-hover:text-theme-accent transition-colors">{skill.name}</h2>
              <p className="text-theme-muted text-sm leading-relaxed mb-6 flex-grow">{skill.description}</p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-3 text-theme-muted text-xs font-bold uppercase tracking-widest">
                  <span className="p-1.5 px-3 rounded-lg bg-theme-tertiary/50 text-theme-secondary border border-theme-secondary/30">{skill.team}</span>
                  <span className="p-1.5 px-3 rounded-lg bg-theme-tertiary/50 text-theme-secondary border border-theme-secondary/30">{skill.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
