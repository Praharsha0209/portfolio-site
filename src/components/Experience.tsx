import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

interface ExperienceProps {
  darkMode: boolean
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Fox Corporation (Contract)',
      location: 'Boston, MA',
      period: 'Sep 2024 - Present',
      description: 'Architected and maintained ad-tech data pipelines for Adrise, ensuring seamless ad delivery and monetization at scale.',
      achievements: [
        'Designed and automated end-to-end DSAR (Data Subject Access Request) workflows with Apache Airflow',
        'Engineered secure data migration processes between Redshift, S3, and Snowflake',
        'Built scalable streaming solutions with Apache Kafka and AWS Kinesis for hybrid ingestion',
        'Deployed Apache Iceberg tables on Amazon S3 with schema evolution and partition pruning',
        'Delivered actionable Power BI dashboards, reducing manual reporting effort by 30%'
      ],
      technologies: ['Apache Airflow', 'Redshift', 'Snowflake', 'Apache Kafka', 'AWS Kinesis', 'Apache Iceberg', 'Power BI', 'PySpark', 'EMR']
    },
    {
      title: 'Data Engineer Intern',
      company: 'Nissan Motor Corporation',
      location: 'Boston, MA',
      period: 'Sep 2023 - Aug 2024',
      description: 'Built Snowflake core objects and integrated AWS services for large-scale data processing and analytics.',
      achievements: [
        'Built Snowflake core objects like tables, views, stages, file formats and integrated AWS S3',
        'Designed Snowflake dimensional schemas and CDC consumer tables for 5TB+ datasets',
        'Developed AWS Glue ETL to load data from S3 (Parquet/Text) into Redshift',
        'Developed EMR, Hive and Impala pipelines with external Hive tables on S3',
        'Prototyped dbt models for modular SQL transformations and automated documentation',
        'Implemented Python AWS Lambda functions with concurrency and multithreading'
      ],
      technologies: ['Snowflake', 'AWS S3', 'AWS Glue', 'Redshift', 'EMR', 'Hive', 'Impala', 'dbt', 'AWS Lambda', 'CloudWatch']
    },
    {
      title: 'Project Engineer',
      company: 'Wipro Limited',
      location: 'Hyderabad, India',
      period: 'Jun 2018 - Jul 2021',
      description: 'Designed and automated batch ETL pipelines for banking systems, processing large volumes of transaction data.',
      achievements: [
        'Designed and automated a batch ETL pipeline using Azure Functions for 30 GB of daily transaction data',
        'Optimized data ingestion from 11 in-house databases with volume of 3 TB+ using Python scripts',
        'Developed automated workflow using PySpark on distributed Spark cluster',
        'Authored and optimized SQL queries in Azure Synapse Analytics, reducing query execution time by 23%',
        'Deployed and managed Airflow DAGs using Azure Kubernetes Service',
        'Built centralized PowerBI dashboard, resulting in 37% reduction in reporting time'
      ],
      technologies: ['Azure Functions', 'PySpark', 'Azure Synapse Analytics', 'Apache Airflow', 'Azure Kubernetes Service', 'Power BI', 'Python', 'Pandas']
    }
  ]

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            5+ years of experience building scalable data solutions across various industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-600' : 'bg-gray-300'
          } hidden md:block`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  darkMode 
                    ? 'bg-gray-800 border-blue-400' 
                    : 'bg-white border-blue-500'
                } hidden md:block`}></div>

                {/* Content Card */}
                <div className={`md:ml-20 p-8 rounded-2xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex-1 min-w-0 mr-4">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-2">
                          <Building className={`w-4 h-4 ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                          }`} />
                          <span className={`font-semibold ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className={`w-4 h-4 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className={`w-4 h-4 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-lg mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className={`flex items-start space-x-3 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            darkMode
                              ? 'bg-gray-600 text-gray-300'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience