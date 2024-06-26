import { ProductCategory } from '../Types/types';
import { Lens, persistOptions } from '@dhmk/zustand-lens';
import { Store } from './useStore';

export type CategoryState = {
  selectedCategory: ProductCategory;
  assignCategory: (category: ProductCategory) => void;
};

export const categoryState: Lens<CategoryState, Store> = (set) => ({
  selectedCategory: 'all',
  assignCategory: (category) => set(() => ({ selectedCategory: category })),
  ...persistOptions({
    save: (state) => state,
    load: (persistedState) => persistedState
  })
});
