import { LoaderFunctionArgs } from 'react-router';
import { ProductType } from './productsLoader';
import { serverUrl } from '../Server/serverUrl';
import { validateData } from './DataLoaderUtils/validateData';
import { productTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { validateParams } from './DataLoaderUtils/validateParams';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { isEmptyObject } from '../Utils/Validation/isEmptyObject';
import { camelizeKeys } from 'humps';

export const productLoader = async (loader: LoaderFunctionArgs): Promise<ProductType> => {
  try {
    const id = validateParams(loader.params.id);

    const data: ProductType = await fetchLoaderData(`${serverUrl}/products/byId?id=${id}`);
    if (isEmptyObject(data)) {
      throw new Error('Error: Empty response.');
    }

    const camelisedProduct = camelizeKeys(data) as ProductType;
    const orders = await validateData(camelisedProduct, productTypeSchema);

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
