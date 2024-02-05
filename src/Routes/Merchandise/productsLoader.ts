import { DataError } from '../../Types/loaderTypes';

type Category = 'clothing' | 'sticker' | 'coffee-mug' | 'misc';
export type dbBollean = 0 | 1;

export interface ProductType {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  img: string;
  isFeatured: dbBollean;
}

export interface MerchandiseType {
  regular: ProductType[];
  featured: ProductType[] | null;
}

export const productsLoader = async (): Promise<MerchandiseType | undefined> => {
  try {
    const resRegular = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/products');
    const resFeatured = await fetch(
      'https://sad-bois-backend-637e57975bd5.herokuapp.com/products/featured'
    );

    if (!resRegular.ok) {
      const data: DataError = await resRegular.json();
      throw new Error(`HTTP error! ${data.error}`);
    }

    let featured: ProductType[] | null = null;
    if (resFeatured.ok) {
      featured = await resFeatured.json();
    } else {
      console.error('Failed to fetch featured products');
    }

    const regular: ProductType[] = await resRegular.json();

    return { regular, featured };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
