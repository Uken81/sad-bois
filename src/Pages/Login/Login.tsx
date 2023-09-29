import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormError, TextInput } from '../../Components/Forms/Inputs/TextInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<FormError | undefined>(undefined);

  //Todo: Change these inital values to test user when about to publish.
  const initialValues = { email: 'brendanhurd@gmail.com', password: '12345' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be 200 characters or less')
      .required('Required')
  });

  const handleSubmit = (
    values: LoginFormValues,
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

    fetch('http://localhost:2001/auth/login', requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log('res1: ', response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data);
        if (!data.success) {
          console.log('!success');
          setError({ type: data.type, message: data.message });
          setSubmitting(false);
          return;
        }
        console.log('login success!@!');
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(formik) => (
          <Form>
            <div className="input-fields">
              <TextInput
                name="email"
                type="email"
                label="Email"
                error={isEmailError ? error.message : undefined}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                error={isPasswordError ? error.message : undefined}
              />
              <SubmitButton isSubmitting={formik.isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
      <Link to="/register">Register</Link>
    </>
  );
};
