export interface Article {
  id: string;
  img: string;
  date: string;
  title: string;
  text: string;
}
export const newsLoader = async (): Promise<Article[]> => {
  const response = await fetch(`http://localhost:2001/news`);
  const news: Article[] = await response.json();

  return news;
};
