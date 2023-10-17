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

const latestNewsLoader = async (): Promise<Article[]> => {
  const response = await fetch('http://localhost:2001/news/latest');
  const latest: Article[] = await response.json();

  return latest;
};

export const latestShowLoader = async () => {
  const response = await fetch('http://localhost:2001/tour/latest');
  const shows = response.json();

  return shows;
};
