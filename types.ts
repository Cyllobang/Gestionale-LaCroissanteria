
// Enums
export enum UserRole {
  ADMIN = 'ADMIN',
  DRIVER = 'DRIVER'
}

export enum PaymentMethod {
  CASH = 'CASH',
  TRANSFER = 'TRANSFER',
  INVOICE = 'INVOICE'
}

export enum PaymentTerm {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY'
}

export enum DeliveryStatus {
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  PARTIAL = 'PARTIAL',
  SKIPPED = 'SKIPPED'
}

export enum DayOfWeek {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN'
}

// Interfaces
export interface Supplier {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string; 
  supplierId: string; // Riferimento al fornitore
  costPrice: number; 
  basePrice: number; 
  vatRate: number; 
  unitsPerCarton: number;
  unitOfMeasure: string; 
  imageUrl?: string;
  isActive: boolean;
}

export interface WeeklyOrder {
  [DayOfWeek.MON]: { [productId: string]: number };
  [DayOfWeek.TUE]: { [productId: string]: number };
  [DayOfWeek.WED]: { [productId: string]: number };
  [DayOfWeek.THU]: { [productId: string]: number };
  [DayOfWeek.FRI]: { [productId: string]: number };
  [DayOfWeek.SAT]: { [productId: string]: number };
  [DayOfWeek.SUN]: { [productId: string]: number };
}

export interface Bar {
  id: string;
  name: string;
  address: string;
  city: string;
  keyNumber: string;
  zone: string;
  phone: string;
  email: string;
  vatNumber: string; 
  fiscalCode: string; 
  paymentTerm: PaymentTerm; 
  notes: string;
  routeOrder: number; 
  customPrices: { [productId: string]: number }; 
  weeklyOrder: WeeklyOrder;
  isActive: boolean;
  lat?: number;
  lng?: number;
}

// Added missing Prospect interface for lead management in MapSection
export interface Prospect {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'NEW' | 'CONTACTED' | 'INTERESTED' | 'REJECTED';
  notes: string;
}

export interface DeliveryRecord {
  id: string;
  date: string; 
  barId: string;
  status: DeliveryStatus;
  items: { [productId: string]: number };
  returns: { [productId: string]: number };
  missing: { [productId: string]: number };
  extras: { [productId: string]: number };
  isPaid: boolean;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  driverNotes?: string;
  timestamp?: number;
}

export type Page = 'dashboard' | 'products' | 'bars' | 'nightly' | 'reports' | 'accounting' | 'suppliers' | 'delivery-notes';
