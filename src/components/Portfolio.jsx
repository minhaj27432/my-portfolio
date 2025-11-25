import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "Medical Care System",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      tech: ["Laravel", "Livewire", "MySQL", "Tailwind"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      src: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      tech: ["React JS", "Node JS", "Redux", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      tech: [".NET Core", "C#", "SQL Server", "Bootstrap"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Figma to HTML/CSS",
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Student Mgmt System",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div name="portfolio" className="w-full min-h-screen bg-slate-900 py-20 relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20"></div>

      <div className="max-w-screen-xl px-6 md:px-12 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        
        {/* Header */}
        <div className="pb-12 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-white">Portfolio</p>
          <p className="py-6 text-gray-400">Check out some of my recent work</p>
        </div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map(({ id, src, title, tech, demoLink, codeLink }) => (
            <motion.div 
              key={id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              
              {/* Image Section */}
              <div className="relative overflow-hidden h-52">
                <img 
                  src={src} 
                  alt={title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((item, index) => (
                    <span key={index} className="text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a href={demoLink} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-bold hover:opacity-90 transition-opacity">
                    Demo <FaExternalLinkAlt size={14} />
                  </a>
                  <a href={codeLink} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-500 text-gray-300 rounded-md font-bold hover:border-white hover:text-white transition-colors">
                    Code <FaGithub size={18} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;