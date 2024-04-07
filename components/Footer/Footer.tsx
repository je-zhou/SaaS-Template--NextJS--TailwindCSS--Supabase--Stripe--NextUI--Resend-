import React from 'react'
import FooterLink from './FooterLinks'
import Socials from './Socials'

export default function Footer() {
  const about = [
    {
      title: "Our Inspiration",
      url: "/#",
    },
    {
      title: "Meet the team",
      url: "/#",
    },
  ]

  const links = [
    {
      title: "Tech Stack",
      url: "/#techstack",
    },
    {
      title: "Community",
      url: "/#plans",
    },
    {
      title: "Pricing",
      url: "/#plans",
    }
  ]

  const more = [
    {
      title: "Instagram",
      url: "/"
    },
    {
      title: "Medium",
      url: "/"
    },
    {
      title: "Github",
      url: "/"
    },
    {
      title: "Youtube",
      url: "/"
    }
  ]

  const legal = [
    {
      title: "Privacy Policy",
      url: "/privacy-policy"
    },
    {
      title: "Term of Use",
      url: "/terms-of-use"
    },
  ]


  return (
    <footer className="bg-background w-full">
      <div className="max-w-screen-2xl w-full py-16 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center gap-4 rounded-lg bg-primary p-6 shadow-lg sm:flex-row sm:justify-between"
        >
          <strong className="text-xl text-white sm:text-xl"> Start your next project today </strong>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground bg-primary-foreground px-8 py-3 text-primary hover:bg-transparent hover:text-primary-foreground transition"
            href="#"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>

            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="border-t border-t-foreground/10 p-8 mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium opacity-80">About Us</p>
            <div className="mt-8 space-y-4 text-sm flex flex-col">
              {about.map(x => 
                <FooterLink key={x.title} url={x.url} title={x.title}/>)
              }
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium opacity-80">Links</p>
            <div className="mt-8 space-y-4 text-sm flex flex-col">
              {links.map(x => 
                <FooterLink key={x.title} url={x.url} title={x.title}/>)
              }
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium opacity-80">Legal</p>
            <div className="mt-8 space-y-4 text-sm flex flex-col">
              {legal.map(x => 
                <FooterLink key={x.title} url={x.url} title={x.title}/>)
              }
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium opacity-80">More</p>
            <div className="mt-8 space-y-4 text-sm flex flex-col">
              {more.map(x => 
                <FooterLink key={x.title} url={x.url} title={x.title}/>)
              }
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Socials/>

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-primary sm:justify-start">
              {/* Brand Logo */}
            </div>

            <p className="mt-4 text-center text-sm opacity-50 sm:mt-0 sm:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
