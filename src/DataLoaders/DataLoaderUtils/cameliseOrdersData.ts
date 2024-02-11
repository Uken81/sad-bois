import { camelizeKeys } from 'humps';
import { OrderType } from '../ordersLoader';
import * as yup from 'yup';

export const cameliseOrdersData = async (orders: OrderType[]) => {
  const ordersTypeSchema = yup.array().of(
    yup.object({
      orderId: yup.string().required(),
      customerEmail: yup.string().required(),
      shippingDetails: yup.string().required(),
      orderedProducts: yup.string().required(),
      dateOrdered: yup.date().required(),
      shippingType: yup.string().required(),
      totalCost: yup.string().required()
    })
  );

  try {
    const camelisedOrders = camelizeKeys(orders);
    const validatedData = await ordersTypeSchema.validate(camelisedOrders);

    if (!validatedData) {
      throw new Error('validatedData is undefined');
    }

    const newArray: OrderType[] = validatedData.map((item: OrderType) => ({
      orderId: item.orderId,
      customerEmail: item.customerEmail,
      shippingDetails: item.shippingDetails,
      orderedProducts: item.orderedProducts,
      dateOrdered: item.dateOrdered,
      shippingType: item.shippingType,
      totalCost: item.totalCost
    }));

    return newArray;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise products data`);
  }
};
