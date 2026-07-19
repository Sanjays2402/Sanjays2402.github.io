'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Calendar, ExternalLink, Users } from 'lucide-react'
import { profile, publications, totalCitations } from '@/lib/portfolio-data'

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

export function ResearchSection() {
  return (
    <section id="research" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">05</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            RESEARCH
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
            Peer-reviewed work in computer vision, deep learning, and intelligent systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 grid grid-cols-3 gap-2 sm:gap-5"
        >
          <div className="glass-stat rounded-lg p-3 text-center sm:p-5">
            <BookOpen className="mx-auto mb-2 h-6 w-6 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
            <div className="mb-1 text-xl font-bold text-foreground sm:text-2xl">{publications.length}</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Publications</div>
          </div>
          <div className="glass-stat rounded-lg p-3 text-center sm:p-5">
            <Award className="mx-auto mb-2 h-6 w-6 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
            <div className="mb-1 text-xl font-bold text-foreground sm:text-2xl">{totalCitations}+</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Citations</div>
          </div>
          <div className="glass-stat rounded-lg p-3 text-center sm:p-5">
            <Calendar className="mx-auto mb-2 h-6 w-6 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
            <div className="mb-1 text-xl font-bold text-foreground sm:text-2xl">2021</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Published</div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2"
        >
          {publications.map((publication) => (
            <motion.article
              key={publication.title}
              variants={itemVariants}
              className="glass-card flex h-full flex-col rounded-lg p-5 shadow-lg sm:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {publication.year}
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {publication.citations} citations
                </span>
              </div>

              <a
                href={publication.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 text-lg font-bold leading-tight text-foreground transition-colors hover:text-primary"
              >
                {publication.title}
                <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              </a>
              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <Users className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{publication.authors}</span>
              </div>
              <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{publication.venue}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href={profile.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            View Google Scholar profile
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Publication and citation totals are sourced from Google Scholar.
          </p>
        </div>
      </div>
    </section>
  )
}