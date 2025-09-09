import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

interface EducationProps {
  darkMode: boolean
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Masters in Data Science',
      school: 'University of Massachusetts Dartmouth',
      location: 'North Dartmouth, MA',
      period: 'Sep 2021 - Aug 2023',
      description: 'Advanced coursework in machine learning, statistical analysis, and big data technologies. Focused on practical applications of data science in business contexts.',
      coursework: ['Machine Learning', 'Statistical Analysis', 'Big Data Technologies', 'Data Mining', 'Database Systems', 'Data Visualization'],
      gpa: '3.64/4.0'
    },
    {
      degree: 'Bachelors in Electronics and Communications Engineering',
      school: 'Keshav Memorial Institute of Technology',
      location: 'Hyderabad, India',
      period: 'Jul 2015 - May 2019',
      description: 'Comprehensive engineering education with focus on electronics, communications, and signal processing. Strong foundation in mathematics and programming.',
      coursework: ['Digital Signal Processing', 'Communication Systems', 'Microprocessors', 'Control Systems', 'Mathematics', 'Programming Fundamentals'],
      gpa: '3.6/4.0'
    }
  ]

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Strong academic foundation in data science and engineering
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Decorative Element */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                index === 0 ? 'from-blue-500 to-purple-500' : 'from-green-500 to-blue-500'
              } rounded-t-2xl`}></div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${
                      index === 0 ? 'from-blue-500 to-purple-500' : 'from-green-500 to-blue-500'
                    }`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <h4 className={`text-xl font-semibold mb-3 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {edu.school}
                      </h4>
                      
                      <div className="flex flex-wrap items-center space-x-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className={`w-4 h-4 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {edu.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className={`w-4 h-4 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {edu.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className={`w-4 h-4 ${
                            darkMode ? 'text-yellow-400' : 'text-yellow-500'
                          }`} />
                          <span className={`font-semibold ${
                            darkMode ? 'text-yellow-400' : 'text-yellow-600'
                          }`}>
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {edu.description}
                  </p>
                </div>

                {/* Coursework */}
                <div className="space-y-4">
                  <h5 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Coursework:
                  </h5>
                  <div className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center space-x-3 p-2 rounded-lg ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
                        } transition-colors duration-200`}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                          index === 0 ? 'from-blue-500 to-purple-500' : 'from-green-500 to-blue-500'
                        }`}></div>
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {course}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Academic Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Dean\'s List',
                description: 'Consistently maintained high academic performance throughout graduate studies',
                icon: '🏆'
              },
              {
                title: 'Research Projects',
                description: 'Completed multiple data science projects with real-world applications',
                icon: '🔬'
              },
              {
                title: 'Technical Excellence',
                description: 'Strong foundation in mathematics, statistics, and computer science',
                icon: '💡'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl text-center ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education