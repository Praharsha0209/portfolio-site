import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

interface HeroProps {
  darkMode: boolean
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const profileImage = "https://public.youware.com/image/993b3be5-63f2-49a9-a709-f5f00e5f3ce3/r3xcfgamee.jpg"

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Praharsha More"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-5xl md:text-7xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              style={{
                opacity: "1",
                transform: "none",
                color: "#fcfdff"
              }}>
              Praharsha More
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2"
            >
              <h2
                className={`text-2xl md:text-3xl font-light ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{
                  color: "#ffffff"
                }}>
                Data Engineer
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            style={{
              opacity: "1",
              transform: "none",
              color: "#ffffff"
            }}>
            Experienced Data Engineer with 5+ years delivering real-time and batch data products 
            in Ad-tech, Automotive, and Banking. Specializing in cloud platforms, streaming solutions, 
            and scalable data architectures.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center space-x-6"
          >
            <a
              href="https://linkedin.com/in/praharsha-p-784186190"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:Praharsha.m0209@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white'
              }`}
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            <p>Boston, MA | 774-473-9096 | Praharsha.m0209@gmail.com</p>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`p-2 rounded-full ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-300`}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

export default Hero