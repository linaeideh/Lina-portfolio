"use client"
import React from "react";
import { Github, Linkedin, MessageSquare, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "Linaeideh02@gmail.com",
      link: "mailto:Linaeideh02@gmail.com",
      icon: <Mail className='h-6 w-6' />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      type: "LinkedIn",
      value: "Lina Eideh",
      link: "https://www.linkedin.com/in/lina-eideh-3970442a6/",
      icon: <Linkedin className='h-6 w-6' />,
      color: "from-blue-600 to-blue-800",
    },
    {
      type: "GitHub",
      value: "LinaEideh",
      link: "https://github.com/LinaEideh",
      icon: <Github className='h-6 w-6' />,
      color: "from-zinc-700 to-zinc-900",
    },
  ];

  return (
    <div className='min-h-screen bg-theme-primary flex items-center justify-center p-6 relative overflow-hidden'>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='glass rounded-[40px] p-12 max-w-lg w-full text-center border border-theme-primary shadow-2xl relative overflow-hidden'
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>

        <h1 className='text-5xl font-black text-theme-primary mb-6 tracking-tight'>
          Let's Talk
        </h1>
        <p className='text-theme-muted mb-12 text-lg leading-relaxed'>
          I'm currently looking for new opportunities. Feel free to reach out via any of these platforms.
        </p>
        
        <div className='space-y-6'>
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.type}
              href={info.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className='flex items-center justify-between p-5 rounded-2xl bg-theme-tertiary/30 border border-theme-primary hover:border-accent-primary/50 hover:bg-theme-tertiary/50 transition-all duration-300 group'
            >
              <div className='flex items-center space-x-4'>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div className="text-left">
                  <span className='block text-xs font-bold text-accent-primary uppercase tracking-widest'>{info.type}</span>
                  <span className='text-theme-primary font-bold'>{info.value}</span>
                </div>
              </div>
              <MessageSquare className="w-5 h-5 text-theme-muted group-hover:text-accent-primary transition-colors" />
            </motion.a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-theme-primary">
          <p className="text-sm text-theme-secondary font-medium italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
