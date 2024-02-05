import { DataError } from '../Types/loaderTypes';

export interface Article {
  id: string;
  img: string;
  date: Date;
  title: string;
  text: string;
}

export const newsLoader = async (): Promise<Article[] | undefined> => {
  try {
    const response = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/news');
    if (!response.ok) {
      const data: DataError = await response.json();
      throw new Error(`HTTP error! ${data.error}`);
    }

    const news: Article[] = await response.json();
    return news;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error}`);
      // return null;
    }

    console.error('An unexpected error occurred:', error);
  }
};
