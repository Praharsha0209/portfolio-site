import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Database, BarChart3 } from 'lucide-react'

interface ProjectsProps {
  darkMode: boolean
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'YouTube Trending Data Pipeline',
      category: 'Data Engineering',
      description: 'Built an end-to-end data pipeline using AWS CLI, S3, Glue, Lambda, and Athena, processing 200K+ daily trending video records into a structured data catalog.',
      fullDescription: 'This comprehensive data pipeline project demonstrates modern cloud-native data engineering practices. The system automatically ingests YouTube trending data, transforms it through various stages, and makes it available for analytics through a structured data catalog.',
      technologies: ['AWS CLI', 'S3', 'Glue', 'Lambda', 'Athena', 'SQL', 'Python'],
      achievements: [
        'Optimized Athena queries and Glue jobs to reduce compute cost by 25%',
        'Maintained sub-second query performance for trending video insights',
        'Automated ETL workflows with Glue and SQL-based transformations',
        'Delivered centralized dataset reducing manual reporting effort by 50%'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop'
    },
    {
      title: 'Ad Campaign Analytics Pipeline & Dashboard',
      category: 'Analytics & Visualization',
      description: 'Engineered a PySpark ETL pipeline on AWS EMR to process and aggregate 5M+ daily ad events from S3 into Snowflake, achieving sub-2s query latency.',
      fullDescription: 'A complete analytics solution that processes massive volumes of advertising data and presents insights through an interactive dashboard. This project showcases the integration of big data processing with modern visualization frameworks.',
      technologies: ['PySpark', 'AWS EMR', 'Snowflake', 'React', 'D3.js', 'S3'],
      achievements: [
        'Achieved sub-2s query latency for downstream analytics',
        'Developed interactive dashboard with drill-down filters',
        'Cut reporting time by 60% with real-time visualizations',
        'Improved campaign ROI by 18% through faster decision-making'
      ],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      title: 'Twitter Data Pipeline',
      category: 'Real-time Processing',
      description: 'Extracted tweets in real time via the Twitter API and transformed text data with Python for sentiment and keyword analysis.',
      fullDescription: 'A real-time data processing system that captures and analyzes Twitter data for sentiment analysis and trend monitoring. The pipeline includes robust error handling, retry logic, and scalable processing capabilities.',
      technologies: ['Twitter API', 'Python', 'Apache Airflow', 'EC2', 'S3', 'NLP'],
      achievements: [
        'Deployed workflows on Apache Airflow with retry logic and alerts',
        'Enabled continuous monitoring of 50K+ tweets/day',
        'Provided structured datasets for trend analysis',
        'Improved analyst productivity by 35%'
      ],
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop'
    }
  ]

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcasing real-world data engineering projects that demonstrate scalable solutions and measurable impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-900'
                } backdrop-blur-sm`}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Expand Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    darkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedProject === index ? 'Show Less' : 'Learn More'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-8 shadow-2xl`}
              >
                {projects[selectedProject] && (
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className={`text-3xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {projects[selectedProject].title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {projects[selectedProject].category}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Full Description */}
                    <p className={`text-lg mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {projects[selectedProject].fullDescription}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className={`text-xl font-semibold mb-4 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {projects[selectedProject].achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className={`flex items-start space-x-3 ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[selectedProject].color} mt-2 flex-shrink-0`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* All Technologies */}
                    <div className="mb-6">
                      <h4 className={`text-xl font-semibold mb-4 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-2 rounded-lg text-sm font-medium ${
                              darkMode
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        darkMode
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                        <Github size={20} />
                        <span>View Code</span>
                      </button>
                      <button className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        darkMode
                          ? 'bg-gray-700 text-white hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}>
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects