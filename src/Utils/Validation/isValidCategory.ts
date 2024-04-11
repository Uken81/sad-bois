import { ProductCategory } from '../../Types/types';

export const isValidCategory = (value: string): value is ProductCategory => {
  return ['all', 'clothing', 'stickers', 'mugs', 'misc'].includes(value);
};
