'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const STEPS = [
  { number: 1, label: 'Housing' },
  { number: 2, label: 'Storage' },
  { number: 3, label: 'Boxes' },
  { number: 4, label: 'Pickup' },
  { number: 5, label: 'Delivery' },
  { number: 6, label: 'Insurance' },
  { number: 7, label: 'Contact' },
  { number: 8, label: 'Payment' },
];

interface ProgressIndicatorProps {
  currentStep: number;
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <div className="w-full">
      {/* Mobile: Simple progress bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            Step {currentStep} of {STEPS.length}
          </span>
          <span className="text-muted-foreground">{STEPS[currentStep - 1].label}</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Step indicators */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {STEPS.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors',
                    currentStep > step.number
                      ? 'border-primary bg-primary text-primary-foreground'
                      : currentStep === step.number
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted bg-background text-muted-foreground'
                  )}
                >
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={cn(
                    'mt-2 text-xs font-medium',
                    currentStep >= step.number
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={cn(
                    'mx-2 h-0.5 w-8 lg:w-12',
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
