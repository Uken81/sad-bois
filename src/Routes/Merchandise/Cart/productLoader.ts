import { LoaderFunctionArgs } from 'react-router';
import { MerchandiseType } from '../productsLoader';

export const productLoader = async (loader: LoaderFunctionArgs): Promise<MerchandiseType> => {
  const id = loader.params.id;
  const response = await fetch(`http://localhost:2001/products/byId?id=${id}`);
  const selectedProduct = await response.json();
  console.log('selectedPro', selectedProduct);

  return selectedProduct;
};
