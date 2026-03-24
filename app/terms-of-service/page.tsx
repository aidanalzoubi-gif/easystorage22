import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Terms of Service | Easy Storage',
  description: 'Review the Easy Storage terms and protection plan requirements.',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-lg font-semibold text-foreground">
          Easy Storage Solutions LLC
        </p>
        <p className="mt-1 text-base font-medium text-foreground">Terms of Service &amp; Protection Plan</p>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: 03/23/2026</p>

        <article className="mt-8 space-y-6 text-sm leading-7 text-foreground sm:text-base">
          <p>
            These Terms of Service govern the use of services provided by Easy Storage Solutions
            LLC ("we," "our," or "us"). By using our services, you agree to comply with and be
            bound by these Terms, including all policies related to pickups, storage, deliveries,
            and the optional Protection Plan.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Services Provided</h2>
            <p>
              We provide pickup, transportation, storage, and return delivery of personal
              belongings for college students within New York State.
            </p>
            <p>
              Customers will receive free cardboard boxes, equivalent to the number of standard
              boxes selected.
            </p>
            <p>
              Customers choose a drop-off date for these boxes, which will be delivered prior to
              packing.
            </p>
            <p>Boxes are included in the service at no additional charge.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. Customer Responsibilities</h2>
            <p>Customers agree to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Provide accurate contact, billing, and service information</li>
              <li>Be present or available during scheduled pickup and delivery windows</li>
              <li>Properly pack items according to our standards (see Section 5)</li>
              <li>Disclose any item valued over $250 (see Section 4)</li>
              <li>Not store prohibited or hazardous items</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. Deposits &amp; Payments</h2>
            <p>
              Customers pay a $10 deposit at signup to reserve their spot. This deposit is applied
              to the total balance.
            </p>
            <p>
              On pickup day, we verify items and provide a final total minus the deposit. Full
              payment is collected at the time of service.
            </p>
            <p>
              Deposits are non-refundable if the customer cancels or misses their scheduled pickup.
            </p>
            <p>We reserve the right to deny service if full payment is not collected.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. High-Value Items</h2>
            <p>Customers must disclose any item valued over $250.</p>
            <p>
              Items not disclosed may be denied service or will not be covered under standard
              coverage.
            </p>
            <p>Failure to disclose high-value items releases us from liability.</p>
            <p>Customers are not required to declare all items-only those exceeding $250.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">5. Packing Requirements &amp; Fragile Items</h2>
            <p>
              All items must be boxed, sealed, and cushioned for fragile items (bubble wrap,
              padding, etc.).
            </p>
            <p>
              Electronics and TVs must be packed in original boxes or with adequate padding.
            </p>
            <p>
              Items not meeting these standards are not covered under the Protection Plan, and we
              are not liable for damage.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">6. Oversized Items &amp; Weight Limits</h2>
            <p>Standard boxes should not exceed 50 lbs.</p>
            <p>
              Items larger than standard boxes (except TVs and mini fridges) are priced at $79.99
              per item.
            </p>
            <p>
              Oversized items may require additional handling; fees will be disclosed before
              pickup.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">7. Protection Plan (Optional)</h2>
            <p>Optional Protection Plan: $49.99 for coverage up to $1,000.</p>
            <p>Photos of items must be submitted before pickup to activate coverage.</p>
            <p>Coverage applies only to damage or loss while items are in our custody.</p>
            <p>
              Exclusions: pre-existing damage, improperly packed items, prohibited items.
            </p>
            <p>Claims must be submitted within 48 hours of delivery.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">8. Claims, Disputes &amp; Resolution</h2>
            <h3 className="font-semibold text-foreground">Claims Process</h3>
            <p>Claims must include:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Before photos (submitted prior to pickup)</li>
              <li>After photos</li>
              <li>Description of the issue</li>
            </ul>
            <p>Incomplete claims may be denied.</p>

            <h3 className="font-semibold text-foreground">Condition Acknowledgment</h3>
            <p>
              Customers acknowledge items are in the condition shown in submitted photos prior to
              pickup.
            </p>

            <h3 className="font-semibold text-foreground">Photo Requirement</h3>
            <p>Failure to submit photos before pickup waives eligibility for claims.</p>

            <h3 className="font-semibold text-foreground">Claim Determination</h3>
            <p>Claims are resolved at our sole discretion based on evidence provided.</p>

            <h3 className="font-semibold text-foreground">Dispute Resolution</h3>
            <p>Customers agree to contact us before initiating disputes or chargebacks.</p>

            <h3 className="font-semibold text-foreground">Chargebacks</h3>
            <p>We reserve the right to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Dispute chargebacks</li>
              <li>Submit Terms, photos, and service records as evidence</li>
              <li>Recover reversed payments</li>
            </ul>

            <h3 className="font-semibold text-foreground">Fraud &amp; Abuse</h3>
            <p>We may deny service or claims to customers suspected of fraud or abuse.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">9. Access &amp; Early Retrieval</h2>
            <p>Customers cannot access stored items during storage.</p>
            <p>
              Early retrieval may be requested case-by-case for a fee and can be denied at our
              discretion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">10. Storage Duration / Abandonment</h2>
            <p>
              Items are considered abandoned 30 days after the end of the summer session or the
              agreed return date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">11. Refunds, Cancellations &amp; Reschedules</h2>
            <p>Once items are collected for storage, no refunds or cancellations are allowed.</p>
            <p>
              Rescheduling pickup dates may be requested but can be denied due to scheduling
              conflicts.
            </p>
            <p>
              If we cannot accommodate a new pickup date, customers must stick with the original
              date or cancel and forfeit their deposit.
            </p>
            <p>
              Customers may choose their initial drop-off date online; we will contact them later
              to confirm actual pickup scheduling during the summer session.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">12. Force Majeure / Delays</h2>
            <p>
              We are not liable for delays caused by weather, traffic, or other unforeseen events
              beyond our control.
            </p>
            <p>Pickup and delivery times are estimates, not guaranteed.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">13. Communication</h2>
            <p>
              Customers agree to receive service-related updates via email, SMS, and occasionally
              phone calls.
            </p>
            <p>
              While we may attempt to contact via phone, we cannot guarantee all calls will be
              answered.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">14. Chargebacks &amp; Non-Payment</h2>
            <p>
              We reserve the right to dispute chargebacks and recover any unpaid balances.
            </p>
            <p>Failure to pay in full may result in denial of service.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">15. Prohibited Items</h2>
            <p>Customers may not store:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Illegal items</li>
              <li>Hazardous materials (flammables, chemicals, explosives)</li>
              <li>Perishable goods</li>
              <li>Undisclosed items of extraordinary value</li>
            </ul>
            <p>
              We may refuse, remove, or dispose of prohibited items at our discretion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">16. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New York State, and disputes will be
              resolved in local courts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">17. Changes to Terms</h2>
            <p>We may update these Terms at any time.</p>
            <p>Continued use of our services constitutes acceptance of any changes.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">18. Contact Information</h2>
            <p>
              Questions regarding these Terms or the Protection Plan can be sent to:
              info@easystoragenys.com
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
