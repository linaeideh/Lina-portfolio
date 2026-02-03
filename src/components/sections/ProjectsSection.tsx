"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import DentalClinic from "../../assets/images/DentalClinic.png"
import Supportak from "../../assets/images/Supportak.png"
import SecretCafe from "../../assets/images/SecretCafe.png"
import Portfolio from "../../assets/images/About.png"
import { Github, Target, Zap, TrendingUp, ArrowRight } from "lucide-react"

interface ProjectImpact {
  metrics: string[];
  description: string;
}

interface ProjectKeyFeature {
  name: string;
  description: string;
}

interface ProjectResults {
  quantitative: string[];
  qualitative: string[];
}

interface CaseStudy {
  role: string;
  timeline: string;
  overview: string;
  approach: string[];
  keyFeatures: ProjectKeyFeature[];
  results: ProjectResults;
  lessonsLearned: string[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  challenge: string;
  solution: string;
  impact: ProjectImpact;
  caseStudy: CaseStudy;
  image: StaticImageData;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dental Clinic Management - Sama Dental",
    slug: "dental-clinic",
    description:
      "A dental clinic management system focused on organizing appointments and procedures to reduce patient waiting time and improve daily workflow.",
    challenge:
      "The clinic struggled with long waiting times, appointment conflicts, and unorganized scheduling due to lack of a clear appointment management system.",
    solution:
      "Built a system to manage patient appointments and organize clinic procedures with clear time slots, reducing congestion and improving clinic operations.",
    impact: {
      metrics: [
        "Reduced waiting time by 70%",
        "40% reduction in patient no-shows",
        "+500 appointments successfully managed"
      ],
      description:
        "Improved patient experience and smoother daily operations by organizing appointments and reducing chaos inside the clinic."
    },
    caseStudy: {
      role: "Full-Stack Developer & UI/UX Designer",
      timeline: "3 months",
      overview:
        "A system designed to organize clinic appointments, manage patient records, and improve daily workflow.",
      approach: [
        "Analyzed clinic scheduling issues",
        "Designed appointment-based workflow",
        "Built real-time database management with Supabase",
        "Integrated Sanity CMS for content management",
        "Tracked user behavior with Microsoft Clarity",
        "Monitored errors with Sentry"
      ],
      keyFeatures: [
        {
          name: "Appointment Scheduling",
          description: "Organized appointments by procedure type with automated reminders"
        },
        {
          name: "Patient Records",
          description: "Secure digital storage of patient history and treatments"
        },
        {
          name: "Analytics Dashboard",
          description: "Track appointments, revenue, and patient flow"
        }
      ],
      results: {
        quantitative: [
          "70% faster appointment booking",
          "40% fewer absences",
          "+500 appointments handled",
          "3x faster patient check-in process"
        ],
        qualitative: [
          "Reduced administrative workload for staff",
          "Improved patient satisfaction",
          "Enhanced clinic's professional image",
          "Minimized human errors in records"
        ]
      },
      lessonsLearned: [
        "Clear scheduling improves clinic efficiency",
        "Automated reminders significantly reduce no-shows",
        "CMS flexibility allows non-developers to manage content",
        "Real-time updates require careful database design"
      ]
    },
    image: DentalClinic,
    technologies: ["Next.js", "Sanity CMS", "Supabase", "Microsoft Clarity", "Sentry", "Vercel"],
    githubLink: "https://github.com/linaeideh/Dental-Clinic-Management",
    liveLink: "https://dental-clinic-management-alpha.vercel.app/"
  },

  {
    id: 2,
    title: "Supportak",
    slug: "supportak",
    description:
      "A platform centralizing small businesses, helping customers discover and support them while providing owners with analytics and management tools.",
    challenge:
      "Small business owners lacked a unified platform to showcase and organize their projects, making discovery and management difficult.",
    solution:
      "Created a centralized platform that groups businesses by category, improving visibility and customer engagement.",
    impact: {
      metrics: [
        "60% faster response time",
        "10+ businesses onboarded",
        "85% user satisfaction"
      ],
      description:
        "Improved visibility and engagement for small businesses with a single, organized platform."
    },
    caseStudy: {
      role: "Full-Stack Developer & Product Designer",
      timeline: "2 months",
      overview:
        "A platform that centralizes small businesses and organizes them by category for easier discovery and management.",
      approach: [
        "Researched small business pain points",
        "Designed category-based architecture",
        "Built automated ticketing and analytics dashboards",
        "Implemented marketing campaign management"
      ],
      keyFeatures: [
        { name: "Category System", description: "Businesses grouped by clear categories" },
        { name: "Centralized Platform", description: "One hub to discover and support small businesses" }
      ],
      results: {
        quantitative: [
          "Improved project visibility",
          "10+ businesses onboarded"
        ],
        qualitative: [
          "Reduced confusion for owners",
          "Better exposure for small projects"
        ]
      },
      lessonsLearned: [
        "Clear categorization is critical for discovery platforms",
        "Simplicity and modular design improve usability for small business owners"
      ]
    },
    image: Supportak,
    technologies: ["PHP", "JavaScript", "MySQL", "CSS"],
    githubLink: "https://github.com/linaeideh/supportak",
    liveLink: "#"
  },

