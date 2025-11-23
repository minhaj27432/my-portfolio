import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Added FaInstagram

// Tech Stack Icons
import { FaPhp, FaJava, FaPython, FaReact, FaLaravel } from "react-icons/fa"; 
import { SiDotnet, SiNextdotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { RiFlashlightFill } from "react-icons/ri";

// --- IMPORTS ---
import profileImg from "../assets/profile/profile2.png"; 
import cvFile from "../assets/cv/Minhaj_Mohammed_CV.pdf"; 

const Hero = () => {
  
  // 1. UPDATED SOCIAL LINKS
  const socialLinks = [
    { id: 1, icon: <FaGithub size={30} />, href: "https://github.com/minhaj27432", style: "hover:text-gray-400" },
    { id: 2, icon: <FaLinkedin size={30} />, href: "https://www.linkedin.com/in/mohammed-minhaj-a5721a29a", style: "hover:text-blue-500" },
    { id: 3, icon: <FaFacebook size={30} />, href: "https://www.facebook.com/share/1Jy4rabnEB/", style: "hover:text-blue-600" },
    { id: 4, icon: <FaInstagram size={30} />, href: "https://www.instagram.com/itz_minhxj?igsh=MWQ5dWRreDBhbDRiOA==", style: "hover:text-pink-500" },
  ];

  return (
    <div name="home" className="w-full h-screen bg-slate-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid z-0 opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

      {/* Main Content Container */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-24 h-full flex flex-col justify-center relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12 items-center h-full pt-20 md:pt-0">
            
            {/* --- LEFT SIDE: TEXT --- */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center text-center md:text-left h-full order-2 md:order-1"
            >
              <div className="flex flex-col justify-center h-full">
                  
                  <p className="font-mono text-cyan-400 font-bold text-lg tracking-widest mt-8 mb-4 uppercase">
                     {/* Spacer/Tagline */}
                  </p>

                  <h1 className="text-md sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                    Hi, I'm <br />
                    <span className="text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-text">
                      Minhaj Mohammed
                    </span>
                  </h1>

                  <h2 className="text-2xl sm:text-4xl font-bold text-gray-400 mb-8">
                    I am a{' '}
                    <TypeAnimation
                      sequence={[ "Web Developer", 2000, "Web Designer", 2000, "Tester", 2000 ]}
                      wrapper="span"
                      speed={20}
                      className="text-white border-b-4 border-cyan-500"
                      repeat={Infinity}
                    />
                  </h2>

                  <p className="font-mono text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-500">
                    "A specialized developer with a <strong>BSc in MIT</strong> from SEUSL. 
                    I build scalable applications using <strong>Laravel, React, .NET, and Java</strong>."
                  </p>

                  {/* 2. SOCIAL ICONS - PLACED BEFORE BUTTONS */}
                  <div className="flex gap-6 justify-center md:justify-start items-center mb-8">
                    {socialLinks.map((item) => (
                      <a 
                        key={item.id} 
                        href={item.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`text-gray-400 transition-all duration-300 transform hover:scale-125 ${item.style}`}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
                    <Link to="portfolio" smooth duration={500} className="group text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-cyan-500/30 w-fit">
                      View Projects <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight size={20}/></span>
                    </Link>
                    
                    <a 
                      href={cvFile} 
                      download="Minhaj_Mohammed_CV.pdf"
                      className="text-white border-2 border-gray-600 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:border-cyan-400 hover:text-cyan-400 duration-300 w-fit"
                    >
                      Download CV <HiDownload size={20}/>
                    </a>
                  </div>

              </div>
            </motion.div>

            {/* --- RIGHT SIDE: PROFILE IMAGE --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center h-full order-1 md:order-2"
            >
              <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl">
                  <img src={profileImg} alt="Minhaj Mohammed" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute bottom-0 w-full bg-black/70 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center pb-8">
                    <span className="text-white font-bold text-xl">Minhaj Mohammed</span>
                    <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">// Full Stack Engineer</span>
                  </div>
                </div>
              </div>
            </motion.div>

        </div>
      </div>

      {/* TECH STACK BAR */}
      <div className="absolute bottom-0 w-full bg-slate-900/80 backdrop-blur-md border-t border-slate-800 py-4 hidden md:block z-10">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-center gap-8 text-gray-500">
             <div className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"><SiHtml5 size={25}/></div>
             <div className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"><SiCss3 size={25}/></div>
             <div className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"><SiJavascript size={25}/></div>
             <div className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"><FaPhp size={25}/></div>
             <div className="hover:text-red-600 transition-colors duration-300 cursor-pointer"><FaLaravel size={25}/></div>
             <div className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"><RiFlashlightFill size={25} /></div>
             <div className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"><FaReact size={25}/></div>
             <div className="font-bold hover:text-green-500 cursor-default transition-colors duration-300">C#</div>
             <div className="hover:text-purple-600 transition-colors duration-300 cursor-pointer"><SiDotnet size={25}/></div>
             <div className="hover:text-orange-600 transition-colors duration-300 cursor-pointer"><FaJava size={25}/></div>
             <div className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"><FaPython size={25}/></div>
        </div>
      </div>

    </div>
  );
};

export default Hero;