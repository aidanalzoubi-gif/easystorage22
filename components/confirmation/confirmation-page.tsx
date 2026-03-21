'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  Calendar,
  Package,
  Mail,
  Phone,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/pricing';
import { INSURANCE_EMAIL, INSURANCE_PHONE, TIME_SLOTS } from '@/lib/constants';
import type { Booking } from '@/lib/types';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ConfirmationPageContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('id');
  const { getBookingById, isLoading } = useStore();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isLoading && bookingId) {
      const found = getBookingById(bookingId);
      if (found) {
        setBooking(found);
      }
    }
  }, [bookingId, getBookingById, isLoading]);

  const copyBookingId = () => {
    if (booking) {
      navigator.clipboard.writeText(booking.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <h1 className="text-2xl font-bold text-foreground">Booking Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          We couldn&apos;t find a booking with that ID.
        </p>
        <Link href="/book" className="mt-6">
          <Button>Create a New Booking</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-10 w-10 text-accent" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground">
            Booking Confirmed!
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your summer storage is all set. Here&apos;s your booking details.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-primary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">Your Booking ID</p>
          <div className="mt-1 flex items-center justify-center gap-2">
            <p className="text-2xl font-bold text-foreground">{booking.id}</p>
            <button
              onClick={copyBookingId}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {copied ? (
                <Check className="h-5 w-5 text-accent" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Save this for your records
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Pickup Scheduled</p>
                <p className="text-muted-foreground">
                  {formatDate(booking.pickupDate)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {TIME_SLOTS.find((slot) => slot.value === booking.pickupTimeSlot)?.label}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Storage Details</p>
                <p className="text-muted-foreground">
                  {booking.boxCount} {booking.boxCount === 1 ? 'box' : 'boxes'}
                  {booking.hasInsurance && ' + Insurance'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Total: {formatPrice(booking.totalPrice)}
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deposit</span>
                <span className="font-medium text-foreground">
                  {formatPrice(booking.depositAmount)}
                </span>
              </div>
              <div className="mt-1 flex justify-between">
                <span className="text-muted-foreground">Balance due on pickup</span>
                <span className="font-medium text-foreground">
                  {formatPrice(booking.totalPrice - booking.depositAmount)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  1
                </span>
                <div>
                  <p className="font-medium text-foreground">Pay your deposit</p>
                  <p className="text-sm text-muted-foreground">
                    Send {formatPrice(booking.depositAmount)} via your chosen payment method
                  </p>
                </div>
              </li>
              {booking.cardboardBoxesRequested > 0 && (
                <li className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Receive your boxes</p>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll deliver {booking.cardboardBoxesRequested} boxes to you
                      {booking.boxDeliveryDate && ` on ${formatDate(booking.boxDeliveryDate)}`}
                    </p>
                  </div>
                </li>
              )}
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {booking.cardboardBoxesRequested > 0 ? '3' : '2'}
                </span>
                <div>
                  <p className="font-medium text-foreground">Pack your items</p>
                  <p className="text-sm text-muted-foreground">
                    Have everything boxed up and ready before pickup day
                  </p>
                </div>
              </li>
              {booking.hasInsurance && (
                <li className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground">
                    !
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Send insurance photos</p>
                    <p className="text-sm text-muted-foreground">
                      Email photos of your packed items to activate coverage
                    </p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm">
                      <a
                        href={`mailto:${INSURANCE_EMAIL}`}
                        className="flex items-center gap-1 text-primary underline underline-offset-2"
                      >
                        <Mail className="h-4 w-4" />
                        {INSURANCE_EMAIL}
                      </a>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {INSURANCE_PHONE}
                      </span>
                    </div>
                  </div>
                </li>
              )}
            </ol>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/dashboard">
            <Button className="w-full sm:w-auto">
              View My Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}