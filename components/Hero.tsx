'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Documentation that writes itself'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-2">
              North<span className="text-navy-500">*</span>
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 text-balance max-w-4xl mx-auto leading-tight min-h-[1.2em]"
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-navy-600 mb-12 text-balance max-w-3xl mx-auto leading-relaxed"
          >
            Agentically generate and maintain documentation for your software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group px-8 py-4 bg-navy-900 text-white rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 border-2 border-navy-900 text-navy-900 rounded-lg font-semibold text-lg hover:bg-navy-50 transition-colors"
            >
              See How It Works
            </motion.button>
          </motion.div>

          {/* Visual Demo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              {/* Mockup container */}
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200 bg-white">
                <div className="bg-navy-900 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-white/90 text-sm font-mono">
                    github.com/yourapp/pull/42
                  </div>
                </div>
                <div className="bg-white p-12 min-h-[400px] relative">
                  {/* Mock documentation content */}
                  <div className="space-y-6">
                    {/* Title section */}
                    <div className="space-y-2">
                      <div className="h-3 bg-navy-900 rounded w-48" />
                      <div className="h-2 bg-gray-300 rounded w-full max-w-md" />
                      <div className="h-2 bg-gray-300 rounded w-full max-w-sm" />
                    </div>

                    {/* Screenshot placeholders */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <motion.div
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="aspect-video bg-gradient-to-br from-navy-100 to-navy-200 rounded border border-navy-300"
                      />
                      <motion.div
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="aspect-video bg-gradient-to-br from-navy-100 to-navy-200 rounded border border-navy-300"
                      />
                    </div>

                    {/* Text lines */}
                    <div className="space-y-2 pt-2">
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-5/6" />
                      <div className="h-2 bg-gray-200 rounded w-4/6" />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span>✓ 47 screenshots analyzed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle floating blur effects */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-navy-200/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-navy-300/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
