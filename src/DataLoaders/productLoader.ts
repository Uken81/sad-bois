import { LoaderFunctionArgs } from 'react-router';
import { ProductType } from './productsLoader';
import { cameliseProductData } from './DataLoaderUtils/cameliseProductData';

export const productLoader = async (
  loader: LoaderFunctionArgs
): Promise<ProductType | undefined> => {
  const id = loader.params.id;
  if (typeof id === 'undefined') {
    throw new Error('Product ID was not provided');
  }

  try {
    const response = await fetch(
      `https://sad-bois-backend-637e57975bd5.herokuapp.com/products/byId?id=${id}`
    );

    const selectedProduct: ProductType = await response.json();
    const camelisedProduct = await cameliseProductData(selectedProduct);

    return camelisedProduct;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};