export type BookingStatus =
  | 'booked'
  | 'deposit_paid'
  | 'boxes_delivered'
  | 'packed'
  | 'pickup_scheduled'
  | 'picked_up'
  | 'in_storage'
  | 'delivery_scheduled'
  | 'delivered';

export type PaymentMethod = 'zelle' | 'venmo' | 'stripe' | 'cash';

export type HousingType = 'dorm' | 'on-campus-apartment' | 'off-campus';

export type TimeSlot = '9am-12pm' | '12pm-3pm' | '3pm-6pm';

export interface FurnitureItem {
  type: string;
  price: number;
  quantity: number;
}

export interface Booking {
  id: string;
  status: BookingStatus;
  createdAt: string;

  // Student Info
  studentName: string;
  email: string;
  phone: string;

  // Housing
  housingType: HousingType;
  dormName?: string;
  apartmentName?: string;
  address?: string;
  roomNumber?: string;
  floor?: number;
  hasElevator?: boolean;  ubPersonNumber?: string;
  // Storage
  boxCount: number;
  furnitureItems: FurnitureItem[];
  cardboardBoxesRequested: number;

  // Scheduling
  boxDeliveryDate?: string;
  pickupDate: string;
  pickupTimeSlot: TimeSlot;

  // Fall Delivery Address / Housing-like selection
  fallDeliveryHousingType: HousingType;
  fallDeliveryDormName?: string;
  fallDeliveryApartmentName?: string;
  fallDeliveryAddress?: string;
  fallDeliveryRoomNumber?: string;
  fallDeliveryFloor?: number;
  fallDeliveryHasElevator?: boolean;

  fallDeliveryDate?: string;
  fallDeliveryScheduledLater: boolean;

  // Insurance
  hasInsurance: boolean;
  insurancePhotosSent: boolean;

  // Payment
  totalPrice: number;
  depositAmount: number;
  depositPaid: boolean;
  depositPaymentMethod?: PaymentMethod;
  balancePaid: boolean;
  balancePaymentMethod?: PaymentMethod;
}

export interface BookingFormData {
  // Step 1: Housing
  housingType: HousingType;
  dormName: string;
  apartmentName: string;
  address: string;
  roomNumber: string;
  floor: number;
  hasElevator: boolean;

  // Step 2: Storage
  boxCount: number;
  furnitureItems: FurnitureItem[];

  // Step 3: Box Delivery
  cardboardBoxesRequested: number;
  boxDeliveryDate: string;

  // Step 4: Pickup
  pickupDate: string;
  pickupTimeSlot: TimeSlot;

  // Step 5: Fall Delivery
  fallDeliveryHousingType: HousingType;
  fallDeliveryDormName: string;
  fallDeliveryApartmentName: string;
  fallDeliveryAddress: string;
  fallDeliveryRoomNumber: string;
  fallDeliveryFloor: number;
  fallDeliveryHasElevator: boolean;
  fallDeliveryDate: string;
  fallDeliveryScheduledLater: boolean;

  // Step 6: Insurance
  hasInsurance: boolean;

  // Step 7: Contact
  studentName: string;
  email: string;
  phone: string;
  ubPersonNumber: string;

  // Step 8: Payment
  paymentMethod: PaymentMethod;
}
