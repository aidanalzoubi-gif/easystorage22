import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Privacy Policy | Easy Storage',
  description: 'Read Easy Storage privacy practices and data policies.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective Date: 03/23/2026</p>

        <article className="mt-8 space-y-6 text-sm leading-7 text-foreground sm:text-base">
          <p>
            Easy Storage Solutions LLC ("we," "our," or "us") operates the website
            easystoragenys.com and provides pickup, storage, and delivery services in New York.
            This Privacy Policy explains what information we collect, how we use it, and your
            rights regarding your personal information.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Personal information: name, email address, phone number</li>
              <li>Billing information: billing address and payment details</li>
              <li>
                Service-related information: pickup and delivery locations, items stored
              </li>
              <li>
                Item documentation: photos submitted for storage and optional Protection Plan
                purposes
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Provide pickup, storage, and delivery services</li>
              <li>Process payments securely</li>
              <li>Communicate via email, SMS, or phone regarding your service</li>
              <li>Verify item condition and process Protection Plan claims</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. Payment Processing</h2>
            <p>
              Payments are processed securely through third-party providers such as Stripe. We do
              not store full payment card details on our servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. Photos and Item Documentation</h2>
            <p>
              Customers may be required to submit photos of their belongings prior to pickup or
              storage, particularly for eligibility under our optional Protection Plan. These
              photos are used to:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Document item condition</li>
              <li>Verify damage or loss claims</li>
              <li>Maintain internal records</li>
            </ul>
            <p>
              We do not use customer-submitted photos for marketing without explicit consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">5. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Payment processors (e.g., Stripe)</li>
              <li>Third-party service providers assisting with transportation and storage</li>
              <li>
                Technology providers used to operate our website and services (e.g., Vercel,
                Supabase)
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">6. Data Security</h2>
            <p>We implement reasonable safeguards to protect your information, including:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Secure payment processing</li>
              <li>Restricted access to sensitive data</li>
              <li>Industry-standard security practices</li>
            </ul>
            <p>
              Our website is hosted using third-party infrastructure providers such as Vercel, and
              customer data may be stored and managed using platforms such as Supabase. These
              providers implement their own security measures. However, no method of transmission
              over the internet is completely secure, and we cannot guarantee absolute protection.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">7. Data Retention</h2>
            <p>We retain customer information for as long as necessary to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Provide services</li>
              <li>Comply with legal and financial obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">8. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by
              contacting us at info@easystoragenys.com. We may need to retain certain information
              for legal, tax, or dispute-resolution purposes even after a deletion request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">9. Cookies and Tracking</h2>
            <p>Our website may use cookies or similar technologies to:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Improve website functionality</li>
              <li>Analyze website usage</li>
            </ul>
            <p>You may manage your cookie preferences in your browser settings.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">10. Children&apos;s Information</h2>
            <p>
              Our services are intended for individuals aged 18 and older. By using our services,
              you confirm that you meet this requirement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy at any time. Updated versions will be posted on
              this page with a revised effective date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">12. Contact Information</h2>
            <p>
              For questions regarding this Privacy Policy or your personal information, contact us
              at: info@easystoragenys.com
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
