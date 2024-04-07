"use client";

import React from "react";
import Code from "../Code";

export function HowToDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-4xl opacity-65">Get Started Today</h1>
      <p className="text-xl opacity-50">Start building with Stripe, Supabase, and Prisma in 3 quick steps</p>
      <div className="grid md:grid-cols-2 w-full gap-4 md:gap-10 max-w-[60rem] py-12">
      <div className="space-y-4">
          <p className="text-lg opacity-80 underline">Step 1</p>
          <p className="text-base opacity-75">Fork this repository to access the source code</p>
        </div>
        <Code
          className="w-[30rem] items-center"
          code={
            `git clone ....`
          }
        />
        <div className="space-y-4">
          <p className="text-lg opacity-80 underline">Step 2</p>
          <div  className="text-base opacity-75 space-y-2">
            <p>Navigate into your project directory and rename <span className="text-cyan-500">.env.example</span> to <span className="text-cyan-500">.env</span>.</p>
            <p>Then set up your environmental variables.</p>
            <p>For help setting up your API keys and URLs, check out the helpful documentation guides from {" "}
              <a className="underline" href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs">Supabase</a>,  {" "}
              <a className="underline" href="https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe">Vercel</a>, and {" "} 
              <a className="underline" href="https://resend.com/docs/send-with-nextjs">Resend</a>.
              
            </p>
          </div>
        </div>
        <Code
          className="w-[30rem]"
          code={
            `#.env

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
DIRECT_URL=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Resend
NEXT_PUBLIC_RESEND_API_KEY=`
          }
        />
        <div className="space-y-4">
          <p className="text-lg opacity-80 underline">Step 3</p>
          <div className="text-base opacity-75 space-y-2">
            <p>Install your packages and you are done!</p>
            <p>Navigate to your local environment (usually <a className="underline" href="localhost:3000">localhost:3000</a>) to check out your project.</p>
          </div>
        </div>
        <Code
          className="w-[30rem]"
          code={
            `npm install 
npm run dev`
          }
        />
      </div>
    </div>
  );
}