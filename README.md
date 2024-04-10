
# SaaS Template - Next.js, Supabase, Stripe, Prisma, ShadCN
[![Next.js](https://img.shields.io/badge/Next.js-11.1.2-blue)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-1.39.0-orange)](https://supabase.io/)
[![Stripe](https://img.shields.io/badge/Stripe-8.167.0-green)](https://stripe.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3.9.1-purple)](https://www.prisma.io/)
[![ShadCN](https://img.shields.io/badge/ShadCN-1.0.0-yellow)](https://ui.shadcn.com/)


This is a template for building a Software-as-a-Service (SaaS) application using Next.js, Supabase, Stripe, Prisma, and ShadCN.

## Features

- Works across the entire Next.js stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Integration with Stripe for payment processing
- Database management with Prisma
- SahdCN integration for additional functionality


## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](https://the-solopreneur-saas-template.vercel.app/).


## Getting Started

To get started with this template, follow these steps:


1. Clone the repository:


   ```bash
   git clone git clone https://github.com/je-zhou/The-Solopreneur-Saas-Template.git
   ```

2. Install the dependencies:


   ```bash
   npm install
   ```

3. Configure your environment variables. Rename the `.env.local.example` file to `.env.local` and update the following variables:


   ```
    NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
    NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
    DATABASE_URL=[INSERT SUPABASE DATABASE URL]
    DIRECT_URL=[INSERT SUPABASE DIRECT URL]

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[INSERT STRIPE PUBLIC KEY]
    STRIPE_SECRET_KEY=[INSERT STRIPE SECRET KEY]
   ```

4. Run the development server:


   ```bash
   npm run dev
   ```

   The template should now be running on [localhost:3000](http://localhost:3000/).

## Feedback and Issues

Please file any feedback or issues on the [GitHub repository](https://github.com/your-username/your-repo/issues).