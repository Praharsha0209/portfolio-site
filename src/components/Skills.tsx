import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Settings, BarChart, Shield } from 'lucide-react'

interface SkillsProps {
  darkMode: boolean
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'Java', 'Scala'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data & Streaming',
      skills: ['Spark (PySpark)', 'Kafka', 'Kinesis', 'Airflow', 'Iceberg', 'Delta Lake', 'Hive/Impala', 'dbt'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['AWS (S3, Glue, EMR, Redshift, DynamoDB)', 'Azure (Databricks, Data Factory, Synapse, ADLS)', 'GCP (BigQuery, Dataproc, Dataflow, Composer)'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'DevOps/IaC',
      skills: ['Terraform', 'Docker', 'Kubernetes', 'CI/CD (Jenkins, GitLab)'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart,
      title: 'Data Warehousing & BI',
      skills: ['Snowflake', 'Redshift', 'BigQuery', 'Power BI', 'Looker', 'Tableau'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Governance & Quality',
      skills: ['Data contracts', 'RBAC/masking', 'lineage', 'anomaly checks', 'resource monitors', 'MDM (Ataccama)'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive toolkit for building scalable data solutions across modern cloud platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-2xl transition-all duration-300 group overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-r ${category.color}`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-3 p-2 rounded-lg ${
                      darkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
                    } transition-colors duration-200`}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Core Proficiencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'Python & SQL', level: 95 },
              { skill: 'Apache Spark & Kafka', level: 90 },
              { skill: 'Cloud Platforms (AWS/Azure/GCP)', level: 88 },
              { skill: 'Data Warehousing', level: 92 },
              { skill: 'DevOps & Infrastructure', level: 85 },
              { skill: 'Data Governance', level: 87 }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.skill}
                  </span>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.level}%
                  </span>
                </div>
                <div className={`w-full h-2 rounded-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills