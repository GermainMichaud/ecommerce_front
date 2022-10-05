export type EmptyObject = Record<string, never>;

export interface IVariant {
  _id: string;
  name: string;
  description: string;
  product: number;
  image: string;
  color: { _id: string; name: string; code: string };
  size: { _id: string; name: string; code: string };
  quantity: number;
  price: number;
  sku: string;
  isDefault?: boolean;
}
export interface IProduct {
  _id: string;
  sku: string;
  name: string;
  quantity: number;
  slug: string;
  description?: string;
  image: string;
  images?: string[];
  seller?: Record<string, any>;
  rating: number;
  colors: { _id: string; name: string; code: string }[];
  sizes: { _id: string; name: string; code: string }[];
  variants?: IVariant[];
  price_start: number;
}

export interface OrderItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  product: string;
  variant: string;
  color: string;
  size: string;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  address: ShippingAddress;
}

export interface Order {
  _id: string;
  user: User;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string | null;
  isDelivered: boolean;
  deliveredAt: string | null;
  createdAt: string;
  updatedAt: string;
}
