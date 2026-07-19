'use client'

import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap, MapPin } from 'lucide-react'
import { education, impactStats } from '@/lib/portfolio-data'

export function AboutSection() {
  return (
    <section id="about" className="glass-section py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">01</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              I turn complex workflows into dependable products.
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                My work sits where reliability, domain constraints, and product
                usability meet. I design APIs and distributed services that stay
                understandable under load, then work across the stack to make them
                useful to the people operating them.
              </p>

              <p className="leading-relaxed">
                I bring production experience in healthcare and financial systems,
                an M.S. in Computer Science, and published computer-vision research
                to each problem.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-stat rounded-lg p-3 text-center sm:p-4"
                >
                  <div className="mb-1 text-xl font-bold text-primary sm:text-2xl">
                    {stat.number}
                  </div>
                  <div className="text-xs leading-tight text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-lg p-6 shadow-xl sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <BriefcaseBusiness className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current focus</p>
                  <h3 className="font-semibold text-foreground">
                    Java platforms and distributed systems
                  </h3>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-5">
                  {education.map((item) => (
                    <div key={item.school}>
                      <p className="font-semibold text-foreground">{item.degree}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}