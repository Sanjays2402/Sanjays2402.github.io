'use client'

import { motion } from 'framer-motion'
import { ArrowUp, ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { profile } from '@/lib/portfolio-data'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanjay24',
    href: profile.linkedinUrl,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Sanjays2402',
    href: profile.githubUrl,
  }
]

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

export function ContactSection() {
  return (
    <section id="contact" className="glass-section py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">06</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GET IN TOUCH
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-foreground mb-6"
            >
              Build reliable software with me.
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              I&apos;m open to backend, platform, and product engineering
              conversations. Send an email or review the work behind this portfolio.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`${
                  contact.href ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <ContactCard contact={contact} />
                  </a>
                ) : (
                  <ContactCard contact={contact} />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${profile.email}`}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Send an email
              </motion.a>
              <Link
                href="/resume/"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View resume
              </Link>
            </div>
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-8 border-t border-border text-center"
          >
            <a
              href="#home"
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-foreground sm:hidden"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              Back to top
            </a>
            <p className="text-center text-muted-foreground">
              © 2026 Sanjay Santhanam.
            </p>
          </motion.footer>
        </div>
      </div>
    </section>
  )
}

const ContactCard = ({ contact }: { contact: typeof contactInfo[number] }) => {
  const Icon = contact.icon
  
  return (
    <div className="glass-card rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-card/50 hover:border-white/20 transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-foreground mb-1">
            {contact.label}
          </h4>
          <p className="break-words text-muted-foreground transition-colors group-hover:text-primary">
            {contact.value}
          </p>
        </div>
        {contact.href && (
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
    </div>
  )
}