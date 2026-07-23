'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, LockKeyhole } from 'lucide-react'
import { featuredProjects } from '@/lib/portfolio-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
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
          className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-[1fr_1.1fr] lg:items-end"
        >
          <div>
            <span className="mb-4 block font-mono text-sm text-primary">03</span>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              SYSTEMS I&apos;VE SHIPPED
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Production and applied systems built around real constraints: scale,
              interoperability, security, and measurable operational outcomes.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <LockKeyhole className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Proprietary work described at system level
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`glass-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/70 p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-7 ${
                index < 2 ? 'lg:col-span-6' : 'lg:col-span-4'
              }`}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="mb-6 flex items-start justify-between gap-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {project.eyebrow}
                </p>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="max-w-lg text-2xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <dl className="my-7 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-border/70 py-5 sm:grid-cols-3">
                {project.impact.map((item) => (
                  <div key={`${project.title}-${item.label}`}>
                    <dt className="text-2xl font-bold tracking-tight text-foreground">
                      {item.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass-badge rounded px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.sourceUrl || project.liveUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2 px-4 py-2 text-sm"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Source
                    </a>
                  )}
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
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
