import { LoaderFunctionArgs } from 'react-router';
import { MerchandiseData } from '../productsLoader';

export const itemLoader = async (loader: LoaderFunctionArgs): Promise<MerchandiseData> => {
  const id = loader.params.id;
  const response = await fetch(`http://localhost:2001/products/byId?id=${id}`);
  const selectedProduct = await response.json();

  return selectedProduct;
};
