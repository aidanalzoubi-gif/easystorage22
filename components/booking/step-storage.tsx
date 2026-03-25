'use client';

import { useFormContext } from 'react-hook-form';
import { Minus, Plus, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FURNITURE_OPTIONS } from '@/lib/constants';
import {
  calculateTotalBoxes,
  calculateTotalPrice,
  formatPrice,
  PRICE_PER_BOX,
} from '@/lib/pricing';
import type { BookingFormData, FurnitureItem } from '@/lib/types';

interface StepStorageProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepStorage({ onNext, onBack }: StepStorageProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const boxCount = watch('boxCount');
  const furnitureItems = watch('furnitureItems') || [];

  const totalBoxes = calculateTotalBoxes(boxCount, furnitureItems);
  const totalPrice = calculateTotalPrice(totalBoxes, false, furnitureItems);

  const updateFurnitureQuantity = (type: string, price: number, delta: number) => {
    const existing = furnitureItems.find((item) => item.type === type);
    
    if (existing) {
      const newQuantity = Math.max(0, existing.quantity + delta);
      if (newQuantity === 0) {
        setValue(
          'furnitureItems',
          furnitureItems.filter((item) => item.type !== type)
        );
      } else {
        setValue(
          'furnitureItems',
          furnitureItems.map((item) =>
            item.type === type ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    } else if (delta > 0) {
      setValue('furnitureItems', [
        ...furnitureItems,
        { type, price, quantity: 1 },
      ]);
    }
  };

  const getFurnitureQuantity = (type: string) => {
    return furnitureItems.find((item) => item.type === type)?.quantity || 0;
  };

  const selectFurnitureOption = (type: string, price: number) => {
    if (getFurnitureQuantity(type) === 0) {
      updateFurnitureQuantity(type, price, 1);
    }
  };

  const displayItems = [];
  if (boxCount > 0) {
    displayItems.push(`${boxCount} ${boxCount === 1 ? 'Box' : 'Boxes'}`);
  }
  furnitureItems.filter(item => item.quantity > 0).forEach(item => {
    displayItems.push(`${item.quantity} ${item.type}`);
  });

  const hasFurnitureSelection = furnitureItems.some((item) => item.quantity > 0);
  const canProceed = boxCount > 0 || hasFurnitureSelection;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">What are you storing?</h2>
        <p className="mt-2 text-muted-foreground">
          Estimate how much stuff you have. Don&apos;t worry, you can adjust later.
        </p>
      </div>

      {/* Standard Boxes */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Label className="text-base font-semibold text-foreground">
                Standard Boxes
              </Label>
              <p className="text-xs text-muted-foreground">
                26" x 16" x 15"
              </p>
              <p className="text-xs text-muted-foreground">
                Holds up to 50 lb
              </p>
              <p className="text-sm text-muted-foreground">
                {formatPrice(PRICE_PER_BOX)} each
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10"
              onClick={() => setValue('boxCount', Math.max(0, boxCount - 1))}
              disabled={boxCount <= 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center text-xl font-semibold text-foreground">
              {boxCount}
            </span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10"
              onClick={() => setValue('boxCount', boxCount + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Furniture Items */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Large Items</h3>
          <p className="text-sm text-muted-foreground">
            Additional storage for larger items
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FURNITURE_OPTIONS.map((furniture) => {
            const quantity = getFurnitureQuantity(furniture.type);
            return (
              <div
                key={furniture.type}
                className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card p-4"
                onClick={() => selectFurnitureOption(furniture.type, furniture.price)}
              >
                <div>
                  <p className="font-medium text-foreground">{furniture.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(furniture.price)} each
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(event) => {
                      event.stopPropagation();
                      updateFurnitureQuantity(furniture.type, furniture.price, -1);
                    }}
                    disabled={quantity <= 0}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium text-foreground">
                    {quantity}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(event) => {
                      event.stopPropagation();
                      updateFurnitureQuantity(furniture.type, furniture.price, 1);
                    }}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Summary */}
      <div className="rounded-xl bg-primary/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Storage</p>
            <div className="text-2xl font-bold text-foreground">
              {displayItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Estimated Price</p>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(totalPrice)}
            </p>
          </div>
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
