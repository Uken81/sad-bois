import { Article } from './NewsPage';

export const newsLoader = async (): Promise<Article[]> => {
  const response = await fetch(`http://localhost:2001/news`);
  const news: Article[] = await response.json();

  return news;
};
