import { LoaderFunctionArgs } from 'react-router';
import { cameliseProductsData } from './DataLoaderUtils/cameliseProductsData';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';

type Category = 'clothing' | 'sticker' | 'coffee-mug' | 'misc';

export interface ProductType {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  img: string;
  isFeatured: boolean;
}

export interface MerchandiseType {
  camelisedRegularProducts: ProductType[] | null;
  camelisedFeaturedProducts: ProductType[] | null;
}

export const productsLoader = async (
  loader: LoaderFunctionArgs
): Promise<MerchandiseType | undefined> => {
  try {
    const category = loader.params.category;
    const regular = await fetch(`${serverUrl}/products?category=${category}`);
    const featured = await fetch(`${serverUrl}/products/featured`);

    if (!regular.ok) {
      await throwDataError(regular);
    }

    if (!featured.ok) {
      await throwDataError(featured);
    }

    const regularProducts: ProductType[] = await regular.json();
    const featuredProducts: ProductType[] = await featured.json();

    let camelisedRegularProducts = await cameliseProductsData(regularProducts);
    if (!camelisedRegularProducts?.length) {
      camelisedRegularProducts = null;
    }

    let camelisedFeaturedProducts = await cameliseProductsData(featuredProducts);
    if (!camelisedFeaturedProducts?.length) {
      camelisedFeaturedProducts = null;
    }

    return { camelisedRegularProducts, camelisedFeaturedProducts };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
