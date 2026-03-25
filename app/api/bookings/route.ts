import { supabaseAdmin } from '@/lib/supabase';
import type { Booking } from '@/lib/types';

// Helper to flatten booking to table columns
function flattenBooking(booking: Booking) {
  const pickupLocation =
    booking.housingType === 'dorm'
      ? booking.dormName
      : booking.housingType === 'on-campus-apartment'
      ? booking.apartmentName
      : booking.address;

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
    total_price: booking.totalPrice,
  };
}

// POST /api/bookings — save a new booking
export async function POST(request: Request) {
  try {
    const booking: Booking = await request.json();
    const flattened = flattenBooking(booking);

    const { error } = await supabaseAdmin
      .from('bookings')
      .insert([flattened]);

    if (error) {
      console.error('Supabase insert error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}

// GET /api/bookings — fetch all bookings (admin)
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ bookings: data ?? [] });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
