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
    <div className="divide-y bg-[#1d1c20] divide-gray-200 rounded-2xl border border-gray-200 shadow-sm max-w-md">
      <div className="p-6 sm:px-8 h-80 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-medium ">
            {stripeProduct.name}
            <span className="sr-only">Plan</span>
          </h2>
          <p className="mt-2 overflow-clip">{stripeProduct.description}</p>
        </div>
        <div>
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold sm:text-4xl">${(unitAmount/100).toFixed(2)} </strong>
            <span className="text-sm font-medium ">{recurring ? "/"+priceObj?.recurring?.interval : "1 time fee" }</span>
          </p>
          <Button
            className="mt-4 w-full rounded border border-indigo-600 bg-indigo-600 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            size={"lg"}
          >
            Purchase
          </Button>
        </div>

      </div>
      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium sm:text-xl">What's included:</p>
        <ul className="mt-2 space-y-2 sm:mt-4">
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
