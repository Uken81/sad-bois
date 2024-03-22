import { LoaderFunctionArgs } from 'react-router';
import { Article } from './newsLoader';
import { serverUrl } from '../Server/serverUrl';
import { articleTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { validateParams } from './DataLoaderUtils/validateParams';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { isEmptyObject } from '../Utils/Validation/isEmptyObject';
import { camelizeKeys } from 'humps';
import { validateData } from './DataLoaderUtils/validateData';

export const articleLoader = async (loader: LoaderFunctionArgs): Promise<Article> => {
  try {
    const id = validateParams(loader.params.id);
    const data: Article = await fetchLoaderData(`${serverUrl}/news/byId?id=${id}`);
    if (isEmptyObject(data)) {
      throw new Error('Error: Empty response.');
    }
    const camelisedData = camelizeKeys(data) as Article;
    const validatedArticle = await validateData(camelisedData, articleTypeSchema);

    return validatedArticle;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred: ', error);
    throw new Error(`${error}`);
  }
};
