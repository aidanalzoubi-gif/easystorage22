import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BookingForm } from '@/components/booking/booking-form';

export const metadata = {
  title: 'Book Your Storage | Easy Storage',
  description: 'Book summer storage for your University at Buffalo belongings in just 5 minutes.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <p className="text-sm font-medium text-foreground">Easy Storage</p>
        </div>
      </header>

      <main className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Book Your Storage
          </h1>
          <p className="mt-2 text-muted-foreground">
            Complete your booking in just a few minutes
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <BookingForm />
        </div>
      </main>
    </div>
  );
}
