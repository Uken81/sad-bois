//is this the right place for this interface???
export interface Article {
  id: string;
  img: string;
  date: Date;
  title: string;
  text: string;
}
export const newsLoader = async (): Promise<Article[]> => {
  const response = await fetch(`http://localhost:2001/news`);
  const news: Article[] = await response.json();
  //delete below just a test
  const article = news[0];
  //     const converted = format(article.date, 'MM/dd/yyyy;');
  console.log('arttty', typeof article.date);
  //   console.log('con', converted);

  return news;
};
