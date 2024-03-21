import { LoaderFunctionArgs } from 'react-router';
import { Article } from './newsLoader';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
import { cameliseAndValidate } from './DataLoaderUtils/cameliseAndValidate';
import { articleTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { validateParams } from './DataLoaderUtils/validateParams';

export const articleLoader = async (loader: LoaderFunctionArgs): Promise<Article> => {
  try {
    const id = validateParams(loader.params.id);

    const response = await fetch(`${serverUrl}/news/byId?id=${id}`);
    if (!response.ok) {
      await throwDataError(response);
    }

    const article: Article = await response.json();
    if (!Object.keys(article).length) {
      throw new Error('Error: Empty response object');
    }

    const camelisedArticle = await cameliseAndValidate(article, articleTypeSchema);

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
