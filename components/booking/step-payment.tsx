'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  calculateTotalBoxes,
  calculateTotalPrice,
  calculateDeposit,
  calculateBalance,
  formatPrice,
  PRICE_PER_BOX,
  INSURANCE_PRICE,
} from '@/lib/pricing';
import type { BookingFormData } from '@/lib/types';

interface StepPaymentProps {
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function StepPayment({ onSubmit, onBack, isSubmitting }: StepPaymentProps) {
  const { watch, setValue } = useFormContext<BookingFormData>();
  const acceptedPrivacyPolicy = watch('acceptedPrivacyPolicy');
  const acceptedTermsOfService = watch('acceptedTermsOfService');
  const acceptedProtectionPlan = watch('acceptedProtectionPlan');
  const boxCount = watch('boxCount');
  const furnitureItems = watch('furnitureItems') || [];
  const hasInsurance = watch('hasInsurance');

  const totalBoxes = calculateTotalBoxes(boxCount, furnitureItems);
  const totalPrice = calculateTotalPrice(totalBoxes, hasInsurance, furnitureItems);
  const depositAmount = calculateDeposit(totalPrice);
  const balanceAmount = calculateBalance(totalPrice, depositAmount);

  useEffect(() => {
    // Force Stripe for all bookings.
    setValue('paymentMethod', 'stripe', { shouldValidate: true });
  }, [setValue]);

  const canProceed =
    !!acceptedPrivacyPolicy
    && !!acceptedTermsOfService
    && !!acceptedProtectionPlan;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Payment</h2>
        <p className="mt-2 text-muted-foreground">
          Your deposit is paid securely through Stripe.
        </p>
      </div>

      {/* Price Summary */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground">Order Summary</h3>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Storage ({totalBoxes} {totalBoxes === 1 ? 'box' : 'boxes'} @ {formatPrice(PRICE_PER_BOX)} each)
            </span>
            <span className="text-foreground">
              {formatPrice(totalBoxes * PRICE_PER_BOX)}
            </span>
          </div>
          {furnitureItems.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {item.type} ({item.quantity} {item.quantity === 1 ? 'item' : 'items'} @ {formatPrice(item.price)} each)
              </span>
              <span className="text-foreground">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
          {hasInsurance && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Coverage</span>
              <span className="text-foreground">{formatPrice(INSURANCE_PRICE)}</span>
            </div>
          )}
          <div className="border-t border-border pt-3">
            <div className="flex justify-between font-semibold">
              <span className="text-foreground">Total</span>
              <span className="text-foreground">{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-primary/5 p-4">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold text-foreground">Deposit Due Now</p>
            </div>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(depositAmount)}
            </p>
          </div>
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>Balance due on pickup</span>
            <span>{formatPrice(balanceAmount)}</span>
          </div>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="rounded-xl border border-border bg-muted/30 p-6">
        <p className="text-muted-foreground">
          After confirming your booking, you&apos;ll be securely redirected to
          complete your deposit of{' '}
          <span className="font-semibold text-foreground">
            {formatPrice(depositAmount)}
          </span>{' '}
          via card or Apple Pay. Your balance is collected on pickup day.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-border bg-card p-4">
        <label className="flex cursor-pointer items-start gap-3">
          <Checkbox
            checked={acceptedPrivacyPolicy}
            onCheckedChange={(checked) => {
              setValue('acceptedPrivacyPolicy', checked === true, { shouldValidate: true });
            }}
            className="mt-0.5"
          />
          <span className="text-sm text-foreground">
            I acknowledge I have read and agree to the{' '}
            <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
              Privacy Policy
            </Link>
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3">
          <Checkbox
            checked={acceptedTermsOfService}
            onCheckedChange={(checked) => {
              setValue('acceptedTermsOfService', checked === true, { shouldValidate: true });
            }}
            className="mt-0.5"
          />
          <span className="text-sm text-foreground">
            I acknowledge I have read and agree to the{' '}
            <Link href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
              Terms of Service
            </Link>{' '}
          </span>
        </label>

        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <h4 className="text-sm font-semibold text-foreground">Optional Protection Plan Summary</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Optional Coverage: {formatPrice(INSURANCE_PRICE)}
          </p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground">
            What it Covers:
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
            <li>Damage or loss of items while in our custody, up to $1,000</li>
            <li>Electronics and TVs must be properly packed (original box or padding)</li>
            <li>Fragile items must be cushioned with bubble wrap, padding, or other protection</li>
          </ul>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground">
            What it Does Not Cover:
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
            <li>Pre-existing damage</li>
            <li>Items not packed properly</li>
            <li>Items over $250 not disclosed at signup</li>
            <li>Prohibited or hazardous items</li>
          </ul>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground">
            Requirements to Activate Coverage:
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
            <li>Submit photos of all items before pickup</li>
            <li>Claims must be submitted within 48 hours of delivery</li>
          </ul>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground">
            Important Notes:
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
            <li>Standard service liability without Protection Plan is $250 max</li>
            <li>Customers are responsible for disclosing any item over $250</li>
          </ul>

          <p className="mt-3 text-xs text-muted-foreground">
            Full details are listed in the{' '}
            <Link
              href="/terms-of-service#protection-plan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Optional Protection Plan terms
            </Link>
            .
          </p>
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <Checkbox
            checked={acceptedProtectionPlan}
            onCheckedChange={(checked) => {
              setValue('acceptedProtectionPlan', checked === true, { shouldValidate: true });
            }}
            className="mt-0.5"
          />
          <span className="text-sm text-foreground">
            I acknowledge I have read and agree to the{' '}
            <Link
              href="/terms-of-service#protection-plan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Optional Protection Plan terms
            </Link>
          </span>
        </label>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button
          type="button"
          size="lg"
          onClick={onSubmit}
          disabled={!canProceed || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Complete Booking'}
        </Button>
      </div>
    </div>
  );
}
