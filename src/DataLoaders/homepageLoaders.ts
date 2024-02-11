import { DataError } from '../Types/loaderTypes';
import { cameliseNewsData } from './DataLoaderUtils/cameliseNewsData';
import { cameliseTourData } from './DataLoaderUtils/cameliseTourData';
import { Article } from './newsLoader';
import { TourType } from './tourLoader';

export interface HomepageLoader {
  latestNewsData: Article[] | undefined;
  latestShowsData: TourType[] | undefined;
}

export const homepageLoader = async () => {
  const latestNewsData = await latestNewsLoader();
  const latestShowsData = await latestShowLoader();

  return { latestNewsData, latestShowsData };
};

const latestNewsLoader = async (): Promise<Article[] | null | undefined> => {
  try {
    const response = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/news/latest');
    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching latest news: ${data.error}`);
      return;
    }

    const latestNews: Article[] = await response.json();
    const camelisedLatestNews = cameliseNewsData(latestNews);

    return camelisedLatestNews;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return null;
    }

    console.error('An unexpected error occurred:', error);
    return null;
  }
};

export const latestShowLoader = async (): Promise<TourType[] | null | undefined> => {
  try {
    const response = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/tour/latest');
    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching latest news: ${data.error}`);
      return;
    }

    const latestShows: TourType[] = await response.json();
    const camelisedLatestShows = cameliseTourData(latestShows);

    return camelisedLatestShows;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error}`);
      return null;
    }

    console.error('An unexpected error occurred:', error);
    return null;
  }
};
