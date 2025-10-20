'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Eye, FileText } from 'lucide-react'

const steps = [
  {
    icon: Github,
    title: 'Connect GitHub',
    description: 'Install the North* GitHub app in seconds. One click, zero configuration.',
  },
  {
    icon: Eye,
    title: 'Open a Pull Request',
    description: 'We automatically spin up your app and visually analyze every screen and interaction.',
  },
  {
    icon: FileText,
    title: 'Get Documentation',
    description: 'Beautiful, end-user focused documentation generated and ready to ship.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Three simple steps to transform your development workflow
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-20 left-full w-full items-center justify-center -z-10 px-4">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-navy-300 via-navy-200 to-transparent" />
                  <svg className="w-4 h-4 text-navy-300 -ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              <div className="group relative bg-white border-2 border-navy-100 rounded-2xl p-8 hover:border-navy-300 transition-all duration-300 hover:shadow-xl">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-navy-50 rounded-full border border-navy-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-navy-700 font-medium">
              Average setup time: 2 minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
