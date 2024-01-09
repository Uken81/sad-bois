import { Formik, Form } from 'formik';
import { CustomInput } from '../../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../../Components/Forms/SubmitButton';
import { useNavigate, useOutletContext } from 'react-router';
import { useEffect } from 'react';
import { saveOrUpdateSessionStorage } from '../../../Utils/saveOrUpdateSessionStorage';
import { CustomerContextType } from '../../RouteWrappers/checkoutWrapper';
import { useGetCustomer } from '../../../Hooks/useGetCustomer';
import * as Yup from 'yup';

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
    <main className="flex ">
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
          <Form className="flex w-full flex-col items-center justify-center text-center">
            <h3 className="text-h3">Contact</h3>
            <CustomInput name="email" type="email" placeholder="Email" />
            {/* <CustomInput
              name="emailoffers"
              type="checkbox"
              placeholder="Email me with news and offers"
            /> */}

            <h3 className="my-2 text-h3">Shipping address</h3>
            <CustomInput name="country" as="select" placeholder="Country">
              {countries.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </CustomInput>

            <CustomInput name="firstname" placeholder="First Name" />
            <CustomInput name="lastname" placeholder="Last Name" />
            <CustomInput name="address" type="address" placeholder="Shipping Adress" />
            <CustomInput name="apartment" placeholder="Apartment, suite, etc. (optional)" />
            <CustomInput name="suburb" placeholder="Suburb" />
            <CustomInput name="state" as="select" placeholder="Country">
              {states.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </CustomInput>
            <CustomInput name="postcode" type="number" placeholder="Post Code" />
            <div className="my-4">
              <SubmitButton isSubmitting={formik.isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
