import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { serverUrl } from '../Server/serverUrl';
import { isEmptyArray } from '../Utils/Validation/isEmptyArray';
import { newsTypeSchema, tourTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { validateData } from './DataLoaderUtils/validateData';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { Article } from './newsLoader';
import { camelizeKeys } from 'humps';

export interface HomepageLoader {
  latestNewsData: Article[] | undefined;
  latestShowsData: TourType[] | undefined;
}

export const homepageLoader = async () => {
  const latestNewsData = await latestNewsLoader();
  const latestShowsData = await latestShowLoader();

  return { latestNewsData, latestShowsData };
};
const latestNewsLoader = async (): Promise<Article[] | null> => {
  try {
    const data: Article[] = await fetchLoaderData(`${serverUrl}/news/latest`);
    if (isEmptyArray(data)) {
      return null;
    }

    const camelisedData = camelizeKeys(data) as Article[];
    const latestNews = await validateData(camelisedData, newsTypeSchema);

    return latestNews;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return null;
    }

    console.error('An unexpected error occurred:', error);
    return null;
  }
};

export const latestShowLoader = async (): Promise<TourType[] | null> => {
  try {
    const data: TourType[] = await fetchLoaderData(`${serverUrl}/tour/latest`);
    if (isEmptyArray(data)) {
      return null;
    }

    const camelisedData = camelizeKeys(data) as TourType[];
    const latestShows = await validateData(camelisedData, tourTypeSchema);

    return latestShows;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return null;
    }

    console.error('An unexpected error occurred:', error);
    return null;
  }
};
