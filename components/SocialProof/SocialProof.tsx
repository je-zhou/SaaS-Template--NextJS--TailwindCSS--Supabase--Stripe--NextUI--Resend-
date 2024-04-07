"use client";

import React from "react";
import { InfiniteMovingCards, MovingCardTile } from "../ui/infinite-moving-cards";

export function SocialProofDemo() {
  return (
    <div className="flex flex-col items-center space-y-4 px-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl opacity-65 text-center">What Developers Are Saying</h1>
      <p className="md:text-lg lg:text-xl opacity-50 text-center">Have a look at what the community thinks about this template</p>
      <div className="hidden xl:flex rounded-md flex-col antialiased items-center justify-center relative overflow-hidden pt-4 lg:pt-12">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:hidden gap-4 pt-12 px-4">
          {testimonials.map(item => <MovingCardTile key={item.name} item={item} className="w-full h-full"/>)}
        </ul>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Next.js, Stripe, Prisma, Supabase - a powerhouse combo! 🚀 Prototyping made easy and fun with these tools. Major shoutout to this template for turning development into an exciting journey! ",
    name: "Alvin Z",
    title: "Software Dev",
  },
  {
    quote:
      "Just wrapped up a project using this template - and boy, was it a blast! Here's to making development feel more like a fun adventure!",
    name: "Zac J",
    title: "Software Dev",
  },
  {
    quote: "You really don't need any other tools besides this template. I had my project up and running in a weekend.",
    name: "Lebron J.",
    title: "The GOAT | The King | Los Angeles Lakers",
  },
];
