import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Code, Megaphone, Video, ChevronRight,
  Phone, Mail, Sparkles, LayoutGrid, Globe, Smartphone,
  Database, Cloud, Target, Users, Play, Clapperboard,
  Film, Layers, Aperture, CheckCircle, MonitorPlay,
  ArrowUpRight, Menu, X, ArrowLeft, Clock, Calendar
} from 'lucide-react';

// --- ASLI PHOTOS LINK ---
import logoImg from './assets/logo.jpg';
import bantiImg from './assets/banti.jpg';
import prashantImg from './assets/prashant.jpg';

// --- PLACEHOLDER IMAGES ---
const port1 = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop";
const port2 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
const cine1 = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop";
const cine2 = "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop";

// --- ANIMATIONS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- CUSTOM CURSOR ---
const CustomCursor = ({ cursorColor }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const updateMousePos = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMousePos);
    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[100] mix-blend-difference flex items-center justify-center hidden md:flex"
      style={{ borderColor: cursorColor, boxShadow: `0 0 10px ${cursorColor}` }}
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cursorColor }}></div>
    </motion.div>
  );
};

// ==========================================
// 1. FOUNDER BANTI PROFILE
// ==========================================
const BantiPortfolio = () => {
  return (
    <motion.div key="banti" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="bg-white text-slate-900 font-sans relative z-10 w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle at center, #000000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <motion.div variants={fadeInUp}>
          <span className="inline-block px-4 py-1.5 bg-[#F4F0FF] text-violet-700 text-xs font-bold tracking-widest rounded-full mb-6 uppercase border border-violet-100">
            Founder Profile
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Building Digital Experiences <br />That <span className="text-violet-600">Drive Growth.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-xl font-light leading-relaxed mb-10">
            Hi, I'm Banti Kohli. I combine technology, creativity, and marketing strategies to help businesses build powerful digital experiences and grow online.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-[#F4F0FF] rounded-t-[50px] md:rounded-t-[80px] relative z-10 mt-10">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-bold tracking-widest rounded-full mb-4 uppercase">
              Why Choose Me
            </span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight max-w-lg">
                Technology & Marketing, <br />Our Commitment
              </h2>
              <p className="text-gray-500 max-w-md font-light text-sm md:text-base">
                Technology and marketing are not separate anymore. I believe every successful brand needs a combination of strong technology and smart strategy.
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-[#E9D5FF] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Software <br />Engineering</h3>
                  <div className="w-10 h-10 rounded-full border border-gray-900/10 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs md:text-sm font-light mb-8">Building modern websites, React applications, CRM systems, and scalable digital platforms.</p>
              </div>
              <div className="mt-auto aspect-video rounded-2xl overflow-hidden">
                <img src={port1} alt="Software" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0F172A] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer overflow-hidden shadow-2xl md:scale-105 z-10">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Digital <br />Marketing</h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-900 transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm font-light mb-8">Creating performance-driven campaigns, Meta Ads, SEO, and lead generation.</p>
              </div>
              <div className="mt-auto aspect-video rounded-2xl overflow-hidden">
                <img src={port2} alt="Marketing" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#E9D5FF] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Creative <br />Strategy</h3>
                  <div className="w-10 h-10 rounded-full border border-gray-900/10 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs md:text-sm font-light mb-8">Combining creativity, branding, and AI automation tools for sustainable brand growth.</p>
              </div>
              <div className="mt-auto aspect-video rounded-2xl overflow-hidden">
                <img src={cine1} alt="Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold tracking-wider rounded-full mb-4 uppercase">Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">Digital Expertise You <br />Can Count On</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-start md:items-end gap-4">
              <p className="text-gray-500 max-w-md font-light text-left md:text-right text-sm md:text-base">Building a personal brand means creating trust, delivering value, and connecting with people through meaningful digital experiences.</p>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:h-80">
            <motion.div variants={fadeInUp} className="h-64 md:h-full rounded-[2rem] overflow-hidden sm:col-span-2 md:col-span-1">
              <img src={bantiImg} alt="Banti Kohli" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#F8F4FF] rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center text-center border border-violet-100">
              <h3 className="text-5xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-4">Successful Projects</p>
              <p className="text-gray-500 text-xs font-light">Delivering high-end web development and marketing campaigns.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center shadow-sm relative">
              <ArrowUpRight className="absolute top-8 right-8 text-gray-300" size={24} />
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mb-4"><CheckCircle size={20} /></div>
              <p className="text-gray-500 text-sm font-medium mb-1">Happy Clients</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">100%</h3>
              <p className="text-gray-400 text-xs font-light">Client focus and business growth delivery.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#D8B4FE] to-[#C084FC] rounded-[2rem] p-6 md:p-8 flex flex-col justify-center relative overflow-hidden sm:col-span-2 md:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-2xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Start With Me</h3>
              <p className="text-white/80 text-xs font-light relative z-10 mb-6">Let's build something extraordinary together.</p>
              <button className="px-6 py-2 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full text-xs font-bold uppercase tracking-widest w-max hover:bg-white hover:text-violet-600 transition-colors relative z-10">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

// ==========================================
// 2. PRASHANT'S CINEMATIC PAGE
// ==========================================
const PrashantPortfolio = () => {
  const prashantSkills = ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "CapCut", "AI Video Tools", "Motion Graphics", "Color Grading", "VFX"];

  const prashantServices = [
    { title: "VIDEO PRODUCTION", icon: <Clapperboard size={32} />, items: ["Cinematic Video Editing", "Promotional Films", "YouTube Videos", "Corporate Videos", "Music Videos"] },
    { title: "SOCIAL MEDIA CONTENT", icon: <MonitorPlay size={32} />, items: ["Instagram Reels", "Short Form Content", "Viral Content Editing", "Podcast Editing"] },
    { title: "REAL ESTATE CONTENT", icon: <Film size={32} />, items: ["Property Videos", "Luxury Project Films", "Drone Video Editing", "Walkthrough Videos", "Real Estate Ads"] },
    { title: "GRAPHIC DESIGN", icon: <Aperture size={32} />, items: ["Social Media Creatives", "Posters", "Thumbnails", "Brochures", "Branding Material"] }
  ];

  return (
    <motion.div key="prashant" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="relative z-10 font-sans text-gray-300 w-full overflow-hidden">
      <style>{`
        .film-grain::before {
          content: ""; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png');
          opacity: 0.06; pointer-events: none; z-index: 0; mix-blend-mode: overlay;
        }
      `}</style>
      <div className="film-grain"></div>

      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-center relative z-10">
        <motion.div variants={fadeInUp} className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-400/50 p-1 mb-8 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
          <img src={prashantImg} alt="Prashant Bhardwaj" className="w-full h-full rounded-full object-cover filter contrast-125 saturate-50" />
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6">Prashant Bhardwaj • Director's Cut</motion.h2>
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
          Creating Visual Stories That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Make Brands Stand Out</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-xl max-w-3xl mx-auto mb-12 font-light">
          "I create cinematic videos, powerful brand visuals and marketing content that helps businesses attract attention, build trust and grow."
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#cinematic-work" className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[10px] md:text-xs font-extrabold tracking-widest uppercase rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_rgba(138,43,226,0.4)]">
            <Play size={16} fill="white" /> View My Work
          </a>
        </motion.div>
      </section>

      <section className="py-20 md:py-24 px-4 bg-gradient-to-b from-transparent to-purple-900/10 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Hi, I'm Prashant Bhardwaj</motion.h2>
            <motion.p variants={fadeInUp} className="text-cyan-400 text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8">
              Real Estate Marketing Specialist | Creative Director | Video Editor | Graphic Designer
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
              I help real estate developers, builders, marketing agencies and businesses grow their brand through premium visual content that attracts attention, builds trust and generates leads.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
              <span className="text-white font-medium">Editing is not just about making videos look beautiful.</span> Every video, reel, advertisement and visual campaign is created with a marketing purpose.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 md:gap-3">
              {prashantSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 md:px-4 md:py-2 bg-black/50 border border-purple-500/30 text-gray-300 text-[10px] md:text-xs uppercase tracking-wider rounded-lg shadow-[0_0_10px_rgba(138,43,226,0.1)]">{skill}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-black/40 p-6 md:p-10 rounded-[2rem] md:rounded-3xl border border-cyan-900/30 backdrop-blur-xl">
            <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 uppercase tracking-widest border-b border-white/10 pb-4">My Story</motion.h3>
            <div className="space-y-6 md:space-y-8 border-l border-cyan-500/30 pl-4 md:pl-6 ml-2 md:ml-3">
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute -left-[23px] md:-left-[31px] top-1 w-3 h-3 md:w-4 md:h-4 bg-cyan-500 rounded-full shadow-[0_0_10px_#00E5FF]"></div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1">The Beginning</h4>
                <p className="text-gray-400 text-xs md:text-sm">Started with a deep passion for visual storytelling and cinematic arts.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute -left-[23px] md:-left-[31px] top-1 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full shadow-[0_0_10px_#8A2BE2]"></div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1">Skill Development</h4>
                <p className="text-gray-400 text-xs md:text-sm">Mastered Video Editing, Motion Graphics, Branding, and Content Creation.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute -left-[23px] md:-left-[31px] top-1 w-3 h-3 md:w-4 md:h-4 bg-cyan-500 rounded-full shadow-[0_0_10px_#00E5FF]"></div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1">1+ Year Experience</h4>
                <p className="text-gray-400 text-xs md:text-sm">Delivered premium Real Estate Projects, Brand Videos, and High-converting Social Media Campaigns.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white text-center mb-12 md:mb-16 uppercase tracking-tighter">Premium Services</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24">
            {prashantServices.map((srv, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-purple-500/50 hover:bg-purple-900/10 transition-all group">
                <div className="text-cyan-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform">{srv.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 tracking-widest">{srv.title}</h3>
                <ul className="space-y-2">
                  {srv.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 text-xs md:text-sm flex items-center gap-2"><ArrowRight size={12} className="text-purple-500" /> {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

// ==========================================
// 3. SEO-OPTIMIZED BLOG ARTICLE VIEW
// ==========================================
const ServiceBlogDetail = ({ service, onBack, onNavigateContact }) => {
  return (
    <motion.article
      key={service.id}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
      className="pt-32 pb-24 px-4 md:px-6 max-w-4xl mx-auto text-gray-300 min-h-screen relative z-10"
    >
      <motion.button
        variants={fadeInUp}
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A3FF12] hover:text-white transition-colors mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
      >
        <ArrowLeft size={16} /> Back to Marketing Services
      </motion.button>

      <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
        <span className="px-3 py-1 bg-[#A3FF12]/10 border border-[#A3FF12]/30 text-[#A3FF12] rounded-full font-bold uppercase tracking-wider text-[10px]">
          {service.category}
        </span>
        <span className="flex items-center gap-1.5"><Calendar size={14} /> {service.date}</span>
        <span className="flex items-center gap-1.5"><Clock size={14} /> {service.readTime}</span>
      </motion.div>

      <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
        {service.h1}
      </motion.h1>

      <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8 border-l-2 border-[#A3FF12] pl-4">
        {service.summary}
      </motion.p>

      <motion.div variants={fadeInUp} className="w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-[0_0_40px_rgba(163,255,18,0.15)] bg-black relative">
        {service.youtubeEmbed ? (
          <iframe
            className="w-full h-full object-cover pointer-events-none"
            src={`${service.youtubeEmbed}?autoplay=1&mute=1&loop=1&playlist=${service.youtubeEmbed.split('/').pop()}&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
            title={service.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        )}
      </motion.div>

      <motion.div variants={staggerContainer} className="space-y-10 text-gray-300 text-sm md:text-base leading-relaxed font-light">
        <motion.section variants={fadeInUp} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A3FF12]"></span>
            {service.section1Title}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {service.section1Body}
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} className="space-y-6 bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Key Execution Framework & Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.keyPoints.map((item, idx) => (
              <div key={idx} className="bg-black/50 border border-white/5 p-4 rounded-2xl">
                <h3 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#A3FF12] shrink-0" />
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A3FF12]"></span>
            {service.section2Title}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {service.section2Body}
          </p>
        </motion.section>

        <motion.div variants={fadeInUp} className="mt-14 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#A3FF12]/10 via-[#0A0A0A] to-black border border-[#A3FF12]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#A3FF12] text-[10px] font-bold tracking-widest uppercase mb-2 block">Accelerate Your Revenue</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Want to scale with {service.title}?</h3>
            <p className="text-gray-400 text-xs md:text-sm">Let our team engineer high-performing marketing funnels for your company.</p>
          </div>
          <button
            onClick={onNavigateContact}
            className="shrink-0 px-8 py-4 bg-[#A3FF12] text-black text-xs font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform flex items-center gap-2"
          >
            Get In Touch <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

// ==========================================
// 4. MAIN APP ROUTER & OVERALL LAYOUT
// ==========================================
export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeBlogService, setActiveBlogService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [activePage, activeBlogService]);

  const isCinematic = activePage === 'Prashant';
  const isBanti = activePage === 'Founder (Banti)';

  let cursorColor = "#A3FF12";
  let bgThemeClass = "bg-[#030303]";
  let selectionClass = "selection:bg-[#A3FF12] selection:text-black";

  if (isCinematic) {
    cursorColor = "#00E5FF";
    bgThemeClass = "bg-[#050505]";
    selectionClass = "selection:bg-cyan-400 selection:text-black";
  } else if (isBanti) {
    cursorColor = "#7C3AED";
    bgThemeClass = "bg-white";
    selectionClass = "selection:bg-violet-200 selection:text-violet-900";
  }

  const itServices = [
    { name: "Website Development", icon: <Globe size={20} /> },
    { name: "React Development", icon: <Code size={20} /> },
    { name: "Next.js Development", icon: <Code size={20} /> },
    { name: "Ecommerce Website", icon: <Database size={20} /> },
    { name: "Landing Page", icon: <LayoutGrid size={20} /> },
    { name: "CRM Development", icon: <Users size={20} /> },
    { name: "Mobile App Development", icon: <Smartphone size={20} /> },
    { name: "SaaS Development", icon: <Cloud size={20} /> },
    { name: "AI Integration", icon: <Sparkles size={20} /> },
    { name: "Cloud Solutions", icon: <Cloud size={20} /> }
  ];

  // --- NEW PORTFOLIO AUTO-PLAY VIDEOS (Direct URLs for Auto-play without iframe blocks) ---
  const portfolioVideos = [
    { id: 1, title: "Ghaziabad NH-24 Real Estate", src: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-luxury-home-exterior-42456-large.mp4", span: "md:col-span-2 md:row-span-2" },
    { id: 2, title: "New Goa Project", src: "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4", span: "md:col-span-1 md:row-span-1" },
    { id: 3, title: "Palwal Transformation", src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4", span: "md:col-span-1 md:row-span-2" },
    { id: 4, title: "Sargam Final Setup", src: "https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-financial-district-4395-large.mp4", span: "md:col-span-1 md:row-span-1" },
    { id: 5, title: "Cinematic Branding Reel", src: "https://videos.pexels.com/video-files/3206918/3206918-uhd_2560_1440_25fps.mp4", span: "md:col-span-2 md:row-span-1" },
  ];

  const marketingBlogsData = [
    {
      id: "meta-ads",
      title: "Meta Ads",
      category: "Paid Advertising & Performance",
      date: "August 2026",
      readTime: "5 min read",
      h1: "High-ROI Meta Advertising (Facebook & Instagram Ads) Strategy Guide",
      summary: "Unlock exponential brand awareness and qualified customer conversions through algorithmic Meta advertising pipelines engineered for measurable ROAS.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
      section1Title: "Why Meta Ads Remain Unmatched for Scale",
      section1Body: "Meta Ads provide access to over 3 billion active users worldwide across Facebook, Instagram, and Messenger. By harnessing Meta Advantage+ machine learning, your campaigns reach ultra-targeted buyer personas based on real-time behavior, interests, and purchase histories rather than guesswork.",
      keyPoints: [
        { title: "Targeted Audience Clustering", desc: "Custom and lookalike audiences built from high-LTV customer data." },
        { title: "Direct-Response Creatives", desc: "Short video ads, carousels, and hooks crafted to stop scrolling instantly." },
        { title: "CAPI & Pixel Tracking", desc: "Server-side tracking for zero data loss and accurate attribution." },
        { title: "Continuous A/B Optimization", desc: "Testing headlines, angles, and demographics to lower Cost-Per-Acquisition." }
      ],
      section2Title: "How Infinia Delivers Unstoppable Meta Ad Results",
      section2Body: "We don't simply run ads; we build full-funnel customer acquisition ecosystems. From high-converting visual production to dedicated landing pages, every penny spent is benchmarked against real profit margins."
    },
    {
      id: "google-ads",
      title: "Google Ads",
      category: "Search Engine Marketing (PPC)",
      date: "August 2026",
      readTime: "6 min read",
      h1: "Capture High-Intent Customers with Google PPC & Search Campaigns",
      summary: "Position your business at the exact moment prospects search for your high-ticket solutions on Google Search, YouTube, and the Display Network.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop",
      section1Title: "Capturing Demand at the Point of Maximum Intent",
      section1Body: "Unlike push marketing on social feeds, Google Ads targets users with high commercial intent. When someone searches 'Best Luxury Villa in NCR' or 'Custom Web Development Company', ranking #1 produces the highest conversion rates in digital marketing.",
      keyPoints: [
        { title: "Exact Match & Intent Keywords", desc: "Eliminating broad waste through strict negative keyword lists." },
        { title: "Performance Max (PMax)", desc: "Multi-channel automation across Search, Maps, Gmail, and YouTube." },
        { title: "Quality Score Maximization", desc: "Fast-loading landing pages that reduce CPC (Cost Per Click)." },
        { title: "Transparent Conversion Tracking", desc: "Call recording and revenue-based conversion value bidding." }
      ],
      section2Title: "Precision PPC Engineered by Infinia",
      section2Body: "Our PPC analysts structure ad groups and optimize bid strategies daily, ensuring your ad budget delivers measurable phone calls, quotation submissions, and closed deals."
    },
    {
      id: "lead-gen",
      title: "Lead Generation",
      category: "B2B & Real Estate Lead Systems",
      date: "August 2026",
      readTime: "4 min read",
      h1: "Automated Lead Generation Pipelines Delivering Qualified Prospects",
      summary: "Transform website visitors and social clicks into verified buyers using multi-step qualifying funnels and instant CRM sales automations.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      section1Title: "Quality Over Quantity: The Qualified Lead Funnel",
      section1Body: "Getting hundreds of junk inquiries wastes your sales team's valuable hours. Modern lead generation requires multi-step qualification forms, OTP verification, and behavioral scoring so your closers only speak with decision-makers.",
      keyPoints: [
        { title: "Dynamic Lead Forms", desc: "Interactive questionnaires that weed out casual clickers." },
        { title: "Instant WhatsApp & CRM Sync", desc: "Pushing hot leads to sales reps within 30 seconds." },
        { title: "Automated Follow-ups", desc: "SMS and email nurturing flows that warm up prospects automatically." },
        { title: "Lead Cost Optimization", desc: "Continuous funnel testing to maximize pipeline ROI." }
      ],
      section2Title: "Why Businesses Trust Infinia for Lead Generation",
      section2Body: "From Real Estate project launches to enterprise B2B SaaS, we engineer lead pipelines that operate predictably on autopilot 24/7."
    },
    {
      id: "seo",
      title: "SEO",
      category: "Organic Search Optimization",
      date: "August 2026",
      readTime: "7 min read",
      h1: "Dominate Search Engine Rankings with High-Authority SEO Architecture",
      summary: "Build an organic search engine fortress that drives high-intent, zero-ad-cost traffic to your website month after month.",
      image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1200&auto=format&fit=crop",
      section1Title: "The Power of Long-Term Organic Authority",
      section1Body: "While paid ads stop the second you pause your budget, SEO compounds over time. Ranking in top 3 organic spots establishes unconditional trust and generates sustainable inbound inquiries indefinitely.",
      keyPoints: [
        { title: "Technical SEO & Speed", desc: "Sub-second load times, schema markups, and Core Web Vitals perfection." },
        { title: "Keyword Clustering", desc: "Structuring pillar content to rank for thousands of related search queries." },
        { title: "High-Domain Backlinks", desc: "Ethical outreach securing authority links from top industry publications." },
        { title: "Local SEO & Google Maps", desc: "GMB optimization to capture local market supremacy." }
      ],
      section2Title: "White-Hat Search Dominance with Infinia",
      section2Body: "We execute deep algorithmic optimization, creating semantic topical maps and technical superiority that outranks competitors reliably."
    },
    {
      id: "smm",
      title: "Social Media Marketing",
      category: "Social Branding & Viral Reach",
      date: "August 2026",
      readTime: "5 min read",
      h1: "Building Magnetic Social Media Presence That Converts Viewers into Clients",
      summary: "Turn passive social media feeds into a vibrant community of loyal brand advocates through strategic storytelling, visual design, and viral short-form media.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
      section1Title: "Transforming Attention into Commercial Value",
      section1Body: "Social media is modern word-of-mouth. Businesses that maintain a visually stunning, value-packed profile build immediate credibility before prospects ever speak with a sales representative.",
      keyPoints: [
        { title: "Content Calendar Scheduling", desc: "Consistent monthly cadence designed around brand milestones." },
        { title: "High-Aesthetic Carousels & Reels", desc: "Bespoke graphics aligned strictly with brand identity." },
        { title: "Community Management", desc: "Active direct message handling and relationship nurturing." },
        { title: "Platform Calibration", desc: "Tailoring strategies specifically for Instagram, LinkedIn, and YouTube." }
      ],
      section2Title: "The Infinia Social Growth Engine",
      section2Body: "We craft cinematic short-form video hooks and premium social assets that elevate your enterprise above the crowded noise of generic content."
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      category: "Thought Leadership & Inbound",
      date: "August 2026",
      readTime: "6 min read",
      h1: "High-Impact Content Marketing That Educates, Persuades, and Retains",
      summary: "Establish your brand as the undeniable authority in your domain with research-backed articles, video scripts, and conversion copy.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
      section1Title: "Content That Solves Real Buyer Problems",
      section1Body: "Great content does not sell aggressively; it informs, solves bottlenecks, and frames your product or service as the only logical solution in the customer's mind.",
      keyPoints: [
        { title: "Persuasive Copywriting", desc: "Headlines and copy engineered with consumer psychology in mind." },
        { title: "Thought Leadership Articles", desc: "Deep-dive analyses that demonstrate master-level industry insight." },
        { title: "Repurposing Blueprint", desc: "Transforming single master assets into reels, blogs, and carousels." },
        { title: "Buyer Journey Mapping", desc: "Content tailored for Top, Middle, and Bottom of the funnel." }
      ],
      section2Title: "Strategic Content Direction by Infinia",
      section2Body: "Our writers and visual artists synthesize technical facts into magnetic narratives that engage decision-makers and drive organic inbound pipeline."
    },
    {
      id: "branding",
      title: "Branding",
      category: "Brand Identity & Design",
      date: "August 2026",
      readTime: "5 min read",
      h1: "End-to-End Brand Identity Design & Strategic Visual Positioning",
      summary: "Craft an indelible visual persona that evokes luxury, reliability, and modern authority across every customer touchpoint.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
      section1Title: "More Than A Logo: Complete Brand Architecture",
      section1Body: "Your brand is the emotional sum of what customers say about you when you're not in the room. A coherent identity commands premium pricing and guarantees instant market recognition.",
      keyPoints: [
        { title: "Modern Vector Logo Systems", desc: "Responsive logos designed for mobile app icons to giant billboards." },
        { title: "Typography & Color Theory", desc: "Color psychology and curated fonts that inspire confidence." },
        { title: "Comprehensive Brand Guidelines", desc: "Clear rulebooks for spacing, tone of voice, and visual assets." },
        { title: "Corporate Stationery & Collateral", desc: "Brochures, pitch decks, business cards, and packaging mockups." }
      ],
      section2Title: "Uncompromising Visual Standards with Infinia",
      section2Body: "We construct bespoke visual languages that transform ambitious companies into iconic market leaders with memorable aesthetic presence."
    },
    {
      id: "video-ads",
      title: "Video Ads",
      category: "Cinematic Video Production",
      date: "August 2026",
      readTime: "5 min read",
      h1: "High-Converting Cinematic Video Advertisements for Modern Brands",
      summary: "Stop audience scrolling within 3 seconds with cinematic commercials, real estate property showcases, and dynamic motion ads.",
      youtubeEmbed: "https://www.youtube.com/embed/7V-fIGMDsmE",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
      section1Title: "Video: The Dominant Medium of Digital Attention",
      section1Body: "Over 80% of internet traffic is video consumption. Direct-response video ads outperform static images by 300% in click-through rates and memorability when produced with clear pacing and emotional impact.",
      keyPoints: [
        { title: "3-Second Hook Optimization", desc: "Visual patterns that prevent users from swiping away." },
        { title: "Color Grading & Dynamic Sound FX", desc: "Hollywood-grade cinematic finish that builds premium perception." },
        { title: "Omnichannel Aspect Ratios", desc: "Formatted for vertical 9:16 reels, TikToks, and 16:9 widescreen ads." },
        { title: "Clear Action Directives (CTA)", desc: "Directing view momentum into tangible webpage visits and calls." }
      ],
      section2Title: "Director-Level Video Crafting at Infinia",
      section2Body: "Led by creative director Prashant Bhardwaj, our production pipeline crafts cinematic visual stories that command attention and drive business growth."
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      category: "Retention & Lifecycle Automation",
      date: "August 2026",
      readTime: "4 min read",
      h1: "Automated Email Marketing & High-LTV Customer Nurture Flows",
      summary: "Unlock predictable recurring revenue by engaging your customer database with personalized automated lifecycle campaigns.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      section1Title: "The Highest ROI Channel in Digital Marketing",
      section1Body: "Email marketing boasts an average return of $36 for every $1 spent. Unlike rented audiences on social networks, your email list is a direct, owned communication asset immune to algorithm changes.",
      keyPoints: [
        { title: "Behavioral Drip Workflows", desc: "Automated sequences triggered by user clicks, downloads, or dates." },
        { title: "Inbox Deliverability Engineering", desc: "SPF/DKIM/DMARC setups to guarantee primary inbox delivery." },
        { title: "Granular Segmentation", desc: "Targeting distinct buyer stages with personalized messaging." },
        { title: "Responsive Newsletter Layouts", desc: "Dark-mode compatible, fast-rendering responsive templates." }
      ],
      section2Title: "Lifecycle Revenue Acceleration by Infinia",
      section2Body: "We architect intelligent automated email funnels that turn one-time buyers into loyal repeat brand champions."
    }
  ];

  return (
    <div className={`${bgThemeClass} font-sans min-h-screen ${selectionClass} overflow-x-hidden relative md:cursor-none transition-colors duration-1000 ${!isBanti && 'text-gray-300'}`}>
      <CustomCursor cursorColor={cursorColor} />

      <AnimatePresence>
        {!isCinematic && !isBanti && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A3FF12]/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          </motion.div>
        )}
        {isCinematic && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${isBanti ? 'bg-white/80 border-b border-gray-100 shadow-sm' : 'bg-[#030303]/80 border-b border-white/5'} ${isMobileMenuOpen && !isBanti ? '!bg-[#030303]' : isMobileMenuOpen && isBanti ? '!bg-white' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div onClick={() => { setActivePage('Home'); setActiveBlogService(null); }} className="flex items-center gap-2 md:gap-3 cursor-pointer group z-50">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden border transition-colors ${isBanti ? 'border-gray-200' : isCinematic ? 'border-white/10 group-hover:border-cyan-400' : 'border-white/10 group-hover:border-[#A3FF12]'}`}>
              <img src={logoImg} alt="Infinia Logo" className="w-full h-full object-cover" />
            </div>
            <span className={`font-extrabold text-base md:text-lg tracking-widest ${isBanti ? 'text-gray-900' : 'text-white'}`}>INFINIA<span className={isBanti ? "text-violet-600" : isCinematic ? "text-cyan-400" : "text-[#A3FF12]"}>.</span></span>
          </div>

          <div className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold tracking-[0.2em] uppercase ${isBanti ? 'text-gray-500' : 'text-gray-400'}`}>
            {['Home', 'Our Work', 'IT & Web', 'Marketing', 'About & Team', 'Founder (Banti)', 'Prashant'].map(item => (
              <button
                key={item}
                onClick={() => { setActivePage(item); setActiveBlogService(null); }}
                className={`relative transition-colors ${activePage === item && !activeBlogService ? (isBanti ? 'text-violet-600' : isCinematic ? 'text-cyan-400' : 'text-[#A3FF12]') : isBanti ? 'hover:text-gray-900' : 'hover:text-white'}`}
              >
                {item === 'Prashant' ? <span className={isBanti ? "text-gray-500 hover:text-gray-900" : "bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"}>Prashant's Cut</span> : item}
                {activePage === item && !activeBlogService && <motion.div layoutId="navline" className={`absolute -bottom-2 left-0 w-full h-[2px] ${isBanti ? 'bg-violet-600' : isCinematic ? 'bg-cyan-400' : 'bg-[#A3FF12]'}`} />}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 z-50">
            <button onClick={() => { setActivePage('Contact'); setActiveBlogService(null); }} className={`hidden md:flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-extrabold tracking-widest uppercase rounded-full hover:scale-105 transition-all ${isBanti ? 'bg-violet-600 text-white' : isCinematic ? 'bg-cyan-400 text-black' : 'bg-[#A3FF12] text-black'}`}>
              Let's Talk
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-1 ${isBanti ? 'text-gray-900' : 'text-white'}`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
              className={`lg:hidden absolute top-20 left-0 w-full h-screen border-t flex flex-col pt-6 px-6 gap-6 ${isBanti ? 'bg-white border-gray-200 text-gray-900' : 'bg-[#030303] border-white/10 text-white'}`}
            >
              {['Home', 'Our Work', 'IT & Web', 'Marketing', 'About & Team', 'Founder (Banti)', 'Prashant'].map(item => (
                <button
                  key={item}
                  onClick={() => { setActivePage(item); setActiveBlogService(null); }}
                  className={`text-left font-black text-xl uppercase tracking-widest ${activePage === item && !activeBlogService ? (isBanti ? 'text-violet-600' : isCinematic ? 'text-cyan-400' : 'text-[#A3FF12]') : ''}`}
                >
                  {item}
                </button>
              ))}
              <button onClick={() => { setActivePage('Contact'); setActiveBlogService(null); }} className={`mt-4 py-4 font-black text-sm uppercase tracking-widest rounded-xl ${isBanti ? 'bg-violet-600 text-white' : 'bg-[#A3FF12] text-black'}`}>Let's Talk</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className={`relative z-10 w-full overflow-hidden`}>
        <AnimatePresence mode="wait">

          {activeBlogService && (
            <ServiceBlogDetail
              key={activeBlogService.id}
              service={activeBlogService}
              onBack={() => setActiveBlogService(null)}
              onNavigateContact={() => { setActiveBlogService(null); setActivePage('Contact'); }}
            />
          )}

          {!activeBlogService && activePage === 'Founder (Banti)' && <BantiPortfolio key="banti" />}
          {!activeBlogService && activePage === 'Prashant' && <PrashantPortfolio key="prashant" />}

          {!activeBlogService && activePage === 'Home' && (
            <motion.div key="home" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="relative w-full min-h-[90vh] flex flex-col justify-center pb-20">
              <div className="absolute inset-0 w-full h-[110vh] -top-20 z-0 overflow-hidden pointer-events-none">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
                  <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-[#030303]/70 to-[#030303]"></div>
              </div>

              <div className="relative z-10 text-center max-w-4xl mx-auto pt-32 md:pt-48 px-4 mb-16">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-[#A3FF12]/30 bg-[#A3FF12]/5 text-[#A3FF12] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
                  <Sparkles size={12} /> Award Winning Digital Agency
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                  DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3FF12] to-emerald-500">MODERN</span><br />AGENCY.
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-gray-300 text-sm md:text-lg font-light mb-10 px-4">
                  We are a creative digital agency helping businesses grow through technology, marketing, and innovative solutions.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 px-6">
                  <button onClick={() => setActivePage('Our Work')} className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-[#A3FF12] text-black text-xs font-extrabold tracking-widest uppercase rounded-full hover:bg-white transition-all flex justify-center items-center gap-2">
                    View Portfolio <ArrowRight size={16} />
                  </button>
                  <button onClick={() => setActivePage('Marketing')} className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-white/5 border border-white/20 text-white text-xs font-extrabold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all flex justify-center items-center gap-2">
                    Marketing <Megaphone size={16} />
                  </button>
                </motion.div>
              </div>

              <motion.div variants={staggerContainer} className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 max-w-[1400px] mx-auto w-full">
                <div onClick={() => setActivePage('IT & Web')} className="md:col-span-2 bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#A3FF12]/30 transition-all cursor-pointer group">
                  <h3 className="text-[#A3FF12] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">Division 01</h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">IT & Web Development</h2>
                  <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-md">Scalable React & Next.js applications, CRM, Mobile Apps, and Cloud Solutions tailored for your enterprise.</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Firebase", "App Dev"].map(tag => (
                      <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-white/5 rounded-full text-[9px] md:text-[10px] text-gray-300 border border-white/10 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>

                <div onClick={() => setActivePage('Marketing')} className="bg-[#A3FF12]/10 backdrop-blur-md border border-[#A3FF12]/20 rounded-3xl p-6 md:p-8 hover:bg-[#A3FF12]/20 transition-all cursor-pointer group flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#A3FF12] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">Division 02</h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Digital Marketing</h2>
                    <p className="text-gray-400 text-xs md:text-sm">Meta Ads, SEO, and Social Media Marketing that generates massive ROI.</p>
                  </div>
                  <ArrowRight className="text-[#A3FF12] self-end mt-4 group-hover:translate-x-2 transition-transform" size={28} />
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* NEW HIGH-END CINEMATIC "OUR WORK" AUTO-PLAYING PORTFOLIO */}
          {!activeBlogService && activePage === 'Our Work' && (
            <motion.div key="work" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-[1400px] mx-auto text-white min-h-screen relative z-10">
              <motion.h2 variants={fadeInUp} className="text-[#A3FF12] text-[10px] md:text-xs font-black tracking-widest uppercase text-center mb-4">Live Portfolio</motion.h2>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-black text-center mb-10 md:mb-16 tracking-tighter">OUR <span className="text-[#A3FF12]">WORK</span></motion.h1>

              {/* Animated Cinematic Bento Box Grid */}
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
                {portfolioVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    variants={fadeInUp}
                    className={`relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] group shadow-[0_0_30px_rgba(163,255,18,0.05)] hover:shadow-[0_0_40px_rgba(163,255,18,0.2)] transition-shadow duration-500 cursor-pointer ${video.span}`}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#A3FF12] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        View Project
                      </span>
                      <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide">{video.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {!activeBlogService && activePage === 'IT & Web' && (
            <motion.div key="it" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-[1400px] mx-auto min-h-screen text-white">
              <motion.h2 variants={fadeInUp} className="text-[#A3FF12] text-[10px] md:text-xs font-extrabold tracking-[0.3em] uppercase mb-4 text-center">Software & Web Solutions</motion.h2>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-extrabold text-white mb-10 md:mb-16 text-center tracking-tighter">IT & WEB <br className="md:hidden" />DEVELOPMENT</motion.h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
                {itServices.map((service, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl flex items-center gap-4 hover:border-[#A3FF12]/50 transition-colors">
                    <div className="text-[#A3FF12]">{service.icon}</div>
                    <p className="text-white font-bold text-sm md:text-base">{service.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {!activeBlogService && activePage === 'Marketing' && (
            <motion.div key="marketing" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-[1400px] mx-auto min-h-screen text-white">
              <motion.h2 variants={fadeInUp} className="text-[#A3FF12] text-[10px] md:text-xs font-extrabold tracking-[0.3em] uppercase mb-4 text-center">Growth & Reach</motion.h2>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-tighter">DIGITAL <br className="md:hidden" />MARKETING</motion.h1>
              <p className="text-center text-gray-400 text-xs md:text-sm max-w-xl mx-auto mb-10 md:mb-16">Click on any card to read its full in-depth strategy guide and execution breakdown.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
                {marketingBlogsData.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    onClick={() => setActiveBlogService(service)}
                    className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-[#A3FF12]/5 hover:border-[#A3FF12]/40 transition-all group cursor-pointer relative overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#A3FF12] group-hover:scale-110 group-hover:bg-[#A3FF12]/20 transition-all">
                          <Target size={20} className="md:w-6 md:h-6" />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A3FF12] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          Open Page <ArrowUpRight size={14} />
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#A3FF12] transition-colors">{service.title}</h3>
                      <p className="text-gray-400 text-xs line-clamp-2">{service.summary}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-gray-500 text-[10px] uppercase tracking-wider">
                      <span>{service.readTime}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:text-[#A3FF12] transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {!activeBlogService && activePage === 'About & Team' && (
            <motion.div key="about" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-[1400px] mx-auto min-h-screen text-white">
              <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
                <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
                  "We help businesses create premium visual content that builds trust, attracts customers, and generates real results."
                </h2>
                <p className="text-gray-400 text-sm md:text-lg mb-4">Our approach combines creativity, marketing strategy, and storytelling.</p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/10 rounded-[30px] p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-[#A3FF12]/10 blur-[80px] group-hover:bg-[#A3FF12]/20 transition-colors"></div>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 mb-6 md:mb-8 relative z-10 w-32 md:w-48 mx-auto">
                    <img src={bantiImg} alt="Banti Kohli" className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="text-center relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Banti Kohli</h3>
                    <p className="text-[#A3FF12] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Founder & CEO</p>
                    <button onClick={() => { setActiveBlogService(null); setActivePage('Founder (Banti)'); }} className="px-6 py-3 bg-[#A3FF12] text-black text-[10px] md:text-xs font-extrabold uppercase tracking-widest rounded-full hover:scale-105 transition-transform mt-2 md:mt-4">
                      View Profile
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/10 rounded-[30px] p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-cyan-400/10 blur-[80px] group-hover:bg-cyan-400/20 transition-colors"></div>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 mb-6 md:mb-8 relative z-10 w-32 md:w-48 mx-auto">
                    <img src={prashantImg} alt="Prashant Bhardwaj" className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="text-center relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Prashant Bhardwaj</h3>
                    <p className="text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Creative Director</p>
                    <button onClick={() => { setActiveBlogService(null); setActivePage('Prashant'); }} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-[10px] md:text-xs font-extrabold uppercase tracking-widest rounded-full hover:scale-105 transition-transform mt-2 md:mt-4">
                      View Director's Cut
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {!activeBlogService && activePage === 'Contact' && (
            <motion.div key="contact" initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} className="pt-32 pb-20 px-4 max-w-[1400px] mx-auto min-h-screen text-white">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center h-full">
                <motion.div variants={fadeInUp} className="text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-none tracking-tighter">LET'S BUILD <br className="hidden md:block" /><span className="text-[#A3FF12]">TOGETHER.</span></h1>
                  <p className="text-gray-400 mb-8 md:mb-12 text-sm md:text-lg max-w-md mx-auto md:mx-0">Ready to scale your business with premium web solutions and strategic marketing?</p>
                  <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
                    <a href="tel:+919050141438" className="flex items-center gap-4 hover:opacity-70 transition-opacity">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#A3FF12]"><Phone size={18} /></div>
                      <div className="text-left">
                        <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest">Call Us</p>
                        <p className="text-white font-bold text-sm md:text-lg">+91 9050141438</p>
                      </div>
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl relative">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send Inquiry</h3>
                  <form className="space-y-3 md:space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-[#A3FF12]" />
                    <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-[#A3FF12]" />
                    <textarea rows="4" placeholder="Project Details..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-[#A3FF12] resize-none"></textarea>
                    <button type="button" className="w-full py-3 md:py-4 bg-[#A3FF12] text-black text-xs md:text-sm font-extrabold uppercase tracking-widest rounded-xl mt-2 hover:scale-[1.02] transition-transform">
                      Submit Details
                    </button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className={`border-t pt-16 md:pt-20 pb-8 md:pb-10 px-6 relative z-10 ${isBanti ? 'bg-white border-gray-100' : 'bg-black border-white/5'}`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-4 md:mb-6">
              <div className={`w-8 h-8 rounded-md overflow-hidden border ${isBanti ? 'border-gray-200' : isCinematic ? 'border-cyan-400/50' : 'border-[#A3FF12]/50'}`}>
                <img src={logoImg} alt="Infinia" className="w-full h-full object-cover" />
              </div>
              <span className={`font-extrabold text-lg md:text-xl tracking-widest ${isBanti ? 'text-gray-900' : 'text-white'}`}>INFINIA INDIA</span>
            </div>
            <p className={`text-xs md:text-sm max-w-sm mx-auto md:mx-0 mb-6 ${isBanti ? 'text-gray-500' : 'text-gray-400'}`}>A premium digital agency helping businesses grow through technology, marketing and innovative solutions.</p>
          </div>
          <div>
            <h4 className={`font-bold mb-4 md:mb-6 tracking-widest uppercase text-[10px] md:text-xs ${isBanti ? 'text-gray-900' : 'text-white'}`}>Divisions</h4>
            <ul className={`space-y-3 md:space-y-4 text-xs md:text-sm ${isBanti ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><button onClick={() => { setActiveBlogService(null); setActivePage('Founder (Banti)'); }} className={`hover:${isBanti ? 'text-violet-600' : 'text-[#A3FF12]'}`}>Founder Profile</button></li>
              <li><button onClick={() => { setActiveBlogService(null); setActivePage('Prashant'); }} className={`hover:${isBanti ? 'text-violet-600' : isCinematic ? 'text-cyan-400' : 'text-[#A3FF12]'}`}>Prashant's Cut</button></li>
            </ul>
          </div>
        </div>
        <div className={`max-w-[1400px] mx-auto border-t pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-bold tracking-widest uppercase ${isBanti ? 'border-gray-200 text-gray-400' : 'border-white/5 text-gray-600'}`}>
          <p>© 2026 INFINIA INDIA. All Rights Reserved.</p>
          <p>Powered by Technology</p>
        </div>
      </footer>
    </div>
  );
}