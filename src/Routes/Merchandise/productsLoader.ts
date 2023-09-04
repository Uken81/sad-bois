import { Product } from './Products';

export const ProductsLoader: () => Promise<Product> = () => {
  return fetch('http://localhost:2001/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('fetch failed: ', error);
    });
};
