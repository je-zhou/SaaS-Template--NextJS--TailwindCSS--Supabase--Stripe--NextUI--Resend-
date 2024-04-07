"use client";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandInstagram, IconBrandMedium, IconBrandPrisma, IconBrandStripe, IconBrandSupabase, IconBrandTailwind, IconMail, IconRecordMail } from "@tabler/icons-react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Code from "./Code";

export default function HeaderDemo() {
  return (
    <HeroHighlight className="h-[50rem] md:h-[90vh] flex items-center">
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
        <div className="space-y-8 flex flex-col items-center">
          <div>
            The ultimate SaaS template to start {" "}
            <Highlight className="text-black dark:text-white">
              shipping code fast
            </Highlight>
          </div>
          <p className="text-xl max-w-xl font-normal pb-8">Stop wasting time with the set up. Start building powerful modern web apps in seconds.</p>
          <Code className="items-center" code="git clone https://github.com/je-zhou/The-Solopreneur-Saas-Template.git"/>
          <div className="flex flex-row space-x-12 opacity-60 pt-8">
            <a href="https://github.com/je-zhou/The-Solopreneur-Saas-Template" target="_blank">
              <IconBrandGithub/>
            </a>
            <a href="https://github.com/je-zhou/The-Solopreneur-Saas-Template" target="_blank">
              <IconBrandMedium/>
            </a>
            <a href="https://github.com/je-zhou/The-Solopreneur-Saas-Template" target="_blank">
              <IconBrandInstagram/>
            </a>
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>  
  );
}
