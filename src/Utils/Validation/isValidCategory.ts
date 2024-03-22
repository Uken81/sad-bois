import { Category } from '../../DataLoaders/productsLoader';

export const isValidCategory = (value: string): value is Category => {
  return ['all', 'clothing', 'sticker', 'coffee-mug', 'misc'].includes(value);
};
