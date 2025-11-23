import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  
  const education = [
    {
      id: 1,
      degree: "Diploma in IT",
      institution: "ESOFT Campus",
      year: "2020-2021",
      desc: "Foundation in Information Technology and basic software development life cycles."
    },
    {
      id: 2,
      degree: "HND in Computer Science",
      institution: "BCAS Campus",
      year: "2023-2025",
      desc: "Focused on core computer science concepts, programming fundamentals, and networking."
    },
    {
      id: 3,
      degree: "BSc in Management & Information Technology",
      institution: "South Eastern University of Sri Lanka",
      year: "2022-2025", // You can add the year if you want, e.g., "2020 - 2024"
      desc: "Specialized in Information Technology management and advanced software engineering principles."
    },
  ];

  return (
    <div name="about" className="w-full bg-gradient-to-b from-primary to-secondary text-white py-10">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Section Title */}
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About Me</p>
          
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column: Narrative Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Who I Am</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              I am <span className="text-white font-bold">Minhaj Mohammed</span>, a dedicated Web Developer, Designer, and Tester. 
              With a strong academic background and diverse technical skills, I build seamless digital experiences.
            </p>
            <br />
            <p className="text-xl text-gray-300 leading-relaxed">
              My technical expertise spans across the full stack. I am proficient in backend technologies like 
              <span className="text-accent"> PHP, Laravel, Livewire, C#, .NET, Java, and Python</span>. On the frontend, 
              I craft responsive interfaces using <span className="text-accent">React JS, Next JS, Livewire, HTML, CSS, and JavaScript</span>.
            </p>
            
            <div className="mt-8 p-6 bg-secondary/50 rounded-lg border-l-4 border-accent">
                <FaLaptopCode size={30} className="mb-4 text-accent" />
                <p className="italic text-gray-400">
                  "I believe in writing clean, maintainable code and testing rigorously to ensure the highest quality software."
                </p>
            </div>
          </motion.div>


          {/* Right Column: Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent flex items-center gap-2">
              <FaGraduationCap /> Education Journey
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-gray-700 hover:border-accent transition-colors duration-300">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                  
                  <div className="bg-primary/50 p-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                    <div>
                        <h4 className="text-xl font-bold text-white">{edu.degree} </h4>
                        <span className='text-md'>{edu.year}</span>
                    </div>
                    <p className="text-gray-400 flex items-center gap-2 text-sm mt-1">
                      <FaUniversity /> {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;