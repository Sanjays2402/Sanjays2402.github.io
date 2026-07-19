import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { MotionProvider } from '@/components/motion-provider'
import { Navbar } from '@/components/navbar'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Sanjay Santhanam - Backend & Systems Engineer',
  description: 'Backend and systems engineer building reliable healthcare and fintech platforms with Java, Spring Boot, Kafka, and React.',
  keywords: ['Backend Engineer', 'Java', 'Spring Boot', 'Kafka', 'Distributed Systems', 'Healthcare Technology', 'Software Engineer'],
  authors: [{ name: 'Sanjay Santhanam' }],
  creator: 'Sanjay Santhanam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanjays2402.github.io/',
    title: 'Sanjay Santhanam - Backend & Systems Engineer',
    description: 'Reliable healthcare and fintech platforms built with Java, Spring Boot, Kafka, and React.',
    siteName: 'Sanjay Santhanam Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <MotionProvider>
            <div className="decorative-background" aria-hidden="true">
              <div className="gradient-bg absolute inset-0" />
              <div className="glass-orb glass-orb-1" />
              <div className="glass-orb glass-orb-2" />
              <div className="glass-orb glass-orb-3" />
            </div>
            <Navbar />
            <main className="relative min-h-screen">
              {children}
            </main>
            <BackToTop />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}