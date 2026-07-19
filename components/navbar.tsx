'use client'

import { type MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Research', id: 'research' },
  { name: 'Contact', id: 'contact' },
] as const

const sectionIds = ['home', ...navItems.map((item) => item.id)]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    let frame = 0
    const updateNavigation = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)

        const marker = window.scrollY + 112
        let currentSection = 'home'

        for (const id of sectionIds) {
          const section = document.getElementById(id)
          if (!section) continue

          const sectionTop = section.getBoundingClientRect().top + window.scrollY
          if (sectionTop <= marker) currentSection = id
        }

        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4
        ) {
          currentSection = 'contact'
        }

        setActiveSection(currentSection)
      })
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
      updateNavigation()
    }

    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateNavigation)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const hrefFor = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`)

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const menuWasOpen = isOpen
    setIsOpen(false)
    if (pathname !== '/') return

    const element = document.getElementById(id)
    if (!element) return

    event.preventDefault()
    window.history.pushState(null, '', `#${id}`)

    const scrollToSection = () => {
      const top = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    }

    if (menuWasOpen && !prefersReducedMotion) {
      window.setTimeout(scrollToSection, 220)
    } else {
      window.requestAnimationFrame(scrollToSection)
    }
  }

  const isDark = mounted ? resolvedTheme === 'dark' : true

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={hrefFor('home')}
            onClick={(event) => handleNavClick(event, 'home')}
            className="flex-shrink-0 text-base font-bold text-foreground transition-colors hover:text-primary sm:text-xl"
            aria-current={activeSection === 'home' && pathname === '/' ? 'page' : undefined}
          >
            SANJAY{' '}
            <span className="text-muted-foreground">
              <span className="sm:hidden">S.</span>
              <span className="hidden sm:inline">SANTHANAM</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === '/' && activeSection === item.id

              return (
                <Link
                  key={item.id}
                  href={hrefFor(item.id)}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={`group relative rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-2.5 bottom-1 h-0.5 origin-left bg-primary transition-transform ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-1">
            <motion.button
              type="button"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-muted"
              aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
            >
              {isDark ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </motion.button>

            <motion.button
              type="button"
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-muted lg:hidden"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background/90 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-3 sm:px-6">
              {navItems.map((item) => {
                const isActive = pathname === '/' && activeSection === item.id

                return (
                  <Link
                    key={item.id}
                    href={hrefFor(item.id)}
                    onClick={(event) => handleNavClick(event, item.id)}
                    className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}