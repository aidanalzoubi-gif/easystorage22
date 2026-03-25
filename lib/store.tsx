'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Booking, BookingStatus, PaymentMethod } from './types';
import { generateMockBookings } from './mock-data';

const STORAGE_KEY = 'ub-storage-bookings';

interface StoreContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  updateBookingStatus: (id: string, status: BookingStatus) => void;
  confirmPayment: (
    id: string,
    type: 'deposit' | 'balance',
    method: PaymentMethod
  ) => void;
  getBookingById: (id: string) => Booking | undefined;
  getBookingsByEmail: (email: string) => Booking[];
  isLoading: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setBookings(JSON.parse(stored));
      } catch {
        // If parse fails, initialize with mock data
        const mockData = generateMockBookings();
        setBookings(mockData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
      }
    } else {
      // Initialize with mock data for demo
      const mockData = generateMockBookings();
      setBookings(mockData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever bookings change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }
  }, [bookings, isLoading]);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  const updateBooking = (id: string, updates: Partial<Booking>) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updates } : b))
    );
  };

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    updateBooking(id, { status });
  };

  const confirmPayment = (
    id: string,
    type: 'deposit' | 'balance',
    method: PaymentMethod
  ) => {
    if (type === 'deposit') {
      updateBooking(id, {
        depositPaid: true,
        depositPaymentMethod: method,
        status: 'deposit_paid',
      });
    } else {
      updateBooking(id, {
        balancePaid: true,
        balancePaymentMethod: method,
      });
    }
  };

  const getBookingById = (id: string) => {
    return bookings.find((b) => b.id === id);
  };

  const getBookingsByEmail = (email: string) => {
    return bookings.filter(
      (b) => b.email.toLowerCase() === email.toLowerCase()
    );
  };

  return (
    <StoreContext.Provider
      value={{
        bookings,
        addBooking,
        updateBooking,
        updateBookingStatus,
        confirmPayment,
        getBookingById,
        getBookingsByEmail,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

export function generateBookingId(): string {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(
    now.getDate()
  ).padStart(2, '0')}`;

  // Use cryptographically strong randomness when available.
  let randomPart = '';
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
    randomPart = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('').toUpperCase();
  } else {
    randomPart = Math.random().toString(36).slice(2, 10).toUpperCase();
  }

  return `UB-STO-${datePart}-${randomPart}`;
}
