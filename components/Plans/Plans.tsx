import { getStripeProducts } from '@/actions/getStripeProducts';
import React from 'react'
import PlanTile from './PlanTile';
import { cn } from '@/libs/utils';

export default async function Plans() {
  const products = await getStripeProducts(3);
  let gridCols = `md:grid-cols-${products.length}`;


  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8", gridCols)}>
        {products.map(p => <PlanTile key={p.id} stripeProduct={p}/>)}
      </div>
    </div>

  )
}
