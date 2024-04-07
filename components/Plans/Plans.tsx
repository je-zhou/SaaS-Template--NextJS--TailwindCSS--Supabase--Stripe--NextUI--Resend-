import { getStripeProducts } from '@/actions/getStripeProducts';
import React from 'react'
import PlanTile from './PlanTile';
import { cn } from '@/libs/utils';
import { getStripePrice } from '@/actions/getStripePrice';

export default async function Plans() {
  const products = await getStripeProducts(3);

  const newProducts = await Promise.all(products.map(async p => {
    const price = await getStripePrice(p.default_price);

    return {...p, default_price: price }
  }))

  let gridCols = `md:grid-cols-${products.length}`;

  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8", gridCols)}>
        {newProducts.map(p => <PlanTile key={p.id} stripeProduct={p} stripePrice={p.default_price}/>)}
      </div>
    </div>

  )
}
