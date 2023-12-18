import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { CustomInput } from '../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../Components/Forms/SubmitButton';
import { useState } from 'react';
import { ErrorMessage, FormErrorType } from '../../Components/ErrorMessage';

interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
}

export const Register: React.FC = () => {
  const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();

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
        const data: FormErrorType = await response.json();
        if (data.type === 'duplicateEmail') {
          const registeredEmail = values.email;
          navigate(`/login/${registeredEmail}`);
        }

        setError({ type: data.type, message: data.message });
        setSubmitting(false);

        throw new Error('Network response was not ok');
      }
      setSubmitting(false);
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

  const isEmailError = error?.type === 'email';
  const isPasswordError = error?.type === 'password';
  const isNetworkError = error?.type === 'network' || false;

  const backgroundGradient = 'bg-gradient-to-b from-black to-gray-600';
  return (
    <Formik
      initialValues={{ email: '', username: '', password: '', confirmedPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <div className={`flex flex-col p-2 ${backgroundGradient} h-screen`}>
          <div className="flex items-center h-1/2 mb-3">
            <img src="../public/Assets/logo1.png" className="mx-auto"></img>
          </div>
          <div className="md:mx-56 ">
            <Form className="form-control h-fit ">
              <ErrorMessage
                display={isNetworkError}
                variant="danger"
                message={error?.message ?? null}
                setError={setError}
              />
              <h1 className="text-center">Sign Up</h1>
              <div className="flex flex-col justify-center items-center">
                <CustomInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  error={isEmailError ? error.message : undefined}
                />
                <CustomInput name="username" type="text" placeholder="Username" error={undefined} />
                <CustomInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  error={isPasswordError ? error.message : undefined}
                />
                <CustomInput
                  name="confirmedPassword"
                  type="password"
                  placeholder="Confirm Password"
                  error={isPasswordError ? error.message : undefined}
                />
                <SubmitButton isSubmitting={formik.isSubmitting} />
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
