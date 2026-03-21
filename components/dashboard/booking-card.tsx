'use client';

import { useState } from 'react';
import {
  Calendar,
  Package,
  MapPin,
  ChevronDown,
  ChevronUp,
  Shield,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatusTracker } from './status-tracker';
import { BOOKING_STATUS_LABELS, TIME_SLOTS, INSURANCE_EMAIL, INSURANCE_PHONE } from '@/lib/constants';
import { formatPrice } from '@/lib/pricing';
import type { Booking } from '@/lib/types';

interface BookingCardProps {
  booking: Booking;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'delivered':
      return 'bg-accent/10 text-accent border-accent/20';
    case 'in_storage':
    case 'picked_up':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'booked':
      return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
    default:
      return 'bg-muted text-muted-foreground border-muted';
  }
}

export function BookingCard({ booking }: BookingCardProps) {
  const [expanded, setExpanded] = useState(false);

  const balanceDue = booking.totalPrice - booking.depositAmount;
  const needsInsurancePhotos = booking.hasInsurance && !booking.insurancePhotosSent;

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Booking ID</p>
            <CardTitle className="text-xl">{booking.id}</CardTitle>
          </div>
          <Badge variant="outline" className={getStatusColor(booking.status)}>
            {BOOKING_STATUS_LABELS[booking.status]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Info */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Pickup</p>
              <p className="font-medium text-foreground">
                {formatDate(booking.pickupDate)}
              </p>
              <p className="text-sm text-muted-foreground">
                {TIME_SLOTS.find((s) => s.value === booking.pickupTimeSlot)?.label}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Package className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Storage</p>
              <p className="font-medium text-foreground">
                {booking.boxCount} {booking.boxCount === 1 ? 'box' : 'boxes'}
              </p>
              {booking.hasInsurance && (
                <p className="text-sm text-accent">+ Insurance</p>
              )}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">
                {booking.housingType === 'dorm'
                  ? booking.dormName
                  : 'Off-Campus'}
              </p>
              {booking.roomNumber && (
                <p className="text-sm text-muted-foreground">
                  Room {booking.roomNumber}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Alerts */}
        {needsInsurancePhotos && (
          <div className="flex items-start gap-3 rounded-lg bg-yellow-500/10 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
            <div>
              <p className="font-medium text-yellow-600">Insurance photos needed</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Send photos of your packed items to activate coverage:
              </p>
              <p className="mt-1 text-sm text-foreground">
                {INSURANCE_EMAIL} or text {INSURANCE_PHONE}
              </p>
            </div>
          </div>
        )}

        {/* Payment Status */}
        <div className="rounded-lg bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Deposit (20%)</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">
                {formatPrice(booking.depositAmount)}
              </span>
              {booking.depositPaid ? (
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  Paid
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                  Due
                </Badge>
              )}
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Balance</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">
                {formatPrice(balanceDue)}
              </span>
              {booking.balancePaid ? (
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  Paid
                </Badge>
              ) : (
                <Badge variant="outline" className="text-muted-foreground">
                  Due on pickup
                </Badge>
              )}
            </div>
          </div>
          <div className="mt-3 border-t border-border pt-3">
            <div className="flex items-center justify-between font-medium">
              <span className="text-foreground">Total</span>
              <span className="text-foreground">{formatPrice(booking.totalPrice)}</span>
            </div>
          </div>
        </div>

        {/* Expand/Collapse */}
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Hide Details
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Show Details
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        {/* Expanded Details */}
        {expanded && (
          <div className="space-y-6 border-t border-border pt-6">
            {/* Status Tracker */}
            <div>
              <h4 className="mb-4 font-medium text-foreground">Order Status</h4>
              <StatusTracker currentStatus={booking.status} />
            </div>

            {/* Fall Delivery */}
            <div>
              <h4 className="mb-2 font-medium text-foreground">Fall Delivery</h4>
              {booking.fallDeliveryScheduledLater ? (
                <p className="text-muted-foreground">
                  Not scheduled yet. We&apos;ll contact you in August.
                </p>
              ) : booking.fallDeliveryDate ? (
                <p className="text-foreground">
                  Scheduled for {formatDate(booking.fallDeliveryDate)}
                </p>
              ) : (
                <p className="text-muted-foreground">Not scheduled</p>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-2 font-medium text-foreground">Contact Info</h4>
              <div className="space-y-1 text-sm">
                <p className="text-foreground">{booking.studentName}</p>
                <p className="text-muted-foreground">{booking.email}</p>
                <p className="text-muted-foreground">{booking.phone}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
