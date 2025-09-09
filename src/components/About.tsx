import React from 'react'
import { motion } from 'framer-motion'
import { Award, Code, Database, Cloud } from 'lucide-react'

interface AboutProps {
  darkMode: boolean
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Database, label: 'Data Projects', value: '20+' },
    { icon: Cloud, label: 'Cloud Platforms', value: '3' },
    { icon: Code, label: 'Technologies', value: '15+' }
  ]

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Passionate Data Engineer
            </h3>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Data Engineer in Ad-tech, Automotive and Banking with 5+ years delivering real-time 
              and batch data products that power ad delivery and personalization. I ship Kafka/Kinesis 
              streams and Airflow pipelines into Snowflake, Redshift, BigQuery, and I've automated 
              Data Subject Access Request and secure cross-cloud migrations with Terraform, RBAC, and lineage.
            </p>

            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My expertise spans across cloud platforms (AWS, Azure, GCP), data warehousing solutions, 
              and modern data engineering tools. I'm passionate about building scalable, reliable data 
              infrastructure that enables data-driven decision making.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Python', 'SQL', 'Spark', 'Kafka', 'Airflow', 'Snowflake', 'AWS', 'Azure', 'GCP'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    darkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl text-center ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  darkMode ? 'bg-gray-600' : 'bg-blue-100'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Google Cloud Professional Data Engineer',
                organization: 'Google Cloud',
                icon: '🏆'
              },
              {
                title: 'AWS Certified Data Engineer Associate',
                organization: 'Amazon Web Services',
                icon: '🏆'
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div>
                    <h4 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About