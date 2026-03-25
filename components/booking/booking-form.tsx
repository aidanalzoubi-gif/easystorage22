'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'sonner';
import { ProgressIndicator } from './progress-indicator';
import { StepHousing } from './step-housing';
import { StepStorage } from './step-storage';
import { StepBoxes } from './step-boxes';
import { StepPickup } from './step-pickup';
import { StepDelivery } from './step-delivery';
import { StepInsurance } from './step-insurance';
import { StepContact } from './step-contact';
import { StepPayment } from './step-payment';
import { useStore, generateBookingId } from '@/lib/store';
import {
  calculateTotalBoxes,
  calculateTotalPrice,
  calculateDeposit,
} from '@/lib/pricing';
import type { BookingFormData, Booking } from '@/lib/types';

const DEFAULT_VALUES: BookingFormData = {
  housingType: 'dorm',
  dormName: '',
  apartmentName: '',
  address: '',
  roomNumber: '',
  floor: 0,
  hasElevator: false,
  boxCount: 0,
  furnitureItems: [],
  cardboardBoxesRequested: 0,
  boxDeliveryDate: '',
  pickupDate: '',
  pickupTimeSlot: '9am-12pm',
  fallDeliveryHousingType: 'dorm',
  fallDeliveryDormName: '',
  fallDeliveryApartmentName: '',
  fallDeliveryAddress: '',
  fallDeliveryRoomNumber: '',
  fallDeliveryFloor: 0,
  fallDeliveryHasElevator: false,
  fallDeliveryDate: '',
  fallDeliveryScheduledLater: false,
  hasInsurance: false,
  studentName: '',
  email: '',
  phone: '',
  ubPersonNumber: '',
  paymentMethod: 'stripe',
  acceptedPrivacyPolicy: false,
  acceptedTermsOfService: false,
  acceptedProtectionPlan: false,
};

export function BookingForm() {
  const router = useRouter();
  const { addBooking } = useStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<BookingFormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const goToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const data = methods.getValues();

    try {
      const totalBoxes = calculateTotalBoxes(data.boxCount, data.furnitureItems);
      const totalPrice = calculateTotalPrice(totalBoxes, data.hasInsurance, data.furnitureItems);
      const depositAmount = calculateDeposit(totalPrice);

      const booking: Booking = {
        id: generateBookingId(),
        status: 'booked',
        createdAt: new Date().toISOString(),
        studentName: data.studentName,
        email: data.email,
        phone: data.phone,
        housingType: data.housingType,
        dormName: data.housingType === 'dorm' ? data.dormName : undefined,
        apartmentName: data.housingType === 'on-campus-apartment' ? data.apartmentName : undefined,
        address: data.housingType === 'off-campus' ? data.address : undefined,
        roomNumber: data.roomNumber || undefined,
        floor: data.floor || undefined,
        hasElevator: data.hasElevator,
        boxCount: totalBoxes,
        furnitureItems: data.furnitureItems,
        cardboardBoxesRequested: data.cardboardBoxesRequested,
        boxDeliveryDate: data.boxDeliveryDate || undefined,
        pickupDate: data.pickupDate,
        pickupTimeSlot: data.pickupTimeSlot,
        fallDeliveryHousingType: data.fallDeliveryHousingType,
        fallDeliveryDormName:
          data.fallDeliveryHousingType === 'dorm' ? data.fallDeliveryDormName : undefined,
        fallDeliveryApartmentName:
          data.fallDeliveryHousingType === 'on-campus-apartment'
            ? data.fallDeliveryApartmentName
            : undefined,
        fallDeliveryAddress:
          data.fallDeliveryHousingType === 'off-campus'
            ? data.fallDeliveryAddress
            : data.fallDeliveryHousingType === 'dorm'
            ? `${data.fallDeliveryDormName}${data.fallDeliveryRoomNumber ? ` Room ${data.fallDeliveryRoomNumber}` : ''}`
            : data.fallDeliveryHousingType === 'on-campus-apartment'
            ? `${data.fallDeliveryApartmentName}${data.fallDeliveryRoomNumber ? ` Unit ${data.fallDeliveryRoomNumber}` : ''}`
            : undefined,
        fallDeliveryRoomNumber: data.fallDeliveryRoomNumber || undefined,
        fallDeliveryFloor: data.fallDeliveryFloor || undefined,
        fallDeliveryHasElevator: data.fallDeliveryHasElevator,
        fallDeliveryDate: data.fallDeliveryDate || undefined,
        fallDeliveryScheduledLater: data.fallDeliveryScheduledLater,
        ubPersonNumber: data.ubPersonNumber || undefined,
        hasInsurance: data.hasInsurance,
        insurancePhotosSent: false,
        totalPrice,
        depositAmount,
        depositPaid: false,
        balancePaid: false,
      };

      addBooking(booking);

      // Redirect to Stripe Checkout for deposit payment
      const resp = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          depositAmount,
          bookingId: booking.id,
          customerEmail: data.email,
          customerName: data.studentName,
        }),
      });

      const json = await resp.json();

      if (!resp.ok || !json.url) {
        throw new Error(json.error ?? 'Failed to create Stripe checkout session.');
      }

      window.location.href = json.url;
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <ProgressIndicator currentStep={currentStep} />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {currentStep === 1 && (
            <StepHousing onNext={() => goToStep(2)} />
          )}
          {currentStep === 2 && (
            <StepStorage
              onNext={() => goToStep(3)}
              onBack={() => goToStep(1)}
            />
          )}
          {currentStep === 3 && (
            <StepBoxes
              onNext={() => goToStep(4)}
              onBack={() => goToStep(2)}
            />
          )}
          {currentStep === 4 && (
            <StepPickup
              onNext={() => goToStep(5)}
              onBack={() => goToStep(3)}
            />
          )}
          {currentStep === 5 && (
            <StepDelivery
              onNext={() => goToStep(6)}
              onBack={() => goToStep(4)}
            />
          )}
          {currentStep === 6 && (
            <StepInsurance
              onNext={() => goToStep(7)}
              onBack={() => goToStep(5)}
            />
          )}
          {currentStep === 7 && (
            <StepContact
              onNext={() => goToStep(8)}
              onBack={() => goToStep(6)}
            />
          )}
          {currentStep === 8 && (
            <StepPayment
              onSubmit={handleSubmit}
              onBack={() => goToStep(7)}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </div>
    </FormProvider>
  );
}
