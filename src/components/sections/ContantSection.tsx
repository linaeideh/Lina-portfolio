"use client"
import React from "react";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      type: "Email",
      label: "Send an Email",
      value: "Linaeideh02@gmail.com",
      link: "mailto:Linaeideh02@gmail.com",
      icon: <Mail className='w-6 h-6' />,
      color: "from-blue-500 to-indigo-600",
      description: "Available for freelance projects and full-time roles."
    },
    {
      type: "LinkedIn",
      label: "Let's Connect",
      value: "Lina Eideh",
      link: "https://www.linkedin.com/in/lina-eideh-3970442a6/",
      icon: <Linkedin className='w-6 h-6' />,
      color: "from-blue-600 to-blue-800",
      description: "Updates on my professional journey and networking."
    },
    {
      type: "GitHub",
      label: "View Projects",
      value: "LinaEideh",
      link: "https://github.com/LinaEideh",
      icon: <Github className='w-6 h-6' />,
      color: "from-zinc-700 to-zinc-900",
      description: "Open source contributions and project repositories."
    },
  ];

  return (
    <section className='py-24 px-8 relative overflow-hidden bg-theme-primary' id='contact'>
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-secondary/5 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-0.5 bg-accent-primary rounded-full"></span>
            <span className="text-theme-accent font-bold uppercase tracking-widest text-sm text-theme-accent">Get In Touch</span>
            <span className="w-8 h-0.5 bg-accent-primary rounded-full"></span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-theme-primary tracking-tight">Let's Create Together</h2>
          <p className="mt-6 text-xl text-theme-muted max-w-2xl mx-auto leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.type}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass p-8 rounded-[32px] border border-theme-primary h-full transition-all duration-500 hover:border-accent-primary/50 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                {/* Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${method.color} opacity-80`}></div>
                
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {method.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-theme-muted group-hover:text-accent-primary transition-colors duration-300" />
                </div>

                <div className="space-y-3 flex-grow">
                  <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">{method.type}</span>
                  <h3 className="text-2xl font-bold text-theme-primary">{method.label}</h3>
                  <p className="text-theme-muted text-sm leading-relaxed">{method.description}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-theme-primary">
                  <span className="text-theme-primary font-bold group-hover:text-accent-primary transition-colors duration-300">
                    {method.value}
                  </span>
                </div>

                {/* Hover Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl group-hover:bg-accent-primary/10 transition-all duration-500"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Big CTA Email */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass p-12 rounded-[40px] border border-theme-primary text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <h3 className="text-3xl font-bold text-theme-primary mb-4">Quick Response?</h3>
          <p className="text-theme-muted mb-8 text-lg">My inbox is always open. Drop me a line anytime.</p>
          
          <a 
            href="mailto:Linaeideh02@gmail.com"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-xl rounded-2xl hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_10px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.5)] transform hover:scale-105 active:scale-95"
          >
            <Mail className="w-6 h-6" />
            Linaeideh02@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
