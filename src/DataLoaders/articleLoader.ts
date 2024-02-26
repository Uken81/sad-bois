import { LoaderFunctionArgs } from 'react-router';
import { Article } from './newsLoader';
import { DataError } from '../Types/errorTypes';
import { cameliseArticleData } from './DataLoaderUtils/cameliseArticleData';
import { serverUrl } from '../Server/serverUrl';

export const articleLoader = async (loader: LoaderFunctionArgs): Promise<Article | undefined> => {
  const id = loader.params.id;

  try {
    const response = await fetch(`${serverUrl}/news/byId?id=${id}`);
    if (!response.ok) {
      const dataError: DataError = await response.json();
      console.error(`Error fetching article: ${dataError.message}`);
      throw new Error(`HTTP error! ${dataError.message}`);
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
