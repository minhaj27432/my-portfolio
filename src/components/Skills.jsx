import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaGithub, FaJava, FaPython, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiNextdotjs, SiDotnet } from 'react-icons/si';

const Skills = () => {
  
  const techs = [
    { id: 1, src: <FaHtml5 size={40} />, title: 'HTML', color: 'text-orange-500', border: 'group-hover:border-orange-500', shadow: 'group-hover:shadow-orange-500/50' },
    { id: 2, src: <FaCss3Alt size={40} />, title: 'CSS', color: 'text-blue-500', border: 'group-hover:border-blue-500', shadow: 'group-hover:shadow-blue-500/50' },
    { id: 3, src: <SiJavascript size={40} />, title: 'JavaScript', color: 'text-yellow-400', border: 'group-hover:border-yellow-400', shadow: 'group-hover:shadow-yellow-400/50' },
    { id: 4, src: <FaReact size={40} />, title: 'React', color: 'text-cyan-400', border: 'group-hover:border-cyan-400', shadow: 'group-hover:shadow-cyan-400/50' },
    { id: 5, src: <SiNextdotjs size={40} />, title: 'Next JS', color: 'text-white', border: 'group-hover:border-white', shadow: 'group-hover:shadow-white/50' },
    { id: 6, src: <SiTailwindcss size={40} />, title: 'Tailwind', color: 'text-sky-400', border: 'group-hover:border-sky-400', shadow: 'group-hover:shadow-sky-400/50' },
    { id: 7, src: <FaLaravel size={40} />, title: 'Laravel', color: 'text-red-600', border: 'group-hover:border-red-600', shadow: 'group-hover:shadow-red-600/50' },
    { id: 8, src: <FaPhp size={40} />, title: 'PHP', color: 'text-purple-400', border: 'group-hover:border-purple-400', shadow: 'group-hover:shadow-purple-400/50' },
    { id: 9, src: <span className="text-2xl font-bold">Lw</span>, title: 'Livewire', color: 'text-pink-400', border: 'group-hover:border-pink-400', shadow: 'group-hover:shadow-pink-400/50' },
    { id: 10, src: <span className="text-2xl font-bold">C#</span>, title: 'C#', color: 'text-green-500', border: 'group-hover:border-green-500', shadow: 'group-hover:shadow-green-500/50' },
    { id: 11, src: <SiDotnet size={40} />, title: '.NET', color: 'text-purple-600', border: 'group-hover:border-purple-600', shadow: 'group-hover:shadow-purple-600/50' },
    { id: 12, src: <FaJava size={40} />, title: 'Java', color: 'text-orange-600', border: 'group-hover:border-orange-600', shadow: 'group-hover:shadow-orange-600/50' },
    { id: 13, src: <FaPython size={40} />, title: 'Python', color: 'text-yellow-300', border: 'group-hover:border-yellow-300', shadow: 'group-hover:shadow-yellow-300/50' },
    { id: 14, src: <SiMysql size={40} />, title: 'MySQL', color: 'text-blue-400', border: 'group-hover:border-blue-400', shadow: 'group-hover:shadow-blue-400/50' },
    { id: 15, src: <FaGithub size={40} />, title: 'GitHub', color: 'text-gray-400', border: 'group-hover:border-gray-400', shadow: 'group-hover:shadow-gray-400/50' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div name="skills" className="w-full min-h-screen bg-slate-900 relative py-20">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col justify-center w-full h-full text-white relative z-10">
        
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">Skills</p>
          <p className="py-6 text-gray-400">These are the technologies I work with to build my projects</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-center py-8"
        >
          {techs.map(({ id, src, title, color, border, shadow }) => (
            <motion.div 
              key={id} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl py-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:border-transparent ${border} hover:shadow-lg ${shadow}`}
            >
              <div className={`duration-300 ${color} group-hover:scale-110 mb-4`}>
                {src}
              </div>
              
              <p className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{title}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default Skills;