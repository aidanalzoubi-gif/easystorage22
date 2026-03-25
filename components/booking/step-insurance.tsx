'use client';

import { useFormContext } from 'react-hook-form';
import { Shield, ShieldOff, Mail, Phone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { INSURANCE_PRICE, formatPrice } from '@/lib/pricing';
import type { BookingFormData } from '@/lib/types';

interface StepInsuranceProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepInsurance({ onNext, onBack }: StepInsuranceProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const hasInsurance = watch('hasInsurance');
  const insuranceEmail = 'info@easystroagenys.com';
  const insurancePhone = '(716) 243-2745';

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Add coverage?</h2>
        <p className="mt-2 text-muted-foreground">
          Protect your belongings with our optional coverage.
        </p>
      </div>

      {/* Insurance Options */}
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setValue('hasInsurance', true)}
          className={cn(
            'relative flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            hasInsurance
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          {hasInsurance && (
            <div className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              Selected
            </div>
          )}
          <Shield
            className={cn(
              'h-10 w-10',
              hasInsurance ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">
              Yes, add coverage
            </p>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(INSURANCE_PRICE)}
            </p>
            <p className="text-sm text-muted-foreground">one-time fee</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setValue('hasInsurance', false)}
          className={cn(
            'relative flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            !hasInsurance
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          {!hasInsurance && (
            <div className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              Selected
            </div>
          )}
          <ShieldOff
            className={cn(
              'h-10 w-10',
              !hasInsurance ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">No thanks</p>
            <p className="text-2xl font-bold text-foreground">{formatPrice(0)}</p>
            <p className="text-sm text-muted-foreground">basic liability only</p>
          </div>
        </button>
      </div>

      {/* Insurance Details */}
      {hasInsurance && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground">What&apos;s covered:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              Up to $1,000 in coverage for damage or loss
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              Protection during pickup, storage, and delivery
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              Quick and easy claims process
            </li>
          </ul>

          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Photo documentation required
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  To activate insurance, send photos of your packed items before pickup:
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${insuranceEmail}`}
                      className="text-primary underline underline-offset-2"
                    >
                      {insuranceEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{insurancePhone}</span>
                    <span className="text-muted-foreground">(text only)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          Back
        </Button>
        <Button type="button" size="lg" onClick={onNext}>
          Continue
        </Button>
      </div>
    </div>
  );
}
