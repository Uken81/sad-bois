import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { CustomInput } from '../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { useState } from 'react';
import './Login.scss';
import { ErrorMessage, FormDataErrorType, FormErrorType } from '../../Components/ErrorMessage';

interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
}

export const Register: React.FC = () => {
  const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (
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

    try {
      const response = await fetch('http://localhost:2001/auth/register', requestOptions);

      if (!response.ok) {
        const data: FormDataErrorType = await response.json();
        console.log('dat', data.type);
        if (data.type === 'duplicateEmail') {
          const registeredEmail = values.email;
          navigate(`/login/${registeredEmail}`);
        }

        setError({ type: data.type, message: data.message });
        setSubmitting(false);

        throw new Error('Network response was not ok');
      }
      setSubmitting(false);
      //TODO: need to show error to user
      navigate('/');
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setError({ type: 'network', message: 'Network error: Failed to connect' });
        setSubmitting(false);
        return;
      }

      if (error instanceof Error) {
        console.error('error: ', error);
        setSubmitting(false);
        return;
      }

      console.error('An unexpected error occurred:', error);
      setSubmitting(false);
    }
  };

  const isEmailError = error && error.type === 'email';
  const isPasswordError = error && error.type === 'password';
  const isNetworkError = (error && error.type === 'network') || false;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <Form>
          <ErrorMessage
            display={isNetworkError}
            variant="danger"
            message={error?.message ?? null}
            setError={setError}
          />
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
