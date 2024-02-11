import { NextRequest, NextResponse } from 'next/server';
import stripe from 'stripe'

const calculateOrderAmount = (items:any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

export async function createPaymetIntent(req: NextRequest) {
    const { amount } = req.body
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(amount),
        currency: 'inr',
        automatic_payment_methods: {
            enabled: true,
          },
    })

}
    NextResponse.json(clientSecret: paymentIntent.client_secret,)

