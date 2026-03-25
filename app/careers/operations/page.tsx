import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Clock, DollarSign, CheckCircle2, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Student Assistant - Operations | Easy Storage Careers',
  description: 'Join Easy Storage as a Student Assistant on our Operations team. Earn $16-20/hour with potential to earn $500-$1,800+ during peak days.',
};

export default function OperationsJobPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all positions
            </Link>
            
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
                <Truck className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                  Student Assistant - Operations Team
                </h1>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    University at Buffalo & Surrounding Area
                  </span>
                  <Badge variant="secondary">Part-Time / Seasonal</Badge>
                </div>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Contract Period: May 5-25 & Aug 18-26
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">About Us</h2>
                  <p className="mt-3 text-muted-foreground">
                    Easy Storage is a fast-growing student-run startup that helps University at Buffalo 
                    students store their belongings over the summer. We provide free boxes, pickup, 
                    secure storage, and delivery in August, making move-out simple and stress-free.
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Last year we served 200+ students, and this year we are expanding operations significantly. 
                    We are hiring reliable Student Assistants to support our move-out logistics team.
                  </p>
                </div>

                {/* Position Overview */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Position Overview</h2>
                  <p className="mt-3 text-muted-foreground">
                    Student Assistants support day-to-day operations during the busy move-out period. Tasks 
                    will vary based on operational needs and may include moving, driving, packing support, 
                    and box distribution.
                  </p>
                  <p className="mt-3 text-muted-foreground font-medium">
                    This is a hands-on role requiring physical work, teamwork, and reliability.
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Responsibilities</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Depending on assignment, duties may include:</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Distributing storage boxes to students on campus',
                      'Assisting with pickup of packed boxes from dorms/apartments',
                      'Loading and unloading items into transport vehicles',
                      'Assisting drivers with navigation and logistics',
                      'Helping organize items at temporary storage locations',
                      'Providing friendly, professional service to customers',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compensation */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Compensation</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground">Hourly Pay:</h3>
                      <p className="mt-2 text-muted-foreground">
                        <span className="font-semibold text-foreground">$16-$20 per hour</span> (based on role and experience)
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Performance Bonus Opportunities:</h3>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          Additional pay for long shifts or peak days
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          Team bonuses if move-out targets are met
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">You will also receive:</h3>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="font-semibold text-primary">- FREE summer storage for yourself</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Job Requirements</h2>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Must be available during the contract period May 5-25 and Aug 18-26',
                      'Must be able to commit to scheduled shifts (including weekends)',
                      'Able to lift and carry items up to 50 lbs',
                      'Reliable and able to work in a fast-paced environment',
                      'Comfortable working outdoors and in residence halls',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 rounded-lg border border-border p-4">
                    <h3 className="font-semibold text-foreground">For Driver Assignments (if applicable):</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>- Valid U.S. driver's license required</li>
                      <li>- Clean driving record preferred</li>
                      <li>- Comfortable driving small and large trucks</li>
                    </ul>
                  </div>
                  
                  <p className="mt-4 text-sm font-medium text-foreground">
                    No prior moving experience required - training will be provided.
                  </p>
                </div>

                {/* Why Valuable */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Why This Job is Valuable</h2>
                  <ul className="mt-4 space-y-3">
                    {[
                      'High-paying short-term campus job',
                      'Flexible shifts during move-out season',
                      'Work with a fast-growing student startup',
                      'Team-based environment with other students',
                      'Great way to earn money before summer break',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">Quick Summary</h3>
                    
                    <div className="mt-4 space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">Contract Period</p>
                          <p className="text-muted-foreground">May 5-25</p>
                          <p className="text-muted-foreground">Aug 18-26</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">Compensation</p>
                          <p className="text-muted-foreground">$16-20/hour</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-muted-foreground">UB Campus & Area</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link href="/careers/apply?position=operations">
                        <Button className="w-full">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/careers">
                        <Button variant="outline" className="w-full">
                          View All Positions
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
