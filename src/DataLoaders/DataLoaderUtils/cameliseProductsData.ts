import { camelizeKeys } from 'humps';
import * as yup from 'yup';
import { ProductType } from '../productsLoader';

export const cameliseProductsData = async (products: ProductType[]) => {
  const productsTypeSchema = yup.array().of(
    yup.object({
      id: yup.string().required(),
      category: yup
        .mixed<'clothing' | 'sticker' | 'coffee-mug' | 'misc'>()
        .oneOf(['clothing', 'sticker', 'coffee-mug', 'misc'])
        .required(),
      title: yup.string().required(),
      subtitle: yup.string().required(),
      price: yup.number().required(),
      img: yup.string().required(),
      isFeatured: yup.boolean().required()
    })
  );

  try {
    const camelisedProducts = camelizeKeys(products);
    const validatedData = await productsTypeSchema.validate(camelisedProducts);

    if (!validatedData) {
      throw new Error('validatedData is undefined');
    }

    const newArray: ProductType[] = validatedData.map((item: ProductType) => ({
      id: item.id,
      category: item.category,
      title: item.title,
      subtitle: item.subtitle,
      price: item.price,
      img: item.img,
      isFeatured: item.isFeatured
    }));

    return newArray;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise products data`);
  }
};
