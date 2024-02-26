import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
import { cameliseNewsData } from './DataLoaderUtils/cameliseNewsData';

export interface Article {
  id: string;
  img: string;
  date: Date;
  title: string;
  text: string;
}

export const newsLoader = async (): Promise<Article[] | null | undefined> => {
  try {
    const response = await fetch(`${serverUrl}/news`);
    if (!response.ok) {
      await throwDataError(response);
    }

    const news: Article[] = await response.json();
    if (!news.length) {
      return null;
    }

    const camelisedNews = await cameliseNewsData(news);

    return camelisedNews;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred: ', error);
    throw new Error(`${error}`);
  }
};
