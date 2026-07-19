'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { profile } from '@/lib/portfolio-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const codeSnippet = `public class SanjaySanthanam {
    private String role = "Backend & Systems Engineer";
    private String[] focus = {
        "Healthcare", "Fintech", "Applied AI"
    };
    private String stack = "Java, Spring Boot, Kafka";
    
    public void buildReliableSystems() {
        // Let's turn complex workflows into simple products.
    }
}`

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[100svh] items-center justify-center overflow-hidden pb-12 pt-20 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div className="text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="mb-4 text-left font-mono text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            >
              Healthcare / Fintech / Distributed systems
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-left text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                <span className="block text-foreground">BACKEND &</span>
                <span className="block text-gradient">SYSTEMS ENGINEER</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-8 max-w-2xl text-left text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0"
            >
              I build reliable Java and Spring platforms for high-stakes workflows,
              including patient scheduling across 15 hospitals and fraud checks at
              more than 1M transactions per hour.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                View featured work
              </Link>
              <Link
                href="/resume/"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View resume
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-3 lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-badge hover:bg-muted/40 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-badge hover:bg-muted/40 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${profile.email}`}
                className="p-3 rounded-full glass-badge hover:bg-muted/40 transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-muted/30 backdrop-blur-sm px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm text-muted-foreground font-mono">
                  SanjaySanthanam.java
                </span>
              </div>

              <div className="p-6 bg-card/30 backdrop-blur-md font-mono text-sm overflow-x-auto">
                <pre className="text-card-foreground">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}