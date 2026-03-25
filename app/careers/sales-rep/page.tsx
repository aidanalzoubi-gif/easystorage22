import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Clock, DollarSign, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Campus Sales Representative | Easy Storage Careers',
  description: 'Join Easy Storage as a Campus Sales Representative. Earn $10-25 commission per signup. Top performers earn $800-$2,000+.',
};

export default function SalesRepJobPage() {
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
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                  Campus Sales Representative
                </h1>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    University at Buffalo (On Campus)
                  </span>
                  <Badge variant="secondary">Part-Time / Commission-Based</Badge>
                </div>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Contract Period: March 20 - May 15
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
                    Easy Storage is a fast-growing student-run startup helping University at Buffalo students 
                    store their belongings over the summer. We provide free boxes, pickup, and free delivery, 
                    making storage simple and affordable for students leaving campus.
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Last year we served 200+ students, and this year our goal is to help 1,000+ students across 
                    campus. We're building a strong campus sales team to make that happen.
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    This role is perfect for students interested in sales, entrepreneurship, and earning strong 
                    commission-based income.
                  </p>
                </div>

                {/* What You'll Do */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">What You'll Do</h2>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Approach students on campus and introduce them to Easy Storage',
                      'Explain our storage service and answer basic questions',
                      'Help students book their storage spot on the spot',
                      'Generate leads and referrals from students',
                      'Work with the sales team to hit weekly sales targets',
                      'Represent the brand professionally on campus',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    This role involves in-person conversations with students around campus, dorm areas, and student hubs.
                  </p>
                </div>

                {/* Compensation */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Compensation</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground">Base Commission:</h3>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          $10 for every student signup you generate
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          $15 for every sign up worth $100 to $200
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          $25 for every sign up worth $250+
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">You will also receive:</h3>
                      <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li>- Sales training from the founders</li>
                        <li>- Experience working with a real startup sales team</li>
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
                      'Must commit to at least 10 hours per week during the contract period',
                      'Must be available from March 20 to May 15',
                      'Comfortable approaching and speaking with new people',
                      'Reliable, motivated, and goal-oriented',
                      'Willing to work outdoors and around campus',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    No previous sales experience is required - training will be provided.
                  </p>
                </div>

                {/* Why Valuable */}
                <div>
                  <h2 className="text-xl font-bold text-foreground">Why This Job is Valuable</h2>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Earn strong commission income on your schedule',
                      'Learn real-world sales and persuasion skills',
                      'Gain startup experience that looks great on resumes',
                      'Work directly with student founders building a growing business',
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
                          <p className="font-medium text-foreground">Schedule</p>
                          <p className="text-muted-foreground">10+ hours/week, flexible</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">Compensation</p>
                          <p className="text-muted-foreground">$10-25 per signup</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-muted-foreground">UB Campus</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link href="/careers/apply?position=sales-rep">
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
