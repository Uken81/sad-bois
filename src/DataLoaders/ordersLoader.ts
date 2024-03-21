import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
import { cameliseAndValidate } from './DataLoaderUtils/cameliseAndValidate';
import { ordersTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';

export interface OrderType {
  orderId: string;
  customerId: string;
  customerEmail: string;
  shippingDetails: string;
  orderedProducts: string;
  dateOrdered: Date;
  shippingType: string;
  totalCost: string;
}

export const ordersLoader = async (): Promise<OrderType[] | null> => {
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      credentials: 'include'
    };
    const response = await fetch(`${serverUrl}/orders`, requestOptions);

    if (!response.ok) {
      await throwDataError(response);
    }

    const customerOrders: OrderType[] = await response.json();
    if (!customerOrders.length) {
      return null;
    }

    // const camelisedOrders = await cameliseOrdersData(customerOrders);
    const camelisedOrders = await cameliseAndValidate(customerOrders, ordersTypeSchema);
    console.log('camelisedOrders', camelisedOrders);

    return camelisedOrders;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
