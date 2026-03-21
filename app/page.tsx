import Link from 'next/link';
import { ArrowRight, Package, Truck, Calendar, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { PRICE_PER_BOX, INSURANCE_PRICE, formatPrice } from '@/lib/pricing';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground"></span>
              </span>
              Now booking for Summer 2026
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Summer storage made simple for Buffalo students
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/80 sm:text-xl">
              Don&apos;t stress about your stuff. We pick up your belongings, store them safely all summer, and deliver them back when you return.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
                >
                  Book Your Storage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                <span>Free box delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                <span>Starting at {formatPrice(PRICE_PER_BOX)}/box</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                <span>Built for Buffalo students</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How it works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Three simple steps to stress-free summer storage
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Package className="h-8 w-8" />
                </div>
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-border md:block" style={{ left: '75%' }} />
                <h3 className="mt-6 text-xl font-semibold text-foreground">1. Book & Pack</h3>
                <p className="mt-2 text-muted-foreground">
                  Book online in 5 minutes. We&apos;ll deliver free boxes to your dorm or apartment for you to pack.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Truck className="h-8 w-8" />
                </div>
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-border md:block" style={{ left: '75%' }} />
                <h3 className="mt-6 text-xl font-semibold text-foreground">2. We Pick Up</h3>
                <p className="mt-2 text-muted-foreground">
                  Schedule a pickup time that works for you. Our team comes to your door and takes everything.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">3. We Deliver</h3>
                <p className="mt-2 text-muted-foreground">
                  When you&apos;re back in the fall, we deliver your items right to your new place. Easy!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Pay only for what you store. No hidden fees.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
              <Card className="relative overflow-hidden border-2 border-primary">
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Per-Box Storage</CardTitle>
                  <CardDescription>
                    Perfect for any amount of stuff
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">
                      {formatPrice(PRICE_PER_BOX)}
                    </span>
                    <span className="text-muted-foreground">/box</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    for the entire summer
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Free cardboard boxes delivered</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Delivery date range: May 2 to May 16</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Door-to-door pickup & delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Only $10 deposit to book</span>
                    </li>
                  </ul>
                  <Link href="/book" className="mt-8 block">
                    <Button className="w-full" size="lg">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <CardTitle className="text-2xl">Storage + Insurance</CardTitle>
                  </div>
                  <CardDescription>
                    Extra peace of mind for your valuables
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">
                      +{formatPrice(INSURANCE_PRICE)}
                    </span>
                    <span className="text-muted-foreground">/booking</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    one-time fee
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Up to $1,000 coverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Damage & loss protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Quick claims process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">Photo documentation included</span>
                    </li>
                  </ul>
                  <div className="mt-8 rounded-lg bg-muted p-4 text-center text-sm text-muted-foreground">
                    Add insurance during checkout
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Furniture equivalents */}
            <div className="mx-auto mt-12 max-w-2xl">
              <p className="text-center text-sm font-medium text-foreground">
                Large items count as multiple boxes:
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>Suitcase = 1 box</span>
                <span className="text-border">|</span>
                <span>Mini Fridge = 2 boxes</span>
                <span className="text-border">|</span>
                <span>Chair = 2 boxes</span>
                <span className="text-border">|</span>
                <span>Mattress = 4 boxes</span>
                <span className="text-border">|</span>
                <span>Desk = 5 boxes</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Got questions? We&apos;ve got answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="mt-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Which dorms and areas do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We serve all UB residence halls including Ellicott Complex, Governors Complex, Greiner Hall, Flint Village, South Lake Village, and Hadley Village. We also pick up from off-campus apartments within 5 miles of campus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How does payment work?
                </AccordionTrigger>
                <AccordionContent>
                  We require a $10 deposit to secure your booking. The remaining balance is due on pickup day. We accept Cash, Zelle, Venmo, and credit/debit cards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What if I need my items before fall semester?
                </AccordionTrigger>
                <AccordionContent>
                  No problem! Contact us and we can arrange an early delivery for a small additional fee. We&apos;re flexible and want to work with your schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do I pack my items?
                </AccordionTrigger>
                <AccordionContent>
                  We deliver free cardboard boxes to you before pickup. Just pack your belongings, seal the boxes, and we&apos;ll take care of the rest. For fragile items, we recommend adding extra padding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is my stuff insured?
                </AccordionTrigger>
                <AccordionContent>
                  Basic liability is included, but we strongly recommend adding our optional insurance for {formatPrice(INSURANCE_PRICE)} per booking. This covers up to $1,000 in damages or loss. You&apos;ll just need to send us photos of your items before pickup.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Can I store furniture?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We accept suitcases, mini fridges, chairs, mattresses, desks, and more. Large items are counted as multiple &quot;box equivalents&quot; for pricing. Check our booking form for the full list.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to book your summer storage?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Book in just 5 minutes. Limited pickup slots available for May 2026.
            </p>
            <Link href="/book" className="mt-8 inline-block">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
