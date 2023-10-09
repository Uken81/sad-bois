type Category = 'clothing' | 'sticker' | 'coffee-mug' | 'misc';

export interface Product {
  //could add available countries, member exclusive
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  applyMemberDiscount: boolean;
  img: string;
}

export interface Merchandise {
  regular: Product[];
  featured: Product[];
}

export const productsLoader = async (): Promise<Merchandise> => {
  const [regular, featured] = await Promise.all([
    fetch('http://localhost:2001/products').then((res) => res.json()),
    fetch('http://localhost:2001/products/featured').then((res) => res.json())
  ]).catch((error) => {
    console.log('Error: ', error);
    throw error;
  });

  return { regular, featured };
};
