import { supabaseAdmin } from '@/lib/supabase';
import type { Booking } from '@/lib/types';

// POST /api/bookings — save a new booking
export async function POST(request: Request) {
  try {
    const booking: Booking = await request.json();

    const { error } = await supabaseAdmin
      .from('bookings')
      .insert([{ id: booking.id, data: booking, created_at: booking.createdAt }]);

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
      .select('data')
      .order('created_at', { ascending: false });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    const bookings = (data ?? []).map((row: { data: Booking }) => row.data);
    return Response.json({ bookings });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
