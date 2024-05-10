import Stripe from "stripe";
import { getStripePrice } from "./getStripePrice";
import { unstable_cache } from "next/cache";

export const getStripeProducts = unstable_cache(
  async (limit: number) => {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
      
    const products = await stripe.products.list({
      limit: limit,
    });
  
    const newProducts = await Promise.all(products.data.map(async (p: Stripe.Product) => {
      const price = await getStripePrice(p.default_price);
  
      return {...p, default_price: price }
    }))
  
    return newProducts;
  },
  ["stripe"],
  {
    tags: ["stripe"],
    revalidate: 300
  }
)