import { LoaderFunctionArgs } from 'react-router';
import { Article } from './newsLoader';
import { cameliseArticleData } from './DataLoaderUtils/cameliseArticleData';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';

export const articleLoader = async (loader: LoaderFunctionArgs): Promise<Article | undefined> => {
  try {
    const id = loader.params.id;
    const response = await fetch(`${serverUrl}/news/byId?id=${id}`);
    if (!response.ok) {
      await throwDataError(response);
    }

    const article: Article = await response.json();
    if (Object.keys(article).length === 0) {
      throw new Error('Empty response object');
    }

    const camelisedArticle = await cameliseArticleData(article);

    return camelisedArticle;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred: ', error);
    throw new Error(`${error}`);
  }
};
