import { getStripePrice } from '@/actions/getStripePrice'
import React from 'react'
import Stripe from 'stripe'
import { Button } from '../ui/button';
import { CheckCircledIcon } from '@radix-ui/react-icons';

interface PlanTileProps {
  stripeProduct: Stripe.Product
}

export default async function PlanTile({stripeProduct}: PlanTileProps) {
  const priceObj = await getStripePrice(stripeProduct.default_price);
  const currency = priceObj ? priceObj.currency : "USD";
  const unitAmount = priceObj ? priceObj.unit_amount ?? 0 : 0;
  const recurring = priceObj ? priceObj.type == "recurring" : false;

  async function checkOut() {

  }

  return (
    <div className="divide-y bg-card rounded-2xl border border-foreground/20 shadow-sm max-w-sm">
      <div className="p-6 sm:px-8 h-96 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-medium ">
            {stripeProduct.name}
            <span className="sr-only">Plan</span>
          </h2>
          <p className="mt-2 overflow-clip opacity-60">{stripeProduct.description}</p>
        </div>
        <div>
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold sm:text-4xl">${(unitAmount/100).toFixed(2)} </strong>
            <span className="text-sm font-normal opacity-50">{recurring ? "/"+priceObj?.recurring?.interval : "one time fee" }</span>
          </p>
          <Button
            className="mt-4 w-full rounded border border-primary bg-primary text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary"
            size={"lg"}
          >
            Donate
          </Button>
        </div>
      </div>
      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium sm:text-xl opacity-80">What's included:</p>
        <ul className="mt-2 space-y-2 sm:mt-4 opacity-60">
          {stripeProduct.features.map(feature => {
            return (
              <div key={feature.name} className='flex flex-row items-center space-x-2'>
                <CheckCircledIcon/>
                <p>{feature.name}</p>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
