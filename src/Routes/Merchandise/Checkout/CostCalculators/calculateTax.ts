import { CartType } from '../../../RouteWrappers/storeWrapper';
import { ShippingOptionsType } from '../shippingOptions';

export const calculateTax = (cart: CartType | null, selectedShipping: ShippingOptionsType) => {
  const subtotal = cart?.subtotal;
  const shippingPrice = selectedShipping?.shippingPrice;

  if (!subtotal) {
    console.log('Cart subtotal is null or undefined');
    return;
  }

  if (!shippingPrice) {
    console.log('Shipping price is null or undefined');
    return;
  }

  const total = subtotal + shippingPrice;

  const tax = total * 0.1;
  return tax;
};
