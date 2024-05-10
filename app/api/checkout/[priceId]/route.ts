import { NextResponse } from "next/server"

export async function POST(
  req: Request,
  {params}: {params: {priceId: string}}
) {
  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
      
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: params.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.url.replace(`/api/checkout/${params.priceId}`, "/protected")}`,
      cancel_url: `${req.url.replace(`/api/checkout/${params.priceId}`, "/")}`,
    });

    return NextResponse.json({url: session.url}, {
      status: 200,
      
    })

  } catch (error) {
    return NextResponse.json({error: error}, {
      status: 500,
    })
  }

  // const order = await prismadb.order.create({
  //   data: {
  //     storeId: params.storeId,
  //     orderItems: {
  //       create: cartItems.map((item) => ({
  //         product: {
  //           connect: {
  //             id: item.id
  //           }
  //         },
  //         quantity: item.quantity,
  //         selectedVariants: item.selectedVariants as Prisma.JsonObject
  //       }))
  //     },
  //     statuses: {
  //       createMany: {
  //         data: Object.keys(Status).map((status, index) => {
  //           return {
  //             status: status as Status,
  //             isCompleted: status === "ORDER_CREATED",
  //             displaySeq: index,
  //             completedOn: status === "ORDER_CREATED" ? new Date().toISOString() : null,
  //           }
  //         })
  //       }
  //     }
  //   }
  // })
}

