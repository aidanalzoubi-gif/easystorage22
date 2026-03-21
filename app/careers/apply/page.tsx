'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { toast } from 'sonner';

const POSITIONS = {
  'sales-rep': {
    title: 'Campus Sales Representative',
    questions: [
      {
        id: 'why-sales',
        label: 'Why are you interested in a sales role?',
        type: 'textarea',
        placeholder: 'Tell us what excites you about sales and connecting with people...',
      },
      {
        id: 'social-media',
        label: 'What social media platforms are you most active on?',
        type: 'text',
        placeholder: 'e.g., Instagram, TikTok, Snapchat',
      },
      {
        id: 'experience',
        label: 'Do you have any prior sales, marketing, or customer service experience?',
        type: 'textarea',
        placeholder: 'If yes, describe briefly. If no, that\'s okay!',
      },
      {
        id: 'hours',
        label: 'Can you commit to at least 10 hours per week from March 20 to May 15?',
        type: 'select',
        options: ['Yes', 'No'],
      },
      {
        id: 'availability',
        label: 'How many hours per week are you available to work?',
        type: 'select',
        options: ['10-15 hours', '15-20 hours', '20+ hours'],
      },
    ],
  },
  'operations': {
    title: 'Student Assistant - Operations',
    questions: [
      {
        id: 'license',
        label: 'Do you have a valid U.S. driver\'s license?',
        type: 'select',
        options: ['Yes', 'No', 'In progress'],
      },
      {
        id: 'lifting',
        label: 'Are you able to lift and carry items up to 50 lbs?',
        type: 'select',
        options: ['Yes', 'No'],
      },
      {
        id: 'experience',
        label: 'Do you have any experience with moving, delivery, or warehouse work?',
        type: 'textarea',
        placeholder: 'If yes, describe briefly. If no, that\'s okay - training will be provided!',
      },
      {
        id: 'availability-may',
        label: 'Are you available during May 5-25?',
        type: 'select',
        options: ['Yes - fully available', 'Partially available', 'Not available'],
      },
      {
        id: 'availability-aug',
        label: 'Are you available during Aug 18-26?',
        type: 'select',
        options: ['Yes - fully available', 'Partially available', 'Not available'],
      },
      {
        id: 'weekends',
        label: 'Are you able to work weekends during these periods?',
        type: 'select',
        options: ['Yes', 'Some weekends', 'No'],
      },
    ],
  },
};

function ApplicationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const positionId = searchParams.get('position') || 'sales-rep';
  const position = POSITIONS[positionId as keyof typeof POSITIONS] || POSITIONS['sales-rep'];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    answers: {} as Record<string, string>,
    resumeFileName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error('Please fill in all contact information fields.');
      return;
    }

    // Validate all questions answered
    const unansweredQuestions = position.questions.filter(
      (q) => !formData.answers[q.id]
    );
    if (unansweredQuestions.length > 0) {
      toast.error('Please answer all questions.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Application submitted successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="mx-auto max-w-md text-center">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">Application Submitted!</CardTitle>
              <CardDescription>
                Thank you for applying to be a {position.title} at Easy Storage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We've received your application and will review it shortly. 
                Expect to hear back from us within 3-5 business days.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/careers">
                  <Button variant="outline" className="w-full">
                    View Other Positions
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="w-full">
                    Return Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/careers"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>

          <Card>
            <CardHeader>
              <CardTitle>Apply for {position.title}</CardTitle>
              <CardDescription>
                Fill out the form below to apply. We'll review your application and get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="jsmith@buffalo.edu"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Position-Specific Questions */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Questions</h3>
                  <div className="space-y-4">
                    {position.questions.map((question) => (
                      <div key={question.id} className="space-y-2">
                        <Label htmlFor={question.id}>{question.label} *</Label>
                        {question.type === 'textarea' ? (
                          <Textarea
                            id={question.id}
                            value={formData.answers[question.id] || ''}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            placeholder={question.placeholder}
                            rows={3}
                          />
                        ) : question.type === 'select' ? (
                          <Select
                            value={formData.answers[question.id] || ''}
                            onValueChange={(value) => handleAnswerChange(question.id, value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              {question.options?.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            id={question.id}
                            value={formData.answers[question.id] || ''}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            placeholder={question.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Resume (Optional)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload your resume</Label>
                    <div className="flex items-center gap-4">
                      <label
                        htmlFor="resume"
                        className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
                      >
                        <Upload className="h-4 w-4" />
                        Choose File
                      </label>
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <span className="text-sm text-muted-foreground">
                        {formData.resumeFileName || 'No file chosen'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    }>
      <ApplicationForm />
    </Suspense>
  );
}
