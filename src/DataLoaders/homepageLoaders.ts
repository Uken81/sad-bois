import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
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
    const response = await fetch(`${serverUrl}/news/latest`);
    if (!response.ok) {
      await throwDataError(response);
    }

    const latestNews: Article[] = await response.json();
    if (!latestNews.length) {
      return null;
    }

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
    const response = await fetch(`${serverUrl}/tour/latest`);
    if (!response.ok) {
      await throwDataError(response);
    }

    const latestShows: TourType[] = await response.json();
    if (!latestShows.length) {
      return null;
    }

    const camelisedLatestShows = cameliseTourData(latestShows);

    return camelisedLatestShows;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return null;
    }

    console.error('An unexpected error occurred:', error);
    return null;
  }
};
