import { LoaderFunctionArgs } from 'react-router';
import { MerchandiseType } from './productsLoader';

export const productLoader = async (loader: LoaderFunctionArgs): Promise<MerchandiseType> => {
  const id = loader.params.id;
  const response = await fetch(
    `https://sad-bois-backend-637e57975bd5.herokuapp.com/products/byId?id=${id}`
  );
  const selectedProduct = await response.json();
  console.log('selectedPro', selectedProduct);

  return selectedProduct;
};
