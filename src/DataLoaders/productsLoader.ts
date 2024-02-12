import { LoaderFunctionArgs } from 'react-router';
import { DataError } from '../Types/loaderTypes';
import { cameliseProductsData } from './DataLoaderUtils/cameliseProductsData';

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
  camelisedRegularProducts: ProductType[] | undefined;
  camelisedFeaturedProducts: ProductType[] | undefined;
}

export const productsLoader = async (
  loader: LoaderFunctionArgs
): Promise<MerchandiseType | undefined> => {
  try {
    const category = loader.params.category;
    const regular = await fetch(
      `https://sad-bois-backend-637e57975bd5.herokuapp.com/products?category=${category}`
    );
    const featured = await fetch(
      'https://sad-bois-backend-637e57975bd5.herokuapp.com/products/featured'
    );

    if (!regular.ok || !featured.ok) {
      const data: DataError = await regular.json();
      throw new Error(`HTTP error! ${data.error}`);
    }
    const regularProducts: ProductType[] = await regular.json();
    const featuredProducts: ProductType[] = await featured.json();

    const camelisedRegularProducts = await cameliseProductsData(regularProducts);
    const camelisedFeaturedProducts = await cameliseProductsData(featuredProducts);

    return { camelisedRegularProducts, camelisedFeaturedProducts };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
