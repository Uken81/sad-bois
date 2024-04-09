import { StateCreator } from 'zustand';
import { ProductCategory } from '../Types/types';

export interface CategorySliceType {
  selectedCategory: ProductCategory;
  assignCategory: (category: ProductCategory) => void;
}

export const createCategorySlice: StateCreator<CategorySliceType> = (set) => ({
  selectedCategory: 'all',
  assignCategory: (category) => set(() => ({ selectedCategory: category }))
});
