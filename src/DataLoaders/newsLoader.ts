import { serverUrl } from '../Server/serverUrl';
import { isEmptyArray } from '../Utils/Validation/isEmptyArray';
import { newsTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { camelizeKeys } from 'humps';
import { validateData } from './DataLoaderUtils/validateData';

export interface Article {
  id: string;
  img: string;
  date: Date;
  title: string;
  text: string;
}

export const newsLoader = async (): Promise<Article[] | null> => {
  try {
    const data: Article[] = await fetchLoaderData(`${serverUrl}/news`);

    if (isEmptyArray(data)) {
      return null;
    }

    const camelisedData = camelizeKeys(data) as Article[];
    const news = await validateData(camelisedData, newsTypeSchema);

    return news;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred: ', error);
    throw new Error(`${error}`);
  }
};
