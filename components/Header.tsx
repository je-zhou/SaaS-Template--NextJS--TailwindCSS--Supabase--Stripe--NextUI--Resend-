"use client";
import { motion } from "framer-motion";
import NextJS from "./TechStack/NextJS";
import { BrandGrid } from "./TechStack/TileGrid";
import { IconBrandPrisma, IconBrandStripe, IconBrandSupabase, IconBrandTailwind, IconMail, IconRecordMail } from "@tabler/icons-react";
import { ShadCnSVG } from "./TechStack/ShadCN";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { LampContainer } from "./ui/lamp";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center w-full">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          The ultimate SaaS template start {" "}
          <Highlight className="text-black dark:text-white">
            shipping code fast
          </Highlight>
        </motion.h1>
      </HeroHighlight>  
    </div>
  );
}
