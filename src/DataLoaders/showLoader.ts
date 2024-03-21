import { LoaderFunctionArgs } from 'react-router';
import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
import { cameliseAndValidate } from './DataLoaderUtils/cameliseAndValidate';
import { showTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';

export const showLoader = async (loader: LoaderFunctionArgs): Promise<TourType | undefined> => {
  try {
    const id = loader.params.id;
    if (typeof id === 'undefined') {
      throw new Error('Show ID was not provided');
    }

    const response = await fetch(`${serverUrl}/tour/byId?id=${id}`);
    if (!response.ok) {
      throwDataError(response);
    }

    const selectedShow = await response.json();
    if (!Object.keys(selectedShow).length) {
      throw new Error('Empty response object');
    }

    // const camelisedShow = await cameliseShowData(selectedShow);
    const camelisedShow = await cameliseAndValidate(selectedShow, showTypeSchema);
    console.log('camelisedShow', camelisedShow);

    return camelisedShow;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
