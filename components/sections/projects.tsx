'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { featuredProjects } from '@/lib/portfolio-data'

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

export function ProjectsSection() {
  return (
    <section id="projects" className="glass-section py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">03</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            PROJECTS
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
            Selected work with source code, live products, and enough detail to
            evaluate the implementation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass-card relative flex h-full flex-col rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {project.eyebrow}
              </p>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass-badge rounded px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}