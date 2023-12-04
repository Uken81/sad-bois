import { Formik, Form } from 'formik';
import { CustomInput } from '../../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../../Components/Forms/SubmitButton';
import { useNavigate, useOutletContext } from 'react-router';
import { useEffect } from 'react';
import { useRepopulateCustomer } from '../../../Hooks/useRepopulateCustomer';
import { saveOrUpdateSessionStorage } from '../../../Utils/saveOrUpdateSessionStorage';
import { CustomerContextType } from '../../RouteWrappers/checkoutWrapper';
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
  const refreshCustomer = useRepopulateCustomer();
  const navigate = useNavigate();
  //Todo: Create more countries and states or use library if possible.
  const countries = ['Australia', 'USA'];
  const states = ['VIC', 'NSW'];

  useEffect(() => {
    if (!customer) {
      refreshCustomer();
    }
  }, []);

  const handleSubmit = async (
    values: DetailsFormType,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    setCustomer(values);
    saveOrUpdateSessionStorage('customer', values);
    navigate('/store/checkout/shipping');
  };

  //Todo: Add validation schema.
  return (
    <main>
      <h4>Contact</h4>
      <Formik
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
