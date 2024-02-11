import { LoaderFunctionArgs } from 'react-router';
import { Article } from './newsLoader';
import { DataError } from '../Types/loaderTypes';
import { cameliseArticleData } from './DataLoaderUtils/cameliseArticleData';

export const articleLoader = async (loader: LoaderFunctionArgs): Promise<Article | undefined> => {
  const id = loader.params.id;

  try {
    const response = await fetch(
      `https://sad-bois-backend-637e57975bd5.herokuapp.com/news/byId?id=${id}`
    );
    if (!response.ok) {
      const data: DataError = await response.json();
      console.error(`Error fetching article: ${data.error}`);
      throw new Error(`HTTP error! ${data.error}`);
    }

    const article: Article = await response.json();
    const camelisedArticle = await cameliseArticleData(article);

    return camelisedArticle;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
