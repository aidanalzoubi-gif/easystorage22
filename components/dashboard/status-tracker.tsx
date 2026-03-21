'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BOOKING_STATUS_LABELS, BOOKING_STATUS_ORDER } from '@/lib/constants';
import type { BookingStatus } from '@/lib/types';

interface StatusTrackerProps {
  currentStatus: BookingStatus;
}

export function StatusTracker({ currentStatus }: StatusTrackerProps) {
  const currentIndex = BOOKING_STATUS_ORDER.indexOf(currentStatus);

  return (
    <div className="space-y-3">
      {BOOKING_STATUS_ORDER.map((status, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div key={status} className="flex items-center gap-3">
            <div
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2',
                isCompleted
                  ? 'border-accent bg-accent text-accent-foreground'
                  : isCurrent
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-muted bg-background text-muted-foreground'
              )}
            >
              {isCompleted ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-xs font-medium">{index + 1}</span>
              )}
            </div>
            <span
              className={cn(
                'text-sm font-medium',
                isCompleted || isCurrent
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {BOOKING_STATUS_LABELS[status]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
