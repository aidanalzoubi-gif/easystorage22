'use client';

import { useState } from 'react';
import {
  Search,
  ChevronDown,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BOOKING_STATUS_LABELS, BOOKING_STATUS_ORDER } from '@/lib/constants';
import { formatPrice } from '@/lib/pricing';
import { useStore } from '@/lib/store';
import type { Booking, BookingStatus, PaymentMethod } from '@/lib/types';

interface BookingsTableProps {
  bookings: Booking[];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
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

export function BookingsTable({ bookings: initialBookings }: BookingsTableProps) {
  const { updateBookingStatus, confirmPayment } = useStore();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredBookings = initialBookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(search.toLowerCase()) ||
      booking.studentName.toLowerCase().includes(search.toLowerCase()) ||
      booking.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (bookingId: string, newStatus: BookingStatus) => {
    updateBookingStatus(bookingId, newStatus);
  };

  const handleConfirmDeposit = (bookingId: string, method: PaymentMethod) => {
    confirmPayment(bookingId, 'deposit', method);
  };

  const handleConfirmBalance = (bookingId: string, method: PaymentMethod) => {
    confirmPayment(bookingId, 'balance', method);
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by ID, name, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {BOOKING_STATUS_ORDER.map((status) => (
              <SelectItem key={status} value={status}>
                {BOOKING_STATUS_LABELS[status]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Boxes</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No bookings found.
                </TableCell>
              </TableRow>
            ) : (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">
                        {booking.studentName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {booking.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-foreground">
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
                  </TableCell>
                  <TableCell>{formatDate(booking.pickupDate)}</TableCell>
                  <TableCell>
                    {booking.boxCount}
                    {booking.hasInsurance && (
                      <span className="ml-1 text-xs text-accent">+ins</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusColor(booking.status)}
                    >
                      {BOOKING_STATUS_LABELS[booking.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {booking.depositPaid ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : (
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {formatPrice(booking.totalPrice)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                          Update Status
                        </DropdownMenuLabel>
                        {BOOKING_STATUS_ORDER.map((status) => (
                          <DropdownMenuItem
                            key={status}
                            onClick={() =>
                              handleStatusChange(booking.id, status as BookingStatus)
                            }
                            className={
                              booking.status === status ? 'bg-muted' : ''
                            }
                          >
                            {BOOKING_STATUS_LABELS[status]}
                          </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                          Confirm Payment
                        </DropdownMenuLabel>
                        {!booking.depositPaid && (
                          <>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmDeposit(booking.id, 'cash')
                              }
                            >
                              Deposit: Cash
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmDeposit(booking.id, 'zelle')
                              }
                            >
                              Deposit: Zelle
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmDeposit(booking.id, 'venmo')
                              }
                            >
                              Deposit: Venmo
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmDeposit(booking.id, 'stripe')
                              }
                            >
                              Deposit: Card
                            </DropdownMenuItem>
                          </>
                        )}
                        {booking.depositPaid && !booking.balancePaid && (
                          <>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmBalance(booking.id, 'cash')
                              }
                            >
                              Balance: Cash
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmBalance(booking.id, 'zelle')
                              }
                            >
                              Balance: Zelle
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmBalance(booking.id, 'venmo')
                              }
                            >
                              Balance: Venmo
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleConfirmBalance(booking.id, 'stripe')
                              }
                            >
                              Balance: Card
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {filteredBookings.length} of {initialBookings.length} bookings
      </p>
    </div>
  );
}
