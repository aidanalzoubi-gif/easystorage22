import Link from 'next/link';
import { ArrowRight, Users, Truck, DollarSign, Clock, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export const metadata = {
  title: 'Join the Team | Easy Storage',
  description: 'Join the Easy Storage team. We are hiring sales reps and movers for our Buffalo student storage service.',
};

const JOBS = [
  {
    id: 'sales-rep',
    title: 'Campus Sales Representative',
    type: 'Part-Time / Commission-Based',
    location: 'University at Buffalo (On Campus)',
    contractPeriod: 'March 20 - May 15',
    icon: Users,
    shortDescription: 'Join our campus sales team and earn strong commission-based income while gaining real startup experience.',
    highlights: [
      '$10-25 commission per signup',
      'Top performers earn $800-$2,000+',
      'FREE summer storage for yourself',
      'Flexible 10+ hours/week',
    ],
  },
  {
    id: 'operations',
    title: 'Student Assistant - Operations',
    type: 'Part-Time / Seasonal',
    location: 'University at Buffalo & Surrounding Area',
    contractPeriod: 'May 5-25 & Aug 18-26',
    icon: Truck,
    shortDescription: 'Support our move-out logistics team with hands-on work including moving, driving, packing, and box distribution.',
    highlights: [
      '$16-20/hour based on role',
      'Earn $500-$1,800+ during peak days',
      'Performance bonuses available',
      'Training provided',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Join the Easy Storage Team
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              We're a fast-growing student-run startup helping UB students store their belongings over the summer. 
              Last year we served 200+ students, and this year we're expanding significantly.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              Why Work With Us?
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Flexible Schedule</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Work around your classes and commitments. You set your availability.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Great Pay</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Competitive wages, commission, and bonuses. Top performers earn $1,000+.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Startup Experience</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Work directly with student founders building a growing business. Great for your resume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              Open Positions
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
              Find the role that fits you best
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {JOBS.map((job) => (
                <Card key={job.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <job.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <CardTitle className="mt-4">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground">
                      Contract Period: {job.contractPeriod}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm text-muted-foreground">{job.shortDescription}</p>
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground">Highlights:</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {job.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                      <Link href={`/careers/${job.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          Job Description
                        </Button>
                      </Link>
                      <Link href={`/careers/apply?position=${job.id}`} className="flex-1">
                        <Button className="w-full">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
