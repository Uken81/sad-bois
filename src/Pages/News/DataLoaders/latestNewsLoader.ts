import { Article } from './newsLoader';

export const latestNewsLoader = async (): Promise<Article[]> => {
  const response = await fetch('http://localhost:2001/news/latest');
  const latest: Article[] = await response.json();

  return latest;
};
