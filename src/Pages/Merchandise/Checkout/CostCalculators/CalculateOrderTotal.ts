import { CartType } from '../../../../Context/CartContext';
import { ShippingOptionsType } from '../shippingOptions';

export interface OrderDetailsType {
  cart?: CartType;
  selectedShipping?: ShippingOptionsType;
  tax?: number;
}

export const calculateOrderTotal = (orderDetails: OrderDetailsType) => {
  const subtotal = orderDetails.cart?.subtotal;
  const shippingPrice = orderDetails.selectedShipping?.price;
  const tax = orderDetails.tax;
  console.log('orderdeets', subtotal, shippingPrice, tax);
  if (subtotal === undefined) {
    console.log('Subtotal is undefined');
    return;
  }
  if (shippingPrice === undefined) {
    console.log('Shipping price is undefined');
    return;
  }
  if (tax === undefined) {
    console.log('Tax is undefined');
    return;
  }

  return subtotal + shippingPrice + tax;
};
