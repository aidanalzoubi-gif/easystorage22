'use client';

import {
  Package,
  DollarSign,
  Truck,
  CalendarCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/pricing';
import type { Booking } from '@/lib/types';

interface StatsCardsProps {
  bookings: Booking[];
}

export function StatsCards({ bookings }: StatsCardsProps) {
  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((sum, b) => sum + b.totalPrice, 0);
  const paidDeposits = bookings.filter((b) => b.depositPaid).length;
  const pendingPickups = bookings.filter(
    (b) => b.status === 'deposit_paid' || b.status === 'boxes_delivered' || b.status === 'packed' || b.status === 'pickup_scheduled'
  ).length;
  const inStorage = bookings.filter((b) => b.status === 'in_storage' || b.status === 'picked_up').length;

  const stats = [
    {
      title: 'Total Bookings',
      value: totalBookings.toString(),
      description: `${paidDeposits} deposits paid`,
      icon: Package,
    },
    {
      title: 'Total Revenue',
      value: formatPrice(totalRevenue),
      description: 'All bookings',
      icon: DollarSign,
    },
    {
      title: 'Pending Pickups',
      value: pendingPickups.toString(),
      description: 'Ready for pickup',
      icon: Truck,
    },
    {
      title: 'In Storage',
      value: inStorage.toString(),
      description: 'Items stored',
      icon: CalendarCheck,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
