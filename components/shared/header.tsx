'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/easy-storage-logo.png"
            alt="Easy Storage"
            width={180}
            height={56}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/#how-it-works"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/careers"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Join the Team
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">
              My Booking
            </Button>
          </Link>
          <Link href="/book">
            <Button>Book Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border lg:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <Link
              href="/#how-it-works"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/careers"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the Team
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  My Booking
                </Button>
              </Link>
              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
