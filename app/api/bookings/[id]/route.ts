import { supabaseAdmin } from '@/lib/supabase';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('data')
      .eq('id', id)
      .single();

    if (error || !data) {
      return Response.json({ error: 'Booking not found' }, { status: 404 });
    }

    return Response.json({ booking: data.data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
