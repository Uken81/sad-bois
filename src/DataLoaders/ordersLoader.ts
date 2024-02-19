import { LoaderFunctionArgs } from 'react-router';
import { DataError } from '../Types/loaderTypes';
import { cameliseOrdersData } from './DataLoaderUtils/cameliseOrdersData';
import { serverUrl } from '../Server/serverUrl';
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
    const response = await fetch(`${serverUrl}/orders?email=${email}`);

    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching orders: ${data.error}`);
      throw new Error(`HTTP error! ${data.error}`);
    }

    const customerOrders: OrderType[] = await response.json();
    if (customerOrders.length === 0) {
      return null;
    }

    const camelisedOrders = await cameliseOrdersData(customerOrders);

    return camelisedOrders;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return null;
    }

    console.error('An unexpected error occurred:', error);
    return null;
  }
};
