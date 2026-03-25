import { type NextRequest } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return Response.json(
      { error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to your .env.local file.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const { depositAmount, bookingId, customerEmail, customerName } = await request.json();

    if (!depositAmount || !bookingId) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const origin = request.headers.get('origin') ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Easy Storage – Deposit',
              description: `Booking #${bookingId}. Balance is due on pickup day.`,
            },
            unit_amount: Math.round(depositAmount * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail ?? undefined,
      success_url: `${origin}/confirmation?id=${bookingId}&payment=success`,
      cancel_url: `${origin}/book?payment=cancelled`,
      metadata: { bookingId, customerName: customerName ?? '' },
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
