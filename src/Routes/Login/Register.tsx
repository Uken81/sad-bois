import { useNavigate } from 'react-router';

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { CustomInput, FormError } from '../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import './Login.scss';
import { useState } from 'react';

interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
}

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<FormError | undefined>(undefined);

  const initialValues = { email: '', username: '', password: '', confirmedPassword: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    username: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be 200 characters or less')
      .required('Required'),
    confirmedPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .max(200, 'Must be 200 characters or less')
      .required('Required')
  });

  const handleSubmit = (
    values: RegisterFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log('values', values);
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };

    fetch('http://localhost:2001/auth/register', requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log('res1: ', response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      //should I create interface for data?
      .then((data) => {
        console.log('data: ', data);
        if (!data.success) {
          setError({ type: data.type, message: data.message });
          setSubmitting(false);
          return;
        }
        setSubmitting(false);
        navigate('/');
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const isEmailError = error && error.type === 'email';
  const isPasswordError = error && error.type === 'password';

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <Form>
          <div className="input-fields">
            <CustomInput
              name="email"
              type="email"
              label="Email"
              error={isEmailError ? error.message : undefined}
            />
            <CustomInput name="username" type="text" label="Username" error={undefined} />
            <CustomInput
              name="password"
              type="password"
              label="Password"
              error={isPasswordError ? error.message : undefined}
            />
            <CustomInput
              name="confirmedPassword"
              type="password"
              label="Confirm Password"
              error={isPasswordError ? error.message : undefined}
            />
            <SubmitButton isSubmitting={formik.isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};
