import { latestNewsLoader } from '../News/DataLoaders/latestNewsLoader';
import { Article } from '../News/DataLoaders/newsLoader';
import { Tour, tourLoader } from '../Tour/tourLoader';

export interface HomepageLoader {
  latestNews: Article[];
  tour: Tour[];
}

export const homepageLoader = async () => {
  const latestNewsData = await latestNewsLoader();
  const tourData = await tourLoader();

  return { latestNewsData, tourData };
};
