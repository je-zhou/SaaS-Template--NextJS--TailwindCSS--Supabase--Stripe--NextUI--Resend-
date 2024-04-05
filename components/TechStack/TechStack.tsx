import React from 'react'
import { BrandGrid } from "@/components/TechStack/TileGrid";
import NextJS from "@/components/TechStack/NextJS";
import { IconBrandPrisma, IconBrandStripe, IconBrandSupabase, IconBrandTailwind, IconMail, IconRecordMail } from "@tabler/icons-react";
import { ShadCnSVG } from "@/components/TechStack/ShadCN";
import { LampContainer } from '../ui/lamp';
import { motion } from 'framer-motion';


export default function TechStack() {
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
    
    <div className="">
      <LampContainer>
      </LampContainer>
      {/* <NextJS></NextJS> */}
      {/* <BrandGrid items={brands} className="w-full"></BrandGrid> */}
    </div>
  )
}
