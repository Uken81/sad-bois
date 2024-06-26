import { ShippingOptionsType } from '../../../../Types/types';

export const shippingOptions: ShippingOptionsType[] = [
  {
    type: 'domestic/standard',
    name: 'standard domestic shipping',
    shippingPrice: 10.99
  },
  {
    type: 'domestic/express',
    name: 'express domestic shipping',
    shippingPrice: 15.99
  }
];
