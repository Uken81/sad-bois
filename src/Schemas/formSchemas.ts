import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  username: Yup.string().min(2, 'Must be 2 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
  password: Yup.string().min(5, 'Must be at least 5 characters').max(200, 'Must be 200 characters or less').required('Required'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .max(200, 'Must be 200 characters or less')
    .required('Required')
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(5, 'Must be at least 5 characters').max(200, 'Must be 200 characters or less').required('Required')
});

export const customerValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  country: Yup.string().required('Country is required'),
  address: Yup.string().required('Address is required'),
  apartment: Yup.string(),
  suburb: Yup.string().required('Suburb is required'),
  state: Yup.string().required('State is required'),
  postcode: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .required('Post Code is required')
});

export const paymentValidationSchema = Yup.object().shape({
  cardNumber: Yup.string().length(16, 'Card number must be 16 digits').required('Card number is required'),
  nameOnCard: Yup.string().required('Name on card is required'),
  expirationDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiration date')
    .required('Expiration date is required'),
  securityCode: Yup.string().length(3, 'Security code must be 3 digits').required('Security code is required')
});
