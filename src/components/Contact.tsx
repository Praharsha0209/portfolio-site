import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react'

interface ContactProps {
  darkMode: boolean
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recaptchaVerified, setRecaptchaVerified] = useState(false)

  // Real-time validation
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return undefined
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        if (value.trim().length < 5) return 'Subject must be at least 5 characters'
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return undefined
      default:
        return undefined
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) newErrors[key as keyof FormErrors] = error
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    // Check reCAPTCHA (simulated for demo)
    if (!recaptchaVerified) {
      alert('Please complete the reCAPTCHA verification')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Simulate reCAPTCHA verification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecaptchaVerified(true)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Praharsha.m0209@gmail.com',
      href: 'mailto:Praharsha.m0209@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '774-473-9096',
      href: 'tel:774-473-9096'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Boston, MA',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/praharsha-p-784186190',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className={`max-w-2xl mx-auto p-8 rounded-2xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Message Sent Successfully!
              </h2>
              <p className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss opportunities, collaborations, or any questions you might have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
                    } transition-colors duration-200 group`}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.label}
                      </div>
                      <div className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      } group-hover:text-blue-600 transition-colors duration-200`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'
                    } ${social.color} transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Summary */}
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Work Together
              </h4>
              <p className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always interested in discussing new opportunities, 
                collaborating on exciting projects, or simply connecting 
                with fellow data professionals. Don't hesitate to reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'border-gray-600 focus:border-blue-500 bg-gray-800 text-white' 
                        : 'border-gray-300 focus:border-blue-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'border-gray-600 focus:border-blue-500 bg-gray-800 text-white' 
                        : 'border-gray-300 focus:border-blue-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'border-gray-600 focus:border-blue-500 bg-gray-800 text-white' 
                        : 'border-gray-300 focus:border-blue-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200`}
                  placeholder="What would you like to discuss?"
                />
                {errors.subject && (
                  <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'border-gray-600 focus:border-blue-500 bg-gray-800 text-white' 
                        : 'border-gray-300 focus:border-blue-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200 resize-none`}
                  placeholder="Tell me about your project, idea, or how I can help..."
                />
                {errors.message && (
                  <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* reCAPTCHA Simulation */}
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  recaptchaVerified 
                    ? 'bg-green-500 border-green-500' 
                    : darkMode 
                      ? 'border-gray-600 bg-gray-800' 
                      : 'border-gray-300 bg-white'
                }`}>
                  {recaptchaVerified && <CheckCircle size={16} className="text-white" />}
                </div>
                <span className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {recaptchaVerified ? 'reCAPTCHA verified' : 'Verifying reCAPTCHA...'}
                </span>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !recaptchaVerified}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting || !recaptchaVerified
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact