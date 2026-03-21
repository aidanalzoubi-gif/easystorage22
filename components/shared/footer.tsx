import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/easy-storage-logo.png"
              alt="Easy Storage"
              width={160}
              height={50}
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/#how-it-works"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/dashboard"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              My Booking
            </Link>
            <Link
              href="/careers"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Join the Team
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            Questions? Email us at{' '}
            <a
              href="mailto:info@easystoragenys.com"
              className="underline underline-offset-2 hover:text-foreground"
            >
              info@easystoragenys.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
