import { LoaderFunctionArgs } from 'react-router';
import { cameliseOrdersData } from './DataLoaderUtils/cameliseOrdersData';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';

export interface OrderType {
  orderId: string;
  customerEmail: string;
  shippingDetails: string;
  orderedProducts: string;
  dateOrdered: Date;
  shippingType: string;
  totalCost: string;
}

export const ordersLoader = async (loader: LoaderFunctionArgs): Promise<OrderType[] | null> => {
  try {
    const email = loader.params.email;
    if (!email) {
      throw new Error('Missing required param: email');
    }

    const response = await fetch(`${serverUrl}/orders?email=${email}`);

    if (!response.ok) {
      await throwDataError(response);
    }

    const customerOrders: OrderType[] = await response.json();
    if (!customerOrders.length) {
      return null;
    }

    const camelisedOrders = await cameliseOrdersData(customerOrders);

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
