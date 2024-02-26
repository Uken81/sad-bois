import { LoaderFunctionArgs } from 'react-router';
import { ProductType } from './productsLoader';
import { cameliseProductData } from './DataLoaderUtils/cameliseProductData';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';

export const productLoader = async (
  loader: LoaderFunctionArgs
): Promise<ProductType | undefined> => {
  try {
    const id = loader.params.id;
    if (typeof id === 'undefined') {
      throw new Error('Product ID was not provided');
    }

    const response = await fetch(`${serverUrl}/products/byId?id=${id}`);
    if (!response.ok) {
      throwDataError(response);
    }

    const selectedProduct: ProductType = await response.json();
    if (!Object.keys(selectedProduct).length) {
      throw new Error('Empty response object');
    }

    const camelisedProduct = await cameliseProductData(selectedProduct);

    return camelisedProduct;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
