'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">02</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            EXPERIENCE
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {experiences.map((experience) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              variants={itemVariants}
              className="glass-card flex h-full flex-col rounded-lg p-6 shadow-lg"
            >
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{experience.period}</span>
              </div>

              <h3 className="mb-1 text-xl font-bold text-foreground">
                {experience.title}
              </h3>
              <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <span>{experience.company}</span>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {experience.location}
              </p>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                {experience.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass-badge rounded px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}