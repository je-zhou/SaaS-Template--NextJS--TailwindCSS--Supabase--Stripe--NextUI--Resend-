"use client";
import React from "react";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "../ui/text-reveal-card";
import { IconBrandNextjs } from "@tabler/icons-react";

export default function NextJS() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] rounded-2xl w-fit">
      <TextRevealCard
        text="Frontend & Backend"
        revealText="Webhosting"
      >
        <TextRevealCardTitle>
          <div className="flex flex-row space-x-2 items-center">
            <IconBrandNextjs/>
            <p>NextJS</p>
          </div>
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          {`Next.js is a JavaScript framework primarily used for frontend development, offering server-side rendering and static site generation. 
          Additionally, it supports backend tasks through API routes, allowing developers to create RESTful or GraphQL APIs within the same project, 
          making it an efficient choice for building integrated web applications.`}
        </TextRevealCardDescription>

      </TextRevealCard>
    </div>
  )
}
