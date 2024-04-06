import Stripe from "stripe";

export async function getStripePrice(priceId: string | undefined| Stripe.Price | null){
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

  if (!priceId) return; 
  if (typeof priceId === "object") return priceId;

  try {
    const price = await stripe.prices.retrieve(priceId);

    return price;
  } catch (error) {
    return undefined
  }
}