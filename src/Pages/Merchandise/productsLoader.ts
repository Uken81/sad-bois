// import { Product } from './Products';

// export const ProductsLoader: () => Promise<{products: Product; featured: Product}> = async () => {
//   const res1 = await fetch('http://localhost:2001/products');
//   const products = await res1.json();

//   const res2 = await fetch('http://localhost:2001/products/featured');
//   const featured = await res2.json();

//   return { products, featured };
// };

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

export interface MerchandiseData {
  regular: Product[];
  featured: Product[];
}

export const ProductsLoader = async (): Promise<MerchandiseData> => {
  const [regular, featured] = await Promise.all([
    fetch('http://localhost:2001/products').then((res) => res.json()),
    fetch('http://localhost:2001/products/featured').then((res) => res.json())
    // fetch(`http://localhost:2001/products/byId?id=${id}`).then((res) => res.json())
  ]).catch((error) => {
    console.log('Error: ', error);
    throw error;
  });

  return { regular, featured };
};

// export const ProductsLoader: () => Promise<Product> = () => {
//   return fetch('http://localhost:2001/products')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log('data', data);
//       return data;
//     })
//     .catch((error) => {
//       console.log('fetch failed: ', error);
//     });
// };
