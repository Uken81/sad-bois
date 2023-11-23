import { DataError } from '../../../Types/loaderTypes';

export interface Article {
  id: string;
  img: string;
  date: Date;
  title: string;
  text: string;
}

export const newsLoader = async (): Promise<Article[] | undefined> => {
  try {
    const response = await fetch('http://localhost:2001/news');
    console.log('res', response);
    if (!response.ok) {
      const data: DataError = await response.json();
      throw new Error(`HTTP error! ${data.error}`);
    }

    const news: Article[] = await response.json();
    return news;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
