import { supabaseAdmin } from '@/lib/supabase';
// POST disabled: bookings are written only after Stripe payment confirmation.
export async function POST() {
  return Response.json(
    { error: 'Direct booking creation is disabled. Complete Stripe payment first.' },
    { status: 405 }
  );
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
