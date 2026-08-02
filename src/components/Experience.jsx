import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Associate Software Developer",
      company: "Webxkey Pvt Ltd",
      duration: "Jan 2026 - Present",
      type: "Full-Time (Promotion)",
      description: [
        "Promoted to Associate Software Developer following a successful 6-month internship.",
        "Architect and implement robust, high-performance web applications using React JS, Next JS, and Tailwind CSS.",
        "Develop scalable backend services and APIs using PHP, Laravel, Livewire, C#, and .NET Core.",
        "Design and optimize relational databases (MySQL) to support complex data-driven features.",
        "Collaborate in cross-functional teams using Agile methodology, participating in code reviews to ensure code quality and maintainability."
      ],
      color: "from-cyan-500 to-blue-500",
      tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
    },
    {
      id: 2,
      role: "Intern Software Developer",
      company: "Webxkey Pvt Ltd",
      duration: "Jul 2025 - Jan 2026",
      type: "Internship (6 Months)",
      description: [
        "Assisted senior engineers in developing and maintaining web products with PHP Laravel and React JS.",
        "Wrote clean, efficient, and well-documented frontend and backend code matching design specifications.",
        "Debugged and resolved production-level issues, improving page load speed and user satisfaction.",
        "Created dynamic user interface components with Livewire and styled them with responsive utility classes.",
        "Gained deep knowledge of the Software Development Life Cycle (SDLC) and version control best practices (Git/GitHub)."
      ],
      color: "from-blue-500 to-indigo-500",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div name="experience" className="w-full min-h-screen bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background blobs for premium depth */}
      <div className="absolute top-1/4 right-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20 pointer-events-none"></div>

      <div className="max-w-screen-xl px-6 md:px-12 mx-auto flex flex-col justify-center w-full h-full relative z-10">

        {/* Section Title */}
        <div className="pb-12 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Work Experience
          </p>
          <p className="py-6 text-gray-400">
            My professional journey and career progression as a software engineer
          </p>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-slate-700 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-6 w-6 h-6 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center z-20 group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-white transition-colors"></div>
              </div>

              {/* Card Container */}
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]">

                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-300">
                      <span className="flex items-center gap-1.5 text-sm font-semibold">
                        <FaBuilding className="text-cyan-400" /> {exp.company}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${exp.tagColor}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded-lg border border-slate-700/80">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5">
                  {exp.description.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed text-sm md:text-base">
                      <FaCheckCircle className="text-cyan-500 shrink-0 mt-1" size={14} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;
