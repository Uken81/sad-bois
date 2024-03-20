import { camelizeKeys } from 'humps';
import { TourType } from '../../Routes/RouteWrappers/TourWrapper';
import * as yup from 'yup';

export const cameliseShowData = async (show: TourType) => {
  const showTypeSchema = yup.object({
    id: yup.string().required(),
    date: yup.date().required(),
    location: yup.string().required(),
    venue: yup.string().required(),
    ticketStatus: yup
      .mixed<'pending' | 'on sale' | 'postponed' | 'sold-out'>()
      .oneOf(['pending', 'on sale', 'postponed', 'sold-out'])
      .required()
  });

  try {
    const camelisedShow = camelizeKeys(show);
    const validatedData = await showTypeSchema.validate(camelisedShow);

    const newObject: TourType = {
      id: validatedData.id,
      date: validatedData.date,
      location: validatedData.location,
      venue: validatedData.venue,
      ticketStatus: validatedData.ticketStatus
    };

    return newObject;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to camelise products data`);
  }
};
