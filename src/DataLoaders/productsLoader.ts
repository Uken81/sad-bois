import { LoaderFunctionArgs } from 'react-router';
import { serverUrl } from '../Server/serverUrl';
import { productsTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { validateParams } from './DataLoaderUtils/validateParams';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { camelizeKeys } from 'humps';
import { isEmptyArray } from '../Utils/Validation/isEmptyArray';
import { validateData } from './DataLoaderUtils/validateData';
import { isValidCategory } from '../Utils/Validation/isValidCategory';
import { ProductCategory } from '../Routes/Store/Categories/CategorySelector';

// export type Category = 'all' | 'clothing' | 'sticker' | 'coffee-mug' | 'misc';

export interface ProductType {
  id: string;
  category: ProductCategory;
  title: string;
  subtitle: string;
  price: number;
  img: string;
  isFeatured: boolean;
}

export interface MerchandiseType {
  validatedRegularProducts: ProductType[] | null;
  validatedFeaturedProducts: ProductType[] | null;
}

export const productsLoader = async (loader: LoaderFunctionArgs): Promise<MerchandiseType | null> => {
  try {
    const category = validateParams(loader.params.category);
    if (!isValidCategory(category)) {
      throw new Error(`Invalid category parameter '${category}' passed.`);
    }

    const regularData: ProductType[] = await fetchLoaderData(`${serverUrl}/products?category=${category}`);

    if (isEmptyArray(regularData)) {
      throw new Error('Error: Empty response.');
    }

    const camelisedRegularProducts = camelizeKeys(regularData) as ProductType[];
    const validatedRegularProducts = await validateData(camelisedRegularProducts, productsTypeSchema);

    const featuredData: ProductType[] = await fetchLoaderData(`${serverUrl}/products/featured`);

    const camelisedFeaturedProducts = camelizeKeys(featuredData) as ProductType[];
    let validatedFeaturedProducts: ProductType[] | null = await validateData(camelisedFeaturedProducts, productsTypeSchema);

    if (isEmptyArray(featuredData)) {
      validatedFeaturedProducts = null;
    }

    return { validatedRegularProducts, validatedFeaturedProducts };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
