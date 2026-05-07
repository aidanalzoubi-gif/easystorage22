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
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Easy Storage Solutions LLC</h1>
        <p className="mt-2 text-lg font-semibold text-foreground">Terms of Service &amp; Protection Plan</p>
        <p className="mt-1 text-sm text-muted-foreground">Effective Date: 03/23/2026</p>
        <p className="text-sm text-muted-foreground">Last Updated: 05/06/2026</p>

        <article className="mt-8 space-y-6 text-sm leading-7 text-foreground sm:text-base">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Services Provided</h2>
            <p>Easy Storage Solutions LLC ("we," "our," or "us") provides pickup, transportation, storage, and return delivery of personal belongings for college students within New York State.</p>
            <p>Customers may receive complimentary cardboard boxes based on their selected storage needs. Box delivery will occur prior to the scheduled pickup date.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1A. Custody, Transportation &amp; Temporary Vehicle Storage</h2>
            <p>Upon pickup, Easy Storage Solutions LLC assumes temporary custody of Customer property solely for the purpose of pickup, transportation, temporary holding, storage, and return delivery.</p>
            <p>Customer acknowledges and agrees that items may be temporarily stored within transport vehicles, including rented vehicles, for operational and logistical efficiency before transfer to a storage facility. Customer further acknowledges that multiple customer orders may be consolidated within the same transport vehicle and that routing, loading order, storage timing, and transfer scheduling are determined solely by Easy Storage Solutions LLC.</p>
            <p>Easy Storage Solutions LLC will exercise reasonable care in handling, transporting, and storing Customer property; however, Easy Storage Solutions LLC is not an insurer of Customer property and does not guarantee against loss, theft, damage, deterioration, delay, or other casualty.</p>
            <p>To the fullest extent permitted by law, Easy Storage Solutions LLC shall not be liable for loss or damage caused by events beyond its reasonable control, including but not limited to theft, vandalism, fire, flood, water damage, weather, temperature exposure, vehicle accidents, mechanical failure, acts of God, or third-party actions occurring during pickup, transportation, temporary vehicle storage, storage facility placement, or delivery.</p>
            <p>Except where prohibited by law, Easy Storage Solutions LLC shall only be liable for direct loss or damage proven to result from its gross negligence or willful misconduct.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. Customer Responsibilities</h2>
            <p>Customers agree to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Provide accurate contact, billing, and service information</li>
              <li>Be present or available during scheduled pickup and delivery windows</li>
              <li>Properly pack items according to our standards (see Section 6)</li>
              <li>Disclose any item valued over $250 (see Section 5)</li>
              <li>Submit required photos if selecting the Protection Plan</li>
              <li>Not store prohibited or hazardous items</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. Reservations, Deposits &amp; Payments</h2>
            <h3 className="font-semibold text-foreground">Reservations</h3>
            <p>Customers may reserve a storage spot without immediate payment. Reservations are held for 72 hours from the time of booking.</p>
            <p>To secure the reservation, a $10 deposit must be submitted within 72 hours. If the deposit is not received within this timeframe, the reservation will be automatically canceled.</p>
            <h3 className="font-semibold text-foreground">Deposits</h3>
            <p>The $10 deposit is applied toward the total service cost.</p>
            <p>Deposits are non-refundable if:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>the customer cancels</li>
              <li>the customer misses their scheduled pickup</li>
              <li>the reservation expires due to non-payment</li>
            </ul>
            <p>We may issue refunds at our discretion in limited circumstances.</p>
            <h3 className="font-semibold text-foreground">Final Payment</h3>
            <p>Final pricing is based on the actual number and type of items collected at pickup, not initial estimates or submitted forms.</p>
            <p>Customers may be asked to confirm their packed items prior to pickup. This confirmation is an estimate and may be adjusted at the time of service.</p>
            <p>By providing a payment method, customers authorize Easy Storage Solutions LLC to charge the final balance automatically after pickup using the provided payment method without additional authorization at the time of charge, including any adjustments due to item count or service changes.</p>
            <p>Customers agree that failure to maintain a valid payment method may result in service delays, cancellation, or additional fees.</p>
            <p>We reserve the right to deny service if a valid payment method is not provided.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. Pricing Structure</h2>
            <p>Pricing is based on item type and quantity, including but not limited to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Standard storage boxes</li>
              <li>Mini fridges</li>
              <li>TVs</li>
              <li>Oversized items</li>
            </ul>
            <p>All pricing includes pickup, storage, and return delivery unless otherwise stated.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">5. High-Value Items</h2>
            <p>Customers must disclose any item valued over $250 prior to pickup.</p>
            <p>We reserve the right to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>deny storage of high-value items</li>
              <li>require additional approval for certain items</li>
            </ul>
            <p>Items not disclosed:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>may be refused at pickup</li>
              <li>will not be covered under any liability or Protection Plan</li>
            </ul>
            <p>Failure to disclose high-value items releases us from liability.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">6. Packing Requirements &amp; Fragile Items</h2>
            <p>All items must be:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Properly boxed, sealed, and secured</li>
              <li>Cushioned if fragile (bubble wrap, padding, etc.)</li>
            </ul>
            <p>Electronics and TVs must be:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>packed in original boxes OR</li>
              <li>adequately protected</li>
            </ul>
            <p>Improperly packed items are not eligible for Protection Plan coverage and are stored at the customer’s risk.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">7. Oversized Items &amp; Weight Limits</h2>
            <p>Standard boxes must not exceed 50 lbs.</p>
            <p>Items larger than standard boxes may incur additional fees.</p>
            <p>Oversized items may be subject to approval.</p>
            <p>Final pricing is determined at pickup based on actual items collected.</p>
          </section>

          <section id="protection-plan" className="space-y-2 scroll-mt-24">
            <h2 className="text-lg font-semibold">8. Protection Plan (Optional)</h2>
            <p>The optional Protection Plan is available for a one-time fee and provides limited contractual reimbursement coverage of up to $1,000 per customer for qualifying loss or damage occurring while items are in the custody of Easy Storage Solutions LLC.</p>
            <p>The Protection Plan is not insurance and does not create an insurer–insured relationship.</p>

            <h3 className="font-semibold text-foreground">Requirements to Activate Coverage</h3>
            <p>To qualify for Protection Plan coverage:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Clear pre-pickup photos of all covered items must be submitted before pickup</li>
              <li>High-value items exceeding $250 must be disclosed in advance</li>
              <li>Items must be properly packed in accordance with Section 6</li>
              <li>Coverage must be approved by Easy Storage Solutions LLC prior to pickup</li>
            </ul>
            <p>Failure to satisfy any requirement may result in denial of coverage and the Protection Plan fee may not be charged.</p>

            <h3 className="font-semibold text-foreground">Coverage Scope</h3>
            <p>Coverage applies only while items are in the custody and control of Easy Storage Solutions LLC, including:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>pickup</li>
              <li>transportation</li>
              <li>temporary storage within transport vehicles</li>
              <li>storage at designated facilities</li>
              <li>return delivery</li>
            </ul>

            <h3 className="font-semibold text-foreground">Exclusions</h3>
            <p>The Protection Plan does not cover:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>pre-existing damage</li>
              <li>cosmetic wear</li>
              <li>improperly packed items</li>
              <li>prohibited items</li>
              <li>undisclosed high-value items</li>
              <li>damage resulting from customer packing methods</li>
              <li>mold, mildew, odor, temperature-related effects</li>
              <li>mechanical or electronic malfunction not caused by physical damage</li>
              <li>losses caused by events outside our reasonable control</li>
              <li>items released to third-party carriers under Section 17</li>
            </ul>

            <h3 className="font-semibold text-foreground">Claims</h3>
            <p>Claims must:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>be submitted within 48 hours of final delivery</li>
              <li>include pre-pickup and post-delivery photos</li>
              <li>include a written description of the alleged damage or loss</li>
            </ul>
            <p>Easy Storage Solutions LLC reserves the sole right to evaluate, approve, deny, or adjust claims based on available evidence and the terms of this agreement.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">9. Claims, Disputes &amp; Resolution</h2>
            <h3 className="font-semibold text-foreground">Claims Process</h3>
            <p>Claims must include:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Pre-pickup photos</li>
              <li>Post-delivery photos</li>
              <li>Description of the issue</li>
            </ul>
            <p>Claims must be submitted within 48 hours of delivery.</p>

            <h3 className="font-semibold text-foreground">Determination</h3>
            <p>Claims are reviewed and resolved at our sole discretion based on submitted evidence.</p>

            <h3 className="font-semibold text-foreground">Disputes</h3>
            <p>Customers agree to contact us before initiating disputes or chargebacks.</p>
            <p>We reserve the right to dispute chargebacks, provide documentation, and recover reversed payments.</p>

            <h3 className="font-semibold text-foreground">Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, the total cumulative liability of Easy Storage Solutions LLC arising out of or relating to any claim, loss, damage, or dispute connected to the services provided shall not exceed the total amount actually paid by the customer to Easy Storage Solutions LLC for the applicable service period.</p>
            <p>Under no circumstances shall Easy Storage Solutions LLC be liable for any indirect, incidental, special, consequential, punitive, or emotional distress damages, including but not limited to loss of use, loss of data, loss of academic materials, loss of business opportunity, or sentimental value, even if advised of the possibility of such damages.</p>
            <p>Any reimbursement or compensation provided under the optional Protection Plan shall count toward and not exceed the total liability limitation stated in this agreement.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">10. Access &amp; Early Retrieval</h2>
            <p>Customers may not access stored items during the storage period.</p>
            <p>Early retrieval may be requested, is not guaranteed, and may require additional fees.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">11. Storage Duration &amp; Abandonment</h2>
            <p>Items are considered abandoned 30 days after the scheduled return date.</p>
            <p>We reserve the right to dispose of or donate unclaimed items.</p>
            <p>Customers are responsible for maintaining accurate contact information to receive return scheduling communications.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">12. Cancellations, Rescheduling &amp; Refunds</h2>
            <p>Deposits are non-refundable except at our discretion.</p>
            <p>Pickup rescheduling is not guaranteed.</p>
            <p>Once items are collected, no refunds are provided.</p>
            <p>If we deny service due to prohibited or unacceptable items, we may issue a refund at our discretion.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">13. Force Majeure &amp; Delays</h2>
            <p>We are not liable for delays caused by weather, traffic, operational constraints, or other events beyond our control.</p>
            <p>All time windows are estimates, not guarantees.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">14. Communication</h2>
            <p>Customers agree to receive service-related communication via email, SMS, and phone.</p>
            <p>We are not responsible for missed communications due to incorrect contact information.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">15. Non-Payment</h2>
            <p>Customers authorize us to charge their provided payment method for all services rendered.</p>
            <p>Failure to pay may result in denial of service, additional fees, collections, or legal action.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">16. Prohibited Items</h2>
            <p>Customers may not store:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Illegal items</li>
              <li>Hazardous materials</li>
              <li>Perishable goods</li>
              <li>Undisclosed high-value items</li>
            </ul>
            <p>We may refuse, remove, or dispose of prohibited items at our discretion.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">17. Exceptional Circumstances &amp; Third-Party Shipping</h2>
            <p>Easy Storage Solutions LLC operates on a door-to-door pickup and return delivery model tied to the academic calendar. Return delivery is expected to occur at the originally scheduled location and timeframe.</p>
            <p>In rare and exceptional circumstances, such as a customer no longer returning to campus, a customer may contact us to request alternate delivery arrangements. This is not a standard service offering and should not be expected or relied upon.</p>

            <h3 className="font-semibold text-foreground">Approval Requirement</h3>
            <p>All alternate delivery requests:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>must be initiated by the customer</li>
              <li>are handled case-by-case</li>
              <li>are subject to our sole approval</li>
            </ul>

            <h3 className="font-semibold text-foreground">Shipping Terms (If Approved)</h3>
            <p>If we approve a request for third-party shipping:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Items may be shipped via carriers such as USPS, FedEx, UPS, or similar</li>
              <li>We do not guarantee packaging methods or protection standards for third-party shipments</li>
              <li>Customers are responsible for all shipping, handling, and packaging costs</li>
              <li>Full payment must be made before items are released</li>
            </ul>

            <h3 className="font-semibold text-foreground">Transfer of Responsibility</h3>
            <p>Once items are transferred to a third-party carrier, Easy Storage Solutions LLC is no longer responsible for the items. The Protection Plan and all coverage become void immediately. Any loss, damage, or delay is solely the responsibility of the shipping carrier.</p>

            <h3 className="font-semibold text-foreground">No Guarantee of Service</h3>
            <p>We do not guarantee the availability of this option, are not obligated to provide packing or shipping services, and may impose additional conditions or deny requests entirely.</p>

            <h3 className="font-semibold text-foreground">Failure to Arrange Delivery</h3>
            <p>If a customer does not return for scheduled delivery, does not request alternate arrangements, or fails to pay required shipping costs, then the items will be handled in accordance with our Storage Duration &amp; Abandonment policy.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">18. Affiliation Disclaimer</h2>
            <p>Easy Storage Solutions LLC is an independent business and is not affiliated with or endorsed by the University at Buffalo or any other institution.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">19. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of New York.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">20. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">21. Contact Information</h2>
            <p>For questions, contact: info@easystoragenys.com</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
