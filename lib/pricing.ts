import type { FurnitureItem } from './types';

export const PRICE_PER_BOX = 59.99;
export const INSURANCE_PRICE = 49.99;
export const DEPOSIT_AMOUNT = 10.00; // Fixed $10 deposit

export function calculateFurniturePrice(items: FurnitureItem[]): number {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

export function calculateTotalBoxes(
  standardBoxes: number,
  furnitureItems: FurnitureItem[]
): number {
  return standardBoxes;
}

export function calculateStoragePrice(totalBoxes: number): number {
  return totalBoxes * PRICE_PER_BOX;
}

export function calculateTotalPrice(
  totalBoxes: number,
  hasInsurance: boolean,
  furnitureItems: FurnitureItem[] = []
): number {
  const storagePrice = calculateStoragePrice(totalBoxes);
  const furniturePrice = calculateFurniturePrice(furnitureItems);
  const insurancePrice = hasInsurance ? INSURANCE_PRICE : 0;
  return storagePrice + furniturePrice + insurancePrice;
}

export function calculateDeposit(totalPrice: number): number {
  return 10.00; // Fixed $10 deposit
}

export function calculateBalance(
  totalPrice: number,
  depositAmount: number
): number {
  return totalPrice - depositAmount;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
