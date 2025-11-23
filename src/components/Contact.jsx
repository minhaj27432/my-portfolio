import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // --- STATE MANAGEMENT ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // --- YOUR FORMSPREE ID ---
  // This is the ID you provided: xrbddjlo
  const formId = "xrbddjlo"; 

  // --- FORM SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    setIsSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatusMessage("success");
        e.target.reset(); // Clear the form inputs
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
            setStatusMessage("error");
            console.error(data["errors"].map(error => error["message"]).join(", "));
        } else {
            setStatusMessage("error");
        }
      }
    } catch (error) {
      setStatusMessage("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-slate-900 relative py-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid z-0 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        
        {/* Header */}
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-white">Contact</p>
          <p className="py-6 text-gray-400">Submit the form below to get in touch with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
                <h3 className="text-3xl font-bold text-white mb-2">Let's connect!</h3>
                <p className="text-gray-400 max-w-md">
                    I'm currently open for freelance projects and full-time opportunities. 
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full"><FaEnvelope size={24} /></div>
                    <div><p className="text-sm text-gray-400">Email Me</p><p className="text-white font-semibold">minhaj27432@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full"><FaPhone size={24} /></div>
                    <div><p className="text-sm text-gray-400">Call Me</p><p className="text-white font-semibold">+94 787471323</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full"><FaMapMarkerAlt size={24} /></div>
                    <div><p className="text-sm text-gray-400">Location</p><p className="text-white font-semibold">Narammala, Sri Lanka</p></div>
                </div>
            </div>
          </motion.div>


          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/30 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Success/Error Messages */}
              {statusMessage === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center font-bold">
                    Message sent successfully! ✅
                </div>
              )}
              {statusMessage === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-center font-bold">
                    Something went wrong. Please try again. ❌
                </div>
              )}

              <div className="flex flex-col">
                  <label className="text-gray-400 text-sm mb-2">Name</label>
                  <input type="text" name="name" placeholder="Enter your name" required className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 transition-all" />
              </div>

              <div className="flex flex-col">
                  <label className="text-gray-400 text-sm mb-2">Email</label>
                  <input type="email" name="email" placeholder="Enter your email" required className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 transition-all" />
              </div>

              <div className="flex flex-col">
                  <label className="text-gray-400 text-sm mb-2">Message</label>
                  <textarea name="message" rows="6" placeholder="Enter your message" required className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500 transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 my-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                {isSubmitting ? 'Sending...' : (
                    <>Send Message <FaPaperPlane /></>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;