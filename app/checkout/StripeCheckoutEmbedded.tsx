"use client"

import React, { useCallback } from 'react'
import axios from 'axios';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeCheckoutEmbedded() {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return axios.post("/api/checkout/price_1P1Mq8A8g22PHBvF2ov4Eflf")
      .then((res) => res.data.clientSecret);
  }, []);

  return (
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={{fetchClientSecret}}
    >
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  )
}
