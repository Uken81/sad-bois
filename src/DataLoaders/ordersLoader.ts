import { serverUrl } from '../Server/serverUrl';
import { ordersTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { isEmptyArray } from '../Utils/Validation/isEmptyArray';
import { camelizeKeys } from 'humps';
import { validateData } from './DataLoaderUtils/validateData';

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
    const data: OrderType[] = await fetchLoaderData(`${serverUrl}/orders`, requestOptions);

    if (isEmptyArray(data)) {
      return null;
    }

    const camelisedOrders = camelizeKeys(data) as OrderType[];
    const orders = await validateData(camelisedOrders, ordersTypeSchema);

    return orders;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
