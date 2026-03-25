import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';
import type { Booking } from '@/lib/types';

function flattenBooking(booking: Booking) {
  const pickupLocation =
    booking.housingType === 'dorm'
      ? booking.dormName
      : booking.housingType === 'on-campus-apartment'
      ? booking.apartmentName
      : booking.address;

  const itemsParts: string[] = [];
  if (booking.boxCount > 0) {
    itemsParts.push(`${booking.boxCount} box${booking.boxCount !== 1 ? 'es' : ''}`);
  }
  if (booking.furnitureItems && booking.furnitureItems.length > 0) {
    const furnitureDesc = booking.furnitureItems
      .map((item) => `${item.quantity}x ${item.type}`)
      .join(', ');
    itemsParts.push(furnitureDesc);
  }
  if (booking.cardboardBoxesRequested > 0) {
    itemsParts.push(
      `${booking.cardboardBoxesRequested} free box${booking.cardboardBoxesRequested !== 1 ? 'es' : ''}`
    );
  }
  if (booking.hasInsurance) {
    itemsParts.push('Insurance: YES');
  }

  const itemsDescription = itemsParts.length > 0 ? itemsParts.join(' | ') : 'N/A';

  return {
    id: booking.id,
    name: booking.studentName,
    email: booking.email,
    phone: booking.phone,
    pickup_location: pickupLocation,
    pickup_date: booking.pickupDate,
    free_boxes: booking.cardboardBoxesRequested,
    free_box_delivery_date: booking.boxDeliveryDate || null,
    fall_delivery: booking.fallDeliveryDate || null,
    items: booking.boxCount,
    items_description: itemsDescription,
    total_price: booking.totalPrice,
  };
}

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return Response.json({ error: 'Stripe is not configured.' }, { status: 500 });
  }

  try {
    const { booking, sessionId } = await request.json();

    if (!booking || !sessionId) {
      return Response.json({ error: 'Missing booking or sessionId.' }, { status: 400 });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const isPaid = session.payment_status === 'paid' || session.status === 'complete';
    const sessionBookingId = session.client_reference_id ?? session.metadata?.bookingId;

    if (!isPaid) {
      return Response.json({ error: 'Payment not completed.' }, { status: 400 });
    }

    if (!sessionBookingId || sessionBookingId !== booking.id) {
      return Response.json({ error: 'Booking ID mismatch.' }, { status: 400 });
    }

    const flattened = flattenBooking(booking as Booking);

    const { error } = await supabaseAdmin
      .from('bookings')
      .upsert([flattened], { onConflict: 'id' });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
