import { CartType } from '../../../RouteWrappers/RootWrapper';
import { ShippingOptionsType } from '../Shipping/shippingOptions';

export const calculateTax = (cart: CartType | null, selectedShipping: ShippingOptionsType) => {
  const subtotal = cart?.subtotal;
  const shippingPrice = selectedShipping?.shippingPrice;

  if (!subtotal) {
    console.error('Cart subtotal is null or undefined');
    return;
  }

  if (!shippingPrice) {
    console.error('Shipping price is null or undefined');
    return;
  }

  const total = subtotal + shippingPrice;

  const tax = total * 0.1;
  return tax;
};
