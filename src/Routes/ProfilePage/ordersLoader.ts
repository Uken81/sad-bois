import { LoaderFunctionArgs } from 'react-router';
import { OrderType } from './ProfilePage';
import { DataError } from '../../Types/loaderTypes';

export const ordersLoader = async (
  loader: LoaderFunctionArgs
): Promise<OrderType[] | undefined> => {
  const email = loader.params.email;
  console.log('paramEmail: ', email);

  try {
    const response = await fetch(`http://localhost:2001/orders?email=${email}`);
    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching article: ${data.error}`);
      throw new Error(`HTTP error! ${data.error}`);
    }

    const customerOrders: OrderType[] = await response.json();
    console.log('customerOrders', customerOrders);
    return customerOrders;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
