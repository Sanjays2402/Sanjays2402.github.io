'use client'

import { motion } from 'framer-motion'
import { Cloud, Code2, Database, PanelsTopLeft } from 'lucide-react'
import { additionalSkills, skillCategories } from '@/lib/portfolio-data'

const categoryIcons = [Code2, Database, PanelsTopLeft, Cloud] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="text-sm font-dyslexic text-primary mb-4 block">04</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SKILLS
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex]

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="glass-badge rounded-md px-3 py-2 text-center text-sm font-medium text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center sm:mt-10"
        >
          <h3 className="mb-4 text-lg font-bold text-foreground">
            Also experienced with
          </h3>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
            {additionalSkills.map((tool) => (
              <span
                key={tool}
                className="glass-badge rounded-full px-3 py-1.5 text-xs text-muted-foreground sm:text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}