import { DataError } from '../../Types/loaderTypes';
import { Article } from '../News/DataLoaders/newsLoader';
import { Tour } from '../Tour/tourLoader';

export interface HomepageLoader {
  latestNewsData: Article[];
  latestShowsData: Tour[];
}

export const homepageLoader = async () => {
  const latestNewsData = await latestNewsLoader();
  const latestShowsData = await latestShowLoader();

  return { latestNewsData, latestShowsData };
};

const latestNewsLoader = async (): Promise<Article[] | undefined> => {
  try {
    const response = await fetch('http://localhost:2001/news/latest');
    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching latest news: ${data.error}`);
      return;
    }

    const latest: Article[] = await response.json();
    return latest;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};

export const latestShowLoader = async () => {
  try {
    const response = await fetch('http://localhost:2001/tour/latest');
    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching latest news: ${data.error}`);
      return;
    }

    const shows = response.json();
    return shows;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
