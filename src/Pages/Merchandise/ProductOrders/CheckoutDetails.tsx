import { Formik, Form } from 'formik';
import { CustomInput } from '../../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../../Components/Forms/SubmitButton';
// import { useNavigate } from 'react-router';
import './checkout.scss';
//change this to current form
interface LoginFormValues {
  email: string;
  emailoffers: boolean;
  country: string;
  firstname: string;
  lastname: string;
  address: string;
  apartment: string;
  suburb: string;
  state: string;
  postcode: string;
}

export const CheckoutDetails = () => {
  // const navigate = useNavigate();
  //Todo: Create more countries and states or use library if possible.
  const countries = ['Australia', 'USA'];
  const states = ['VIC', 'NSW'];

  const handleSubmit = (
    values: LoginFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    //Todo: Create customer and send to db.
    // navigate('/shipping');
    console.log('values', values);
  };

  //Todo: Add validation schema.
  return (
    <main>
      <h4>Contact</h4>
      <Formik
        initialValues={{
          email: '',
          emailoffers: false,
          country: 'Australia',
          firstname: '',
          lastname: '',
          address: '',
          apartment: '',
          suburb: '',
          state: 'VIC',
          postcode: ''
        }}
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
