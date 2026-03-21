'use client';

import { useFormContext } from 'react-hook-form';
import { User, Mail, Phone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { BookingFormData } from '@/lib/types';

interface StepContactProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepContact({ onNext, onBack }: StepContactProps) {
  const { watch, setValue, formState: { errors } } = useFormContext<BookingFormData>();
  const studentName = watch('studentName');
  const email = watch('email');
  const phone = watch('phone');
  const ubPersonNumber = watch('ubPersonNumber');

  const isValidEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = phone && phone.replace(/\D/g, '').length >= 10;
  const canProceed = !!studentName && isValidEmail && isValidPhone; // ubPersonNumber is optional/recommended

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Your contact info</h2>
        <p className="mt-2 text-muted-foreground">
          How can we reach you about your storage?
        </p>
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="studentName" className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            Full Name
          </Label>
          <Input
            id="studentName"
            placeholder="John Doe"
            value={studentName || ''}
            onChange={(e) => setValue('studentName', e.target.value)}
            className="h-12"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email || ''}
            onChange={(e) => setValue('email', e.target.value)}
            className="h-12"
          />
          {email && !isValidEmail && (
            <p className="text-sm text-destructive">
              Please enter a valid email address
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(716) 555-0123"
            value={phone || ''}
            onChange={(e) => setValue('phone', formatPhoneNumber(e.target.value))}
            className="h-12"
          />
        </div>

        {/* UB Person Number */}
        <div className="space-y-2">
          <Label htmlFor="ubPersonNumber" className="flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            UB Person Number (recommended)
          </Label>
          <Input
            id="ubPersonNumber"
            placeholder="e.g., 12345678"
            value={ubPersonNumber || ''}
            onChange={(e) => setValue('ubPersonNumber', e.target.value)}
            className="h-12"
          />
          <p className="text-sm text-muted-foreground">
            Optional but highly recommended for faster processing.
          </p>
        </div>

        {/* Info Note */}
        <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            We&apos;ll use this info to send booking confirmations and pickup reminders.
            Your info is never shared.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          Back
        </Button>
        <Button type="button" size="lg" onClick={onNext} disabled={!canProceed}>
          Continue
        </Button>
      </div>
    </div>
  );
}
