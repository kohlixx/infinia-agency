import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Code, Megaphone, Globe, Smartphone,
  Database, Cloud, Target, Users, Play, Clapperboard,
  Film, Aperture, CheckCircle, MonitorPlay,
  ArrowUpRight, Menu, X, Smile, Zap, Sparkles,
  Download, ExternalLink, Coffee, Send,
  LayoutGrid, Phone, Mail
} from 'lucide-react';

// --- ASLI PHOTOS LINK ---
import bantiImg from './assets/banti.jpg';
import prashantImg from './assets/prashant.jpg';

// --- PLACEHOLDER IMAGES ---
const port1 = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop";
const port2 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
const cine1 = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop";
const cine2 = "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop";

// --- CUSTOM ICONS ---
const CustomInstaIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const CustomGithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 4.8 4.8 0 0 0-.13-3.4s-1.12-.35-3.6 1.3a12.8 12.8 0 0 0-6.6 0C5.12 2.1 4 2.45 4 2.45a4.8 4.8 0 0 0-.13 3.4A5.2 5.2 0 0 0 2.5 9.35c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24V22"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

// --- DOODLE SVG COMPONENTS ---
const CrownDoodle = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50 L30 10 L50 40 L70 10 L90 50" stroke="#FFB23F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDoodle = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 Q 50 80 90 90 M 70 90 L 90 90 L 80 70" stroke="#FFB23F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- SKILL BADGE COMPONENT ---
const SkillBadge = ({ short, name, color, bg }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl border border-[#FF5210]/20 flex items-center justify-center text-xl md:text-3xl font-black transition-transform group-hover:-translate-y-2 shadow-lg" style={{ color: color, backgroundColor: bg }}>
      {short}
    </div>
    <span className="text-[9px] md:text-[10px] text-white/60 text-center max-w-[70px] leading-tight">{name}</span>
  </div>
);

// --- ANIMATIONS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ==========================================
// 1. TRADITIONAL VS DIGITAL MARKETING SECTION
// ==========================================
const MarketingComparisonSection = () => {
  return (
    <section className="px-4 max-w-6xl mx-auto mt-24 mb-16 relative z-10">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp}
        className="bg-[#161210] rounded-[3rem] p-6 md:p-14 border border-[#FF5210]/20 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5210]/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#FF5210]/15 text-[#FFB23F] text-xs font-bold tracking-widest uppercase border border-[#FF5210]/30">
            Strategy Shift
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Traditional <span className="text-[#8A7A80]">vs</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5210] to-[#FFB23F]">Digital Marketing</span>
          </h2>
        </div>

        {/* Comparison Graphic Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative py-6">
          
          {/* TRADITIONAL SIDE (Left) */}
          <div className="bg-[#090A0F]/80 p-8 rounded-[2.5rem] border border-white/5 text-center relative group hover:border-[#8A7A80]/40 transition-all">
            <h3 className="text-[#8A7A80] font-black text-xl md:text-2xl tracking-widest uppercase mb-4">
              Traditional Marketing
            </h3>
            <p className="text-white/40 text-xs md:text-sm mb-6 leading-relaxed">
              Slow results, high cost, manual effort, and old methods (like dropping pebbles one by one).
            </p>
            {/* Animated Slow Stones Falling */}
            <div className="flex justify-center items-center h-32 gap-3">
               {[0, 1, 2, 3].map((i) => (
                 <motion.div
                   key={i}
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                   className="w-5 h-5 rounded-full bg-[#8A7A80]/60 shadow-inner"
                 />
               ))}
            </div>
            <span className="inline-block mt-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">Slow & Exhausting</span>
          </div>

          {/* DIGITAL SIDE (Right) */}
          <div className="bg-gradient-to-br from-[#FF5210]/20 to-[#FFB23F]/10 p-8 rounded-[2.5rem] border border-[#FF5210]/40 text-center relative group hover:border-[#FF5210] transition-all shadow-[0_0_30px_rgba(255,82,16,0.15)]">
            <h3 className="text-[#FFB23F] font-black text-xl md:text-2xl tracking-widest uppercase mb-4">
              Digital Marketing
            </h3>
            <p className="text-white/70 text-xs md:text-sm mb-6 leading-relaxed">
              Instant growth, smart automation, direct targeting, and fast ROI (smart straw approach).
            </p>
            {/* Animated Fast Stream / Flow */}
            <div className="flex justify-center items-center h-32 relative">
               <motion.div
                 animate={{ scaleY: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="w-2 h-24 bg-gradient-to-b from-[#FF5210] to-[#FFB23F] rounded-full shadow-[0_0_15px_#FF5210]"
               />
               <motion.div
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute bottom-4 px-3 py-1 bg-[#FF5210] text-black text-[10px] font-black rounded-full uppercase"
               >
                 High ROI 🚀
               </motion.div>
            </div>
            <span className="inline-block mt-4 text-[10px] font-bold text-[#FFB23F] uppercase tracking-widest">Fast & Automated</span>
          </div>

        </div>

        {/* Bottom Catchphrase */}
        <div className="text-center mt-12 pt-8 border-t border-white/5">
          <motion.h3 
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.02, 0.95] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl md:text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF5210] via-[#FFB23F] to-white"
          >
            "THINK SMART, GO DIGITAL"
          </motion.h3>
        </div>

      </motion.div>
    </section>
  );
};

// ==========================================
// 2. FOUNDER BANTI PROFILE
// ==========================================
const BantiPortfolio = () => {
  const bantiSkills = [
    { short: "Re", name: "React", color: "#FFB23F", bg: "rgba(255, 178, 63, 0.1)" },
    { short: "Nd", name: "Node.js", color: "#FF5210", bg: "rgba(255, 82, 16, 0.1)" },
    { short: "Ex", name: "Express", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.08)" },
    { short: "Mg", name: "MongoDB", color: "#FFB23F", bg: "rgba(255, 178, 63, 0.1)" },
    { short: "Tw", name: "Tailwind CSS", color: "#FF5210", bg: "rgba(255, 82, 16, 0.1)" },
    { short: "JS", name: "JavaScript", color: "#FFB23F", bg: "rgba(255, 178, 63, 0.1)" },
    { short: "Nx", name: "Next.js", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.08)" },
    { short: "Gi", name: "Git & GitHub", color: "#FF5210", bg: "rgba(255, 82, 16, 0.1)" },
    { short: "Vc", name: "Vercel", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.08)" },
    { short: "Vs", name: "VS Code", color: "#FFB23F", bg: "rgba(255, 178, 63, 0.1)" },
  ];

  const projects = [
    { title: "Estate Flow CRM", cat: "Web App", tag: "Full Stack CRM", img: port1, link: "#" },
    { title: "Prime Realty Platform", cat: "Real Estate", tag: "Next.js Deployment", img: port2, link: "#" },
    { title: "Academy Portal", cat: "Education", tag: "Responsive Design", img: cine1, link: "#" },
    { title: "Furniture Store", cat: "Ecommerce", tag: "MERN Stack", img: cine2, link: "#" }
  ];

  return (
    <motion.div key="banti" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="relative z-10 w-full overflow-hidden pb-20">
      
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div variants={fadeInUp} className="flex-1 relative w-full mt-10 lg:mt-0">
          <div className="absolute -top-16 -left-6 md:-left-12 transform -rotate-12 hidden md:block">
            <span className="font-['Kalam'] text-white/60 text-sm md:text-base leading-tight block text-center">
              Creative Developer<br/>Problem Solver<br/>Always Learning
            </span>
            <ArrowDoodle className="w-8 h-8 transform rotate-[160deg] mt-2 ml-16 opacity-70" />
          </div>
          
          <div className="relative inline-block mb-2">
            <span className="font-['Kalam'] text-[#FFB23F] text-3xl md:text-4xl absolute -top-8 -left-10 transform -rotate-12">Hey,</span>
            <CrownDoodle className="w-16 h-16 absolute -top-12 -right-4 md:-right-10 transform rotate-12" />
            <h2 className="text-white text-3xl md:text-5xl font-bold inline-block mr-4">I'm</h2>
            <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl mt-2">
              BANTI<span className="text-[#FF5210]">.</span>
            </h1>
          </div>
          
          <h3 className="text-xl md:text-3xl font-bold text-white mb-4 mt-4">Full Stack Developer</h3>
          <p className="text-white/70 text-sm md:text-base mb-6 max-w-lg">
            I build modern, scalable, and high-performance web applications using the MERN stack.
          </p>

          <p className="text-[#FFB23F] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-10 flex flex-wrap gap-2 items-center">
            React <span className="w-1.5 h-1.5 rounded-full bg-[#FF5210]"></span> Node.js <span className="w-1.5 h-1.5 rounded-full bg-[#FF5210]"></span> Express <span className="w-1.5 h-1.5 rounded-full bg-[#FF5210]"></span> MongoDB <span className="w-1.5 h-1.5 rounded-full bg-[#FF5210]"></span> Tailwind
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3.5 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black font-extrabold text-sm rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_25px_rgba(255,82,16,0.4)]">
              View My Work <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3.5 border border-white/20 text-white font-bold text-sm rounded-full flex items-center gap-2 hover:border-[#FF5210] hover:bg-[#FF5210]/10 transition-colors">
              <CustomGithubIcon size={18} /> View GitHub
            </button>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full lg:w-[45%] relative mt-16 lg:mt-0">
          <div className="aspect-[4/5] md:aspect-square bg-gradient-to-tr from-[#FF5210]/30 to-[#FFB23F]/20 rounded-[3rem] p-0 border border-[#FF5210]/20 relative overflow-hidden flex items-end justify-center shadow-[0_0_50px_rgba(255,82,16,0.15)]">
             <img src={bantiImg} alt="Banti Girdhari" className="w-[85%] h-[90%] object-cover object-top rounded-t-[2.5rem]" />
          </div>
          <div className="absolute top-4 -left-4 md:-left-12 bg-[#FF5210] text-white font-['Kalam'] text-sm md:text-lg px-6 py-4 rounded-[2rem] rounded-bl-none transform -rotate-6 shadow-xl z-20">
            LET'S BUILD <br/> SOMETHING <br/> AWESOME!
          </div>
          <div className="absolute top-1/3 -right-4 md:-right-10 text-[#FFB23F] font-['Kalam'] text-sm md:text-lg z-20 transform rotate-12">
            Ideas<br/>To<br/>Reality<br/><span className="text-2xl font-sans font-bold text-white">{"</>"}</span>
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-10 bg-[#161210] p-5 rounded-2xl border border-[#FF5210]/30 shadow-2xl transform -rotate-3 z-30">
             <p className="font-['Kalam'] text-white text-lg md:text-xl leading-tight">
               Code<br/>Deploy<br/>Scale<br/>Repeat
             </p>
             <CrownDoodle className="w-8 h-8 absolute top-4 right-4" />
          </div>
        </motion.div>
      </section>

      <section className="px-4 max-w-7xl mx-auto mt-20 relative z-10">
        <motion.div variants={fadeInUp} className="bg-[#161210] rounded-[2rem] p-6 md:p-10 border border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-white flex items-center gap-3 uppercase tracking-tight">
                <Sparkles className="text-[#FF5210] w-8 h-8" /> FEATURED PROJECTS
              </h3>
              <p className="text-white/50 text-sm mt-2 ml-11">Here are some of my recent deployments.</p>
            </div>
            <span className="text-[#FFB23F] text-sm font-bold flex items-center gap-2 cursor-pointer hover:underline">
              View All Projects <ArrowRight size={16} />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {projects.map((proj, i) => (
               <div key={i} className="group cursor-pointer bg-[#090A0F] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF5210]/40 transition-all">
                 <div className="aspect-video overflow-hidden relative">
                   <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <div className="p-5">
                   <span className="inline-block px-2 py-1 bg-[#FF5210]/15 text-[#FFB23F] text-[10px] font-bold rounded-md mb-3">{proj.tag}</span>
                   <div className="flex justify-between items-center">
                     <h4 className="text-white font-bold text-base">{proj.title}</h4>
                     <ExternalLink size={16} className="text-white/40 group-hover:text-[#FF5210] transition-colors" />
                   </div>
                   <p className="text-white/40 text-xs mt-1">{proj.cat}</p>
                 </div>
               </div>
             ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4 max-w-7xl mx-auto mt-8 relative z-10">
        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/4">
              <h3 className="text-3xl font-black text-white uppercase transform -rotate-3 text-center lg:text-left">
                MY SKILLS <span className="text-[#FF5210]">~</span>
              </h3>
            </div>
            <div className="lg:w-3/4 flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4">
              {bantiSkills.map((skill, i) => (
                <SkillBadge key={i} {...skill} />
              ))}
            </div>
        </motion.div>
      </section>

      <section className="px-4 max-w-7xl mx-auto mt-12 relative z-10">
        <motion.div variants={fadeInUp} className="bg-[#161210] rounded-[2rem] p-6 md:p-10 border border-white/5 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/3 relative flex justify-center">
             <div className="absolute top-10 -left-10 font-['Kalam'] text-[#FFB23F]/70 text-sm transform -rotate-12 hidden md:block">
               Same<br/>Person<br/>Different<br/>Ideas ?
             </div>
             <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#FF5210] to-[#FFB23F] rounded-full p-1 overflow-hidden shadow-[0_0_30px_rgba(255,82,16,0.3)]">
               <img src={bantiImg} alt="Banti" className="w-full h-full object-cover rounded-full filter contrast-110" />
             </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-left">
             <h3 className="text-3xl font-black text-white mb-4 uppercase">About Me</h3>
             <p className="text-white/60 text-sm leading-relaxed mb-6">
               I'm Banti, a Full Stack Developer who loves turning complex problems into scalable, user-friendly web applications. I enjoy deploying reliable tech that helps businesses operate and grow efficiently.
             </p>
             <button className="px-6 py-2 border border-[#FF5210]/40 text-[#FFB23F] text-xs font-bold rounded-full hover:bg-[#FF5210]/10 transition-colors inline-flex items-center gap-2">
               More About Me <ArrowRight size={14} />
             </button>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end w-full gap-6 md:gap-10">
             <div className="text-center">
                <Coffee className="w-8 h-8 mx-auto text-[#FF5210] mb-2" />
                <h4 className="text-3xl font-black text-white">5+</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Projects<br/>Completed</p>
             </div>
             <div className="text-center">
                <Users className="w-8 h-8 mx-auto text-[#FFB23F] mb-2" />
                <h4 className="text-3xl font-black text-white">100%</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Happy<br/>Clients</p>
             </div>
             <div className="text-center">
                <Sparkles className="w-8 h-8 mx-auto text-[#FF5210] mb-2" />
                <h4 className="text-3xl font-black text-white">2+</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Years of<br/>Experience</p>
             </div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 max-w-7xl mx-auto mt-20 mb-10 relative z-10">
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 relative">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter transform -rotate-2">
              LET'S <br/> WORK <br/> <span className="text-[#FF5210]">TOGETHER!</span>
            </h2>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#FF5210] rounded-full blur-xl opacity-40"></div>
          </div>
          <div className="md:w-1/2 flex flex-col items-start gap-6 relative">
            <p className="text-white/80 text-lg">
              Have a project in mind or just want to say hi?<br/>I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 w-full">
              <a href="tel:+919050141438" className="px-6 py-4 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black font-extrabold text-sm rounded-full flex items-center gap-2 hover:scale-105 transition-transform flex-1 justify-center shadow-[0_0_20px_rgba(255,82,16,0.3)]">
                <Send size={18} /> Get In Touch
              </a>
              <a href="mailto:hello@reactmedia.in" className="px-6 py-4 border border-white/20 text-white font-bold text-sm rounded-full flex items-center gap-2 hover:border-[#FF5210] hover:bg-white/5 transition-colors flex-1 justify-center">
                <Mail size={18} /> hello@reactmedia.in
              </a>
            </div>
            <div className="absolute -bottom-16 -right-10 font-['Kalam'] text-[#FFB23F]/80 text-lg transform rotate-12 hidden md:block">
              Good Ideas <br/> Start with <br/> a Conversation <br/> ↴
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

// ==========================================
// 2. PRASHANT'S CINEMATIC PAGE
// ==========================================
const PrashantPortfolio = () => {
  const prashantSkills = [
    { short: "Pr", name: "Premiere Pro", color: "#FF5210", bg: "rgba(255, 82, 16, 0.1)" },
    { short: "Ae", name: "After Effects", color: "#FFB23F", bg: "rgba(255, 178, 63, 0.1)" },
    { short: "Ps", name: "Photoshop", color: "#FF5210", bg: "rgba(255, 82, 16, 0.1)" },
    { short: "Ai", name: "Illustrator", color: "#FFB23F", bg: "rgba(255, 178, 63, 0.1)" },
    { short: "An", name: "Animate", color: "#FF5210", bg: "rgba(255, 82, 16, 0.1)" },
    { short: "Cp", name: "CapCut", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.08)" },
  ];

  return (
    <motion.div key="prashant" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="relative z-10 w-full overflow-hidden pb-20">
      
      <section className="pt-32 pb-16 px-4 max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div variants={fadeInUp} className="flex-1 relative">
          <div className="absolute -top-12 -left-10 transform -rotate-12">
            <span className="font-['Kalam'] text-[#FFB23F] text-3xl md:text-5xl">Hey,</span>
            <ArrowDoodle className="w-12 h-12 transform rotate-[100deg] -mt-2 ml-4 opacity-70" />
          </div>
          
          <CrownDoodle className="w-16 h-16 absolute -top-10 right-0 md:right-10 transform rotate-12" />
          
          <div className="absolute -top-20 right-10 md:right-20 bg-[#FF5210] text-white font-['Kalam'] text-sm md:text-lg px-6 py-4 rounded-[2rem] rounded-bl-none transform rotate-6 shadow-xl z-20">
            LET'S CREATE <br/> SOMETHING <br/> AWESOME!
          </div>

          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 mt-8 md:mt-0">I'm</h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter mb-6 drop-shadow-2xl">
            PRASHANT<span className="text-[#FF5210]">.</span>
          </h1>
          
          <p className="text-white/70 font-medium text-sm md:text-lg tracking-widest uppercase mb-8 flex flex-wrap gap-2 items-center">
            2D Animator <span className="w-1.5 h-1.5 rounded-full bg-[#FF5210]"></span> Motion Designer <span className="w-1.5 h-1.5 rounded-full bg-[#FFB23F]"></span> Video Editor
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black font-extrabold rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,82,16,0.4)]">
              <Play size={18} fill="black" /> Watch Showreel
            </button>
            <button className="px-6 py-3 border-2 border-white/20 text-white font-bold rounded-full flex items-center gap-2 hover:border-[#FF5210] hover:bg-white/5 transition-colors">
              View Projects <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full md:w-[45%] relative">
          <div className="aspect-square bg-gradient-to-tr from-[#FF5210] to-[#FFB23F] rounded-full p-2 relative overflow-hidden shadow-[0_0_50px_rgba(255,82,16,0.35)]">
             <img src={prashantImg} alt="Prashant Bhardwaj" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute top-10 -left-6 bg-[#161210] p-3 rounded-2xl border border-[#FF5210]/30 shadow-xl">
             <Clapperboard size={24} className="text-[#FFB23F]" />
          </div>
          <div className="absolute bottom-10 -right-4 bg-[#161210] p-3 rounded-2xl border border-[#FF5210]/30 shadow-xl transform rotate-12">
             <Zap size={24} className="text-[#FF5210]" />
          </div>
        </motion.div>
      </section>

      <section className="px-4 max-w-6xl mx-auto space-y-6 relative z-10">
        
        <motion.div variants={fadeInUp} className="bg-[#161210] rounded-[2rem] p-6 md:p-8 border border-white/5 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="md:w-1/3 z-10">
            <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-4">
              <Sparkles className="text-[#FF5210]" /> SHOWREEL
            </h3>
            <p className="text-white/50 text-sm mb-6">A quick glimpse of my work and my love for bringing stories to life through motion.</p>
            <button className="flex items-center gap-2 text-[#FFB23F] font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
               Watch Now <Play size={14} fill="currentColor" />
            </button>
          </div>
          <div className="md:w-2/3 w-full aspect-video rounded-2xl overflow-hidden relative group">
            <img src={cine1} alt="Showreel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
               <div className="w-16 h-16 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                 <Play size={24} fill="black" className="text-black ml-1" />
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-[#161210] rounded-[2rem] p-6 md:p-8 border border-white/5">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
               <h3 className="text-2xl font-black text-white uppercase">Featured Projects</h3>
               <svg className="w-12 h-6 text-[#FF5210]" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <path d="M10 25 Q 30 40, 50 25 T 90 25" />
               </svg>
            </div>
            <span className="text-[#FFB23F] text-xs font-bold flex items-center gap-1 cursor-pointer hover:underline hidden md:flex">
              View All Projects <ArrowRight size={14} />
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               {img: cine2, title: "RUN!", cat: "2D Animation"},
               {img: port1, title: "DAYDREAMS", cat: "Motion Graphics"},
               {img: cine1, title: "LOST SIGNAL", cat: "Animated Short"},
               {img: port2, title: "GROOVY TUNES", cat: "Music Video"}
             ].map((proj, i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-square rounded-2xl overflow-hidden mb-3 relative p-1 border border-white/5 group-hover:border-[#FF5210]/40 transition-all" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
                   <img src={proj.img} alt={proj.title} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform" />
                   <div className="absolute bottom-3 right-3 w-8 h-8 bg-[#FF5210] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={16} /></div>
                 </div>
                 <h4 className="text-white font-bold text-sm uppercase">{proj.title}</h4>
                 <p className="text-white/40 text-[10px]">{proj.cat}</p>
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-[#161210] rounded-[2rem] p-6 md:p-8 border border-white/5 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <h3 className="text-3xl font-black text-white">SKILLS</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {prashantSkills.map((skill, i) => (
                <SkillBadge key={i} {...skill} />
              ))}
            </div>
            <svg className="w-16 h-16 text-[#FF5210] hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
               <path d="M10 50 Q 30 10, 50 50 T 90 50" />
            </svg>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#FF5210] to-[#FFB23F] rounded-[2rem] p-6 flex items-center justify-center relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="font-['Kalam'] text-black text-2xl font-bold leading-tight text-center relative z-10">
                FOCUS <br/> DISCIPLINE <br/> CONSISTENCY
              </div>
              <svg className="absolute bottom-4 right-4 w-12 h-12 text-black/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><circle cx="50" cy="50" r="40"/></svg>
           </motion.div>

           <motion.div variants={fadeInUp} className="md:col-span-2 bg-[#161210] rounded-[2rem] p-8 border border-white/5 relative flex items-center">
              <div>
                <h3 className="text-2xl font-black text-white mb-3">ABOUT ME</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-4 max-w-lg">
                  I'm Prashant, a Video Editor and Motion Designer who loves turning ideas into playful, impactful visuals. I enjoy telling stories that entertain, connect and leave a lasting impression.
                </p>
                <button className="flex items-center gap-2 text-[#FFB23F] font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                  Know More About Me <Play size={12} fill="currentColor" />
                </button>
              </div>
              <div className="hidden md:block absolute right-8 bottom-8 w-24 h-24 bg-[#FF5210]/10 rounded-2xl flex items-center justify-center text-[#FF5210]">
                <ArrowUpRight size={48} strokeWidth={1.5} />
              </div>
           </motion.div>
        </div>

      </section>
    </motion.div>
  );
};

// ==========================================
// 3. FLAME CHARACTER FOOTER
// ==========================================
const FlameFooter = ({ setActivePage }) => {
  return (
    <footer className="relative w-full mt-16 select-none overflow-hidden bg-[#090A0F]">
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 380"
          className="w-full h-[180px] sm:h-[240px] md:h-[340px] lg:h-[380px] block"
          preserveAspectRatio="none"
        >
          <rect x="0" y="310" width="1440" height="80" fill="#FF5210" />
          <path
            d="M 0 350 L 0 110 C 30 95, 65 125, 45 165 C 25 205, 55 245, 95 235 C 65 180, 115 115, 165 165 C 215 215, 175 265, 225 275 C 255 210, 210 135, 185 100 C 265 100, 325 180, 295 245 C 335 245, 365 190, 360 155 C 395 190, 390 250, 375 280 C 405 295, 445 275, 480 315 L 480 360 Z"
            fill="#FF5210"
          />
          <path
            d="M 1440 350 L 1440 130 C 1410 100, 1385 65, 1370 30 C 1340 85, 1365 145, 1390 190 C 1345 170, 1320 95, 1270 65 C 1295 125, 1280 185, 1230 225 C 1185 260, 1215 165, 1250 130 C 1175 135, 1125 205, 1145 265 C 1110 265, 1085 215, 1110 175 C 1065 195, 1045 245, 1060 285 C 1025 260, 1015 220, 1030 190 C 990 215, 980 265, 995 295 C 965 310, 935 305, 910 315 L 910 360 Z"
            fill="#FF5210"
          />
          <path
            d="M 520 315 C 490 265, 485 205, 515 175 C 510 215, 535 235, 550 220 C 525 160, 565 90, 625 120 C 610 75, 650 30, 700 15 C 675 70, 695 110, 725 125 C 745 90, 780 65, 815 60 C 785 105, 800 150, 825 165 C 845 140, 875 135, 895 155 C 865 185, 870 225, 900 245 C 915 225, 935 230, 940 255 C 920 280, 915 300, 900 315 Z"
            fill="#090A0F"
            stroke="#FF5210"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g transform="translate(865, 18) rotate(22)">
            <path d="M -18 0 L 28 0 L 16 100 L -6 100 Z" fill="#090A0F" stroke="#FF5210" strokeWidth="11" strokeLinejoin="round" />
            <circle cx="5" cy="136" r="18" fill="#090A0F" stroke="#FF5210" strokeWidth="11" />
          </g>
          <path d="M 618 232 Q 642 212 666 228" fill="none" stroke="#FF5210" strokeWidth="10" strokeLinecap="round" />
          <path d="M 704 228 Q 728 212 752 232" fill="none" stroke="#FF5210" strokeWidth="10" strokeLinecap="round" />
          <path d="M 635 258 Q 685 268 735 258 L 722 315 L 648 315 Z" fill="#FF5210" />
          <line x1="685" y1="258" x2="685" y2="318" stroke="#090A0F" strokeWidth="8" />
          <rect x="475" y="285" width="82" height="58" rx="14" transform="rotate(-8 516 314)" fill="#090A0F" stroke="#FF5210" strokeWidth="11" />
          <rect x="855" y="285" width="82" height="58" rx="14" transform="rotate(8 896 314)" fill="#090A0F" stroke="#FF5210" strokeWidth="11" />
        </svg>
      </div>

      <div className="bg-[#FF5210] text-[#090A0F] pt-4 pb-0 px-6 md:px-14 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start mb-10 md:mb-14">
          
          <div className="flex flex-col items-start space-y-2.5 text-left">
            <h4 className="font-extrabold text-xl md:text-2xl tracking-tight text-[#090A0F] mb-1">Navigation</h4>
            <button onClick={() => setActivePage('Home')} className="text-sm md:text-base font-medium text-[#090A0F]/90 hover:text-white transition-colors">Home</button>
            <button onClick={() => setActivePage('Our Work')} className="text-sm md:text-base font-medium text-[#090A0F]/90 hover:text-white transition-colors">Projects</button>
            <button onClick={() => setActivePage('Founder (Banti)')} className="text-sm md:text-base font-medium text-[#090A0F]/90 hover:text-white transition-colors">Banti's Profile</button>
            <button onClick={() => setActivePage('Prashant')} className="text-sm md:text-base font-medium text-[#090A0F]/90 hover:text-white transition-colors">Prashant's Cut</button>
            <button onClick={() => setActivePage('Contact')} className="text-sm md:text-base font-medium text-[#090A0F]/90 hover:text-white transition-colors">Contact Us</button>
          </div>

          <div className="flex flex-col items-start md:items-center text-left md:text-center my-auto">
            <h4 className="font-extrabold text-xl md:text-2xl tracking-tight text-[#090A0F] mb-2">Say Hi!</h4>
            <p className="text-sm md:text-base font-medium text-[#090A0F]/90 mb-5">Interested in working with us?</p>
            <button onClick={() => setActivePage('Contact')} className="px-8 py-4 bg-[#090A0F] text-[#FF5210] font-extrabold text-sm md:text-base rounded-full hover:scale-105 transition-transform shadow-lg">
              Lets Chat!
            </button>
            <a href="tel:+919050141438" className="mt-3 text-xs font-bold text-[#090A0F]/80 hover:text-white transition-colors">
              +91 9050141438 • hello@reactmedia.in
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4">
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/reactmedia.in/?hl=en" target="_blank" rel="noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-[#090A0F] text-[#FF5210] flex items-center justify-center hover:scale-110 transition-transform">
                <CustomInstaIcon size={18} />
              </a>
              <a href="tel:+919050141438" title="Call" className="w-10 h-10 rounded-full bg-[#090A0F] text-[#FF5210] flex items-center justify-center hover:scale-110 transition-transform">
                <Phone size={18} />
              </a>
              <a href="mailto:hello@reactmedia.in" title="Email" className="w-10 h-10 rounded-full bg-[#090A0F] text-[#FF5210] flex items-center justify-center hover:scale-110 transition-transform">
                <Mail size={18} />
              </a>
              <button onClick={() => { setActivePage('Home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} title="Home" className="w-10 h-10 rounded-full bg-[#090A0F] text-[#FF5210] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Globe size={18} />
              </button>
            </div>

            <p className="font-extrabold text-base md:text-lg text-[#090A0F]">© 2026 ReactMedia</p>

            <button onClick={() => setActivePage('Founder (Banti)')} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-[#090A0F] text-[#090A0F] text-xs font-bold hover:bg-[#090A0F] hover:text-[#FF5210] transition-colors cursor-pointer">
              <span className="font-black">R</span> Built with love at ReactMedia
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden flex justify-center items-end pt-2">
          <h1 className="text-[13.5vw] font-black uppercase text-[#090A0F] leading-[0.78] tracking-tighter text-center whitespace-nowrap -mb-2">
            REACTMEDIA
          </h1>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// 4. MAIN APP ROUTER & OVERALL LAYOUT
// ==========================================
export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgThemeClass = "bg-[#090A0F]";
  const selectionClass = "selection:bg-[#FF5210] selection:text-white";

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Outfit:wght@300;400;500;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className={`font-['Outfit'] min-h-screen ${selectionClass} overflow-x-hidden relative ${bgThemeClass} text-white`}>
      
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* --- SEAMLESS RESPONSIVE NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#090A0F] py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div onClick={() => setActivePage('Home')} className="flex items-center gap-3 cursor-pointer z-50">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src="/favicon.png" alt="ReactMedia" className="w-full h-full object-contain mix-blend-screen" />
            </div>
            <h1 className="font-black text-2xl tracking-tighter text-white">
              REACT<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5210] to-[#FFB23F]">MEDIA</span><span className="text-[#FF5210]">.</span>
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[14px] font-bold text-white/70">
            {['Home', 'Our Work', 'Founder (Banti)', 'Prashant'].map(item => (
              <button key={item} onClick={() => setActivePage(item)} className={`relative transition-colors hover:text-white pb-2 ${activePage === item ? 'text-white' : 'text-white/60'}`}>
                {item === 'Prashant' ? "Prashant's Cut" : item === 'Founder (Banti)' ? "Banti's Profile" : item}
                {activePage === item && <motion.div layoutId="navline" className="absolute bottom-0 left-0 w-full h-[3px] rounded-t-md bg-gradient-to-r from-[#FF5210] to-[#FFB23F]" />}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 z-50">
            <button onClick={() => setActivePage('Contact')} className="hidden md:flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black text-[13px] font-extrabold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,82,16,0.4)]">
              Contact
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-10 h-10 bg-[#FF5210] rounded-full flex items-center justify-center text-white">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 w-full h-screen bg-[#090A0F] flex flex-col pt-10 px-8 gap-8 z-40 border-t border-white/5"
            >
              {['Home', 'Our Work', 'Founder (Banti)', 'Prashant'].map(item => (
                <button key={item} onClick={() => setActivePage(item)} className={`text-left font-black text-3xl tracking-tight ${activePage === item ? 'text-[#FF5210]' : 'text-white'}`}>
                  {item === 'Prashant' ? "Prashant's Cut" : item === 'Founder (Banti)' ? "Banti's Profile" : item}
                </button>
              ))}
              <button onClick={() => setActivePage('Contact')} className="mt-8 py-5 font-black text-xl bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black rounded-2xl w-full">Contact Us</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- MAIN CONTENT ROUTER --- */}
      <main className="relative z-10 w-full pt-10">
        <AnimatePresence mode="wait">
          {activePage === 'Founder (Banti)' && <BantiPortfolio key="banti" />}
          {activePage === 'Prashant' && <PrashantPortfolio key="prashant" />}

          {/* HOME PAGE WITH MARKETING COMPARISON ADDED */}
          {activePage === 'Home' && (
            <motion.div key="home" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="relative w-full pb-20">
              
              <section className="pt-32 pb-16 px-4 max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <span className="font-['Kalam'] text-[#FFB23F] text-3xl md:text-5xl absolute -top-8 -left-16 transform -rotate-12">Hey, we are</span>
                  <CrownDoodle className="w-16 h-16 absolute -top-12 -right-8 transform rotate-12" />
                  <h1 className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
                    REACT<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5210] to-[#FFB23F]">MEDIA</span>
                  </h1>
                </div>
                
                <p className="text-white/70 font-medium text-sm md:text-lg tracking-widest uppercase mb-10">
                  Digital Marketing <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5210] mx-2"></span> Web Development <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFB23F] mx-2"></span> Creative Strategy
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => setActivePage('Our Work')} className="px-8 py-4 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black font-black text-sm uppercase rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_25px_rgba(255,82,16,0.4)]">
                    <Play size={18} fill="black" /> Our Projects
                  </button>
                  <button onClick={() => setActivePage('Contact')} className="px-8 py-4 border-2 border-white/20 text-white font-black text-sm uppercase rounded-full hover:border-[#FF5210] hover:bg-[#FF5210]/10 transition-colors flex items-center gap-2">
                    Let's Talk <ArrowRight size={18} />
                  </button>
                </div>
              </section>

              {/* --- TRADITIONAL VS DIGITAL MARKETING COMPARISON SECTION ADDED HERE --- */}
              <MarketingComparisonSection />

              <section className="px-4 max-w-6xl mx-auto space-y-6 relative z-10 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div onClick={() => setActivePage('Founder (Banti)')} className="bg-[#161210] rounded-[2rem] p-8 border border-white/5 cursor-pointer group hover:border-[#FF5210]/50 transition-colors">
                    <div className="w-16 h-16 bg-[#FF5210] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,82,16,0.3)]">
                      <Code size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">Web Development</h3>
                    <p className="text-white/50 mb-6">Scalable React & Next.js applications, CRM, Mobile Apps, and Cloud Solutions.</p>
                    <span className="text-[#FF5210] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">Meet Banti <ArrowRight size={16}/></span>
                  </div>

                  <div onClick={() => setActivePage('Prashant')} className="bg-[#161210] rounded-[2rem] p-8 border border-white/5 cursor-pointer group hover:border-[#FFB23F]/50 transition-colors">
                    <div className="w-16 h-16 bg-[#FFB23F] rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,178,63,0.3)]">
                      <Clapperboard size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">Creative & Marketing</h3>
                    <p className="text-white/50 mb-6">Cinematic videos, brand visuals, Meta Ads, SEO, and Social Media Marketing.</p>
                    <span className="text-[#FFB23F] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">Meet Prashant <ArrowRight size={16}/></span>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* OUR WORK PAGE */}
          {activePage === 'Our Work' && (
            <motion.div key="work" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen">
              <motion.div className="flex items-center justify-center gap-4 mb-10">
                 <Sparkles className="text-[#FF5210] w-8 h-8" />
                 <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Our Work</h1>
                 <Sparkles className="text-[#FFB23F] w-8 h-8" />
              </motion.div>

              <motion.div variants={fadeInUp} className="w-full h-[60vh] md:h-[75vh] rounded-[2rem] overflow-hidden border-4 border-[#161210] bg-[#161210] p-2 shadow-2xl">
                <iframe
                  src="https://drive.google.com/embeddedfolderview?id=1x7abm5S0rdhk1epxRl6Z7X5RkEVmtaZ_#grid"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-3xl bg-white"
                  title="Portfolio">
                </iframe>
              </motion.div>
            </motion.div>
          )}

          {/* CONTACT PAGE */}
          {activePage === 'Contact' && (
            <motion.div key="contact" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen flex items-center">
              <div className="w-full bg-[#161210] rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5210]/20 blur-[100px] rounded-full"></div>
                
                <div>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">SAY HELLO!</h1>
                  <p className="text-white/60 mb-10 text-lg">Ready to create something awesome? Drop us a message.</p>
                  
                  <div className="space-y-6">
                    <a href="tel:+919050141438" className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-[#FF5210] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"><Phone size={24} /></div>
                      <div>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Call Us</p>
                        <p className="text-white font-bold text-xl">+91 9050141438</p>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/reactmedia.in/?hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-[#FFB23F] rounded-2xl flex items-center justify-center text-black group-hover:scale-110 transition-transform"><CustomInstaIcon size={24} /></div>
                      <div>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Instagram</p>
                        <p className="text-white font-bold text-xl">@reactmedia.in</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-[#090A0F] p-8 rounded-[2rem] relative z-10 border border-white/5">
                  <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:border-[#FF5210] transition-colors" />
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:border-[#FF5210] transition-colors" />
                    <textarea rows="4" placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:border-[#FF5210] transition-colors resize-none"></textarea>
                    <button type="button" className="w-full py-4 bg-gradient-to-r from-[#FF5210] to-[#FFB23F] text-black font-black uppercase tracking-widest rounded-xl mt-4 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,82,16,0.3)]">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- FLAME CHARACTER FOOTER --- */}
      <FlameFooter setActivePage={setActivePage} />
    </div>
  );
}