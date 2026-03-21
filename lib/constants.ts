export const UB_RESIDENCE_HALLS = [
  'Goodyear Hall',
  'Clement Hall',
  'Greiner Hall',
  'Red Jacket',
  'Fargo',
  'Richmond',
  'Evans',
  'Spaulding',
  'Wilkeson',
  'Lehman',
  'Roosevelt',
  'Dewey',
  'Clinton',
] as const;

export const UB_ON_CAMPUS_APARTMENTS = [
  'Flint Village',
  'South Lake Village',
  'Hadley Village',
  'Creekside Village',
  'Flickinger Court',
] as const;

export const FURNITURE_OPTIONS = [
  { type: 'TV', price: 59.99 },
  { type: 'Mini Fridge', price: 69.99 },
  { type: 'Items Larger than Standard Box', price: 79.99 },
] as const;

export const TIME_SLOTS = [
  { value: '9am-12pm', label: '9:00 AM - 12:00 PM' },
  { value: '12pm-3pm', label: '12:00 PM - 3:00 PM' },
  { value: '3pm-6pm', label: '3:00 PM - 6:00 PM' },
] as const;

export const PAYMENT_METHODS = [
  {
    value: 'zelle',
    label: 'Zelle',
    description: 'Send to: ubstorage@email.com',
  },
  {
    value: 'venmo',
    label: 'Venmo',
    description: '@UB-Storage',
  },
  {
    value: 'stripe',
    label: 'Card / Apple Pay',
    description: 'Pay securely online',
  },
] as const;

export const BOOKING_STATUS_LABELS: Record<string, string> = {
  booked: 'Booked',
  deposit_paid: 'Deposit Paid',
  boxes_delivered: 'Boxes Delivered',
  packed: 'Packed & Ready',
  pickup_scheduled: 'Pickup Scheduled',
  picked_up: 'Picked Up',
  in_storage: 'In Storage',
  delivery_scheduled: 'Delivery Scheduled',
  delivered: 'Delivered',
};

export const BOOKING_STATUS_ORDER: string[] = [
  'booked',
  'deposit_paid',
  'boxes_delivered',
  'packed',
  'pickup_scheduled',
  'picked_up',
  'in_storage',
  'delivery_scheduled',
  'delivered',
];

// Contact info for insurance photos
export const INSURANCE_EMAIL = 'photos@ubstorage.com';
export const INSURANCE_PHONE = '(716) 555-0123';

// May 2026 pickup dates (weekdays only for example)
export const AVAILABLE_PICKUP_DATES = [
  '2026-05-06',
  '2026-05-07',
  '2026-05-08',
  '2026-05-09',
  '2026-05-10',
  '2026-05-11',
  '2026-05-12',
  '2026-05-13',
  '2026-05-14',
  '2026-05-15',
  '2026-05-16',
  '2026-05-17',
];

// Box delivery dates (a few days before pickup window)
export const AVAILABLE_BOX_DELIVERY_DATES = [
  '2026-05-02',
  '2026-05-03',
  '2026-05-04',
  '2026-05-05',
  '2026-05-06',
  '2026-05-07',
  '2026-05-08',
  '2026-05-09',
  '2026-05-10',
  '2026-05-11',
  '2026-05-12',
  '2026-05-13',
  '2026-05-14',
  '2026-05-15',
  '2026-05-16',
];

// Fall delivery dates (August 2026)
export const AVAILABLE_FALL_DELIVERY_DATES = [
  '2026-08-18',
  '2026-08-19',
  '2026-08-20',
  '2026-08-21',
  '2026-08-22',
  '2026-08-23',
  '2026-08-24',
  '2026-08-25',
  '2026-08-26',
];
