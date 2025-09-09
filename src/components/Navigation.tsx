import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

interface NavigationProps {
  currentSection: string
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
    } border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Praharsha More
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentSection === item.id
                      ? darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-600 text-white'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  darkMode
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`md:hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentSection === item.id
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation