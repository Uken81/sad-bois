import * as yup from 'yup';

export const articleTypeSchema = yup.object({
  id: yup.string().required(),
  img: yup.string().required(),
  date: yup.date().required(),
  title: yup.string().required(),
  text: yup.string().required()
});

export const newsTypeSchema = yup.array().of(
  yup.object({
    id: yup.string().required(),
    imgUrl: yup.string().required(),
    date: yup.date().required(),
    title: yup.string().required(),
    text: yup.string().required()
  })
);

export const ordersTypeSchema = yup.array().of(
  yup.object({
    orderId: yup.string().required(),
    customerId: yup.string().required(),
    customerEmail: yup.string().required(),
    shippingDetails: yup.string().required(),
    orderedProducts: yup.string().required(),
    dateOrdered: yup.date().required(),
    shippingType: yup.string().required(),
    totalCost: yup.string().required()
  })
);

export const productTypeSchema = yup.object({
  id: yup.string().required(),
  category: yup.mixed<'clothing' | 'stickers' | 'mugs' | 'misc'>().oneOf(['clothing', 'stickers', 'mugs', 'misc']).required(),
  title: yup.string().required(),
  subtitle: yup.string().required(),
  price: yup.number().required(),
  img: yup.string().required(),
  isFeatured: yup.boolean().required()
});

export const productsTypeSchema = yup.array().of(
  yup.object({
    id: yup.string().required(),
    category: yup.mixed<'clothing' | 'stickers' | 'mugs' | 'misc'>().oneOf(['clothing', 'stickers', 'mugs', 'misc']).required(),
    title: yup.string().required(),
    subtitle: yup.string().required(),
    price: yup.number().required(),
    img: yup.string().required(),
    isFeatured: yup.boolean().required()
  })
);

export const showTypeSchema = yup.object({
  id: yup.string().required(),
  date: yup.date().required(),
  location: yup.string().required(),
  venue: yup.string().required(),
  ticketStatus: yup.mixed<'pending' | 'on sale' | 'postponed' | 'sold-out'>().oneOf(['pending', 'on sale', 'postponed', 'sold-out']).required()
});

export const tourTypeSchema = yup.array().of(
  yup.object({
    id: yup.string().required(),
    date: yup.date().required(),
    location: yup.string().required(),
    venue: yup.string().required(),
    ticketStatus: yup.mixed<'pending' | 'on sale' | 'postponed' | 'sold-out'>().oneOf(['pending', 'on sale', 'postponed', 'sold-out']).required()
  })
);
