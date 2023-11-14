import { CartType } from '../../../../Context/CartContext';
import { ShippingOptionsType } from '../shippingOptions';

export const calculateTax = (cart: CartType | undefined, selectedShipping: ShippingOptionsType) => {
  const subtotal = cart?.subtotal;
  const shippingPrice = selectedShipping?.price;

  if (subtotal === undefined) {
    console.log('Cart subtotal is undefined');
    return;
  }

  if (shippingPrice === undefined) {
    console.log('Shipping price is undefined');
    return;
  }

  const total = subtotal + shippingPrice;

  const tax = total * 0.1;
  console.log('total tax: ', tax);
  return tax;
};