  {
    id: 3,
    title: "Secret Cafe",
    slug: "secret-cafe",
    description:
      "A cafe management web application that showcases the menu and allows customers to place orders online.",
    challenge:
      "The cafe had no digital way to display its menu or accept online orders, relying only on in-store service.",
    solution:
      "Developed a web application presenting the menu clearly and enabling online ordering for customers.",
    impact: {
      metrics: [
        "300+ online orders processed",
        "45% revenue increase",
        "4.8/5 customer rating"
      ],
      description:
        "Enhanced customer convenience and expanded the cafe’s reach beyond in-person visits."
    },
    caseStudy: {
      role: "Front-End Developer & UI/UX Designer",
      timeline: "1.5 months",
      overview:
        "A web app to display the cafe menu and allow online ordering efficiently and intuitively.",
      approach: [
        "Designed user-friendly menu layout",
        "Implemented smooth online ordering flow",
        "Focused on responsive and mobile-first design"
      ],
      keyFeatures: [
        { name: "Menu Display", description: "Clear and organized menu presentation" },
        { name: "Online Ordering", description: "Customers can place orders online" }
      ],
      results: {
        quantitative: [
          "300+ orders processed online",
          "45% increase in revenue"
        ],
        qualitative: [
          "Improved customer convenience",
          "Professional digital presence"
        ]
      },
      lessonsLearned: [
        "A simple, clean UI greatly improves engagement and usability"
      ]
    },
    image: SecretCafe,
    technologies: ["React", "CSS"],
    githubLink: "https://github.com/linaeideh/Secret-Cafe",
    liveLink: "#"
  },
  {
  id: 4,
  title: "Portfolio",
  slug: "portfolio",
  description:
    "A personal portfolio website showcasing projects, technical skills, and professional experience with a modern and interactive design.",
  challenge:
    "Needed a strong professional online presence to present projects clearly and stand out to potential clients and employers.",
  solution:
    "Designed and built a modern portfolio with smooth animations, clear project structure, and responsive layout to highlight skills and real-world projects.",
  impact: {
    metrics: [
      "Professional online presence",
      "Clear project presentation",
      "Improved personal branding"
    ],
    description:
      "Enabled visitors to quickly understand skills, experience, and project impact through a clean and engaging interface."
  },
  caseStudy: {
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "1.5 months",
    overview:
      "A modern personal portfolio designed to showcase projects, skills, and experience with a strong focus on usability and visual quality.",
    approach: [
      "Researched modern portfolio trends and layouts",
      "Designed a clean UI with strong visual hierarchy",
      "Implemented animations using Framer Motion",
      "Organized projects with detailed case studies"
    ],
    keyFeatures: [
      {
        name: "Project Showcase",
        description: "Interactive project cards with detailed descriptions and case studies"
      },
      {
        name: "Skills & Tech Stack",
        description: "Clear presentation of technologies and tools used"
      }
    ],
    results: {
      quantitative: [
        "All major projects documented",
        "Improved engagement time"
      ],
      qualitative: [
        "Stronger professional image",
        "Clear storytelling for each project",
        "Portfolio-ready for job applications and clients"
      ]
    },
    lessonsLearned: [
      "Storytelling is as important as visuals in a portfolio",
      "Consistency in project structure improves readability",
      "Animations should enhance UX, not distract from content"
    ]
  },
  image: Portfolio,
  technologies: ["React", "Tailwind CSS", "Framer Motion"],
  githubLink: "https://github.com/linaeideh/portfolio-Tailwind",
  liveLink: "#"
}

];

const ProjectsSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="px-4 sm:px-8 lg:px-16 bg-theme-primary min-h-screen py-24 relative overflow-hidden" id="project">
      {/* Enhanced Background decoration */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-accent-primary/8 rounded-full blur-[150px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-accent-tertiary/8 rounded-full blur-[150px] -z-10 animate-pulse-slow delay-1000"></div>
      
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-4 mb-6">
          <span className="w-12 h-0.5 bg-accent-primary rounded-full"></span>
          <span className="text-theme-accent font-bold uppercase tracking-widest text-base">Case Studies</span>
          <span className="w-12 h-0.5 bg-accent-primary rounded-full"></span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-theme-primary tracking-tight">Featured Projects</h1>
        <p className="mt-6 text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
          Real-world problems solved through thoughtful design and technical excellence. Explore the challenges, solutions, and impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden group border border-theme-secondary hover:border-accent-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent-primary/20"
          >
            {/* Project Image */}
            <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-theme-secondary to-theme-tertiary">
              <Image
                src={project.image}
                alt={`${project.title} - project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-in-out p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-secondary via-theme-secondary/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" aria-hidden="true"></div>
              
              {/* Technology Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-theme-tertiary/90 backdrop-blur-md text-theme-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent-primary/40 group-hover:border-accent-primary/60 transition-colors shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1.5 bg-theme-tertiary/90 backdrop-blur-md text-theme-muted text-xs font-bold uppercase tracking-wider rounded-full border border-theme-primary shadow-lg">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black text-theme-primary group-hover:text-theme-accent transition-colors mb-6">{project.title}</h2>

              {/* Case Study Sections */}
              <div className="space-y-5 mb-8">
                {/* Challenge */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <Target className="text-red-400 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-wide mb-1">Challenge</h3>
                    <p className="text-theme-secondary text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Zap className="text-blue-400 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-1">Solution</h3>
                    <p className="text-theme-secondary text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <TrendingUp className="text-green-400 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-green-400 uppercase tracking-wide mb-2">Impact</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.impact.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-lg border border-green-500/20"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Link 
                  href={`/case-study/${project.slug}`}
                  className="flex-1 py-3 px-6 bg-accent-primary hover:bg-accent-secondary text-theme-primary rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-primary/30 group/btn"
                  aria-label={`View detailed case study for ${project.title}`}
                >
                  <span>View Case Study</span>
                  <ArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-3 px-4 bg-accent-tertiary hover:bg-accent-secondary text-theme-primary rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(project.githubLink, "_blank")}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="text-xl" aria-hidden="true" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
