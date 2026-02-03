"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Target, Zap, TrendingUp, CheckCircle } from "lucide-react"

// Import projects data and interface from ProjectsSection
import { projects } from "../components/sections/ProjectsSection"

const CaseStudyPage: React.FC = () => {
  const params = useParams()
  const projectId = params.projectId as string
  const project = projects.find(p => p.slug === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return (
      <div className="min-h-screen bg-theme-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-theme-primary mb-4">Project Not Found</h1>
          <Link href="/" className="text-accent-primary hover:text-accent-secondary transition-colors" aria-label="Go back to home page">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex(p => p.slug === projectId)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <div className="min-h-screen bg-theme-primary">
      {/* Header Section */}
      <div className="px-4 sm:px-8 lg:px-16 py-12 border-b border-theme-secondary">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#project"
            className="inline-flex items-center gap-2 text-theme-secondary hover:text-accent-primary transition-colors mb-8"
            aria-label="Back to projects section"
          >
            <ArrowLeft /> Back to Projects
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-theme-primary mb-6"
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-theme-secondary max-w-3xl mb-8"
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/40"
            >
              <Github /> View Code
            </a>

            {project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-theme-tertiary text-theme-accent rounded-2xl font-bold transition-all duration-300 border border-theme-secondary hover:border-accent-primary/50"
              >
                <ExternalLink /> Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-8 lg:px-16 py-16 max-w-6xl mx-auto">
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass p-6 rounded-2xl border border-theme-secondary">
            <h3 className="text-sm font-bold text-theme-muted uppercase tracking-wide mb-2">Role</h3>
            <p className="text-theme-primary font-semibold">{project.caseStudy.role}</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-theme-secondary">
            <h3 className="text-sm font-bold text-theme-muted uppercase tracking-wide mb-2">Timeline</h3>
            <p className="text-theme-primary font-semibold">{project.caseStudy.timeline}</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-theme-secondary">
            <h3 className="text-sm font-bold text-theme-muted uppercase tracking-wide mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="text-xs font-semibold text-accent-primary">{tech}</span>
              ))}
              {project.technologies.length > 3 && <span className="text-xs text-theme-muted">+{project.technologies.length - 3}</span>}
            </div>
          </div>
        </div>

        {/* Overview with Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-theme-primary mb-6">Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg text-theme-secondary leading-relaxed">{project.caseStudy.overview}</p>
            </div>
            <div className="glass p-4 rounded-2xl border border-theme-secondary relative h-48 sm:h-64">
              <Image 
                src={project.image} 
                alt={`${project.title} - overview`}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="rounded-xl object-contain p-2"
              />
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <Target className="text-red-400 text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-theme-primary">The Challenge</h2>
          </div>
          <p className="text-lg text-theme-secondary leading-relaxed mb-6">{project.challenge}</p>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <Zap className="text-blue-400 text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-theme-primary">The Solution</h2>
          </div>
          
          <h3 className="text-xl font-bold text-theme-primary mb-4">Approach</h3>
          <ul className="space-y-3 mb-8">
            {project.caseStudy.approach.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-theme-secondary">
                <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-theme-primary mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.caseStudy.keyFeatures.map((feature, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-theme-secondary">
                <h4 className="font-bold text-theme-primary mb-2">{feature.name}</h4>
                <p className="text-sm text-theme-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <TrendingUp className="text-green-400 text-2xl" />
            </div>
            <h2 className="text-3xl font-black text-theme-primary">Results & Impact</h2>
          </div>

          <h3 className="text-xl font-bold text-theme-primary mb-4">Quantitative Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {project.caseStudy.results.quantitative.map((result, idx) => (
              <div key={idx} className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <p className="text-green-400 font-semibold">{result}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-theme-primary mb-4">Qualitative Outcomes</h3>
          <ul className="space-y-3">
            {project.caseStudy.results.qualitative.map((result, idx) => (
              <li key={idx} className="flex gap-3 text-theme-secondary">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-theme-primary mb-6">Lessons Learned</h2>
          <div className="space-y-4">
            {project.caseStudy.lessonsLearned.map((lesson, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-theme-secondary">
                <p className="text-theme-secondary leading-relaxed">{lesson}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="pt-12 border-t border-theme-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`/case-study/${prevProject.slug}`}
              className="glass p-6 rounded-2xl border border-theme-secondary hover:border-accent-primary/50 transition-all group"
              aria-label={`Navigate to previous project: ${prevProject.title}`}
            >
              <div className="text-sm text-theme-muted mb-2">← Previous Project</div>
              <div className="text-xl font-bold text-theme-primary group-hover:text-accent-primary transition-colors">{prevProject.title}</div>
            </Link>
            <Link
              href={`/case-study/${nextProject.slug}`}
              className="glass p-6 rounded-2xl border border-theme-secondary hover:border-accent-primary/50 transition-all group text-right"
              aria-label={`Navigate to next project: ${nextProject.title}`}
            >
              <div className="text-sm text-theme-muted mb-2">Next Project →</div>
              <div className="text-xl font-bold text-theme-primary group-hover:text-accent-primary transition-colors">{nextProject.title}</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CaseStudyPage
