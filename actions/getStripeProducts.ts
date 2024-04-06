import Stripe from "stripe";

export async function getStripeProducts(limit: number): Promise<Stripe.Product[]>{
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
      
  const products = await stripe.products.list({
    limit: limit,
  });

  return products.data;
}