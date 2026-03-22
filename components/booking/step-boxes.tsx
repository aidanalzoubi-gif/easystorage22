'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Minus, Plus, PackageOpen, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AVAILABLE_BOX_DELIVERY_DATES } from '@/lib/constants';
import type { BookingFormData } from '@/lib/types';

interface StepBoxesProps {
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

export function StepBoxes({ onNext, onBack }: StepBoxesProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const boxCount = watch('boxCount');
  const cardboardBoxesRequested = watch('cardboardBoxesRequested');
  const boxDeliveryDate = watch('boxDeliveryDate');
  const maxFreeBoxes = Math.max(0, boxCount);

  useEffect(() => {
    if (cardboardBoxesRequested > maxFreeBoxes) {
      setValue('cardboardBoxesRequested', maxFreeBoxes);
    }
  }, [cardboardBoxesRequested, maxFreeBoxes, setValue]);

  const needsBoxes = cardboardBoxesRequested > 0;
  const canProceed = !needsBoxes || (needsBoxes && !!boxDeliveryDate);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Need packing boxes?</h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll deliver free cardboard boxes to you before pickup day.
        </p>
      </div>

      {/* Box Request */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <PackageOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <Label className="text-base font-semibold text-foreground">
                Free Cardboard Boxes
              </Label>
              <p className="text-sm text-muted-foreground">
                Standard moving boxes (26" x 16" x 15")
              </p>
              <p className="text-xs text-muted-foreground">
                Max free boxes: {maxFreeBoxes}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10"
              onClick={() =>
                setValue(
                  'cardboardBoxesRequested',
                  Math.max(0, cardboardBoxesRequested - 1)
                )
              }
              disabled={cardboardBoxesRequested <= 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center text-xl font-semibold text-foreground">
              {cardboardBoxesRequested}
            </span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10"
              onClick={() =>
                setValue(
                  'cardboardBoxesRequested',
                  Math.min(maxFreeBoxes, cardboardBoxesRequested + 1)
                )
              }
              disabled={cardboardBoxesRequested >= maxFreeBoxes}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Delivery Date Selection */}
      {needsBoxes && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="boxDeliveryDate">When should we deliver your boxes?</Label>
            <Select
              value={boxDeliveryDate}
              onValueChange={(value) => setValue('boxDeliveryDate', value)}
            >
              <SelectTrigger id="boxDeliveryDate">
                <SelectValue placeholder="Select a delivery date" />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_BOX_DELIVERY_DATES.map((date) => (
                  <SelectItem key={date} value={date}>
                    {formatDate(date)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Boxes will be delivered between 10am - 6pm. We&apos;ll leave them at your door.
            </p>
          </div>
        </div>
      )}

      {/* No Boxes Message */}
      {!needsBoxes && (
        <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
          <p className="text-muted-foreground">
            No boxes needed? No problem! You can use your own containers.
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
