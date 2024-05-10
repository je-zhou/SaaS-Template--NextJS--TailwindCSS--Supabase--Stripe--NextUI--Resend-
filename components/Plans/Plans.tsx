import { getStripeProducts } from '@/actions/stripe/getStripeProducts';
import React from 'react'
import PlanTile from './PlanTile';
import { cn } from '@/libs/utils';
import { getStripePrice } from '@/actions/stripe/getStripePrice';

export default async function Plans() {
  const products = await getStripeProducts(3);

  const newProducts = await Promise.all(products.map(async p => {
    const price = await getStripePrice(p.default_price);

    return {...p, default_price: price }
  }))

  let gridCols = `md:grid-cols-${products.length}`;

  return (
    <div className="max-w-screen-xl px-8 py-8 sm:py-12 lg:px-8 lg:py-16 flex flex-col items-center space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl opacity-90 font-semibold">Donate</h1>
      <p className="md:text-lg lg:text-xl opacity-80 max-w-4xl text-center leading-relaxed">
        Has this template helped you out and you want to show your thanks? 
        A (completely optional) donation would be much appreciated! Coding is hard work 😅.
      </p>
      <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 pt-4 lg:pt-12 px-4", gridCols)}>
        {newProducts.map(p => <PlanTile key={p.id} stripeProduct={p} stripePrice={p.default_price}/>)}
      </div>
    </div>

  )
}
