type Category = 'clothing' | 'sticker' | 'coffee-mug' | 'misc';

export interface ProductType {
  //could add available countries, member exclusive
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  applyMemberDiscount: boolean;
  img: string;
}

export interface MerchandiseType {
  regular: ProductType[];
  featured: ProductType[] | null;
}

export const productsLoader = async (): Promise<MerchandiseType | undefined> => {
  try {
    const resRegular = await fetch('http://localhost:2001/products');
    const resFeatured = await fetch('http://localhost:2001/products/featured');

    if (!resRegular.ok) {
      throw new Error('Failed to fetch regular products');
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
