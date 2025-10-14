import * as React from 'react'

export type IconProps = React.SVGProps<SVGSVGElement>

function SvgBase({ children, ...props }: React.PropsWithChildren<IconProps>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      {...props}
    >
      {children}
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </SvgBase>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </SvgBase>
  )
}

export function ResearchGateIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 17V7h5a3 3 0 0 1 0 6H8" />
      <path d="M13 13l3 4" />
    </SvgBase>
  )
}

// Simple monochrome ORCID-style mark: circle outline with "i" and a "D"-like curve
export function OrcidIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="9" cy="7" r="1" />
      <path d="M9 9v8" />
      <path d="M12 9h3a4 4 0 0 1 0 8h-3z" />
    </SvgBase>
  )
}
