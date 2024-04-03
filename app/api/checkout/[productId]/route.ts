import { NextResponse } from "next/server"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
  "Access-Control-Max-Age": "86400",
}

export async function OPTIONS(){
  return NextResponse.json({}, {headers: corsHeaders})
}

export async function POST(
  req: Request,
  {params}: {params: {productId: string}}
) {
  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
      
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: params.productId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url:
        `${req.url}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({clientSecret: session.client_secret}, {
      headers: corsHeaders,
      status: 200,
      
    })

  } catch (error) {
    return NextResponse.json({error: error}, {
      headers: corsHeaders,
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


export async function GET(
  req: Request,
  {params}: {params: {productId: string}}
) {
  const {
    session_id
  } : {
    session_id: string
  } = await req.json();

  try {

    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
      
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details.email
    }, {
      headers: corsHeaders,
      status: 200,
    })

  } catch (error) {
    return NextResponse.json({error: error}, {
      headers: corsHeaders,
      status: 500,
    })
  }
}

