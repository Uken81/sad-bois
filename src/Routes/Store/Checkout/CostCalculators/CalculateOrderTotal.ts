import { CartType } from '../../../RouteWrappers/RootWrapper';
import { ShippingOptionsType } from '../Shipping/shippingOptions';

export interface OrderDetailsType {
  cart?: CartType;
  selectedShipping?: ShippingOptionsType;
  tax?: number;
}

export const calculateOrderTotal = (orderDetails: OrderDetailsType) => {
  const subtotal = orderDetails.cart?.subtotal;
  const shippingPrice = orderDetails.selectedShipping?.shippingPrice;
  const tax = orderDetails.tax;

  if (!subtotal) {
    console.log('Subtotal is null or undefined');
    return null;
  }
  if (!shippingPrice) {
    console.log('Shipping price is null or undefined');
    return null;
  }
  if (!tax) {
    console.log('Tax is undefined null or');
    return null;
  }

  return subtotal + shippingPrice + tax;
};
