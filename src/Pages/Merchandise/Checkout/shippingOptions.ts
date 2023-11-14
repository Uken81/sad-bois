export interface ShippingOptionsType {
  type: string;
  name: string;
  price: number;
}

export const shippingOptions: ShippingOptionsType[] = [
  {
    type: 'domestic/standard',
    name: 'standard domestic shipping',
    price: 10.99
  },
  {
    type: 'domestic/express',
    name: 'express domestic shipping',
    price: 15.99
  }
];
