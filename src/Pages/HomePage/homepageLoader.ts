import { latestNewsLoader } from '../News/DataLoaders/latestNewsLoader';
import { Article } from '../News/DataLoaders/newsLoader';
import { latestShowLoader } from '../Tour/DataLoaders/latestShowLoader';
import { Tour } from '../Tour/DataLoaders/tourLoader';

export interface HomepageLoader {
  latestNewsData: Article[];
  latestShowsData: Tour[];
}

export const homepageLoader = async () => {
  const latestNewsData = await latestNewsLoader();
  const latestShowsData = await latestShowLoader();

  return { latestNewsData, latestShowsData };
};
