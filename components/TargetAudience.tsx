'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Building2, Rocket } from 'lucide-react'

const audiences = [
  {
    icon: Rocket,
    title: 'Startups & Scale-ups',
    description: 'Fast-moving teams who need to ship features quickly without sacrificing documentation quality.',
    highlights: ['Move fast, document faster', 'Focus on product, not docs', 'Impress investors with polish'],
  },
  {
    icon: Building2,
    title: 'Enterprise Teams',
    description: 'Large organizations with complex applications that require comprehensive, up-to-date documentation.',
    highlights: ['Compliance-ready docs', 'Multi-team coordination', 'Audit trail for changes'],
  },
  {
    icon: Users,
    title: 'Open Source Projects',
    description: 'Community-driven projects that want to welcome contributors with clear, visual documentation.',
    highlights: ['Free for OSS', 'Lower barrier to entry', 'Community-friendly'],
  },
]

export default function TargetAudience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Built for teams who ship
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Whether you're a fast-moving startup or an enterprise team, North* helps you maintain documentation without slowing down development.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="h-full bg-white rounded-2xl p-8 border-2 border-navy-100 hover:border-navy-300 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center">
                  <audience.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-navy-600 leading-relaxed mb-6">
                  {audience.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {audience.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-navy-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-navy-500 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-600 text-lg mb-6">
            Trusted by development teams using GitHub
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-navy-400">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">React</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">Vue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">& more</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
