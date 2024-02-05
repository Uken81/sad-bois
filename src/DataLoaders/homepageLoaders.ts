import { DataError } from '../Types/loaderTypes';
import { Article } from './newsLoader';
import { TourType } from './tourLoader';

export interface HomepageLoader {
  latestNewsData: Article[];
  latestShowsData: TourType[];
}

export const homepageLoader = async () => {
  const latestNewsData = await latestNewsLoader();
  const latestShowsData = await latestShowLoader();

  return { latestNewsData, latestShowsData };
};

const latestNewsLoader = async (): Promise<Article[] | undefined> => {
  try {
    const response = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/news/latest');
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
    const response = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/tour');
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
