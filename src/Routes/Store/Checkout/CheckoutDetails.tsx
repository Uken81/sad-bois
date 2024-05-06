import { Formik, Form } from 'formik';
import { CustomInput } from '../../../Components/FormComponents/Inputs/CustomInput';
import { SubmitButton } from '../../../Components/FormComponents/SubmitButton';
import { useNavigate } from 'react-router';

import { updateSessionStorage } from '../../../Utils/saveOrUpdateSessionStorage';
import * as Yup from 'yup';
import { useStore } from '../../../Stores/useStore';

interface DetailsFormType {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  apartment: string;
  suburb: string;
  state: string;
  postcode: string;
}

export const CheckoutDetails = () => {
  const customer = useStore((state) => state.customerState.customer);
  const updateCustomer = useStore((state) => state.customerState.updateCustomer);
  const navigate = useNavigate();
  const countries = ['Australia'];
  const states = ['VIC', 'NSW', 'QLD', 'SA', 'WA', 'TAS', 'ACT', 'NT'];

  const handleSubmit = async (values: DetailsFormType, setSubmitting: (isSubmitting: boolean) => void) => {
    updateCustomer(values);
    updateSessionStorage('customer', values);
    setSubmitting(false);
    navigate('/store/checkout/shipping');
  };

  const detailsFormSchema = Yup.object().shape({
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

  return (
    <main className="flex">
      <Formik
        validationSchema={detailsFormSchema}
        initialValues={{
          email: customer?.email ?? 'test@testmail.com',
          country: customer?.country ?? 'Australia',
          firstName: customer?.firstName ?? 'Test',
          lastName: customer?.lastName ?? 'User',
          address: customer?.address ?? '123 Test Street',
          apartment: customer?.apartment ?? '',
          suburb: customer?.suburb ?? 'Pretendville',
          state: customer?.state ?? 'VIC',
          postcode: customer?.postcode ?? '0000'
        }}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(formik) => (
          <Form className="flex w-full flex-col items-center justify-center">
            <h2 className="text-h2 font-h2">Contact</h2>
            <CustomInput name="email" type="email" placeholder="Email" />
            <h2 className="my-2 text-h2 font-h2">Shipping address</h2>
            <CustomInput name="country" as="select" placeholder="Country">
              {countries.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </CustomInput>
            <CustomInput name="firstName" placeholder="First Name" />
            <CustomInput name="lastName" placeholder="Last Name" />
            <CustomInput name="address" type="address" placeholder="Shipping Adress" />
            <CustomInput name="apartment" placeholder="Apartment, suite, etc. (optional)" />
            <CustomInput name="suburb" placeholder="Suburb" />
            <CustomInput name="state" as="select" placeholder="State">
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
