import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <div className="z-50">
          <h1 className="text-3xl sm:text-4xl font-bold font-signature ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portfol.io
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-500 duration-200"
              >
                <Link to={link} smooth duration={500} offset={-80}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden hover:text-cyan-500 transition-colors"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-xl text-gray-300 flex flex-col justify-center items-center md:hidden z-40"
            >
              <ul className="flex flex-col items-center gap-8">
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className="cursor-pointer capitalize text-3xl font-bold hover:text-cyan-500 duration-200"
                  >
                    <Link
                      onClick={() => setNav(false)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Socials */}
              <div className="flex gap-8 mt-12">
                <a href="https://github.com/minhaj27432" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
                  <FaGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-minhaj-a5721a29a" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
                  <FaLinkedin size={25} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;