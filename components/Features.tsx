'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Zap, Users, Lock, RefreshCw, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Visual Analysis',
    description: 'AI-powered screenshot analysis captures every UI state, interaction, and user flow automatically.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Documentation is created in real-time as part of your PR workflow. No extra steps required.',
  },
  {
    icon: Users,
    title: 'End-User Focused',
    description: 'Documentation written for your users, not developers. Clear, visual, and easy to understand.',
  },
  {
    icon: RefreshCw,
    title: 'Always Up to Date',
    description: 'Docs automatically update with every PR. Never worry about outdated documentation again.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your code never leaves your infrastructure. We only analyze the running application.',
  },
  {
    icon: MessageSquare,
    title: 'PR Integration',
    description: 'Documentation previews appear directly in pull requests for team review and feedback.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Built for modern teams
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Everything you need to create and maintain exceptional documentation
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="h-full bg-white rounded-2xl p-8 border border-navy-100 hover:border-navy-300 hover:shadow-xl transition-shadow group"
              >
                {/* Icon */}
                <div className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: '10x', label: 'Faster documentation' },
            { value: '100%', label: 'Coverage' },
            { value: '2min', label: 'Setup time' },
            { value: '0', label: 'Maintenance' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-navy-900 mb-2">
                {stat.value}
              </div>
              <div className="text-navy-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
