'use client';

import { useFormContext } from 'react-hook-form';
import { Building2, Building, Home } from 'lucide-react';
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
import { UB_RESIDENCE_HALLS, UB_ON_CAMPUS_APARTMENTS } from '@/lib/constants';
import type { BookingFormData } from '@/lib/types';

interface StepHousingProps {
  onNext: () => void;
}

export function StepHousing({ onNext }: StepHousingProps) {
  const { watch, setValue, formState: { errors } } = useFormContext<BookingFormData>();
  const housingType = watch('housingType');
  const dormName = watch('dormName');
  const apartmentName = watch('apartmentName');
  const address = watch('address');
  const roomNumber = watch('roomNumber');
  const floor = watch('floor');

  const hasRoomNumber = !!roomNumber?.trim();
  const hasValidFloor = floor > 0;

  const canProceed =
    housingType === 'dorm'
      ? !!dormName && hasRoomNumber && hasValidFloor
      : housingType === 'on-campus-apartment'
      ? !!apartmentName && hasRoomNumber && hasValidFloor
      : !!address;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Where do you live?</h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll come pick up your items from here.
        </p>
      </div>

      {/* Housing Type Selection */}
      <div className="grid gap-4 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => setValue('housingType', 'dorm')}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            housingType === 'dorm'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <Building2
            className={cn(
              'h-10 w-10',
              housingType === 'dorm' ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Residence Hall</p>
            <p className="text-sm text-muted-foreground">UB Dorm</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setValue('housingType', 'on-campus-apartment')}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            housingType === 'on-campus-apartment'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <Building
            className={cn(
              'h-10 w-10',
              housingType === 'on-campus-apartment' ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">On-Campus Apartment</p>
            <p className="text-sm text-muted-foreground">UB Apartments</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setValue('housingType', 'off-campus')}
          className={cn(
            'flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all',
            housingType === 'off-campus'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
        >
          <Home
            className={cn(
              'h-10 w-10',
              housingType === 'off-campus' ? 'text-primary' : 'text-muted-foreground'
            )}
          />
          <div className="text-center">
            <p className="font-semibold text-foreground">Off-Campus</p>
            <p className="text-sm text-muted-foreground">Apartment or House</p>
          </div>
        </button>
      </div>

      {/* Residence Hall Details */}
      {housingType === 'dorm' && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="dormName">Which residence hall?</Label>
            <Select
              value={dormName}
              onValueChange={(value) => setValue('dormName', value)}
            >
              <SelectTrigger id="dormName">
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
              <Label htmlFor="roomNumber">Room Number</Label>
              <Input
                id="roomNumber"
                placeholder="e.g., 412"
                value={watch('roomNumber')}
                onChange={(e) => setValue('roomNumber', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="floor">Floor</Label>
              <Input
                id="floor"
                type="number"
                min="1"
                max="20"
                placeholder="e.g., 4"
                value={watch('floor') || ''}
                onChange={(e) => setValue('floor', parseInt(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
            <div>
              <p className="font-medium text-foreground">Elevator access?</p>
              <p className="text-sm text-muted-foreground">
                Helps us plan for pickup
              </p>
            </div>
            <Switch
              checked={watch('hasElevator')}
              onCheckedChange={(checked) => setValue('hasElevator', checked)}
            />
          </div>
        </div>
      )}

      {/* On-Campus Apartment Details */}
      {housingType === 'on-campus-apartment' && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="apartmentName">Which apartment complex?</Label>
            <Select
              value={apartmentName}
              onValueChange={(value) => setValue('apartmentName', value)}
            >
              <SelectTrigger id="apartmentName">
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
            <Label htmlFor="apartmentUnit">Unit/Apartment Number</Label>
            <Input
              id="apartmentUnit"
              placeholder="e.g., Building A, Unit 204"
              value={watch('roomNumber')}
              onChange={(e) => setValue('roomNumber', e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="floor">Floor</Label>
              <Input
                id="floor"
                type="number"
                min="1"
                max="10"
                placeholder="e.g., 2"
                value={watch('floor') || ''}
                onChange={(e) => setValue('floor', parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
              <div>
                <p className="text-sm font-medium text-foreground">Elevator?</p>
              </div>
              <Switch
                checked={watch('hasElevator')}
                onCheckedChange={(checked) => setValue('hasElevator', checked)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Off-Campus Details */}
      {housingType === 'off-campus' && (
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="address">Full Address</Label>
            <Input
              id="address"
              placeholder="123 Main St, Apt 4B, Buffalo, NY 14214"
              value={address}
              onChange={(e) => setValue('address', e.target.value)}
            />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address.message}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="floor">Floor</Label>
              <Input
                id="floor"
                type="number"
                min="1"
                max="20"
                placeholder="e.g., 2"
                value={watch('floor') || ''}
                onChange={(e) => setValue('floor', parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
              <div>
                <p className="text-sm font-medium text-foreground">Elevator?</p>
              </div>
              <Switch
                checked={watch('hasElevator')}
                onCheckedChange={(checked) => setValue('hasElevator', checked)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Next Button */}
      <div className="flex justify-end pt-4">
        <Button
          type="button"
          size="lg"
          onClick={onNext}
          disabled={!canProceed}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
