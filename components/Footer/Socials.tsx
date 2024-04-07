import { IconBrandDribbble, IconBrandGithub, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
import React from 'react'

export default function Socials() {
  return (
    <ul className="flex justify-center gap-6 sm:justify-end">
      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-primary/80 transition hover:text-primary"
        >
          <span className="sr-only">Youtube</span>
          <IconBrandYoutube/>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-primary/80 transition hover:text-primary"
        >
          <span className="sr-only">Instagram</span>
          <IconBrandInstagram/>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-primary/80 transition hover:text-primary"
        >
          <span className="sr-only">Twitter</span>
          <IconBrandTwitter/>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-primary/80 transition hover:text-primary"
        >
          <span className="sr-only">GitHub</span>
          <IconBrandGithub/>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-primary/80 transition hover:text-primary"
        >
          <span className="sr-only">Dribbble</span>
          <IconBrandDribbble/>
        </a>
      </li>
    </ul>
  )
}
