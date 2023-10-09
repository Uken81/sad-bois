import { LoaderFunctionArgs } from 'react-router';
import { Article } from './NewsPage';

export const articleLoader = async (loader: LoaderFunctionArgs): Promise<Article> => {
  const id = loader.params.id;
  const response = await fetch(`http://localhost:2001/news/byId?id=${id}`);
  const article: Article = await response.json();
  //   const selectedArticle = articles[0];

  //   return selectedArticle;
  return article;
};
