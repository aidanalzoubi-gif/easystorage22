'use client';

import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { AVAILABLE_PICKUP_DATES, TIME_SLOTS } from '@/lib/constants';
import type { BookingFormData, TimeSlot } from '@/lib/types';

interface StepPickupProps {
  onNext: () => void;
  onBack: () => void;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export function StepPickup({ onNext, onBack }: StepPickupProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const pickupDate = watch('pickupDate');
  const pickupTimeSlot = watch('pickupTimeSlot');
  const boxDeliveryDate = watch('boxDeliveryDate');

  // Filter pickup dates to be on or after box delivery date if boxes were requested
  const availablePickupDates = boxDeliveryDate
    ? AVAILABLE_PICKUP_DATES.filter(date => date > boxDeliveryDate)
    : AVAILABLE_PICKUP_DATES;

  // Clear pickup date if it becomes invalid when box delivery date changes
  useEffect(() => {
    if (pickupDate && boxDeliveryDate && pickupDate <= boxDeliveryDate) {
      setValue('pickupDate', '');
    }
  }, [boxDeliveryDate, pickupDate, setValue]);

  const canProceed = !!pickupDate && !!pickupTimeSlot;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Schedule your pickup</h2>
        <p className="mt-2 text-muted-foreground">
          Choose when we should come get your stuff.
        </p>
      </div>

      {/* Date Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          <Label className="text-base font-semibold text-foreground">Pickup Date</Label>
        </div>
        <Select
          value={pickupDate}
          onValueChange={(value) => setValue('pickupDate', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a pickup date" />
          </SelectTrigger>
          <SelectContent>
            {availablePickupDates.map((date) => (
              <SelectItem key={date} value={date}>
                {formatDate(date)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Time Slot Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <Label className="text-base font-semibold text-foreground">Time Slot</Label>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot.value}
              type="button"
              onClick={() => setValue('pickupTimeSlot', slot.value as TimeSlot)}
              className={cn(
                'rounded-xl border-2 p-4 text-center transition-all',
                pickupTimeSlot === slot.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <p className="font-semibold text-foreground">{slot.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      {pickupDate && pickupTimeSlot && (
        <div className="rounded-xl bg-primary/5 p-6">
          <p className="text-sm font-medium text-muted-foreground">Your pickup is scheduled for:</p>
          <p className="mt-1 text-lg font-bold text-foreground">
            {formatDate(pickupDate)} &bull;{' '}
            {TIME_SLOTS.find((s) => s.value === pickupTimeSlot)?.label}
          </p>
        </div>
      )}

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
