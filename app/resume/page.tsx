import type { Metadata } from 'next'
import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { ResumeActions } from '@/components/resume-actions'
import {
  education,
  experiences,
  featuredProjects,
  profile,
  publications,
  skillCategories,
  totalCitations,
} from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Resume | Sanjay Santhanam',
  description:
    'Sanjay Santhanam - backend and systems engineering experience, selected projects, skills, education, and research.',
}

function ResumeHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-border pb-2 text-sm font-bold uppercase tracking-[0.18em] text-foreground">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen px-4 pb-16 pt-24 sm:px-6">
      <article className="glass-card mx-auto max-w-4xl rounded-xl p-6 shadow-xl sm:p-10">
        <header className="border-b border-border pb-7">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <p className="mb-2 font-mono text-sm uppercase tracking-[0.16em] text-primary">
                Resume
              </p>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">{profile.role}</p>
            </div>
            <ResumeActions />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={profile.linkedinUrl}
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.githubUrl}
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </header>

        <section className="resume-section mt-7">
          <ResumeHeading>Profile</ResumeHeading>
          <p className="leading-relaxed text-muted-foreground">
            Backend and systems engineer with 4+ years of experience building
            reliable healthcare and financial platforms. Specialized in Java,
            Spring Boot, distributed services, event-driven processing, and
            product delivery across the stack.
          </p>
        </section>

        <section className="resume-section mt-8">
          <ResumeHeading>Experience</ResumeHeading>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={`${experience.company}-${experience.period}`}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {experience.title}
                    </h3>
                    <p className="font-semibold text-primary">{experience.company}</p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {experience.location}
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {experience.technologies.join(' / ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section mt-8">
          <ResumeHeading>Selected projects</ResumeHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.title}>
                <a
                  href={project.sourceUrl}
                  className="inline-flex items-center gap-1.5 font-bold text-foreground hover:text-primary"
                >
                  {project.title}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {project.technologies.join(' / ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="resume-section">
            <ResumeHeading>Skills</ResumeHeading>
            <div className="space-y-3">
              {skillCategories.map((category) => (
                <p key={category.title} className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{category.title}:</strong>{' '}
                  {category.skills.join(', ')}
                </p>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <ResumeHeading>Education</ResumeHeading>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.school}>
                  <h3 className="font-bold text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school} · {item.location}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="resume-section mt-8">
          <ResumeHeading>Research</ResumeHeading>
          <p className="mb-4 text-sm text-muted-foreground">
            {publications.length} publications and {totalCitations}+ citations in
            computer vision and deep learning.
          </p>
          <div className="space-y-3">
            {publications.slice(0, 3).map((publication) => (
              <a
                key={publication.title}
                href={publication.scholarUrl}
                className="block text-sm font-medium text-foreground hover:text-primary"
              >
                {publication.title}{' '}
                <span className="font-normal text-muted-foreground">
                  ({publication.year}, {publication.citations} citations)
                </span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
