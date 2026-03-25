'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { BookingCard } from '@/components/dashboard/booking-card';
import { useStore } from '@/lib/store';
import type { Booking } from '@/lib/types';

export default function DashboardPage() {
  const { getBookingById, isLoading } = useStore();
  const [bookingId, setBookingId] = useState('');
  const [booking, setBooking] = useState<Booking | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingId.trim()) {
      const found = getBookingById(bookingId.trim());
      setBooking(found ?? null);
      setHasSearched(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              My Bookings
            </h1>
            <p className="mt-2 text-muted-foreground">
              Enter your Booking ID to view your storage booking
            </p>
          </div>

          {/* Booking ID Lookup Form */}
          <form onSubmit={handleSearch} className="mx-auto mt-8 max-w-md">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="bookingId" className="sr-only">
                  Booking ID
                </Label>
                <Input
                  id="bookingId"
                  type="text"
                  placeholder="Enter your Booking ID"
                  value={bookingId}
                  onChange={(e) => setBookingId(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button type="submit" size="lg" disabled={isLoading || !bookingId.trim()}>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </form>

          {/* Results */}
          {hasSearched && (
            <div className="mt-12">
              {booking ? (
                <BookingCard booking={booking} />
              ) : (
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <Package className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-foreground">
                    No booking found
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    We couldn&apos;t find a booking with that ID.
                  </p>
                  <Link href="/book" className="mt-6 inline-block">
                    <Button>
                      Create a Booking
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Initial State */}
          {!hasSearched && (
            <div className="mt-16 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-foreground">
                View your bookings
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-muted-foreground">
                Enter your Booking ID to see your storage order details.
              </p>
              <div className="mt-8">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t have a booking yet?
                </p>
                <Link href="/book" className="mt-2 inline-block">
                  <Button variant="outline">
                    Book Storage Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
