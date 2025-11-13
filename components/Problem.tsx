'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, Clock, FileQuestion } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Time-consuming',
    description: 'Writing and updating documentation takes time away from building features',
  },
  {
    icon: FileQuestion,
    title: 'Quickly outdated',
    description: 'Documentation becomes stale as your application evolves',
  },
  {
    icon: AlertCircle,
    title: 'Support burden',
    description: 'Poor documentation leads to confused users and more support requests',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Documentation shouldn't slow you down
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Every team knows good documentation is critical, but creating and maintaining it manually is a constant burden that takes time away from shipping features.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-red-50 border border-red-200">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-navy-50 border-2 border-navy-200 rounded-2xl p-8">
            <p className="text-lg text-navy-700 leading-relaxed">
              Teams struggle to keep documentation in sync with code changes. Manual screenshots, updating guides, and writing end-user docs are time-consuming tasks that developers avoid—leading to outdated information, frustrated users, and increased support costs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
