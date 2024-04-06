import React from 'react'
import { BrandGrid } from "@/components/TechStack/TileGrid";
import NextJS from "@/components/TechStack/NextJS";
import { IconBrandPrisma, IconBrandStripe, IconBrandSupabase, IconBrandTailwind, IconCheck, IconMail, IconRecordMail } from "@tabler/icons-react";
import { ShadCnSVG } from "@/components/TechStack/ShadCN";
import { LampContainer } from '../ui/lamp';

export default function TechStackDemo() {
  const brands = [
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandPrisma/>
        <p>Prisma</p>
      </div>,
      description: "Functions as an ORM (Object-Relational Mapping) tool, simplifying database access and management for developers.",
      link: "https://www.prisma.io/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandStripe/>
        <p>Stripe</p>
      </div>,
      description: "Facilitates online payment processing for businesses and e-commerce platforms.",
      link: "https://stripe.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandSupabase/>
        <p>Supabase</p>
      </div>,
      description: "Offers a platform for building and managing databases and backend services with ease.",
      link: "https://supabase.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandTailwind/>
        <p>TailwindCSS</p>
      </div>,
      description: "Utilizes a utility-first CSS framework for efficiently styling web applications.",
      link: "https://tailwindcss.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <ShadCnSVG/>
        <p>ShadCN</p>
      </div>,
      description: "A React component library designed for building user interfaces with customizable components and styles.",
      link: "https://ui.shadcn.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconMail/>
        <p>Resend</p>
      </div>,
      description: "Enables the delivery of transactional emails for notifications and communications.",
      link: "https://resend.com/"
    },
  ]

  return (
    
    <div className="overflow-x-clip">
      <LampContainer>
        <></>
      </LampContainer>
      <div className='-mt-40 grid grid-cols-5'>
        <div className='z-50 col-span-2 pl-8 space-y-2'>
          <h1 className='text-2xl font-medium pb-4 opacity-65'>The Tech Stack</h1>
          <p className='opacity-75'>A modern tech stack to handle everything from payments to building UIs at lighting speed ⚡</p>
          <div className='space-y-4 pt-5'>
            <div className='flex flex-row space-x-2 items-center'>
              <IconCheck className='text-green-500'/>
              <p className=''>User Authentication</p>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <IconCheck className='text-green-500'/>
              <p className=''>Modern & Customisable UI Components</p>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <IconCheck className='text-green-500'/>
              <p className=''>Email Notifications</p>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <IconCheck className='text-green-500'/>
              <p className=''>Postgresql Database & Flexible ORM</p>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <IconCheck className='text-green-500'/>
              <p className=''>Checkout & Payments</p>
            </div>
          </div>
          
        </div>
        <div className='col-span-3 px-2'>
          <NextJS></NextJS>
        </div>
        <BrandGrid items={brands} className="w-full col-span-5"></BrandGrid>
      </div>
      
    </div>
  )
}
