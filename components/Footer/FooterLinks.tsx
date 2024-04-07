import { cn } from '@/libs/utils'
import Link from 'next/link'
import React from 'react'

interface FooterLinkProps {
  title: string
  url: string
  classname?: string
}

export default function FooterLink({title, url, classname}: FooterLinkProps) {
  return (
    <Link
      href={url}
      className={cn("hover:opacity-80 transition opacity-70", classname)}
    >
      {title}
    </Link>
  )
}
