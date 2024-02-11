import { camelizeKeys } from 'humps';
import * as yup from 'yup';
import { TourType } from '../tourLoader';

export const cameliseTourData = async (tour: TourType[]) => {
  const TourTypeSchema = yup.array().of(
    yup.object({
      id: yup.string().required(),
      date: yup.date().required(),
      location: yup.string().required(),
      venue: yup.string().required(),
      ticketStatus: yup
        .mixed<'pending' | 'onsale' | 'postponed'>()
        .oneOf(['pending', 'onsale', 'postponed'])
        .required()
    })
  );

  try {
    const camelisedTour = camelizeKeys(tour);
    const validatedData = await TourTypeSchema.validate(camelisedTour);

    if (!validatedData) {
      throw new Error('validatedData is undefined');
    }

    const newArray: TourType[] = validatedData.map((item: TourType) => ({
      id: item.id,
      date: item.date,
      location: item.location,
      venue: item.venue,
      ticketStatus: item.ticketStatus
    }));

    return newArray;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise tour data`);
  }
};
