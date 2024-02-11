import { camelizeKeys } from 'humps';
import { Article } from '../newsLoader';
import * as yup from 'yup';

export const cameliseNewsData = async (news: Article[]) => {
  const articleTypeSchema = yup.array().of(
    yup.object({
      id: yup.string().required(),
      img: yup.string().required(),
      date: yup.date().required(),
      title: yup.string().required(),
      text: yup.string().required()
    })
  );

  try {
    const camelisedNews = camelizeKeys(news);
    const validatedData = await articleTypeSchema.validate(camelisedNews);

    if (!validatedData) {
      throw new Error('validatedData is undefined');
    }

    const newArray: Article[] = validatedData.map((item: Article) => ({
      id: item.id,
      img: item.img,
      date: item.date,
      title: item.title,
      text: item.text
    }));

    return newArray;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise news data`);
  }
};
