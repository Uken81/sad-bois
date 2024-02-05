import { dbBollean } from '../DataLoaders/productsLoader';

export const convertNumberToBoolean = (number: dbBollean) => {
  if (number === 1) {
    return true;
  } else {
    return false;
  }
};
