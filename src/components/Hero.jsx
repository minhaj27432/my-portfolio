import React, { useRef, useMemo } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; 
import { FaPhp, FaJava, FaPython, FaReact, FaLaravel } from "react-icons/fa"; 
import { SiDotnet, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { RiFlashlightFill } from "react-icons/ri";
import profileImg from "../assets/profile/profile2.png"; 
import cvFile from "../assets/cv/Minhaj_Mohammed_CV.pdf"; 

// --- PARTICLE COMPONENT ---
// Renders a single floating shard that moves based on mouse position
const Particle = ({ mouseX, mouseY, index }) => {
  // Randomize initial position
  const initialTop = useMemo(() => Math.random() * 100, []); // 0% to 100%
  const initialLeft = useMemo(() => Math.random() * 100, []); // 0% to 100%
  
  // Randomize movement "depth" (some move fast, some slow)
  const depth = useMemo(() => (Math.random() - 0.5) * 60, []); 
  
  // Randomize size and rotation
  const size = useMemo(() => Math.random() * 8 + 4, []); // 4px to 12px
  const rotation = useMemo(() => Math.random() * 360, []);

  // Transform mouse movement into particle movement
  const x = useTransform(mouseX, [-500, 500], [-depth * 2, depth * 2]);
  const y = useTransform(mouseY, [-500, 500], [-depth * 2, depth * 2]);

  return (
    <motion.div
      style={{
        top: `${initialTop}%`,
        left: `${initialLeft}%`,
        x,
        y,
        rotate: rotation,
      }}
      className="absolute bg-cyan-500/30 backdrop-blur-[1px] rounded-sm z-0"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.2, 0.6, 0.2], // Twinkle effect
        scale: 1,
        rotate: rotation + 360 // Slow spin
      }} 
      transition={{ 
        opacity: { duration: Math.random() * 5 + 3, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: Math.random() * 20 + 20, repeat: Infinity, ease: "linear" }
      }}
    >
      <div style={{ width: size, height: size }} />
    </motion.div>
  );
};

const Hero = () => {
  const ref = useRef(null);

  // --- MOUSE PHYSICS LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseX = useSpring(x, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 25 });

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    x.set(clientX - innerWidth / 2);
    y.set(clientY - innerHeight / 2);
  }

  // Profile Image 3D Tilt
  const imgRotateX = useTransform(mouseY, [-500, 500], [15, -15]); 
  const imgRotateY = useTransform(mouseX, [-500, 500], [-15, 15]);

  const socialLinks = [
    { id: 1, icon: <FaGithub size={30} />, href: "https://github.com/minhaj27432", style: "hover:text-gray-400" },
    { id: 2, icon: <FaLinkedin size={30} />, href: "https://www.linkedin.com/in/mohammed-minhaj-a5721a29a", style: "hover:text-blue-500" },
    { id: 3, icon: <FaFacebook size={30} />, href: "https://www.facebook.com/share/1Jy4rabnEB/", style: "hover:text-blue-600" },
    { id: 4, icon: <FaInstagram size={30} />, href: "https://www.instagram.com/itz_minhxj?igsh=MWQ5dWRreDBhbDRiOA==", style: "hover:text-pink-500" },
  ];

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove}
      name="home" 
      className="w-full min-h-screen bg-slate-900 relative overflow-hidden flex flex-col justify-between"
    >
      
      {/* --- ANTIGRAVITY PARTICLE FIELD --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Create 40 random particles */}
        {[...Array(40)].map((_, i) => (
          <Particle key={i} mouseX={mouseX} mouseY={mouseY} index={i} />
        ))}
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-24 flex-grow flex flex-col justify-center relative z-10 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* LEFT SIDE: TEXT */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center text-center md:text-left order-2 md:order-1"
            >
                  <h1 className="text-md sm:text-xl lg:text-2xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                    Hi, I'm <br />
                    <span className=" text-4xl sm:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-text">
                      Minhaj Mohammed
                    </span>
                  </h1>

                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-400 mb-6">
                    I am a{' '}
                    <TypeAnimation
                      sequence={[ "Web Developer", 2000, "Web Designer", 2000, "Tester", 2000 ]}
                      wrapper="span"
                      speed={20}
                      className="text-white border-b-4 border-cyan-500"
                      repeat={Infinity}
                    />
                  </h2>

                  <p className="font-mono text-gray-400 text-sm sm:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-500">
                    "A specialized developer with a <strong>BSc in MIT</strong> from SEUSL. 
                    I build scalable applications using <strong>Laravel, React, .NET, and Java</strong>."
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-6 justify-center md:justify-start items-center mb-8 relative z-20">
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
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start items-center relative z-20">
                    <Link to="portfolio" smooth duration={500} className="w-full sm:w-auto group text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-cyan-500/30">
                      View Projects <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight size={20}/></span>
                    </Link>
                    
                    <a 
                      href={cvFile} 
                      download="Minhaj_Mohammed_CV.pdf"
                      className="w-full sm:w-auto text-white border-2 border-gray-600 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:border-cyan-400 hover:text-cyan-400 duration-300"
                    >
                      Download CV <HiDownload size={20}/>
                    </a>
                  </div>
            </motion.div>

            {/* RIGHT SIDE: PROFILE IMAGE */}
            <motion.div 
              style={{ perspective: 1000 }} 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center order-1 md:order-2"
            >
              <motion.div 
                style={{ rotateX: imgRotateX, rotateY: imgRotateY }}
                className="relative group w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl">
                  <img src={profileImg} alt="Minhaj Mohammed" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                </div>
              </motion.div>
            </motion.div>

        </div>
      </div>

      {/* TECH STACK BAR */}
      <div className="w-full bg-slate-900/80 backdrop-blur-md border-t border-slate-800 py-4 z-10">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-center gap-6 sm:gap-8 text-gray-500">
             <div className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"><SiHtml5 size={25}/></div>
             <div className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"><SiCss3 size={25}/></div>
             <div className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"><SiJavascript size={25}/></div>
             <div className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"><FaPhp size={25}/></div>
             <div className="hover:text-red-600 transition-colors duration-300 cursor-pointer"><FaLaravel size={25}/></div>
             <div className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"><RiFlashlightFill size={25} /></div>
             <div className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"><FaReact size={25}/></div>
             <div className="font-bold hover:text-green-500 cursor-default transition-colors duration-300 hidden sm:block">C#</div>
             <div className="hover:text-purple-600 transition-colors duration-300 cursor-pointer"><SiDotnet size={25}/></div>
             <div className="hover:text-orange-600 transition-colors duration-300 cursor-pointer"><FaJava size={25}/></div>
             <div className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"><FaPython size={25}/></div>
        </div>
      </div>

    </div>
  );
};

export default Hero;