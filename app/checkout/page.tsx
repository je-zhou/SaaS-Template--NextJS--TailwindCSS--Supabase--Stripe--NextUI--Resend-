import React from 'react'
import StripeCheckoutEmbedded from './StripeCheckoutEmbedded';

export default function CheckoutPage() {

  return (
    <div className='bg-background'>
      <div className=' w-[100vw] h-[100vh]'>
        <StripeCheckoutEmbedded/>
      </div>

    </div>
  )
}
