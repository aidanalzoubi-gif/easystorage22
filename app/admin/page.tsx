'use client';

import Link from 'next/link';
import { Package, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatsCards } from '@/components/admin/stats-cards';
import { BookingsTable } from '@/components/admin/bookings-table';
import { useStore } from '@/lib/store';

export default function AdminPage() {
  const { bookings, isLoading } = useStore();

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Package className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                Easy Storage Admin
              </h1>
              <p className="text-xs text-muted-foreground">
                Manage bookings and operations
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Link href="/">
              <Button variant="ghost" size="sm">
                View Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Overview</h2>
          <StatsCards bookings={bookings} />
        </section>

        {/* Bookings Table */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            All Bookings
          </h2>
          <BookingsTable bookings={bookings} />
        </section>
      </main>
    </div>
  );
}
