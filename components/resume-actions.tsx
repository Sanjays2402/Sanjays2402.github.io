'use client'

import Link from 'next/link'
import { ArrowLeft, Printer } from 'lucide-react'

export function ResumeActions() {
  return (
    <div className="resume-actions flex flex-wrap gap-3">
      <Link href="/#projects" className="btn-ghost inline-flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="btn-primary inline-flex items-center gap-2"
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print or save as PDF
      </button>
    </div>
  )
}
