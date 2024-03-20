import { LoaderFunctionArgs } from 'react-router';
import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
import { cameliseShowData } from './DataLoaderUtils/CameliseShowData';

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

    const camelisedShow = await cameliseShowData(selectedShow);

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
