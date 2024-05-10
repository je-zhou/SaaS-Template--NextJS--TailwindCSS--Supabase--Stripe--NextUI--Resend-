"use client";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandInstagram, IconBrandMedium } from "@tabler/icons-react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Code from "./Code";

export default function HeaderDemo() {
  return (
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
        className="px-4 leading-tight text-center mx-auto min-h-screen w-fit h-full flex items-center "
      >
        <div className="space-y-8 sm:space-y-12 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold ">
            The ultimate SaaS template to start {" "}
            <Highlight className="text-black dark:text-white">
              shipping code fast
            </Highlight>
          </h1>
          <h2 className="text-base md:text-xl lg:text-2xl max-w-md md:max-w-lg lg:max-w-xl font-normal opacity-80 sm:pb-12">Stop wasting time with the set up. Start building powerful modern web apps in seconds.</h2>
          <Code className="hidden md:flex justify-center pr-14" code={`git clone https://github.com/je-zhou/The-Solopreneur-Saas-Template.git`}/>
          <Code className="flex md:hidden justify-center pr-14" code={`git clone ...`} copyText={"git clone https://github.com/je-zhou/The-Solopreneur-Saas-Template.git"}/>
          {/* <Link href={"https://github.com/je-zhou/The-Solopreneur-Saas-Template"}>
            <Button className="md:hidden" size={"lg"}>Clone Repo</Button>
          </Link> */}
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

  );
}
