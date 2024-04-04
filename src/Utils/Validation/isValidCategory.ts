import { ProductCategory } from '../../Routes/Store/Categories/CategorySelector';

export const isValidCategory = (value: string): value is ProductCategory => {
  return ['all', 'clothing', 'stickers', 'mugs', 'misc'].includes(value);
};
