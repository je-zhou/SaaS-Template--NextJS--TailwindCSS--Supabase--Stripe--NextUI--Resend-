"use client";

import React from "react";
import Code from "../Code";

export function HowToDemo() {
  return (
    <div className="flex flex-col space-y-4 px-8 w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl opacity-90 font-semibold">Get Started Today</h1>
      <p className="md:text-lg lg:text-xl opacity-80">Start building with Stripe, Supabase, and Prisma in 3 quick steps</p>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-10 pt-4 lg:pt-12">
        <div className="space-y-4 max-w-lg">
          <p className="text-lg underline">Step 1</p>
          <p className="text-base opacity-70">Fork this repository to access the source code</p>
        </div>
        <Code
          className="w-full items-center lg:mt-10"
          code={
            `git clone ...`
          }
          copyText="git clone https://github.com/je-zhou/The-Solopreneur-Saas-Template.git"
        />
        <div className="space-y-4">
          <p className="text-lg underline pt-8 lg:pt-0">Step 2</p>
          <div className="text-base opacity-70 space-y-2 max-w-lg">
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
          className="w-full lg:mt-10"
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
          <p className="text-lg underline pt-8 lg:pt-0">Step 3</p>
          <div className="text-base opacity-70 space-y-2 max-w-lg">
            <p>Install your packages and you are done!</p>
            <p>Navigate to your local environment (usually <a className="underline" href="localhost:3000">localhost:3000</a>) to check out your project.</p>
          </div>
        </div>
        <Code
          className="w-full lg:mt-10"
          code={
            `npm install 
npm run dev`
          }
        />
      </div>
    </div>
  );
}