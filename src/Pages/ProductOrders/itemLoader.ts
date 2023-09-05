import { MerchandiseData } from '../Merchandise/productsLoader';

export const itemLoader = async (id: string): Promise<MerchandiseData> => {
  const response = await fetch(`http://localhost:2001/products/byId?id=${id}`);
  const selectedProduct = await response.json();

  return selectedProduct;
};
