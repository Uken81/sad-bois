import { camelizeKeys } from 'humps';
import { Article } from '../newsLoader';
import * as yup from 'yup';

export const cameliseArticleData = async (article: Article) => {
  const articleTypeSchema = yup.object({
    id: yup.string().required(),
    img: yup.string().required(),
    date: yup.date().required(),
    title: yup.string().required(),
    text: yup.string().required()
  });

  try {
    const camelisedArticle = camelizeKeys(article);
    const validatedData = await articleTypeSchema.validate(camelisedArticle);

    if (!validatedData) {
      throw new Error('validatedData is undefined');
    }

    const newObject: Article = {
      id: validatedData.id,
      img: validatedData.img,
      date: validatedData.date,
      title: validatedData.title,
      text: validatedData.text
    };

    return newObject;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise tour data`);
  }
};
