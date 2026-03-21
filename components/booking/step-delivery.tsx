'use client';

import { useFormContext } from 'react-hook-form';
import { CalendarCheck, CalendarClock, Building2, Building, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import {
  AVAILABLE_FALL_DELIVERY_DATES,
  UB_ON_CAMPUS_APARTMENTS,
  UB_RESIDENCE_HALLS,
} from '@/lib/constants';
import type { BookingFormData } from '@/lib/types';

interface StepDeliveryProps {
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

export function StepDelivery({ onNext, onBack }: StepDeliveryProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const fallDeliveryDate = watch('fallDeliveryDate');
  const fallDeliveryScheduledLater = watch('fallDeliveryScheduledLater');

  const fallDeliveryHousingType = watch('fallDeliveryHousingType');
  const fallDeliveryDormName = watch('fallDeliveryDormName');
  const fallDeliveryApartmentName = watch('fallDeliveryApartmentName');
  const fallDeliveryAddress = watch('fallDeliveryAddress');
  const fallDeliveryRoomNumber = watch('fallDeliveryRoomNumber');
  const fallDeliveryFloor = watch('fallDeliveryFloor');
  const fallDeliveryHasElevator = watch('fallDeliveryHasElevator');

  const locationDetailsValid =
    fallDeliveryHousingType === 'dorm'
      ? !!fallDeliveryDormName
      : fallDeliveryHousingType === 'on-campus-apartment'
      ? !!fallDeliveryApartmentName
      : !!fallDeliveryAddress;

  const canProceed =
    fallDeliveryScheduledLater ? true : locationDetailsValid && !!fallDeliveryDate;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Fall delivery</h2>
        <p className="mt-2 text-muted-foreground">
          Choose where your items should be delivered in the fall (same style as housing)
        </p>
      </div>

      {/* Schedule Options */}
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setValue('fallDeliveryScheduledLater', false)}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            !fallDeliveryScheduledLater
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <CalendarCheck
            className={cn(
              'h-10 w-10',
              !fallDeliveryScheduledLater ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Schedule Now</p>
            <p className="text-sm text-muted-foreground">Pick a date in August</p>
          </div>
        </button>
        <button
          type="button"
          onClick={() => {
            setValue('fallDeliveryScheduledLater', true);
            setValue('fallDeliveryDate', '');
          }}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            fallDeliveryScheduledLater
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <CalendarClock
            className={cn(
              'h-10 w-10',
              fallDeliveryScheduledLater ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Decide Later</p>
            <p className="text-sm text-muted-foreground">We&apos;ll reach out in August</p>
          </div>
        </button>
      </div>

      {/* Date Selection */}
      {!fallDeliveryScheduledLater && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <Label htmlFor="fallDeliveryDate">Select your delivery date</Label>
          <Select
            value={fallDeliveryDate}
            onValueChange={(value) => setValue('fallDeliveryDate', value)}
          >
            <SelectTrigger id="fallDeliveryDate">
              <SelectValue placeholder="Choose a date" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABLE_FALL_DELIVERY_DATES.map((date) => (
                <SelectItem key={date} value={date}>
                  {formatDate(date)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Housing-like Delivery Location */}
      {!fallDeliveryScheduledLater ? (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => setValue('fallDeliveryHousingType', 'dorm')}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            fallDeliveryHousingType === 'dorm'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <Building2
            className={cn(
              'h-10 w-10',
              fallDeliveryHousingType === 'dorm' ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Residence Hall</p>
            <p className="text-sm text-muted-foreground">UB Dorm</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setValue('fallDeliveryHousingType', 'on-campus-apartment')}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            fallDeliveryHousingType === 'on-campus-apartment'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <Building
            className={cn(
              'h-10 w-10',
              fallDeliveryHousingType === 'on-campus-apartment'
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">On-Campus Apartment</p>
            <p className="text-sm text-muted-foreground">UB Apartments</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setValue('fallDeliveryHousingType', 'off-campus')}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            fallDeliveryHousingType === 'off-campus'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <Home
            className={cn(
              'h-10 w-10',
              fallDeliveryHousingType === 'off-campus'
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Off-Campus</p>
            <p className="text-sm text-muted-foreground">Apartment or House</p>
          </div>
        </button>
      </div>

      {fallDeliveryHousingType === 'dorm' && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="fallDeliveryDormName">Which residence hall?</Label>
            <Select
              value={fallDeliveryDormName}
              onValueChange={(value) => setValue('fallDeliveryDormName', value)}
            >
              <SelectTrigger id="fallDeliveryDormName">
                <SelectValue placeholder="Select your residence hall" />
              </SelectTrigger>
              <SelectContent>
                {UB_RESIDENCE_HALLS.map((dorm) => (
                  <SelectItem key={dorm} value={dorm}>
                    {dorm}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fallDeliveryRoomNumber">Room Number</Label>
              <Input
                id="fallDeliveryRoomNumber"
                placeholder="e.g., 412"
                value={fallDeliveryRoomNumber}
                onChange={(e) => setValue('fallDeliveryRoomNumber', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fallDeliveryFloor">Floor</Label>
              <Input
                id="fallDeliveryFloor"
                type="number"
                min="1"
                max="20"
                placeholder="e.g., 4"
                value={fallDeliveryFloor || ''}
                onChange={(e) => setValue('fallDeliveryFloor', parseInt(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
            <div>
              <p className="font-medium text-foreground">Elevator access?</p>
              <p className="text-sm text-muted-foreground">Helps us plan for delivery</p>
            </div>
            <Switch
              checked={fallDeliveryHasElevator}
              onCheckedChange={(checked) => setValue('fallDeliveryHasElevator', checked)}
            />
          </div>
        </div>
      )}

      {fallDeliveryHousingType === 'on-campus-apartment' && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="fallDeliveryApartmentName">Which apartment complex?</Label>
            <Select
              value={fallDeliveryApartmentName}
              onValueChange={(value) => setValue('fallDeliveryApartmentName', value)}
            >
              <SelectTrigger id="fallDeliveryApartmentName">
                <SelectValue placeholder="Select your apartment complex" />
              </SelectTrigger>
              <SelectContent>
                {UB_ON_CAMPUS_APARTMENTS.map((apt) => (
                  <SelectItem key={apt} value={apt}>
                    {apt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fallDeliveryRoomNumber">Unit/Apartment Number</Label>
            <Input
              id="fallDeliveryRoomNumber"
              placeholder="e.g., Building A, Unit 204"
              value={fallDeliveryRoomNumber}
              onChange={(e) => setValue('fallDeliveryRoomNumber', e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fallDeliveryFloor">Floor</Label>
              <Input
                id="fallDeliveryFloor"
                type="number"
                min="1"
                max="10"
                placeholder="e.g., 2"
                value={fallDeliveryFloor || ''}
                onChange={(e) => setValue('fallDeliveryFloor', parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
              <div>
                <p className="text-sm font-medium text-foreground">Elevator?</p>
              </div>
              <Switch
                checked={fallDeliveryHasElevator}
                onCheckedChange={(checked) => setValue('fallDeliveryHasElevator', checked)}
              />
            </div>
          </div>
        </div>
      )}

      {fallDeliveryHousingType === 'off-campus' && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="fallDeliveryAddress">Full Address</Label>
            <Input
              id="fallDeliveryAddress"
              placeholder="123 Main St, Apt 4B, Buffalo, NY 14214"
              value={fallDeliveryAddress}
              onChange={(e) => setValue('fallDeliveryAddress', e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fallDeliveryFloor">Floor</Label>
              <Input
                id="fallDeliveryFloor"
                type="number"
                min="1"
                max="20"
                placeholder="e.g., 2"
                value={fallDeliveryFloor || ''}
                onChange={(e) => setValue('fallDeliveryFloor', parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
              <div>
                <p className="text-sm font-medium text-foreground">Elevator?</p>
              </div>
              <Switch
                checked={fallDeliveryHasElevator}
                onCheckedChange={(checked) => setValue('fallDeliveryHasElevator', checked)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  ) : null}

      {fallDeliveryScheduledLater && (
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <p className="text-muted-foreground">
            No problem! We&apos;ll contact you in early August to schedule your delivery.
            You can also schedule anytime from your dashboard.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Since you chose Decide Later, no location information is required now.
          </p>
        </div>
      )}

      {!fallDeliveryScheduledLater && (
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <p className="text-muted-foreground">
            Please choose a fall delivery location (Residence Hall / On-Campus / Off-Campus).
          </p>
        </div>
      )}

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
