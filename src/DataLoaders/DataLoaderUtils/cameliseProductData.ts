import { camelizeKeys } from 'humps';
import { ProductType } from '../productsLoader';
import * as yup from 'yup';

export const cameliseProductData = async (product: ProductType) => {
  const productTypeSchema = yup.object({
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
  });

  try {
    const camelisedProduct = camelizeKeys(product);
    const validatedData = await productTypeSchema.validate(camelisedProduct);

    if (!validatedData) {
      throw new Error('validatedData is undefined');
    }

    const newObject: ProductType = {
      id: validatedData.id,
      category: validatedData.category,
      title: validatedData.title,
      subtitle: validatedData.subtitle,
      price: validatedData.price,
      img: validatedData.img,
      isFeatured: validatedData.isFeatured
    };

    return newObject;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise products data`);
  }
};
