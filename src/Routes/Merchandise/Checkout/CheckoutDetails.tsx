import { Formik, Form } from 'formik';
import { CustomInput } from '../../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../../Components/Forms/SubmitButton';
import { useNavigate, useOutletContext } from 'react-router';
import { useEffect } from 'react';
import { saveOrUpdateSessionStorage } from '../../../Utils/saveOrUpdateSessionStorage';
import { CustomerContextType } from '../../RouteWrappers/checkoutWrapper';
import { useGetCustomer } from '../../../Hooks/useGetCustomer';
import * as Yup from 'yup';
import './checkout.scss';

interface DetailsFormType {
  email: string;
  emailoffers: boolean;
  firstname: string;
  lastname: string;
  country: string;
  address: string;
  apartment: string;
  suburb: string;
  state: string;
  postcode: string;
}

export const CheckoutDetails = () => {
  const { customer, setCustomer } = useOutletContext() as CustomerContextType;
  const getCustomer = useGetCustomer();

  const navigate = useNavigate();
  const countries = ['Australia'];
  const states = ['VIC', 'NSW', 'QLD', 'SA', 'WA', 'TAS', 'ACT', 'NT'];

  useEffect(() => {
    if (!customer) {
      const retrievedCustomer = getCustomer();
      setCustomer(retrievedCustomer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (
    values: DetailsFormType,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    setCustomer(values);
    saveOrUpdateSessionStorage('customer', values);
    setSubmitting(false);
    navigate('/store/checkout/shipping');
  };

  const detailsFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    emailoffers: Yup.boolean(),
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
    apartment: Yup.string(),
    suburb: Yup.string().required('Suburb is required'),
    state: Yup.string().required('State is required'),
    postcode: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Post Code is required')
  });

  return (
    <main>
      <h4>Contact</h4>
      <Formik
        validationSchema={detailsFormSchema}
        initialValues={{
          email: customer?.email ?? '',
          emailoffers: customer?.emailoffers ?? false,
          country: customer?.country ?? 'Australia',
          firstname: customer?.firstname ?? '',
          lastname: customer?.lastname ?? '',
          address: customer?.address ?? '',
          apartment: customer?.apartment ?? '',
          suburb: customer?.suburb ?? '',
          state: customer?.state ?? 'VIC',
          postcode: customer?.postcode ?? ''
        }}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(formik) => (
          <Form>
            <h4>Contact</h4>
            <CustomInput name="email" type="email" label="Email" />
            <CustomInput name="emailoffers" type="checkbox" label="Email me with news and offers" />

            <h4>Shipping address</h4>
            <CustomInput name="country" as="select" label="Country">
              {countries.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </CustomInput>

            <CustomInput name="firstname" label="First Name" />
            <CustomInput name="lastname" label="Last Name" />
            <CustomInput name="address" type="address" label="Shipping Adress" />
            <CustomInput name="apartment" label="Apartment, suite, etc. (optional)" />
            <CustomInput name="suburb" label="Suburb" />
            <CustomInput name="state" as="select" label="Country">
              {states.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </CustomInput>
            <CustomInput name="postcode" type="number" label="Post Code" />
            <SubmitButton isSubmitting={formik.isSubmitting} />
          </Form>
        )}
      </Formik>
    </main>
  );
};
