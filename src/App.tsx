import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Database, Cloud, Award } from 'lucide-react'

// Portfolio components
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navigation currentSection={currentSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
    </div>
  )
}

export default App